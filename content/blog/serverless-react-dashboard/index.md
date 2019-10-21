---
title: Serverless dashboards 🤯
date: "2019-10-21T00:00:00.000Z"
---

One of the really cool parts of Snapboard is the ability to create your own custom cards - using React and serverless NodeJS in our in-built editor. We also support installing ANY library on NPM, which makes it super powerful.

And because each card is bundled separately - you can easily embed them anywhere (like below).

<iframe width='380' height='350' src='https://www.snapboard.io/embed/2K0JxrPtYyJRCRYZL0UC' frameBorder='0' allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture' allowFullScreen></iframe>

Here’s a quick summary of how we got it all working.

***BTW, if you’re into this kind of stuff - maybe you’d like to [come join us - we’re hiring!](https://discuss.snapboard.io/t/were-hiring/16)*** 🚀

### Step 1: A high level plan
The first thing I needed to do, was decide what would make up the card. I wanted to keep things really simple, so I decided that a card would be made up from just 3 source files:

#### Client side

1. `card.js`  - would be the React component file
2. `styles.css` - would allow the user to provide `css` or `sass` styles

#### Server side (run on serverless)

3. `server.js` - would take care of getting any data required

I did consider not having a server-side component at all, as the user could make requests directly from the browser - but that came with a whole load of problems - how do we safely pass credentials, how do we protect against rate limits, how do we apply push updates? Because of these, I went for both a client and server side approach.

Both the client side and serverless code would need to be bundled separately - so that was the next step.


### Step 2: Bundling the client-side code

The client side bundle would consist of 2 files and any dependencies requested by the user. I decided to use webpack, as I already used it in my other projects.

The key challenge here though was figuring out how I would load the custom user bundle into the “card wrapper”.  The “card wrapper” would be responsible for loading any user’s custom bundle and communicating with a parent (so we can push data updates from `server.js`).

That’s actually not as easy as it sounds, because normally when you compile using webpack, you have all the code and dependencies available at compile time - in this case I won’t.

After a bit of looking around, I found webpack has an option to use `libraryTarget: 'var'`, which enables you to export a chunk of code and have it be assigned to a window object (e.g. `window. libraryExample`). I could then just look for that global property from within “card wrapper”. Normally, exposing a global variables is a no-no, and it did feel kind of dirty - but it works!

The other thing I wanted to do, was to avoid bundling React with users’s code. Because if you have a page full of cards, you’d end up downloading React multiple times - which is a waste of time! I used the `externals` option for this.
 
Here’s the final webpack code. It ended up being pretty simple - but took some time to find the options I needed. Using the code below, I was able to bundle up a demo, and see the first version of the client side bundle working - hurrah 🎉!

```js
const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const OUT_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: {
    index: path.resolve(SRC_DIR, 'index.js')
  },
  externals: {      
    // Don't bundle react or react-dom      
    react: "React",      
    "react-dom": "ReactDOM"
  },
  output: {
    path: OUT_DIR,
    filename: 'lib.js',
    libraryTarget: 'var',
    library: 'libraryExample'
  },
  resolve: {
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  }
};

module.exports = config;
```


### Step 3: Server-side

I wanted to have each users code deployed to an AWS Lambda function - that would ensure complete isolation and security when running the custom code. The service would be given no permissions at all to do anything else in AWS - and I wouldn’t run anything else in that account just in case!

I also wanted to allow the use of ES6 syntax, because writing standard Javascript is super annoying. For that, I just needed to use the core babel service, and it was pretty simple to get that working - thanks to the [solid documentation]([B) on their website.

This is literally all you need!
```js
require("babel-core").transform("code", options);
```

This time, there was no need to bundle the dependencies, as we’re working server-side - so I would just install them when deploying the code to AWS.

### Step 4: Deploying users code

So the previous two steps got a basic demo working, and the code in the format I needed - but I still needed a way to build and deploy both the client and server side code on demand when the user “publishes” their card.

The code that runs this deployment process also runs on AWS Lambda (I know I said nothing else runs in that account, well actually this does - but honestly, nothing else!).

The only gotcha’s when running step 2 and 3 on AWS (as compared with my laptop), was that AWS only lets you write to a specific directory called `/tmp`, so I had to use that as the output for the webpack and babel output.

After step 2 completes, I push the bundled code into a storage bucket on GCP (I run most of my other stuff on GCP, so somehow this made sense).

And after step 3, I zip up the server code and send it over to AWS using their Lambda `createFunction` API.

```js
import AWS from 'aws-sdk'

const lambda = new AWS.Lambda({ apiVersion: '2015-03-31' })
lambda.createFunction({ ... })
```


### Step 5: Creating the card wrapper

The final step is creating a thin-wrapper that will download and run any user’s bundled code. This is the code that runs in the iframe, and orchestrates the loading of the component bundle, and calling the server side function.

I created this using `npx create-react-app`, and then added a very small amount of code to:
	1. Make a request to the serverless function
	2. Wait for the bundle to download and then pass in props to component

Our component load script looks something like this:

```js
async function loadScript () {
  const cardId = getUrlParameter('cardId')
  const s = document.createElement("script")
  s.type = "text/javascript"
  s.src = "https://cmp.snapboard.io/cmp-" + cardId + ".js"
  document.getElementById('head').append(s)
  return new Promise((resolve) => {
    s.onload = resolve
  })
}
```


### Conclusion
And that’s it - we now have isolated, user deployable, serverless functions and react components. Pretty neat! 🎉

We also created an online editor to allow users to submit their own code - but that’s a story for another day! If you want to check it out, you can use the button below to create your own card!

<a href='/editor/new'>
  <button style="cursor: pointer; color: #fff; background-color: #007bff; border-color: #007bff; padding: .375rem .75rem; font-size: 1rem; line-height: 1.5; border-radius: .25rem; margin-bottom: 1em;">Create Custom Card</button>
</a>

***Also, another reminder that [we’re hiring!](https://discuss.snapboard.io/t/were-hiring/16)*** 😉

Any questions - you can ping me on calum@snapboard.io.
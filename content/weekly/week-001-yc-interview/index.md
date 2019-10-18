---
title: YC Interview Invite!
date: "2019-10-17T00:00:00.000Z"
description: I got a YC interview, so taking a step back to review where I am and next steps!
week: 1
status: In Progress
emoji: 🎉
toc: Plan,Day 1,Day 2
image: ./yc-interview-invite.png
---


I've applied to [YC](https://ycombinator.com) 3 times before, and this is the first time I've been invited for interview. Below you can see the interview invite email (isn't it beautiful). Yes, this is only the first step in getting accepted, but it does feel like a new milestone! My interview is on 7th Nov 2019 - so lots to pack in before then!

![YC Interview Invite](./yc-interview-invite.png "YC Interview Invite")


## Weekly Plan

The key goals for this week are to:

  - [ ] Talk to 3 users (and build specific boards for them)
  - [ ] Create 40 new cards / integrations
  - [ ] Start testing 3 [“Traction”](https://www.amazon.co.uk/Traction-Startup-Achieve-Explosive-Customer/dp/0241242533) growth channels
  - [ ] Setup public Snapboard metrics page - so I can better track changes
  - [ ] Update website and blog


## Weekly Review

*I'll update this at the end of the week! 👍🏽*


## Daily Log

### Day 1
Thursday, 17 October 2019: 🌦 14° - Light rain showers and a gentle breeze

Today I got the invite for YC, so I've been planning how to make a splash. Obviously feeling pretty motivated - so going to see if I can use that to be extra productive today.

  - [x] Created the plan
  - [x] Create a discussion forum for Snapboard
  - [x] Re-start the blog under Snap/Blog (the one you're reading right now!)
  - [x] Updates to the integration page for Snapboard
  - [ ] Updates to the homepage for Snapboard

Not a bad day - got most of the stuff I wanted to do done, and although the website still needs updating (it hasn't changed since first launch 😅), it's less of a priority so it's going to get parked for now.


### Day 2
Friday, 18 October 2019: 🌦 14° - Light rain showers and a moderate breeze

  - [x] Speak to 1 user
  - [ ] Decide on my first 3 traction channels / what type of users to target
  - [ ] Add 10 new cards / integrations
  - [ ] Start Facebook approval (really complex review process 🙄)
  - [ ] Public Snapboard metrics page
  - [ ] Updates to the homepage for Snapboard
  - [ ] Improve capturing of analytics events - so I can better understand user actions


#### Which users should I target?

I've seen all of the following groups on Snapboard so far, but I need to have more focus to make the product better for a specific group, and then I can scale to others later.

  1. Marketing guy/gal - uses quite a few different apps: Adwords, Social, Google Analytics, etc. Possibly not as tech savvy, will rely more on the pre-made cards being what they need. Could drive more support requests too.

  2. Start-up founders (early stage) - this is an active group, and one likely to give me a lot of feedback and invest in the product. They probably have more apps as they're managing/covering a bigger area (e.g. start up founders do a bit of everything). I'm also part of this group (and already know quite a few others in this group), which makes it attractive. Possibly less likely to pay? 

  3. Teams - this is probably too broad a group to be considered an option right now, but definitely something we will want to cater specifically for in the future - when we understand more about the different types of teams using it.

  4. Agencies - the decision maker (who runs the agency) might not be as tech savvy, but possibly someone who works for them might be. High conviction to pay if we get them something they want - as they'll often share boards with their clients. They might be better served by existing dashboards than other groups though?

  5. E-commerce - often work through an agency for this type of reporting (although not exclusively), so overlap with the above. Main focus would be on Shopify and other e-commerce platforms, but also has fairly strong links to marketing (as they're keen to understand attribution of sales).


The key things to evaluate when picking the group to target is:

  1. How easily can I access this market - do I already know people/communities?
  2. How likely are they to pay?
  3. How invested would they be in the product? Would they become ambassadors?
  4. How technical the group is - would they be able to validate the more advanced features (e.g. formula)?

Based on this, the main group I've decided to target is: **Start-up founders (early stage)**. 

The biggest draw back here, is their likelihood to pay. That said, if we can make it work for start-up founders, then I think we will be able to transition into teams and businesses. Also, if we can make these guys pay - that's a very good sign!


#### What marketing channels should I use?

Based on the above - I've decided the 3 traction channels I'm going to try first are. They will get a 2 week period starting on *Monday 21 October* to determine which to focus on:

  1. Integrate with Existing Platforms - this is a bit of a no brainer as Snapboard is almost entirely built on integrations! I need to think about what platforms my target group will be on. 🤔

  2. Direct Mail - contact people directly who I think might be interested in having a board. ProductHunt, Startup School, etc. Don't want this to be spammy, so need to think carefully how to implament this.

  3. Community - where do start-up founders hang-out? Start-up school, IndieHackers, Slack communities, Quora?

I'll be measuring these on hits to the website and conversion to signup. **TODO:** need to make sure there is a way for me to measure this.


#### What kinds of cards would Start-up founders be most interested in?

  1. Server metrics - a simple look at how your website is performing - could also involve DBs (how many records in a queue, uptime stats, total number of errors)
  2. Website/user analytics - Google Analytics, Mixpanel, Amplitude, Segment
  3. Conversions and financial metrics - Stripe for MRR, Paypal, Podio
  4. Costs and spend - in particular server costs, but any other variables too
  5. List of customers, e-mail address and possibly status (paying / non-paying) - most likely from a DB
  6. Support requests - some metrics on how many tickets - would be much more interesting if we could do this by category! E.g. 20% of support requests are for password reset.


#### Feedback from User 1

Founder - SaaS / Video

1. Interested in usage metrics - 
    * New visitors to the site - Google Analytics
    * Users who render a video - Mixpanel
    * New paid users - Stripe
2. Number of failures - Google Cloud / DB
3. Being able to restart servers - Google Cloud / DB
4. Resetting passwords (as currently have to go into DB) - DB
5. Check if user is on paid plan - DB / Stripe

They use the following apps:

 * Google Cloud
 * Postgres
 * Mailgun
 * Mailchimp
 * Mixpanel
 * Netlify
 * Heroku
 * Bitbucket
 * Sentry
---
title: Make more cards
date: "2019-10-24T00:00:00.000Z"
description: Need to increase the speed of creating new cards to increase engagement.
week: 2
score: In Progress
emoji: 🃏
toc: Plan,Day 1,Day 2
image: ./beer.png
---

Last week went well, but the major focus has to be on creating more cards, more quickly. In addition, these remain my top priorities:

 1. Cards - adding new integrations and cards
 2. Marketing - getting people to visit to [snapboard.io](https://snapboard.io)
 3. Optimize - small changes which increase conversion - getting more people to signup and create cards
 4. Talk - keep talking to users (which should help shape the above items)


## Plan

Based on the above - I want to acheive the following this week:

  - [ ] Talk to 3 more users
  - [ ] Improve "edit card" page
  - [ ] Create 40 new cards / integrations
  - [ ] Start testing 3 [“Traction”](https://www.amazon.co.uk/Traction-Startup-Achieve-Explosive-Customer/dp/0241242533) growth channels
  - [ ] Setup public Snapboard metrics page - so I can better track changes


## Daily Log

### Day 1

Thursday, 24 October 2019: 🌧 12° - Rain, Rain, Rain

Ok, so today I need to:

 - [x] Create backlog for Front-end for Julio to work on
 - [ ] Create new card inputs apprach (make editing cards much nicer!)

Ah man, didn't feel like a very productive day 😅 - I spent a bit of time thinking about how to make the cards easier to edit - and that kind of thing never feels productive, but is obviously a neccessary step before 

Starting to feel very nervous about the [YC interview](/week-001) date. It's now exactly two weeks away. In fact, I was feeling so stressed - I had to go grab a beer at 3pm to calm myself and focus with the days work. It actually really helped 😅.

![Calm nerves with a nice cold beer](./beer.jpg "Calm nerves with a nice cold beer")


### Day 2

Friday, 25 October 2019: ☁️ 14° - Thick cloud and a fresh breeze
 
Julio did an incredible job getting the first version of the formula autocomplete feature working - check the video below!

<div style="position: relative; padding-bottom: 56.42633228840126%; height: 0;"><iframe src="https://www.loom.com/embed/8ccbaec3489d4c77920a7a89b99f5af7" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

Need to start work on marketing today, and find a way to try and get more people talking to me. PLEASE SOMEBODY TALK TO ME! 😂

  - [x] Talk to a potential user (e.g. start-up founder) - Megamaker Slack Group?
  - [x] Sent blog e-mail out
  - [x] Fixed a bunch of UX issues
  - [ ] Create new card inputs apprach (make editing cards much nicer!) 
  - [ ] Start one new marketing channel

Not a bad day, but still haven't been able to get around to the "Create new card inputs" task. I need to do this at the start of the day, because it takes significant energy to do - so if I'm tired it ends up not happening. It will be the first thing I look at tomorrow!

<details>
	<summary><h4>Talk with Potential User</h4></summary>

	Founder - SaaS - Developer Tools / Productivity

	Has built his own internal dashboard to see the metrics that really matter to him. Doesn't use other tools, because existing dashboards don't show him what he needs - or would take too long to configure! His current (internally built dashboard), pulls everything from his DB. He's not sure if he would give access to the DB or not. There's basically only 3 options getting DB data - push (like Mixpanel `track`), pull from an exposed API that gets data from the DB or direct DB access. Seems like the best option might be some kind of push - and then we can create a library for each language.

	Metrics that matter are Signups, Installs, Active Customers. He also tracks engagement on a per user level - so he sees if users have done key activity like - how far are they through their trial, how many participants, how many reports they've generated.

	Recommended that I start a Typeform to ask people what integrations they want, sounds like a good idea. Unsure whether to send it to the entire list on Snapboard though, because I don't want to send too many e-mails and I want to update them once we have more apps in play - oh wait - that's catch 22 😂. I probably need to e-mail them next week anyway, to allow people time to engage before the interview so I'll attach it to that.

	They use the following apps:

	* Beamer
	* Helpscout
	* Sentry
	* Stripe
	* Mixpanel - no longer uses as much
	* Mailerlite
	* Postmark
	* AWS / EC2 and RDS
	* Datadog
	* Logrocket
</details>


### Day 3

Saturday, 26 October 2019: 🌧 17° - Heavy rain and a moderate breeze

This isn't going to be a full working day, but I've got a good chunk of time - so I'm including an update. I really want to get the new card inputs done - because right now, it's blocking us creating new cards. And cards means ~~prizes~~ better engagement!

  - [ ] Create new card inputs apprach (make editing cards much nicer!)
  - [ ] Create a better admin page for creating template cards
  - [ ] Add Slack integration
  - [ ] Add Airtable integration

*To be continued...*

<details>
	<summary><h4>What to do about importer cards?</h4></summary>

	People aren't using the "importer" cards (cards which import raw data) because they're not shown in the main "+ Add card" modal. But if I add them there, it will be super confusing because when they select an "importer" card, it will not be added to their current active board but to the import boards section.

	The import boards section was added, because when adding pre-configured cards, we often need to import additional data - e.g. for the 'Stripe Customer Count' card (we need to import a list of Stripe customers). We add this imported data to the imports section, to allow the user to see their raw data, how it's structured and potentially use it when writing their own formula.

	For some apps (e.g. database apps, Airtable), there's no easy way for us to create pre-configured cards - because the data from databases is so varied. So the user will probably want to import the raw data first, and then manually use it in a chart/number card.

	We could remove the importers secton, and add "importer" cards to the current active board - BUT that makes it harder to find and organize. And when a user creates a pre-configured card for a board, we'd end up adding 2 cards to their board - the pre-populated card and the importer card (again confusing). 

	##### Things to think about

	* Should we have an importers section at all? How would the user select data without them? 

		* We could have a kind-of hidden section on every board, which automatically shows dependencies for that board (obviously only shown to CREATOR roles). Having it on the same board would also mean the user doesn't have to move around as much. This would solve the "adding 2 cards to their board", because one would be semi-hidden. We would only need to hide it if we added it as part of a "pre-configured" card - and the user could hide any other cards they want too - e.g. they might want to have an data grid card, log card, etc - that's visible to admins only. In this case, if the user directly adds an importer card - then it shows on the main board - and they can then choose to highlight it later?

		* We could use a formula function to get data - but that makes it harder for a user because they would have to deal with IDs - which most users won't understand or know how to find.

	* Is it really impossible to create pre-configured cards for database-type apps?


</details>


## Review

*Will update at the end of the week 👍🏽*




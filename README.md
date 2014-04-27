slack-boobs-bot
===============
Bot for Slack chat that posting boobs images




How it works
===

If this bot is integrated, it sends great tits image to channel, where keyword was triggered.
Bot integrates with Slack via Slack Webhooks mechanism.
This bot available at URL ```http://slack-boobs-bot.herokuapp.com/boobs```.
Everytime request is comming to ```http://slack-boobs-bot.herokuapp.com/boobs``` path, bot sends back payload with tits image.


Configuring Outgoing Webhook
---

Everything is simple. Slack should send a POST request to bot's url ```http://slack-boobs-bot.herokuapp.com/boobs```, like here:

![alt text](http://s3.postimg.org/j185vokqb/Screenshot_2014_04_26_13_13_50.png "Outgoing")

Then it responds with payload to Slack and 

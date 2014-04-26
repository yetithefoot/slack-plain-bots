slack-boobs-bot
===============

Bot for Slack chat that posting boobs images


How it works
===
This bot available at URL http://slack-boobs-bot.herokuapp.com
Bot integrates with Slack via Outgoing/Incoming Slack Webhooks.
Everytime request is comming to ```/boobs``` path, bot send great boobs image to #general channel.

POST like this
```bash 
curl -X POST --data-urlencode 'payload={"channel": "#general", "username": "webhookbot", "text": "This is posted to #general and comes from a bot named webhookbot."}' https://freechat.slack.com/services/hooks/incoming-webhook?token=Z89M3k3cnifutUcwSlmTz1Rp
```


Outgoing Webhook configuration
---

Fisrt, Slack should send a POST request to bot's ```/boobs``` path, like here:

![alt text](http://s3.postimg.org/j185vokqb/Screenshot_2014_04_26_13_13_50.png "Outgoing")


Incoming Webhook configuration
---

Next you shoul configure Slack Incoming Webhooks just by enabling it in Slack settings.

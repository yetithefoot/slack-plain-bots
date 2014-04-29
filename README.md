slack-plain-bots
======
![Slack.com logo](https://slack.global.ssl.fastly.net/8872/img/landing_slack_hash_wordmark_logo.png "Slack.com")

Bot for Slack chat that posting something to it.

List of available bots:
* __boobs__ - it posts great tits images to Slack. Route = ```/boobs```.
* __cats__ - posts cat phrases or cat images to Slack. Route = ```cats```.

How it works
---

If this bots are integrated, it sends something to channel, where keyword was triggered.
Bot integrates with Slack via its Webhooks mechanism.

For example:

Everytime POST request is comming to http://slack-boobs-bot.herokuapp.com/boobs path, bot sends back payload with tits image.
Everytime POST request is comming to http://slack-boobs-bot.herokuapp.com/cats path, bot sends back payload with cat image or cat phrases.


Configuring Outgoing Webhook
---

Everything is simple. Lets configure boobs bot. Slack should send a POST request to bot's url ```http://slack-boobs-bot.herokuapp.com/boobs```, like here:

![Configuring Outgoing Webhook](http://s3.postimg.org/j185vokqb/Screenshot_2014_04_26_13_13_50.png "Configuring Outgoing Webhook")

Then it responds with payload to Slack.

Credits
---

Thanx to guys from http://oboobs.ru for boobs API.
Thanx to guys from http://500px.com for great photos API.

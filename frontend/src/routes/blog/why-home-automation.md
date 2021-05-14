---
title: Why Home Automation?
excerpt: Let's dive into some of the reasons to add smarts to your home, and the benefits a connected home can provide.
date: "2019-07-09"
tags:
  - home-automation
  - home-assistant
  - basics
layout: layouts/post.njk
---

Welcome to the first of a six-part series to get you started into the world of home automation! If you're new to home automation or curious to learn more about it, this will be the place to start. The first two posts will tackle home automation in a more general sense, and then I'll start to dive more into Home Assistant specifically.

### Control Versus Automation

Often, when people think about a smart home, the first things that come to mind are smart lights and voice control, and perhaps a few other items like smart door locks or a thermostat. Typically, these are the aspects of the smart home that get the most attention. However, there can be much more to a smart home than that.

Voice control is a great place to start. We have several Google Home devices in our home, and with a baby in the house, it's very convenient to be able to ask Google to turn on a light when my hands are full in the middle of the night. And the Google Home does a lot more for us than just controlling lights and switches (we use it for adding items to our shopping list all the time). However, voice control is just a different method of controlling devices in the home, an alternative to a physical switch. What truly makes a smart home smart is automation.

### Adding Intelligence

Intelligence and automation is where the smart home truly shines. When your lights turn on before you need them, or your garage door notifies you if it's left open, or your lights turn on at a low brightness if you get up during the night, that's when you start to really reap the benefits.

Good home automation should seek to do as much on its own as possible, while being as silent and unobtrusive as it can be. While we have a tablet in our living room with a dashboard of our lights, and we also have apps on our phones, using these things still requires user interaction. I love the slick dashboard I created for our phones, but it's not necessarily that much more convenient than physical light switches. Therefore, I am working to limit the need to interact manually with the devices in our home as much as possible. Here is a summary of what I've done to date or plan to do in the future, to help shed some light on what's truly possible. Don't worry too much about the specific mechanics of how each piece works yet, as I plan to cover all of my automations in detail in future tutorials.

##### Lighting:

-   We have Philips Hue lights in our kitchen that automatically turn on in the evening. Initially, they turned on 45 minutes before sunset, but I found that as the days became longer, we were manually needing to turn the light on earlier than that. I ended up using a combination of the position of the sun and the amount of cloud cover to more intelligently determine when to turn those lights on.
-   We also like to leave a light on for our dogs if we're out of the house at night, and we use the same Hue lights in the kitchen for that purpose. I have set up our phones to notify Home Assistant when we leave the house. If the sun is still up, all of the lights in the house turn off. However, if the sun is down, or if it goes down while we're gone, the kitchen lights will turn on to give the dogs some light. However, they turn on at a lower brightness level than they would be at if we were home. When we arrive home, the lights automatically adjust to that higher brightness.
-   Our floodlights in the back are on a TP-Link Wi-Fi switch. That switch is set up to automatically turn on when we are home at night, so that we can let the dogs out into an illuminated yard.
-   When we go to bed, my wife and I both have [NFC tags](https://www.amazon.com/Black-NFC-Stickers-NTAG213-Tagstand/dp/B00KSR0636) on our nightstand. Tapping the tag with our phone informs Home Assistant that we are going to bed. Once we have both gone to bed, all of the lights in the house turn off and are programmed to turn on at a lower level if we turn them on during the night. White noise also starts to play on the Google Home in our bedroom.
-   The lighting in our basement home theater automatically dims when we start a movie, and brightens when we pause or end the movie.
-   Some of our Hue lights allow for color temperature adjustment. I've configured ours to automatically adjust the color temperature depending on the time of the day, to better match the color of the sunlight outside during the day and be more relaxing at night.
-   Eventually, I also want to add motion sensors, and replace my cloud cover + sun position formula with an ambient light sensor, to make things even more automated.

##### Security:

-   Our garage door is connected to Home Assistant. If it is left open when we leave the house, is opened while we're gone, or if we go to bed and it's still opened, Home Assistant will inform us.
-   I am adding open/close sensors to our exterior doors. For security purposes, we can get notifications if a door is opened while we're not home, and we can also do things like flash lights or play an audible alarm. We can also be notified if we leave a door open when leaving the house or going to bed.
-   I will also be tying our smoke/CO detectors into Home Assistant, so that we can be alerted if any of them go off and we are not home.

##### Comfort:

-   I plan to purchase a connected thermostat, that will be able to use the smarts of Home Assistant to vary the temperature depending upon if we are home or not. It will also be able to access exterior whether data and turn off automatically if the temperature outside is cooler than inside (and it notify us with a recommendation to open a window).

##### Entertainment:

-   I have two Logitech Harmony Hubs that are connected to Home Assistant. This allows us to use voice or our phones to turn on the TV, start a movie, or turn on a video game console. We can also tie the current entertainment activity into the lighting, as mentioned above, and can also do things like set a default volume for our speakers.
-   Our Chromecast and Google Home devices are also integrated into Home Assistant. We can do things such as automatically send text to speech notifications to them (for example, if we wanted to alert that a door had been opened). We can also send media files to them, such as white noise in our room and the baby's room at night.

Hopefully this starts to give you an idea of what can be done with home automation! With the right system in place, the possibilities really can go as far as your imagination can. It's so much more than being able to control lighting or the thermostat with your phone or voice. True home automation really should stay out of the way, and make life more convenient. Every time I first set up a new automation, I get excited the first few times it works flawlessly. But, eventually it fades into the background and just becomes a handy, everyday convenience. That's the true formula for successful home automation: invisibly working in the background to help make your life just a little easier.

I'll be back soon to take a deeper dive on Home Assistant compared to the competition!
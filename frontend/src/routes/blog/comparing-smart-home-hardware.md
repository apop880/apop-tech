---
title: Comparing Smart Home Hardware
excerpt: Start your smart home off right by purchasing the right hardware for the job.
date: "2019-07-14"
tags:
  - basics
  - hardware
layout: layouts/post.njk
---

Welcome back to my series on home automation basics! Last\
time, I presented some examples of true home automation, and showed ways to\
bring true intelligence to the smart home.


If you’re interested in getting your own start into the\
world of the smart home, the next step is figuring out what technology to use.\
There are a lot of options out there, and it’s important to separate marketing\
buzzwords and hype from real innovation. More importantly, it’s important to\
find reliable technology. There’s nothing worse than not being able to turn on\
a light in the middle of the night because your smart home is down.


While I’ve already mentioned that I’m partial to Home Assistant, I want you to be able to draw your own conclusions. With that in mind, read on for a breakdown of the different categories of home automation hardware, and what the options are in each category.

Home Automation Hubs
--------------------

A hub provides the brains of your smart home. This is the\
device that ties all of your other devices together and allows you to control\
and integrate them in a single, unified way. The list below covers all the\
major players in this space.

#### Smart Speakers/Smart Displays

![](/images/google_assistant.png)

**Category Leaders:** [Google Home (Google Assistant)](https://store.google.com/us/product/google_home?hl=en-US), [Amazon Echo (Alexa)](https://www.amazon.com/all-new-amazon-echo-speaker-with-wifi-alexa-dark-charcoal/dp/B06XCM9LJ4)\
**Other Devices:** [Apple HomePod (Siri)](https://www.apple.com/homepod/)\
**Pros:** Low cost, easy setup, routines, can be added to more sophisticated system later\
**Cons:** No automation capability, not all compatible devices work with other hubs


I don’t personally consider smart speakers or displays that are powered by a digital assistant to be true smart home hubs. Despite the confusing naming of the Google Nest Hub, it isn't a smart home hub in the traditional sense of the word. But some people do consider these devices to be usable as hubs, so in the interest of being comprehensive, I’ll list them here.


Smart speakers can serve as a staring point into a smart\
home, and if you upgrade to a more sophisticated system later on, you can\
continue to use them to provide voice control. You can connect a variety of\
devices to these speakers or displays (lights, thermostats, cameras, locks,\
etc.). If you’ve been on Amazon recently, I’m sure you have seen how many\
products advertise themselves as being compatible with Alexa. In some product\
categories, it borders on ridiculous (does the world really need an\
Alexa-enabled microwave?). However, the downside is that you are mostly limited\
to Wi-Fi compatible devices, which means you can quickly overload a Wi-Fi\
network. Other hubs can support other types of devices (more on that later in\
this post).


Once you’ve got these devices connected to your digital\
assistant, you can control them with voice. You can also create routines, which\
imbues your integrations with a degree of smarts. For example, I could say “OK\
Google, Good Night” are create a routine that turns off all of my connected\
lights, locks the doors, and so forth. So in that way, the assistant is making\
your home smarter by condensing multiple steps in one voice command. In\
addition, if you want a touch-based interface instead, Google Home, Alexa, and\
Apple HomeKit all provide phone/tablet interfaces. Instead of going into three\
different apps to control your lights, thermostat, and locks, you have one\
interface to control them all.


However, stopping here with your smart home has its limits.\
The automation piece I mentioned in my previous post is out of the question\
without a more advanced hub. A smart speaker can’t automatically turn on lights\
when you arrive home or enter a room. It can’t automatically adjust the\
thermostat if the outside temperature crosses a certain threshold, and it can’t\
send you alerts when certain events take place. You’re also dependent on the\
cloud in most cases, introducing a degree of delay between when a command is\
issued and when it takes place (though Google is making some strides in this\
area).


Therefore, while a smart speaker can be a great place to\
start, and possibly a reasonable place to stop for a basic implementation (for\
example, my parents solely use Google Home devices in their house to control\
Hue light bulbs), you can quickly run into limitations if you want to do more.\
Once you get to that point, it’s time to look at some of the other hardware\
options further down this list.


There are a couple of specific caveats I recommend watching\
out for when using a smart speaker as the brains of your smart home. I’ll cover\
specific products later in this post, but in general, you want to stick to\
known, reputable brands. There is a lot of junk on Amazon that advertises\
itself as Alexa or Google compatible, since it’s pretty easy to sell on Amazon\
and pretty easy to integrate with Alexa and the Google Assistant. These\
products may work just fine integrated with your smart speaker, but they often\
are not compatible with more complex hubs. Therefore, you’ll run into issues\
later on if you upgrade to a hub. If you cannot connect these devices to your\
hub, you cannot use them in any automations, and you therefore lose a lot of\
the advanced smart functionality a hub provides.


The other caveat I’ll mention relates to the HomePod. By all\
accounts, it is a great device for listening to music, and if you’re a fan of\
Siri, it works well in bringing the digital assistant to a smart speaker.\
However, the number of devices the HomePod works with is much smaller than\
other smart home hubs, as is typical of Apple’s walled garden approach. Given\
the higher price tag of the HomePod as well, I’d advise you to steer clear.


#### Proprietary Systems

**Examples:** Vivint SmartHome, ADT Pulse


I’ll keep this section short and sweet: avoid these types of\
systems like the plague. You’ll pay for the equipment, setup, and ongoing\
monitoring, but then you are on the hook to continue paying to have\
functionality (and you usually get locked into a long-term contract with an\
exorbitant cancellation fee). Furthermore, the hardware you get is generally\
proprietary and will not continue to work if you want to switch to another\
system later on. The convenience and simplicity of professional installation\
and service may sound tempting, but the trade-off is massive. Stay away!

#### All-in-one Hardware Hubs

**Category Leader:** [Samsung SmartThings](https://www.smartthings.com/)\
**Others:** [Wink](https://www.wink.com/products/wink-hub/), [Vera](https://getvera.com/), [Hubitat Elevation](https://hubitat.com/), [HomeSeer](https://homeseer.com/), [Amazon Echo Plus](https://www.amazon.com/All-new-Echo-Plus-2nd-built/dp/B0794W1SKP)\
**Pros:** Low barrier to entry, automation capability, multiple protocols supported\
**Cons:** Cloud requirement (except Hubitat and HomeSeer), limited customization without add-ons

Now, we’ve come to the hubs that can truly begin to make\
your home a smart home. These hubs can connect a vast array of devices, because\
they have ZigBee and Z-Wave radios built in. These two protocols are purpose\
built for home automation applications and will avoid putting undue stress on\
your home Wi-Fi. In addition, the more sophisticated software built into these\
hubs will allow you to program automations of varying levels of complexity.\
Want to turn on lights when you arrive home, or when you walk into a room? You\
can do that with these devices.

I’m going to focus my comments here on the SmartThings\
platform, as I have the most experience with it. However, many of the same pros\
and cons will apply to the other devices listed in this category. As\
consumer-focused products, these hubs are designed to be relatively easy to set\
up, with a learning curve that’s pretty approachable for most people. They are\
also compatible with a large number of devices by default, as a result of the\
aforementioned ZigBee and Z-Wave radios. Basic automations can be created\
pretty quickly, and most of these platforms are extensible enough that there’s\
functionality out there if you’re a power user who wants to create more\
advanced automations.

However, the cloud is the tether that really holds these\
platforms back. On the one hand, it’s somewhat incredible what can be done via\
the cloud in 2019. When I went into the SmartThings app to turn a light on, my\
app relayed this request to the cloud, which passed it back to the SmartThings\
hub, which then turned on the light. That this all happens in fractions of a\
second most of the time is amazing, but it’s still a perceptible enough delay\
that it was somewhat bothersome. More importantly, when that process didn’t\
work seamlessly, it became frustrating. Often enough, there would be delays of\
a few seconds, or devices simply wouldn’t respond at all. I could not depend on\
my smart home.

Since the SmartThings cloud service is free, Samsung really\
has no obligation to provide a certain level of service. Downtimes and delays\
happened from time to time, and support tickets I logged took weeks to be\
addressed. I’m certain that there’s a market of people who would pay a small\
monthly fee for a more reliable cloud and dedicated support, and if this were\
an option, I might still be using SmartThings today. But since it is not an\
option, I looked elsewhere.

There are other downsides to being reliant on the cloud as well. For example, if at some point Samsung decides to discontinue the platform, they could turn their cloud servers off. If this were to happen, the SmartThings hubs would become expensive paperweights, and users would have no recourse. [We’ve already seen Lowe’s do this with their Iris platform earlier this year](https://www.techhive.com/article/3337249/lowes-will-shut-down-its-iris-by-lowes-smart-home-platform.html), so it’s certainly something that’s possible, even for a large company. Having data in the cloud also makes it vulnerable to breaches. [Samsung had a data leak of SmartThings source could earlier this year](https://techcrunch.com/2019/05/08/samsung-source-code-leak/), which is concerning. I don’t particularly want the data around when I’m home or not home to be out in the cloud, and potentially vulnerable to attackers.

Finally, there are some pretty large and concerning gaps in\
Samsung’s strategy for the SmartThings platform. For example, they have had a\
new SmartThings app and a SmartThings Classic app available in tandem for over\
a year now, and they still don’t have a firm plan in place to migrate all users\
and all available functionality from the old app to the new app. In addition,\
though it’s been asked for on a regular basis, there is no functionality\
available to migrate to new hardware, or to perform a backup and restore. If\
your hub malfunctions, or if you want to replace it with a newer model, you\
have to start from scratch by adding all of your devices again.


In terms of the others listed in this category, I would advise avoiding Wink [as it appears to have a very uncertain future as a product](https://www.howtogeek.com/409925/why-we-cant-recommend-wink-hubs-anymore/). It is likely to follow Iris onto the scrap heap and become useless hardware. HomeSeer is pretty expensive for what you get, in my opinion, though it does benefit from not being cloud-dependent. Finally, I did list the Amazon Echo Plus here, because unlike the regular Echo, it does have a ZigBee radio built in. However, it lacks a Z-Wave radio and still has most of the same weaknesses the regular Echo does from a software and automation perspective.


The Hubitat is an interesting product I’ve kept my eye on\
and considered when I was looking to move away from SmartThings. It was created\
by former SmartThings employees and shares much of the same architecture.\
However, it allows for completely local control instead of the cloud dependency\
most of the others on this list suffer from. It is still a pretty young, raw\
platform, but does have some potential if you want something that is not\
cloud-based but is similar to SmartThings in terms of the learning curve.

#### Software-based Hubs


**Category Leader:** [Home Assistant](https://www.home-assistant.io/)\
**Others:** [openHAB](https://www.openhab.org/), [Domoticz](http://www.domoticz.com/) (note: There are other software-based competitors – for example, HomeSeer offers a software-only solution – but they are generally paid and proprietary, and don’t really fit the mold of the other software options in this list. I wouldn’t recommend them.)\
**Pros:** Run on a variety of hardware, no cloud dependency, limitless customization, broad device support, advanced automation, free (except HomeSeer), fast pace of development\
**Cons:** Steeper learning curve, no dedicated support, fast pace of development

Willing to tolerate a little bit of a steeper learning curve\
initially, in exchange for much greater flexibility, control, speed, and\
reliability? Take a look at one of these software-based smart home hubs. In\
this case, you provide the computer hardware, and then install the software to\
complete the brain of your smart home.


Home Assistant, OpenHAB, and Domoticz are the major players\
in this space, and I evaluated all three before deciding on Home Assistant. All\
three are completely free, so the only cost involved is the hardware to run on.\
They are also all open source, which means anyone can contribute to\
development. This means that development can move at a fast pace, and may\
people have input into the software. This often leads to more rapid support for\
new smart home devices, versus a corporate owned device that is not updated as\
quickly and is not as community driven.


In addition to being free and community driven, these open source software hubs offer a great deal of flexibility. You can pick the hardware you want to run the software on, and the overhead is pretty low for a basic system. As a starting point, a [Raspberry Pi](https://www.raspberrypi.org/products/) single-board computer or an old system you have lying around will work just fine. Eventually, you may need to upgrade to a more powerful computer if you have a substantial number of devices or want to add other functionality (video recording/streaming from cameras in particular is very demanding). However, I can attest that my current system (25 lights/switches, over a dozen media players, a handful of buttons and sensors, and an ever-growing collection of automation) runs just fine on a Raspberry Pi 3. Part three of this series is going to cover computer hardware selection for Home Assistant in more detail.


There are also many options to customize your setup, both in\
terms of the frontend interface that you interact with and the automations that\
take place in the background. In Home Assistant, for example, you can customize\
the user interface with 24 built in interface elements, and dozens of available\
custom elements created by others in the community. On the backend, there are\
three different systems available to create automations, all of which are very\
good in their own ways. They all integrate very well with Home Assistant, and\
which one you use is simply a matter of personal preference. I’ll be covering\
these items in more detail in future posts.


The fast moving and community driven approach to these programs can have one key drawback, hence why I listed "fast pace of development" as both a pro and a con. Home Assistant especially is still in the “move fast and break things” phase in some respects. What I mean by this is, they are not yet at a version 1.0 release. While it’s been extremely stable for me, and more reliable than SmartThings, it is important to be aware of this fact. Updated versions of Home Assistant are released every three weeks, and each release contains a handful of “breaking changes.” These are changes to the underlying construction of the software that will be beneficial for future growth, as a result of things the developers have learned over time. However, they can lead to occasional challenges when upgrading, if a breaking change effects a component that you are using in your home. Part six of this blog series will go in depth to help mitigate these challenges. And as Home Assistant does come ever closer to that 1.0 release, work is being done to minimize the frequency and impact of breaking changes, as well as reducing the learning curve to help make the software more accessible to anyone regardless of technical skill level.


I mentioned OpenHAB and Domoticz as other competitors in\
this category. Both are also free, fast, and flexible pieces of software.\
However, I chose Home Assistant because development is proceeding at the\
fastest pace and it seems to have the strongest community behind it. OpenHAB\
and Domoticz are not updated with the same frequency, so you often can wait\
months rather than weeks for a new device to be compatible. In addition,\
OpenHAB is built on the Java language, whereas Home Assistant is built on\
Python. Java tends to be quite a bit more resource-intensive, and I had some concerns\
around whether the Raspberry Pi would be able to keep up with OpenHAB\
long-term. Still, while my wholehearted recommendation would be Home Assistant,\
it is fairly painless to also try out OpenHAB and Domoticz to compare. Since\
both are free pieces of software, you could load each of them on a computer to\
try them all out before committing to one platform long-term.


Smart Home Devices
------------------

Now that we have selected a hub, we need devices in our home to make the hub useful. These are typically referred to as smart home devices or Internet of Things (IoT) devices. With some rare exceptions (such as wired sensors from an old alarm system that you can retrofit to work with a system like [Konnected](https://konnected.io/)), all smart home devices will connect using one of the following wireless protocols.

#### Wi-Fi

Wi-Fi devices are far and away the most prevalent class of\
smart home device. They have a low barrier to entry, as they can usually be\
used without the purchase of any additional hub. You just need a Wi-Fi router, and\
if you’re reading this, I can pretty much guarantee that you already have one.\
Just about every major class of smart home device is available in a Wi-Fi\
variant, from lights to locks to thermostats to sensors. In addition, because\
Wi-Fi is so ubiquitous, it offers the greatest variety of device manufacturers.\
Large corporations, small companies, and companies of questionable\
quality/reputation all sell Wi-Fi IoT devices. In addition, there are a number\
of options for creating DIY smart home devices that communicate via Wi-Fi.


That being said, while you could build out an entire smart\
home ecosystem using only Wi-Fi devices, I wouldn’t recommend it for several\
reasons. First, you’ll put a lot of added stress on your Wi-Fi network. We are\
already using more devices than ever on our Wi-Fi networks, between computers,\
phones, and tablets. A few additional smart home devices won’t be a big deal,\
but if you start to add many more devices, especially ones that communicate\
frequently like sensors, the typical consumer Wi-Fi router will not handle the\
added load well. In addition, Wi-Fi is not the optimal protocol for battery\
powered devices, so wireless sensors that run on Wi-Fi will not have great\
battery life. The next version of Wi-Fi promises to improve this, but in the\
here and now, Wi-Fi is not your best option.


Other than our Google Home and Chromecast devices, which do\
make sense as Wi-Fi connected technology, we only have four Wi-Fi smart home\
devices in our house.


#### Z-Wave and Zigbee


In contrast to Wi-Fi, Z-Wave and Zigbee are purpose built for the Internet of Things. Both standards are low-overhead and allow IoT devices to communicate in a fast and power-efficient fashion. They also both operate as mesh networks, meaning devices on the network can extend the network’s range. For example, if you have a hub with a bulb 10 feet away, and a second bulb 20 feet away, a message to the second bulb can be transmitted with the closer bulb as an intermediary.


Z-Wave and Zigbee are also inherently more secure than Wi-Fi. Since the devices cannot directly access the Internet, there isn't any risk posed by having a security flaw in a device's firmware.


For the most part, Z-Wave and Zigbee are very standardized,\
and any device will work with any hub, which is also nice (though Z-Wave is\
slightly more standardized than Zigbee). The biggest difference between Z-Wave\
and Zigbee are the band that they run on. In the US, Zigbee runs on 2.4 GHz,\
which is the same as Wi-Fi, while Z-Wave runs at 908.42 MHz. This does mean\
that Zigbee can be more prone to interference with Wi-Fi. Zigbee devices, in\
general, do tend to be slightly less expensive than their Z-Wave counterparts. We\
have a mix of Z-Wave and Zigbee in our home, choosing the best option for each\
situation rather than committing to one technology.


When choosing Z-Wave devices, look for ones labeled as\
Z-wave Plus labeled, as there are some improvements to the technology versus\
older Z-Wave devices.

#### A Note on Bridge Devices

There is a class of devices that really don’t fit fully into\
any of the above, usually known as bridges. The Philips Hue Bridge and IKEA\
Tradfri bridge are examples. These devices aren’t full-on hubs, but act as a\
hub for one specific vendor’s devices. In the case of these two examples, they\
technically communicate using the Zigbee protocol but cannot interface directly\
with other Zigbee devices. They simply connect and communicate with that one\
vendor’s devices, and you still need something else to act as a smart home hub\
and provide the brains to tie the bridge’s devices to the rest of the devices\
in your home.

#### Bluetooth

While most devices use Wi-Fi, Zigbee, or Z-Wave, there are a\
minority of devices that connect using Bluetooth. Using Bluetooth has the\
advantage of not requiring a hub in some cases, similar to Wi-Fi, and since\
it’s on a different frequency compared to Wi-Fi, it’s less prone to\
interference. However, Bluetooth also has a much more limited range. I would\
steer clear of it for most applications, though the lower range does give\
Bluetooth Low Energy (BLE) devices some utility as inexpensive beacons to\
interface with a smart phone and detect what rooms in the house are occupied.


If you have questions about smart home hardware, let me know\
in the comments!


---
title: Picking a Computer for Home Assistant
excerpt: Find the right hardware to run your Home Assistant installation on.
date: "2019-07-22"
tags:
  - basics
  - hardware
  - home-assistant
layout: layouts/post.njk
---


Welcome back for part three of my series on home automation basics! Now that we've gotten through an introduction to what home automation is beneficial for, and looked at some of the competing smart home platforms, Home Assistant will be the focus from here on out.



If you're interested in proceeding with Home Assistant as the software brain of your smart home, the next step is to find the right hardware to run it on. Read on for some tips around selecting the right hardware for you.




Option 1: Re-use Existing Hardware
----------------------------------



If you have an old computer lying around unused or underused, this is the best place to start. The barrier of entry is effectively zero, with no additional hardware to buy. You can install Home Assistant and get a feel for how it works, and see if you like it before even committing to buying any smart home hardware.



For most uses, Home Assistant has a fairly small footprint in terms of resource requirement, so any PC made in the last decade, and maybe even slightly beyond that, should run Home Assistant without much issue. You will likely begin to run into issues on older hardware if you're performing more resource intensive tasks like streaming security cameras, but otherwise you should be just fine.



The best option for re-using old hardware is to install Home Assistant on an old laptop. Laptops take up minimal space and are quiet and power-efficient by design. They also provide a built-in screen in case you need to log in directly on the device and troubleshoot something. Perhaps most useful is the fact that a laptop has a battery, so if the power goes off at your home, the battery backup can kick in and allow you to shut down more gracefully. Otherwise, it's not a bad idea to purchase an uninterrupted power supply (UPS) to provide battery backup in the event of a power outage.



If you don't have an old laptop, a desktop is not a bad option, but you lose some of the advantages from the preceding paragraph. A desktop will be a little more power hungry, takes up more space, and generates more heat and noise, so your options are potentially more limited on where to place one.



Option 2: Use a Raspberry Pi
----------------------------



If you must purchase hardware to get into the Home Assistant ecosystem, a Raspberry Pi is the next best option. The single-board computer is amazingly versatile and offers enough power to run Home Assistant. And the price (\$35 for the board, plus additional cost for a case, power supply, and SD card) is hard to beat. It is also completely silent and extremely power-efficient. Most of my same remarks around limitations for an old computer apply here. I am currently running on a Raspberry Pi 3, which is two iterations behind the latest (the Raspberry Pi 3 B+ is slightly more powerful, and the Raspberry Pi 4 just released recently). Even so, it handles everything I've thrown at it very well so far. Occasionally, I run into issues with slight Zigbee delays, but otherwise, everything runs very well and usually only uses about 5% of the CPU.



Eventually, as I plan on adding more sensors, and especially cameras, I plan to migrate to more powerful hardware. For now, though, the Pi is working great for me, and it can be a great starter option for you too. What's great about the Pi is its versatility. If you eventually replace it with something more powerful, it can be re-purposed for many other uses (for example, as a retro game console, a network attached storage unit, or as a DIY temperature/motion/light/humidity/etc.) sensor for Home Assistant.



The most important considerations with the Raspberry Pi are the power supply and the SD card. You will want a power supply that can reliably supply power to the Pi. Don't skimp on this with an old cell phone charger. I recommend the Canakit bundles on Amazon, as they include a 2.5A power supply that will get the job done. A good SD card is important because Home Assistant will read and write a lot of data to keep track of your smart home activity. I use a Samsung EVO 32GB card. 32 GB may seem excessive, and I will say that I've only used about a third of mine so far, but the extra capacity means the card will have more longevity, because there's more open space on the card to write to.



There are a few other important things to note when setting up Home Assistant on a Raspberry Pi to help optimize performance and SD card lifespan. I will be covering these in more detail later in the basics series.



Option 3: A New Computer
------------------------



If you know you're going to work your way up to a powerful setup, or you already have big plans to use cameras or run other software alongside Home Assistant from the get-go, it may make sense to start with a more powerful device. Really, any new device will be powerful enough for Home Assistant, so you'll need to determine what your specific needs are to determine how much power you need. Of course, there is also a tradeoff between computing power and energy consumption. You don't want to overdo it and buy more than you need, since this is a computer that's going to always be on.



The Intel NUC platform is a good option for an always-on, smart home focused computer. It is basically a step up in power from the Raspberry Pi, as it is fanless, power-efficient, and has a small physical footprint. You do pay a premium versus a typical PC, though. Unless you really have the money to spend, I tend to recommend that you look for a small-form-factor PC. It will provide more computing power than a NUC for the same price, and it will still be relatively quiet and power-efficient while still having a small physical footprint.



Summary
-------



As you can see, Home Assistant really can run on a wide variety of hardware, giving you lots of options to pick from when you're ready to get started. Do you have questions or want more information about a specific configuration? Feel free to reach out in the comment section below.


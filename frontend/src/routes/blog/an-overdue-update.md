---
title: An Overdue Update
date: "2020-01-25"
excerpt: It's been awhile since my last post. Here's a little bit about what I've been up to over the last few months, and what's in store for 2020.
tags:
  - general
  - home-assistant
  - home-automation
  - web-development
layout: layouts/post.njk
---

Time sure flies when you have a one year old at home. Blink, and suddenly your blog hasn't been updated in nearly six months. I finally have a long-overdue post to share with you and give some updates on what's been going on over the last few months, and where things are headed in the year to come.

### Explaining the Lack of Updates

It certainly isn't a lack of ideas that has kept me from getting blog updates posted. On the contrary, I have a list that's a mile long of posts that are waiting to be written. However, there are a few things that have kept me from doing that.

Aside from the busyness that comes from having a baby, there were a couple other things that kept me from writing any new posts over the last few months. First off, I moved into a new role at work in August, and the adjustment period to the new role cut into some of my time for working on home automation projects. I am really enjoying my new role, as it has given me more opportunities for programming and development work. By doing more of that during the day, though, I wasn't always quite as motivated to write more code for home automation in my spare time. (If you look at my contribution history on my [GitHub profile](https://github.com/apop880), it's pretty clear where the new role started.) Less work on home automation also meant slightly less to blog about.

Shortly after re-launching this site in June on the WordPress platform, I also started finding out more about Static Site Generators, a releatively recent trend in web development. The more I found out about these tools, the more I felt like they were something I wanted to explore further. However, I didn't have the time at that moment to sink my teeth into such a project. At the same time, I didn't want to keep writing additional blog posts in WordPress, because that would give myself additional work later to migrate those posts over.

### Static Site Generators? Tell Me More!

If you're not interested in web development, feel free to skip down to the next section. If you are interested, though, here's a little more about the changes to this website. I plan to elaborate on some of this more in some future web development oriented blog posts.

A Static Site Generator (SSG) is, in a way, a return to the roots of the World Wide Web. Back in the 1990s, websites were generally collections of individually created pages. As sites became more complicated, though, and easy creation of content became more important, Content Management Systems gained popularity. WordPress, for example, is one of them. It's probably the most well-known, used by about a quarter of all sites on the Internet.

Content Mangement Systems have their drawbacks, though, especially in the areas of speed and security. As I learned more about SSGs, I wanted to try one out because of the simplicity of deploying static pages (no database backend to fear breaches of).

What an SSG essentially does is take text documents and process them through templates to create HTML pages. This is done in a matter of seconds. Therefore, I developed my templates once, and then anytime I want to create a new page or blog post, I mainly write text and have it fed through the template. Then, I can deploy the website in a number of ways (more information in a future) post to easily keep it updated online.

There are a number of Static Site Generators. While they are all fairly similar, different ones do have strengths and weaknesses. The one you choose is largely a matter of personal preference, though. I researched numerous SSGs and actually tried generating sites with three of them before settling on [Eleventy](https://11ty.dev). [StaticGen](https://staticgen.com) is a great resource to look at the many options out there, but I settled on Eleventy because it is simple yet powerful, and it gave me the most freedom to structure things in the way I wanted compared to the other ones I tried or researched (I tried out Hugo and Pelican and also researched Gatsby, Jeckyll, Nikola, and Statik among others). Meanwhile, I also gave the website a new design to go along with the new development workflow. I chose to use the [Bulma](https://bulma.io) CSS framework, as it provides a great deal of flexibility without getting in the way. Using these two technologies in tandem has allowed me to relaunch the website rather quickly. Finally, I am now using [Netlify](https://netlify.com) as my web host, as they provide a generous free tier for hosting static sites with speed and reliability.

I look forward to delving into this topic more this year, but suffice it to say, things are much different under the hood for this website. Combining an SSG with a simpler but professional site design has greatly reduced page load times and should hopefully improve your experience as a visitor.

### What's New with My Smart Home?

Enough about the website architecture changes, let's get to the good stuff. While progress hasn't been quite as rapid, I've continued making improvements to my smart home over the past few months. Overall, things are as stable as they've ever been. All of my main automations are working very well, so I've mostly been focused on additional, more minor enhancements. However, there's been plenty to keep me busy, and plenty worth talking about. Here's a sampling of what I've been working on lately, which I'll expand on in future posts:

* Added and fine-tuned door sensors and a motion sensor for lighting and alerting
* Added additional lighting color effects inside and outside the house
* Discovered Tuya-convert and began getting into the world of custom firmware and DIY Wi-Fi devices
* Added additional outdoor Christmas lighting, and fully automated them

I've got a ton in the pipeline for 2020, and I'm especially excited about adding more DIY devices and projects to the mix. Now that I'm settled in with this new platform, I can start focusing on writing again, and I'm looking forward to bringing you quality content all year long!
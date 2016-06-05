#A Flexbox Primer
##(For the Unprimed)
####by Jeremy Wagner ([@malchata](http://twitter.com/malchata))

#####Written using [reveal.js](http://lab.hakim.se/reveal-js)
---

##Overview

This is a talk on Flexbox, a CSS layout technology that allows for much more flexible and powerful arrangement of elements than typical box model properties allow. Flexbox, among other things, provides avenues to automatically fill horizontal and vertical space, alignment and reordering of the presentation of items in a document structure if need be.

At the time of this writing, Flexbox has very widespread support. Flexbox should be considered safe to use if you are not aiming to support users beneath IE10. All other browsers should be considered totally safe, although vendor prefixes are encouraged for maximum capability, and this is briefly covered in the talk.

---

##Talk Contents

The talk proceeds as follows:

1. A quick history of how styling was done since the inception of the commercial internet.
2. A recap of CSS and box model/box layout, with some live coding examples.
3. A shallow introduction of Flexbox and how it's different from box layout.
4. A quick intro on how to invoke flex layout on HTML elements.
5. Properties used for parent containers.
6. Properties used for child items.
7. Some practical examples of flexbox in use.
9. Some brief notes on Flexbox performance.
10. A short caveat on vendor prefixes, including some useful LESS mixins.
11. A conclusion with some helpful links/resources.

---

##Running This Talk Locally
###tl;dr: Don't bother unless you like pain.

Getting this to run locally has been somewhat of a pain for users who have attempted it. The reason for this can be due to various reasons, but the top two reasons are either because Windows users have to grapple with Python, and the `jsbin` package used for the offline fiddles is very particular about which version of node you use. I used the `n` package to overcome compatibility issues. `n` allows you to switch between specific versions of node, which is crucial for getting this to work.

In order to install and run this talk, you'll need `npm` and `git` installed on your system. The steps below are done on a Mac, so they should work for Unix and Unix-like systems:

###1. Clone this repo into a directory of your choice
```
git clone https://github.com/malchata/flexbox-presentation.git .
```

###2. Clone the `v3.35.2` version of `jsbin` from git into the presentation directory:
```
git clone https://github.com/jsbin/jsbin.git ./jsbin
cd jsbin
git checkout tags/v3.35.2
```

###3. Install the `n` package and switch to the `0.10.38` version of Node.
```
sudo npm install -g n
sudo n 0.10.38
```

###4. Install the node modules for `jsbin`
```
cd jsbin
sudo npm install
```

###5. Copy the configuration and SQLite database from the parent directory into the `jsbin` directory and run jsbin:
```
cp ../config.local.json .
cp ../jsbin.sqlite .
sudo bin/jsbin
```

Everything should work after that, at least on OSX. At that point you will need to configure the talk to run on a local web server. Unfortunately, the talk will not work when run from the local file system because of iframe securiy policies. The talk also needs to run on the hostname `flexbox.frontlineui.com` if you want the images in the `jsbin` fiddles to show up. If that's unimportant to you, use whatever local hostname you prefer.

Windows users will likely need to install Python, which node requires to build some `jsbin` dependencies. To get this talk to work on Windows, I installed version 2.7.10, which you can [grab here](https://www.python.org/downloads/release/python-2710). Do *not* install a 3.x version of Python, as it will not work!

Why is it this complex and involved? Two reasons:

1. I needlessly complicate everything, first and foremost.
2. I needed to ensure that this talk would run entirely offline.

If you're having significant trouble trying to get this to work locally, create an issue in this repo with as much information as you have (terminal input is really important!) and I'll help to the best of my ability.

##Talk Events

This presentation was given on the following dates:

- **07/24/2015**: General Mills Code Camp v5.0
- **10/24/2015**: [Twin Cities Code Camp 19](http://www.twincitiescodecamp.com)

---

##Future Events

- **06/09/2016**: [Open Source North](http://opensourcenorth.com)
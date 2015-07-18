#The Flexbox Cometh
##Champion of The Layout
####by Jeremy Wagner ([@malchata](http://twitter.com/malchata))

#####Presented using [reveal.js](http://lab.hakim.se/reveal-js)
---

##Overview

This is a talk on Flexbox, a CSS layout technology that allows for much more flexible and powerful arrangement of elements than typical box model properties allow. Flexbox, among other things, provides avenues to automatically fill horizontal and vertical space, alignment and reordering of the presentation of items in a document structure if need be.

At the time of this writing, Flexbox has very widespread support. Flexbox should be considered safe to use if you are not aiming to support users beneath IE10.  All other browsers should be considered totally safe, although vendor prefixes are encouraged for maximum capability, and this is briefly covered in the talk.

*The talk is still under development. Check back periodically for developments.*

---

##Running This Talk Locally

Since a local copy of [jsbin](https://github.com/jsbin/jsbin) is used, there's more to viewing this project than simply cloning the repo and running it in your web browser.  You'll need to traverse into the `jsbin` directory in the project and perform some shell commands:

```
npm install -g grunt-cli
npm install
bin/jsbin
```

This will run the jsbin server on localhost on port 3000.  The talk embeds iframes to fiddles relevant to the presentation.  If you run the presentation without it, all fiddle embeds will appear as text links.

I'm not immediately sure of all the dependencies, but I know that Windows users will have to install Python.  Since OSX comes with Python out of the box, the hurdles encountered will vary from system to system.  I suspect *nix users will have an easier go of it than Windows users.

##Talk Events

This presentation will be given on the following dates:

- **07/24/2015**: General Mills Code Camp v5.0.
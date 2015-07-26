#The Flexbox Cometh
##Champion of The Layout
####by Jeremy Wagner ([@malchata](http://twitter.com/malchata))

#####Presented using [reveal.js](http://lab.hakim.se/reveal-js)
---

##Overview

This is a talk on Flexbox, a CSS layout technology that allows for much more flexible and powerful arrangement of elements than typical box model properties allow. Flexbox, among other things, provides avenues to automatically fill horizontal and vertical space, alignment and reordering of the presentation of items in a document structure if need be.

At the time of this writing, Flexbox has very widespread support. Flexbox should be considered safe to use if you are not aiming to support users beneath IE10.  All other browsers should be considered totally safe, although vendor prefixes are encouraged for maximum capability, and this is briefly covered in the talk.

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
8. A short caveat on vendor prefixes, including some useful LESS mixins.
9. A conclusion with some helpful links/resources.

---

##Running This Talk Locally

This talk has hard-coded references for local files, therefore, a local hostname of `flexbox.frontlineui.com` is necessary for the talk to work 100%.  I'd like to fix this, but it's not a stone cold lock.

Since a local copy of [jsbin](https://github.com/jsbin/jsbin) is used, there's more to viewing this project than simply cloning the repo and running it in your web browser.  You'll need to traverse into the `jsbin` directory in the project and perform some shell commands:

```
npm install -g grunt-cli
npm install
bin/jsbin
```

This will run the jsbin server on localhost on port 3000.  The talk embeds iframes to fiddles relevant to the presentation.  If you run the presentation without it, all fiddle embeds will appear broken.

I'm not immediately sure of all the dependencies, but I know that Windows users will have to install Python.  The version of Python you install is important, since a node dependency for jsbin seems to prefer Python 3.0 or less.  Since OSX comes with Python out of the box, I had very little in the way of difficulties.  I suspect *nix users will have an easier go of it than Windows users.

##Talk Events

This presentation was given on the following dates:

- **07/24/2015**: General Mills Code Camp v5.0.

---

##Future Events

None scheduled yet.  Aiming to submit this talk for the Fall 2015 Twin Cities Code Camp.
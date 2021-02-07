![](https://github.com/marianzburlea/pug-starter/blob/995a63f1f10c3ec7112941e6c77a95330557ef16/gulp/arrow-flashing.gif) ![](https://github.com/marianzburlea/pug-starter/blob/995a63f1f10c3ec7112941e6c77a95330557ef16/gulp/arrow-flashing.gif) ![](https://github.com/marianzburlea/pug-starter/blob/995a63f1f10c3ec7112941e6c77a95330557ef16/gulp/arrow-flashing.gif)

# NASA to MARS

## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Style](#style)

## Prerequisites

I used Node.js v12.18.2 to build this project.

To install NodeJS visit [nodejs download page](https://nodejs.org/en/download/) download the appropiate package for your operating system, click on the downloaded file, open it and follow the installation procees. If you don't know much about it, just click ALL the NEXT and or INSTALL buttons and choose "I agree" when prompted and you should be fine.

## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

```bash
$ npm i
```

or

```bash
$ npm install
```

## Usage

To run the project in development mode and open a local server:

```bash
npm run dev
```

To build the project for production use:

```bash
npm run build
```


## Style

The project supports both **_embed_** and **_external_** style sheets. You can have none, one or the other, or both of them.

### Single page application style

When you're building a single page app or website, there is no point in having the style sheets loaded from an external file and I'll explain why: the point of loading external style sheets is to allow the browser to cache those files and once you visit another web page of the same website, instead of making another request(s) for the style sheet file(s) to the server and having to download them, if there is no change, the browser will load them from the local drive. In a single page, there is no other page to go to therefore the external file technique doesn't apply.

### Multi page application style

In this scenario you can have either both **_embed_** and external or just external. The most common scenario is to have only one external style sheet file to be loaded and most of the time that's just fine.

If you want to improve your SEO and user experience even further, I strongly recommend to use a combination of both **_embed_** and external. The **_embed_** style sheet should only contain the minimum amount of styles for the initial visible part of the page to render. The rest of the styles can be put in the external CSS file.


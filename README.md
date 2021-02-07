
# NASA to MARS
![](https://github.com/QuintyHH/NASA-to-MARS-next.js/blob/main/public/assets/images/missiontomars.PNG)
## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)
- [To-Do's](#to-dos)

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


## About

This project was built using Vanilla [Next.js](https://nextjs.org/) as a showcase.
Based on an uploaded file, a few Mars rovers are spawned and they roam around the grid, based on values from said file.

### Grid Size

A user can update the grid (aka work area) by setting a new width and/or height and clicking the `Update Grid` button.
These fields are validated, and require a NUMBER between 0 and 101, not inclusive. Initially, I built this to scale to the user's screen, but animations got wonky, so I just set a cell size to 40 pixels.

### Current Mode

I wasn't really sure if I should build the rovers to roam one after the other on a move-per-move basis (ex: Rover1, Rover2, Rover1, Rover2, etc..) or one after the others before it finished all their moves (ex: Rover1, Rover1, Rover1, Rover1, Rover2, Rover2, Rover2, Rover2 ). So the user can choose which mode they preffer.
  - Sequential: This mode allows the rovers to move in a R1-R1-R1-R2-R2-R2 pattern.
  - Parallel: This mode allows the rovers to move in a R1-R2-R1-R2-R1-R2 pattern.

## To-Do's

If I had more time, I would abstract the styles away. Normally, I would use a combination of Material-UI and Styled-components, but in this case, I went full vanilla.
At the time of writing this, I didn't have enough time to build the Unit Tests, hopefully I will do so soon.

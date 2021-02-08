
# NASA to MARS
![](https://github.com/QuintyHH/NASA-to-MARS-next.js/blob/main/public/assets/images/missiontomars.PNG)
## Table of contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [About](#about)
- [To-Do's](#to-dos)
- [Limitations](#limitations)

## React 
### [WIP: React Version](https://github.com/QuintyHH/NASA-to-MARS-React-Node) This was my initial project, abandoned so I can use Next.js. Browsing the code would show how I would have used the libraries mentioned at [Limitations](#limitations)

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
  
 Once a mode is chosen, a user can commit by clicking the `Update Mode` button.
  
### File Manager

A user can opt to either upload a new routes file (it needs to somewhat respect the file formatting), or reload the last file run.
By default, the program comes with the default `movements.csv` file already preloaded.

### The Console

The console on the left side of the screen logs the activity of each rover.

### Mission Control

Once the grid is set, the mode is chosen, and routes have been established, there is only one thing left. Launch the mission!
This will allow the rovers to go on their merry ways.
Once a mission has been started, most of the UI gets disabled, but of course, you can still abort mission mid-way!


### Event Validation and Snackbar

Throughout the mission, ther will be various events (such as Mission finished succesfully!) that will trigger on-screen event validation messages.

## To-Do's

- If I had more time, I would abstract the styles away in separate files. 
- At the time of writing this, I didn't have enough time to build the Unit Tests, hopefully I will do so soon.
- Create a Manual navigation mode. Fairly simple to do, but time was limited.

## Limitations

Normally, I would use a suite of modules for Quality of Life.
- redux : Fairly obvious, state management was instead done via the useContext hook.
- axios : Better alternative to fetch, would have allowed some advanced configuration.
- saga : Sagas as middleware would have allowed for more advanced state control, and event watchers.
- styled-components : My preffered method of applying styles.
- material-ui : Prebuilt input fields and icons would have made life better and UI prettier.
- formik : Form control, error handling etc.
- yup : Validation for formik, would have been easier to validate input fields.
- react-testing-library : Alternative to Enzyme, quality of life.
- prop-types : Prop validation, but it turns out, for this particular project, I didn't use too many props.

You can check out the code with these libs included if you navigate to [the top](#react).

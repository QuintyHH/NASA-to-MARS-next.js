const express = require('express')
const next = require('next')
const fs = require('fs')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  server.post('/api/upload', (req, res) => processFile(req, res))
  server.post('/api/use-existing', (_, res) => readFile(res))
  server.all('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> NASA is spying on http://localhost:${port}`)
  })
})

const processFile = (req, res) => {
  let writeStream = fs.createWriteStream('./public/assets/backup/movements.csv')
  req.pipe(writeStream)
  req.on('end', () => readFile(res))
}

const readFile = (res) => {
  fs.readFile('./public/assets/backup/movements.csv', 'utf8', (err, data) => {
    if (data) {
      res.send(constructMission(data))
    } else {
      console.err(err)
    }
  })
}

const constructMission = (data) => {
  return data
    .trim() //trimming for empty rows... csv files tend to have these
    .split('\n')
    .reduce((acc, curr, index) => {
      const [initString, routeString] = curr.split('|') // split the pipe to get initial position and routes
      const initialPosition = initString.split(' ').reduce(
        //build our initial position in an agreeable format
        (acc, curr, index) => {
          switch (index) {
            case 0:
              return { ...acc, xAxis: Number(curr) }
            case 1:
              return { ...acc, yAxis: Number(curr) }
            case 2:
              return { ...acc, orientation: mapOrientation(curr) }
          }
        },
        { moveCount: 0 }
      )
      const route = routeString
        .toUpperCase()
        .split('')
        .filter((e) => e === 'M' || e === 'R' || e === 'L')
      return (acc = [
        ...acc,
        {
          name: 'Rover' + (index + 1),
          status: 'PENDING',
          color: `rgb(${randomizeRGB()}, ${randomizeRGB()}, 0)`, //blue is for suckers, not Mars
          route,
          initialPosition,
        },
      ])
    }, [])
}

const mapOrientation = (str) => {
  switch (str) {
    case 'N':
      return 0
    case 'E':
      return 90
    case 'S':
      return 180
    case 'W':
      return 270
    default:
      return 0
  }
}

//we give it a min of 100 so we dont get colors on the lower end of the spectrum
const randomizeRGB = () => Math.floor(Math.random() * (256 - 100) + 100)

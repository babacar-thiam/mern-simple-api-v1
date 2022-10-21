import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import compress from 'compression'
import cors from 'cors'
import helmet from 'helmet'
import userRoutes from './routes/user.routes'
import authRoutes from './routes/auth.routes'

const CURRENT_WORKING_DIR = process.cwd()

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(compress())
app.use(helmet())
app.use(cors())

app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))

// Mount Routes
app.use('/', userRoutes)
app.use('/', authRoutes)

app.get('/', (req, res) => {
  res.json({
    "message": "API v1"
  })
})

// Send request api/v1 and get json response
app.get('/api/v1', (req, res) => {
  res.json({
    "message": "Welcome API v1"
  })
})

app.use((err, req, res, next) => {
  if(err.name === 'UnauthorizedError') {
    res.status(401).json({
      error: "unauthorized"
    })
  } else if(err) {
    res.status(400).json({
      error: "unauthorized"
      })
    console.log(err)
  }
})

export default app

import mongoose from 'mongoose'
import config from './../config/config'
import app from './express'

mongoose.connect(config.mongoUri).
  catch(error => handleError(error))

app.listen(config.port, (err) => {
  if (err) {
    console.log(err)
  }
  console.info('Server started on port %s.', config.port)
})



const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3005,
  jwtSecret: process.env.JWT_SECRET || "mysecretkey",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    '/mernSimpleAPI'
}

export default config

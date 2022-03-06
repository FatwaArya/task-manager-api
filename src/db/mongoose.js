const mongoose = require('mongoose')
//use then
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI_DEV)
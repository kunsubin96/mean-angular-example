var mongoose = require('mongoose');
var Config=require('../config');
mongoose.Promise = global.Promise;
var MONGO_URI = `mongodb://${Config.MONGO_HOST}:${Config.MONGO_PORT}/${Config.MONGO_DATABASE_NAME}`;
mongoose.connect(MONGO_URI)
  .then(() =>  console.log('connection successful'))
  .catch((err) => console.error(err));
module.exports=mongoose;
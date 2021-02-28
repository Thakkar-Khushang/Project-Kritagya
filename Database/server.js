const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://starkritter:WO22bEGpsWzLN2dW@cluster0.jzmkj.mongodb.net/Kritagya?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify : false
}).then(()=>{
    console.log('Connected to Database')
})
.catch((err)=>{
    console.error('Error occured connecting to Database. \n${err}');
})
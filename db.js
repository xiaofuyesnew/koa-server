const mongoose = require('mongoose')
const dbInfo = require('./config').dbInfo


console.log(dbInfo)
/**/
const myDb = mongoose.createConnection(dbInfo, {
    useMongoClient: true
})

myDb.then(db => {
    console.log('connection ok!')
})
/**/
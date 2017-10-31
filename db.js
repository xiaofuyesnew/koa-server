const mongoose = require('mongoose')
const dbInfo = 'mongodb://myblog:faye520@xiaofuyesnew.com/myblog'

/**/
const myDb = mongoose.createConnection(dbInfo, {
    useMongoClient: true
})

myDb.then(db => {
    console.log('connection ok!')
})
/**/
const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/tasks_app";
const conection = async () => {
    try {
        const data = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
        console.log("Connect to the Database")
    } catch (error) {
        console.error(error)
    }
}


module.exports = conection;
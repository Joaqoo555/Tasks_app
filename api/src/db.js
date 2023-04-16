const mongoose = require("mongoose")

const url = "mongodb://127.0.0.1:27017/tasks_app";
const URL_WEB = "mongodb+srv://joaqo_01:Joaquin.2001@task-cluster.x6iirmu.mongodb.net/?retryWrites=true&w=majority"
const conection = async () => {
    try {
await mongoose.connect(url)
        console.log("Connect to the Database")
    } catch (error) {
        console.error(error)
    }
}


module.exports = conection;


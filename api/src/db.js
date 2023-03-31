const mongoose = require("mongoose")


const conection = async () => {
    try {
        const url = "mongodb+srv://joaquindeveloper:Joaquin.2001@clusterjoaqo.gujbi6o.mongodb.net/?retryWrites=true&w=majority";
        await mongoose.connect(url)
        console.info("Connect to the Database")
    } catch (error) {
        console.info("Error to connect at the Database")
        console.error(error)
    }
}

module.exports = conection
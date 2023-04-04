const { APP } = require("./src/app.js");
const conection = require("./src/db.js");

const port = process.env.PORT || 3010;


APP.listen(port, async () => {
  try {
    //Conection to the database 
    await conection();
    console.log(`Listening on localhost:${port}`);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
});

const { APP } = require("./src/app.js");
const conection = require("./src/db.js");
const axios = require("axios");
const port = process.env.PORT || 3010;
const authorizeTn = async ()=> {

  axios.post('https://www.tiendanube.com/apps/authorize/token', {
  client_id: '6819',
  client_secret: 'd8707d0d8c071ef1e348342ef060e33a7090a45236ad3e80',
  grant_type: 'authorization_code',
  code: 'd8707d0d8c071ef1e348342ef060e33a7090a45236ad3e80'
})
.then((response) => {
  console.log("TIENDA NUBE");

  console.log(response.data);
})
.catch((error) => {
  console.log(error);
});

}

APP.listen(port, async () => {
  try {
    //Conection to the database 
    await conection();
    await authorizeTn()
    console.log(`Listening on localhost:${port}`);
  } catch (error) {
    console.log("error");
    console.log(error);
  }
})

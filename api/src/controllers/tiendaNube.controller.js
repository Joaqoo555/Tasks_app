const axios = require('axios');
const ID_TIENDA_NUBE = ""



const getProductTn = async (req, res) => {
    const product = req.body



    res.status(200).json(product)
}
const getAllProductsTn = async (req, res) => {
    // app.get('/productos', function(req, res) {
    //     const url = 'https://api.tiendanube.com/v1/ID_DE_TIENDA/products';
    //     const config = {
    //       headers: {
    //         'User-Agent': 'axios',
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer API_KEY'
    //       }
    //     };
    //     axios.get(url, config)
    //       .then(function(response) {
    //         const productos = response.data;
    //         res.send(productos);
    //       })
    //       .catch(function(error) {
    //         console.log(error);
    //         res.sendStatus(500);
    //       });
    //   });
        const url = `https://api.tiendanube.com/v1/${ID_TIENDA_NUBE}/products`;
        const config = {
          headers: {
            'User-Agent': 'axios',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer API_KEY'
          }
        };
    axios.get()

    res.status(200).json(products)
}


module.exports = {
    getProductTn,
    
}
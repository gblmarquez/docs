const fs = require('fs');
const swaggerCombine = require('swagger-combine');
 
swaggerCombine('swagger.yaml')
    .then(res => fs.writeFileSync('./static/redoc-json/productInvoice.json', JSON.stringify(res)))
    .catch(err => console.error(err));
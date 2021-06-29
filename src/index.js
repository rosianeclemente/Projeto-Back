const express = require ('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

app.use(cors()); // segurança, caso for para produção, mudar o cors.
app.use(express.json());
app.use(routes);




app.listen(3333);
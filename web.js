const path = require('path');

const http = require('http');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');

const express =require('express');

const app = express();

const adminRoutes =require('./routes/admin');
const shopRoutes = require('./routes/shop');


app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname ,'public')));



app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);



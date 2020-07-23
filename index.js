const express = require('express');
const compression = require('compression');
const express_minify = require('express-minify');
//const pug = require('pug');
const sqlite3 = require('sqlite3');

const app = express();

// PUG FUNCTIONS
//const def = pug.compileFile('');

//app.use();

// COMPRESSION
app.use(compression());

// MINIFICATION
app.use(express_minify());

// STATIC SERVE
app.use(express.static('public/'));

// INSERT INFORMATION
//app.use(/.html$/);

app.get('/*');

app.listen(80);

// TEMPLATING
function template(req, res, next){
    //res.
    next();
}
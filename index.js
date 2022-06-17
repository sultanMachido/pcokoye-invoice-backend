const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const database = require('./db/db');
const user = require('./route/user')
const login = require('./route/login')
const guest = require('./route/guest')
const errand = require('./route/errand')
const complaint = require('./route/complaint')
const panic = require('./route/panic')
const log = require('./route/log')
const estate = require('./route/estate')
const settings = require('./route/settings')


const PORT = process.env.PORT || 5000;
// app.get('/',(req,res)=>res.send('Hi world!'))
app.use(express.json());
app.use(cors());
app.use('/api',user);
app.use('/api',login);
app.use('/api',guest);
app.use('/api',errand);
app.use('/api',complaint);
app.use('/api',panic);
app.use('/api',log);
app.use('/api',estate);
app.use('/api',settings);


app.listen(PORT,() => console.log(`The server has started on port ${PORT}`));
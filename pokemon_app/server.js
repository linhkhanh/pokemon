const express= require('express');
const app = express();
app.use(express.static('public'))
const port = process.env.PORT || 3000;

require('./routes')(app)

app.listen(port, () => {
    console.log('I am listening on port: ', port);
})

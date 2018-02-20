const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const app = express()
const sql = require('mssql')
const data = require('./database/data')

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())


require('./database/data')


app.listen(process.env.PORT || 8081)


sql.connect(data, function (err) {

    if (err) console.log(err);

    app.post('/register', (req, res) => {

        // console.log(JSON.stringify(req.body));
        // console.log(`${JSON.stringify(req.body.place)}`);
        const request = new sql.Request();
        request.query(`
        exec [dbo].[sp_Registration_user_GIOC_RegistrationAndSendMail] 
        '${req.body.place}',
        '${req.body.pib}',
        '${req.body.phone}',
        '${req.body.email}', 
        '${req.body.udid}'
        `, function (err, recordset) {

            if (err) console.log(err)

        });
    })


})
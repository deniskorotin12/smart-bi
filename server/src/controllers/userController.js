const path = require("path");
const nodemailer = require('nodemailer');
const fs = require("fs");
const con = require('../database/connection');
const con_controller = require('../database/con_controller')();
con.connect(con_controller);


exports.login = function (req, res) {
    const login = req.body.login
    const password = req.body.password

    if (login == 'smartbi' && password == '11223344q4') {
        return res.send('Успішно авторизовані');
    } else {
        return res.status(401).send("Неправильні дані");
    }
};

exports.register = function (req, res) {
    const transporter = nodemailer.createTransport('smtps://sender@smartbi.com.ua:PCN4WrSGKC2e@mx1.mirohost.net');
    const mailOptions = {
        from: 'sender@smartbi.com.ua',
        to: 'sender@smartbi.com.ua',
        subject: 'Registration User ✔',
        text: '',
        html: `
                <style type="text/css"> 
                H1 { 
                font-family: Arial, Helvetica, Verdana, sans-serif;
                font-size: 100%;
                font-weight: lighter;
                color:steelblue;
                }
                <H1>Заявка на регистрацию</H1>
                <style type="text/css">
                table {border-collapse: collapse; color:black; }
                th.vertical{-webkit-transform: rotate(-90deg);
                height:100px;
                width:10px;
                table {
                width: 100%;
                background: steelblue;
                color: white;
                border-spacing: 1px;
                }

                TD {
                background: white;
                color: darkslateblue;
                padding: 5px;
                }
                </style>
                <table border="1">

                <tr>
                    <th>Посада та організація</th>
                    <th>ПІБ</th>
                    <th>Контактный номер телефона</th>
                    <th>Контактный Email</th>
                    <th>UDID номер устройства</th>
                </tr>
                <tbody>
                    <tr>
                        <td>${req.body.pib}</td>
                        <td>${req.body.place}</td>
                        <td>+380${req.body.phone}</td>
                        <td>${req.body.email}</td>
                        <td>${req.body.udid}</td>
                    </tr>
                </tbody>

`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        const queryString = `
            INSERT INTO users(pib,place,phone,email,udid) VALUES('${req.body.pib}','${req.body.place}','+380${req.body.phone}','${req.body.email}','${req.body.udid}');
        `;

        con.query(queryString, (err)=>{
            if(err) console.log(err);
            res.send('Registration confirm')
        });
    });

}


exports.getJson = function(req, res){
    const queryString = `
            SELECT * FROM users
        `;
    con.query(queryString, (err, result)=>{
            if(err) console.log(err);
            res.send(result)
        });
}
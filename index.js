const express     = require('express');
const port        = process.env.PORT || 4000;
const app         = express();
const dest        = `${__dirname}/public`;
const nodemailer  = require('nodemailer');
const bodyParser  = require('body-parser');
const rp     = require("request-promise");


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'alfoorsa1@gmail.com',    // your email here
    pass: 'alfoorsa12345'          // your password here
  }
});

var send = function(req,res){
  var htmlContent = req.body.message;
  console.log(req.body.email);
  var mailOptions = {
    to: req.body.email,                  // your email here
    subject: 'Alfoorsa Activation',
    from: 'Alfoorsa <alfoorsa1@gmail.com>',
    sender: req.body.email,
    html: htmlContent
  };
  transporter.sendMail(mailOptions, function(err, info){
    if (err) {
      console.log(err);
    }else{
      console.log('Message sent: ' + info.response);
      return res.json(201, info);
    }
  });
}
var emailActivation = (req, res) =>{
  const options = {
    uri: 'http://ec2-54-229-121-200.eu-west-1.compute.amazonaws.com:3000/user/email/validation',
    json: true,
    method: 'POST',
    headers: {
        "Authorization": "Bearer " + req.params.token
    }
  };

  rp(options)
    .then(data => {res.sendFile(`${dest}/js/activation.page.html`)})
    .catch(function (err) {
      console.log(err);
    });




 //  return $.ajax({
 //   type: 'POST',
 //   url: 'http://ec2-54-229-121-200.eu-west-1.compute.amazonaws.com:3000/user/email/validation',
 //   headers: {"Authorization": "Bearer " + req.body.token},
 //   success: function(data){console.log(data)}
 // });
}




app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(dest));
app.post('/mail', send);
app.get('/activation/:token', emailActivation)

app.get('/*', (req, res) => res.sendFile(`${dest}/index.html`));

app.listen(port, () => console.log(`Express has started on port: ${port}`));

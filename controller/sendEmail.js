const nodemailer=require('nodemailer');
const sgMail = require('@sendgrid/mail')
const sendEmailEthernal= async(req,res)=>{
    let testAccount= await nodemailer.createTestAccount();
    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'josefina.roberts30@ethereal.email',
            pass: 'CccT6tYXcfKHJww7J5'
        }   
    });

    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com ,errakeshgupta007@gmail.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    res.json(info);
}

const sendEmail=async(req,res)=>{
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
        to: 'errakeshgupta007@gmail.com', // Change to your recipient
        from: 'rakeshit258@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
      };
      const info= await sgMail.send(msg);
      res.json({info});
}



module.exports=sendEmail;
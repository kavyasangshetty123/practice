// import nodemailer from 'nodemailer'
let nodremailer1=require('nodemailer')
console.log("im running",nodremailer1)

let transport=nodremailer1.createTransport({
    service:'gmail',
    auth:{
        user:'chapineelakanth@gmail.com',
        pass:'xqhtdtiyyxclqngh'
    }
    
},{
    tls:{
        rejectUnauthorized: false
    }
})

let mailoption={
    from:'chapineelakanth@gmail.com',
    to:'kavyasangshetty123@gmail.com',
    subject:'testing mail',
    text:'hello how r u'

}

transport.sendMail(mailoption,(err,res)=>{
if(err)throw err;
console.log("mail sent")
})
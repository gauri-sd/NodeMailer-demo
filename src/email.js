const nodemailer = require('nodemailer'),
    creds = require('./creds'),
    transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: creds.user,
            pass: creds.pass,
        },
    });
    //console.log(creds);
const EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');

    //console.log(transporter);

function sendEmail (obj) {
    return transporter.sendMail(obj);
}

const loadTemplate = (templateName, contexts) => {
    try{
        console.log("Temp Name : ",templateName);

        // let template = new EmailTemplate(path.join(__dirname, 'src/templates', templateName));
        let template = new EmailTemplate(path.join(__dirname, 'templates', templateName));
        console.log('Template: ',template);
    return Promise.all(contexts.map((context) => {
        console.log('Context: ',context)
        return new Promise((resolve, reject) => {
            console.log('hi');
            template.render(context, (err, result) => {
                console.log("Hello", err,result);
                if (err) {reject(err);
                
                console.log('Reject',err);
                }
                else 
                {
                    resolve({
                    context: context,
                    email: result,
                    
                });
                }
            });
        });
    }));
    }catch(error)
    {
        console.log('Error email1: ',error);
    }
    
}

exports.mailSend = async(newData) => {
    try{
    
        console.log(newData);
        let data = [];
        data.push(newData);
        console.log(data);
        
        loadTemplate('welcome', data).then((results) => {
        console.log('Result : ',results);
        return Promise.all(results.map((result) => {
            sendEmail({
                to: result.context.email,
                from: 'Me',
                subject: result.email.subject,
                html: result.email.html,
                text: result.email.text,
            });
        }));
    }).then(() => {
        console.log('Done!');
    });
}catch(error)
{
    console.log('Error email: ',error);
}
}

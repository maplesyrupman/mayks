const ejs = require('ejs')
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    service: 'gmail',
    auth: {
        // type: "OAuth2",
        // clientId: process.env.CLIENT_ID,
        // clientSecret: process.env.CLIENT_SECRET,
        // refreshToken: process.env.REFRESH_TOKEN,
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,

    },
});

function getClientHtml(body) {
    return `
    <p>Hello ${body.name},</p>
    <p>Thank you for your interest in receiving a quote from Tedesco Group.</p>
    <p>The next step is to schedule an introductory phone call to discuss the scope of the project you have in mind. Please let us know when you are available and we will send you a calendar invitation.</p>
    <p>We are looking forward to hearing from you!</p>
    
    <p>Thank you, <br>
    Ester Lastname <br>
    Secretary <br>
    Tedesco Group
    </p>
    `
}

function getAdminHtml(body) {
    return `
    <p>Tedesco Group,</p>
    <p>You have received a new contact form submission! Congratulations, please see details below.</p>
    <table>
        <tr>
            <td>Name</td>
            <td>${body.name}</td>
        </tr>
        <tr>
            <td>Email</td>
            <td>${body.email}</td>
        </tr>
        <tr>
            <td>Phone</td>
            <td>${body.phone}</td>
        </tr>
        <tr>
            <td>Message</td>
            <td>${body.message}</td>
        </tr>
    </table>
    `
}

export default function handler({ body }, res) {
    const clientMailOptions = {
        from: 'william@rwilabs.io',
        to: body.email,
        subject: 'Quote Request Received',
        html: getClientHtml(body)
    }

    const adminMailOptions = {
        from: 'william@rwilabs.io',
        to: 'will_weiland@hotmail.ca',
        subject: 'Quote Request',
        html: getAdminHtml(body)
    }

    try {
        transporter.sendMail(clientMailOptions, function (err, data) {
            if (err) {
                console.error('mailer', err);
            } else {
                console.log("Client email sent successfully");
            }
        });

        transporter.sendMail(adminMailOptions, function (err, data) {
            if (err) {
                console.log('admin mailer', err)
            } else {
                console.log('Admin email sent successfully')
            }
        })

        res.status(200).json({ message: 'Emails sent successfully' })
    } catch (err) {
        res.status(400).json({ message: err })
    }
}
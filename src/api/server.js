// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json()); // Parse JSON bodies

// // Email configuration
// const transporter = nodemailer.createTransport({
//     service: 'gmail', // You can use other email services like 'Outlook', 'SMTP', etc.
//     auth: {
//         user: 'thomasquarshie36@gmail.com',
//         pass: 'oawxuzxmuxdgpmbf' 
//     }
// });

// // API route to send email
// app.post('/api/send-contact-message', (req, res) => {
//     const { name, email, subject, message } = req.body;

//     const mailOptions = {
//         from: email,  // Sender's email (could be from a form input)
//         to: 'thomasquarshie36@gmail.com',  // Recipient's email (your email)
//         subject: subject,  // Subject of the email
//         text: `Message from: ${name} <${email}>\n\n${message}`  // The content of the message
//     };

//     transporter.sendMail(mailOptions, (error, info) => {
//         if (error) {
//             console.log(error);
//             return res.status(500).json({ error: 'Failed to send the message. Please try again later.' });
//         } else {
//             return res.status(200).json({ message: 'Message sent successfully!' });
//         }
//     });
// });

// // Start the server
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
// });
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { name, email, subject, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.EMAIL_USER,
        subject: subject,
        text: `Message from: ${name} <${email}>\n\n${message}`
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Message sent successfully!' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to send message' });
    }
}

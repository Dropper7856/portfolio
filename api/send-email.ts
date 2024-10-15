import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, message } = req.body;

        // Configurer Nodemailer avec les informations SMTP
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: true, // Utiliser SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        try {
            await transporter.sendMail({
                from: `${firstname} ${lastname} <${email}>`,
                to: process.env.SMTP_RECEIVER,
                subject: `Message from ${firstname} ${lastname}`,
                text: message,
                html: `<p>First name: ${firstname}</p>
               <p>Last name: ${lastname}</p>
               <p>Email: ${email}</p>
               <p>Message: ${message}</p>`,
            });

            res.status(200).json({ message: 'Email sent successfully' });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({ message: 'Error sending email', error });
        }
    } else {
        res.status(405).json({ message: 'Method not allowed' });
    }
}

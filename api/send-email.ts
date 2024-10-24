// eslint-disable-next-line @typescript-eslint/no-require-imports
const nodemailer = require('nodemailer');

module.exports = async function handler(req: { method: string; body: { firstname: any; lastname: any; email: any; message: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; error?: unknown; }): void; new(): any; }; }; }) {
    if (req.method === 'POST') {
        const { firstname, lastname, email, message } = req.body;

        // Configurer Nodemailer avec les informations SMTP récupérées des variables d'environnement
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT || "465"),
            secure: true, // Utiliser SSL
            auth: {
                user: process.env.SMTP_USER, // Email de l'authentification SMTP
                pass: process.env.SMTP_PASS, // Mot de passe SMTP
            },

        });
        console.log({ firstname, lastname, email, message });
        console.log('SMTP settings:', {
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            user: process.env.SMTP_USER,
        });

        try {
            // Envoyer l'email
            await transporter.sendMail({
                from: `${firstname} ${lastname} <${email}>`, // Utilisateur du formulaire comme expéditeur
                to: process.env.SMTP_RECEIVER, // Ton email où tu reçois les messages
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
};

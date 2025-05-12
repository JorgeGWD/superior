import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: process.env.SMTP_SECURE === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.SMTP_USER}>`,
            to: 'jorge.rodriguez.r@gmail.com',
            subject: 'Nuevo mensaje desde el formulario de contacto',
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Mensaje:</strong><br>${message}</p>
            `,
        });

        res.json({ success: true, message: 'Correo enviado correctamente' });
    } catch (error) {
        console.error('Error al enviar correo:', error);
        res.status(500).json({ success: false, message: 'Error al enviar el mensaje' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
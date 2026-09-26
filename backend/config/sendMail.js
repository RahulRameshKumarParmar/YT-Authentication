import { createTransport } from 'nodemailer';

const sendMail = async (email, subject, html) => {
    const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "Rahul Parmar",
            pass: "Rahul@123",
        },
    })

    await transport.sendMail({
        from: "Rahul Parmar",
        to: email,
        subject: subject,
        html: html,
    })
}

export default sendMail;
import { createTransport } from 'nodemailer';

const sendMail = async ({email, subject, html}) => {
    const transport = createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: process.env.SMTP_User,
            pass: process.env.SMTP_Password,
      },
    })

    await transport.sendMail({
        from: process.env.SMTP_User,
        to: email,
        subject: subject,
        html: html,
    })
}

export default sendMail;
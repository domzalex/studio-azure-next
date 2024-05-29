import nodemailer from 'nodemailer'

const email = process.env.EMAIL
const pass = process.env.EMAIL_PASSWORD

export const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    }
})

export const mailConfig = {
    from: email,
    to: 'contact@studioazure.io'
}
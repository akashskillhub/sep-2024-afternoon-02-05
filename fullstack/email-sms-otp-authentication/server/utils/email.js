const nodemailer = require("nodemailer")

exports.sendEmail = ({ to, subject, message }) => new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASS,
        }
    })

    transporter.sendMail({
        to,
        subject,
        text: message
    }, (err) => {
        if (err) {
            console.log(err)
            reject(err)
        }
        console.log("email send")
        resolve("email send success")
    })
})  
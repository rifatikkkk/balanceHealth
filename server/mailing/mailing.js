import User from '../models/userModel.js'
import nodemailer from 'nodemailer'
import { getHtmlStyle } from './htmlStyle.js'


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: "balancehealth78@gmail.com",
        pass: "lxlk njck wptv yowo",
    }
})


export const checkMedbook = async () => {
    const date = new Date()

    const users = await User.find()

    if (!users) return

    for (let i = 0; i < users.length; i++) {
        if (JSON.stringify(users[i]?.medbook) === '{}') break

        Object.values(users[i].medbook).forEach((value, index) => {
            var diffrent = (date - value) / 31536000000     // (1000 / 60 / 60 / 24 / 365) --- 1 year
            if (diffrent > 1) {
                sendMail(index, value, users[i].email, users[i].name)
                console.log(index, value, diffrent, users[i].email, users[i].name)
            }
        })
    }
}

const sendMail = (indexMedbook, valueMedbook, email, name) => {
    let letterDesign = ''
    switch (indexMedbook) {
        case 0:
            letterDesign = getHtmlStyle(name, "Флюрография")
            break;
        case 1:
            letterDesign = getHtmlStyle(name, "Прививка от гриппа")
            break;
        case 2:
            letterDesign = getHtmlStyle(name, "Анализ крови")
            break;
        case 3:
            letterDesign = getHtmlStyle(name, "Анализ мочи")
            break;
        case 4:
            letterDesign = getHtmlStyle(name, "ЭКГ")
            break;

        default:
            break;
    }

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: "Система оповещения обследований!",
        html: letterDesign,
    }
    try {
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) console.log("error", error)
        })
    } catch (error) {
        console.log(error)
    }
}
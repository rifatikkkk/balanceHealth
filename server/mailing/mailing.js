import User from '../models/userModel.js'
import nodemailer from 'nodemailer'
import { getHtmlStyle } from './htmlStyle.js'
import Hospital from '../models/hospitalModel.js'


const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    auth: {
        user: "balancehealth78@gmail.com",
        pass: "lxlk njck wptv yowo",
    }
})

// const getHospitals = async (district) => {
//     // let hospitals = await Hospital.find({ district }) // all hospitals -> trouble with mailing
//     let hospital = await Hospital.findOne({ district })
//     return hospital
// }

export const checkMedbook = async () => {
    const date = new Date()

    const users = await User.find()

    if (!users) return

    for (let i = 0; i < users.length; i++) {
        if (JSON.stringify(users[i]?.medbook) === '{}') break

        Object.values(users[i].medbook).forEach((value, index) => {
            var diffrent = (date - value) / 31536000000     // (1000 / 60 / 60 / 24 / 365) --- 1 year
            if (diffrent > 1) {
                sendMail(index, users[i].email, users[i].name, users[i].district)
                // console.log(index, value, diffrent, users[i].email, users[i].name)
            }
        })
    }
}

const sendMail = async (indexMedbook, email, name, district) => {
    let hospital = await Hospital.findOne({ district })

    let letterDesign = ''
    switch (indexMedbook) {
        case 0:
            letterDesign = getHtmlStyle(name, "Флюрография", hospital)
            break;
        case 1:
            letterDesign = getHtmlStyle(name, "Прививка от гриппа", hospital)
            break;
        case 2:
            letterDesign = getHtmlStyle(name, "Анализ крови", hospital)
            break;
        case 3:
            letterDesign = getHtmlStyle(name, "Анализ мочи", hospital)
            break;
        case 4:
            letterDesign = getHtmlStyle(name, "ЭКГ", hospital)
            break;

        default:
            break;
    }

    // console.log(letterDesign)

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
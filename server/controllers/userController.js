import User from "../models/userModel.js"
import sendToken from '../utils/jwtToken.js'

export const registerUser = async (req, res) => {
    const { name, password, email, district } = req.body

    const userSearch = await User.findOne({ email })

    if (userSearch) {
        return res.status(404).json({
            message: "Пользователь с такой почтой уже существует!",
        })
    }

    else {
        const user = await User.create({
            name,
            password,
            email,
            district
        })
        sendToken(user, 201, res)
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body

    if (!email || !password) {
        return res.status(400).json({
            message: "Пожалуйста, введите почту | пароль!",
        })
    }

    const user = await User.findOne({ email }).select("+password")
    if (!user) {
        return res.status(404).json({
            message: "Пользователь не найден! Попробуйте еще раз!",
        })
    }

    const isPasswordMatched = user.comparePassword(password)
    if (!isPasswordMatched) {
        return res.status(404).json({
            message: "Введен неверный пароль! Попробуйте еще раз!",
        })
    }

    sendToken(user, 201, res)
}

export const logoutUser = async (req, res) => {

    const { token } = req.cookies

    if (!token)
        return res.status(401).json({
            message: "Для выхода из аккаунта следует войти в него!",
        })

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    })

    res.status(200).json({
        success: true,
        message: "Выход осуществлен успешно!",
    })
}

export const addCheckUps = async (req, res, next) => {
    try {
        const { user } = req

        console.log(req.body)

        const updatedUser = await User.findByIdAndUpdate(user.id,
            { $set: { "medbook": req.body } },
            { new: true, })

        return res.status(200).json(updatedUser)
    } catch (error) {
        next(error)
    }
}

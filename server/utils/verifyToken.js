import jwt from 'jsonwebtoken'


export const verifyToken = (req, res, next) => {
    const { token } = req.cookies

    if (!token)
        return res.status(401).json({
            message: "Вы не авторизованы!",
        })


    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) return res.status(403).json({
            message: "Токен не действительный!"
        })
        req.user = user
        next()
    })
}
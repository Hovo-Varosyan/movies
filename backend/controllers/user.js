const userModel = require("../models/user")

class User {
    
    static reName = async (req, res) => {
        try {
            const user = await userModel.findByIdAndUpdate({ _id: req.body.id }, { name: req.body.name })
            if (user) {
                return res.status(200).json({ message: 'Успешно обновлено' });
            } else {
                return res.status(404).json({ error: 'Пользователь не найден' });
            }
        } catch (err) {
            res.status(500).json({ error: 'Ошибка при обновлении пользователя' });
        }
    }

    static delete = async (req, res) => {
        try {
            const { id } = req.user.id
            const user = await userModel.findById({ _id: id })
            if (!user) {
                return res.status(404).json({ message: "ползовател не наиден" })
            }
            if (user.status === 'admin') {
                return res.status(403).json({ message: "недостатчно прав" })
            }
            const userDelete = await userModel.deleteOne({ _id: id })
            if (userDelete) {
                res.clearCookie('t_user', { httpOnly: true, domain: 'localhost' })
                return res.status(200).json({ message: 'ползовател удалён' })

            } else if (userDelete.deletedCount === 0) {
                return res.status(404).json({ message: "ползовател не наиден" })
            } else {
                return res.status(422).json({ message: "422 орерация не удалос" })
            }

        } catch (err) {
            return res.status(404).json({ message: "500 ошибка сервера" })

        }
    }
}

module.exports = User
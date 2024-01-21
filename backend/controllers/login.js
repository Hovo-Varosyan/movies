const bcrypt = require("bcrypt");
const userModel = require('../models/user.js');
const jwt = require('jsonwebtoken')

class Login {
    static logout = async (req, res) => {
        try {
            res.clearCookie('t_user', { httpOnly: true, domain: 'localhost' })
            return res.status(200).json({ status: 'successful' })
        } catch (err) {
            return res.status(520).json({ message: '520 Unknown error' })
        }
    }

    static login = async (req, res) => {
        
        try {
            const { email, password } = req.body;
            if (!(email && password)) {
                res.status(401).json({ message: 'email и парол обезателны' })
            }
            const person = await userModel.findOne({ email })
            if (person) {
                const passworHash = await bcrypt.compare(password, person.password)
                console.log(passworHash)
                if (passworHash) {
                    console.log(true)
                    const token = jwt.sign({ id: person.id, name: person.name, img: person.img, role: person.role }, process.env.TOKEN_KEY, { expiresIn: "30d" })
                    res.cookie("t_user", token, { domain: 'localhost', httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000, signed: true })
                    return res.status(200).json({
                        status: "ok",
                        id: person.id
                    });
                } else {
                    return res.status(401).json({ message: 'неправилны логин или парол' })
                }
            } else {
                return res.status(401).json({ message: 'неправилны логин или парол' })
            }
        } catch (err) {
            console.log(err)
            return res.status(520).json({ message: '520 Server error' });
        }

    }

    static register = async (req, res) => {
        const { name, email, password } = req.body;
        const role = "user";

        try {
            const salt = await bcrypt.genSalt(11);
            const hash = await bcrypt.hash(password, salt);
            const data = new userModel({ name, email, password: hash, role });

            const savedUser = await data.save();
            const token = jwt.sign({ id: savedUser.id, name, img: savedUser.img, role }, process.env.TOKEN_KEY, { expiresIn: "30d" })
            res.cookie("t_user", token, { domain: 'localhost', httpOnly: true, maxAge: 30 * 24 * 60 * 60 * 1000, signed: true })
            return res.status(201).json({
                status: "ok",
                id: savedUser.id
            });

        } catch (err) {
            if (err.code === 11000) {
                return res.status(400).json({ message: "Этот email уже используется" });
            } else {
                console.log(err)
                return res.status(500).json({ message: "500 Unknown error" });
            }
        }
    }
}

module.exports = Login;

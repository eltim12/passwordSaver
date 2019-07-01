const Password = require('../models/password')

module.exports = {

    findAll(req, res) {
        Password
            .find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                console.log('error!')
                res.status(500).json({
                    msg: 'internal server error.'
                })
            })
    },

    create(req, res) {
        Password
            .create({
                website: req.body.website,
                email: req.body.email,
                name: req.body.name
            })
            .then(newPassword => {
                res.status(201).json(newPassword)
            })
            .catch(err => {
                res.status(500).json({
                    msg: 'internal server error'
                })
            })
    }
}
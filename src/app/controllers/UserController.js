const User = require('../models/User.js');
const { multiMongooseToObject } = require('../../util/mongoose.js');
const bcrypt = require('bcrypt');
class SiteController {
    //[POST] /user/login
    async login(req, res, next) {
        try {
            var items = await Item.find({});
            res.render('home', {
                items: multiMongooseToObject(items),
            });
        } catch (error) {
            next(error);
        }
    }

    //[Post] /user/register
    async register(req, res, next) {
        var registerData = req.body;

        //Check email co ton tai hay khong
        User.find({ email: registerData.email })
            .exec()
            .then((user) => {
                console.log(user);
                if (user.length > 0) {
                    res.send('Mat khau da ton tai');
                    return;
                }

                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(
                        registerData.password,
                        salt,
                        function (err, hash) {
                            if (err) {
                                res.send('Khong the dang ky tai khoan');
                                return;
                            }
                            registerData.password = hash;
                            User.create(registerData)
                                .then(() => {
                                    res.redirect('/');
                                })
                                .catch(next);
                        },
                    );
                });
            })
            .catch(next);
    }

    //[Get] /user/register
    async registerView(req, res, next) {
        res.render('users/register');
    }
}

module.exports = new SiteController();

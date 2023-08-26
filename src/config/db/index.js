const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/thinh_shopping_dev');
        console.log('connect thanh cong!');
    } catch (error) {
        console.log('connect fail!');
    }
}

module.exports = { connect };

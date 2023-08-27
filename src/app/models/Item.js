const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-updater');
var mongoose_delete = require('mongoose-delete');
mongoose.plugin(slug);

const Item = new Schema(
    {
        name: { type: String, maxLength: 255, require: true },
        description: { type: String, maxLength: 600 },
        image: { type: String, maxLength: 255 },
        video: { type: String, maxLength: 255 },
        cost: { type: Number, maxLength: 255 },
        slug: { type: String, slug: 'name', unique: true },
    },
    {
        timestamps: true,
    },
);

Item.plugin(mongoose_delete, { overrideMethods: 'all' });

module.exports = mongoose.model('Item', Item);

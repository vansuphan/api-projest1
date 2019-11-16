var mongoose = require('mongoose');

var partnerSchema = new mongoose.Schema({
    idproduct : String,
    idpartner: String,
    name: String,
    facebook : String
});
var Partner = mongoose.model('Partner', partnerSchema, 'partners');

module.exports = Partner;
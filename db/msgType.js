const {mongoose} = require("./index");


const msgTypeSchema = mongoose.Schema({
    name: {type: String, required: true}, // 文章类型名称
    type: {type: String, required: true} // 文章类型的类型（）
},{versionKey: false});
const MsgTypeModel = mongoose.model('msgTypes', msgTypeSchema);

module.exports = MsgTypeModel;

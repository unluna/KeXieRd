const {mongoose} = require("./index");


const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: maNong/laoBan
    header: {type: String}, // 头像名称
    post: {type: String}, // 职位
    info: {type: String}, // 个人或职位简介
    company: {type: String}, // 公司名称
    salary: {type: String}, // 工资
},{versionKey: false}
);
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;

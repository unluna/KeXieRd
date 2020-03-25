const {mongoose} = require("./index");


const userSchema = mongoose.Schema({
    username: {type: String, required: true}, // 用户名
    password: {type: String, required: true}, // 密码
    type: {type: String, required: true}, // 用户类型: teacher | student | root
    header: {type: String}, // 头像名称
    grade: {type: String}, // 年级
    department: {type: String}, // 部门
    sex: {type: String} // 性别
},{versionKey: false}
);
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;

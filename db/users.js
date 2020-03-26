const {mongoose} = require("./index");


const userSchema = mongoose.Schema({
        username: {type: String, required: true}, // 用户名
        password: {type: String, required: true}, // 密码
        type: {type: String, required: true}, // 用户类型: teacher | student | root
        header: {type: String, default: "https://user-gold-cdn.xitu.io/2020/3/25/171100dcb2b0cf7f?w=572&h=572&f=png&s=18734"}, // 头像名称
        grade: {type: String, default: "2016"}, // 年级
        department: {type: String, default: ""}, // 部门
        sex: {type: String, default: ""}, // 性别
        nickname: {type: String, default: ""} // 昵称
    }, {versionKey: false}
);
const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;

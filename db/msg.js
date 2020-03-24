const {mongoose} = require("./index");


const msgSchema = mongoose.Schema({
        dateTime: {type: Date, default: Date.now},// 文章创作时间
        departments: {type: [String], required: true}, // 文章部门类型
        labels: {type: [String], required: true}, // 文章内容类型
        msgTitle: {type: String, required: true}, // 文章标题
        msgContent: {type: String, required: true}, // 文章内容
        msgAuthorId: {type: String, required: true}, // 文章作者 Id
        msgAuthorName: {type: String, required: true}, // 文章作者
        goodNum: {type: Number, default: 0}, // 点赞数
        goodUserId: {type: [String], default: []}, // 点赞人
        commentNum: {type: Number, default: 0} // 评论数
    }, {versionKey: false}
);
const MsgModel = mongoose.model('msgs', msgSchema);

// new MsgModel({
//     departments: ["前端"],
//     labels: ["提问"],
//     msgContent: "# haha",
//     msgAuthorId: "5e745fa7dc79b906f236a88b",
// }).save();

module.exports = MsgModel;

const {mongoose} = require("./index");

const msgTypeSchema = mongoose.Schema({
    name: {type: String, required: true}, // 文章类型名称
    type: {type: String, required: true} // 文章类型的类型（）
}, {versionKey: false});
const MsgTypeModel = mongoose.model('msgTypes', msgTypeSchema);

let flag = "init";
const InitData = [
    {
        "_id": "5e76ffc60f092012994deb2a",
        "name": "前端",
        "type": "department"
    },
    {
        "_id": "5e76ffcfe211c812a24babfd",
        "name": "后台",
        "type": "department"
    },
    {
        "_id": "5e76ffd5df612312a6aa7a80",
        "name": "游戏",
        "type": "department"
    },
    {
        "_id": "5e76ffda87c41c12ad8463ce",
        "name": "媒体",
        "type": "department"
    },
    {
        "_id": "5e76fffccc891112bc9d6551",
        "name": "提问",
        "type": "label"
    },
    {
        "_id": "5e77000b2861d412c6c3e650",
        "name": "草稿",
        "type": "label"
    },
    {
        "_id": "5e77001667374612d6931133",
        "name": "文章",
        "type": "label"
    },
    {
        "_id": "5e770024db8d1312debd2ae5",
        "name": "笔记",
        "type": "label"
    },
    {
        "_id": "5e77003b3a919212f5113d79",
        "name": "讨论",
        "type": "label"
    },
    {
        "_id": "5e775165186466049ee8bfa7",
        "name": "杂谈",
        "type": "department"
    }
]
const ifInitDB = () => {
    return new Promise(resolve => {
        MsgTypeModel.findOne({name: "前端"}, (err, userDoc) => {
            if (!err) {
                if (userDoc === null) {
                    resolve("init");
                } else {
                    resolve("notInit");
                }
            } else {
                console.log(err);
                resolve("数据库初始化失败，错误信息：", err);
            }
        });
    })
}

const insertInitData = () => {
    return new Promise(resolve => {
         MsgTypeModel.create(InitData, err => {
            if (err) {
                console.log("数据库初始化失败，错误信息：", err);
                resolve(false);
            } else {
                console.log("数据库初始化成功！");
                resolve(true);
            }
        })
    })
}

async function initDB() {
    // 判断是不是第一次启动 db

    if (flag === "init") {
        const res = await ifInitDB();

        if (res === "init") {
            const res = await insertInitData();
            flag = res ? "notInit" : "init";
        }
    }
}

initDB();

module.exports = MsgTypeModel;

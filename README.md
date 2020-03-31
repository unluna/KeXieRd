# KeXieRd
科协后台

## 接口文档

### 获取文章评论接口

- 接口地址：/msgComment
- 请求方式：POST

> 请求体

|  请求字段   | 备注  | 举例  | 数据类型  |
|  ----  | ----  | ---- | ---- |
| msgId  | 文章ID | 123456  | string  |

> 响应体

|  响应字段   | 备注  | 举例  | 数据类型  |
|  ----  | ----  | ---- | ---- |
| count  | 评论总数 | 10  | number  |
| initiatorId  | 发起评论者ID | 123456  | string  |
| recipientId  | 评论接收者ID，为 null 时是评论文章 | 1234567 \| null  | string  |
| commentContent  | 评论内容 | 科协真好  | string  |
| commentDate  | 评论时间 | 2018-05-11T05:58:51.122Z  | string  |

> 响应体示例

```
{
    code:0,
    msg:"success",
    data:{
        count:10,
        comment:[
            {
                initiatorId:"123456",
                recipientId:"1234567",
                commentContent:"科协真好",
                commentDate:"2018-05-11T05:58:51.122Z",
                children:[
                    {
                        initiatorId:"123456",
                        recipientId:"1234567",
                        commentContent:"科协真好",
                        commentDate:"2018-05-11T05:58:51.122Z",
                    },
                    {
                        initiatorId:"123456",
                        recipientId:"1234567",
                        commentContent:"科协真好",
                        commentDate:"2018-05-11T05:58:51.122Z",
                    }
                ]
            },
            {
                initiatorId:"123456",
                recipientId:"1234567",
                commentContent:"科协真好",
                commentDate:"2018-05-11T05:58:51.122Z",
                children:[
                    {
                        initiatorId:"123456",
                        recipientId:"1234567",
                        commentContent:"科协真好",
                        commentDate:"2018-05-11T05:58:51.122Z",
                    },
                    {
                        initiatorId:"123456",
                        recipientId:"1234567",
                        commentContent:"科协真好",
                        commentDate:"2018-05-11T05:58:51.122Z",
                    }
                ]
            },
        ]
    }
}
```

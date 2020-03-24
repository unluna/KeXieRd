const config = require("../config");
const fetch = require("node-fetch");

class SaveRequest {

    constructor(url) {
        this.url = url;
        this.baseUrl = config.baseUrl;
    }

    fetch() {
        const result = {
            code: 0,
            message: "",
            data: []
        };

        return new Promise((resolve, reject) => {
            const myFetch = fetch(this.baseUrl + this.url);
            myFetch.then(res => res.json())
                .then((json) => {
                    result.data = json;
                    resolve(result);
                })
                .catch((err) => {
                    result.code = 1;
                    result.message = "请求失败：" + err;
                    reject(result);
                })
        })
    }
}

module.exports = SaveRequest;

(function () {
    // 判断当前的环境
    const root = typeof self === "object" && self.self === self && self
        || typeof global === "object" && global.global === global && global
        || this
        || {};

    const _ = function (obj) {
        console.log(obj);
        if (obj instanceof _) {
            return obj;
        }
        // 隐式 new
        if (!(this instanceof _)) {
            return new _(obj);
        }
        this._wrapped = obj;
    };

    const ArrProto = Array.prototype;
    const push = ArrProto.push;
    _.throttle = function (fn, wait = 500) {
        let timer;
        return function (...args) {
            if (!timer) {
                timer = setTimeout(() => {
                    timer = null
                }, wait);
                return fn.apply(this, args);
            }
        }
    };
    _.map = function (wrapped, callback) {
        console.log("🍊", wrapped);
        console.log("🍇", callback);
    };

    _.isFunction = function (obj) {
        return typeof obj == 'function' || false;
    };

    _.functions = _.methods = function (obj) {
        const names = [];
        for (const key in obj) {
            if (_.isFunction(obj[key])) {
                names.push(key);
            }
        }
        return names.sort();
    };

    _.each = function (obj, callback) {
        if (Array.isArray(obj)) {
            for (let item of obj) {
                callback && callback.call(_, item);
            }
        }
        return obj;
    };

    _.mixin = function (obj) {
        _.each(_.functions(obj), function (name) {
            const func = _[name] = obj[name];
            _.prototype[name] = function () {
                const args = [this._wrapped];
                push.apply(args, arguments);
                return func.apply(_, args);
            };
        });
        return _;
    };
    _.mixin(_);
    // _.prototype.map = function () {
    //     _.map.call(this);
    // };

    if (typeof exports !== "undefined" && !exports.nodeType) {
        if (typeof module !== "undefined" && !module.nodeType && module.exports) {
            exports = module.exports = _;
        }
        exports._ = _;
    } else {
        root._ = _;
    }

}());

const modalMixin = {
    open() {
        console.log(`opening`);
    },
    close() {
        console.log('closing')
    }
};

function extend(obj, mixin) {
    Object.keys(mixin).map((func) => {
        obj[func] = mixin[func]
    });
}

// 一个普通的对话框
function Dialog(title) {
    this.title = title;
}

Dialog.prototype.confirm = function () {
    console.log('confirm?');
};

// 通过mixin扩展该对话框的功能，使之能够关闭和打开
extend(Dialog.prototype, modalMixin);
let dialog = new Dialog('News: xxxx');
dialog.open(); // => 'opening'

const obj = {
    a: 1,
    b: 2,
    c: 3
};

Object.keys(obj)
    .forEach(
        item => {
            console.log(obj[item]);
        }
    );

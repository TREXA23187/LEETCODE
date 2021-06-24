/*
* 常见的4种尝试模型
*
* 从左往右的尝试模型 ->03
* 范围上尝试的模型 ->06
* 多样本位置全对应的尝试模型 ->11
* 寻找业务限制的尝试模型 ->12
* */

//从左往右的尝试模型
//全部子序列
function subs(s) {
    let path = ''
    const ans = []
    process(s, 0, ans, path)
    return ans
}

function process(str, index, ans, path) {
    if (index === str.length) {
        ans.push(path)
        return
    }
    let no = path
    process(str, index + 1, ans, no)

    let yes = path + str[index]
    process(str, index + 1, ans, yes)
}

function dpWay(){

}

console.log(subs('abcd'))
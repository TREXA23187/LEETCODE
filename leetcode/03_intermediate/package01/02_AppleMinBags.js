/**
 * 小虎去附近的商店买苹果，奸诈的商贩使用了捆绑交易，只提供6个每袋和8个每袋的包装。
 * 小虎想要购买恰好n个苹果，并用尽量少的袋数方便携带。
 * 如果不能购买恰好n个苹果，小虎将不会购买。
 * 输入一个整数n，表示小虎想购买的苹果数，返回最小使用袋子数，如果不能正好装下，返回-1
 */

// 打表

function minBags(apple) {
    if (apple < 0) {
        return -1
    }
    let bag6 = -1
    let bag8 = parseInt(apple / 8)
    let rest = apple - 8 * bag8
    while (bag8 >= 0 && rest < 24) {
        let restUse6 = minBagBase6(rest)
        if (restUse6 != -1) {
            bag6 = restUse6
            break
        }
        rest = apple - 8 * (--bag8)
    }
    return bag6 == -1 ? -1 : bag6 + bag8
}

function minBagBase6(rest) {
    return rest % 6 == 0 ? (rest / 6) : -1
}


function minBagAwesome(apple) {
    if ((apple & 1) != 0) { // 奇数情况
        return -1
    }
    if (apple < 18) {
        return apple === 0 ? 0 : (apple === 6 || apple === 8) ? 1
            : (apple === 12 || apple === 14 || apple === 16) ? 2 : -1
    }
    return parseInt(apple - 18) / 8 + 3
}

let test = true
for(let i = 0;i<1000;i++){
    if(!minBags(i) === minBagAwesome(i)){
        test = false
    }
}
console.log(test);
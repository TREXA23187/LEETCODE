/**
 * 派对的最大快乐值
 * 
 * 员工信息的定义如下：
     class Employee{
     happy:number  // 这名员工可以带来的快乐值
     subordinates:array // 这名员工有
    }
 * 公司的每个员工都符合Employee类的描述。
 * 整个公司的人员结构可以看作是一棵标准的、没有环的多叉树。树的头节点是公司唯一的老板。
 * 除老板以外的每个员工都有唯一的直接上级。
 * 叶节点是没有任何下属的基层员工（subordinates列表为空），除基层员工外，每个员工都有一个或多个直接下级。
 * 
 * 这个公司现在要办party，你可以决定哪些员工来，哪些员工不来，规则：
 * 1.如果某个员工来了，那么这个员工的所有直接下级都不能来
 * 2.派对的整体快乐值是所有到场员工快乐值的累加
 * 3.你的目标是让派对的整体快乐值尽量大
 * 
 * 给定一棵多叉树的头节点boss，请返回派对的最大快乐值
 */

class Employee {
    constructor(h) {
        this.happy = h
        nexts = []
    }
}

function maxHappy(boss) {
    if (boss === null) {
        return 0
    }
    let all = process(boss)
    return Math.max(all.yes, all.no)
}

class Info {
    constructor(y, n) {
        this.yes = y
        this.no = n
    }
}

function process(x) {
    if (x.nexts.length === 0) {
        return new Info(x.happy, 0)
    }
    let yes = x.happy
    let no = 0
    for (let next of x.nexts) {
        let nextInfo = process(next)
        yes += nextInfo.no
        no += Math.max(nextInfo.yes, nextInfo.no)
    }

    return new Info(yes, no)
}
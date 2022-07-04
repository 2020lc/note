### 打开开发者工具
+ mac：`cmd + opt + i`
+ win: `ctrl + shift + i`

---
### devtools
1. 切换布局：`cmd + shift + d`
2. 切换面板：`cmd + [ | ]`
3. 查找运行功能：`cmd + shift + p`
   1. 截取节点截图：选中谋节点`capture node screenshot`
   2. 截取整个页面高度页面截图：`capture full size screenshot`
   3. 截取区域截图：`capture area screenshot`
   4. 截取可视区域截图：`capture screenshot`
   5. 切换主题：`theme`

---
### element
+ 隐藏元素`h`
+ 拖动&放置元素
+ 移动&展开元素`cmd + [↑↓] [↔]`
+ 撤销操作`cmd + z`

---
### console
> 默认被async包裹  
> console保存的是打印对象的引用  

+ $
  > 0-4分别表示，当前节点引用，上一次节点引用，上上...  
  > 相当于document.querySelector

+ '$$'
  > 相当于Array.from(document.querySelectorAll()) 

+ $_
  > 上一次执行结果的引用 

+ $i
  > 相当于npm，需要安装chrome插件`console importer`
  > 例：安装lodash, $i('lodash')

+ queryObject 对象查询
  > 查询代码中定义的对象(原生js文件)

+ monitor 监听函数
  ```
    class Person {
      constructor(name, role) {
        this.name = name;
        this.role = role;
      }

      greet() {
        return this.getMessage('greeting');
      }
      getMessage(type) {
        if (type === 'greeting') {
          return `Hello, I'm ${this.name}!`;
        }
      }
    }
    // console 控制台
    john = new Person('john');
    monitor(john.getMessage);
    john.greet(), 将会打印追踪
  ```

+ monitorEvents 监听事件
  > 一般用法是点击谋个节点然后使用`monitorEvents($0,'click')`  

+ console.assert 断言
  ```
    const value = null
    console.assert(value, 'value is empty!');
    // value为假值时，打印信息，但是不会阻断程序
  ``` 

+ console.table
  + 第一个参数：<对象、类数组、数组> 
  + 第二个参数：<数组> 用于筛选需要展示的字段
  
+ console.dir
  + 主要用于打印dom节点

+ console.time 开启计时器
  + `console.time('oneTime')`

+ console.timeEnd 结束计时器
  + `console.timeEnd('oneTime')`

+ 打印css样式
  + `console.log('%cStop','color:red;font-size:48px')`

+ 作为回调方法
  ```
    getMyLocation( v => console.log(val));
    // 变成
    getMyLocation(console.log);
  ``` 

---
### source
+ Snippets： 可以保存一些简单的脚本命令
  + 在其他面板可以使用`cmd + o`快速查找命令运行,使用!快速补全并运行

+ 断点
  + 条件断点conditional breakpoints
    > 添加后可以在breakPotions里一建清除 
  + 右击选择edit breakpoint 设置条件

---
### netWork

+ 请求过滤
  + 点击顶部的🔦按钮
    1. 得到具体接口名：直接输入
    2. 得到具体请求类型：`method:[GET,POST]`,

+ 重新发送XHR请求
  + 右击接口选择Replay XHR

---
### Drawer
+ 显示&隐藏`esc`
+ 检查修改
  > 检查css修改前后的变化,不能检查外部引入的css  
  + 使用`cmd + shift + p`输入`change`

---
### 参考
1. [你不知道的Chrome调试技巧](https://juejin.cn/book/6844733783166418958/section/6844733783216750605)

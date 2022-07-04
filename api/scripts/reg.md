
### 常用匹配功能
```javascript
  const regCss = /<link [^>]*href=['"]([^'"]+)[^>]*/gis;
  const regJs = /<script [^>]*src=['"]([^'"]+)[^>]*/gis;
  const regInclude = /<%@ [^>]*file=['"]([^'"]+)[^>]*/gi;
  const regStyle = /<style.*?>.*?style>/gis;
  const regScript = /<script>.*?script>/gis;
```
### 模式
1. g
   > 全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容  
   > ps: 全局模式g有用的有：exec, match, replace 
2. i
   > 不区分大小写模式，忽略pattern和字符串的大小写 
3. m
   > 多行模式，查找到一行文本末尾时会继续查找 
4. y
   > 粘附模式，只查找从lastIndex开始及之后的字符串
   + 例
     ``` javascript
        // ps: lastIndex为4,第一个匹配为l,成功匹配liu,因为必须匹配项紧随其后，所以称为粘附模式，如果字符串为abc lia liu...则会匹配失败,因为lia!=liu 而liu并不是lastIndex为4的首要匹配
        const testStr = 'abc liu efg 456.88 k';
        const reg = /liu/y;
        console.log(reg.test(testStr));// false
        reg.lastIndex = 2;
        console.log(reg.test(testStr));// false
        reg.lastIndex = 4;
        console.log(reg.test(testStr));// true
     ``` 
5. u
   > Unicode模式，启用Unicode匹配 
6. s
   > dotAll模式，表示元字符. 匹配任何字符（包括\n或\r) 

---
### 元子符
1. ()
   > 捕获组  
   + 捕获组中使用的修饰符
     1. ?:
        > 匹配捕获组中的内容，但是不存储其捕获结果，用于快速匹配，而不需要捕获组内容的情况
     2. ?=
        > 前瞻
        + 例
          ```js
            let reg = /ab(?=c)/ // 查找c前面的ab
            reg.test('abc') // true
            reg.test('abd') // false
            'abc'.replace(reg,'A') // Ac
          ```
     3. ?<=
        > 后瞻
        + 例
          ```js
            let reg = /(?<=c)ab/ // 查找c后边ab
            reg.test('cab') // true
            reg.test('cac') // false
            'cab'.replace(reg,'d') // cd
          ```
     4. ?!
        > 负前瞻
        + 例
          ```js
            let reg = /ab(?!c)/  //查找不是c的前面的ab
          ```
     5. ?<!
        > 负后瞻
        + 例
          ```js
            let reg = /(?<!c)d/ // 查找不是c的后面的d
          ```            

2. []
   > 字符集
3. {} 
   > 出现次数
   + 例  
     1. 至少出现n次`{n,}`
     2. 刚好出现n次`{n}`
     3. 最少出现n次，最多出现m次(n <=m )`{n,m}`
4. ^
   >  匹配行首  
   > 在[]字符集中出现表示非  
   + 例
     1. 匹配a开头的字符串`/^a.*/` 
     2. 匹配除abc外的字符字母`/[^abc]/`
5. $
   > 匹配行尾 
6. \
   > 转义
   + 例
     1. 匹配文本[a]：`/\[a\]/`
     2. 匹配数字：`/\d/`
        + 相当于`/[0-9]/`
     3. 匹配空白字符：`/\s/`
        + 相当于`/[\t\n\r\f\v]/`
     4. 匹配数字、字母、下划线：`/\w/`
     5. 匹配单词nice：`/ \bnice\b /`
     6. \D,\S,\W,\B都是反义
        1. 例
           + 匹配非数字`/[\D]/`
7. ?
   > 最多出现一次  
   > 相当于`{0,1}`
8. \+
   > 至少出现一次  
   > 相当于`{1,}`
9. \*
   > 出现任意次
10. \.
    > 匹配除换行符外的任意字符  

---
### 构造函数属性
> ps: 没有任何web标注出处，不要在生产环境中使用

|     全名     |   简写    |                  说明                  |
| :----------: | :-------: | :------------------------------------: |
|    input     |    $_     |      最后搜索的字符串(非标准特性)      |
|  lastMatch   |    $&     |             最后匹配的文本             |
|  lastParen   |    $+     |      最后匹配的捕获组(非标准特性)      |
| leftContext  |    $`     | input字符串中出现在lastMatch前面的文本 |
| rightContext |    $'     | input字符串中出现在lastMatch后面的文本 |
|      无      | $1,$2,... |              1~9个捕获组               |



---
### 实例属性
1. global
   >[Boolean] 是否设置了g标记 
2. ignoreCase
   >[Boolean] 是否设置了i标记 
3. multiline
   >[Boolean] 是否设置了m标记 
4. sticky
   >[Boolean] 是否设置了y标记 
5. unicode
   >[Boolean] 是否设置了u标记 
6. dotAll
   >[Boolean] 是否设置了s标记 
7. lastIndex
   >[Int] 源字符下一次搜索开始的位置，始终从0开始 
8. source
   >[String] 正则表达式的字面量字符串(没有前后斜杆) 
9.  fags
  > [String] 正则表达式字面量的标记(没有前后斜杆)

### 个人总结
1. 正则表达式是匹配模式,要么匹配字符, 要么匹配位置, 同时存在字符优先
2. 匹配位置符号
   > 用例：xxx_i love you 
   1. ^：匹配行头
   2. $：匹配行尾
   3. (?=)：正向先行断言
   4. (?!)：负向先行断言
   5. (?<=)：正向后行断言
   6. (?<!)：负向后行断言
---
### 参考
1. [关于g的理解](https://www.cnblogs.com/scottckt/archive/2009/12/20/1628456.html)
2. [元子符\b的理解](https://www.cnblogs.com/tnt-33/p/10676473.html)
3. [表达式?的理解](https://blog.csdn.net/handsomexiaominge/article/details/87886857)
4. [正则表达式快速入门](https://juejin.cn/post/7021672733213720613)
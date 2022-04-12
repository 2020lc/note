# commit

## 参数
1. 省略参数
   + `git commit`
     > 自动进入vim编辑器编辑message信息  
   + 优点
     + 书写起来很方便，尤其是格式上
   + 缺点
     + 需要懂vim基础命令

2. -m [message]
   + 最普通的形式

3. --amend
   > 对上一次commit的修改  
   > 1. 更改上一次commit -m 的信息  
   > 2. 追加内容新
   + 注
     + 会产生新commit-id替换上一次的commit-id
     + push必须加-f, 因为远程跟本地这个分支点commit-id不同了
   + 例
     ```
      git add .
      git commit --amend
      git push -f
     ```
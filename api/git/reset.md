# reset 版本回退

## 参数
1. --mixed
   > rest默认值  
   > 撤回后，所有内容放到工作区(Working Directory)
   + 例
     ```git
      // 以下两条命令相同
      git reset commit-id 
      git reset --mixed commit-id
     ```
2. --soft
   > 撤回后，所有的内容放到暂存区(Staged)
   + 例
     ```git
     git reest --soft commit-id
     ```
3. --hard
   > 撤回后，所有的内容全部清空
   + 例
     ```git
     git reset --hard commit-id
     ```
+ 撤回后可以使用`git status`查看         
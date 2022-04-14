# 常用命令
> 这里只做简单的介绍，详细查看具体命令

+ 注
  + file：文件名
  + . : 所有文件
  + \<file>: 可以单个文件，可以多个文件，也可以是所以文件

## 日常三部曲
1. 工作区(Working Directory)
   + 添加到暂存区：`git add <file>`
   + 放弃修改：`git checkout -- <file>`
   + 查看状态：`git status`
     1. Changes not staged form commit
        > 暂存区没有变更，即已追踪文件的变更 
        + deleted: 删除的文件
        + modified: 修改的文件 
     2. Untracked files
        > 未追踪文件，即新增文件 

2. 暂存区(Staged)
   + 提交到本地仓库：`git commit -m [messages]`
   + 放弃暂存区修改：
      ```git
        1. git reset HEAD .
        2. git restore --staged <file> // git version 2.23
      ```
   + 查看状态：`git status`
     1. Changes to be committed
        > 待提交到仓库的变更

3. 本地仓库(repository)
   + 提交到远程：`git push`
   + 放弃本次提交：`git reset --hard~`
   + 查看状态：`git status`
     1. Your branch is ahead of 'origin/xxx' by 1 commit
        > 本地分支提前远程一个提交  

## 其他辅助命令
1. 查看
   1. 版本信息：`git --version`
   2. 本地commit信息：`git log`
   3. 本地commit历史信息：`git reflog`
   4. 贮存区信息：`git stash list`
   5. 分支信息：`git branch`
2. 创建分支(当前分支为master)
   1. 基于master创建test分支：
      ```git
        1. git branch test
        2. git switch -c test // git version 2.23
      ``` 
   2. 基于master创建分支test并且切换到该分支: `git checkout -b test`
   3. 基于master创建test分支并推到远程关联
      ```
        git checkout master
        git pull
        git checkout -b test
        git push -u origin test
      ``` 
3. 切换分支
    ```git
    1. git checkout test
    2. git switch test // git version 2.23 
    ``` 
4. 更新本地分支最新代码：`git pull`
5. 合并分支
   1. b分支修改合并到a分支(当前是a分支)：`git merger b`
   2. 合并其他分支的某一次提交：`git cherry-pick commit-id`

6. 重做某一版本并保留后面版本不受影响：`git revert commit-id`
7. 存到贮存区：`git stash`
8. 取出贮存区内容：`git stash pop`
9. 本地更新远程分支信息：`git remote update origin -p`
10. 版本回退：`git reset --hard commit-id`
## 推荐文章

1. [了解git的四个工作区域](https://blog.csdn.net/xyzso1z/article/details/119009639)
# 总结

## 常用命令
> 这里只做简单的介绍，详细查看具体命令

+ 注
  + file：文件名
  + . : 所有文件
  + \<file>: 可以单个文件，可以多个文件，也可以是所以文件

### 日常三部曲
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

### 其他辅助命令
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

---

## git flow 流程(理想型)

> 代码开发合并管理流程的思维模式或者是管理方法

### 分支说明

#### 长期分支
+ master
  + 在 git-flow 流程中，master 只是用于保存官方的发布历史。  
  + 主分支么，产品功能全部实现可用于交付时，最终在 master 分支对外发布  
  + 该分支为只读唯一分支 , 只能从其他分支(release/hotfix)合并 , 不能在此分支修改  
  + 另外所有在 master 分支的推送应该打标签做记录,方便追溯  
  + 例如 release 合并到 master , 或 hotfix 合并到 master  

+ develop

  + 长期开发分支，为只读唯一分支 , 只能从其他分支合并  
  feature 功能分支完成 , 合并到 develop  
  + release 分支在项目开始时应从 develop 分支拉取  
  + release/hotfix 分支上线完毕, 合并到 develop 分支  
  短期分支

#### 短期分支
+ release

  + 这个分支的创建意味着一个发布周期的开始，也意味着本次发布不会再增加新的功能。对应到我们项目的开发阶段是在 TR4 提测后，就应该在 Dockyard 将 develop 分支切换为 release 分支。

  + 在项目完成测试并发布后，这个分支会被合并入 master，并且用版本号打上标签。

  + 另外，发布分支上的改动还应该合并入 develop 分支，但需要注意的是，如果develop 分支在被其他项目使用的时候，合并的时机需要进行人为控制。

  + 使用专门的一个分支来为发布做准备的好处是，在一个团队忙于当前的发布的同时，另一个团队可以继续为接下来的一次发布开发新功能。

+ hotfix

  + 发布后产品出现问题，需要进行的维护工作或者紧急问题的快速修复也需要使用一个独立的分支。

  + 这是唯一一种可以直接基于 master 创建的分支。一旦问题被修复了，所做的改动应该被合并入 master 和 develop 分支（或者用于当前发布的分支）。在这之后，master 上还要使用更新的版本号打好标签。

+ feature

  + 每一个新功能的开发都应该各自使用独立的分支。这样做的好处是不影响他人，便于协同工作。

  + 在创建新的功能开发分支时，应该基于 develop 分支拉取，并在开发完合并到 develop 分支。

  + 新功能开发永远不应该和 master 分支产生关系。


![git-flow流程图](/images/api/git/git-flow-process.png)
--
## 推荐文章
1. [了解git的四个工作区域](https://blog.csdn.net/xyzso1z/article/details/119009639)
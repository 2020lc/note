# 常用命令

+ 注
  + file：文件名
  + . : 所有文件
1. 工作区(Working Directory)
   + 添加到暂存区：`git add .`
   + 放弃修改：`git checkout -- .`
   + 查看状态：`git status`
     1. Changes not staged form commit
        > 已追踪文件的变更 
        + deleted: 删除的文件
        + modified: 修改的文件 
     2. Untracked files
        > 未追踪文件，即新增文件 

2. 暂存区(Staged)
   + 提交到本地仓库：`git commit -m [messages]`
   + 放弃暂存区修改：`git restore --staged`
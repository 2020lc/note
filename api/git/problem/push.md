## 问题1
> ! [rejected] main -> main (fetch first) error: failed to push some refs to

### 原因分析
1. git提交冲突，远程代码与本地不一致

### 解决方法
1. 会手动解决冲突
```
git pull
解决冲突
git add .
git commit -m 'xxx'
git push
```
2. 不会手动解决冲突
```
新代码copy到备忘录
丢弃所有修改
然后执行正常add . 操作
```

---
# ssh

## 加密

1. 对称加密
   > 加密解密使用同样的规则(密匙)
   + 优点
     + 加密解密速度快
   + 缺点
     + 数据传送前，c/s双方必须商定好密匙
     + 每对用户使用该算法都需要使用其他人不同的唯一密匙，这会使得c/s所拥有的钥匙数量巨大，难以管理
     + 如果有一方密匙被泄露，那么整个信息都会被泄露
   + 算法模型
     + AES：密匙长度为128、192、256位
     + DES：密匙长度为64位
2. 非对称加密
   > 由公匙跟私匙组成  
   > 公钥向外暴露、私匙由自己保管
   + 优点
     + 安全性能高
       > 1. 自己登录远程会存在ssl攻击(无CA)、known_hosts文件人为认证可信赖的远程避免这种情况  
       > 2. 当今rsa破解最高记录是768位，即一般1024位是安全的(1024位就算破解，破解时间也是按年计算- -)
     + 算法模型
       + RSA
     + 举例理解
       > 1. 张三给李四寄了一个开着的保险箱A(公匙)  
       > 2. 李四收到后,把东西放到开着的保险B(公匙)，然后把保险箱B放到保险箱A中，并且关闭上保险箱A，寄给李四
       > 3. 李四拿着保险A的钥匙(私匙)打开保险箱A，拿到开着的保险箱B并取出里面的东西
       > 4. 李四给张三寄东西也是先把东西放到开着的保险A，然后把开着的保险箱A放到开着的保险箱B，在关上保险箱B寄给张三
3. ssh文件说明
   1. 私匙：`id_rsa`
   2. 公匙：`id_rsa_pub`
   3. 已认证远程主机公匙：`known_hosts`用于防止ssl攻击
   4. 已授权客户端公匙：`authorized_keys`用于免密登录
   5. 管理多个ssh：`config`
      ```
        Host xxx #别名或通配符，匹配的别名将用此配置
        HostName 111.222.33.444/github.com #服务端的ip或者域名
        Port 22 # 端口号
        User work #用户名
        PreferredAuthentications publickey #强制使用公匙登录
        IdentityFile ~/.ssh/id_rsa #要登录服务端的用户的私钥（本地客户端的私钥）
        ControlMaster auto #session共享
        ControlPath ~/.ssh/master-%r@%h:%p #session共享文件的路径
        ControlPersist yes #主连接一直在后台是连接的
        ServerAliveInterval 60 #连接时间间隔
      ``` 
## 生成RSA
+ 命令：`ssh-keygen -t rsa -b 1024 -C 'your_email'`
  + -t：密匙类型
  + -b：密匙长度(默认1024)
  + -c：注释
## 登录远程服务器
+ 命令：`ssh user@host`
+ 别名登录
  > 前提config配置了别名test
    ```
      //.config
      Host test
      HostName github.com
      PreferredAuthentications publickey
    ``` 
    `ssh test`
## 免密登录
+ 命令：`ssh-copy-id -i ~/.ssh/id_rsa.pub user@host`
  > 远程主机.ssh/authorized_keys文件会存下该公匙
+ 图示
![免密登录原理](/images/ssh/ssh-secret-free.png)
## 推荐
1. [通信加密原理](https://blog.csdn.net/lzghxjt/article/details/98444934)
2. [ssh原理](https://blog.csdn.net/lzghxjt/article/details/98476031)
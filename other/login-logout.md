# 登录，退出

### Cookie
> 服务器保存在浏览器中的一小段文本 
> 每个cookie不超过4kb 
> 浏览器每次向服务器发出请求，会自动附上cookie 
> 单个域名设置的cookie不应该超过30个 
> cookie由http协议生成，一般用于http协议 

1. 使用场景
   1. 对话（session)管理：保存登录、购物车等需要记录的信息
   2. 个性化：保存用户的偏好，如网页的字体大小，背景颜色等
   3. 追踪：记录分析用户的行为

2. 包含信息
   1. 名字：
   2. 值（数据）：
   3. 到期时间：
   4. 所属域名（默认当前域名）：
   5. 生效路径（默认当前网址）：

3. 查看
   1. `window.navigator.cookieEnabled`
   2. `document.cookie`

4. cookie共享
   1. 域名以及端口号相同
   2. 协议可以不相同

5. 服务器设置cookie
   ```js
      Set-Cookie: key1=value1
   ``` 

### login
```js
  created() {
    const cSession = window.localStorage.getItem('loginToken');
    if(cSession) {
      window.location.href = '/';
    } else {
      window.location.href = await 
    }
  }
```
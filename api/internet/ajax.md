# ajax

### HTTP
> hyper text transport protocol [超文本传输协议]

#### 请求报文
> 重点是格式与参数

```js
请求行    Post(请求类型) /s?ie=utf-8 (url)  HTTP/1.1(Http版本)
请求头    Host: atguigu.com
          Cookie: name=guigu
          Content-type: application/x-www-form-urlencoded
          User-Agent: chrome 83
空行      Get请求，请求体可以为空
请求体        username=admin&password=admin
```

#### 响应报文
```
响应行    HTTP/1.1 200 ok
响应头    Content-type: text/html;charset=utf-8
          Content-length: 2048
          Content-encoding: gzip
空行
响应体
    <html>
      <head>
      </head>
      <body>学习</body>
    </html>
```
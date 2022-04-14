# eslintrc

> 用于检查代码格式
# 问题1
> the ***component has been registered but not used  
> 组件注册了但是没用,不能正常运行程序

### 解决方案
1. package.json
```json
eslintConfig: {
  "rules": {
    "vue/no-unused-components": "off"
  }
}
```
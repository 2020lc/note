# 问题1
> the ***component has been registered but not used

### 解决方案
1. package.json
```
eslintConfig: {
  "rules": {
    "vue/no-unused-components": "off"
  }
}
```
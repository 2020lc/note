# render

---
# jsx

---

# 疑问

### 如何传递attrs
1. render
   ```javascript
    import customerA form 'xxx';
    export default = {
      render(h) {
        return h(
          'customerA',
          {
            attrs: this.$attrs,
          }
        )
      }
    }
   ```
2. jsx
   ```javascript
    import customerA form 'xxx';
    export default = {
      render() {
        return (
          <customerA attrs={this.$attrs} />
        )
      }
    }
   ```
### attrs跟props有什么区别

1. props有选择性的接受父组件传递的数据
2. attrs自动接收所有父组件传递的数据
3. 如果定义了props，则attrs为props未接收的剩余的数据
4. 本质上都是给组件设置属性
# vue2-> vue3

## 响应式
##### ref
```js
// 将基础类型的值转换为响应类型的值, 使用.value访问
let count = ref(0);
console.log(count.value)
// 模板中, 自动解构，不需要.value
<div>{{ count }} </div>
```
##### reative
## setup


## jsx
+ 绑定属性props,attrs：`<componentA {...attrs}/>` 
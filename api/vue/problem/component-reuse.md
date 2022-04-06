## 问题1

> 点击按钮获取数据，根据数据某状态在弹框中渲染出不同的表单（字段也不同）, 此时点击不同数据的按钮，弹框表单表现异常，并且报错

### 原因分析

1. 组件复用

### 解决方案

1. 由弹框的dialogVisible属性控制表单的创建跟销毁
   ```
   // 1. jsx
   {
     dialogVisible && <form />
   }
   // 2. template
   <form v-if="dialogVisible" />
   ```
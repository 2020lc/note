# z-index

+ 概念
  + 当前节点必须设置position,并且不为默认值static
  + z-index相对同级节点

## 答疑

### z-index失效
+ 网上有以下三种说法  
  1. 节点position为static或者没设置position  
  2. 父节点position:relative  
  3. 节点设置了float


+ 个人对三种说法的看法
  > 对z-index做过大量demo测试，最后总结的话语就是上面写的'概念'  
  > 只要设置了position不为relative，那么z-index是必生效的  
  > 无关父节点position:relative,以及是否设置了float  
  > 最重要的就是理解'z-index相对同级节点'  
  > 如果你想设置的2个节点z-index不生效，那么基本上是因为这2个节点不属与同一级节点

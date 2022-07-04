```js
<template>
  <div class="scroll-main" @scroll="fn" ref="scrollBox">
    <div
      :style="{
        position: 'relative',
        height: 100 * itemHeight + 'px',
      }"
    >
      <div
        v-for="(item, index) in showHX"
        :key="item.id"
        class="item"
        :style="{
          height: itemHeight - 2 + 'px',
          top: (startNum + index) * itemHeight + 'px',
        }"
      >
        {{ item.id }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      allHX: [],
      preNum: 0,
      startNum: 0,
      boxHeight: 0,
      fn: this.debounce(this.startScroll, 10),
      wishList: [
        '洗脚',
        '按摩',
        '给零花钱',
        '做饭',
        '买车',
        '买房',
        '做项目',
        '带娃',
        '应付丈母娘',
      ],
    };
  },
  props: {
    itemHeight: {
      type: String,
      default: '100',
    },
  },
  created() {
    this.getMock(100);
  },
  mounted() {
    this.getBoxHeight();
  },
  methods: {
    getMock(count) {
      for (let i = 0; i < count; i++) {
        this.allHX.push({
          id: `HX${i}号`,
          msg: `负责给kfq${this.wishList[i % 9]}`,
        });
      }
    },
    getBoxHeight() {
      // 获取可视区域的高度
      this.boxHeight = Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
      );
    },
    startScroll() {
      let curIndex = Math.floor(
        this.$refs.scrollBox.scrollTop / this.itemHeight,
      );
      this.startNum = curIndex;
    },
    deleteItem(index) {
      this.allHX.splice(this.startNum + index, 1);
    },
    debounce(fun, wait) {
      let timer = null;
      return function () {
        if (timer !== null) clearTimeout(timer);
        timer = setTimeout(fun, wait);
      };
    },
  },
  computed: {
    visibleNum() {
      return Math.ceil(this.boxHeight / this.itemHeight);
      // return 3;
    },
    endNum() {
      return this.startNum + this.visibleNum;
    },
    showHX() {
      if (this.startNum >= this.preNum) {
        return this.allHX.slice(this.startNum, this.endNum);
      }
      return [];
    },
  },
};
</script>
 
<style scoped>
.scroll-main {
  height: 500px;
  overflow: scroll;
  border: 1px dashed;
}
.item {
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid red;
  padding: 0 20px;
}
</style>
```
<template>
  <div class="sg-wrap">
    <div class="sg-rows" v-for="(rows, k) in gridNums" :key="k">
      <div class="sg-cols" v-for="(cols, kcol) in rows" :key="kcol" @click="tapNum(cols)">{{cols}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'schulte-grid',
  props: {
    grid: Number
  },
  data() {
    return {
      grids: this.grid || 5,
      gridNums: [],
      amount: 0,
      counting: 1,
      st: 0,
      et: 0
    }
  },
  created() {
    this.amount = this.grids ** 2
    this.generateGrid()
  },
  mounted() {
    this.st = new Date().getTime()
  },
  methods: {
    generateGrid() {
      this.gridNums = this.shuffle(Array.from({ length: this.amount }, (v, i) => i + 1))
      this.gridNums = this.chunk(this.gridNums, this.grids)
    },
    tapNum(num) {
      const intNum = parseInt(num, 10)
      if (intNum === this.counting) {
        if (intNum === this.amount) {
          this.et = new Date().getTime()
          this.finish(this.et - this.st)
        }
        this.counting += 1
      } else {
        this.$emit('errorTap', this.counting)
      }
    },
    finish(time) {
      // 使用 $emit派发事件
      this.$emit('finishFun', time)
    },
    shuffle(arr) {
      let l = arr.length
      let index; let temp; const temparr = arr
      while (l > 0) {
        index = Math.floor(Math.random() * l)
        temp = arr[l - 1]
        temparr[l - 1] = arr[index]
        temparr[index] = temp
        l -= 1
      }
      return temparr
    },
    chunk(arr, size) {
      return arr.reduce((acc, val, ind) => {
        const subIndex = ind % size
        if (!Array.isArray(acc[subIndex])) {
          acc[subIndex] = [val]
        } else {
          acc[subIndex].push(val)
        }
        return acc
      }, [])
    }
  }
}
</script>

<style scoped>
.sg-wrap{
  width:100%;
}
.sg-wrap{
  border:.1rem solid #ccc;
}
.sg-rows{
  display:flex;
}
.sg-rows .sg-cols{
  display:flex;
  flex:1;
  justify-content: center;
  align-items: center;
  font-size:1.5rem;
  border:.1rem solid #ccc;
}
.sg-rows .sg-cols:after{
  content:'';
  padding-top:100%;
}
</style>

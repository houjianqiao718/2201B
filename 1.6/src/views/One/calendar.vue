<template>
  <!-- 日历 -->
  <div class="calendar">
    <h3>工作日历</h3>
    <div class="select">
      <el-select v-model="value" placeholder="2023" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
      </el-select>
      <el-select v-model="value" placeholder="1" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :value="item.value"
        />
      </el-select>
    </div>
    <div>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="one" label="一" />
        <el-table-column prop="two" label="二" />
        <el-table-column prop="three" label="三" />
        <el-table-column prop="four" label="四" />
        <el-table-column prop="five" label="五" />
        <el-table-column prop="six" label="六" />
        <el-table-column prop="seven" label="日" />
      </el-table>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const tableData = [
  {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7'
  },
  {
    one: '8',
    two: '9',
    three: '10',
    four: '11',
    five: '12',
    six: '13',
    seven: '14'
  },
  {
    one: '15',
    two: '16',
    three: '17',
    four: '18',
    five: '19',
    six: '20',
    seven: '21'
  },
  {
    one: '22',
    two: '23',
    three: '24',
    four: '25',
    five: '26',
    six: '27',
    seven: '28'
  },
  {
    one: '29',
    two: '30',
    three: '31'
  }
]
const options = [
  {
    value: '1',
    label: '2023'
  },
]
const value = ref('')
</script>

<style lang="scss" scoped>
.calendar {
  width: 100%;
  height: 370px;
  background-color: #fff;
  padding: 20px;
  box-sizing: border-box;
  h3 {
    margin: 0;
    font-weight: normal;
    padding-bottom: 10px;
    border-bottom: 1px solid #eee;
  }
}
.select{
  text-align: right;
  margin: 10px 0;
  .el-select{
    margin-right: 5px;
  }
}
</style>

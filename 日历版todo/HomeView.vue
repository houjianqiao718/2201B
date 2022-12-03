<template>
  <div class="home">
    <div class="todo">
      <!-- 顶部按钮 -->
      <el-button class="btn" type="primary"  @click="dialogVisible = true">添加todolist</el-button>
      
      <!-- 日历 -->
      <el-calendar>
        <template slot="dateCell" slot-scope="{data}">
          <div class="list">
            <p class="p" :class="data.isSelected ? 'is-selected' : ''">
              {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
            </p>
            <ul>
              <li v-for="(item, index) in $store.state.addTodolist" :key="index">
                <div v-if="item.time == data.day && item.resource == '已完成'">
                  <span @click="overTodo(index)" class="over">{{ item.todoName }}</span>
                </div>
                <div v-if="item.time == data.day && item.resource == '未完成'">
                  <span @click="doneTodo(index)" class="done">{{ item.todoName }}</span>
                </div>
              </li>
            </ul>
          </div>
        </template>
      </el-calendar>

      <!-- 添加弹出框 -->
      <el-dialog title="添加todolist" :visible.sync="dialogVisible" width="40%">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="todoName">
            <el-input v-model="ruleForm.todoName"></el-input>
          </el-form-item>
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.time" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addTodo('ruleForm')">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 已完成编辑弹出框 -->
      <el-dialog title="编辑todolist" :visible.sync="dialogVisible1" width="40%">
        <el-form :model="ruleForm1" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="todoName">
            <el-input v-model="ruleForm1.todoName"></el-input>
          </el-form-item>
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm1.time" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm1.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible1 = false">取 消</el-button>
          <el-button type="primary" @click="editTodo">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 未完成编辑弹出框 -->
      <el-dialog title="编辑todolist" :visible.sync="dialogVisible11" width="40%">
        <el-form :model="ruleForm11" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <!-- 代办名称 -->
          <el-form-item label="代办名称" prop="todoName">
            <el-input v-model="ruleForm11.todoName"></el-input>
          </el-form-item>
          <!-- 代办事项时间 -->
          <el-form-item label="代办时间" required prop="time">
            <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm11.time" style="width: 100%;"></el-date-picker>
          </el-form-item>
          <!-- 代办事项状态 -->
          <el-form-item label="代办状态" prop="resource">
            <el-radio-group v-model="ruleForm11.resource">
              <el-radio label="已完成"></el-radio>
              <el-radio label="未完成"></el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible11 = false">取 消</el-button>
          <el-button type="primary" @click="editdone">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      dialogVisible: false,  // 关闭添加弹框
      // 添加的数据
      ruleForm: {
        todoName: '',
        time: '',
        resource: ''
      },
      // 正则验证
      rules: {
        todoName: [
          { required: true, message: '请输入代办名称', trigger: 'blur' },
        ],
        time: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
        ],
        resource: [
          { required: true, message: '请选择状态', trigger: 'blur' }
        ],
      },
      todoList: [],
      dialogVisible1: false, // 关闭编辑弹框
      ruleForm1: {
        todoName: '',
        time: '',
        resource: ''
      },
      dialogVisible11: false,
      ruleForm11: {
        todoName: '',
        time: '',
        resource: ''
      },
    }
  },
  methods: {
    // 添加事件逻辑
    addTodo(ruleForm){
      this.$refs[ruleForm].validate((valid) => {
        if (valid) {
          let date = new Date(this.ruleForm.time);
          let year = date.getFullYear();  // 获取年份
          let month = date.getMonth() + 1;  // 获取月份
          month = month < 10 ? "0" + month : month;
          let dates = date.getDate();  // 获取日期
          dates = dates < 10 ? "0" + dates : dates;
          let time = year + "-" + month + "-" + dates; // 年月日
          let obj = {
            todoName: this.ruleForm.todoName,
            resource: this.ruleForm.resource,
            time: time,
          };
          this.$store.commit('addtodo',obj)  // 提交至vuex
          this.ruleForm = {}  // 清空
          // this.todoList.push(obj);
          this.dialogVisible = false; // 关闭弹框
        } else {
          return false;
        }
      });
    },
    // 已完成的编辑事件
    overTodo(index){
      this.dialogVisible1 = true
      this.ruleForm1 = this.$store.state.addTodolist[index]
      this.ruleForm1.index = index
    },
    // 已完成的确定修改
    editTodo(){
      this.$store.commit('editTodo', this.ruleForm1, )
      this.dialogVisible1 = false
    },
    // 未完成的编辑事件
    doneTodo(index){
      this.dialogVisible11 = true
      this.ruleForm11 = this.$store.state.addTodolist[index]
      this.ruleForm11.index = index
    },
    // 未完成的确定修改
    editdone(){
      this.$store.commit('editdone', this.ruleForm11, )
      this.dialogVisible11 = false
    }
  },
}
</script>

<style lang="scss" scoped>
.home{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
   background-color: #303030;
  .todo{
    width: 1200px;
    height: 720px;
    padding: 20px;
    margin-top: 20px;
    .btn{
      margin-bottom: 10px;
    }
  }
}
.is-selected {
  color: #1989FA;
}
.over{
  padding: 5px 10px;
  text-align: center;
  background-color: #1989fa;
  color: #fff;
  margin-bottom: 5px;
  font-size: 14px;
  display: inline-block;
}
.done{
  padding: 5px 10px;
  text-align: center;
  background-color: #d00;
  color: #fff;
  font-size: 14px;
  display: inline-block;
  margin-bottom: 5px;
}
.list{
  display: flex;
  justify-content: space-between;
}
ul{
  margin: 0;
  padding: 0;
  margin-top: 3px;
}
.p{
  display: inline-block;
}
</style>
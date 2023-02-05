<template>
  <!-- 添加权限弹出框 -->
  <div class="AddPerm">
    <el-dialog title="添加" :visible.sync="dialogVisible" width="40%">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="权限名称" prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="权限标识" prop="code">
          <el-input v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="权限描述">
          <el-input v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="开启">
          <el-switch v-model="form.enVisible"></el-switch>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      form: {
        name: "",
        code: "",
        description: "",
        enVisible: false,
        pid: "",
        type: null
      }
    }
  },
  methods: {
    init(info) {
      if (info instanceof Object) {
        this.form = { ...info }
        this.dialogVisible = true
      } else {
        this.form.type = 2
        this.dialogVisible = true
      }
    },
    foo() {
      this.dialogVisible = false
      this.$emit("foo")
    },
    // 确定添加
    submitForm() {
      this.$store.dispatch("Permission/addOrEdit", this.form)
      // 调用
      this.foo()
    }
  }
}
</script>

<template>
  <div>
		<el-dialog
      title="分配权限"
      :visible.sync="showTree"
      width="40%">
      <el-tree
        ref="tree"
        :data="trees"
        show-checkbox
        node-key="id"
        :props="propsObj"
        :default-expand-all="true">
      </el-tree>
      <span slot="footer" class="dialog-footer">
        <el-button @click="showTree = false">取 消</el-button>
        <el-button type="primary" @click="getCheckedKeys">确 定</el-button>
      </span>
    </el-dialog>
 </div>
</template>

<script>
export default {
  data () {
	return {
		showTree: false,
      trees: [],
      propsObj: {
        label: 'authName'
      },
      rightsId: []

	}
  },
  methods: {

  },
  created () {

  },
  mounted () {

  },
  components: {

  },
  computed: {

  },
  watch: {

  },
}
</script>

<style lang='scss' scoped>
</style>

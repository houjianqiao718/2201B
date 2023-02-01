<template>
    <section>
        父组件传过来的消息：{{msg}}

        <button @click="add">点击</button>
    </section>
</template>

<script>
    export default {
        name: "Children",
        components: {},
        data() {
            return {
                msg: '',
                desc:'hello vue',
                list: [
                    {name: '张三', age: 18}
                ]
            }
        },
        methods:{
            // 父组件可以调用这个方法传入msg
            updateMsg(msg){
                this.msg = msg
            },
            // 使用本地存储存
            add(){
                localStorage.setItem('list', JSON.stringify(this.list))
            }
        },
        created() {
            // 使用本地存储获取
            let data = JSON.parse(localStorage.getItem('list')) || []
        },
    }
</script>

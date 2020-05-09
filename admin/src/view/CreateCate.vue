<!--  -->
<template>
    <div>
        <el-form label-width='80px' ref='createForm' :model="createForm">
            <!-- <el-form-item 
                label='名称'
                size='small'
                prop='name'
                :rules="{required: true, message: '请输入名称', trigger: 'blur'}">
                <el-input v-model="createForm.name" placeholder="请输入名称" ></el-input>
            </el-form-item> -->
            <el-form-item
                prop="name"
                label="名称"
                :rules="[
                    { required: true, message: '请输入名称', trigger: 'blur' }
                ]"
            >
                <el-input v-model="createForm.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type='primary' size='small' @click="submit('createForm')">提交</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    name: 'create',
    data() {
        return {
            createForm: {}
        }
    },
    methods: {
        submit(form) {
            this.$refs[form].validate((valid) => {
                if(valid) {
                    console.log(this.createForm)
                    this.$http.post('categories', this.createForm).then(res => {
                        console.log(res)
                        this.$router.push('/categories/list')
                        this.$message.success('保存成功！')
                    }).catch(err => {
                        console.log(err)
                    })
                } else {
                    return false
                }
            })
        }
    }
}
</script>
<style lang='less' scoped>

</style>
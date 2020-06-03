<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Event 1</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'Description ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Event 2</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'Description ' + o }}
          </div>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>Event 3</span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'Description ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<style>
  .box-card {
    height: 75vh;
  }
</style>

<script>
export default {
  name: 'Home',
  data() {
    return {
      
    }
  }
};
</script>

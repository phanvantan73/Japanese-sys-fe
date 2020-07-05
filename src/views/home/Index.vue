<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="block">
          <el-image :src="src" style="border: solid 1px #bbb"></el-image>
        </div>
      </el-col>
      <!-- <el-col :span="8">
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
      </el-col> -->
    </el-row>
    <el-row :guiter="40" style="margin-top: 40px;">
      <el-col>
        <p style="font-size: 30px;">TanPV - Tiếng Nhật cho mọi nhà</p>
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
      src: require('@/assets/bg.png')
    }
  }
};
</script>

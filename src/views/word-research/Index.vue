<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('menu.word_research') }}</b>
        </div>
        <el-divider></el-divider>
      </div>
    </el-col>
  </el-row>
</template>

<style>
  .top-title {

  }
  .grid-content {
    padding: 10px;
  }
  .bg-white {
    height: 75vh;
    border-radius: 5px;
    border: solid 1px #DCDFE6;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>

<script>

export default {
  name: 'WordResearch',
  data() {
    
    return {
    }
  },
  methods: {
    
  }
};
</script>

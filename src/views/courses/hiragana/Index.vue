<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-white">
        <!-- <router-view></router-view> -->
        <img :src="baseUrl + alphabets[0].image" alt="">
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
    height: auto;
    border-radius: 5px;
    border: solid 1px #DCDFE6;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
</style>

<script>
import { getCourses } from '@/api/authenticate'

export default {
  name: 'Hiragana',
  data() {
    return {
      baseUrl: 'http://localhost:8000',
      alphabets: [],
      src: '/storage/alphabets/hiragana/a.png'
    }
  },
  async mounted() {
    await this.getListAlphabets()
    console.log(this.$data.alphabets)

  },
  methods: {
    async getListAlphabets() {
      const vm = this
      const res = await getCourses('hiragana')
        // .then(res => {
        //   console.log(res);

        //   vm.alphabets = res.data.lessons
        // })
        // .catch(err => console.log(err))
        // console.log(res.data.lessons);

      vm.alphabets = res.data.lessons
    }
  }
};
</script>

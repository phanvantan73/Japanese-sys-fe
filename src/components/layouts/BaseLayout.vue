<template>
  <el-container>
    <Aside/>
    <el-container :direction="direction">
      <Header/>
      <el-main>
        <router-view></router-view>
      </el-main>
      <Footer/>
    </el-container>
  </el-container>
</template>

<script>
  import Aside from '@/components/layouts/Aside';
  import Header from '@/components/layouts/Header';
  import Footer from '@/components/layouts/Footer';

  export default {
    data() {
      return {
        direction: "vertical"
      }
    },
    components: {
      Aside,
      Header,
      Footer
    }
  };
</script>

<template>
  <div style="height: 100vh;">
    <el-carousel
    :interval="5000"
    arrow="always"
    trigger="click"
    >
      <el-carousel-item v-for="(item, index) in urls" :key="index">
        <div style="width: 100%;">
          <el-image :src="item.url">
            <div slot="placeholder" class="image-slot">
              Loading<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>

<script>
export default {
  name: 'Carousel',
  data() {
    const imageUrls = [
      {
        url: 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
      },
      {
        url: 'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'
      },
      {
        url: 'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'
      },
      {
        url: 'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'
      },
      {
        url: 'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'
      }
    ];
    console.log(imageUrls);
    return {
      urls: imageUrls
    }
  }
}
</script>

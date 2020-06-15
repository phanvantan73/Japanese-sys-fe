<template>
  <el-row>
    <el-col :span="24">
      <div class="notification">
        <div class="notification-content">
          <div class="text">Chọn một bài học để bắt đầu đến với chân trời mới</div>
        </div>
      </div>
      <div class="image-block">
        <el-image
          style="width: 30%"
          :src="url"
          fit="scale-down"
        >
        </el-image>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
  .top-title {

  }
  .el-timeline-item{
    text-align: left;
  }
  .grid-content {
    padding: 10px;
  }
  .bg-white {
    background-color: rgb(255, 255, 255);
  }
  .notification {
    display: flex;
    justify-content: space-between;
    padding: 0 15px 10px 24px;
    background: white;
    margin-top: 20%;
    margin-left: 24%;
    width: 50%;

    /* img {
      animation: ${animation} 1.8s infinite cubic-bezier(0.47, 0, 0.745, 0.715);
    } */
    &-content {
      flex-grow: 1;
      position: relative;
      margin-right: 20px;
      padding: 8px;
      background: #6ab9e7;
      color: white;
      font-size: 20px;
      line-height: 1.4;
      border-radius: 8px;
      box-shadow: 1px 1px 2px 0 0.3;

      &:before,
      &:after {
        content: '';
        position: absolute;
        top: 61px;
        width: 20px;
        height: 20px;
        background: #6ab9e7;
        transform: rotate(-45deg) skew(20deg, 20deg);
      }

      &:before {
        z-index: 9;
      }

      &:after {
        z-index: -1;
        box-shadow: 1px 1px 2px 0 0.3;
      }
    }
  }
  .text {
    overflow: auto;
    max-height: 70px;
    word-break: break-word;
  }
</style>

<script>

export default {
  name: 'First',
  data() {
    return {
      url: require('@/assets/search.jpg')
    }
  },
  methods: {

  }
};
</script>

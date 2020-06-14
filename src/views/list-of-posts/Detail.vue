<template>
  <div class="post-detail-block">
    <el-row>
      <el-col :span="8">
        <div class="image-block image">
          <el-image
            style="width: 80%"
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          >
          </el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="post-title">
          <el-card class="box-card" shadow="never">
            <div style="padding: 14px;">
              <span>Post name {{ $route.params.id }}</span>
              <div class="rate-block">
                <span class="demonstration"></span>
                <el-rate v-model="rate" @change="handleChange"></el-rate>
              </div>
              <div class="description-block clearfix">
                <time class="time">"Mô tả"</time>
              </div>
              <div class="rate-action">
                <el-button type="success" round :disabled="isDisabled">Vote</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
  .rate-action {
    margin-top: 20px;
  }
  .description-block {
    margin-top: 20px;
  }
  .rate-block {
    margin-top: 20px;
  }
  .post-title {
    text-align: left;
  }
  .time {
    font-size: 13px;
    color: #999;
  }
  .image {
    width: 100%;
    display: block;
  }
  .text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .el-card {
    border: none;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
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
        top: 34px;
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
  name: 'Detail',
  data() {
    return {
      rate: null
    }
  },
  computed: {
    isDisabled() {
      return this.rate ? false : true
    }
  },
  methods: {
    handleChange() {
    }
  }
};
</script>

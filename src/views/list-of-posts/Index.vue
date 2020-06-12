<template>
  <el-row :gutter="20">
    <el-col :span="6">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('menu.posts') }}</b>
        </div>
        <el-divider></el-divider>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            <router-link :to="`/list-of-posts/${index + 1}`">
              {{ activity.content }}
            </router-link>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-white">
        <div class="post-content">
          <router-view></router-view>
        </div>
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
    height: auto;
    border-radius: 5px;
    border: solid 1px #DCDFE6;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
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
  name: 'N5',
  data() {
    return {
      url: require('@/assets/search.jpg'),
      activities: [
        {
          content: this.$t('post_1'),
          timestamp: '2018-04-15'
        },
        {
          content: this.$t('post_2'),
          timestamp: '2018-04-13'
        },
        {
          content: this.$t('post_3'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('post_4'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('post_5'),
          timestamp: '2018-04-11'
        }
      ]
    }
  },
  methods: {

  }
};
</script>

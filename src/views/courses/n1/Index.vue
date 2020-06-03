<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('list_lessons') }}</b>
        </div>
        <el-divider></el-divider>
        <el-timeline>
          <el-timeline-item
            v-for="(activity, index) in activities"
            :key="index"
            :timestamp="activity.timestamp">
            <router-link :to="`/courses/n1/${index + 1}`">
              {{ activity.content }}
            </router-link>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
    <el-col :span="20">
      <div class="grid-content bg-white">
        <router-view></router-view>
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

export default {
  name: 'N1',
  data() {
    
    return {
      activities: [
        {
          content: this.$t('lesson_1'),
          timestamp: '2018-04-15'
        },
        {
          content: this.$t('lesson_2'),
          timestamp: '2018-04-13'
        },
        {
          content: this.$t('lesson_3'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('lesson_4'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('lesson_5'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('lesson_6'),
          timestamp: '2018-04-11'
        },
        {
          content: this.$t('lesson_7'),
          timestamp: '2018-04-11'
        }
      ]
    }
  },
  methods: {
    
  }
};
</script>

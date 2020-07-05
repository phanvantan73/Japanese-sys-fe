<template>
  <el-row :gutter="20">
    <el-col :span="5">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('list_lessons') }}</b>
        </div>
        <el-divider></el-divider>
        <el-timeline>
          <el-timeline-item
            v-for="(lesson, index) in lessons"
            :key="index"
            :timestamp="lesson.created_at">
            <router-link :to="`/courses/n5/${lesson.id}`">
              {{ lesson.name }}
            </router-link>
          </el-timeline-item>
        </el-timeline>
      </div>
    </el-col>
    <el-col :span="19">
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
import { getLessons } from '@/api/authenticate'
export default {
  name: 'N5',
  data() {
    return {
      lessons: [],
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
        }
      ]
    }
  },
  methods: {
    async getListOfLesson() {
      const vm = this
      const res = await getLessons({
        course_id: 5
      })
      vm.lessons = res.data.lessons
    },
    navigateRoute(id) {
      this.$router.push({ path: `/courses/n5/${id}` })
    }
  },
  mounted() {
    this.getListOfLesson()
  },
};
</script>

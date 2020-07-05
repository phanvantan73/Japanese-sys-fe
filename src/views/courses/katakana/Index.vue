<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('hiragana_alphabets') }}</b>
        </div>
        <el-divider></el-divider>
        <div class="hiragana-alphabet">
          <el-carousel height="65vh" :autoplay="false" indicator-position="none" arrow="always">
            <el-carousel-item v-for="(alphabet, index) in alphabets" :key="index">
              <el-row>
                <el-col :span="12">
                  <div style="margin-top: 40px;">
                    <img :src="baseUrl + alphabet.image">
                  </div>
                  <div style="margin-top: 40px;"  >
                    <audio :src="baseUrl + alphabet.audio" :id="'play_audio_' + alphabet.id"></audio>
                    <el-button type="primary" size="medium" @click="playAudio(alphabet.id)">
                      <i class="el-icon-video-play"></i>
                    </el-button>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div>
                    <img :src="baseUrl + alphabet.detail.description" width="70%">
                  </div>
                </el-col>
              </el-row>
            </el-carousel-item>
          </el-carousel>
        </div>
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
  name: 'Katakana',
  data() {
    return {
      baseUrl: 'http://localhost:8000',
      alphabets: []
    }
  },
  mounted() {
    this.getListAlphabets()
  },
  methods: {
    async getListAlphabets() {
      const vm = this
      await getCourses('katakana')
        .then(res => {
          vm.alphabets = res.data.lessons
        })
        .catch(err => console.log(err))
    },
    playAudio(id) {
      var audio = document.getElementById('play_audio_' + id);
      audio.play();
    }
  }
};
</script>

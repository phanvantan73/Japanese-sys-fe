<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('menu.word_research') }}</b>
        </div>
        <el-divider></el-divider>
        <div>
          <el-input placeholder="Nhập từ khóa để tra cứu" v-model="keyword" class="input-with-select">
            <el-select v-model="select_language" slot="prepend" placeholder="Chọn ngôn ngữ">
              <el-option label="Tiếng Việt" value="1"></el-option>
              <el-option label="Tiếng Nhật" value="2"></el-option>
            </el-select>
            <el-button slot="append" icon="el-icon-search" @click="handleClick"></el-button>
          </el-input>
        </div>
        <div class="search-result">
          <el-row>
            <el-col :span="8">
              <div class="notification">
                <div class="notification-content">
                  <div class="text">Hãy nhập từ khóa và chọn ngôn ngữ để tra cứu nghĩa</div>
                </div>
              </div>
              <div class="image-block">
                <el-image
                  style="width: 60%"
                  :src="url"
                  fit="scale-down"
                >
                </el-image>
              </div>
            </el-col>
            <el-col :span="16"></el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss">
  .image-block {
  }
  .notification {
    display: flex;
    justify-content: space-between;
    padding: 0 15px 10px 24px;
    background: white;
    margin-top: 20%;

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
        top: 62px;
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
  .search-result {
    padding: 10px 0;
  }
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
  .el-select .el-input {
    width: 150px;
  }
  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }
</style>

<script>

export default {
  name: 'WordResearch',
  data() {
    return {
      keyword: '',
      select_language: '',
      url: require('@/assets/search.jpg')
    }
  },
  methods: {
    handleClick() {
      console.log(this.keyword, this.select_language)
    }
  }
};
</script>

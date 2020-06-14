<template>
  <el-row :gutter="20">
    <el-col :span="24">
      <div class="grid-content bg-white">
        <div class="top-title">
          <b>{{ $t('menu.word_research') }}</b>
        </div>
        <el-divider></el-divider>
        <div>
          <el-form :model="form" :rules="rules" ref="form">
            <el-form-item 
              prop="keyword"
            >
              <el-input placeholder="Nhập từ khóa để tra cứu" v-model="form.keyword" class="input-with-select">
                <el-select v-model="form.select_language" slot="prepend" placeholder="Chọn ngôn ngữ">
                  <el-option label="Tiếng Việt" value="vi"></el-option>
                  <el-option label="Tiếng Nhật" value="ja"></el-option>
                </el-select>
                <el-button slot="append" icon="el-icon-search" @click="submitForm('form')"></el-button>
              </el-input>
            </el-form-item>
          </el-form>
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
            <el-col :span="16">
              <div class="word-wrap" v-for="(result, index) in results" :key="index">
                <div class="word-title">{{ result.word }}</div>
                <div class="word-kanji">{{ result.kanji }}</div>
                <div class="word-mean">{{ result.mean }}</div>
                <ul>
                  <li class="example" v-for="(example, key) in result.examples" :key="key">
                    <span class="ex-jp">{{ example.ex_jp }}</span>: 
                    <span class="ex-vn"> {{ example.ex_vn }}</span>
                  </li>
                </ul>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss">
  .word-wrap {
    border-bottom: 1px solid #ddd;
    padding: 10px 0;
    text-align: left;
  }
  .word-title {
    font-size: 1.5em;
    font-weight: 700;
  }
  .word-kanji {
    font-family: MS PMincho,MS Mincho;
    font-size: 18px;
    line-height: 1.7!important;
  }
  .word-mean {
    color: #900;
  }
  .ex-vn {
    color: #888;
  }
  .ex-jp {
    color: #2a84c9;
    font-family: MS Mincho;
    font-size: 18px;
    opacity: .8;
  }
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
  .search-result {
    padding: 10px 0;
  }
  .top-title {

  }
  .grid-content {
    padding: 10px;
  }
  .bg-white {
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
  .el-form-item__error {
    margin-left: 150px;
  }
</style>

<script>
import { research } from '@/api/research'
export default {
  name: 'WordResearch',
  data() {
    var validateKeyword = (rule, value, callback) => {
      if (value === '') {
        callback(new Error(this.$t('validate.required', {field: this.$t('attributes.keyword')})));
      } else {
        callback();
      }
    };
    return {
      results: [],
      form: {
        keyword: '',
        select_language: '',
      },
      rules: {
        keyword: [
          { 
            validator: validateKeyword,
            trigger: 'blur'
          }
        ]
      },
      url: require('@/assets/search.jpg')
    }
  },
  methods: {
    async submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          const data = await research({
            keyword: this.form.keyword,
            selected_language: this.form.select_language
          });
          this.results = data.data.results
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    }
  }
};
</script>

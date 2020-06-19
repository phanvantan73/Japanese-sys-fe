<template>
  <div>
    <el-row :guiter="20">
      <el-col :span="8">
        <div class="image-block image">
          <el-image
            style="width: 80%"
            :src="baseUrl + resource.path"
          >
          </el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="post-title">
          <el-card class="box-card" shadow="never">
            <div style="padding: 14px;">
              <span>{{ lesson.name }}</span>
              <div class="rate-block">
                <span class="demonstration"></span>
                <el-rate v-model="rate" @change="handleChange"></el-rate>
              </div>
              <div class="description-block clearfix">
                <time class="time">"{{ lesson.description }}"</time>
              </div>
              <div class="rate-action">
                <el-button type="success" round :disabled="isDisabled">{{ $t('buttons.vote') }}</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <el-divider></el-divider>
    <el-row :gutter="20">
      <el-col>
        <el-tabs v-model="activeName">
          <el-tab-pane :label="$t('lessons.sentence_sample')" name="first">
            <el-row>
              <el-col>
                <el-table :data="guideData" height="65vh">
                  <el-table-column type="index" :label="$t('lessons.list.stt')">
                  </el-table-column>
                  <el-table-column :label="$t('lessons.list.sample')" width="200">
                    <template slot-scope="scope">
                      <span v-html="scope.row.sample"></span>
                    </template>
                  </el-table-column>
                  <el-table-column :label="$t('lessons.list.guide')">
                    <template slot-scope="scope">
                      <span v-html="scope.row.guide"></span>
                    </template>
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('lessons.vocabulary')" name="second">
            <el-row>
              <el-col>
                <el-table :data="tableData" height="65vh">
                  <el-table-column type="index" :label="$t('lessons.list.stt')">
                  </el-table-column>
                  <el-table-column prop="word" :label="$t('lessons.list.word')" width="140">
                  </el-table-column>
                  <el-table-column :label="$t('lessons.list.speak')" width="120">
                    <template slot-scope="scope">
                      <div v-html="scope.row.audio"></div>
                      <a href="javascript:;" @click="playMp4(scope.row.id)">play</a>
                    </template>
                  </el-table-column>
                  <el-table-column prop="mean" :label="$t('lessons.list.mean')">
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
          <el-tab-pane :label="$t('lessons.kanji')" name="third">
            <el-row>
              <el-col>
                <el-table :data="kanjiData" height="65vh">
                  <el-table-column type="index" :label="$t('lessons.list.stt')">
                  </el-table-column>
                  <el-table-column prop="hiragana" :label="$t('lessons.list.hiragana')" width="140">
                  </el-table-column>
                  <el-table-column prop="kanji" :label="$t('lessons.list.kanji')" width="120">
                  </el-table-column>
                  <el-table-column prop="mean" :label="$t('lessons.list.mean')">
                  </el-table-column>
                </el-table>
              </el-col>
            </el-row>
          </el-tab-pane>
          <!-- <el-tab-pane :label="$t('lessons.quiz')" name="fourth">Task</el-tab-pane> -->
        </el-tabs>
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
  .el-card {
    border: none;
  }
</style>

<script>
import { getLesson } from '@/api/authenticate'
export default {
  name: 'Lesson',
  data() {
    return {
      baseUrl: 'http://localhost:8000',
      rate: null,
      lesson: {},
      resource: {},
      activeName: 'first',
      tableData: [
        {
          word: 'わたし',
          audio: '<audio id="mp3Mini_0" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/watashi.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/watashi.ogg"></audio>',
          mean: 'tôi',
          id: 'mp3Mini_0'
        },
        {
          word: 'わたしたち',
          audio: '<audio id="mp3Mini_2" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/watashitachi.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/watashitachi.ogg"></audio>',
          mean: 'chúng tôi, chúng ta',
          id: 'mp3Mini_2'
        },
        {
          word: 'あなた',
          audio: '<audio id="mp3Mini_4" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anata.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anata.ogg"></audio>',
          mean: 'anh/ chị/ ông/ bà',
          id: 'mp3Mini_4'
        },
        {
          word: 'あのひと',
          audio: '<audio id="mp3Mini_6" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anohito.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anohito.ogg"></audio>',
          mean: 'người kia, người đó',
          id: 'mp3Mini_6'
        },
        {
          word: 'あのかた',
          audio: '<audio id="mp3Mini_8" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anokata.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/anokata.ogg"></audio>',
          mean: 'vị kia',
          id: 'mp3Mini_8'
        },
        {
          word: 'みなさん',
          audio: '<audio id="mp3Mini_10" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/minasan.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/minasan.ogg"></audio>',
          mean: 'các anh chị, các ông bà, các bạn, quý vị',
          id: 'mp3Mini_10'
        },
        {
          word: '～さん',
          audio: '<audio id="mp3Mini_12" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/san.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/san.ogg"></audio>',
          mean: 'anh, chị, ông, bà',
          id: 'mp3Mini_12'
        },
        {
          word: '～ちゃん',
          audio: '<audio id="mp3Mini_14" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/chan.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/chan.ogg"></audio>',
          mean: 'bé~',
          id: 'mp3Mini_14'
        },
        {
          word: '～くん',
          audio: '<audio id="mp3Mini_16" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kun.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kun.ogg"></audio>',
          mean: 'cậu bé~',
          id: 'mp3Mini_16'
        },
        {
          word: '～じん',
          audio: '<audio id="mp3Mini_18" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/jin.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/jin.ogg"></audio>',
          mean: 'người (nước)~',
          id: 'mp3Mini_18'
        },
        {
          word: 'せんせい',
          audio: '<audio id="mp3Mini_20" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/sensei.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/sensei.ogg"></audio>',
          mean: 'thầy/ cô',
          id: 'mp3Mini_20'
        },
        {
          word: 'きょうし',
          audio: '<audio id="mp3Mini_22" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kyoushi.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kyoushi.ogg"></audio>',
          mean: 'giáo viên',
          id: 'mp3Mini_22'
        },
        {
          word: 'がくせい',
          audio: '<audio id="mp3Mini_24" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/gakusei.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/gakusei.ogg"></audio>',
          mean: 'học sinh, sinh viên',
          id: 'mp3Mini_24'
        },
        {
          word: 'かいしゃいん',
          audio: '<audio id="mp3Mini_26" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kaisyain.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kaisyain.ogg"></audio>',
          mean: 'nhân viên công ty',
          id: 'mp3Mini_26'
        },
        {
          word: 'しゃいん',
          audio: '<audio id="mp3Mini_28" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/syain.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/syain.ogg"></audio>',
          mean: 'nhân viên công ty ~',
          id: 'mp3Mini_28'
        },
        {
          word: 'ぎんこういん',
          audio: '<audio id="mp3Mini_30" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/ginkouin.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/ginkouin.ogg"></audio>',
          mean: 'nhân viên ngân hàng',
          id: 'mp3Mini_30'
        },
        {
          word: 'いしゃ',
          audio: '<audio id="mp3Mini_32" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/isya.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/isya.ogg"></audio>',
          mean: 'bác sĩ',
          id: 'mp3Mini_32'
        },
        {
          word: 'けんきゅうしゃ',
          audio: '<audio id="mp3Mini_34" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kenkyuusya.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/kenkyuusya.ogg"></audio>',
          mean: 'nhà nghiên cứu',
          id: 'mp3Mini_34'
        },
        {
          word: 'エンジニア',
          audio: '<audio id="mp3Mini_36" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/k_enjinia.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/k_enjinia.ogg"></audio>',
          mean: 'kỹ sư',
          id: 'mp3Mini_36'
        },
        {
          word: 'だいがく',
          audio: '<audio id="mp3Mini_38" preload="none"><source preload="none" type="audio/mpeg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/daigaku.mp3"><source preload="none" type="audio/ogg" src="https://www.lophoctiengnhat.com/public/lesson/kotoba/minna/b01/daigaku.ogg"></audio>',
          mean: 'đại học, trường đại học',
          id: 'mp3Mini_38'
        }
      ],
      guideData: [
        {
          sample: '～さん',
          guide: '<p>Thêm vào sau tên người. Dùng cho cả nam và nữ.</p><p>Huongさん：Chị Hương, Phongさん：Anh Phong.</p>'
        },
        {
          sample: '～ちゃん',
          guide: '<p>Thêm vào sau tên bé gái.Thường dùng cho bé gái, nghĩa là bé ～.</p><p> Lanちゃん：Bé Lan, cháu Lan</p>'
        },
        {
          sample: '～くん',
          guide: '<p>Thêm vào sau tên bé trai.Thường dùng cho bé trai, nghĩa là cậu bé ～.</p><p> Namちゃん：Cậu bé Nam, cháu Nam.</p>'
        },
        {
          sample: '<p>せんせい</p><p>きょうし</p>',
          guide: '<p>せんせい: Giáo viên: dùng nói về nghề nghiệp người khác, gọi người khác.</p><p> きょうし: Giáo viên: dùng nói về nghề nghiệp của bản thân.</p>'
        },
        {
          sample: '<p>かいしゃいん</p><p>～しゃいん</p>',
          guide: '<p>かいしゃいん: Nhân viên công ty nói chung. VD:　わたしは　かいしゃいんです。 Tôi là nhân viên công ty.</p><p> ～しゃいん：Nhân viên công ty ～: Phía trước luôn là tên công ty cụ thể nào đó. VD: わたしは　ABCしゃいんです。 Tôi là nhân viên công ty ABC.</p>'
        },
        {
          sample: 'はじめまして。',
          guide: 'Câu chào hỏi khi mới lần đầu gặp nhau.'
        },
        {
          sample: 'どうぞよろしく おねがいします。',
          guide: 'Rất mong được sự giúp đỡ của anh/chị, rất vui được làm quen với anh/chị (Dùng làm câu kết thúc sau khi giới thiệu về mình). Có thể nói ngắn gọn hơn: どうぞよろしく 。Không lịch sự bằng câu đầy đủ, dùng thân mật hơn.'
        }
      ],
      kanjiData: [
        {
          hiragana: 'わたし',
          kanji: '私',
          mean: 'Tôi'
        },
        {
          hiragana: 'わたしたち',
          kanji: '私達',
          mean: 'Chúng tôi, chúng ta'
        },
        {
          hiragana: 'あのひと',
          kanji: 'あの人',
          mean: 'Người kia, người đó'
        },
        {
          hiragana: 'あのかた',
          kanji: 'あの方',
          mean: 'Vị kia'
        },
        {
          hiragana: 'みなさん',
          kanji: '皆さん',
          mean: 'Các anh chị, các ông bà, các bạn, quý vị'
        },
        {
          hiragana: 'せんせい',
          kanji: '先生',
          mean: 'Thầy/ cô'
        },
        {
          hiragana: 'きょうし',
          kanji: '教師',
          mean: 'Giáo viên'
        },
        {
          hiragana: 'がくせい',
          kanji: '学生',
          mean: 'Học sinh, sinh viên'
        },
        {
          hiragana: 'かいしゃいん',
          kanji: '会社員',
          mean: 'Nhân viên công ty'
        },
        {
          hiragana: 'しゃいん',
          kanji: '社員',
          mean: 'Nhân viên công ty ~'
        },
        {
          hiragana: 'ぎんこういん',
          kanji: '銀行員',
          mean: 'Nhân viên ngân hàng'
        },
        {
          hiragana: 'いしゃ',
          kanji: '医者',
          mean: 'Bác Sĩ'
        },
        {
          hiragana: 'けんきゅうしゃ',
          kanji: '研究者',
          mean: 'Nhà nghiên cứu'
        },
        {
          hiragana: 'だいがく',
          kanji: '大学',
          mean: 'Đại học, Trường đại học'
        },
        {
          hiragana: 'びょういん',
          kanji: '病院',
          mean: 'Bệnh viện'
        },
        {
          hiragana: 'でんき',
          kanji: '電気',
          mean: 'Điện, Đèn điện'
        },
        {
          hiragana: 'なんさい',
          kanji: '何歳',
          mean: 'Mấy tuổi, bao nhiêu tuổi'
        },
        {
          hiragana: 'ちゅうごく',
          kanji: '中国',
          mean: 'Trung Quốc'
        },
        {
          hiragana: 'にほん',
          kanji: '日本',
          mean: 'Nhật Bản'
        }
      ]
    }
  },
  computed: {
    isDisabled() {
      return this.rate ? false : true
    }
  },
  methods: {
    playMp4(id) {
      var audio = document.getElementById(id);
      audio.play();
    },
    handleChange() {
    },
    async getLesson() {
      const vm = this
      const res = await getLesson(vm.$route.params.id)
      vm.lesson = res.data.lesson
      vm.resource = res.data.lesson.resource
    }
  },
  mounted() {
    this.getLesson()
  },
};
</script>

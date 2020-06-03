<template>
  <el-row :gutter="20">
    <el-col>
      <el-tabs v-model="activeName">
        <el-tab-pane :label="$t('lessons.sentence_sample')" name="first">
          <el-row>
            <el-col>
              <el-table :data="guideData">
                <el-table-column type="index" :label="$t('lessons.list.stt')">
                </el-table-column>
                <el-table-column prop="sample" :label="$t('lessons.list.sample')" width="200">
                </el-table-column>
                <el-table-column prop="guide" :label="$t('lessons.list.guide')">
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
                <el-table-column prop="audio" :label="$t('lessons.list.speak')" width="120">
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
</template>

<style>
</style>

<script>

export default {
  name: 'Lesson',
  data() {
    return {
      activeName: 'first',
      tableData: [
        {
          word: 'わたし',
          audio: 'Tom',
          mean: 'tôi'
        },
        {
          word: 'わたしたち',
          audio: 'Tom',
          mean: 'chúng tôi, chúng ta'
        },
        {
          word: 'あなた',
          audio: 'Tom',
          mean: 'anh/ chị/ ông/ bà'
        },
        {
          word: 'あのひと',
          audio: 'Tom',
          mean: 'người kia, người đó'
        },
        {
          word: 'あのかた',
          audio: 'Tom',
          mean: 'vị kia'
        },
        {
          word: 'みなさん',
          audio: 'Tom',
          mean: 'các anh chị, các ông bà, các bạn, quý vị'
        },
        {
          word: '～さん',
          audio: 'Tom',
          mean: 'anh, chị, ông, bà'
        },
        {
          word: '～ちゃん',
          audio: 'Tom',
          mean: 'bé~'
        },
        {
          word: '～くん',
          audio: 'Tom',
          mean: 'cậu bé~'
        },
        {
          word: '～じん',
          audio: 'Tom',
          mean: 'người (nước)~'
        },
        {
          word: 'せんせい',
          audio: 'Tom',
          mean: 'thầy/ cô'
        },
        {
          word: 'きょうし',
          audio: 'Tom',
          mean: 'giáo viên'
        },
        {
          word: 'がくせい',
          audio: 'Tom',
          mean: 'học sinh, sinh viên'
        },
        {
          word: 'かいしゃいん',
          audio: 'Tom',
          mean: 'nhân viên công ty'
        },
        {
          word: 'しゃいん',
          audio: 'Tom',
          mean: 'nhân viên công ty ~'
        },
        {
          word: 'ぎんこういん',
          audio: 'Tom',
          mean: 'nhân viên ngân hàng'
        },
        {
          word: 'いしゃ',
          audio: 'Tom',
          mean: 'bác sĩ'
        },
        {
          word: 'けんきゅうしゃ',
          audio: 'Tom',
          mean: 'nhà nghiên cứu'
        },
        {
          word: 'エンジニア',
          audio: 'Tom',
          mean: 'kỹ sư'
        },
        {
          word: 'だいがく',
          audio: 'Tom',
          mean: 'đại học, trường đại học'
        }
      ],
      guideData: [
        {
          sample: '～さん',
          guide: 'Thêm vào sau tên người. Dùng cho cả nam và nữ.Huongさん：Chị Hương, Phongさん：Anh Phong.'
        },
        {
          sample: '～ちゃん',
          guide: 'Thêm vào sau tên bé gái.Thường dùng cho bé gái, nghĩa là bé ～. Lanちゃん：Bé Lan, cháu Lan'
        },
        {
          sample: '～くん',
          guide: 'Thêm vào sau tên bé trai.Thường dùng cho bé trai, nghĩa là cậu bé ～. Namちゃん：Cậu bé Nam, cháu Nam.'
        },
        {
          sample: 'せんせい, きょうし',
          guide: 'せんせい: Giáo viên: dùng nói về nghề nghiệp người khác, gọi người khác. きょうし: Giáo viên: dùng nói về nghề nghiệp của bản thân.'
        },
        {
          sample: 'かいしゃいん, ～しゃいん',
          guide: 'かいしゃいん: Nhân viên công ty nói chung. VD:　わたしは　かいしゃいんです。 Tôi là nhân viên công ty. ～しゃいん：Nhân viên công ty ～: Phía trước luôn là tên công ty cụ thể nào đó. VD: わたしは　ABCしゃいんです。 Tôi là nhân viên công ty ABC.'
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
  methods: {
  }
};
</script>

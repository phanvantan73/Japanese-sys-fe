<template>
  <div class="post-detail-block">
    <el-row>
      <el-col :span="8">
        <div class="image-block image">
          <el-image
            style="width: 80%"
            :src="kimono"
          >
          </el-image>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="post-title">
          <el-card class="box-card" shadow="never">
            <div style="padding: 14px;">
              <span>Bài viết về kimono</span>
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
        <div v-html="post"></div>
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
  .box-card {
    height: auto;
  }
</style>

<script>

export default {
  name: 'Detail',
  data() {
    var kimono2 = require('@/assets/kimono2.jpg');

    return {
      kimono: require('@/assets/kimono.jpg'),
      rate: null,
      post: `<p><strong>“Kimono“</strong> trong tiếng Nhật có nghĩa là: “đồ để mặc”, hòa phục hay còn có cái tên khác là y phục Nhật, chính là là loại y phục truyền thống của Nhật Bản. <strong>Kimono</strong> đã được người Nhật sử dụng trong suốt vài trăm năm. Ngày nay, do sự hội nhập quốc tế và tính chất cuộc sống nên <strong>Kimono</strong> không còn được sử dụng dụng hằng ngày như lúc trước mà thường chỉ được sử dụng vào các dịp lễ tết, trong đám tiệc hay các lễ hội. Ở Nhật, phụ nữ mặc <strong>kimono</strong> phổ biến hơn nam giới và thường có màu và hoa văn nổi bật. Trong khi đó,<strong> kimono</strong> dành cho nam thường không có hoa văn và màu tối hơn.</p>
<p><img class="aligncenter wp-image-1564 td-animation-stack-type0-2" title="nhung-net-van-hoa-dac-trung-cua-Nhat-Ban" src="${kimono2}">Điểm đặc biệt của <strong>Kimono</strong> dành cho phụ nữ chính là bạn không cần phải lo liệu mình có mặc vừa hay không vì <strong>Kimono</strong> chỉ có một cỡ duy nhất, người mặc chỉ cần bó y phục lại cho phù hợp với bản thân mình. <strong>Kimono</strong> có 2 loại : <em>tay rộng và tay ngắn</em>. Phụ nữ đã lấy chồng thường không chuộng loại tay rộng bởi nó có thể gây ra nhiều trở ngại, vướng víu khi làm việc. Trước khi mặc<strong> kimono</strong> thì phải mặc “<em>juban”</em> trước. <strong>Juban</strong> là <em>một áo kimono lót để bảo vệ kimono khỏi dơ, sau đó cuốn bên phải vào trước, bên trái vào sau,sau đó được thắt lại bằng thắt lưng Obi làm bằng lụa, rất đắt tiền.</em> Trong trường hợp quấn bên trái trước thì có nghĩa là bạn sắp đi dự tang lễ. Việc mặc<strong> kimono</strong> rất mất thời gian, và gần như không thể tự mặc được. Người mặc <strong>kimono</strong> phải <em>đi guốc gỗ, và mang bít tất Tabi màu trắng</em></p>`
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

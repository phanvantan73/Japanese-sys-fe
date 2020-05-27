<template>
  <div>
    <el-row>
      <el-col :span="12">
        <Carousel/>
        <!-- <div style="width: 100%;">
          <el-image src="https://laodongnhatban.com.vn/images/2019/12/03/danh-ngn-tieng-nhat1.jpg" fit="none">
            <div slot="placeholder" class="image-slot">
              Loading<span class="dot">...</span>
            </div>
          </el-image>
        </div> -->
        
      </el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
    <el-row>
      <el-col></el-col>
    </el-row>
    <el-table :data="tableData">
      <el-table-column prop="date" label="Date" width="140">
      </el-table-column>
      <el-table-column prop="name" label="Name" width="120">
      </el-table-column>
      <el-table-column prop="address" label="Address">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import Carousel from './components/Carousel';

export default {
  name: 'Home',
  data() {
    const item = {
      date: '2016-05-02',
      name: 'Tom',
      address: 'No. 189, Grove St, Los Angeles'
    };
    return {
      tableData: Array(20).fill(item)
    }
  },
  components: {
    Carousel
  }
};
</script>

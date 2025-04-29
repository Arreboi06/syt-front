<template>
  <div>
    <!-- 首页轮播图的结构,轮播图这里也完全可以拆成一个组件 -->
    <Carousel />
    <!-- 首页搜索医院的表单区域 -->
    <Search />
    <!-- 底部展示医院的结构 -->
    <el-row gutter="20">
      <el-col :span="20">
        <!-- 等级 -->
        <Level />
        <!-- 地区 -->
        <Region />
        <!-- 展示医院的结构 -->
        <div class="hospital">
          <Card v-for="item in 10" :key="item" class="item" />
        </div>
        <!-- 分页器 -->
        <el-pagination
          v-model:current-page="pageNo"
          v-model:page-size="pageSize"
          :page-sizes="[10, 20, 30, 40]"
          :background="true"
          layout="total, sizes, prev, pager, next, jumper"
          :total="40"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
      <el-col :span="4">
        <Tip />
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
//引入首页轮播图组件
import Carousel from "./carousel/index.vue";
//引入首页搜索的组件
import Search from "./search/index.vue";
// 引入首页等级的组件
import Level from "./level/index.vue";
// 引入首页地区的组件
import Region from "./region/index.vue";
// 引入首页展示的卡片组件
import Card from "./card/index.vue";
// 分页器需要的数据
import { ref } from "vue";
// 分页器页码
let pageNo = ref<number>(1);
// 分页器每页显示的条数
let pageSize = ref<number>(10);
</script>

<style scoped lang="scss">
.hospital {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  .item {
    width: 48%;
    margin: 10px 0px;
  }
}
</style>

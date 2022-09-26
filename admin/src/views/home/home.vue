<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <!-- 左侧导航栏 -->
    <aside-bar />
    <!-- 右侧头部 -->
    <el-container>
      <header-bar />
      <!-- 右侧主体-子路由出口 -->
      <el-main>
        <router-view v-slot="{ Component }">
            <transition name="move" mode="out-in">
                <keep-alive :include="tags.nameList">
                    <component :is="Component" />
                </keep-alive>
            </transition>
        </router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import asideBar from '@/components/asideBar/index.vue'
import headerBar from '@/components/headerBar/headerBar.vue';
import { ref } from 'vue'
import { useTagsStore } from '@/store/tags'
const tags = useTagsStore();

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({ length: 20 }).fill(item))

 
 
 
</script>
<style lang='scss'>
.layout-container-demo .el-main {
  padding: 0;
}
.layout-container-demo .toolbar {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  right: 20px;
}

</style>

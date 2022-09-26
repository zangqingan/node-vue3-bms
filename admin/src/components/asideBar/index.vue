<template>
  <el-aside class="aside-content" width="200px">
    <logo-bar/>
    <menu-bar/>
  </el-aside>
</template>
<script setup>
import logoBar from './logoBar/logoBar.vue';
import menuBar from './menuBar/menuBar.vue';
 
 
 
</script>
<style lang='scss'>
.el-aside {
  color: var(--el-text-color-primary);
  background: var(--el-color-primary-light-8);
  overflow: hidden;
}
</style>

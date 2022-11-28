<template>
  <div class="health-check">
    {{ hello }}
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from 'vue'

/**
 * Target Module 健康检查
 */
export default defineComponent({
  name: 'health-check'
})

</script>
<script lang="ts" setup>
import { nextTick, ref } from 'vue'
const hello = ref()
nextTick(() => {
  setTimeout(() => {
    hello.value = '😊 Hello, 健康检查'
  })
})

</script>

<style lang="scss" scoped>
.health-check {
  color: #94c33d;
  font-weight: bolder;
}
</style>

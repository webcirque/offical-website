<template>
  <div class="relative bg-gray-900 overflow-hidden" style="min-height: 100vh;">
    <navbar/>
    <router-view/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import navbar from './navbar.vue'

export default defineComponent({
  components: {
    navbar
  },
})
</script>

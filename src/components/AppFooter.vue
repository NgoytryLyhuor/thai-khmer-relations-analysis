<script setup>
defineProps({ text: String })
</script>

<template>
  <footer class="bg-white border-t py-6 text-center text-gray-500 text-sm">
    {{ text }}
  </footer>
</template>
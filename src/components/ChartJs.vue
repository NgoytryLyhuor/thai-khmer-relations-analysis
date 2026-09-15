<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const props = defineProps({
  id: { type: String, required: true },
  config: { type: Object, required: true },
})

let chart = null

onMounted(() => {
  const el = document.getElementById(`chart-${props.id}`)
  if (el) {
    chart = new Chart(el, props.config)
  }
})

onBeforeUnmount(() => {
  if (chart) chart.destroy()
})
</script>

<template>
  <canvas :id="`chart-${id}`"></canvas>
</template>
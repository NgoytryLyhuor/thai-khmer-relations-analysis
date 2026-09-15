<script setup>
import { onMounted, onBeforeUnmount, watch } from 'vue'
import { Chart, registerables } from 'chart.js'
import { isDark } from '../theme'

Chart.register(...registerables)

const props = defineProps({
  id: { type: String, required: true },
  config: { type: Object, required: true },
})

let chart = null

function applyThemeColors() {
  if (!chart) return
  const color = isDark.value ? '#cbd5e1' : '#374151'
  const grid = isDark.value ? 'rgba(148, 163, 184, 0.25)' : 'rgba(0, 0, 0, 0.1)'
  if (chart.options.plugins && chart.options.plugins.legend) {
    chart.options.plugins.legend.labels.color = color
  }
  if (chart.options.scales) {
    Object.values(chart.options.scales).forEach((s) => {
      if (s) {
        if (s.grid) s.grid.color = grid
        if (s.ticks) s.ticks.color = color
      }
    })
  }
  chart.update()
}

onMounted(() => {
  const el = document.getElementById(`chart-${props.id}`)
  if (el) {
    chart = new Chart(el, props.config)
    applyThemeColors()
  }
})

watch(isDark, () => {
  applyThemeColors()
})

onBeforeUnmount(() => {
  if (chart) chart.destroy()
})
</script>

<template>
  <canvas :id="`chart-${id}`"></canvas>
</template>
<script setup>
import { inject } from 'vue'

const props = defineProps({ ids: { type: Array, required: true } })
const nav = inject('nav')

function go() {
  nav('references')
}
</script>

<template>
  <sup class="text-xs">
    <a
      v-for="id in ids"
      :key="id"
      href="#/references"
      class="text-primary hover:text-accent underline font-bold mx-0.5"
      @click.prevent="go"
      :title="`ឯកសារយោង [${id}]`"
    >[{{ id }}]</a>
  </sup>
</template>
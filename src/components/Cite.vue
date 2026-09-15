<script setup>
import { inject } from 'vue'

const props = defineProps({ ids: { type: Array, required: true } })
const nav = inject('nav')

function go() {
  nav('references')
}
</script>

<template>
  <sup class="text-[0.7rem] align-super whitespace-nowrap">
    <a
      v-for="id in ids"
      :key="id"
      href="#/references"
      class="inline-block px-0.5 py-0.5 -my-0.5 font-bold no-underline hover:no-underline mx-[1px] transition"
      :title="`ឯកសារយោង [${id}]`"
      @click.prevent="go"
    >[{{ id }}]</a>
  </sup>
</template>

<style scoped>
a {
  color: var(--brand, #1e3a8a);
  text-decoration: none;
  border-radius: 4px;
}
a:hover {
  color: var(--accent, #d97706);
}
</style>
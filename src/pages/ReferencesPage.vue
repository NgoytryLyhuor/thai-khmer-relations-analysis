<script setup>
import { computed } from 'vue'
import { references } from '../data/references'
import { isDark } from '../theme'

const groups = computed(() => {
  const map = {}
  references.forEach((r) => {
    if (!map[r.group]) map[r.group] = []
    map[r.group].push(r)
  })
  return map
})
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ៦</span>
    <h2 class="page-title mb-2">ឯកសារយោង <span class="text-lg font-normal align-middle" :class="isDark ? 'text-gray-400' : 'text-gray-500'">(Sources & References)</span></h2>
    <p class="text-sm max-w-3xl mb-8" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
      រាល់លេខ <sup class="font-bold text-primary dark:text-blue-300">[n]</sup> ដែលលើកឡើងក្នុងរបាយការណ៍ ភ្ជាប់មកនឹងប្រភពខាងក្រោម ។
      ចុចលើតំណនីមួយៗ ដើម្បីពិនិត្យប្រភពដើម ។
    </p>

    <div v-for="(list, group) in groups" :key="group" class="mb-8">
      <div class="section-head mb-4">
        <span class="num-badge">#</span>
        <h3 class="section-title !text-lg md:!text-xl">{{ group }}</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <a
          v-for="r in list"
          :key="r.id"
          :href="r.url"
          target="_blank"
          rel="noopener"
          class="card card-hover p-4 flex items-start gap-3 group"
        >
          <span
            class="shrink-0 w-8 h-8 rounded-lg grid place-items-center text-xs font-bold text-white bg-gradient-to-br from-indigo-700 to-indigo-500"
          >{{ r.id }}</span>
          <span class="min-w-0">
            <span class="block text-sm font-bold break-words group-hover:underline" :class="isDark ? 'text-blue-300' : 'text-primary'">{{ r.title }}</span>
            <span class="block text-xs mt-1 flex items-center gap-1" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
              {{ r.org }} <span class="opacity-60 group-hover:translate-x-0.5 transition-transform">↗</span>
            </span>
          </span>
        </a>
      </div>
    </div>

    <div class="callout callout-danger p-5 rounded-2xl mt-2">
      <h4 class="font-bold mb-2" :class="isDark ? 'text-amber-300' : 'text-accent'">⚖️ ការប្រុងប្រយ័ត្នលើការប្រើប្រាស់ទិន្នន័យ</h4>
      <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        ផ្នែក "សង្គ្រាម Scammers ២០២៥" នៅក្នុងរបាយការណ៍នេះ ជាការសង្ខេបតាមប្រព័ន្ធផ្សព្វផ្សាយផ្សេងៗ និងមានការបកស្រាយរបស់អ្នកសរសេរ —
        សូមប្រៀបធៀបជាមួយប្រភពព័ត៌មានដទៃទៀត មុននឹងយកទៅប្រើប្រាស់ ។ ទិន្នន័យសេដ្ឋកិច្ចអាចប្រែប្រួលតាមកាលកំណត់របាយការណ៍នីមួយៗ ។
      </p>
    </div>
  </div>
</template>
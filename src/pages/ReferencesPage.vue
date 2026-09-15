<script setup>
import { computed } from 'vue'
import { references } from '../data/references'

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
    <h2 class="text-3xl font-header font-bold text-primary mb-2 border-b-2 border-primary pb-2">៦. ឯកសារយោង (Sources & References)</h2>
    <p class="text-gray-600 text-sm mb-8">
      រាល់លេខ <sup>[១]</sup> ដែលលើកឡើងក្នុងរបាយការណ៍ ភ្ជាប់មកនឹងប្រភពខាងក្រោម ។ ចុចលើតំណនីមួយៗ ដើម្បីពិនិត្យប្រភពដើម ។
    </p>

    <div v-for="(list, group) in groups" :key="group" class="mb-8">
      <h3 class="font-bold text-lg text-primary mb-3">{{ group }}</h3>
      <div class="bg-white rounded-xl shadow-sm divide-y divide-gray-100">
        <div v-for="r in list" :key="r.id" class="p-4 flex items-start gap-4">
          <span class="bg-primary text-white text-xs font-bold rounded-full w-7 h-7 flex items-center justify-center shrink-0">[{{ r.id }}]</span>
          <div>
            <a :href="r.url" target="_blank" rel="noopener" class="text-primary font-bold hover:underline break-words">{{ r.title }}</a>
            <p class="text-sm text-gray-500">{{ r.org }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-amber-50 border border-amber-200 p-5 rounded-xl">
      <h4 class="font-bold text-accent mb-2">⚖️ ការប្រុងប្រយ័ត្នលើការប្រើប្រាស់ទិន្នន័យ</h4>
      <p class="text-sm text-gray-700">
        ផ្នែក "សង្គ្រាម Scammers ២០២៥" នៅក្នុងរបាយការណ៍នេះ ជាការសង្ខេបតាមប្រព័ន្ធផ្សព្វផ្សាយផ្សេងៗ និងមានការបកស្រាយរបស់អ្នកសរសេរ —
        សូមប្រៀបធៀបជាមួយប្រភពព័ត៌មានដទៃទៀត មុននឹងយកទៅប្រើប្រាស់ ។ ទិន្នន័យសេដ្ឋកិច្ចអាចប្រែប្រួលតាមកាលកំណត់របាយការណ៍នីមួយៗ ។
      </p>
    </div>
  </div>
</template>
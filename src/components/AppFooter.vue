<script setup>
import { inject } from 'vue'
import { isDark } from '../theme'

defineProps({ text: String })
const nav = inject('nav')

const links = [
  { id: 'history', label: 'ប្រវត្តិសាស្ត្រ & លង្វែក' },
  { id: 'culture', label: 'សង្គ្រាមវប្បធម៌' },
  { id: 'conflict2025', label: 'ជម្លោះ ២០២៥' },
  { id: 'analysis', label: 'វិភាគ' },
  { id: 'economy', label: 'សេដ្ឋកិច្ច & ជីវិត' },
  { id: 'outlook', label: 'ទស្សនវិស័យ ២០២៧–២០២៩' },
  { id: 'references', label: 'ឯកសារយោង' },
]
</script>

<template>
  <footer class="mt-10 border-t" :class="isDark ? 'border-gray-800' : 'border-gray-200'">
    <div class="max-w-6xl mx-auto px-4 py-10">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="flex items-center gap-2.5 mb-3">
            <span class="brand-mark">ស</span>
            <span class="font-header font-bold text-lg bg-clip-text text-transparent bg-brand-grad">ស៊ីជម្រៅ Insight</span>
          </div>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            របាយការណ៍វិភាគស៊ីជម្រៅលើទំនាក់ទំនងកម្ពុជា-ថៃ៖ ប្រវត្តិសាស្ត្រ,
            វប្បធម៌ ជម្លោះ ២០២៥ និងសេដ្ឋកិច្ច-ជីវិតប្រចាំថ្ងៃ ។
          </p>
        </div>
        <div>
          <h4 class="text-xs font-bold tracking-widest uppercase mb-3" :class="isDark ? 'text-gray-400' : 'text-gray-500'">ចូររុករក</h4>
          <ul class="space-y-2 text-sm">
            <li v-for="l in links" :key="l.id">
              <button @click="nav(l.id)" class="transition" :class="isDark ? 'text-gray-300 hover:text-blue-300' : 'text-gray-600 hover:text-primary'">
                {{ l.label }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="text-xs font-bold tracking-widest uppercase mb-3" :class="isDark ? 'text-gray-400' : 'text-gray-500'">អំពីរបាយការណ៍</h4>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-400' : 'text-gray-600'">
            ទិន្នន័យផ្អែកលើប្រភពសាធារណៈ (ពិភពលោកធនាគារ, IMF, ADB, AMRO, UN) ។
            រាល់ការបកស្រាយជាទស្សនៈរបស់អ្នកសរសេរ ។
          </p>
        </div>
      </div>
      <div class="mt-8 pt-6 border-t flex flex-col md:flex-row items-center justify-between gap-3" :class="isDark ? 'border-gray-800 text-gray-500' : 'border-gray-200 text-gray-500'">
        <p class="text-xs text-center">{{ text }}</p>
        <p class="text-xs">ចងក្រង ២០២៥–២០២៦</p>
      </div>
    </div>
  </footer>
</template>
<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import { impact2025Chart } from '../data/charts'
import { isDark } from '../theme'

const nav = inject('nav')

const events = [
  { date: 'ឧសភា ២០២៥', color: 'bg-rose-500', text: 'ការប៉ះទង្គិចព្រំដែន ទាហានកម្ពុជាម្នាក់ស្លាប់។' },
  { date: 'កក្កដា ២០២៥', color: 'bg-rose-500', text: 'ថៃប្រើប្រាស់ F-16 វាយប្រហារគោលដៅនៅប៉ោយប៉ែត (អះអាងថាជាមូលដ្ឋាន Drone របស់ក្រុម Scammers)។' },
  { date: 'សីហា ២០២៥', color: 'bg-rose-500', text: 'កម្ពុជាឆ្លើយតបដោយគ្រាប់រ៉ុក្កែត BM-21 Grad។' },
  { date: 'តុលា ២០២៥', color: 'bg-emerald-500', text: 'កិច្ចព្រមព្រៀងសន្តិភាពគូឡាឡាំពួ (Kuala Lumpur Accord) សម្របសម្រួលដោយ អាមេរិក និង ម៉ាឡេស៊ី។' },
  { date: 'ធ្នូ ២០២៥', color: 'bg-rose-500', text: 'បទឈប់បាញ់ត្រូវបានរំលោភបំពាន។' },
]

const stats = [
  { stat: 'រាប់ម៉ឺន', label: 'ពលករខ្មែរវិលត្រឡប់ពីថៃក្រោយវិបត្តិព្រំដែន' },
  { stat: '−១៦.៩%', label: 'ភ្ញៀវទេសចរធ្លាក់ចុះឆ្នាំ ២០២៥' },
  { stat: '−៥២.៤%', label: 'ភ្ញៀវទេសចរថៃធ្លាក់ចុះ (បើធៀប ២០២៤)' },
]
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ៣</span>
    <h2 class="page-title mb-8">ជម្លោះថ្មី ២០២៤-២០២៥៖ <span class="text-red-600 dark:text-red-400">សង្គ្រាម Scammers</span></h2>

    <div class="callout callout-danger p-5 rounded-2xl mb-8">
      <div class="flex items-start gap-3">
        <span class="text-2xl shrink-0">⚠️</span>
        <div>
          <h3 class="font-bold text-red-700 dark:text-red-300 mb-1.5 text-lg">ការវិវត្តថ្មីដ៏គ្រោះថ្នាក់</h3>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            ឆ្នាំ ២០២៥ ជម្លោះបានប្រែក្លាយពីបញ្ហាទឹកដីសុទ្ធសាធ មកជា "សង្គ្រាមប្រឆាំងឧក្រិដ្ឋកម្មឆ្លងដែន"។
            ថៃបានបើកប្រតិបត្តិការ "War on Scammers" ដោយចោទថា កាស៊ីណូនៅប៉ោយប៉ែត និងអូស្មាច់ ជាមូលដ្ឋានរបស់ក្រុមឆបោក។
          </p>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="card card-pad">
        <h3 class="section-title !text-xl mb-5 inline-flex items-center gap-2">🗓️ កាលប្បវត្តិវិបត្តិ ២០២៥</h3>
        <ul class="timeline">
          <li v-for="(e, i) in events" :key="i" class="timeline-item">
            <span class="timeline-dot" :class="e.color"></span>
            <strong class="text-red-700 dark:text-red-300">{{ e.date }}:</strong>
            <p class="text-sm mt-0.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ e.text }}</p>
          </li>
        </ul>
      </div>

      <div class="card card-pad">
        <h3 class="section-title !text-xl mb-5 inline-flex items-center gap-2">🎯 យុទ្ធសាស្ត្រយោធា & នយោបាយ</h3>
        <div class="space-y-4 text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <p><strong>🇹🇭 យុទ្ធសាស្ត្រថៃ៖</strong> ប្រកាសថា "មិនមែនវាយប្រហារកម្ពុជា" តែវាយប្រហារ "កងទ័ពឆបោក" (Scam Army)។ ប្រើប្រាស់បញ្ហានេះដើម្បីបង្ហាញស្នាដៃនយោបាយក្នុងស្រុក។</p>
          <p><strong>🇰🇭 ការឆ្លើយតបកម្ពុជា៖</strong> ចាត់ទុកជាការរំលោភអធិបតេយ្យភាពធ្ងន់ធ្ងរ។ ការពារជាតិជាប្រភពនៃភាពស្របច្បាប់ (Legitimacy) របស់រដ្ឋាភិបាល។</p>
          <p><strong>🌍 កត្តាអន្តរជាតិ៖</strong> UN ព្រួយបារម្ភពីជនស៊ីវិល និងជនបរទេសដែលជាប់ក្នុងមជ្ឈមណ្ឌល Scammers។</p>
        </div>
        <div class="mt-5 pt-4 border-t" :class="isDark ? 'border-gray-700' : 'border-gray-100'">
          <p class="text-sm font-bold mb-3" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ផលប៉ះពាល់តាមវិស័យ</p>
          <div class="chart-wrapper" style="height: 190px">
            <ChartJs id="impact2025" :config="impact2025Chart" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
      <div v-for="s in stats" :key="s.stat" class="stat-card">
        <p class="stat-value text-red-600 dark:text-red-400">{{ s.stat }}</p>
        <p class="stat-label">{{ s.label }}</p>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <button @click="nav('economy')" class="btn btn-emerald">សេដ្ឋកិច្ច & ជីវិត →</button>
      <button @click="nav('culture')" class="btn btn-ghost">← សង្គ្រាមវប្បធម៌</button>
    </div>
  </div>
</template>
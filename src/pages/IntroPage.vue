<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import { isDark } from '../theme'
import { mainConflictChart } from '../data/charts'

const nav = inject('nav')

const cards = [
  {
    icon: '⚡',
    title: 'ចំណុចក្តៅថ្មី (២០២៥)',
    value: 'សង្គ្រាម Scammers',
    desc: 'ការវាយប្រហារតាមអាកាស & ឧក្រិដ្ឋកម្មឆ្លងដែន',
    tone: 'from-rose-500 to-red-600',
    target: 'conflict2025',
  },
  {
    icon: '🏛️',
    title: 'របួសប្រវត្តិសាស្ត្រ',
    value: 'លង្វែក ១៥៩៤',
    desc: 'រឿងព្រេង ព្រះគោព្រះកែវ & ការបាត់បង់ទឹកដី',
    tone: 'from-amber-500 to-orange-600',
    target: 'history',
  },
  {
    icon: '⚖️',
    title: 'មូលដ្ឋានច្បាប់',
    value: 'ផែនទី ១៩០៧',
    desc: 'សាលក្រម ICJ ឆ្នាំ ១៩៦២ & ២០១៣',
    tone: 'from-blue-500 to-indigo-600',
    target: 'history',
  },
  {
    icon: '📈',
    title: 'ថ្មីបំផុត',
    value: 'សេដ្ឋកិច្ច & ជីវិត',
    desc: 'ហេតុអ្វីការរកលុយសព្វថ្ងៃពិបាក?',
    tone: 'from-emerald-500 to-teal-600',
    target: 'economy',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="card-dark card-pad rounded-3xl mb-10 overflow-hidden relative">
      <div class="absolute -top-20 -right-24 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -left-12 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl pointer-events-none"></div>

      <div class="relative text-center max-w-3xl mx-auto">
        <span class="chip !text-amber-300 !border-amber-300/30 !bg-amber-300/10 mb-5">របាយការណ៍វិភាគស៊ីជម្រៅ · ២០២៥–២០២៦</span>
        <h1 class="font-header font-bold text-3xl md:text-5xl leading-tight text-white mb-5">
          ឫសគល់នៃជម្លោះ<br class="hidden md:block" />
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-amber-200 via-amber-300 to-yellow-200">កម្ពុជា-ថៃ</span>
        </h1>
        <p class="text-white/80 text-base md:text-lg leading-relaxed">
          ការវិភាគស៊ីជម្រៅលើ "ការចងចាំរួម" (Collective Memory), របួសប្រវត្តិសាស្ត្រ, ជម្លោះ "សង្គ្រាម Scammers ២០២៥",
          និងផលប៉ះពាល់ដល់<strong class="text-white">សេដ្ឋកិច្ច និងជីវិតប្រចាំថ្ងៃ</strong>របស់ប្រជាជន ។
        </p>
        <div class="flex flex-wrap justify-center gap-3 mt-7">
          <button @click="nav('history')" class="btn btn-primary !px-8">ចាប់ផ្តើមអានរបាយការណ៍</button>
          <button @click="nav('outlook')" class="btn bg-amber-400 text-neutral-900 hover:bg-amber-300">ទស្សនវិស័យ ២០២៧–២០២៩ →</button>
        </div>
      </div>
    </div>

    <!-- Quick cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <button
        v-for="c in cards"
        :key="c.title"
        @click="nav(c.target)"
        class="card card-hover card-pad text-left group"
      >
        <div class="flex items-start justify-between mb-3">
          <span class="w-11 h-11 rounded-xl grid place-items-center text-xl text-white bg-gradient-to-br shadow-sm" :class="c.tone">{{ c.icon }}</span>
          <span class="text-gray-300 dark:text-gray-600 group-hover:translate-x-0.5 transition-transform">→</span>
        </div>
        <h3 class="text-xs font-bold uppercase tracking-wider" :class="isDark ? 'text-gray-400' : 'text-gray-500'">{{ c.title }}</h3>
        <p class="font-header font-bold text-lg mt-1 leading-snug" :class="isDark ? 'text-gray-100' : 'text-gray-800'">{{ c.value }}</p>
        <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ c.desc }}</p>
      </button>
    </div>

    <!-- Chart -->
    <div class="card card-pad mb-10">
      <div class="chart-card-header">
        <div>
          <h2 class="section-title !text-xl md:!text-2xl">កត្តាជំរុញជម្លោះតាមសម័យកាល</h2>
          <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-500'">ពីជម្លោះទឹកដី → ជម្លោះកូនកាត់ (Hybrid Conflict)</p>
        </div>
        <span class="chip hidden md:inline-flex">ប្រវត្តិ → ២០២៥</span>
      </div>
      <div class="chart-wrapper">
        <ChartJs id="main" :config="mainConflictChart" />
      </div>
      <p class="text-center text-sm mt-4 italic" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
        ទិន្នន័យបង្ហាញពីការផ្លាស់ប្តូរពីជម្លោះទឹកដី មកជាជម្លោះកូនកាត់ (Hybrid Conflict) នៅឆ្នាំ ២០២៥ ។
      </p>
    </div>

    <div class="flex flex-wrap justify-center gap-4">
      <button @click="nav('economy')" class="btn btn-emerald">សេដ្ឋកិច្ច & ជីវិត →</button>
      <button @click="nav('references')" class="btn btn-ghost">ឯកសារយោង</button>
    </div>
  </div>
</template>
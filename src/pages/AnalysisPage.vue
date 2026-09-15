<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'
import { isDark } from '../theme'

const nav = inject('nav')
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ៤</span>
    <h2 class="page-title mb-8">វិភាគសេដ្ឋកិច្ច & ដំណោះស្រាយ</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="card card-pad card-hover">
        <div class="flex items-center gap-2 mb-4">
          <span class="w-10 h-10 rounded-xl grid place-items-center text-lg text-white bg-gradient-to-br from-blue-500 to-indigo-600">💰</span>
          <h3 class="section-title !text-xl">ផលប៉ះពាល់សេដ្ឋកិច្ច</h3>
        </div>
        <ul class="list-disc ml-5 space-y-2.5 text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <li><strong>ពាណិជ្ជកម្ម៖</strong> ធ្លាក់ចុះយ៉ាងខ្លាំងនៅឆ្នាំ ២០២៥ ដោយសារការបិទច្រកព្រំដែន។ <Cite :ids="[1, 2]" /></li>
          <li><strong>ពលករ៖</strong> ពលករខ្មែររាប់លាននាក់នៅថៃប្រឈមហានិភ័យ ប៉ុន្តែសេដ្ឋកិច្ចថៃក៏ត្រូវការពួកគេ (សំណង់, កសិកម្ម)។</li>
          <li><strong>ទេសចរណ៍៖</strong> ភ្ញៀវទេសចរណ៍ធ្លាក់ចុះទាំងសងខាង។ <Cite :ids="[11, 12]" /></li>
        </ul>
        <div class="mt-6">
          <button @click="nav('economy')" class="btn btn-emerald">អានបន្ថែម៖ សេដ្ឋកិច្ច & ជីវិត →</button>
        </div>
      </div>

      <div class="card-dark card-pad overflow-hidden relative">
        <div class="absolute -bottom-20 -right-16 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl pointer-events-none"></div>
        <div class="flex items-center gap-2 mb-4">
          <span class="w-10 h-10 rounded-xl grid place-items-center text-lg bg-amber-400 text-neutral-900">🧠</span>
          <h3 class="section-title !text-xl !text-white">សេចក្តីសន្និដ្ឋាន</h3>
        </div>
        <p class="text-white/90 leading-relaxed text-sm md:text-base">
          ជម្លោះនេះកើតចេញពីការប្រទាក់ក្រឡានៃ <strong class="text-amber-300">"ស្រមោលប្រវត្តិសាស្ត្រ"</strong> (លង្វែក), <strong class="text-amber-300">"ភាពស្រពេចស្រពិលនៃច្បាប់"</strong> (ផែនទី), និង <strong class="text-amber-300">"ផលប្រយោជន៍នយោបាយ"</strong>។
          <br /><br />
          ឆ្នាំ ២០២៥ បង្ហាញថា បញ្ហាប្រពៃណីត្រូវបានបន្ថែមដោយបញ្ហាថ្មីគឺ <strong class="text-white">ឧក្រិដ្ឋកម្មតាមអ៊ីនធឺណិត</strong>។ ដំណោះស្រាយមិនអាចប្រើតែកម្លាំងយោធា ឬកិច្ចព្រមព្រៀងមួយឆាវៗទេ។
          ប្រទេសទាំងពីរត្រូវរៀនរស់ជាមួយគ្នា ដោយដោះស្រាយ "ឬសគល់នៃការមិនទុកចិត្តគ្នា"។
          <br /><br />
          បើគ្មានស្ថិរភាពព្រំដែនទេ ផលវិបាកធ្លាក់មកលើប្រជាជនធម្មតាវិញ — ការងារ បំណុល និងតម្លៃជីវិតកាន់តែធ្ងន់ធ្ងរ។
        </p>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <button @click="nav('outlook')" class="btn bg-amber-400 text-neutral-900 hover:bg-amber-300">ទស្សនវិស័យ ២០២៧–២០២៩ →</button>
      <button @click="nav('conflict2025')" class="btn btn-ghost">← ជម្លោះ ២០២៥</button>
    </div>
  </div>
</template>
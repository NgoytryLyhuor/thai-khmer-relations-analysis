<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'

const nav = inject('nav')
</script>

<template>
  <div>
    <h2 class="text-3xl font-header font-bold text-primary mb-6">៤. វិភាគសេដ្ឋកិច្ច & ដំណោះស្រាយ</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="font-bold text-lg mb-4">ផលប៉ះពាល់សេដ្ឋកិច្ច</h3>
        <ul class="list-disc ml-5 space-y-2 text-gray-700">
          <li><strong>ពាណិជ្ជកម្ម៖</strong> ធ្លាក់ចុះយ៉ាងខ្លាំងនៅឆ្នាំ ២០២៥ ដោយសារការបិទច្រកព្រំដែន។ <Cite :ids="[1, 2]" /></li>
          <li><strong>ពលករ៖</strong> ពលករខ្មែររាប់លាននាក់នៅថៃប្រឈមហានិភ័យ ប៉ុន្តែសេដ្ឋកិច្ចថៃក៏ត្រូវការពួកគេ (សំណង់, កសិកម្ម)។</li>
          <li><strong>ទេសចរណ៍៖</strong> ភ្ញៀវទេសចរណ៍ធ្លាក់ចុះទាំងសងខាង។ <Cite :ids="[11, 12]" /></li>
        </ul>
        <div class="mt-5">
          <button @click="nav('economy')" class="bg-emerald-700 text-white px-6 py-3 rounded-full font-bold hover:bg-emerald-800 transition shadow">
            អានបន្ថែម៖ សេដ្ឋកិច្ច & ជីវិត →
          </button>
        </div>
      </div>

      <div class="bg-neutral-900 text-white p-6 rounded-xl shadow-sm">
        <h3 class="font-bold text-lg mb-4 text-accent">សេចក្តីសន្និដ្ឋាន</h3>
        <p class="leading-relaxed opacity-90">
          ជម្លោះនេះកើតចេញពីការប្រទាក់ក្រឡានៃ <strong>"ស្រមោលប្រវត្តិសាស្ត្រ"</strong> (លង្វែក), <strong>"ភាពស្រពេចស្រពិលនៃច្បាប់"</strong> (ផែនទី), និង <strong>"ផលប្រយោជន៍នយោបាយ"</strong>។
          <br><br>
          ឆ្នាំ ២០២៥ បង្ហាញថា បញ្ហាប្រពៃណីត្រូវបានបន្ថែមដោយបញ្ហាថ្មីគឺ <strong>ឧក្រិដ្ឋកម្មតាមអ៊ីនធឺណិត</strong>។ ដំណោះស្រាយមិនអាចប្រើតែកម្លាំងយោធា ឬកិច្ចព្រមព្រៀងមួយឆាវៗទេ។
          ប្រទេសទាំងពីរត្រូវរៀនរស់ជាមួយគ្នា ដោយដោះស្រាយ "ឬសគល់នៃការមិនទុកចិត្តគ្នា"។
          <br><br>
          បើគ្មានស្ថិរភាពព្រំដែនទេ ផលវិបាកធ្លាក់មកលើប្រជាជនធម្មតាវិញ —
          ការងារ បំណុល និងតម្លៃជីវិតកាន់តែធ្ងន់ធ្ងរ។
        </p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import { impact2025Chart } from '../data/charts'

const nav = inject('nav')

const events = [
  { date: 'ឧសភា ២០២៥', color: 'bg-red-500', text: 'ការប៉ះទង្គិចព្រំដែន ទាហានកម្ពុជាម្នាក់ស្លាប់។' },
  { date: 'កក្កដា ២០២៥', color: 'bg-red-500', text: 'ថៃប្រើប្រាស់ F-16 វាយប្រហារគោលដៅនៅប៉ោយប៉ែត (អះអាងថាជាមូលដ្ឋាន Drone របស់ក្រុម Scammers)។' },
  { date: 'សីហា ២០២៥', color: 'bg-red-500', text: 'កម្ពុជាឆ្លើយតបដោយគ្រាប់រ៉ុក្កែត BM-21 Grad។' },
  { date: 'តុលា ២០២៥', color: 'bg-green-500', text: 'កិច្ចព្រមព្រៀងសន្តិភាពគូឡាឡាំពួ (Kuala Lumpur Accord) សម្របសម្រួលដោយ អាមេរិក និង ម៉ាឡេស៊ី។' },
  { date: 'ធ្នូ ២០២៥', color: 'bg-red-500', text: 'បទឈប់បាញ់ត្រូវបានរំលោភបំពាន។' },
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-header font-bold text-red-600 mb-6 border-b-2 border-red-600 pb-2">៣. ជម្លោះថ្មី ២០២៤-២០២៥៖ សង្គ្រាម Scammers</h2>

    <div class="bg-red-50 border border-red-200 p-6 rounded-xl mb-8">
      <h3 class="text-xl font-bold text-red-800 mb-2">⚠️ ការវិវត្តថ្មីដ៏គ្រោះថ្នាក់</h3>
      <p class="text-gray-700">
        ឆ្នាំ ២០២៥ ជម្លោះបានប្រែក្លាយពីបញ្ហាទឹកដីសុទ្ធសាធ មកជា "សង្គ្រាមប្រឆាំងឧក្រិដ្ឋកម្មឆ្លងដែន"។
        ថៃបានបើកប្រតិបត្តិការ "War on Scammers" ដោយចោទថា កាស៊ីណូនៅប៉ោយប៉ែត និងអូស្មាច់ ជាមូលដ្ឋានរបស់ក្រុមឆបោក។
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div class="bg-white p-6 rounded-xl shadow-sm h-full">
        <h3 class="font-bold text-lg mb-4">កាលប្បវត្តិវិបត្តិ ២០២៥</h3>
        <ul class="space-y-4 border-l-2 border-red-300 pl-4 relative">
          <li v-for="(e, i) in events" :key="i" class="relative">
            <span class="absolute -left-[21px] top-1 w-3 h-3 rounded-full" :class="e.color"></span>
            <strong class="text-red-800">{{ e.date }}:</strong>
            <p class="text-sm text-gray-700 mt-1">{{ e.text }}</p>
          </li>
        </ul>
      </div>

      <div class="bg-white p-6 rounded-xl shadow-sm">
        <h3 class="font-bold text-lg mb-4">យុទ្ធសាស្ត្រយោធា & នយោបាយ</h3>
        <div class="space-y-4 text-sm text-gray-700">
          <p><strong>🇹🇭 យុទ្ធសាស្ត្រថៃ៖</strong> ប្រកាសថា "មិនមែនវាយប្រហារកម្ពុជា" តែវាយប្រហារ "កងទ័ពឆបោក" (Scam Army)។ ប្រើប្រាស់បញ្ហានេះដើម្បីបង្ហាញស្នាដៃនយោបាយក្នុងស្រុក។</p>
          <p><strong>🇰🇭 ការឆ្លើយតបកម្ពុជា៖</strong> ចាត់ទុកជាការរំលោភអធិបតេយ្យភាពធ្ងន់ធ្ងរ។ ការពារជាតិជាប្រភពនៃភាពស្របច្បាប់ (Legitimacy) របស់រដ្ឋាភិបាល។</p>
          <p><strong>🌍 កត្តាអន្តរជាតិ៖</strong> UN ព្រួយបារម្ភពីជនស៊ីវិល និងជនបរទេសដែលជាប់ក្នុងមជ្ឈមណ្ឌល Scammers។</p>
        </div>
        <div class="chart-wrapper mt-4" style="height: 200px">
          <ChartJs id="impact2025" :config="impact2025Chart" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      <div class="bg-white p-4 rounded-xl shadow-sm text-center">
        <p class="text-2xl font-header font-bold text-red-600">រាប់ម៉ឺន</p>
        <p class="text-sm text-gray-600">ពលករខ្មែរវិលត្រឡប់ពីថៃក្រោយវិបត្តិព្រំដែន</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow-sm text-center">
        <p class="text-2xl font-header font-bold text-red-600">−១៦.៩%</p>
        <p class="text-sm text-gray-600">ភ្ញៀវទេសចរធ្លាក់ចុះឆ្នាំ ២០២៥</p>
      </div>
      <div class="bg-white p-4 rounded-xl shadow-sm text-center">
        <p class="text-2xl font-header font-bold text-red-600">−៥២.៤%</p>
        <p class="text-sm text-gray-600">ភ្ញៀវទេសចរថៃធ្លាក់ចុះ (បើធៀប ២០២៤)</p>
      </div>
    </div>

    <div class="flex justify-end mt-6">
      <button @click="nav('economy')" class="text-primary font-bold hover:underline">ទៅកាន់៖ សេដ្ឋកិច្ច & ជីវិត →</button>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import { mainConflictChart } from '../data/charts'

const nav = inject('nav')
</script>

<template>
  <div>
    <div class="text-center mb-10">
      <h1 class="text-3xl md:text-5xl font-header font-bold text-primary mb-4 leading-tight">ឫសគល់នៃជម្លោះ កម្ពុជា-ថៃ</h1>
      <p class="text-lg text-gray-600 max-w-3xl mx-auto">
        ការវិភាគស៊ីជម្រៅលើ "ការចងចាំរួម" (Collective Memory), របួសប្រវត្តិសាស្ត្រ, ជម្លោះ "សង្គ្រាម Scammers ២០២៥",
        និងផលប៉ះពាល់ដល់<strong>សេដ្ឋកិច្ច និងជីវិតប្រចាំថ្ងៃ</strong>របស់ប្រជាជន។
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-red-500">
        <h3 class="text-sm font-bold text-gray-500 uppercase">ចំណុចក្តៅថ្មី (២០២៥)</h3>
        <p class="text-xl font-header font-bold text-red-600 mt-2">សង្គ្រាម Scammers</p>
        <p class="text-sm text-gray-600 mt-1">ការវាយប្រហារតាមអាកាស & ឧក្រិដ្ឋកម្មឆ្លងដែន</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent">
        <h3 class="text-sm font-bold text-gray-500 uppercase">របួសប្រវត្តិសាស្ត្រ</h3>
        <p class="text-xl font-header font-bold text-gray-800 mt-2">លង្វែក ១៥៩៤</p>
        <p class="text-sm text-gray-600 mt-1">រឿងព្រេង ព្រះគោព្រះកែវ & ការបាត់បង់ទឹកដី</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary" @click="nav('history')" style="cursor: pointer">
        <h3 class="text-sm font-bold text-gray-500 uppercase">មូលដ្ឋានច្បាប់</h3>
        <p class="text-xl font-header font-bold text-gray-800 mt-2">ផែនទី ១៩០៧</p>
        <p class="text-sm text-gray-600 mt-1">សាលក្រម ICJ ឆ្នាំ ១៩៦២ & ២០១៣</p>
      </div>
      <div class="bg-white p-6 rounded-xl shadow-sm border-l-4 border-emerald-600" @click="nav('economy')" style="cursor: pointer">
        <h3 class="text-sm font-bold text-gray-500 uppercase">ថ្មីបំផុត</h3>
        <p class="text-xl font-header font-bold text-emerald-700 mt-2">សេដ្ឋកិច្ច & ជីវិត</p>
        <p class="text-sm text-gray-600 mt-1">ហេតុអ្វីការរកលុយសព្វថ្ងៃពិបាក?</p>
      </div>
    </div>

    <div class="bg-white p-6 rounded-xl shadow-sm mb-8">
      <h2 class="text-xl font-header font-bold mb-4 text-center">កត្តាជំរុញជម្លោះតាមសម័យកាល</h2>
      <div class="chart-wrapper">
        <ChartJs id="main" :config="mainConflictChart" />
      </div>
      <p class="text-center text-sm text-gray-500 mt-4 italic">ទិន្នន័យបង្ហាញពីការផ្លាស់ប្តូរពីជម្លោះទឹកដី មកជាជម្លោះកូនកាត់ (Hybrid Conflict) នៅឆ្នាំ ២០២៥។</p>
    </div>

    <div class="flex flex-wrap justify-center gap-4">
      <button @click="nav('history')" class="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-blue-800 transition shadow-lg">ចាប់ផ្តើមអានរបាយការណ៍</button>
      <button @click="nav('economy')" class="bg-emerald-700 text-white px-8 py-3 rounded-full font-bold hover:bg-emerald-800 transition shadow-lg">→ សេដ្ឋកិច្ច & ជីវិត</button>
    </div>
  </div>
</template>
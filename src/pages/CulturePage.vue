<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'
import { isDark } from '../theme'

const nav = inject('nav')
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ២</span>
    <h2 class="page-title mb-8">សង្គ្រាមវប្បធម៌ & អត្តសញ្ញាណ</h2>

    <div class="card card-pad mb-8">
      <p class="lead mb-5">ភាពស្រដៀងគ្នានៃវប្បធម៌មិនបាននាំមកនូវការយោគយល់គ្នាទេ តែបែរជាបង្កើតនូវការប្រកួតប្រជែងថា "នរណាជាម្ចាស់ដើម" (Zero-sum game)។</p>

      <div class="section-head">
        <span class="num-badge">២.១</span>
        <h3 class="section-title">កុបកម្មស្ថានទូត ២០០៣</h3>
      </div>
      <p class="text-sm mb-4" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
        កើតចេញពីពាក្យចចាមអារ៉ាមមិនពិតថា តារាថៃ (ស៊ុប វណ្ណាន់) ថា "អង្គរវត្តជារបស់ថៃ"។
        នេះបង្ហាញពីភាពផុយស្រួយនៃមនោសញ្ចេតនាជាតិ និងការភ័យខ្លាចការបាត់បង់បេតិកភណ្ឌ។
      </p>

      <div class="section-head">
        <span class="num-badge">២.២</span>
        <h3 class="section-title">ការប្រៀបធៀបទស្សនៈវប្បធម៌</h3>
      </div>
      <div class="overflow-x-auto -mx-1 px-1">
        <table class="w-full text-sm text-left min-w-[540px]">
          <thead>
            <tr class="text-xs uppercase tracking-wide" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
              <th class="px-4 py-3 rounded-tl-xl" :class="isDark ? 'bg-white/5' : 'bg-gray-100'">វិស័យ</th>
              <th class="px-4 py-3" :class="isDark ? 'bg-white/5' : 'bg-blue-50 text-blue-800'">ទស្សនៈកម្ពុជា 🇰🇭</th>
              <th class="px-4 py-3 rounded-tr-xl" :class="isDark ? 'bg-white/5' : 'bg-red-50 text-red-800'">ទស្សនៈថៃ 🇹🇭</th>
            </tr>
          </thead>
          <tbody class="divide-y" :class="isDark ? 'divide-white/10' : 'divide-gray-100'">
            <tr>
              <td class="px-4 py-3.5 font-bold">ល្ខោន</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ល្ខោនខោល ជាប្រភពដើម។ ថៃយកទៅកែច្នៃ។</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">"ឃោន" (Khon) ជាសិល្បៈរាជវាំងអយុធ្យា ដាច់ដោយឡែក។ <Cite :ids="[22]" /></td>
            </tr>
            <tr>
              <td class="px-4 py-3.5 font-bold">ប្រដាល់</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">"គុនខ្មែរ" មានឆ្លាក់លើជញ្ជាំងអង្គរ។ (ស៊ីហ្គេម ២០២៣)</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">"មួយថៃ" ជាកីឡាអន្តរជាតិមានច្បាប់ខុសគ្នា។</td>
            </tr>
            <tr>
              <td class="px-4 py-3.5 font-bold">អ៊ីនធឺណិត</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ការពារមរតកពីការ "លួច" (Cultural Theft)។</td>
              <td class="px-4 py-3.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ប្រើពាក្យ "Claimbodia" ដើម្បីចំអក។</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="callout callout-brand mt-6">
        <h4 class="font-bold mb-2" :class="isDark ? 'text-amber-300' : 'text-accent'">🏛️ ករណី Khon ទល់នឹង Lakhon Khol</h4>
        <p class="text-sm">
          របាំ "ឃោន" របស់ថៃត្រូវបានចុះបញ្ជីជាបេតិកភណ្ឌអរូបីរបស់យូណេស្កូក្នុងឆ្នាំ ២០១៨ <Cite :ids="[22]" /> ខណៈកម្ពុជាក៏បានស្នើបញ្ចូល "ល្ខោនខោល" ផងដែរ —
          ដែលបង្កើតការបកស្រាយយ៉ាងខ្លាំងនៅលើបណ្តាញសង្គមអំពី "អ្នកណាជាអ្នកបង្កើតមុន"។ នេះជាឧទាហរណ៍ច្បាស់លាស់នៃ
          ការប្រកួតប្រជែងអត្តសញ្ញាណដែលមិនមែនកើតចេញពីទិន្នន័យប្រវត្តិសាស្ត្រទេ តែកើតចេញពីអារម្មណ៍ជាតិនិយម។
        </p>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <button @click="nav('conflict2025')" class="btn btn-danger">ជម្លោះ ២០២៥ →</button>
      <button @click="nav('history')" class="btn btn-ghost">← ប្រវត្តិសាស្ត្រ</button>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'

const nav = inject('nav')
</script>

<template>
  <div>
    <h2 class="text-3xl font-header font-bold text-accent mb-6 border-b-2 border-accent pb-2">២. សង្គ្រាមវប្បធម៌ & អត្តសញ្ញាណ</h2>

    <div class="bg-white p-6 rounded-xl shadow-sm mb-6">
      <p class="mb-4">ភាពស្រដៀងគ្នានៃវប្បធម៌មិនបាននាំមកនូវការយោគយល់គ្នាទេ តែបែរជាបង្កើតនូវការប្រកួតប្រជែងថា "នរណាជាម្ចាស់ដើម" (Zero-sum game)។</p>

      <h3 class="font-bold text-lg text-primary mb-3">២.១ កុបកម្មស្ថានទូត ២០០៣</h3>
      <p class="text-sm text-gray-600 mb-4">
        កើតចេញពីពាក្យចចាមអារ៉ាមមិនពិតថា តារាថៃ (ស៊ុប វណ្ណាន់) ថា "អង្គរវត្តជារបស់ថៃ"។
        នេះបង្ហាញពីភាពផុយស្រួយនៃមនោសញ្ចេតនាជាតិ និងការភ័យខ្លាចការបាត់បង់បេតិកភណ្ឌ។
      </p>

      <h3 class="font-bold text-lg text-primary mb-3">២.២ ការប្រៀបធៀបទស្សនៈវប្បធម៌</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 border rounded-lg">
          <thead class="text-xs text-gray-700 uppercase bg-gray-100">
            <tr>
              <th class="px-6 py-3">វិស័យ</th>
              <th class="px-6 py-3 text-blue-800">ទស្សនៈកម្ពុជា 🇰🇭</th>
              <th class="px-6 py-3 text-red-800">ទស្សនៈថៃ 🇹🇭</th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white border-b">
              <td class="px-6 py-4 font-bold">ល្ខោន</td>
              <td class="px-6 py-4">ល្ខោនខោល ជាប្រភពដើម។ ថៃយកទៅកែច្នៃ។</td>
              <td class="px-6 py-4">"ឃោន" (Khon) ជាសិល្បៈរាជវាំងអយុធ្យា ដាច់ដោយឡែក។ <Cite :ids="[22]" /></td>
            </tr>
            <tr class="bg-gray-50 border-b">
              <td class="px-6 py-4 font-bold">ប្រដាល់</td>
              <td class="px-6 py-4">"គុនខ្មែរ" មានឆ្លាក់លើជញ្ជាំងអង្គរ។ (ស៊ីហ្គេម ២០២៣)</td>
              <td class="px-6 py-4">"មួយថៃ" ជាកីឡាអន្តរជាតិមានច្បាប់ខុសគ្នា។</td>
            </tr>
            <tr class="bg-white">
              <td class="px-6 py-4 font-bold">អ៊ីនធឺណិត</td>
              <td class="px-6 py-4">ការពារមរតកពីការ "លួច" (Cultural Theft)។</td>
              <td class="px-6 py-4">ប្រើពាក្យ "Claimbodia" ដើម្បីចំអក។</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div class="bg-amber-50 border border-amber-200 p-4 rounded-lg mt-6">
        <h4 class="font-bold text-accent mb-2">🏛️ ករណី Khon ទល់នឹង Lakhon Khol</h4>
        <p class="text-sm">
          របាំ "ឃោន" របស់ថៃត្រូវបានចុះបញ្ជីជាបេតិកភណ្ឌអរូបីរបស់យូណេស្កូក្នុងឆ្នាំ ២០១៨ <Cite :ids="[22]" /> ខណៈកម្ពុជាក៏បានស្នើបញ្ចូល "ល្ខោនខោល" ផងដែរ —
          ដែលបង្កើតការបកស្រាយយ៉ាងខ្លាំងនៅលើបណ្តាញសង្គមអំពី "អ្នកណាជាអ្នកបង្កើតមុន"។ នេះជាឧទាហរណ៍ច្បាស់លាស់នៃ
          ការប្រកួតប្រជែងអត្តសញ្ញាណដែលមិនមែនកើតចេញពីទិន្នន័យប្រវត្តិសាស្ត្រទេ តែកើតចេញពីអារម្មណ៍ជាតិនិយម។
        </p>
      </div>
    </div>

    <div class="flex justify-end">
      <button @click="nav('conflict2025')" class="text-red-600 font-bold hover:underline">ទៅកាន់៖ ជម្លោះ ២០២៥ →</button>
    </div>
  </div>
</template>
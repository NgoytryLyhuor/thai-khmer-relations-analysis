<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'

const nav = inject('nav')

const timeline = [
  { date: '១៤៣១', color: 'bg-red-500', title: 'ការដួលរលំអង្គរ', text: 'កងទ័ពអយុធ្យាវាយដណ្តើមអង្គរ។ ជាចំណុចចាប់ផ្តើមនៃការផ្លាស់ប្តូរអំណាចក្នុងតំបន់។' },
  { date: '១៥៩៤', color: 'bg-red-500', title: 'ការដួលរលំលង្វែក', text: 'ព្រះបាទនរេនសូរដណ្តើមរាជធានី។ របួសជាតិ និងរឿងព្រេងព្រះគោព្រះកែវ។' },
  { date: '១៧៩៤', color: 'bg-red-500', title: 'បាត់ដំបង & សៀមរាប', text: 'ខេត្តធំៗធ្លាក់ក្រោមអាណាព្យាបាលសៀមអស់ជាងមួយសតវត្ស។' },
  { date: '១៨៦៣', color: 'bg-accent', title: 'អាណាព្យាបាលបារាំង', text: 'កម្ពុជាក្លាយជាអាណាព្យាបាលរបស់បារាំង។' },
  { date: '១៩០៤/១៩០៧', color: 'bg-primary', title: 'សន្ធិសញ្ញា និងផែនទីឧបសម្ព័ន្ធ', text: 'បារាំងគូសព្រំដែនតាមខ្សែបែងចែកទឹក ប៉ុន្តែផែនទីភ្ជាប់ធ្វើឲ្យប្រាសាទព្រះវិហារស្ថិតក្នុងដែនដីខ្មែរ។' },
  { date: '១៩៤១–១៩៤៦', color: 'bg-red-500', title: 'ថៃកាន់កាប់បាត់ដំបង/សៀមរាប', text: 'សម័យសង្គ្រាមលោកលើកទី២ ថៃកាន់កាប់ខេត្តខាងលិច ហើយប្រគល់ឲ្យវិញបន្ទាប់ពីឆ្នាំ ១៩៤៦–១៩៤៧។' },
  { date: '១៩៥៨/១៩៦១', color: 'bg-red-500', title: 'ការប៉ះទង្គិចព្រះវិហារ', text: 'ភាពតានតឹងយោធាតាមព្រំដែនដងរែក មុនរឿងបញ្ជូនទៅតុលាការពិភពលោក។' },
  { date: '១៩៦២', color: 'bg-primary', title: 'សាលក្រម ICJ', text: 'តុលាការយុត្តិធម៌អន្តរជាតិសម្រេចឲ្យប្រាសាទព្រះវិហារជារបស់កម្ពុជា។' },
  { date: '១៩៧៥–១៩៧៩', color: 'bg-red-500', title: 'ការប៉ះទង្គិចព្រំដែន', text: 'ការប៉ះទង្គិចយោធាតាមព្រំដែនក្នុងសម័យខ្មែរក្រហម។' },
  { date: '២០០៣', color: 'bg-accent', title: 'កុបកម្មស្ថានទូត', text: 'ពាក្យចចាមអារ៉ាមក្លែងក្លាយលើតារាថៃ បង្ករឿងវាយប្រហារទីតាំងថៃក្នុងភ្នំពេញ។' },
  { date: '២០០៨–២០១១', color: 'bg-red-500', title: 'ជម្លោះព្រះវិហារ', text: 'ប៉ះទង្គិចគ្នានៅតំបន់ប្រាសាទព្រះវិហារ បន្ទាប់ពីការចុះបញ្ជីបេតិកភណ្ឌពិភពលោក។' },
  { date: '២០១៣', color: 'bg-primary', title: 'សាលក្រម ICJ ថ្មី', text: 'តុលាការសម្រេចលើផ្ទៃដី ៤.៦ គីឡូម៉ែត្រក្រឡាជុំវិញប្រាសាទ ប៉ុន្តែការអនុវត្តនៅតែស្មុគស្មាញ។' },
  { date: '២០២៤–២០២៥', color: 'bg-red-500', title: 'ភាពតានតឹងថ្មី និង "សង្គ្រាម Scammers"', text: 'វិបត្តិឆ្លងដែនថ្មីទាក់ទងនឹងឧក្រិដ្ឋកម្មតាមអ៊ីនធឺណិត (សូមមើលផ្នែកជម្លោះ ២០២៥)។' },
]
</script>

<template>
  <div>
    <h2 class="text-3xl font-header font-bold text-primary mb-6 border-b-2 border-primary pb-2">១. មរតកនៃការឈឺចាប់ & ផែនទីអាណានិគម</h2>

    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm prose-kh mb-8">
      <h3>១.១ របួសប្រវត្តិសាស្ត្រ៖ បន្ទាយលង្វែក (The Trauma of Longvek)</h3>
      <p>
        ចំណុចចាប់ផ្តើមនៃ "យុគងងឹត" គឺការដួលរលំនៃរាជធានីលង្វែកនៅខែមករា ឆ្នាំ ១៥៩៤ ក្រោមស្នាដៃស្តេចសៀម ព្រះបាទនរេនសូរ (Naresuan)។
        នេះមិនមែនគ្រាន់តែជាការបរាជ័យយោធាទេ តែជាការបាត់បង់ព្រលឹងជាតិ។ <Cite :ids="[20]" />
      </p>

      <div class="bg-yellow-50 p-4 rounded-lg border border-yellow-200 my-4">
        <h4 class="font-bold text-accent mb-2">💡 រឿងព្រេង ព្រះគោ ព្រះកែវ</h4>
        <p class="text-sm mb-0">
          ខ្មែរជឿថាសៀមបាន "លួច" បដិមាករព្រះគោ និងព្រះកែវ ដែលក្នុងពោះមានផ្ទុកក្បួនខ្នាត និងគម្ពីរដីកា។
          និទានកថានេះពន្យល់ពីមូលហេតុដែលខ្មែរចុះខ្សោយ និងសៀមរីកចម្រើន ដោយចោទថាថៃបាន "លួច" បញ្ញាញាណរបស់ខ្មែរ។
          ដូចគ្នានេះដែរ រឿងព្រេងស្តេចសៀមបាញ់ប្រាក់ដួងចូលរបងឫស្សី ក៏ជានិមិត្តរូបនៃការបែកបាក់ផ្ទៃក្នុង។
        </p>
      </div>

      <h3>១.២ ទស្សនៈផ្ទុយគ្នា៖ "ទឹកដីដែលបាត់បង់"</h3>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="border p-4 rounded bg-blue-50">
          <strong>🇰🇭 ទស្សនៈកម្ពុជា</strong>
          <p class="text-sm mt-2">ប្រវត្តិសាស្ត្រក្រោយអង្គរ គឺជាការបាត់បង់ទឹកដី (បាត់ដំបង, សៀមរាប, សុរិន្ទ) ទៅឱ្យប្រទេសជិតខាងដោយអយុត្តិធម៌។</p>
        </div>
        <div class="border p-4 rounded bg-red-50">
          <strong>🇹🇭 ទស្សនៈថៃ</strong>
          <p class="text-sm mt-2">ពួកគេរៀនថាបានបាត់បង់ "Lost Territories" (កម្ពុជា និងឡាវ) ទៅឱ្យបារាំង ដើម្បីរក្សាឯករាជ្យភាពរបស់ខ្លួន។</p>
        </div>
      </div>

      <h3>១.៣ បញ្ហាផែនទី និងសន្ធិសញ្ញា ១៩០៤/១៩០៧</h3>
      <p>ជម្លោះព្រះវិហារកើតចេញពីភាពមិនច្បាស់លាស់រវាង៖</p>
      <ul class="list-disc ml-5 space-y-2">
        <li><strong>សន្ធិសញ្ញា ១៩០៤៖</strong> កំណត់ព្រំដែនតាម "ខ្សែបែងចែកទឹក" (Watershed Line) ដែលនឹងធ្វើឱ្យប្រាសាទស្ថិតនៅដីថៃ។</li>
        <li><strong>ផែនទីឧបសម្ព័ន្ធ ១ (១៩០៧)៖</strong> បារាំងគូសឱ្យប្រាសាទស្ថិតនៅដីខ្មែរ។ សៀមមិនបានតវ៉ាទេនៅពេលនោះ។</li>
        <li><strong>សាលក្រម ICJ ១៩៦២៖</strong> សម្រេចថាប្រាសាទជារបស់ខ្មែរ ដោយផ្អែកលើការទទួលស្គាល់ដោយស្ងៀមស្ងាត់ (Acquiescence) របស់ថៃ។ ប៉ុន្តែបញ្ហាដី ៤.៦ គីឡូម៉ែត្រក្រឡា នៅតែមិនដាច់ស្រេច។ <Cite :ids="[21]" /></li>
      </ul>
    </div>

    <div class="bg-white p-6 md:p-8 rounded-xl shadow-sm">
      <h3 class="text-2xl font-header font-bold text-primary mb-6 border-b-2 border-primary pb-2">១.៤ កាលប្បវត្តិពេញលេញពីអង្គរ ដល់សព្វថ្ងៃ</h3>
      <ul class="space-y-4 border-l-2 border-primary pl-4 relative">
        <li v-for="(t, i) in timeline" :key="i" class="relative">
          <span class="absolute -left-[21px] top-1 w-3 h-3 rounded-full" :class="t.color"></span>
          <strong class="text-primary">{{ t.date }}:</strong>
          <strong class="text-gray-800"> {{ t.title }}</strong>
          <p class="text-sm text-gray-600 mt-1">{{ t.text }}</p>
        </li>
      </ul>
    </div>

    <div class="flex justify-end mt-6">
      <button @click="nav('culture')" class="text-primary font-bold hover:underline">ទៅកាន់៖ សង្គ្រាមវប្បធម៌ →</button>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'
import { isDark } from '../theme'

const nav = inject('nav')

const timeline = [
  { date: '១៤៣១', color: 'bg-rose-500', title: 'ការដួលរលំអង្គរ', text: 'កងទ័ពអយុធ្យាវាយដណ្តើមអង្គរ។ ជាចំណុចចាប់ផ្តើមនៃការផ្លាស់ប្តូរអំណាចក្នុងតំបន់។' },
  { date: '១៥៩៤', color: 'bg-rose-500', title: 'ការដួលរលំលង្វែក', text: 'ព្រះបាទនរេនសូរដណ្តើមរាជធានី។ របួសជាតិ និងរឿងព្រេងព្រះគោព្រះកែវ។' },
  { date: '១៧៩៤', color: 'bg-rose-500', title: 'បាត់ដំបង & សៀមរាប', text: 'ខេត្តធំៗធ្លាក់ក្រោមអាណាព្យាបាលសៀមអស់ជាងមួយសតវត្ស។' },
  { date: '១៨៦៣', color: 'bg-amber-500', title: 'អាណាព្យាបាលបារាំង', text: 'កម្ពុជាក្លាយជាអាណាព្យាបាលរបស់បារាំង។' },
  { date: '១៩០៤/១៩០៧', color: 'bg-blue-600', title: 'សន្ធិសញ្ញា និងផែនទីឧបសម្ព័ន្ធ', text: 'បារាំងគូសព្រំដែនតាមខ្សែបែងចែកទឹក ប៉ុន្តែផែនទីភ្ជាប់ធ្វើឲ្យប្រាសាទព្រះវិហារស្ថិតក្នុងដែនដីខ្មែរ។' },
  { date: '១៩៤១–១៩៤៦', color: 'bg-rose-500', title: 'ថៃកាន់កាប់បាត់ដំបង/សៀមរាប', text: 'សម័យសង្គ្រាមលោកលើកទី២ ថៃកាន់កាប់ខេត្តខាងលិច ហើយប្រគល់ឲ្យវិញបន្ទាប់ពីឆ្នាំ ១៩៤៦–១៩៤៧។' },
  { date: '១៩៥៨/១៩៦១', color: 'bg-rose-500', title: 'ការប៉ះទង្គិចព្រះវិហារ', text: 'ភាពតានតឹងយោធាតាមព្រំដែនដងរែក មុនរឿងបញ្ជូនទៅតុលាការពិភពលោក។' },
  { date: '១៩៦២', color: 'bg-blue-600', title: 'សាលក្រម ICJ', text: 'តុលាការយុត្តិធម៌អន្តរជាតិសម្រេចឲ្យប្រាសាទព្រះវិហារជារបស់កម្ពុជា។' },
  { date: '១៩៧៥–១៩៧៩', color: 'bg-rose-500', title: 'ការប៉ះទង្គិចព្រំដែន', text: 'ការប៉ះទង្គិចយោធាតាមព្រំដែនក្នុងសម័យខ្មែរក្រហម។' },
  { date: '២០០៣', color: 'bg-amber-500', title: 'កុបកម្មស្ថានទូត', text: 'ពាក្យចចាមអារ៉ាមក្លែងក្លាយលើតារាថៃ បង្ករឿងវាយប្រហារទីតាំងថៃក្នុងភ្នំពេញ។' },
  { date: '២០០៨–២០១១', color: 'bg-rose-500', title: 'ជម្លោះព្រះវិហារ', text: 'ប៉ះទង្គិចគ្នានៅតំបន់ប្រាសាទព្រះវិហារ បន្ទាប់ពីការចុះបញ្ជីបេតិកភណ្ឌពិភពលោក។' },
  { date: '២០១៣', color: 'bg-blue-600', title: 'សាលក្រម ICJ ថ្មី', text: 'តុលាការសម្រេចលើផ្ទៃដី ៤.៦ គីឡូម៉ែត្រក្រឡាជុំវិញប្រាសាទ ប៉ុន្តែការអនុវត្តនៅតែស្មុគស្មាញ។' },
  { date: '២០២៤–២០២៥', color: 'bg-rose-500', title: 'ភាពតានតឹងថ្មី និងជម្លោះព្រំដែន ២ជុំ', text: 'ការប៉ះទង្គិចខែកក្កដា (៥ថ្ងៃ) និងខែធ្នូ ២០២៥ (៣សប្តាហ៍) — ស្លាប់ជិត ១៥០ នាក់ ជនផ្លាស់ទី ~១ លាននាក់ ។ បទឈប់បាញ់ចុងក្រោយនៅថ្ងៃទី ២៧ ធ្នូ ២០២៥ ។' },
  { date: '២០២៦', color: 'bg-blue-600', title: 'ពីដី ទៅសមុទ្រ (OCA)', text: 'ខែឧសភា ២០២៦ ថៃលុបចោល MoU ២០០១ ស្តីពីតំបន់ជជែកទាមទារសមុទ្រ (OCA); ខែមិថុនា កម្ពុជាលើករឿងទៅកំរៀង UNCLOS; ខែកញ្ញា ប្រជុំជាលើកដំបូងនៅសិង្ហបុរី (សូមមើលផ្នែកស្ថានភាព ២០២៦) ។' },
]
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ១</span>
    <h2 class="page-title mb-8">មរតកនៃការឈឺចាប់ & ផែនទីអាណានិគម</h2>

    <div class="card card-pad prose-kh mb-8">
      <div class="section-head">
        <span class="num-badge">១.១</span>
        <h3 class="section-title">របួសប្រវត្តិសាស្ត្រ៖ បន្ទាយលង្វែក (The Trauma of Longvek)</h3>
      </div>
      <p>
        ចំណុចចាប់ផ្តើមនៃ "យុគងងឹត" គឺការដួលរលំនៃរាជធានីលង្វែកនៅខែមករា ឆ្នាំ ១៥៩៤ ក្រោមស្នាដៃស្តេចសៀម ព្រះបាទនរេនសូរ (Naresuan)។
        នេះមិនមែនគ្រាន់តែជាការបរាជ័យយោធាទេ តែជាការបាត់បង់ព្រលឹងជាតិ។ <Cite :ids="[20]" />
      </p>

      <div class="callout callout-brand my-4">
        <h4 class="font-bold mb-2" :class="isDark ? 'text-amber-300' : 'text-accent'">💡 រឿងព្រេង ព្រះគោ ព្រះកែវ</h4>
        <p class="text-sm mb-0">
          ខ្មែរជឿថាសៀមបាន "លួច" បដិមាករព្រះគោ និងព្រះកែវ ដែលក្នុងពោះមានផ្ទុកក្បួនខ្នាត និងគម្ពីរដីកា។
          និទានកថានេះពន្យល់ពីមូលហេតុដែលខ្មែរចុះខ្សោយ និងសៀមរីកចម្រើន ដោយចោទថាថៃបាន "លួច" បញ្ញាញាណរបស់ខ្មែរ។
          ដូចគ្នានេះដែរ រឿងព្រេងស្តេចសៀមបាញ់ប្រាក់ដួងចូលរបងឫស្សី ក៏ជានិមិត្តរូបនៃការបែកបាក់ផ្ទៃក្នុង។
        </p>
      </div>

      <div class="section-head mt-8">
        <span class="num-badge">១.២</span>
        <h3 class="section-title">ទស្សនៈផ្ទុយគ្នា៖ "ទឹកដីដែលបាត់បង់"</h3>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div class="card-tint p-4 !rounded-xl">
          <strong>🇰🇭 ទស្សនៈកម្ពុជា</strong>
          <p class="text-sm mt-2" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ប្រវត្តិសាស្ត្រក្រោយអង្គរ គឺជាការបាត់បង់ទឹកដី (បាត់ដំបង, សៀមរាប, សុរិន្ទ) ទៅឱ្យប្រទេសជិតខាងដោយអយុត្តិធម៌។</p>
        </div>
        <div class="card-tint p-4 !rounded-xl">
          <strong>🇹🇭 ទស្សនៈថៃ</strong>
          <p class="text-sm mt-2" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ពួកគេរៀនថាបានបាត់បង់ "Lost Territories" (កម្ពុជា និងឡាវ) ទៅឱ្យបារាំង ដើម្បីរក្សាឯករាជ្យភាពរបស់ខ្លួន។</p>
        </div>
      </div>

      <div class="section-head mt-8">
        <span class="num-badge">១.៣</span>
        <h3 class="section-title">បញ្ហាផែនទី និងសន្ធិសញ្ញា ១៩០៤/១៩០៧</h3>
      </div>
      <p>ជម្លោះព្រះវិហារកើតចេញពីភាពមិនច្បាស់លាស់រវាង៖</p>
      <ul class="list-disc ml-5 space-y-2">
        <li><strong>សន្ធិសញ្ញា ១៩០៤៖</strong> កំណត់ព្រំដែនតាម "ខ្សែបែងចែកទឹក" (Watershed Line) ដែលនឹងធ្វើឱ្យប្រាសាទស្ថិតនៅដីថៃ។</li>
        <li><strong>ផែនទីឧបសម្ព័ន្ធ ១ (១៩០៧)៖</strong> បារាំងគូសឱ្យប្រាសាទស្ថិតនៅដីខ្មែរ។ សៀមមិនបានតវ៉ាទេនៅពេលនោះ។</li>
        <li><strong>សាលក្រម ICJ ១៩៦២៖</strong> សម្រេចថាប្រាសាទជារបស់ខ្មែរ ដោយផ្អែកលើការទទួលស្គាល់ដោយស្ងៀមស្ងាត់ (Acquiescence) របស់ថៃ។ ប៉ុន្តែបញ្ហាដី ៤.៦ គីឡូម៉ែត្រក្រឡា នៅតែមិនដាច់ស្រេច។ <Cite :ids="[21]" /></li>
      </ul>
      <div class="callout callout-brand my-4">
        <h4 class="font-bold mb-2" :class="isDark ? 'text-amber-300' : 'text-accent'">🌊 តំណភ្ជាប់ទៅកាន់ជម្លោះសមុទ្រសព្វថ្ងៃ</h4>
        <p class="text-sm mb-0 leading-relaxed">
          សន្ធិសញ្ញា ១៩០៤/១៩០៧ កំណត់តែព្រំដីប៉ុណ្ណោះ មិនបានគូសបន្ទាត់ព្រំសមុទ្រទេ។ ដោយសារតែរឿងនេះ ប្រទេសទាំងពីរបានយកចំណុច
          មួយនៅលើដីមកគូសបន្ទាត់ទាមទារសមុទ្ររៀងៗខ្លួន នាំឱ្យមាន "តំបន់ជជែកទាមទារ" (Overlapping Claims Area – OCA)
          ទំហំ ~២៦,០០០ km² ក្នុងឈូងសមុទ្រថៃ ដែលស្ថិតនៅក្រោមទឹកសំបូរប្រេង និងឧស្ម័នធម្មជាតិ មានតម្លៃ ~៣០០ ពាន់លានដុល្លារ ។ <Cite :ids="[35, 44]" />
        </p>
      </div>
    </div>

    <div class="card card-pad mb-8">
      <div class="section-head mb-6">
        <span class="num-badge">១.៤</span>
        <h3 class="section-title">កាលប្បវត្តិពេញលេញពីអង្គរ ដល់សព្វថ្ងៃ</h3>
      </div>
      <ul class="timeline">
        <li v-for="(t, i) in timeline" :key="i" class="timeline-item">
          <span class="timeline-dot" :class="t.color"></span>
          <strong class="text-primary">{{ t.date }}:</strong>
          <strong class="font-bold" :class="isDark ? 'text-gray-100' : 'text-gray-800'"> {{ t.title }}</strong>
          <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ t.text }}</p>
        </li>
      </ul>
    </div>

    <div class="flex flex-wrap gap-3 items-center mt-2">
      <button @click="nav('culture')" class="btn btn-primary">សង្គ្រាមវប្បធម៌ →</button>
      <button @click="nav('intro')" class="btn btn-ghost">← ទំព័រដើម</button>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import Cite from '../components/Cite.vue'
import { impact2025Chart } from '../data/charts'
import { isDark } from '../theme'

const nav = inject('nav')

const events = [
  { date: 'ឧសភា ២០២៥', color: 'bg-rose-500', text: 'ទាហានកម្ពុជា ១ នាក់ស្លាប់ ក្នុងការបាញ់ប្រហារតាមព្រំដែនដ៏កម្រ — លើកដំបូងដែលមានការស្លាប់តាំងពី ២០១១ ។' },
  { date: 'មិថុនា ២០២៥', color: 'bg-amber-500', text: 'កម្ពុជាលើករឿងទៅតុលាការ ICJ (១៥ មិថុនា); ថៃបិទច្រកព្រំដែនទាំងអស់ (២៣ មិថុនា) ។' },
  { date: 'កក្កដា ២៣', color: 'bg-rose-500', text: 'ទាហានថៃរងរបួសធ្ងន់ ដោយជាន់គ្រាប់មីនតាមព្រំដែន → កម្រិតភាពតានតឹងកើនខ្លាំង ។' },
  { date: 'កក្កដា ២៤–២៨', color: 'bg-rose-500', text: 'ការប៉ះទង្គិចលើកទី១ អូសបន្លាយ ៥ ថ្ងៃលើព្រំដែន ~៨០០ គ.ម។ ថៃប្រើយន្តហោះ F-16 និងកាំភ្លើងធំ; កម្ពុជាបាញ់រ៉ុក្កែត BM-21 ។ អ្នកស្លាប់ជាង ៤៨ នាក់ ។' },
  { date: 'កក្កដា ២៨', color: 'bg-emerald-500', text: 'បទឈប់បាញ់នៅពូត្រាចាយ៉ា (ម៉ាឡេស៊ី) សម្របសម្រួលដោយលោក Trump។ ថៃឃុំទាហានកម្ពុជា ១៨ នាក់ ។' },
  { date: 'កញ្ញា ២០២៥', color: 'bg-amber-500', text: 'តុលាការធម្មនុញ្ញថៃដកលោកស្រី Paetongtarn; លោក Anutin Charnvirakul ឡើងជានាយករដ្ឋមន្ត្រី (៧ កញ្ញា) — បន្ទាប់មកប្រើបញ្ហានេះសម្រាប់ការបោះឆ្នោតរបស់គាត់ ។' },
  { date: 'តុលា ២០២៥', color: 'bg-emerald-500', text: 'សេចក្តីថ្លែងការណ៍សន្តិភាពរួម ចុះហត្ថលេខានៅកិច្ចប្រជុំកំពូល ASEAN ទីក្រុងកូឡាឡាំពួ ។' },
  { date: 'ធ្នូ ៧–២៧', color: 'bg-rose-500', text: 'ការប៉ះទង្គិចលើកទី២ អូសបន្លាយ ៣ សប្តាហ៍ ធ្ងន់ធ្ងរជាងលើកមុន។ ថៃបើក "ប្រតិបត្តិការ Sattawat" ដណ្តើមយកតំបន់ An Ses និងប្រាសាទតាក្របីក្នុងខេត្តព្រះវិហារ ។' },
  { date: 'ធ្នូ ២៧', color: 'bg-emerald-500', text: 'បទឈប់បាញ់ថ្មីចូលជាធរមាន ជាមួយរយៈពេលឃ្លាំមើល ៧២ ម៉ោង ។' },
  { date: 'ធ្នូ ៣១', color: 'bg-emerald-500', text: 'ថៃដោះលែងទាហានខ្មែរ ១៨ នាក់ ដែលបានឃុំតាំងពីខែកក្កដា ។' },
]

const stats = [
  { stat: '~១៥០', label: 'មនុស្សស្លាប់សរុប ២០២៥ (ជិត ១៥០ នាក់)' },
  { stat: '~១ លាន', label: 'ជនផ្លាស់ទីលំនៅ សរុបសងខាង' },
  { stat: '១៨,៦៩៦', label: 'ជនខ្មែរនៅមិនទាន់អាចវិលត្រឡប់ផ្ទះវិញ (កញ្ញា ២០២៦)' },
  { stat: '៥៦២', label: 'ចំណុចខូចខាតលើប្រាសាទព្រះវិហារ (របាយការណ៍ UNESCO)' },
]
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ៣</span>
    <h2 class="page-title mb-8">សង្គ្រាមព្រំដែន ២០២៥៖ <span class="text-red-600 dark:text-red-400">ការប៉ះទង្គិច ២ ជុំ</span></h2>

    <div class="callout callout-danger p-5 rounded-2xl mb-8">
      <div class="flex items-start gap-3">
        <span class="text-2xl shrink-0">⚠️</span>
        <div>
          <h3 class="font-bold text-red-700 dark:text-red-300 mb-1.5 text-lg">ជម្លោះដ៏ធ្ងន់ធ្ងរបំផុត ក្នុងមួយទសវត្សរ៍</h3>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            ក្នុងឆ្នាំ ២០២៥ ប្រទេសទាំងពីរបានប៉ះទង្គិចគ្នាដោយប្រដាប់អាវុធធ្ងន់ធ្ងរចំនួន ២ លើក (កក្កដា ៥ ថ្ងៃ និង ធ្នូ ៣ សប្តាហ៍) តាមព្រំដែនគោក ~៨០០ គ.ម។
            មូលហេតុដើមគឺ ជម្លោះទឹកដីប្រវត្តិសាស្ត្រ (តំបន់ប្រាសាទព្រះវិហារ ៤.៦ km², ប្រាសាទតាក្របី, តាមាន់ថ្ម...) រួមជាមួយនយោបាយក្នុងស្រុករបស់ភាគីទាំងពីរ ។
            នៅចុងឆ្នាំ ថៃក៏បានដាក់ស្លាក "War on Scammers" ទៅលើជម្លោះ ដោយលើកយកកណ្តាលឆបោកនៅប៉ោយប៉ែត និងអូស្មាច់ មកធ្វើជាលេសសម្រាប់ការវាយប្រហារដោយយន្តហោះដ្រូន និងទាក់ទាញសន្លឹកឆ្នោត — ប៉ុន្តែសមរភូមិពិតប្រាកដនៅតែជាតំបន់ព្រំដែនដែលមានជម្លោះ ។ <Cite :ids="[41, 42, 44, 45]" />
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
          <p><strong>🇹🇭 យុទ្ធសាស្ត្រថៃ៖</strong> ប្រកាសថាវាយប្រហារ "កងទ័ពឆបោក" (Scam Army) ដើម្បីបញ្ជៀសការរិះគន់នៅក្នុងស្រុក ខណៈរដ្ឋាភិបាល Anutin ប្រើជម្លោះនេះសម្រាប់ការបោះឆ្នោត ។</p>
          <p><strong>🇰🇭 ការឆ្លើយតបកម្ពុជា៖</strong> ចាត់ទុកជាការរំលោភអធិបតេយ្យភាពធ្ងន់ធ្ងរ។ លោក ហ៊ុន សែន លេចធ្លាយការសន្ទនាតាមទូរស័ព្ទជាមួយនាយករដ្ឋមន្ត្រីថៃ; លោក ហ៊ុន ម៉ាណែត បង្ហាញជំហរម៉ឺងម៉ាត់ដើម្បីពង្រឹងជំហរជាមួយមេទ័ព និងអ្នកជាតិនិយម ។</p>
          <p><strong>🌍 កត្តាអន្តរជាតិ៖</strong> UN, ASEAN, អាមេរិក (Trump) និងចិន ចូលរួមសម្របសម្រួល។ ការគំរាមកំហែងពន្ធរបស់ Trump បានជួយបង្ខំឲ្យសងខាងឈប់បាញ់ ។ <Cite :ids="[41, 44]" /></p>
        </div>
        <div class="mt-5 pt-4 border-t" :class="isDark ? 'border-gray-700' : 'border-gray-100'">
          <p class="text-sm font-bold mb-3" :class="isDark ? 'text-gray-300' : 'text-gray-700'">ផលប៉ះពាល់តាមវិស័យ</p>
          <div class="chart-wrapper" style="height: 190px">
            <ChartJs id="impact2025" :config="impact2025Chart" />
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="s in stats" :key="s.stat" class="stat-card">
        <p class="stat-value text-red-600 dark:text-red-400">{{ s.stat }}</p>
        <p class="stat-label">{{ s.label }}</p>
      </div>
    </div>

    <div class="callout callout-brand p-5 rounded-2xl mb-8">
      <div class="flex items-start gap-3">
        <span class="text-2xl shrink-0">🕊️</span>
        <div>
          <h4 class="font-bold mb-1.5" :class="isDark ? 'text-amber-300' : 'text-accent'">ក្រោយបទឈប់បាញ់ ២៧ ធ្នូ ២០២៥</h4>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
            បទឈប់បាញ់នៅតែទន់ខ្សោយ៖ កងទ័ពថៃនៅបន្តកាន់កាប់តំបន់ខ្លះក្នុងដែនដីកម្ពុជា (ដូចជា An Ses, ប្រាសាទតាក្របី) ឯកម្ពុជាអះអាងថា អ្នកភូមិ និងគ្រួសាររាប់ពាន់គ្រួសារនៅតែមិនអាចវិលត្រឡប់ផ្ទះបាន ។
            ការងារបង្គោលព្រំដែន (JBC) ត្រូវបានសងខាងសន្យាឲ្យចាប់ផ្តើមវិញ ប៉ុន្តែមិនមានការរីកចម្រើនច្បាស់លាស់ទេ ។ <Cite :ids="[39, 40, 43]" />
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-wrap gap-3">
      <button @click="nav('status2026')" class="btn btn-danger">ស្ថានភាព ២០២៦៖ វិបត្តិសមុទ្រ →</button>
      <button @click="nav('economy')" class="btn btn-emerald">សេដ្ឋកិច្ច & ជីវិត →</button>
      <button @click="nav('culture')" class="btn btn-ghost">← សង្គ្រាមវប្បធម៌</button>
    </div>
  </div>
</template>
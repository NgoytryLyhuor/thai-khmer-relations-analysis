<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import Cite from '../components/Cite.vue'
import { isDark } from '../theme'
import { forecastChart } from '../data/charts'

const nav = inject('nav')

const years = [
  {
    year: '២០២៧',
    tag: 'ការងើបឡើងវិញ',
    tone: 'border-t-amber-400 text-amber-700 dark:text-amber-300',
    badge: 'bg-amber-500/15 text-amber-700 dark:text-amber-300',
    points: [
      'World Bank ព្យាករកំណើន 4.9% (ADB 4.7–5.0%, រដ្ឋាភិបាល 5.0%) នៅពេលពាណិជ្ជកម្ម ទេសចរណ៍ និង FDI ងើបឡើងវិញ ។',
      'អតិផរណាធ្លាក់មក ~2.5% បន្ទាប់ពីកំពូល ២០២៦ ។',
      'ការបិទព្រំដែនជាមួយថៃ នៅតែដកកំណើន ~១ភាគរយ/ឆ្នាំ រហូតដល់ ២០៣០ ។',
    ],
    cites: [24, 25, 29],
  },
  {
    year: '២០២៨',
    tag: 'បន្តពង្រឹង',
    tone: 'border-t-emerald-500 text-emerald-700 dark:text-emerald-300',
    badge: 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300',
    points: [
      'World Bank baseline កើនដល់ 5.1% ដោយសារទេសចរណ៍ស្ទុះងើបឡើងវិញកាន់តែពេញលេញ ។',
      'រោងចក្រថ្មីចាប់ផលិតកម្ម (អេឡិចត្រូនិក, សំបកកង់, គ្រឿងសង្ហារឹម) ។',
      'ព្រលានយន្តហោះអន្តរជាតិថ្មីភ្នំពេញ បើកសេវាកម្ម ជំរុញតភ្ជាប់ខ្សែសង្វាក់ផ្គត់ផ្គង់ ។',
    ],
    cites: [25, 31],
  },
  {
    year: '២០២៩',
    tag: 'ឆ្នាំសាកល្បងធំបំផុត',
    tone: 'border-t-red-500 text-red-700 dark:text-red-300',
    badge: 'bg-red-500/15 text-red-700 dark:text-red-300',
    points: [
      'កម្ពុជាចាកចេញពីក្រុម LDC នៅថ្ងៃទី ១៩ ធ្នូ ២០២៩ ។',
      'រដ្ឋាភិបាលកំណត់គោលដៅកំណើន ~5.5% ជាមធ្យម ២០២៨–២០២៩ ។',
      'ការបាត់បង់អត្ថប្រយោជន៍ពន្ធ (EBA/GSP+ 0% → GSP 8.8%) នឹងសាកល្បងការប្រកួតប្រជែងនាំចេញ ។',
    ],
    cites: [27, 28, 29, 30],
  },
]

const ldcPoints = [
  {
    title: 'ពន្ធនាំចេញទៅសហភាពអឺរ៉ុប/កាណាដា',
    text: 'ពី 0% (GSP+/EBA) ឡើងទៅ ~8.8% (GSP ស្តង់ដារ) ឬ ~11.5% (MFN) — សំលៀកបំពាក់ ~16.4% ។ EU + កាណាដា = ~29.4% នៃការនាំចេញទាំងអស់ ។',
    cites: [27],
  },
  {
    title: 'ច្បាប់ដើមកំណើតទំនិញ',
    text: 'តម្រូវឲ្យមានសមាសភាពក្នុងស្រុក 60% (ជំនួស 30% សម្រាប់ LDC) — កាន់តែពិបាកសម្រាប់រោងចក្រដែលពឹងវត្ថុធាតុដើមនាំចូល ។',
    cites: [27, 28],
  },
  {
    title: 'UNDP ប៉ាន់ស្មានផលប៉ះពាល់',
    text: 'ការចាកចេញនេះអាចធ្វើឲ្យ GDP ធ្លាក់ ~$2,947 លានដុល្លារ ២០២៧–២០៣០ និងការនាំចេញសរុប −2.4% (~$771.8 លាន) បើគ្មានគោលនយោបាយតបត្រ ។',
    cites: [27],
  },
  {
    title: 'បន្ទាប់ពីចាកចេញ',
    text: 'អាជីវកម្មផ្លាស់ទៅកិច្ចព្រមព្រៀងពាណិជ្ជកម្មទ្វេភាគី (ដូចជាជាមួយ EU ដែលកំពុងចរចា) និងធ្វើពិពិធកម្មទីផ្សារ ។',
    cites: [30],
  },
]

const drivers = [
  { icon: '💵', title: 'FDI ២០២៥ វិនិយោគផ្ទាល់', text: '$5.1 ពាន់លាន (+15% y/y, ~១០.១% នៃ GDP) បង្កើត ~400,000 កន្លែងការងារ ជំរុញការងើបឡើងវិញ ២០២៧–២០២៨ ។', cites: [26, 33] },
  { icon: '🏭', title: 'ពិពិធកម្មរោងចក្រ', text: 'អេឡិចត្រូនិក សំបកកង់ គ្រឿងសង្ហារឹម — ការអនុម័តវិនិយោគថេរ +45% ក្នុង ២០២៥ ។', cites: [24, 30] },
  { icon: '✈️', title: 'ទេសចរណ៍ & អាកាសចរណ៍', text: 'ទេសចរណ៍ស្ទុះងើប និងព្រលានយន្តហោះអន្តរជាតិថ្មីភ្នំពេញ ។', cites: [24, 25] },
  { icon: '📦', title: 'ការនាំចេញ', text: 'ទំនិញនាំចេញ +17.7% (Q1 2026) — សញ្ញាល្អសម្រាប់ពាណិជ្ជកម្មមុនឆ្នាំ ២០២៩ ។', cites: [26] },
]

const risks = [
  { icon: '🛡️', title: 'ព្រំដែន & កម្មករវិលត្រលប់', text: 'កម្មករ ~១លាននាក់វិលត្រឡប់ សម្ពាធលើទីផ្សារការងារក្នុងស្រុក ។', cites: [26] },
  { icon: '⛽', title: 'ថាមពល & អតិផរណា', text: 'អតិផរណា 5.8% មេសា ២០២៦; ប្រេងឡើង 10% → ភាពក្រីក្រ +1.4pp ។', cites: [26] },
  { icon: '🏠', title: 'អចលនទ្រព្យ & NPL', text: 'Supply overhang និងបំណុលមិនដំណើរការលើស 8% ។', cites: [32, 34] },
  { icon: '🧵', title: 'ពន្ធគយអាមេរិក', text: 'ពន្ធ ~19–39% លើកាត់ដេរ បង្រ្កាបការបញ្ជាទិញ ២០២៧–២០២៨ ។', cites: [1, 2] },
  { icon: '🌐', title: 'ការបាត់បង់អត្ថប្រយោជន៍ LDC', text: 'ផលិតភាព +0.8%/ឆ្នាំ ទល់នឹងត្រូវការ ~2% — គម្លាតប្រកួតប្រជែង ។', cites: [27, 31] },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="card-dark card-pad rounded-3xl mb-8 overflow-hidden relative">
      <div class="absolute -top-24 -right-16 w-72 h-72 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -left-16 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none"></div>

      <div class="relative">
        <span class="chip !text-amber-300 !border-amber-300/30 !bg-amber-300/10 mb-4">📈 ផ្នែកថ្មី · ការព្យាករពី World Bank · ADB · IMF · រដ្ឋាភិបាល</span>
        <h1 class="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
          ទស្សនវិស័យសេដ្ឋកិច្ចកម្ពុជា<br class="hidden md:block" />
          <span class="text-amber-300">២០២៧ – ២០២៩</span>
        </h1>
        <p class="text-white/80 max-w-3xl text-base md:text-lg leading-relaxed">
          បន្ទាប់ពីការធ្លាក់ចុះឆ្នាំ ២០២៦ (~៣.០–៤.២%), អ្នកជំនាញមើលឃើញការងើបឡើងវិញនៅ ២០២៧–២០២៨
          មុនការសាកល្បងធំបំផុតគឺ <strong class="text-white">ការចាកចេញពីប្រទេសអភិវឌ្ឍន៍តិចតួច (LDC) ថ្ងៃទី ១៩ ធ្នូ ២០២៩</strong> ។ <Cite :ids="[24, 25, 26, 28]" />
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <button @click="nav('economy')" class="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">← សេដ្ឋកិច្ច & ជីវិត</button>
          <button @click="nav('references')" class="btn bg-amber-400 text-neutral-900 hover:bg-amber-300">ប្រភពទិន្នន័យ</button>
        </div>
      </div>
    </div>

    <!-- Forecast chart -->
    <div class="card card-pad mb-8">
      <div class="chart-card-header">
        <div>
          <h2 class="section-title !text-xl md:!text-2xl">កំណើនសេដ្ឋកិច្ច៖ ពិត vs ការព្យាករ</h2>
          <p class="text-sm mt-1" :class="isDark ? 'text-gray-400' : 'text-gray-500'">គិតជា % · ២០២៦–២០២៩ ជាការព្យាករ</p>
        </div>
        <span class="chip hidden md:inline-flex">World Bank / ADB / IMF / Govt</span>
      </div>
      <div class="chart-wrapper">
        <ChartJs id="forecast" :config="forecastChart" />
      </div>
      <p class="text-xs mt-3" :class="isDark ? 'text-gray-400' : 'text-gray-500'">
        ២០២៤–២០២៥ = តួលេខពិតប្រហារ <Cite :ids="[1]" /> ;
        ២០២៦ = World Bank 3.9% / ADB 4.1% <Cite :ids="[24, 25]" /> ;
        ២០២៧ = World Bank 4.9% / ADB 4.7% <Cite :ids="[24, 25]" /> ;
        ២០២៨ = World Bank 5.1% <Cite :ids="[25]" /> ;
        ២០២៩ = គោលដៅរដ្ឋាភិបាល ~5.5% <Cite :ids="[29]" /> ។
      </p>
    </div>

    <!-- Year cards -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
      <div v-for="y in years" :key="y.year" class="card card-pad card-hover !rounded-2xl border-t-4" :class="y.tone">
        <div class="flex items-center justify-between mb-3">
          <span class="font-header font-bold text-3xl">{{ y.year }}</span>
          <span class="chip" :class="y.badge">{{ y.tag }}</span>
        </div>
        <ul class="space-y-2.5 text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-600'">
          <li v-for="(p, i) in y.points" :key="i" class="flex gap-2">
            <span class="mt-0.5 text-xs">▸</span>
            <span>{{ p }} <Cite :ids="y.cites" /></span>
          </li>
        </ul>
      </div>
    </div>

    <!-- LDC deep dive -->
    <div class="callout callout-danger p-6 rounded-2xl mb-8">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl">🛂</span>
        <h2 class="section-title !text-xl md:!text-2xl">ការចាកចេញពី LDC នៅ ២០២៩ ផ្លាស់ប្តូរអ្វីខ្លះ?</h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="(p, i) in ldcPoints" :key="i" class="bg-white/70 dark:bg-white/5 rounded-xl p-4">
          <h4 class="font-bold text-sm mb-1.5" :class="isDark ? 'text-red-200' : 'text-red-800'">{{ p.title }}</h4>
          <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ p.text }} <Cite :ids="p.cites" /></p>
        </div>
      </div>
    </div>

    <!-- Drivers & risks -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">
      <div class="card card-pad">
        <h2 class="section-title !text-xl mb-4 inline-flex items-center gap-2">📈 កត្តាជំរុញការងើបឡើងវិញ</h2>
        <div class="space-y-3">
          <div v-for="d in drivers" :key="d.title" class="flex gap-3 items-start p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-white/5 transition">
            <span class="text-xl shrink-0">{{ d.icon }}</span>
            <div>
              <h4 class="font-bold text-sm">{{ d.title }}</h4>
              <p class="text-sm leading-relaxed mt-0.5" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ d.text }} <Cite :ids="d.cites" /></p>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-pad">
        <h2 class="section-title !text-xl mb-4 inline-flex items-center gap-2">⚠️ ហានិភ័យចម្បង</h2>
        <div class="space-y-3">
          <div v-for="r in risks" :key="r.title" class="flex gap-3 items-start p-3 rounded-xl hover:bg-red-50/50 dark:hover:bg-red-500/5 transition">
            <span class="text-xl shrink-0">{{ r.icon }}</span>
            <div>
              <h4 class="font-bold text-sm" :class="isDark ? 'text-red-200' : 'text-red-700'">{{ r.title }}</h4>
              <p class="text-sm leading-relaxed mt-0.5" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ r.text }} <Cite :ids="r.cites" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Strategy -->
    <div class="card-dark card-pad rounded-2xl mb-8 overflow-hidden relative">
      <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-amber-300/10 blur-3xl pointer-events-none"></div>
      <h2 class="section-title !text-white mb-4 inline-flex items-center gap-2">🧭 ទិសដៅយុទ្ធសាស្ត្រ & Vision 2050</h2>
      <p class="text-white/85 leading-relaxed text-sm md:text-base">
        កម្ពុជាមាន "បង្អួចឱកាសបច្ចុប្បន្នភាពប្រជាជន" (working-age share កំពូល ~២០៤៣) និងកងកម្លាំងពលកម្មធំជាងបច្ចុប្បន្ន ~៣.៧ លាននាក់នៅឆ្នាំ ២០៥០ ។
        ប៉ុន្តែការសម្រេចបាន <strong class="text-amber-300">ចំណូលខ្ពស់ (Vision 2050)</strong> ត្រូវការកំណើន ~<strong class="text-amber-300">7% រៀងរាល់ឆ្នាំ គ្រប់២០ឆ្នាំ</strong> —
        ខណៈពេលផលិតភាពបច្ចុប្បន្នរីកចម្រើនត្រឹម ~0.8%/ឆ្នាំ គឺខ្វះល្បឿនយ៉ាងច្រើន ។ <Cite :ids="[24, 31, 32]" />
      </p>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-3 mt-6">
        <div v-for="(p, i) in [
          { n: '1', t: 'កសាងមូលធនមនុស្ស', d: 'អប់រំជំនាញ ផ្គូផ្គងទីផ្សារការងារ' },
          { n: '2', t: 'បង្កើនការប្រកួតប្រជែង', d: 'កាត់បន្ថយថ្លៃថាមពល និងកំណែទម្រង់' },
          { n: '3', t: 'ផ្លាស់ប្តូរ LDC រលូន', d: 'កិច្ចព្រមព្រៀងថ្មី ពិពិធកម្មទីផ្សារ' },
          { n: '4', t: 'រក្សាស្ថិរភាពម៉ាក្រូ', d: 'គ្រប់គ្រងបំណុល និង NPL' },
        ]" :key="p.n" class="bg-white/5 border border-white/10 rounded-xl p-4">
          <span class="text-2xl font-header font-bold text-amber-300">{{ p.n }}</span>
          <h5 class="font-bold text-sm text-white mt-1.5">{{ p.t }}</h5>
          <p class="text-xs text-white/60 mt-1">{{ p.d }}</p>
        </div>
      </div>
      <p class="text-xs text-white/50 mt-6">អាទិភាពចេញពី World Bank CPF & យុទ្ធសាស្ត្របញ្ចកោណ ។ <Cite :ids="[26, 30, 34]" /></p>
    </div>

    <div class="flex flex-wrap gap-4">
      <button @click="nav('references')" class="btn btn-primary">មើលឯកសារយោងទាំងអស់</button>
      <button @click="nav('economy')" class="btn btn-ghost">← ត្រឡប់ទៅសេដ្ឋកិច្ច & ជីវិត</button>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import Cite from '../components/Cite.vue'
import { isDark } from '../theme'

const nav = inject('nav')

const maritime = [
  { stat: '~២៦,០០០ km²', label: 'តំបន់ជជែកទាមទារ (OCA) ក្នុងឈូងសមុទ្រថៃ' },
  { stat: '~$៣០០ ពាន់លាន', label: 'តម្លៃប្រេង & ឧស្ម័នធម្មជាតិក្រោមទឹក' },
  { stat: '២០០១', label: 'ឆ្នាំដែល MoU 44 ត្រូវបានចុះហត្ថលេខា' },
  { stat: '១ ឆ្នាំ', label: 'រយៈពេលប្រហាក់ប្រហែលសម្រាប់ដំណើរការ UNCLOS' },
]

const timeline2026 = [
  { date: 'ឧសភា ២០២៦', color: 'bg-rose-500', text: 'ថៃក្រោមលោក Anutin លុបចោល MoU 44 (២០០១) ម្ខាងៗ ដោយលើកហេតុផលថា "រយៈពេល ២៥ ឆ្នាំមិនមានការរីកចម្រើន" — ក្នុងភាពតានតឹងដោយសារជម្លោះព្រំដែន។' },
  { date: 'មិថុនា ២០២៦', color: 'bg-amber-500', text: 'កម្ពុជាលើករឿងមកដំណើរការ "compulsory conciliation" ក្រោម UNCLOS ដើម្បី "ការពារអធិបតេយ្យភាព និងសិទ្ធិសមុទ្រ" តាមច្បាប់អន្តរជាតិ។' },
  { date: 'កញ្ញា ១៤–១៦ ២០២៦', color: 'bg-blue-600', text: 'កិច្ចប្រជុំជាលើកដំបូងនៅសិង្ហបុរី (នៅ Permanent Court of Arbitration) ។ រដ្ឋមន្ត្រីការបរទេសទាំងពីរថ្លែងសុន្ទរកថាដ៏តឹងតែង។' },
  { date: '~១ ឆ្នាំក្រោយ', color: 'bg-emerald-500', text: 'ការផ្តល់អនុសាសន៍របស់គណៈកម្មការ ទំនងចេញក្នុងរយៈពេល ~១ ឆ្នាំ — ប៉ុន្តែមិនមែនជាសេចក្តីសម្រេចជាកាតព្វកិច្ចទេ។' },
]

const claims = [
  {
    side: 'ការចោទប្រកាន់របស់កម្ពុជា 🇰🇭',
    points: [
      'ថៃ "លុបចោលម្ខាងៗ" កិច្ចព្រមព្រៀង ដោយគ្មានការយល់ព្រមពីកម្ពុជា — មិនសមរម្យ ។',
      'UNESCO បញ្ជាក់ថា ប្រាសាទព្រះវិហារត្រូវបានបំផ្លាញយ៉ាងធ្ងន់ធ្ងរ ក្នុងការបាញ់ផ្លោងរបស់ភាគីថៃ — ចំណុចខូចខាត ៥៦២ ។',
      'គ្រួសាររាប់ពាន់គ្រួសារ នៅតែមិនអាចត្រឡប់ទៅផ្ទះវិញបាន ព្រោះកងទ័ពថៃកាន់កាប់ភូមិ ។',
      'បទឈប់បាញ់មិនមែនជា "សិទ្ធិកាន់កាប់" ដីនោះទេ — "A ceasefire is not a title deed to territory" ។',
    ],
    cites: [35, 36, 38, 39, 40],
  },
  {
    side: 'ការចោទប្រកាន់របស់ថៃ 🇹🇭',
    points: [
      'កម្ពុជាកំពុង "សម្តែងជាអ្នករងគ្រោះ" (playing the victim) និងបំភ្លៃការពិត ដើម្បីដណ្តើមចំណុចខាងសីលធម៌ ។',
      'MoU ត្រូវបានលុប ព្រោះរយៈពេល ២៥ ឆ្នាំ ប្រទេសទាំងពីរធ្វើកិច្ចចរចាផ្លូវការត្រឹមតែ ២ ដងប៉ុណ្ណោះ ។',
      'កម្ពុជា ដាក់ទាហាននិងអាវុធនៅប្រាសាទព្រះវិហារ រំលោភច្បាប់ការពារបេតិកភណ្ឌ ។',
      'ដំណើរការនេះមិនគួរពាក់ព័ន្ធនឹងកោះកូតឡើយ — កោះនេះជារបស់ថៃជាក់ស្តែង ។',
    ],
    cites: [35, 36, 37, 38],
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <div class="card-dark card-pad rounded-3xl mb-10 overflow-hidden relative">
      <div class="absolute -top-20 -right-24 w-80 h-80 rounded-full bg-sky-400/10 blur-3xl pointer-events-none"></div>
      <div class="absolute -bottom-32 -left-12 w-72 h-72 rounded-full bg-rose-400/10 blur-3xl pointer-events-none"></div>

      <div class="relative">
        <span class="chip !text-sky-300 !border-sky-300/30 !bg-sky-300/10 mb-4">🌊 បច្ចុប្បន្នភាព · កញ្ញា ២០២៦</span>
        <h1 class="font-header font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
          ពីសមរភូមិលើគោក<br class="hidden md:block" />
          <span class="text-sky-300">ទៅកាន់តុលាការសមុទ្រ</span>
        </h1>
        <p class="text-white/80 max-w-3xl text-base md:text-lg leading-relaxed">
          បន្ទាប់ពីសង្គ្រាមព្រំដែន ២០២៥ ជម្លោះបានផ្លាស់ប្តូរមកតំបន់សមុទ្រ៖ ថៃលុបចោល MoU ២០០១
          ហើយកម្ពុជាលើករឿងទៅដំណើរការកំរៀងក្រោម UNCLOS នៅសិង្ហបុរី ។
          កិច្ចប្រជុំជាលើកដំបូងធ្វើឡើងនៅថ្ងៃទី ១៤–១៦ កញ្ញា ២០២៦ ។ <Cite :ids="[35, 36, 37]" />
        </p>
        <div class="flex flex-wrap gap-3 mt-6">
          <button @click="nav('references')" class="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">ប្រភពទិន្នន័យ</button>
          <button @click="nav('conflict2025')" class="btn bg-sky-400 text-neutral-900 hover:bg-sky-300">← ជម្លោះ ២០២៥</button>
        </div>
      </div>
    </div>

    <!-- Maritime stats -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="m in maritime" :key="m.stat" class="stat-card">
        <p class="stat-value text-blue-600 dark:text-sky-300">{{ m.stat }}</p>
        <p class="stat-label">{{ m.label }}</p>
      </div>
    </div>

    <!-- 6.1 OCA deep dive -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="card card-pad">
        <div class="section-head">
          <span class="num-badge">៦.១</span>
          <h3 class="section-title">តំបន់ជជែកទាមទារសមុទ្រ (OCA)</h3>
        </div>
        <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          "Overlapping Claims Area" ជាតំបន់សមុទ្រទំហំ ~២៦,០០០–២៧,០០០ km² ក្នុងឈូងសមុទ្រថៃ ដែលកម្ពុជា និងថៃ អះអាងទាមទារត្រួតលើគ្នា ។
          តំបន់នេះប៉ាន់ស្មានថាមានឧស្ម័នធម្មជាតិ ~៣៤០ ពាន់លាន m³ និងប្រេងជាច្រើន មានតម្លៃសរុបអាចដល់ ~$៣០០ ពាន់លានដុល្លារ ។
        </p>
        <ul class="list-disc ml-5 mt-3 space-y-2 text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <li>ឫសគល់៖ សន្ធិសញ្ញា ១៩០៧ កំណត់តែព្រំដី មិនបែងចែកព្រំសមុទ្រ ។</li>
          <li>ឆ្នាំ ១៩៧២៖ កម្ពុជាដាក់ការទាមទារធ្នើទ្វីប (continental shelf) ដែលរួមបញ្ចូលផ្នែកមួយនៃ "កោះកូត" (Koh Kut / Koh Kood) ។</li>
          <li>ឆ្នាំ ២០០១៖ MoU 44 ត្រូវបានចុះហត្ថលេខា សម្រាប់ចរចារួមគ្នា និងធ្វើការអភិវឌ្ឍន៍រួម ។</li>
          <li>ឥទ្ធិពលនយោបាយ៖ ការភ័យខ្លាចថា "បាត់កោះកូត" បានធ្វើឲ្យក្រុមជាតិនិយមថៃ តវ៉ាខ្លាំង ។</li>
        </ul>
        <p class="text-sm mt-4" :class="isDark ? 'text-gray-400' : 'text-gray-500'">ប្រភព៖ <Cite :ids="[35, 37]" /></p>
      </div>

      <div class="card card-pad">
        <h3 class="section-title !text-xl mb-5 inline-flex items-center gap-2">🗓️ កាលប្បវត្តិ ២០២៦</h3>
        <ul class="timeline">
          <li v-for="(e, i) in timeline2026" :key="i" class="timeline-item">
            <span class="timeline-dot" :class="e.color"></span>
            <strong class="text-blue-700 dark:text-sky-300">{{ e.date }}:</strong>
            <p class="text-sm mt-0.5" :class="isDark ? 'text-gray-300' : 'text-gray-700'">{{ e.text }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 6.2 What each side wants -->
    <div class="callout callout-brand p-6 rounded-2xl mb-8">
      <div class="flex items-center gap-3 mb-4">
        <span class="text-2xl">⚖️</span>
        <h2 class="section-title !text-xl md:!text-2xl">តម្រូវការរបស់ភាគីនីមួយៗ</h2>
      </div>
      <p class="text-sm leading-relaxed mb-4" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        កម្ពុជាបានដាក់ជម្រើសចំនួន ៣៖ (១) សន្ធិសញ្ញាកំណត់ព្រំសមុទ្រ "តែមួយ" ទាំងស្រុង, (២) កិច្ចព្រមព្រៀងអភិវឌ្ឍន៍រួម និងចែករំលែកធនធានដោយស្មើភាព, ឬ (៣) ស្នើគណៈកម្មការរៀបចំអនុសាសន៍សម្រាប់ការចរចានាពេលអនាគត ។
        ថៃវិញទទូចថា ដំណើរការនេះគួរតែសម្រាប់តែការកំណត់ព្រំសមុទ្រប៉ុណ្ណោះ មិនគួរពាក់ព័ន្ធនឹង "អធិបតេយ្យភាពលើដី" (កោះកូត) ឡើយ ហើយបដិសេធបន្ទាត់ទាមទារឆ្នាំ ១៩៧២ របស់កម្ពុជាថាគ្មានមូលដ្ឋាន ។ <Cite :ids="[35, 36, 37]" />
      </p>
    </div>

    <!-- 6.3 Mutual accusations -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
      <div v-for="(c, i) in claims" :key="c.side" class="card card-pad" :class="i === 1 ? 'border-red-300' : 'border-blue-300'">
        <h4 class="font-bold text-base mb-4" :class="i === 1 ? 'text-red-700 dark:text-red-300' : 'text-blue-700 dark:text-sky-300'">{{ c.side }}</h4>
        <ul class="space-y-3 text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          <li v-for="(p, j) in c.points" :key="j" class="flex gap-2">
            <span class="mt-0.5 text-xs" :class="i === 1 ? 'text-red-500' : 'text-blue-500'">▸</span>
            <span>{{ p }}</span>
          </li>
        </ul>
        <p class="text-sm mt-4" :class="isDark ? 'text-gray-400' : 'text-gray-500'">ប្រភព៖ <Cite :ids="c.cites" /></p>
      </div>
    </div>
    <div class="callout callout-danger p-5 rounded-2xl mb-8">
      <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
        ⚖️ <strong>ការវិនិច្ឆ័យអព្យាក្រឹត៖</strong> គ្មានភាគីណាមួយ "ខុសច្បាស់លាស់" ឡើយ — ទាំងពីរបានប្រព្រឹត្តអំពើដែលភាគីម្ខាងទៀត និងអន្តរជាតិរិះគន់ ។
        UNESCO ចង្អុលទៅការបាញ់ផ្លោងខូចខាតប្រាសាទ ចំណែកថៃចោទកម្ពុជាពីប្រើប្រាស់ប្រាសាទជាទីតាំងយោធា ។
        អ្នកវិភាគភាគច្រើនយល់ថា ការលុប MoU របស់ថៃ និងការលើករឿងរបស់កម្ពុជា ភាគច្រើនកើតចេញពីការគណនានយោបាយក្នុងស្រុកទាំងសងខាង ។ <Cite :ids="[35, 36, 37]" />
      </p>
    </div>

    <!-- 6.4 UNESCO -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      <div class="card card-pad">
        <div class="section-head">
          <span class="num-badge">៦.៤</span>
          <h3 class="section-title">របាយការណ៍ UNESCO អំពីប្រាសាទព្រះវិហារ</h3>
        </div>
        <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          របាយការណ៍ UNESCO (១០០ ទំព័រ) ដែលចងក្រងបន្ទាប់ពីដំណើរការពិនិត្យនៅខែមីនា ២០២៦ រកឃើញចំណុចខូចខាតចំនួន <strong>៥៦២</strong> លើបរិវេណប្រាសាទ ពីជម្លោះទាំងពីរលើក (កក្កដា និងធ្នូ ២០២៥) ។
          ប្រាសាទត្រូវបានវាយប្រហារដោយការបាញ់ផ្លោងធ្ងន់ៗ (heavy shelling) និងគ្រាប់បែកតូចៗ ធ្វើឲ្យ "រាល់ផ្នែកនៃវិមាន" រងការខូចខាត រួមទាំងធ្វើឲ្យច្រាំងថ្មភ្នំ ប្រឈមនឹងគ្រោះដួលរលំ ។
          UNESCO ចាត់ទុកថា ប្រាសាទនេះ "កំពុងរងគ្រោះថ្នាក់ធ្ងន់ធ្ងរ" និងស្នើឱ្យធ្វើការចរចាពហុភាគី ដើម្បីធានាថាលែងមានអំពើអរិភាពនៅកន្លែងនេះទៀត ។ <Cite :ids="[38]" />
        </p>
      </div>
      <div class="card card-pad">
        <div class="section-head">
          <span class="num-badge">៦.៥</span>
          <h3 class="section-title">ស្ថានភាពមនុស្សធម៌ នៅព្រំដែន</h3>
        </div>
        <p class="text-sm leading-relaxed" :class="isDark ? 'text-gray-300' : 'text-gray-700'">
          ទោះព្រមឈប់បាញ់នៅថ្ងៃ ២៧ ធ្នូ ២០២៥ ក៏ដោយ ក្រសួងមហាផ្ទៃកម្ពុជារាយការណ៍ (កញ្ញា ២០២៦) ថា មនុស្ស <strong>១៨,៦៩៦ នាក់</strong> នៅមិនទាន់អាចវិលត្រឡប់ផ្ទះបាន ដោយកងទ័ពថៃកាន់កាប់ភូមិ និងរាំងស្ទះការត្រឡប់ ។
          សាលារៀន <strong>១៥</strong> និងមណ្ឌលសុខភាព <strong>៧</strong> នៅតែបិទដំណើរការ ក្នុងខេត្តឧត្តរមានជ័យ, បន្ទាយមានជ័យ និងព្រះវិហារ ។
          កម្ពុជាបញ្ជាក់ថា បទឈប់បាញ់គ្រាន់តែបង្កកទីតាំងទ័ព ដើម្បីបញ្ឈប់សង្គ្រាម — មិនមែនជាសិទ្ធិស្របច្បាប់លើដែនដីនោះទេ ។ <Cite :ids="[39, 40]" />
        </p>
      </div>
    </div>

    <!-- 6.6 What's next -->
    <div class="card-dark card-pad rounded-2xl mb-8 overflow-hidden relative">
      <div class="absolute -top-20 -left-20 w-64 h-64 rounded-full bg-sky-300/10 blur-3xl pointer-events-none"></div>
      <h2 class="section-title !text-white mb-4 inline-flex items-center gap-2">🧭 តើនឹងទៅជាយ៉ាងណាបន្តទៀត?</h2>
      <p class="text-white/85 leading-relaxed text-sm md:text-base">
        (១) ដំណើរការ UNCLOS មានរយៈពេល ~១ ឆ្នាំ ហើយអនុសាសន៍របស់គណៈកម្មការ <strong class="text-sky-300">មិនមែនជាកាតព្វកិច្ច</strong>ទេ — តែអាចជួយពន្លាតជំហរផ្លូវច្បាប់ និងបង្កើតមូលដ្ឋានសម្រាប់កិច្ចព្រមព្រៀង ។
        (២) សងខាងត្រូវបន្តកិច្ចការគណៈកម្មាធិការព្រំដែនចម្រុះ (JBC) ដើម្បីបង្គោលព្រំដី រួមទាំងការឃ្លាំមើលរបស់ក្រុមអ្នកសង្កេតការណ៍ ASEAN ។
        (៣) សិង្ហបុរីនឹងធ្វើជាប្រធាន ASEAN នៅឆ្នាំ ២០២៧ ដែលអាចជាវេទិកាជួយជំរុញដំណោះស្រាយ ។
        (៤) ហានិភ័យ៖ បើដំណើរការនេះថយចុះ ឬបរាជ័យ ការប៉ះទង្គិចតាមព្រំដែនអាចផ្ទុះឡើងវិញ ។ <Cite :ids="[35, 36, 37]" />
      </p>
      <div class="flex flex-wrap gap-3 mt-6">
        <button @click="nav('analysis')" class="btn bg-sky-400 text-neutral-900 hover:bg-sky-300">វិភាគ & សន្និដ្ឋាន →</button>
        <button @click="nav('conflict2025')" class="btn btn-ghost !text-white !border-white/25 hover:!bg-white/10">← ជម្លោះ ២០២៥</button>
      </div>
    </div>
  </div>
</template>
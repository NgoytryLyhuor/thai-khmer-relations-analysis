<script setup>
import { inject } from 'vue'
import ChartJs from '../components/ChartJs.vue'
import Cite from '../components/Cite.vue'
import { gdpGrowthChart, touristChart, minWageChart, microCreditChart } from '../data/charts'

const nav = inject('nav')

const pillars = [
  {
    emoji: '👕',
    name: 'កាត់ដេរ ស្បែកជើង & អីវ៉ាន់ធ្វើដំណើរ',
    desc: 'អ្នករកចំណូលបរទេសធំបំផុត — មនុស្សជាង 900,000 នាក់ធ្វើការ ក្នុងរោងចក្រ 1,500+ ។ ពឹងផ្អែកខ្លាំងលើទីផ្សារអាមេរិក។',
  },
  {
    emoji: '🏝️',
    name: 'ទេសចរណ៍',
    desc: 'អង្គរវត្ត និងឆ្នេរសមុទ្រ — ចំណូល ~៣.៨៧ ពាន់លាន USD (២០២៥) ប៉ុន្តែភ្ញៀវកំពុងធ្លាក់ខ្លាំង។',
  },
  {
    emoji: '🏗️',
    name: 'សំណង់ & អចលនទ្រព្យ',
    desc: 'ពិបាករកការងារសំណង់កាន់តែខ្លាំង ព្រោះវិស័យនេះកំពុងដួលរលំបន្ទាប់ពីពុំប្រោង។',
  },
  {
    emoji: '🌾',
    name: 'កសិកម្ម',
    desc: 'អ្នកជនបទភាគច្រើនពឹងស្រូវ ដំណាំ និងកសិដ្ឋាន ។ ចំណូលមិនស្ថិតស្ថេរ អាស្រ័យអាកាសធាតុ និងតម្លៃទីផ្សារ។',
  },
]

const costs = [
  { item: 'ផ្ទះជួល (ស្នាក់នៅជិតរោងចក្រ/រាជធានី)', note: 'ចំណាយធំបំផុត កើនឡើងជារៀងរាល់ឆ្នាំ' },
  { item: 'ម្ហូបអាហារ & ទឹកប្រើប្រាស់', note: 'អតិផរណាស្បៀងអាហារកើនឡើង' },
  { item: 'ការដឹកជញ្ជូន (ម៉ូតូ ឬឡានក្រុង)', note: 'តម្លៃប្រេង/LPG ឡើងខ្លាំង' },
  { item: 'ថ្លៃសាលា & សុខភាពកូនៗ', note: 'ម្តាយពលករត្រូវចែករំលែកបន្ទុក' },
  { item: 'បំណុលជាវមុខទំនិញ (ជំពាក់គេ)', note: 'រង្វង់បំណុលឡើងដល់ពាក្យចាស់' },
]

const storyCards = [
  {
    emoji: '👩‍🏭',
    title: 'កម្មការិនីរោងចក្រកាត់ដេរ',
    text: 'បានប្រាក់ឈ្នួលអប្បបរមា $210 ក្នុងមួយខែ (២០២៦) បូកបន្ថែមត្រឹម ~$227–238 ។ ពិបាកចិញ្ចឹមគ្រួសារក្នុងតម្លៃជីវិតបច្ចុប្បន្ន — សហជីពពលករថាប្រាក់ឈ្នួលនៅទាបជាងតម្លៃរស់នៅឆ្ងាយណាស់ ។',
  },
  {
    emoji: '👨‍🌾',
    title: 'កសិករជំពាក់បំណុលមីក្រូហិរញ្ញវត្ថុ',
    text: 'ខ្ចីលុយដើម្បីព្យាបាលជំងឺ ជួសជុលផ្ទះ ឬដាំដំណាំ ។ បើប្រមូលផលខកខានម្តង ពិបាកចេញពីរង្វង់បំណុល ហើយអាចត្រូវបង្ខំលក់ដី ឬបាត់បង់ដីដែលជាប់បញ្ចាំ ។',
  },
  {
    emoji: '🛺',
    title: 'អ្នកបើកតុកតុក / ម៉ូតូឌុប',
    text: 'ចំណូលមិនប្រាកដប្រជា ត្រូវពឹងលើតម្លៃប្រេង និងហ្គាស ។ ពេលអតិផរណាឡើងដល់ ៥.៦% (២០២៦) បន្ទុកនាំអីវ៉ាន់ និងម្ហូបក៏ឡើងដាក់ឯង ប៉ុន្តែថ្លៃជិះឡើងមិនទាន់ ។',
  },
  {
    emoji: '👪',
    title: 'គ្រួសារបែកគ្នា ឪពុកនៅថៃ ម្តាយនៅស្រុក',
    text: 'ពលករខ្មែរ ~1.2 លាននាក់ធ្វើការនៅថៃ បញ្ជូនប្រាក់មកប្រទេស ជួយគ្រួសារសងបំណុល ។ ពេលវិបត្តិព្រំដែនបង្ខំឲ្យវិលត្រឡប់ ប្រាក់បង្វែរក៏ធ្លាក់ចុះភ្លាម ។',
  },
  {
    emoji: '🎓',
    title: 'និស្សិតបញ្ចប់ការសិក្សា',
    text: 'កង្វះការងារស្របនឹងជំនាញ នាំឲ្យបញ្ចប់ការសិក្សាហើយ បែរជាបើកការងារក្រៅប្រព័ន្ធ ឬធ្វើការក្រៅម៉ោង ដែលចំណូលទាប និងមិនមានការការពារ ។',
  },
]

const stresses = [
  { stat: '>50%', label: 'គ្រួសារជំពាក់បំណុលអ្នកឱ្យខ្ចីផ្លូវការ' },
  { stat: '$18B', label: 'ឥណទានមីក្រូហិរញ្ញវត្ថុ (ប្រហែល, ២០២៤)' },
  { stat: '>8%', label: 'អត្រាឥណទានមិនដំណើរការ (NPL) ធនាគារ' },
  { stat: '3%', label: 'កំណើនសេដ្ឋកិច្ចព្យាករ ២០២៦ (IMF)' },
]
</script>

<template>
  <div>
    <span class="kicker mb-1 block">ផ្នែកទី ៥ · សេដ្ឋកិច្ច & ជីវិតប្រចាំថ្ងៃ</span>
    <h2 class="page-title !text-2xl md:!text-3xl mb-6">
      ហេតុអ្វីការរកលុយសព្វថ្ងៃពិបាក?
    </h2>

    <div class="callout callout-success mb-8">
      <p class="text-gray-700 leading-relaxed">
        បន្ទាប់ពីជម្លោះព្រំដែន និងការផ្លាស់ប្តូរពាណិជ្ជកម្មពិភពលោក សេដ្ឋកិច្ចកម្ពុជាកំពុងប្រឈមមុខនឹងបញ្ហាជាច្រើនជាន់គ្នា ។
        ផ្នែកនេះប្រមូលទិន្នន័យពីរបាយការណ៍អន្តរជាតិ ២០២៥–២០២៦ ដើម្បីពន្យល់ឲ្យច្បាស់ថា ហេតុអ្វីគ្រួសារខ្មែរធម្មតា ខំប្រឹងការហើយ បែរជានៅតែពិបាក ។
      </p>
      <p class="text-xs text-gray-500 mt-3 italic">
        ⚠️ ចំណាំ៖ ទិន្នន័យផ្អែកលើរបាយការណ៍សាធារណៈរបស់ World Bank, IMF, AMRO, ADB, INGO និងប្រព័ន្ធផ្សព្វផ្សាយអន្តរជាតិ ។ ករណីខ្លះជាការបកស្រាយរបស់អ្នកសរសេរ សូមជួយពិនិត្យតំណឯកសារយោង។
      </p>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      <div v-for="s in stresses" :key="s.stat" class="stat-card">
        <p class="stat-value text-red-600">{{ s.stat }}</p>
        <p class="stat-label">{{ s.label }}</p>
      </div>
    </div>

    <!-- 5.1 Structure -->
    <div class="section-head"><span class="num-badge">៥.១</span><h3 class="section-title">សេដ្ឋកិច្ចកម្ពុជាពឹងផ្អែកលើអ្វីខ្លះ?</h3></div>
    <p class="text-gray-700 mb-4">
      សេដ្ឋកិច្ចកម្ពុជាភាគច្រើនពឹងលើទីផ្សារបរទេស មិនមែនលើប្រជាជនក្នុងស្រុកទេ ។ ហេតុនេះហើយ នៅពេលពិភពលោកផ្លាស់ប្តូរ (ពន្ធ សង្គ្រាម វិបត្តិ) កម្ពុជារងផលធ្ងន់ជាងគេ ។ <Cite :ids="[18]" />
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div v-for="p in pillars" :key="p.name" class="card card-pad !p-5 border-l-4 border-primary">
        <h4 class="font-bold text-lg">{{ p.emoji }} {{ p.name }}</h4>
        <p class="text-sm text-gray-600 mt-2">{{ p.desc }}</p>
      </div>
      <div class="card-dark card-pad border-l-4 border-accent">
        <h4 class="font-bold text-lg">🧾 សេដ្ឋកិច្ចក្រៅប្រព័ន្ធ</h4>
        <p class="text-sm text-gray-300 mt-2">
          ប្រហែល <strong class="text-accent">90%</strong> នៃសហគ្រាស និង <strong class="text-accent">88%</strong> នៃការងារ ស្ថិតក្នុងសេដ្ឋកិច្ចក្រៅប្រព័ន្ធ —
          គ្មានកិច្ចសន្យា គ្មានការការពារសង្គម ចំណូលមិនទៀងទាត់ ។ <Cite :ids="[1]" />
        </p>
      </div>
    </div>

    <!-- 5.2 Wage -->
    <div class="section-head"><span class="num-badge">៥.២</span><h3 class="section-title">ប្រាក់ឈ្នួល & តម្លៃជីវិត</h3></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card card-pad">
        <p class="text-gray-700 mb-3">
          ប្រាក់ឈ្នួលអប្បបរមាវិស័យកាត់ដេរឆ្នាំ ២០២៦ ត្រូវបានដំឡើងពី <strong>$208</strong> ទៅ <strong>$210/ខែ</strong> បូកប្រាក់វត្តមាន ដឹកជញ្ជូន និងជួលផ្ទះ សរុប ~<strong>$227–238</strong> ។ <Cite :ids="[13, 14]" />
        </p>
        <p class="text-gray-700 mb-3">
          ប៉ុន្តែសហជីពពលករបញ្ជាក់ថា ប្រាក់នេះនៅទាបជាងតម្លៃរស់នៅឆ្ងាយណាស់ — ពលករត្រូវកាប់អាហារ សុខភាព និងការសិក្សាកូន ហើយធ្លាក់ចូលរង្វង់បំណុល ។ <Cite :ids="[14]" />
        </p>
        <ul class="space-y-2 text-sm text-gray-700">
          <li v-for="c in costs" :key="c.item" class="flex justify-between border-b border-gray-100 pb-2">
            <span>{{ c.item }}</span>
            <span class="text-red-600 text-xs italic">{{ c.note }}</span>
          </li>
        </ul>
      </div>
      <div>
        <div class="card card-pad h-full">
          <h4 class="font-bold mb-4">ការដំឡើងប្រាក់ឈ្នួលអប្បបរមា (USD/ខែ) <Cite :ids="[13, 15]" /></h4>
          <div class="chart-wrapper" style="height: 260px">
            <ChartJs id="minWage" :config="minWageChart" />
          </div>
          <p class="text-xs text-gray-500 mt-3">ការដំឡើងមាន <strong>តិចជាងអត្រាអតិផរណា</strong> ក្នុង ២០២៦ (អតិផរណា ~៥.៦%) ន័យថាអំណាចទិញរបស់កម្មករពិតជាធ្លាក់ចុះ ។ <Cite :ids="[16]" /></p>
        </div>
      </div>
    </div>

    <!-- 5.3 Tariffs -->
    <div class="section-head"><span class="num-badge">៥.៣</span><h3 class="section-title">ការវាយប្រហារពន្ធអាមេរិក ២០២៥</h3></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card card-pad">
        <ul class="list-disc ml-5 space-y-3 text-gray-700">
          <li>អាមេរិកជាអ្នកទិញទំនិញកាត់ដេរធំជាងគេ៖ ត្រឹម <strong>$5.2 ពាន់លាន USD (២០២៤)</strong> គឺ ~<strong>38.5%</strong> នៃចំណូលនាំចេញកាត់ដេរទាំងអស់ ។ <Cite :ids="[5]" /></li>
          <li>កម្ពុជានាំចេញទៅអាមេរិក $12.7 ពាន់លាន តែនាំចូលវិញ <strong>ត្រឹម $322 លាន</strong> — អតិរេកពាណិជ្ជកម្មធំក្លាយជា "គោលដៅ" នៃពន្ធ ។ <Cite :ids="[5]" /></li>
          <li>អាមេរិកបានដំឡើងពន្ធលើកម្ពុជាដល់ <strong>49%</strong> (មេសា ២០២៥) បន្ទាប់មកបន្ថយមក <strong>19%</strong> — ប៉ុន្តែពេលបូកពន្ធមូលដ្ឋានផ្សេងទៀត ថ្លៃព្រំដែនអាចឡើងដល់ ~<strong>39%</strong> ។ <Cite :ids="[2]" /></li>
          <li>របាយការណ៍ Better Factories Cambodia រកឃើញថា <strong>ស្ទើរពាក់កណ្តាល</strong>នៃរោងចក្រ 203 ប្រឈមមុខនឹងភាពមិនច្បាស់នៃបញ្ជាទិញលើសពី 3 ខែ ។ <Cite :ids="[5]" /></li>
        </ul>
      </div>
      <div class="card card-pad">
        <h4 class="font-bold mb-4">កំណើនសេដ្ឋកិច្ច៖ ពី 6% ធ្លាក់មក 3%</h4>
        <div class="chart-wrapper" style="height: 240px">
          <ChartJs id="gdp" :config="gdpGrowthChart" />
        </div>
        <p class="text-xs text-gray-500 mt-3">
          កំណើន 2024 = 6.0% (World Bank/AMRO) ; 2025 ≈ 4.8% (World Bank) ; 2026 ≈ 3.0% (IMF, ដោយសារតម្លៃថាមពល ពន្ធ និងទេសចរណ៍ចុះខ្សោយ) ។ <Cite :ids="[1, 2, 16]" />
        </p>
      </div>
    </div>

    <!-- 5.4 Debt -->
    <div class="section-head"><span class="num-badge">៥.៤</span><h3 class="section-title">វិបត្តិបំណុលគ្រួសារ & មីក្រូហិរញ្ញវត្ថុ</h3></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card card-pad">
        <ul class="list-disc ml-5 space-y-3 text-gray-700">
          <li><strong>ជាង 50%</strong> នៃគ្រួសារខ្មែរជំពាក់បំណុលអ្នកឱ្យខ្ចីផ្លូវការ — ធ្វើឲ្យកម្ពុជាជាប្រទេសដែល "ជំពាក់គេខ្លាំង" ជាងគេក្នុងតំបន់ ។ <Cite :ids="[5]" /></li>
          <li>ឆ្នាំ ២០២៤៖ គ្រួសារ <strong>3.8 លាន</strong> កាន់ប្រាក់កម្ចី <strong>$18 ពាន់លាន</strong> ពីមីក្រូហិរញ្ញវត្ថុ ។ <Cite :ids="[7]" /></li>
          <li>អង្គការ HRW ចងក្រងឯកសារ "អន្ទាក់បំណុល"៖ លក់ដីដោយបង្ខំ កូនបាត់ពីសាលា សមាជិកគ្រួសារធ្វើអត្តឃាតដោយសារបំណុល — ជាពិសេសសហគមន៍ជនជាតិដើមភាគតិច រ៉ាតនគិរី ។ <Cite :ids="[6, 8]" /></li>
          <li>ការលួសសម្រាកការសងបំណុល (ពីក្រោយវិបត្តិព្រំដែន) បានផុតកំណត់ <strong>ខែមីនា ២០២៦</strong> → គ្រួសាររាប់ម៉ឺនរៀបចំខ្លួនមិនទាន់ ។ <Cite :ids="[9, 10]" /></li>
        </ul>
      </div>
      <div class="card card-pad">
        <h4 class="font-bold mb-4">កំណើនឥណទានមីក្រូហិរញ្ញវត្ថុ (<span class="text-red-600">ពន្លកលឿនពេក</span>)</h4>
        <div class="chart-wrapper" style="height: 240px">
          <ChartJs id="micro" :config="microCreditChart" />
        </div>
        <p class="text-xs text-gray-500 mt-3">
          ពី ~$3 លាន (1995) កើនដល់ $9.4 ពាន់លាន (2022) និង ~$18 ពាន់លាន (2024) — លឿនជាងសមត្ថភាពចំណូលរបស់គ្រួសារជនបទច្រើនណាស់ ។ <Cite :ids="[7, 8]" />
        </p>
      </div>
    </div>
    <div class="callout callout-danger mb-8">
      <p class="text-gray-700 text-sm">
        📉 IMF ព្រមានថា អត្រាបំណុលមិនដំណើរការ (NPL) របស់ធនាគារលើសពី <strong>8%</strong> នៅពាក់កណ្តាលឆ្នាំ ២០២៥ ហើយការប្រឈមហានិភ័យនៃភាពក្រីក្រក្នុងគ្រួសារដែលរងវិបត្តិព្រំដែន អាចឡើងដល់ <strong>50%</strong> បើគ្មានការជួយ ។ <Cite :ids="[2]" />
      </p>
    </div>

    <!-- 5.5 Tourism -->
    <div class="section-head"><span class="num-badge">៥.៥</span><h3 class="section-title">ទេសចរណ៍កំពុងធ្លាក់ចុះរន្ធត់</h3></div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
      <div class="card card-pad">
        <h4 class="font-bold mb-4">ភ្ញៀវទេសចរអន្តរជាតិ (លាននាក់) <Cite :ids="[11, 12, 19]" /></h4>
        <div class="chart-wrapper" style="height: 240px">
          <ChartJs id="tourist" :config="touristChart" />
        </div>
      </div>
      <div class="card card-pad">
        <ul class="list-disc ml-5 space-y-3 text-gray-700">
          <li>២០២៥៖ <strong>5.57 លាននាក់</strong> ធ្លាក់ <strong>−16.9%</strong> ធៀប 2024 (6.7 លាន) ។ <Cite :ids="[11]" /></li>
          <li>ភ្ញៀវថៃធ្លាក់ <strong>−52.4%</strong> (~១លាននាក់) ដោយសារវិបត្តិព្រំដែន ។ <Cite :ids="[11]" /></li>
          <li>៥ខែដើមឆ្នាំ ២០២៦៖ ធ្លាក់ <strong>−48%</strong> (1.54 លាននាក់) ដោយសារជម្លោះ កេរ្តិ៍ឈ្មោះ Scam និងថ្លៃថាមពល ។ <Cite :ids="[12]" /></li>
          <li>ចំណូលទេសចរណ៍ ២០២៥ ≈ <strong>$3.87 ពាន់លាន</strong> — ប៉ុន្តែកម្ពុជាត្រូវការ 6–7 លាននាក់/ឆ្នាំ ទើបអាចរស់ដោយរលូន ។ <Cite :ids="[12]" /></li>
        </ul>
      </div>
    </div>

    <!-- 5.6 Property -->
    <div class="section-head"><span class="num-badge">៥.៦</span><h3 class="section-title">អចលនទ្រព្យ & សំណង់</h3></div>
    <div class="card card-pad mb-8">
      <p class="text-gray-700">
        វិស័យមួយដែលធ្លាប់ជា "ម៉ាស៊ីនរកការងារ" ធំ កំពុងធ្លាក់ចុះតម្លៃអចលនទ្រព្យ និងមានលំនៅសង់ហួសតម្រូវការ (Supply Overhang) ។
        អ្នកអភិវឌ្ឍន៍ខ្សោយហិរញ្ញវត្ថុ ឥណទានសំណង់មិនអាចសង ការងារសំណង់ (ពលករបុរសជាច្រើន) ក៏ថយចុះ ។
        បញ្ហានេះវាយចំខ្លាំងលើគ្រួសារអ្នកខ្លះបានកក់ផ្ទះល្វែង ឬវិនិយោគដីសង្កាត់ ។ <Cite :ids="[2]" />
      </p>
    </div>

    <!-- 5.7 Migrants -->
    <div class="section-head"><span class="num-badge">៥.៧</span><h3 class="section-title">ពលករចំណាកស្រុក & ប្រាក់បង្វែរ</h3></div>
    <div class="card card-pad mb-8">
      <p class="text-gray-700 leading-relaxed">
        ពលករខ្មែរ ~<strong>1.2 លាននាក់</strong> ធ្វើការនៅថៃ (សំណង់ កសិកម្ម ស្មៀនផ្ទះ) ។ ប្រាក់បង្វែររបស់ពួកគេជាអ្នកចិញ្ចឹមសេដ្ឋកិច្ចគ្រួសារ និងជាមធ្យោបាយសងបំណុលធំបំផុត ។
        ក្រោយវិបត្តិព្រំដែន ២០២៥ ពលកររាប់ម៉ឺននាក់បានវិលត្រឡប់ តែទីផ្សារការងារក្នុងស្រុកមិនអាចស្រូបយកពួកគេបាន — អ្នកខ្លះត្រូវសម្រេចចិត្តត្រឡប់ទៅថៃវិញ ទោះបីមានគ្រោះថ្នាក់ក៏ដោយ ព្រោះនៅស្រុកមិនអាចរកចំណូលបាន ។ <Cite :ids="[2, 5]" />
      </p>
    </div>

    <!-- 5.8 Structural -->
    <div class="section-head"><span class="num-badge">៥.៨</span><h3 class="section-title">បញ្ហារចនាសម្ព័ន្ធរយៈពេលវែង</h3></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">📅 បញ្ចប់ស្ថានភាព LDC ឆ្នាំ ២០២៩</h4>
        <p class="text-sm text-gray-600 mt-2">កម្ពុជានឹង "បញ្ចប់ការស្ថិតក្នុងបញ្ជីប្រទេសអភិវឌ្ឍន៍តិច" → បាត់បង់សិទ្ធិពន្ធ ០% និងការឧបត្ថម្ភ ព្រមទាំងការខ្ចីដោយការប្រាក់ទាប ។ <Cite :ids="[3]" /></p>
      </div>
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">🇪🇺 ការដកសិទ្ធិលើកទឹកចិត្តពន្ធ EBA (២០២០)</h4>
        <p class="text-sm text-gray-600 mt-2">EU បានដកអាទិភាពពន្ធ PARTIALLY លើទំនិញកាត់ដេរមួយភាគធំរួចហើយ តាំងពីឆ្នាំ ២០២០ — មុនពេលពន្ធអាមេរិក ។ <Cite :ids="[18]" /></p>
      </div>
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">💵 ការដុំរៀល/ទុនបរទេស</h4>
        <p class="text-sm text-gray-600 mt-2">សេដ្ឋកិច្ចដុំដុល (Dollarization)៖ ទីផ្សារប្រើប្រាស់ដុល្លារច្រើន រៀលគ្រាន់តែជាប្រាក់រាប់ទេ។ ពេលដុល្លារសកលប្រែប្រួល អំណាចទិញក្នុងស្រុកប្រែប្រួលតាម ។</p>
      </div>
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">🎓 កង្វះការងារត្រូវនឹងជំនាញ</h4>
        <p class="text-sm text-gray-600 mt-2">និស្សិតបញ្ចប់ការសិក្សារាប់ម៉ឺននាក់/ឆ្នាំ ប៉ុន្តែទីផ្សារការងារបង្កើតការងារមានគុណភាពតិច → ធ្វើការក្រៅប្រព័ន្ធ ប្រាក់ខែទាប ។ <Cite :ids="[4]" /></p>
      </div>
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">🛰️ កេរ្តិ៍ឈ្មោះ Scam</h4>
        <p class="text-sm text-gray-600 mt-2">កណ្តាលឧក្រិដ្ឋកម្មអនឡាញក្នុងនិងក្រៅប្រទេសបន្ទាបរូបភាពប្រទេស → ប៉ះពាល់ទេសចរណ៍ និងការវិនិយោគ ។ <Cite :ids="[16]" /></p>
      </div>
      <div class="card card-pad !p-5">
        <h4 class="font-bold text-accent">🧂 គុណភាពការងារ & សន្តិសុខសង្គម</h4>
        <p class="text-sm text-gray-600 mt-2">កម្មករក្រៅប្រព័ន្ធ 88% គ្មានប្រាក់សោធន គ្មានការឈប់សម្រាក គ្មានការការពារពេលគ្រោះថ្នាក់ ឬជំងឺ ។ <Cite :ids="[1]" /></p>
      </div>
    </div>

    <!-- 5.9 Stories -->
    <div class="section-head"><span class="num-badge">៥.៩</span><h3 class="section-title">"សំឡេង" ពីជីវិតប្រចាំថ្ងៃ</h3></div>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
      <div v-for="c in storyCards" :key="c.title" class="card card-pad !p-5 border-t-4 border-emerald-600">
        <h4 class="font-bold text-lg mb-2">{{ c.emoji }} {{ c.title }}</h4>
        <p class="text-sm text-gray-600 leading-relaxed">{{ c.text }}</p>
      </div>
    </div>

    <!-- 5.10 Outlook pointer -->
    <div class="card card-dark card-pad rounded-2xl mt-8 mb-8 overflow-hidden relative">
      <div class="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-indigo-400/10 blur-3xl pointer-events-none"></div>
      <div class="relative flex flex-col md:flex-row md:items-center gap-6">
        <div class="flex-1">
          <span class="kicker mb-2 !text-amber-300">📈 ផ្នែកថ្មី</span>
          <h3 class="font-header font-bold text-2xl text-white mb-2">ទស្សនវិស័យសេដ្ឋកិច្ច ២០២៧–២០២៩</h3>
          <p class="text-sm text-white/70 leading-relaxed">
            តើសេដ្ឋកិច្ចកម្ពុជានឹងទៅជាយ៉ាងណាបន្ទាប់ ២០២៦?
            ការងើបឡើងវិញ ២០២៧–២០២៨ និងការចាកចេញពី LDC ថ្ងៃទី ១៩ ធ្នូ ២០២៩ —
            ការសាកល្បងធំបំផុតរបស់សេដ្ឋកិច្ច ។ ប្រភព៖ World Bank, ADB, IMF, UNDP ។ <Cite :ids="[24, 25, 27, 28]" />
          </p>
        </div>
        <button @click="nav('outlook')" class="btn bg-amber-400 text-neutral-900 hover:bg-amber-300 shrink-0">
          មើលទស្សនវិស័យ ២០២៧–២០២៩ →
        </button>
      </div>
    </div>

    <!-- Conclusion -->
    <div class="card-dark card-pad mb-8">
      <h3 class="font-bold text-lg mb-4 text-accent">សន្និដ្ឋានសេដ្ឋកិច្ច</h3>
      <p class="leading-relaxed opacity-90">
        ការរកលុយពិបាកសព្វថ្ងៃ មិនមែនដោយសារ "ខ្ជិល" ឬ "មិនខំ" ទេ តែមកពីប្រទាក់ក្រឡានៃ៖
        <strong>ក) ការពឹងលើទីផ្សារខាងក្រៅ</strong> (កាត់ដេរ, ទេសចរណ៍) ដែលកំពុងរងពន្ធ និងជម្លោះ,
        <strong>ខ) បំណុលគ្រួសារកម្រិតខ្ពស់</strong> ដែលអូសទាញប្រាក់ចំណូលរៀងរាល់ខែ,
        <strong>គ) តម្លៃជីវិត & តម្លៃថាមពល</strong> កើនលឿនជាងប្រាក់ឈ្នួល,
        និង <strong>ឃ) បញ្ហារចនាសម្ព័ន្ធ</strong> (LDC-2029, សេដ្ឋកិច្ចក្រៅប្រព័ន្ធ, កង្វះជំនាញ) ។
        <br><br>
        ដំណោះស្រាយមិនមែនជាដំណោះស្រាយមួយថ្ងៃទេ — ត្រូវការ៖ (1) ស្ថិរភាពព្រំដែន ដើម្បីឲ្យពាណិជ្ជកម្ម និងទេសចរណ៍រស់ឡើងវិញ (2) ការគ្រប់គ្រងបំណុលប្រកបដោយទំនួលខុសត្រូវ (3) ការរកទីផ្សារថ្មី & តម្លៃបន្ថែមលើទំនិញ និង (4) ការវិនិយោគលើការអប់រំ-ជំនាញ ។ <Cite :ids="[1, 3]" />
      </p>
    </div>

    <div class="flex flex-wrap gap-4">
      <button @click="nav('references')" class="btn btn-primary">មើលឯកសារយោងទាំងអស់</button>
      <button @click="nav('analysis')" class="text-primary font-bold hover:underline">← ត្រឡប់ទៅវិភាគ</button>
    </div>
  </div>
</template>
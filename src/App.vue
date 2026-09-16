<script setup>
import { ref, provide, onMounted } from 'vue'
import { initTheme } from './theme'
import Navbar from './components/Navbar.vue'
import AppFooter from './components/AppFooter.vue'
import IntroPage from './pages/IntroPage.vue'
import HistoryPage from './pages/HistoryPage.vue'
import CulturePage from './pages/CulturePage.vue'
import Conflict2025Page from './pages/Conflict2025Page.vue'
import Status2026Page from './pages/Status2026Page.vue'
import AnalysisPage from './pages/AnalysisPage.vue'
import EconomyPage from './pages/EconomyPage.vue'
import OutlookPage from './pages/OutlookPage.vue'
import ReferencesPage from './pages/ReferencesPage.vue'

const pages = {
  intro: IntroPage,
  history: HistoryPage,
  culture: CulturePage,
  conflict2025: Conflict2025Page,
  status2026: Status2026Page,
  analysis: AnalysisPage,
  economy: EconomyPage,
  outlook: OutlookPage,
  references: ReferencesPage,
}

const defaultRoute = 'intro'

function parseHash() {
  const h = (window.location.hash || '').replace(/^#\/?/, '').trim()
  return pages[h] ? h : defaultRoute
}

const currentPage = ref(parseHash())

function navigate(pageId) {
  if (pages[pageId]) {
    window.location.hash = '/' + pageId
    currentPage.value = pageId
  }
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

provide('nav', navigate)

onMounted(() => {
  initTheme()
  window.addEventListener('hashchange', () => {
    currentPage.value = parseHash()
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar :current="currentPage" @nav="navigate" />
    <main class="flex-grow w-full px-4 py-8 md:py-10">
      <div class="max-w-6xl mx-auto">
        <component :is="pages[currentPage]" :key="currentPage" class="page-enter" />
      </div>
    </main>
    <AppFooter text="ផ្អែកលើរបាយការណ៍ស្រាវជ្រាវ ២០២៥–២០២៦ (បច្ចុប្បន្នភាព កញ្ញា ២០២៦) • បង្កើតឡើងដោយ លីហួរ (Lyhuor) • បង្កើតដោយ Vue.js" />
  </div>
</template>
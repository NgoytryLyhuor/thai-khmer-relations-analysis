<script setup>
import { ref } from 'vue'
import { isDark, toggleTheme } from '../theme'

defineProps({ current: String })
const emit = defineEmits(['nav'])

const items = [
  { id: 'intro', label: 'ទំព័រដើម' },
  { id: 'history', label: 'ប្រវត្តិសាស្ត្រ' },
  { id: 'culture', label: 'វប្បធម៌' },
  { id: 'conflict2025', label: 'ជម្លោះ ២០២៥', special: true },
  { id: 'analysis', label: 'វិភាគ' },
  { id: 'economy', label: 'សេដ្ឋកិច្ច' },
  { id: 'outlook', label: 'ទស្សនវិស័យ ២០២៧–២០២៩', special: true },
  { id: 'references', label: 'ឯកសារយោង' },
]

const mobileOpen = ref(false)

function go(id) {
  emit('nav', id)
  mobileOpen.value = false
}
</script>

<template>
  <nav class="nav-shell sticky top-0 z-50">
    <div class="max-w-6xl mx-auto px-4">
      <div class="flex justify-between h-16 items-center">
        <button class="flex items-center gap-2.5 cursor-pointer outline-none" @click="go('intro')" aria-label="ទំព័រដើម">
          <span class="brand-mark">ស</span>
          <span class="flex flex-col items-start leading-tight">
            <span class="font-header font-bold text-lg bg-clip-text text-transparent bg-brand-grad">ស៊ីជម្រៅ Insight</span>
            <span class="hidden min-[400px]:block text-[0.6rem] tracking-[0.16em] uppercase" :class="isDark ? 'text-gray-400' : 'text-gray-500'">របាយការណ៍វិភាគ · កម្ពុជា-ថៃ</span>
          </span>
        </button>

        <div class="hidden xl:flex items-center gap-1">
          <button
            v-for="item in items"
            :key="item.id"
            @click="go(item.id)"
            class="nav-link"
            :class="[
              current === item.id ? 'nav-link-active' : '',
              item.special && current !== item.id ? 'ring-1 ring-inset text-amber-700 dark:text-amber-300 ring-amber-600/40 dark:ring-amber-300/40' : '',
            ]"
          >
            {{ item.label }}
          </button>
        </div>

        <div class="flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="w-10 h-10 rounded-full border transition grid place-items-center shrink-0"
            :class="isDark ? 'border-yellow-400/40 bg-yellow-400/10 text-yellow-300 hover:bg-yellow-400/20' : 'border-gray-200 bg-white text-gray-600 hover:bg-gray-100'"
            :aria-label="isDark ? 'ប្តូរទៅរបៀបភ្លឺ' : 'ប្តូរទៅរបៀបងងឹត'"
            :title="isDark ? 'Light mode ☀️' : 'Dark mode 🌙'"
          >
            <span class="text-base leading-none">{{ isDark ? '☀️' : '🌙' }}</span>
          </button>

          <button
            @click="mobileOpen = !mobileOpen"
            class="xl:hidden w-10 h-10 rounded-full border grid place-items-center shrink-0"
            :class="isDark ? 'border-gray-600 text-gray-200' : 'border-gray-200 bg-white text-gray-700'"
            aria-label="ម៉ឺនុយ"
          >
            <span class="text-lg leading-none">{{ mobileOpen ? '✕' : '☰' }}</span>
          </button>
        </div>
      </div>
    </div>

    <Transition name="drawer">
      <div v-if="mobileOpen" class="xl:hidden border-t" :class="isDark ? 'border-gray-700/60 bg-[#0e1730]/95' : 'border-gray-100 bg-white/95'">
        <div class="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1 max-h-[80vh] overflow-y-auto">
          <button
            v-for="(item, i) in items"
            :key="item.id"
            @click="go(item.id)"
            class="nav-link w-full justify-between text-left !py-3"
            :class="current === item.id ? 'nav-link-active' : ''"
            :style="{ transitionDelay: `${i * 20}ms` }"
          >
            {{ item.label }}
            <span class="text-xs opacity-60" v-if="current === item.id">●</span>
          </button>
        </div>
      </div>
    </Transition>
  </nav>
</template>

<style scoped>
.drawer-enter-active,
.drawer-leave-active {
  transition: all 0.25s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
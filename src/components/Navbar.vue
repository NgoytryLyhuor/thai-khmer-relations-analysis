<script setup>
import { ref } from 'vue'
import { isDark, toggleTheme } from '../theme'

defineProps({ current: String })
const emit = defineEmits(['nav'])

const items = [
  { id: 'history', label: 'ប្រវត្តិសាស្ត្រ & លង្វែក' },
  { id: 'culture', label: 'សង្គ្រាមវប្បធម៌' },
  { id: 'conflict2025', label: 'ជម្លោះ ២០២៥', special: true },
  { id: 'analysis', label: 'វិភាគ' },
  { id: 'economy', label: 'សេដ្ឋកិច្ច & ជីវិត' },
  { id: 'references', label: 'ឯកសារយោង' },
]

const mobileOpen = ref(false)

function go(id) {
  emit('nav', id)
  mobileOpen.value = false
}
</script>

<template>
  <nav class="bg-white shadow-md sticky top-0 z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between h-16">
        <div class="flex items-center cursor-pointer" @click="go('intro')">
          <span class="text-xl md:text-2xl font-header font-bold text-primary">ស៊ីជម្រៅ Insight</span>
        </div>

        <div class="hidden lg:flex space-x-5 items-center">
          <button
            v-for="item in items"
            :key="item.id"
            @click="go(item.id)"
            class="text-sm font-medium transition nav-item"
            :class="[
              item.special
                ? 'bg-red-50 text-red-600 font-bold hover:text-red-800 px-3 py-1 rounded'
                : 'hover:text-primary',
              current === item.id && item.special
                ? 'ring-2 ring-red-300'
                : current === item.id && !item.special
                  ? 'text-primary font-bold border-b-2 border-primary'
                  : !item.special && 'text-gray-600',
            ]"
          >
            {{ item.label }}
          </button>

          <button
            @click="toggleTheme"
            class="p-2 rounded-full border transition shrink-0"
            :class="isDark ? 'bg-yellow-50 text-yellow-800 hover:bg-yellow-100' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'"
            :aria-label="isDark ? 'ប្តូរទៅរបៀបភ្លឺ' : 'ប្តូរទៅរបៀបងងឹត'"
            :title="isDark ? 'Light mode ☀️' : 'Dark mode 🌙'"
          >
            <span class="text-lg leading-none">{{ isDark ? '☀️' : '🌙' }}</span>
          </button>
        </div>

        <div class="lg:hidden flex items-center gap-2">
          <button
            @click="toggleTheme"
            class="p-2 rounded-full border transition shrink-0"
            :class="isDark ? 'bg-yellow-50 text-yellow-800' : 'bg-gray-100 text-gray-700'"
            :aria-label="isDark ? 'ប្តូរទៅរបៀបភ្លឺ' : 'ប្តូរទៅរបៀបងងឹត'"
          >
            <span class="text-lg leading-none">{{ isDark ? '☀️' : '🌙' }}</span>
          </button>
          <button
            @click="mobileOpen = !mobileOpen"
            class="text-gray-600 hover:text-primary focus:outline-none p-2 border rounded"
            aria-label="ម៉ឺនុយ"
          >
            <span class="text-xl font-bold">☰</span>
          </button>
        </div>
      </div>
    </div>

    <div v-if="mobileOpen" class="lg:hidden bg-white border-t absolute w-full shadow-lg">
      <button
        v-for="item in items"
        :key="item.id"
        @click="go(item.id)"
        class="block w-full text-left px-4 py-3 border-b hover:bg-gray-50"
        :class="item.special ? 'bg-red-50 text-red-600 font-bold' : ''"
      >
        {{ item.label }}
      </button>
    </div>
  </nav>
</template>
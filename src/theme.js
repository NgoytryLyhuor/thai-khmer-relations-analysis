import { ref } from 'vue'

export const isDark = ref(false)

function applyTheme() {
  document.documentElement.classList.toggle('dark', isDark.value)
}

export function initTheme() {
  const stored = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  isDark.value = stored ? stored === 'dark' : prefersDark
  applyTheme()
}

export function toggleTheme() {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  applyTheme()
}
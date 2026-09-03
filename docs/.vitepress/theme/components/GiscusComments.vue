<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue';
import { useData, useRoute } from 'vitepress';

// giscus configuration for this repo. The repo-id / category-id are public
// identifiers resolved by giscus.app, not secrets.
const GISCUS_CONFIG = {
  repo: 'Totoro-jam/battle-tested-patterns',
  repoId: 'R_kgDOSuhOZQ',
  category: 'Announcements',
  categoryId: 'DIC_kwDOSuhOZc4C_AIc',
} as const;

const { isDark, lang } = useData();
const route = useRoute();
const container = ref<HTMLElement | null>(null);

// VitePress drives its own light/dark toggle (independent of the OS setting),
// so `data-theme="preferred_color_scheme"` would drift from the site. Derive
// the widget theme from the site state instead.
const theme = computed(() => (isDark.value ? 'dark' : 'light'));
const giscusLang = computed(() => (lang.value === 'zh-CN' ? 'zh-CN' : 'en'));

function sendMessage(message: Record<string, unknown>) {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  iframe?.contentWindow?.postMessage({ giscus: message }, 'https://giscus.app');
}

function mountGiscus() {
  if (!container.value) return;
  // giscus reads its config from the script tag's `data-*` attributes and
  // injects its iframe in place of the script, so the script must live inside
  // the wrapper (not <head>) to land in the right spot.
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.dataset.repo = GISCUS_CONFIG.repo;
  script.dataset.repoId = GISCUS_CONFIG.repoId;
  script.dataset.category = GISCUS_CONFIG.category;
  script.dataset.categoryId = GISCUS_CONFIG.categoryId;
  script.dataset.mapping = 'pathname';
  script.dataset.strict = '0';
  script.dataset.reactionsEnabled = '1';
  script.dataset.emitMetadata = '0';
  script.dataset.inputPosition = 'top';
  script.dataset.theme = theme.value;
  script.dataset.lang = giscusLang.value;
  script.dataset.loading = 'lazy';
  container.value.appendChild(script);
}

onMounted(mountGiscus);

// Sync the widget theme when the site theme toggles.
watch(theme, (value) => sendMessage({ setConfig: { theme: value } }));

// VitePress is an SPA: on navigation the URL changes without a page reload,
// so giscus's `pathname` mapping would keep showing the previous page's
// thread. Re-point it to the new pathname once history has settled.
watch(
  () => route.path,
  () => {
    nextTick(() => sendMessage({ setConfig: { term: window.location.pathname } }));
  },
);

// Match the widget UI language to the active locale on in-session locale switch.
watch(giscusLang, (value) => sendMessage({ setConfig: { lang: value } }));
</script>

<template>
  <div ref="container" class="giscus-comments" />
</template>

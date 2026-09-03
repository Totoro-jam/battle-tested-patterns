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

// Explicit discussion key, normalized exactly like giscus's `pathname` mapping
// so EN and ZH pages map to separate, stable threads:
//   /guide/what-is-this.html  ->  guide/what-is-this
//   /zh/patterns/bitmask/     ->  zh/patterns/bitmask/
//
// `mapping: "specific"` + an explicit `term` is the reliable way to handle SPA
// navigation. giscus reads `term` verbatim and `setConfig: { term }` retargets
// the live widget in place, so EN/ZH (and any two pages) switch threads without
// a teardown/rebuild race. `pathname` instead derives the term from
// `location.pathname` only at widget creation, so retargeting forced a full
// remount — which is what mixed the EN and ZH threads together.
const term = computed(() => {
  const path = route.path;
  return path.length < 2 ? 'index' : path.substring(1).replace(/\.\w+$/, '');
});

function mountGiscus() {
  if (!container.value) return;
  container.value.innerHTML = '';
  const script = document.createElement('script');
  script.src = 'https://giscus.app/client.js';
  script.async = true;
  script.crossOrigin = 'anonymous';
  script.dataset.repo = GISCUS_CONFIG.repo;
  script.dataset.repoId = GISCUS_CONFIG.repoId;
  script.dataset.category = GISCUS_CONFIG.category;
  script.dataset.categoryId = GISCUS_CONFIG.categoryId;
  script.dataset.mapping = 'specific';
  script.dataset.term = term.value;
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

function sendConfig(config: Record<string, unknown>) {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  iframe?.contentWindow?.postMessage({ giscus: { setConfig: config } }, 'https://giscus.app');
}

// Theme is a pure visual toggle giscus applies instantly via `setConfig` —
// remounting here would drop an in-progress comment.
watch(theme, (value) => sendConfig({ theme: value }));

// On navigation, retarget the discussion and the widget's UI language in place.
// `setConfig` is the fast path and keeps any in-progress text; if the iframe
// hasn't finished lazy-loading yet, fall back to a remount so the fresh
// `data-term` / `data-lang` are picked up on its initial load.
watch([term, giscusLang], () => {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  if (iframe?.contentWindow) {
    sendConfig({ term: term.value, lang: giscusLang.value });
  } else {
    nextTick(mountGiscus);
  }
});
</script>

<template>
  <div ref="container" class="giscus-comments" />
</template>

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

// giscus resolves `mapping: "pathname"` → discussion exactly once, when the
// widget is created. On an SPA navigation the existing iframe keeps the
// previous page's thread, so we tear the old widget down and rebuild it from
// scratch. The new script re-reads `location.pathname`, which includes the
// `/zh/` locale prefix, so EN and ZH resolve to separate discussions.
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

// Theme is a pure visual toggle giscus applies instantly via `setConfig` —
// remounting here would drop an in-progress comment. Route changes, by
// contrast, change which discussion the page maps to, and `setConfig` cannot
// retarget that (its message interface has no `mapping` field, so a `term`
// sent while in `pathname` mode is unreliable). Those must remount.
watch(theme, (value) => {
  const iframe = container.value?.querySelector<HTMLIFrameElement>('iframe.giscus-frame');
  iframe?.contentWindow?.postMessage(
    { giscus: { setConfig: { theme: value } } },
    'https://giscus.app',
  );
});

watch(
  () => route.path,
  () => {
    // Defer one tick so the URL has settled before giscus re-reads pathname.
    nextTick(mountGiscus);
  },
);
</script>

<template>
  <div ref="container" class="giscus-comments" />
</template>

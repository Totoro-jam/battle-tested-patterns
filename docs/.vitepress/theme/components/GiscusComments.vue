<script setup lang="ts">
import { computed } from 'vue';
import { useData, useRoute } from 'vitepress';
import Giscus from '@giscus/vue';

// giscus configuration for this repo. The repo-id / category-id are public
// identifiers resolved by giscus.app, not secrets.
const { isDark, lang } = useData();
const route = useRoute();

// VitePress drives its own light/dark toggle (independent of the OS setting),
// so a static theme would drift from the site. Derive the widget theme from the
// site state instead.
const theme = computed(() => (isDark.value ? 'dark' : 'light'));
const giscusLang = computed(() => (lang.value === 'zh-CN' ? 'zh-CN' : 'en'));

// Explicit discussion key, normalized exactly like giscus's `pathname` mapping
// so EN and ZH pages map to separate, stable threads:
//   /guide/what-is-this.html  ->  guide/what-is-this
//   /zh/patterns/bitmask/     ->  zh/patterns/bitmask/
//
// `mapping="specific"` + an explicit `term` is the reliable way to handle SPA
// navigation. giscus reads `term` verbatim, and @giscus/vue retargets the live
// widget in place via `setConfig: { term }` on prop change — no teardown/
// rebuild, so EN/ZH (and any two pages) switch threads cleanly.
const term = computed(() => {
  const path = route.path;
  const rawKey = path.length < 2 ? 'index' : path.substring(1).replace(/\.\w+$/, '');
  return `${lang.value}:${rawKey}`;
});
</script>

<template>
  <Giscus
    repo="Totoro-jam/battle-tested-patterns"
    repo-id="R_kgDOSuhOZQ"
    category="Announcements"
    category-id="DIC_kwDOSuhOZc4C_AIc"
    mapping="specific"
    :term="term"
    strict="1"
    reactions-enabled="1"
    emit-metadata="0"
    input-position="top"
    :theme="theme"
    :lang="giscusLang"
    loading="lazy"
  />
</template>

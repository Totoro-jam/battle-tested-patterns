import DefaultTheme from 'vitepress/theme';
import type { Theme } from 'vitepress';
import { defineAsyncComponent, defineComponent, h, ref, onMounted } from 'vue';
import VizSkeleton from './components/VizSkeleton.vue';
import MinHeapSkeleton from './components/MinHeapSkeleton.vue';
import TimelineSkeleton from './components/TimelineSkeleton.vue';
import VizErrorBoundary from './components/VizErrorBoundary';
import ErrorBoundary from './components/ErrorBoundary';
import DemoBadge from './components/DemoBadge.vue';
import DifficultyBadge from './components/DifficultyBadge.vue';
import CompositionFlow from './components/CompositionFlow.vue';
import DecisionTree from './components/DecisionTree.vue';
import BackToTop from './components/BackToTop.vue';
import GiscusComments from './components/GiscusComments.vue';
import { initMermaidLoader } from './mermaid-loader';
import { setupChunkErrorHandler } from './chunk-error-handler';
import './custom.css';

const vizComponents: Record<string, () => Promise<any>> = {
  RingBufferViz: () => import('./components/RingBufferViz.vue'),
  LRUCacheViz: () => import('./components/LRUCacheViz.vue'),
  BloomFilterViz: () => import('./components/BloomFilterViz.vue'),
  CircuitBreakerViz: () => import('./components/CircuitBreakerViz.vue'),
  ConsistentHashViz: () => import('./components/ConsistentHashViz.vue'),
  MinHeapViz: () => import('./components/MinHeapViz.vue'),
  SkipListViz: () => import('./components/SkipListViz.vue'),
  TrieViz: () => import('./components/TrieViz.vue'),
  StateMachineViz: () => import('./components/StateMachineViz.vue'),
  EventLoopViz: () => import('./components/EventLoopViz.vue'),
  RateLimiterViz: () => import('./components/RateLimiterViz.vue'),
  MerkleTreeViz: () => import('./components/MerkleTreeViz.vue'),
  BPlusTreeViz: () => import('./components/BPlusTreeViz.vue'),
  DependencyGraphViz: () => import('./components/DependencyGraphViz.vue'),
  ObserverViz: () => import('./components/ObserverViz.vue'),
  BackpressureViz: () => import('./components/BackpressureViz.vue'),
  CopyOnWriteViz: () => import('./components/CopyOnWriteViz.vue'),
  SemaphoreViz: () => import('./components/SemaphoreViz.vue'),
  RetryBackoffViz: () => import('./components/RetryBackoffViz.vue'),
  DoubleBufferingViz: () => import('./components/DoubleBufferingViz.vue'),
  FlyweightViz: () => import('./components/FlyweightViz.vue'),
  ObjectPoolViz: () => import('./components/ObjectPoolViz.vue'),
  BitmaskViz: () => import('./components/BitmaskViz.vue'),
  MiddlewareChainViz: () => import('./components/MiddlewareChainViz.vue'),
  WorkStealingViz: () => import('./components/WorkStealingViz.vue'),
  WriteAheadLogViz: () => import('./components/WriteAheadLogViz.vue'),
  DirtyFlagViz: () => import('./components/DirtyFlagViz.vue'),
  LogicalClockViz: () => import('./components/LogicalClockViz.vue'),
  ReferenceCountingViz: () => import('./components/ReferenceCountingViz.vue'),
  ActorModelViz: () => import('./components/ActorModelViz.vue'),
  ArenaAllocatorViz: () => import('./components/ArenaAllocatorViz.vue'),
  BatchProcessingViz: () => import('./components/BatchProcessingViz.vue'),
  CheckpointingViz: () => import('./components/CheckpointingViz.vue'),
  CooperativeSchedulingViz: () => import('./components/CooperativeSchedulingViz.vue'),
  DiffPatchViz: () => import('./components/DiffPatchViz.vue'),
  FreeListViz: () => import('./components/FreeListViz.vue'),
  InterningViz: () => import('./components/InterningViz.vue'),
  MergeIteratorViz: () => import('./components/MergeIteratorViz.vue'),
  MVCCViz: () => import('./components/MVCCViz.vue'),
  VisitorViz: () => import('./components/VisitorViz.vue'),
  VTableViz: () => import('./components/VTableViz.vue'),
  IteratorViz: () => import('./components/IteratorViz.vue'),
  LSMTreeViz: () => import('./components/LSMTreeViz.vue'),
  RegistryViz: () => import('./components/RegistryViz.vue'),
  TaggedUnionViz: () => import('./components/TaggedUnionViz.vue'),
  TombstoneViz: () => import('./components/TombstoneViz.vue'),
  PatternTimelineViz: () => import('./components/PatternTimelineViz.vue'),
  PatternConnectionsViz: () => import('./components/PatternConnectionsViz.vue'),
};

const skeletonOverrides: Record<string, any> = {
  MinHeapViz: MinHeapSkeleton,
  PatternTimelineViz: TimelineSkeleton,
};

function clientOnly(loader: () => Promise<any>, skeleton?: any, componentName?: string) {
  const loadingComp = skeleton || VizSkeleton;
  const AsyncComp = defineAsyncComponent({
    loader,
    loadingComponent: loadingComp,
    delay: 0,
  });
  return defineComponent({
    name: 'VizClientOnly',
    setup() {
      const mounted = ref(false);
      onMounted(() => {
        mounted.value = true;
      });
      return () =>
        h(
          VizErrorBoundary,
          { name: componentName, component: mounted.value ? AsyncComp : null },
          () => (mounted.value ? null : h(loadingComp)),
        );
    },
  });
}

export default {
  extends: DefaultTheme,
  // Inject the mobile back-to-top button into the layout bottom slot so it
  // sits above all pages without touching individual markdown files.
  Layout() {
    return h(DefaultTheme.Layout, null, {
      'layout-bottom': () => h(BackToTop),
      // Comments render on every doc page, below the edit-info + prev/next
      // footer. This matches the community convention (`doc-after` sits
      // outside the <footer>, after the pagination). The home page
      // (layout: home) skips this slot entirely.
      'doc-after': () => h(GiscusComments),
    });
  },
  enhanceApp({ app, router }) {
    app.component('DemoBadge', DemoBadge);
    app.component('DifficultyBadge', DifficultyBadge);

    // Wrap synchronous interactive components with ErrorBoundary
    app.component(
      'CompositionFlow',
      defineComponent({
        name: 'CompositionFlowGuarded',
        setup() {
          return () => h(ErrorBoundary, { name: 'CompositionFlow', component: CompositionFlow });
        },
      }),
    );
    app.component(
      'DecisionTree',
      defineComponent({
        name: 'DecisionTreeGuarded',
        setup() {
          return () => h(ErrorBoundary, { name: 'DecisionTree', component: DecisionTree });
        },
      }),
    );

    // Viz components: async loading + VizErrorBoundary + skeleton
    for (const [name, loader] of Object.entries(vizComponents)) {
      app.component(name, clientOnly(loader, skeletonOverrides[name], name));
    }

    // Global error handler — catches errors not intercepted by ErrorBoundary
    app.config.errorHandler = (err, _instance, info) => {
      console.error('[GlobalErrorHandler]', err, info);
    };

    // Stale deployment chunk error handler — reload on stale chunk 404s
    if (typeof window !== 'undefined') {
      setupChunkErrorHandler();
    }

    // Mermaid conditional loading: only loads library on pages with diagrams
    if (typeof window !== 'undefined') {
      const renderMermaid = initMermaidLoader();
      // Render on initial page load (after DOM is ready)
      if (document.readyState === 'complete') {
        renderMermaid();
      } else {
        window.addEventListener('load', () => renderMermaid());
      }
      // Re-render on VitePress SPA navigation
      router.onAfterRouteChanged = () => {
        // Small delay to ensure DOM is updated after route change
        setTimeout(() => renderMermaid(), 100);
      };
    }
  },
} satisfies Theme;

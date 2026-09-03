---
title: "Patterns from React"
description: "How React combines bitmask, double buffering, cooperative scheduling, min heap, and diff/patch patterns in a single render cycle."
---

# Patterns from React

React's reconciler is a masterclass in combining low-level patterns. The first five patterns all appear in a single render cycle.

## Render Cycle Patterns

| Pattern | Where in React | What It Does |
|---------|---------------|--------------|
| [Bitmask](/patterns/bitmask/) | [`ReactFiberFlags.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L14-L36) | Side-effect flags on fiber nodes |
| [Double Buffering](/patterns/double-buffering/) | [Fiber `current` / `alternate`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiber.js#L327-L355) | Atomic tree swap during reconciliation |
| [Cooperative Scheduling](/patterns/cooperative-scheduling/) | [`workLoopConcurrent`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/forks/Scheduler.js#L188-L258) | Yield every 5ms to keep UI responsive |
| [Min Heap](/patterns/min-heap/) | [`SchedulerMinHeap.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/SchedulerMinHeap.js#L17-L90) | Priority queue for scheduled tasks |
| [Diff / Patch](/patterns/diff-patch/) | [`ReactChildFiber.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactChildFiber.js#L1169-L1340) | Reconcile old and new children lists |

### How They Compose: A Single Render Cycle

When you call `setState`, all five patterns fire in sequence:

<CompositionFlow variant="react-render" />

The key insight: **these patterns are not independent features — they form a pipeline.** The heap decides *what* to render, cooperative scheduling decides *when* to render, diff/patch decides *what changed*, bitmasks encode *how* it changed, and double buffering ensures the swap is atomic.

See [Pattern Connections](/guide/pattern-connections) for the full interactive composition diagram.

For a deep dive into how three of these patterns interlock — bitmask, min-heap, and cooperative scheduling — with every claim backed by source code, read the [React Fiber case study](/case-studies/react-fiber).

## More Patterns in React

| Pattern | Where in React | What It Does |
|---------|---------------|--------------|
| [Batch Processing](/patterns/batch-processing/) | `unstable_batchedUpdates` | Multiple `setState` calls batched into a single re-render |
| [Dirty Flag](/patterns/dirty-flag/) | [`ReactFiberFlags.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L18-L22) | Fiber flags (`Placement`, `Update`, `Deletion`) mark which subtrees need work |
| [Observer](/patterns/observer/) | `useEffect` cleanup pattern | Subscribe on mount, unsubscribe on cleanup — decoupled state observation |

## Further Reading

- [React Source Code (GitHub)](https://github.com/facebook/react)
- [React Fiber Architecture](https://github.com/acdlite/react-fiber-architecture)
- [How to Prepare for a React Interview: 7/14/30-Day Plan (FrontendAtlas)](https://frontendatlas.com/guides/framework-prep/react-prep-path)

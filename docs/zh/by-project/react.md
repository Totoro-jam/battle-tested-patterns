---
title: "React 中的模式"
description: "React 如何在单次渲染周期中组合位掩码、双缓冲、协作调度、最小堆和差异/补丁模式。"
---

# React 中的模式

React 的协调器是低级模式组合的典范。前五个模式全部出现在同一个渲染周期中。

## 渲染周期模式

| 模式 | React 中的位置 | 作用 |
|------|---------------|------|
| [位掩码](/zh/patterns/bitmask/) | [`ReactFiberFlags.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L14-L36) | Fiber 节点上的副作用标志 |
| [双缓冲](/zh/patterns/double-buffering/) | [Fiber `current` / `alternate`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiber.js#L327-L355) | 协调过程中的原子树切换 |
| [协作调度](/zh/patterns/cooperative-scheduling/) | [`workLoopConcurrent`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/forks/Scheduler.js#L188-L258) | 每 5ms 让出以保持 UI 响应 |
| [最小堆](/zh/patterns/min-heap/) | [`SchedulerMinHeap.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/SchedulerMinHeap.js#L17-L90) | 调度任务的优先队列 |
| [差异/补丁](/zh/patterns/diff-patch/) | [`ReactChildFiber.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactChildFiber.js#L1169-L1340) | 协调新旧子节点列表 |

### 模式如何组合：一次渲染周期

当你调用 `setState` 时，五个模式依次触发：

<CompositionFlow variant="react-render" />

核心洞察：**这些模式并非独立的功能——它们形成了一条流水线。** 最小堆决定*渲染什么*，协作调度决定*何时渲染*，Diff/Patch 决定*什么发生了变化*，位掩码编码*如何变化*，双缓冲确保切换是原子的。

参见[模式如何协作](/zh/guide/pattern-connections)了解完整的交互式组合图。

想深入了解其中三个模式——位掩码、最小堆、协作调度——如何相互咬合，且每一处论断都由源码佐证，可阅读 [React Fiber 案例研究](/zh/case-studies/react-fiber)。

## React 中的更多模式

| 模式 | React 中的位置 | 作用 |
|------|---------------|------|
| [批处理](/zh/patterns/batch-processing/) | `unstable_batchedUpdates` | 多次 `setState` 调用合并为一次重渲染 |
| [脏标记](/zh/patterns/dirty-flag/) | [`ReactFiberFlags.js`](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L18-L22) | Fiber 标志（`Placement`、`Update`、`Deletion`）标记需要处理的子树 |
| [观察者](/zh/patterns/observer/) | `useEffect` cleanup 模式 | 挂载时订阅，清理时取消订阅——解耦的状态观察 |

## 延伸阅读

- [React 源码 (GitHub)](https://github.com/facebook/react)
- [React Fiber 架构](https://github.com/acdlite/react-fiber-architecture)
- [React 面试准备：7/14/30 天学习计划（FrontendAtlas）](https://frontendatlas.com/guides/framework-prep/react-prep-path)

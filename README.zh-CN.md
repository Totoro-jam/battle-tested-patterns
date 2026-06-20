<div align="center">

# Battle-Tested Patterns

**从顶级开源项目源码中提炼的代码级编程模式。**

交互式可视化（支持时间旅行回放）· 精确到行号的源码链接 · 多语言实现 · 可运行练习

[📖 Documentation](https://totoro-jam.github.io/battle-tested-patterns/) · [📖 中文文档](https://totoro-jam.github.io/battle-tested-patterns/zh/)

[English](README.md) | 简体中文

[![CI](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/ci.yml/badge.svg)](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/ci.yml)
[![Deploy](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/deploy.yml/badge.svg)](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</div>

<p align="center">
  <img src=".github/screenshots/lru-cache-zh.png" alt="LRU Cache 模式 — 交互式可视化、属性表格与侧边导航" width="800" />
</p>

## 46 个模式速览

<table>
<tr>
<td width="33%">

**🧠 数据结构**
- [Bitmask](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/bitmask/) — 标志位压缩
- [Min Heap](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/min-heap/) — 优先队列
- [Ring Buffer](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/ring-buffer/) — 定长 FIFO
- [Trie](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/trie/) — 前缀搜索
- [Skip List](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/skip-list/) — 概率有序
- [Bloom Filter](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/bloom-filter/) — 集合判存
- [LRU Cache](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/lru-cache/) — 淘汰策略
- [B+ Tree](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/b-plus-tree/) — 磁盘优化索引
- [Tagged Union](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/tagged-union/) — 类型安全分发
- [Merkle Tree](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/merkle-tree/) — 完整性证明
- [Merge Iterator](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/merge-iterator/) — K 路合并

</td>
<td width="33%">

**⚡ 并发**
- [Semaphore](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/semaphore/) — 有界访问
- [Actor Model](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/actor-model/) — 消息传递
- [Work Stealing](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/work-stealing/) — 负载均衡
- [MVCC](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/mvcc/) — 快照隔离
- [Cooperative Scheduling](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/cooperative-scheduling/) — 协作让出
- [Double Buffering](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/double-buffering/) — 原子交换
- [Backpressure](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/backpressure/) — 流量控制
- [Event Loop](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/event-loop/) — I/O 多路复用
- [Logical Clock](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/logical-clock/) — 事件排序

</td>
<td width="33%">

**🏗️ 系统**
- [Circuit Breaker](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/circuit-breaker/) — 容错
- [Rate Limiter](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/rate-limiter/) — 限流
- [Retry Backoff](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/retry-backoff/) — 弹性
- [Write-Ahead Log](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/write-ahead-log/) — 持久性
- [Batch Processing](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/batch-processing/) — 吞吐
- [Consistent Hashing](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/consistent-hashing/) — 分布
- [Dependency Graph](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/dependency-graph/) — 排序
- [Middleware Chain](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/middleware-chain/) — 管道
- [Registry](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/registry/) — 自注册
- [Dirty Flag](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/dirty-flag/) — 延迟重算
- [LSM Tree](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/lsm-tree/) — 写优化存储
- [Checkpointing](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/checkpointing/) — 快照恢复

</td>
</tr>
<tr>
<td>

**♻️ 内存**
- [Object Pool](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/object-pool/) — 复用实例
- [Flyweight](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/flyweight/) — 共享不可变
- [Arena Allocator](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/arena-allocator/) — bump 分配
- [Free List](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/free-list/) — O(1) 分配释放
- [Copy-on-Write](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/copy-on-write/) — 延迟复制
- [Reference Counting](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/reference-counting/) — 自动清理
- [Tombstone](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/tombstone/) — 延迟删除
- [Interning](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/interning/) — 去重驻留

</td>
<td>

**🔄 行为型**
- [State Machine](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/state-machine/) — 状态转换
- [Observer](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/observer/) — 发布订阅
- [Iterator](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/iterator/) — 惰性求值
- [Diff / Patch](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/diff-patch/) — 最小编辑
- [Vtable](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/vtable/) — 手动多态
- [Visitor](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/visitor/) — 树遍历分发

</td>
<td>

**📊 验证来源**
- React · Linux · Go
- Redis · PostgreSQL
- Kafka · Chromium
- Tokio · Erlang/OTP
- LevelDB · RocksDB · etcd
- Nginx · Akka
- LLVM · Vue · Godot
- PyTorch · CPython · ZFS

</td>
</tr>
</table>

## 填补什么空白

| 现有资源 | 缺失的部分 |
|---------|-----------|
| 设计模式书 | 太抽象，过于 OOP |
| 算法仓库 | 脱离工程实践 |
| 系统设计指南 | 架构层面，不涉及代码级 |

本项目：**从 React、Linux、Go、Chromium 等项目中提取的代码级技巧——每个都有可验证的源码链接**。

## 编程模式

| 模式 | 做什么 | 验证来源 |
|------|--------|---------|
| [**位掩码**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/bitmask/) | 将 N 个标志打包到一个整数，O(1) 检查任意组合 | [React Flags](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L14-L36) · [Linux stat.h](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/uapi/linux/stat.h#L25-L33)|
| [**双缓冲**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/double-buffering/) | 原子交换两份副本，零分配 | [React Fiber](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiber.js#L327-L355) · [SDL](https://github.com/libsdl-org/SDL/blob/14b0e9d922da78001223e563efd2f54f473a4115/src/render/SDL_render.c)|
| [**协作调度**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/cooperative-scheduling/) | 在工作块之间让出控制权保持响应 | [React Scheduler](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/forks/Scheduler.js#L188-L258) · [Go Runtime](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/proc.go#L4143-L4200)|
| [**最小堆**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/min-heap/) | O(1) 查看最高优先级，O(log n) 插入/删除 | [React MinHeap](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/SchedulerMinHeap.js#L17-L90) · [Linux CFS](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/kernel/sched/fair.c#L1407-L1460)|
| [**差异/补丁**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/diff-patch/) | 计算两个序列之间的最小编辑 | [React Reconciler](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactChildFiber.js#L1169-L1340) · [Git](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/diff.c#L5020-L5060)|
| [**对象池**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/object-pool/) | 预分配复用对象，避免 GC 压力 | [Go sync.Pool](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/sync/pool.go#L52-L97) · [Godot](https://github.com/godotengine/godot/blob/ec67cbe92628bdaf979b10594359ba6f02cf8838/core/templates/pooled_list.h#L35-L100)|
| [**环形缓冲区**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/ring-buffer/) | 固定大小循环队列，零分配 | [LMAX Disruptor](https://github.com/LMAX-Exchange/disruptor/blob/c871ca49826a6be7ada6957f6fbafcfecf7b1f87/src/main/java/com/lmax/disruptor/RingBuffer.java#L84-L130) · [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/ring_buffer.h#L12-L70)|
| [**状态机**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/state-machine/) | 显式状态，不可能的转换不存在 | [XState](https://github.com/statelyai/xstate/blob/9d9b9f1439b773979c5120a793215f5aa4568d8f/packages/core/src/StateMachine.ts#L58-L120) · [Linux TCP](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/net/ipv4/tcp_input.c#L4865-L4920)|
| [**写时复制**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/copy-on-write/) | 引用共享，修改时才复制 | [Git objects](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/object-file.c#L719-L730) · [Rust Cow](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/alloc/src/borrow.rs#L169-L220)|
| [**观察者**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/observer/) | 订阅事件，生产者消费者解耦 | [Node EventEmitter](https://github.com/nodejs/node/blob/19c46abbefdb8711b913d7237b3c1299367f87d7/lib/events.js#L456-L520) · [Redux](https://github.com/reduxjs/redux/blob/1d761f471cf58faabe88c50ea16645212d986cd0/src/createStore.ts#L211-L280)|
| [**迭代器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/iterator/) | 惰性序列，零中间分配 | [Rust Iterator](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/core/src/iter/traits/iterator.rs#L68-L112) · [Python gen](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/genobject.c)|
| [**信号量**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/semaphore/) | 计数器限制并发 | [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/semaphore.h#L15-L55) · [Go x/sync](https://github.com/golang/sync/blob/5071ed6a9f1617117556b66384f765c934de3698/semaphore/semaphore.go)|
| [**批处理**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/batch-processing/) | 累积操作批量执行 | [Kafka](https://github.com/apache/kafka/blob/ab53829feb7280a1d453ebdaad032c4b64bb0f4d/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java#L69-L120)|
| [**指数退避重试**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/retry-backoff/) | 指数延迟 + 抖动重试 | [Kubernetes](https://github.com/kubernetes/kubernetes/blob/586cc904093af4fe7492e564908a796f0b107f97/staging/src/k8s.io/apimachinery/pkg/util/wait/backoff.go#L30-L50) · [gRPC](https://github.com/grpc/grpc/blob/19f781499b13a4890bc39d1a0e6a7909d3294de5/doc/connection-backoff.md)|
| [**事件循环**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/event-loop/) | 单线程循环通过 epoll/kqueue 复用 I/O | [libuv](https://github.com/libuv/libuv/blob/f6b713398e464a9f166328765be1703fd860981f/src/unix/core.c#L427-L492) · [Redis ae](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/ae.c#L360-L468)|
| [**享元/驻留**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/flyweight/) | 共享相同对象避免重复 | [Python int cache](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/longobject.c#L61-L75)|
| [**布隆过滤器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/bloom-filter/) | 概率集合成员测试，零漏判 | [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/util/bloom.cc#L17-L80) · [Chromium](https://github.com/chromium/chromium/blob/92b3e1f66aa55921a0ab431b7c17b25ae1f3faef/third_party/blink/renderer/core/css/selector_filter.h#L149-L175)|
| [**熔断器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/circuit-breaker/) | 停止调用故障服务，快速失败 | [Hystrix](https://github.com/Netflix/Hystrix/blob/5ce3bc58c38e7ca60ef2fe0e516e390e294ad941/hystrix-core/src/main/java/com/netflix/hystrix/HystrixCircuitBreaker.java#L138-L289) · [gobreaker](https://github.com/sony/gobreaker/blob/fed8e9eb35f9cd3e5c2a67842c924346c3e1fbdd/gobreaker.go#L117-L131)|
| [**Arena 分配器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/arena-allocator/) | 区域内推进指针分配，一次性释放 | [bumpalo](https://github.com/fitzgen/bumpalo/blob/d2cc4dd0b8830d5b05d44e9decc776823e6a70ea/src/lib.rs#L378-L383) · [Go arena](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/arena/arena.go#L44-L67)|
| [**B+ 树**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/b-plus-tree/) | 高扇出平衡树——内部节点引导，叶节点存储并链接用于范围扫描 | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/nbtree/nbtinsert.c#L22-L55) · [SQLite](https://github.com/sqlite/sqlite/blob/2cb57d9d4ac7eac3b1d15cfa71511f54817cb3e4/src/btreeInt.h#L190-L198)|
| [**背压**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/backpressure/) | 消费者跟不上时减慢生产者 | [Node.js Streams](https://github.com/nodejs/node/blob/19c46abbefdb8711b913d7237b3c1299367f87d7/lib/internal/streams/writable.js#L312-L370) · [Reactive Streams](https://github.com/reactive-streams/reactive-streams-jvm/blob/a625d3aba756e9842ad1291a5b73f5db280b6168/api/src/main/java/org/reactivestreams/Subscription.java#L14-L37)|
| [**预写日志**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/write-ahead-log/) | 应用前先记录变更，崩溃可恢复 | [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/wal/wal.go#L72-L95) · [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/transam/xlog.c)|
| [**逻辑时钟**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/logical-clock/) | 单调递增计数器，无需物理时钟即可排序事件 | [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/mvcc/kvstore.go#L53-L72) · [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/dbformat.h#L62-L66)|
| [**LRU 缓存**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/lru-cache/) | 淘汰最近最少使用，O(1) get/put | [groupcache](https://github.com/golang/groupcache/blob/2c02b8208cf8c02a3e358cb1d9b60950647543fc/lru/lru.go#L28-L76) · [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/list_lru.h#L15-L55)|
| [**一致性哈希**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/consistent-hashing/) | 添加/移除节点只重映射约 1/n | [groupcache](https://github.com/golang/groupcache/blob/2c02b8208cf8c02a3e358cb1d9b60950647543fc/consistenthash/consistenthash.go#L28-L81) · [HAProxy](https://github.com/haproxy/haproxy/blob/fb38e40ad5751090992cde15d919866b1e91b8aa/src/lb_chash.c#L415-L491)|
| [**Trie 前缀树**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/trie/) | 按键长度 O(k) 查找 | [Linux FIB](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/net/ipv4/fib_trie.c#L80-L120) · [Redis rax](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/rax.h#L80-L130)|
| [**跳表**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/skip-list/) | 概率 O(log n) 有序结构 | [Redis](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/t_zset.c#L70-L130) · [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/skiplist.h#L40-L90)|
| [**限流器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/rate-limiter/) | 令牌桶控制吞吐量 | [Go rate](https://github.com/golang/time/blob/812b343c8714c317b0dad633efa6d103e554c006/rate/rate.go#L57-L66) · [Nginx](https://github.com/nginx/nginx/blob/d994f5b8220847eb8f7e4400be5f7e6eb4538e46/src/http/modules/ngx_http_limit_req_module.c#L405-L532)|
| [**引用计数**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/reference-counting/) | 原子计数器追踪所有者，归零时自动清理 | [CPython](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Include/refcount.h#L255-L310) · [Rust Arc](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/alloc/src/sync.rs#L269-L276)|
| [**注册表**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/registry/) | 组件按名自注册到全局查找表 | [TensorFlow](https://github.com/tensorflow/tensorflow/blob/b4c7e9a660badf8c8c81075fe9f781d23ed6f28a/tensorflow/core/framework/op.h#L258-L290) · [gRPC-Go](https://github.com/grpc/grpc-go/blob/f1864955bbb48efa131f6652933fa8b2189d9305/server.go#L154-L170)|
| [**工作窃取**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/work-stealing/) | 空闲线程从繁忙队列窃取 | [Go proc.go](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/proc.go#L3836-L3903) · [Tokio](https://github.com/tokio-rs/tokio/blob/bde89678532a8091d958268c0d36eac9362317d8/tokio/src/runtime/scheduler/multi_thread/worker.rs#L1136-L1175)|
| [**MVCC**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/mvcc/) | 带时间戳版本，读者不阻塞 | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/heap/heapam_visibility.c#L917-L1096) · [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/mvcc/kvstore.go#L53-L135)|
| [**空闲链表**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/free-list/) | O(1) 分配/释放 | [Go mfixalloc](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/mfixalloc.go#L31-L109) · [Linux SLUB](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/mm/slub.c#L530-L551)|
| [**依赖图**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/dependency-graph/) | DAG + 拓扑排序 | [Cargo](https://github.com/rust-lang/cargo/blob/b50aa179d3d1099b53548bc8693dd17ddd019ab4/src/cargo/core/resolver/dep_cache.rs#L1-L50) · [pnpm](https://github.com/pnpm/pnpm/blob/46fd26afc9926b4391636a851ae32493f9b2c9ff/workspace/projects-sorter/src/index.ts)|
| [**脏标志**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/dirty-flag/) | 变更时标记"脏"，延迟重计算直到需要时 | [Chromium/Blink](https://github.com/chromium/chromium/blob/92b3e1f66aa55921a0ab431b7c17b25ae1f3faef/third_party/blink/renderer/core/layout/layout_object.h#L1425-L1430) · [React](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L18-L22)|
| [**Actor 模型**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/actor-model/) | 私有状态+信箱，无锁 | [Akka](https://github.com/akka/akka/blob/aded7b67a9dafcb32b8a5dc95f6debce3a97c0e9/akka-actor/src/main/scala/akka/actor/Actor.scala#L476-L547) · [Erlang/OTP](https://github.com/erlang/otp/blob/1f1daf0b156853659106bbf64aa6f9b5b8400c6a/erts/emulator/beam/erl_process.h#L1043-L1205)|
| [**标签联合**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/tagged-union/) | 类型标签 + 联合体安全分发 | [Godot Variant](https://github.com/godotengine/godot/blob/ec67cbe92628bdaf979b10594359ba6f02cf8838/core/variant/variant.h#L78-L120) · [PyTorch IValue](https://github.com/pytorch/pytorch/blob/7469c0815567461107545b9cb5278846171ed828/aten/src/ATen/core/ivalue.h#L51-L96)|
| [**驻留**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/interning/) | 去重不可变值，O(1) 等值判断 | [Rust Symbol](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/compiler/rustc_span/src/symbol.rs#L24-L79) · [CPython](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/unicodeobject.c#L14416-L14472)|
| [**虚函数表**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/vtable/) | 函数指针结构体实现多态 | [Linux file_operations](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/fs.h#L2093-L2163) · [CPython PyTypeObject](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Include/cpython/object.h#L250-L340)|
| [**访问者**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/visitor/) | 对树节点分发类型特定回调 | [LLVM InstVisitor](https://github.com/llvm/llvm-project/blob/7087ea37449027cc4c73a375b542cdc397c4474b/llvm/include/llvm/IR/InstVisitor.h#L45-L107) · [Vue transforms](https://github.com/vuejs/core/blob/48ad452dd61926a59e358da3c74c5ef750ae21c4/packages/compiler-core/src/transforms/vIf.ts#L35-L60)|
| [**默克尔树**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/merkle-tree/) | 哈希逐层上推实现完整性证明 | [Git tree.c](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/tree.c#L136-L171) · [ZFS blkptr](https://github.com/openzfs/zfs/blob/7e054b2e7ea80c7c838f7fd44b7d517eea5c9d18/module/zfs/blkptr.c#L30-L77)|
| [**归并迭代器**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/merge-iterator/) | 最小堆实现 K 路有序流合并 | [LevelDB merger](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/table/merger.cc#L17-L100) · [RocksDB merge](https://github.com/facebook/rocksdb/blob/7affaee1c49ebc80cb213ad86fe7d2a3ad447da2/db/merge_helper.cc#L87-L156)|
| [**中间件链**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/middleware-chain/) | 组合处理器，每个包装下一个——双向管道 | [gRPC-Go](https://github.com/grpc/grpc-go/blob/f1864955bbb48efa131f6652933fa8b2189d9305/server.go#L1224-L1260) · [Koa.js](https://github.com/koajs/koa/blob/78efdc87df1f8d49a494f313d478814d67c3f00f/lib/application.js#L152-L204)|
| [**LSM 树**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/lsm-tree/) | 写入缓冲，刷入有序文件 | [LevelDB DBImpl](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/db_impl.cc#L1241-L1368) · [RocksDB MemTable](https://github.com/facebook/rocksdb/blob/7affaee1c49ebc80cb213ad86fe7d2a3ad447da2/db/memtable.cc#L458-L534)|
| [**检查点**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/checkpointing/) | 周期快照状态，从检查点恢复 | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/postmaster/checkpointer.c#L218-L360) · [Redis RDB](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/rdb.c#L1414-L1529)|
| [**墓碑删除**](https://totoro-jam.github.io/battle-tested-patterns/zh/patterns/tombstone/) | 标记删除而非物理删除，后台回收空间 | [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/dbformat.h#L39-L43) · [Cassandra](https://github.com/apache/cassandra/blob/3831d8265d748c21c0fef9d31d4777b134b20637/src/java/org/apache/cassandra/db/DeletionTime.java#L37-L99)|

> 每个"验证来源"链接都指向源代码的**精确行号**。不是目录，不是文件，是行。

## 模式长什么样

每个模式遵循一致的结构——以**位掩码**为例：

```text
    比特位:         7    6    5    4    3    2    1    0
                  ┌────┬────┬────┬────┬────┬────┬────┬────┐
    标志:         ｜    │    │    │ SN │ CB │ RF │ UP │ PL │
                  └────┴────┴────┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┘
                                    │    │    │    │    └── Placement  (1 << 0)
                                    │    │    │    └─────── Update     (1 << 1)
                                    │    │    └──────────── Ref        (1 << 2)
                                    │    └───────────────── Callback   (1 << 3)
                                    └────────────────────── Snapshot   (1 << 4)
```

4 种语言实现，各自地道：

```typescript
// TypeScript                          // Python
const READ  = 1 << 0;                  READ  = 1 << 0
const WRITE = 1 << 1;                  WRITE = 1 << 1
const perms = READ | WRITE;            perms = READ | WRITE
(perms & READ) !== 0;  // true         bool(perms & READ)  # True
```

然后是 2 个难度等级的练习——全部配套可运行测试。

## 项目亮点

| 特性 | 详情 |
|------|------|
| 46 个模式 | Bitmask、LRU Cache、MVCC、Work Stealing、Actor Model 等 |
| 46 个交互式可视化 | 可点击、可拖拽的 SVG 可视化，动手操作建立直觉，还能用播放栏撤销或回放任意步骤 |
| 93 个 TS 练习 + 每语言 46 个 | 4 种语言（TS/Rust/Go/Python），共 1,073+ 个测试用例 |
| 184 个挑战题 | "你猜会怎样"场景问答，验证真正理解 |
| 9 个系统案例 | React、Linux、Go、Git、Node.js、Rust、游戏引擎、分布式系统如何组合模式 |
| 4 种语言 | TypeScript、Go、Python、Rust 地道实现 |
| 双语 | 完整中英文文档 |
| 学习指南 | [学习路径](https://totoro-jam.github.io/battle-tested-patterns/zh/guide/learning-paths) · [复杂度速查表](https://totoro-jam.github.io/battle-tested-patterns/zh/guide/complexity) · [模式对比](https://totoro-jam.github.io/battle-tested-patterns/zh/guide/pattern-comparison) · [学习计划](STUDY_PLAN.md) |

## 快速开始

### 前置依赖

| 工具 | 版本 | 用途 |
|------|------|------|
| [Node.js](https://nodejs.org/) | ≥ 22 | 文档站、TypeScript 练习 |
| [pnpm](https://pnpm.io/) | ≥ 9 | 包管理器 |
| [Rust](https://rustup.rs/) | stable | Rust 练习（可选） |
| [Go](https://go.dev/) | ≥ 1.23 | Go 练习（可选） |
| [Python](https://python.org/) | ≥ 3.10 | Python 练习（可选） |

```bash
git clone https://github.com/Totoro-jam/battle-tested-patterns.git
cd battle-tested-patterns && pnpm install

# 运行任意语言的练习
pnpm test:exercises               # 全部 4 种语言（TS/Rust/Go/Python）
pnpm test:ts                      # 仅 TypeScript（491 个测试，Vitest）
pnpm test:rust                    # 仅 Rust（173 个测试）
pnpm test:go                      # 仅 Go（176 个测试）
pnpm test:python                  # 仅 Python（233 个测试）

pnpm test                         # 运行全部测试：docs 组件 + 4 种语言的练习

pnpm dev                          # 本地文档站
```

各语言详细设置请参考[练习指南](https://totoro-jam.github.io/battle-tested-patterns/zh/guide/exercises)。

## 参与贡献

详见 [CONTRIBUTING.md](.github/CONTRIBUTING.md)。门槛不低：

1. **≥ 2 个生产验证** — 精确到行号的已验证源码链接
2. **TypeScript + ≥ 1 种其他语言** — 地道实现，不是翻译
3. **4 种语言的练习文件**（TS/Rust/Go/Python）+ 答案文件
4. **中文翻译**且代码块一致
5. 所有测试通过（`pnpm test` 一次运行 4 种语言 + docs），无 lint 错误
6. 源码链接每周由 CI 自动检查——失效链接自动开 Issue

## 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="14.28%"><a href="https://github.com/Totoro-jam"><img src="https://avatars.githubusercontent.com/u/62227038?v=4?s=100" width="100px;" alt="Totoro-jam"/><br /><sub><b>Totoro-jam</b></sub></a><br /><a href="https://github.com/Totoro-jam/battle-tested-patterns/commits?author=Totoro-jam" title="Code">💻</a> <a href="https://github.com/Totoro-jam/battle-tested-patterns/commits?author=Totoro-jam" title="Documentation">📖</a> <a href="#design-Totoro-jam" title="Design">🎨</a> <a href="#maintenance-Totoro-jam" title="Maintenance">🚧</a> <a href="#ideas-Totoro-jam" title="Ideas, Planning, & Feedback">🤔</a></td>
      <td align="center" valign="top" width="14.28%"><a href="http://www.cyberfeng.com"><img src="https://avatars.githubusercontent.com/u/540892?v=4?s=100" width="100px;" alt="Raymond Feng"/><br /><sub><b>Raymond Feng</b></sub></a><br /><a href="https://github.com/Totoro-jam/battle-tested-patterns/commits?author=raymondfeng" title="Code">💻</a> <a href="https://github.com/Totoro-jam/battle-tested-patterns/commits?author=raymondfeng" title="Documentation">📖</a> <a href="#ideas-raymondfeng" title="Ideas, Planning, & Feedback">🤔</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

本项目遵循 [all-contributors](https://github.com/all-contributors/all-contributors) 规范。欢迎任何形式的贡献！

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Totoro-jam/battle-tested-patterns&type=Date)](https://star-history.com/#Totoro-jam/battle-tested-patterns&Date)

## 许可证

[MIT](LICENSE) © Totoro-jam

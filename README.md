<div align="center">

# Battle-Tested Patterns

**Code-level programming patterns extracted from production codebases.**

Interactive visualizations with time-travel playback · Precise source links · Multi-language · Runnable exercises

[📖 Documentation](https://totoro-jam.github.io/battle-tested-patterns/) · [📖 中文文档](https://totoro-jam.github.io/battle-tested-patterns/zh/)

English | [简体中文](README.zh-CN.md)

[![CI](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/ci.yml/badge.svg)](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/ci.yml)
[![Deploy](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/deploy.yml/badge.svg)](https://github.com/Totoro-jam/battle-tested-patterns/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](.github/CONTRIBUTING.md)

</div>

<p align="center">
  <img src=".github/screenshots/lru-cache-en.png" alt="LRU Cache pattern — interactive visualization, property table, and sidebar navigation" width="800" />
</p>

## 46 Patterns at a Glance

<table>
<tr>
<td width="33%">

**🧠 Data Structures**
- [Bitmask](https://totoro-jam.github.io/battle-tested-patterns/patterns/bitmask/) — flags in one int
- [Min Heap](https://totoro-jam.github.io/battle-tested-patterns/patterns/min-heap/) — priority queue
- [Ring Buffer](https://totoro-jam.github.io/battle-tested-patterns/patterns/ring-buffer/) — fixed-size FIFO
- [Trie](https://totoro-jam.github.io/battle-tested-patterns/patterns/trie/) — prefix search
- [Skip List](https://totoro-jam.github.io/battle-tested-patterns/patterns/skip-list/) — probabilistic order
- [Bloom Filter](https://totoro-jam.github.io/battle-tested-patterns/patterns/bloom-filter/) — set membership
- [LRU Cache](https://totoro-jam.github.io/battle-tested-patterns/patterns/lru-cache/) — eviction policy
- [B+ Tree](https://totoro-jam.github.io/battle-tested-patterns/patterns/b-plus-tree/) — disk-optimized index
- [Tagged Union](https://totoro-jam.github.io/battle-tested-patterns/patterns/tagged-union/) — type-safe dispatch
- [Merkle Tree](https://totoro-jam.github.io/battle-tested-patterns/patterns/merkle-tree/) — integrity proof
- [Merge Iterator](https://totoro-jam.github.io/battle-tested-patterns/patterns/merge-iterator/) — k-way merge

</td>
<td width="33%">

**⚡ Concurrency**
- [Semaphore](https://totoro-jam.github.io/battle-tested-patterns/patterns/semaphore/) — bounded access
- [Actor Model](https://totoro-jam.github.io/battle-tested-patterns/patterns/actor-model/) — message passing
- [Work Stealing](https://totoro-jam.github.io/battle-tested-patterns/patterns/work-stealing/) — load balance
- [MVCC](https://totoro-jam.github.io/battle-tested-patterns/patterns/mvcc/) — snapshot isolation
- [Cooperative Scheduling](https://totoro-jam.github.io/battle-tested-patterns/patterns/cooperative-scheduling/) — yield control
- [Double Buffering](https://totoro-jam.github.io/battle-tested-patterns/patterns/double-buffering/) — atomic swap
- [Backpressure](https://totoro-jam.github.io/battle-tested-patterns/patterns/backpressure/) — flow control
- [Event Loop](https://totoro-jam.github.io/battle-tested-patterns/patterns/event-loop/) — I/O multiplexing
- [Logical Clock](https://totoro-jam.github.io/battle-tested-patterns/patterns/logical-clock/) — event ordering

</td>
<td width="33%">

**🏗️ Systems**
- [Circuit Breaker](https://totoro-jam.github.io/battle-tested-patterns/patterns/circuit-breaker/) — fault tolerance
- [Rate Limiter](https://totoro-jam.github.io/battle-tested-patterns/patterns/rate-limiter/) — throttle
- [Retry Backoff](https://totoro-jam.github.io/battle-tested-patterns/patterns/retry-backoff/) — resilience
- [Write-Ahead Log](https://totoro-jam.github.io/battle-tested-patterns/patterns/write-ahead-log/) — durability
- [Batch Processing](https://totoro-jam.github.io/battle-tested-patterns/patterns/batch-processing/) — throughput
- [Consistent Hashing](https://totoro-jam.github.io/battle-tested-patterns/patterns/consistent-hashing/) — distribution
- [Dependency Graph](https://totoro-jam.github.io/battle-tested-patterns/patterns/dependency-graph/) — ordering
- [Middleware Chain](https://totoro-jam.github.io/battle-tested-patterns/patterns/middleware-chain/) — pipeline
- [Registry](https://totoro-jam.github.io/battle-tested-patterns/patterns/registry/) — self-register
- [Dirty Flag](https://totoro-jam.github.io/battle-tested-patterns/patterns/dirty-flag/) — deferred recompute
- [LSM Tree](https://totoro-jam.github.io/battle-tested-patterns/patterns/lsm-tree/) — write-optimized store
- [Checkpointing](https://totoro-jam.github.io/battle-tested-patterns/patterns/checkpointing/) — snapshot recovery

</td>
</tr>
<tr>
<td>

**♻️ Memory**
- [Object Pool](https://totoro-jam.github.io/battle-tested-patterns/patterns/object-pool/) — reuse instances
- [Flyweight](https://totoro-jam.github.io/battle-tested-patterns/patterns/flyweight/) — share immutables
- [Arena Allocator](https://totoro-jam.github.io/battle-tested-patterns/patterns/arena-allocator/) — bump alloc
- [Free List](https://totoro-jam.github.io/battle-tested-patterns/patterns/free-list/) — O(1) alloc/free
- [Copy-on-Write](https://totoro-jam.github.io/battle-tested-patterns/patterns/copy-on-write/) — defer copy
- [Reference Counting](https://totoro-jam.github.io/battle-tested-patterns/patterns/reference-counting/) — auto-cleanup
- [Tombstone](https://totoro-jam.github.io/battle-tested-patterns/patterns/tombstone/) — deferred deletion
- [Interning](https://totoro-jam.github.io/battle-tested-patterns/patterns/interning/) — deduplicate values

</td>
<td>

**🔄 Behavioral**
- [State Machine](https://totoro-jam.github.io/battle-tested-patterns/patterns/state-machine/) — transitions
- [Observer](https://totoro-jam.github.io/battle-tested-patterns/patterns/observer/) — pub/sub
- [Iterator](https://totoro-jam.github.io/battle-tested-patterns/patterns/iterator/) — lazy eval
- [Diff / Patch](https://totoro-jam.github.io/battle-tested-patterns/patterns/diff-patch/) — minimal edits
- [Vtable](https://totoro-jam.github.io/battle-tested-patterns/patterns/vtable/) — manual polymorphism
- [Visitor](https://totoro-jam.github.io/battle-tested-patterns/patterns/visitor/) — tree traversal dispatch

</td>
<td>

**📊 Proven In**
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

## The Gap This Fills

| What exists | What's missing |
|------------|----------------|
| Design patterns books | Too abstract, too OOP-centric |
| Algorithm repos | Disconnected from real engineering |
| System design guides | Architecture-level, not code-level |

This project: **code-level techniques from React, Linux, Go, Chromium — each with verifiable source links**.

## Patterns

| Pattern | What It Does | Proven In |
|---------|-------------|-----------|
| [**Bitmask**](https://totoro-jam.github.io/battle-tested-patterns/patterns/bitmask/) | Pack N flags into one integer, check any combo in O(1) | [React Flags](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L14-L36) · [Linux stat.h](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/uapi/linux/stat.h#L25-L33)|
| [**Double Buffering**](https://totoro-jam.github.io/battle-tested-patterns/patterns/double-buffering/) | Swap two copies atomically, zero allocation | [React Fiber](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiber.js#L327-L355) · [SDL](https://github.com/libsdl-org/SDL/blob/14b0e9d922da78001223e563efd2f54f473a4115/src/render/SDL_render.c)|
| [**Cooperative Scheduling**](https://totoro-jam.github.io/battle-tested-patterns/patterns/cooperative-scheduling/) | Yield control between work chunks to stay responsive | [React Scheduler](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/forks/Scheduler.js#L188-L258) · [Go Runtime](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/proc.go#L4143-L4200)|
| [**Min Heap**](https://totoro-jam.github.io/battle-tested-patterns/patterns/min-heap/) | O(1) peek at highest priority, O(log n) push/pop | [React MinHeap](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/scheduler/src/SchedulerMinHeap.js#L17-L90) · [Linux CFS](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/kernel/sched/fair.c#L1407-L1460)|
| [**Diff / Patch**](https://totoro-jam.github.io/battle-tested-patterns/patterns/diff-patch/) | Compute minimal edits between two sequences | [React Reconciler](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactChildFiber.js#L1169-L1340) · [Git](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/diff.c#L5020-L5060)|
| [**Object Pool**](https://totoro-jam.github.io/battle-tested-patterns/patterns/object-pool/) | Pre-allocate and reuse to avoid GC pressure | [Go sync.Pool](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/sync/pool.go#L52-L97) · [Godot](https://github.com/godotengine/godot/blob/ec67cbe92628bdaf979b10594359ba6f02cf8838/core/templates/pooled_list.h#L35-L100)|
| [**Ring Buffer**](https://totoro-jam.github.io/battle-tested-patterns/patterns/ring-buffer/) | Fixed-size circular queue, zero allocation | [LMAX Disruptor](https://github.com/LMAX-Exchange/disruptor/blob/c871ca49826a6be7ada6957f6fbafcfecf7b1f87/src/main/java/com/lmax/disruptor/RingBuffer.java#L84-L130) · [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/ring_buffer.h#L12-L70)|
| [**State Machine**](https://totoro-jam.github.io/battle-tested-patterns/patterns/state-machine/) | Explicit states, impossible transitions unrepresentable | [XState](https://github.com/statelyai/xstate/blob/9d9b9f1439b773979c5120a793215f5aa4568d8f/packages/core/src/StateMachine.ts#L58-L120) · [Linux TCP](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/net/ipv4/tcp_input.c#L4865-L4920)|
| [**Copy-on-Write**](https://totoro-jam.github.io/battle-tested-patterns/patterns/copy-on-write/) | Share by reference, copy only on mutation | [Git objects](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/object-file.c#L719-L730) · [Rust Cow](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/alloc/src/borrow.rs#L169-L220)|
| [**Observer**](https://totoro-jam.github.io/battle-tested-patterns/patterns/observer/) | Subscribe to events, decouple producers from consumers | [Node EventEmitter](https://github.com/nodejs/node/blob/19c46abbefdb8711b913d7237b3c1299367f87d7/lib/events.js#L456-L520) · [Redux](https://github.com/reduxjs/redux/blob/1d761f471cf58faabe88c50ea16645212d986cd0/src/createStore.ts#L211-L280)|
| [**Iterator**](https://totoro-jam.github.io/battle-tested-patterns/patterns/iterator/) | Lazy sequences, zero intermediate allocations | [Rust Iterator](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/core/src/iter/traits/iterator.rs#L68-L112) · [Python gen](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/genobject.c)|
| [**Semaphore**](https://totoro-jam.github.io/battle-tested-patterns/patterns/semaphore/) | Bounded concurrency with a counter | [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/semaphore.h#L15-L55) · [Go x/sync](https://github.com/golang/sync/blob/5071ed6a9f1617117556b66384f765c934de3698/semaphore/semaphore.go)|
| [**Batch Processing**](https://totoro-jam.github.io/battle-tested-patterns/patterns/batch-processing/) | Accumulate ops, execute as group | [Kafka](https://github.com/apache/kafka/blob/ab53829feb7280a1d453ebdaad032c4b64bb0f4d/clients/src/main/java/org/apache/kafka/clients/producer/internals/RecordAccumulator.java#L69-L120)|
| [**Retry with Backoff**](https://totoro-jam.github.io/battle-tested-patterns/patterns/retry-backoff/) | Exponential delay + jitter on failure | [Kubernetes](https://github.com/kubernetes/kubernetes/blob/586cc904093af4fe7492e564908a796f0b107f97/staging/src/k8s.io/apimachinery/pkg/util/wait/backoff.go#L30-L50) · [gRPC](https://github.com/grpc/grpc/blob/19f781499b13a4890bc39d1a0e6a7909d3294de5/doc/connection-backoff.md)|
| [**Event Loop**](https://totoro-jam.github.io/battle-tested-patterns/patterns/event-loop/) | Single-threaded loop multiplexes I/O via epoll/kqueue | [libuv](https://github.com/libuv/libuv/blob/f6b713398e464a9f166328765be1703fd860981f/src/unix/core.c#L427-L492) · [Redis ae](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/ae.c#L360-L468)|
| [**Flyweight**](https://totoro-jam.github.io/battle-tested-patterns/patterns/flyweight/) | Share identical objects, avoid duplicates | [Python int cache](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/longobject.c#L61-L75)|
| [**Bloom Filter**](https://totoro-jam.github.io/battle-tested-patterns/patterns/bloom-filter/) | Probabilistic set membership, zero false negatives | [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/util/bloom.cc#L17-L80) · [Chromium](https://github.com/chromium/chromium/blob/92b3e1f66aa55921a0ab431b7c17b25ae1f3faef/third_party/blink/renderer/core/css/selector_filter.h#L149-L175)|
| [**Circuit Breaker**](https://totoro-jam.github.io/battle-tested-patterns/patterns/circuit-breaker/) | Stop calling failing services, fail fast | [Hystrix](https://github.com/Netflix/Hystrix/blob/5ce3bc58c38e7ca60ef2fe0e516e390e294ad941/hystrix-core/src/main/java/com/netflix/hystrix/HystrixCircuitBreaker.java#L138-L289) · [gobreaker](https://github.com/sony/gobreaker/blob/fed8e9eb35f9cd3e5c2a67842c924346c3e1fbdd/gobreaker.go#L117-L131)|
| [**Arena Allocator**](https://totoro-jam.github.io/battle-tested-patterns/patterns/arena-allocator/) | Bump-allocate, free all at once | [bumpalo](https://github.com/fitzgen/bumpalo/blob/d2cc4dd0b8830d5b05d44e9decc776823e6a70ea/src/lib.rs#L378-L383) · [Go arena](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/arena/arena.go#L44-L67)|
| [**B+ Tree**](https://totoro-jam.github.io/battle-tested-patterns/patterns/b-plus-tree/) | High-fanout balanced tree — internal nodes guide, leaves store and link for range scans | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/nbtree/nbtinsert.c#L22-L55) · [SQLite](https://github.com/sqlite/sqlite/blob/2cb57d9d4ac7eac3b1d15cfa71511f54817cb3e4/src/btreeInt.h#L190-L198)|
| [**Backpressure**](https://totoro-jam.github.io/battle-tested-patterns/patterns/backpressure/) | Slow producers when consumers can't keep up | [Node.js Streams](https://github.com/nodejs/node/blob/19c46abbefdb8711b913d7237b3c1299367f87d7/lib/internal/streams/writable.js#L312-L370) · [Reactive Streams](https://github.com/reactive-streams/reactive-streams-jvm/blob/a625d3aba756e9842ad1291a5b73f5db280b6168/api/src/main/java/org/reactivestreams/Subscription.java#L14-L37)|
| [**Write-Ahead Log**](https://totoro-jam.github.io/battle-tested-patterns/patterns/write-ahead-log/) | Log mutations before applying, crash recovery | [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/wal/wal.go#L72-L95) · [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/transam/xlog.c)|
| [**Logical Clock**](https://totoro-jam.github.io/battle-tested-patterns/patterns/logical-clock/) | Monotonic counter orders events without wall-clock time | [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/mvcc/kvstore.go#L53-L72) · [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/dbformat.h#L62-L66)|
| [**LRU Cache**](https://totoro-jam.github.io/battle-tested-patterns/patterns/lru-cache/) | Evict least recently used, O(1) get/put | [groupcache](https://github.com/golang/groupcache/blob/2c02b8208cf8c02a3e358cb1d9b60950647543fc/lru/lru.go#L28-L76) · [Linux](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/list_lru.h#L15-L55)|
| [**Consistent Hashing**](https://totoro-jam.github.io/battle-tested-patterns/patterns/consistent-hashing/) | Add/remove nodes remaps ~1/n keys | [groupcache](https://github.com/golang/groupcache/blob/2c02b8208cf8c02a3e358cb1d9b60950647543fc/consistenthash/consistenthash.go#L28-L81) · [HAProxy](https://github.com/haproxy/haproxy/blob/fb38e40ad5751090992cde15d919866b1e91b8aa/src/lb_chash.c#L415-L491)|
| [**Trie**](https://totoro-jam.github.io/battle-tested-patterns/patterns/trie/) | O(k) lookup, shared prefixes share nodes | [Linux FIB](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/net/ipv4/fib_trie.c#L80-L120) · [Redis rax](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/rax.h#L80-L130)|
| [**Skip List**](https://totoro-jam.github.io/battle-tested-patterns/patterns/skip-list/) | Probabilistic O(log n) sorted structure | [Redis](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/t_zset.c#L70-L130) · [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/skiplist.h#L40-L90)|
| [**Rate Limiter**](https://totoro-jam.github.io/battle-tested-patterns/patterns/rate-limiter/) | Token bucket controls throughput | [Go rate](https://github.com/golang/time/blob/812b343c8714c317b0dad633efa6d103e554c006/rate/rate.go#L57-L66) · [Nginx](https://github.com/nginx/nginx/blob/d994f5b8220847eb8f7e4400be5f7e6eb4538e46/src/http/modules/ngx_http_limit_req_module.c#L405-L532)|
| [**Reference Counting**](https://totoro-jam.github.io/battle-tested-patterns/patterns/reference-counting/) | Atomic counter tracks owners, auto-cleanup at zero | [CPython](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Include/refcount.h#L255-L310) · [Rust Arc](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/library/alloc/src/sync.rs#L269-L276)|
| [**Registry**](https://totoro-jam.github.io/battle-tested-patterns/patterns/registry/) | Components self-register into a global lookup table by name | [TensorFlow](https://github.com/tensorflow/tensorflow/blob/b4c7e9a660badf8c8c81075fe9f781d23ed6f28a/tensorflow/core/framework/op.h#L258-L290) · [gRPC-Go](https://github.com/grpc/grpc-go/blob/f1864955bbb48efa131f6652933fa8b2189d9305/server.go#L154-L170)|
| [**Work Stealing**](https://totoro-jam.github.io/battle-tested-patterns/patterns/work-stealing/) | Idle threads steal from busy queues | [Go proc.go](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/proc.go#L3836-L3903) · [Tokio](https://github.com/tokio-rs/tokio/blob/bde89678532a8091d958268c0d36eac9362317d8/tokio/src/runtime/scheduler/multi_thread/worker.rs#L1136-L1175)|
| [**MVCC**](https://totoro-jam.github.io/battle-tested-patterns/patterns/mvcc/) | Timestamped versions, readers never block | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/access/heap/heapam_visibility.c#L917-L1096) · [etcd](https://github.com/etcd-io/etcd/blob/e9b62f804766edf77cfa918d600cb6fb2c56b401/server/storage/mvcc/kvstore.go#L53-L135)|
| [**Free List**](https://totoro-jam.github.io/battle-tested-patterns/patterns/free-list/) | O(1) alloc/free via linked freed slots | [Go mfixalloc](https://github.com/golang/go/blob/f5cdf4745455415c7a43cfc7d925214d4511489b/src/runtime/mfixalloc.go#L31-L109) · [Linux SLUB](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/mm/slub.c#L530-L551)|
| [**Dependency Graph**](https://totoro-jam.github.io/battle-tested-patterns/patterns/dependency-graph/) | DAG + toposort for execution order | [Cargo](https://github.com/rust-lang/cargo/blob/b50aa179d3d1099b53548bc8693dd17ddd019ab4/src/cargo/core/resolver/dep_cache.rs#L1-L50) · [pnpm](https://github.com/pnpm/pnpm/blob/46fd26afc9926b4391636a851ae32493f9b2c9ff/workspace/projects-sorter/src/index.ts)|
| [**Dirty Flag**](https://totoro-jam.github.io/battle-tested-patterns/patterns/dirty-flag/) | Mark "dirty" on mutation, defer recomputation until needed | [Chromium/Blink](https://github.com/chromium/chromium/blob/92b3e1f66aa55921a0ab431b7c17b25ae1f3faef/third_party/blink/renderer/core/layout/layout_object.h#L1425-L1430) · [React](https://github.com/facebook/react/blob/34b78a2897cc208260a88e6b62ecaf9ca2a9dfe4/packages/react-reconciler/src/ReactFiberFlags.js#L18-L22)|
| [**Actor Model**](https://totoro-jam.github.io/battle-tested-patterns/patterns/actor-model/) | Private state + mailbox, no locks | [Akka](https://github.com/akka/akka/blob/aded7b67a9dafcb32b8a5dc95f6debce3a97c0e9/akka-actor/src/main/scala/akka/actor/Actor.scala#L476-L547) · [Erlang/OTP](https://github.com/erlang/otp/blob/1f1daf0b156853659106bbf64aa6f9b5b8400c6a/erts/emulator/beam/erl_process.h#L1043-L1205)|
| [**Tagged Union**](https://totoro-jam.github.io/battle-tested-patterns/patterns/tagged-union/) | Type tag + union for safe dispatch | [Godot Variant](https://github.com/godotengine/godot/blob/ec67cbe92628bdaf979b10594359ba6f02cf8838/core/variant/variant.h#L78-L120) · [PyTorch IValue](https://github.com/pytorch/pytorch/blob/7469c0815567461107545b9cb5278846171ed828/aten/src/ATen/core/ivalue.h#L51-L96)|
| [**Interning**](https://totoro-jam.github.io/battle-tested-patterns/patterns/interning/) | Deduplicate values, O(1) equality | [Rust Symbol](https://github.com/rust-lang/rust/blob/ab26b175979ee7b2cb3302dce204b99df96f7efb/compiler/rustc_span/src/symbol.rs#L24-L79) · [CPython](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Objects/unicodeobject.c#L14416-L14472)|
| [**Vtable**](https://totoro-jam.github.io/battle-tested-patterns/patterns/vtable/) | Function pointer struct for polymorphism | [Linux file_operations](https://github.com/torvalds/linux/blob/acb7500801e98639f6d8c2d796ed9f64cba83d3a/include/linux/fs.h#L2093-L2163) · [CPython PyTypeObject](https://github.com/python/cpython/blob/7a014f44c393fda6d1c4bd135608ebcfc21d626c/Include/cpython/object.h#L250-L340)|
| [**Visitor**](https://totoro-jam.github.io/battle-tested-patterns/patterns/visitor/) | Dispatch callbacks on tree nodes | [LLVM InstVisitor](https://github.com/llvm/llvm-project/blob/7087ea37449027cc4c73a375b542cdc397c4474b/llvm/include/llvm/IR/InstVisitor.h#L45-L107) · [Vue transforms](https://github.com/vuejs/core/blob/48ad452dd61926a59e358da3c74c5ef750ae21c4/packages/compiler-core/src/transforms/vIf.ts#L35-L60)|
| [**Merkle Tree**](https://totoro-jam.github.io/battle-tested-patterns/patterns/merkle-tree/) | Hash upward to root for integrity | [Git tree.c](https://github.com/git/git/blob/1ff279f3404a482a83fb04c7457e41ab26884aea/tree.c#L136-L171) · [ZFS blkptr](https://github.com/openzfs/zfs/blob/7e054b2e7ea80c7c838f7fd44b7d517eea5c9d18/module/zfs/blkptr.c#L30-L77)|
| [**Merge Iterator**](https://totoro-jam.github.io/battle-tested-patterns/patterns/merge-iterator/) | K-way merge of sorted streams | [LevelDB merger](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/table/merger.cc#L17-L100) · [RocksDB merge](https://github.com/facebook/rocksdb/blob/7affaee1c49ebc80cb213ad86fe7d2a3ad447da2/db/merge_helper.cc#L87-L156)|
| [**Middleware Chain**](https://totoro-jam.github.io/battle-tested-patterns/patterns/middleware-chain/) | Compose handlers where each wraps the next — bidirectional pipeline | [gRPC-Go](https://github.com/grpc/grpc-go/blob/f1864955bbb48efa131f6652933fa8b2189d9305/server.go#L1224-L1260) · [Koa.js](https://github.com/koajs/koa/blob/78efdc87df1f8d49a494f313d478814d67c3f00f/lib/application.js#L152-L204)|
| [**LSM Tree**](https://totoro-jam.github.io/battle-tested-patterns/patterns/lsm-tree/) | Buffer writes, flush to sorted files | [LevelDB DBImpl](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/db_impl.cc#L1241-L1368) · [RocksDB MemTable](https://github.com/facebook/rocksdb/blob/7affaee1c49ebc80cb213ad86fe7d2a3ad447da2/db/memtable.cc#L458-L534)|
| [**Checkpointing**](https://totoro-jam.github.io/battle-tested-patterns/patterns/checkpointing/) | Snapshot state, recover from checkpoint | [PostgreSQL](https://github.com/postgres/postgres/blob/e18b0cb7344cb4bd28468f6c0aeeb9b9241d30aa/src/backend/postmaster/checkpointer.c#L218-L360) · [Redis RDB](https://github.com/redis/redis/blob/df63a65d4d4ee33ae67e9f101885074febe0bccb/src/rdb.c#L1414-L1529)|
| [**Tombstone**](https://totoro-jam.github.io/battle-tested-patterns/patterns/tombstone/) | Mark deleted with a tombstone, background reclaims later | [LevelDB](https://github.com/google/leveldb/blob/7ee830d02b623e8ffe0b95d59a74db1e58da04c5/db/dbformat.h#L39-L43) · [Cassandra](https://github.com/apache/cassandra/blob/3831d8265d748c21c0fef9d31d4777b134b20637/src/java/org/apache/cassandra/db/DeletionTime.java#L37-L99)|

> Every "Proven In" link goes to the **exact lines** in the source code. Not a directory. Not a file. The lines.

## What a Pattern Looks Like

Each pattern follows a consistent structure — here's a taste from **Bitmask**:

```text
  Bit position:   7    6    5    4    3    2    1    0
                ┌────┬────┬────┬────┬────┬────┬────┬────┐
  Flags:        │    │    │    │ SN │ CB │ RF │ UP │ PL │
                └────┴────┴────┴──┬─┴──┬─┴──┬─┴──┬─┴──┬─┘
                                  │    │    │    │    └── Placement  (1 << 0)
                                  │    │    │    └─────── Update     (1 << 1)
                                  │    │    └──────────── Ref        (1 << 2)
                                  │    └───────────────── Callback   (1 << 3)
                                  └────────────────────── Snapshot   (1 << 4)
```

Implementations in 4 languages, each idiomatic:

```typescript
// TypeScript                          // Python
const READ  = 1 << 0;                  READ  = 1 << 0
const WRITE = 1 << 1;                  WRITE = 1 << 1
const perms = READ | WRITE;            perms = READ | WRITE
(perms & READ) !== 0;  // true         bool(perms & READ)  # True
```

Then exercises at 2 difficulty levels — all with tests you can run.

## What's Inside

| Feature | Details |
|---------|---------|
| 46 patterns | Bitmask, LRU Cache, MVCC, Work Stealing, Actor Model, and 41 more |
| 46 interactive visualizations | Hands-on SVG visualizations — click, drag, experiment, then undo or replay any step with the time-travel playback bar |
| 93 TS exercises + 46 per lang | 4 languages (TS/Rust/Go/Python), 1,073+ tests across real-world scenarios |
| 184 challenge questions | "Guess what happens" scenario Q&A to test understanding |
| 9 system case studies | How React, Linux, Go, Git, Node.js, Rust, game engines, and distributed systems compose patterns |
| 4 languages | TypeScript, Go, Python, Rust — idiomatic implementations |
| Bilingual | Full English + Chinese documentation |
| Learning guides | [Learning Paths](https://totoro-jam.github.io/battle-tested-patterns/guide/learning-paths) · [Complexity Cheat Sheet](https://totoro-jam.github.io/battle-tested-patterns/guide/complexity) · [Pattern Comparison](https://totoro-jam.github.io/battle-tested-patterns/guide/pattern-comparison) · [Study Plan](STUDY_PLAN.md) |

## Quick Start

### Prerequisites

| Tool | Version | Required for |
|------|---------|-------------|
| [Node.js](https://nodejs.org/) | ≥ 22 | Docs site, TypeScript exercises |
| [pnpm](https://pnpm.io/) | ≥ 9 | Package manager |
| [Rust](https://rustup.rs/) | stable | Rust exercises (optional) |
| [Go](https://go.dev/) | ≥ 1.23 | Go exercises (optional) |
| [Python](https://python.org/) | ≥ 3.10 | Python exercises (optional) |

```bash
git clone https://github.com/Totoro-jam/battle-tested-patterns.git
cd battle-tested-patterns && pnpm install

# Run exercises in any language
pnpm test:exercises               # All 4 languages (TS/Rust/Go/Python)
pnpm test:ts                      # TypeScript only (491 tests, Vitest)
pnpm test:rust                    # Rust only   (173 tests)
pnpm test:go                      # Go only     (176 tests)
pnpm test:python                  # Python only (233 tests)

pnpm test                         # Run ALL tests: docs components + all 4 exercise languages

pnpm dev                          # Local docs site
```

See the [Exercise Guide](https://totoro-jam.github.io/battle-tested-patterns/guide/exercises) for detailed setup instructions per language.

## Contributing

See [CONTRIBUTING.md](.github/CONTRIBUTING.md). The bar is intentionally high:

1. **≥ 2 production proofs** with verified, line-number-precise source links
2. **TypeScript + ≥ 1 other language** — idiomatic, not translated
3. **Exercise files in all 4 languages** (TS/Rust/Go/Python) + answer files
4. **Chinese translation** with identical code blocks
5. All tests pass (`pnpm test` runs all 4 languages + docs), no lint errors
6. Source links checked weekly by CI — broken links auto-open an Issue

## Contributors

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

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Totoro-jam/battle-tested-patterns&type=Date)](https://star-history.com/#Totoro-jam/battle-tested-patterns&Date)

## License

[MIT](LICENSE) © Totoro-jam

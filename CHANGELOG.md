# Changelog

All notable changes to this project will be documented in this file.

See [commit history](https://github.com/Totoro-jam/battle-tested-patterns/commits/main) for detailed changes.

## [1.17.0](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.16.2...v1.17.0) (2026-09-04)


### Features

* add giscus comments to doc pages ([d996ae1](https://github.com/Totoro-jam/battle-tested-patterns/commit/d996ae193afcde0e115e0019a23042b59020f050))


### Bug Fixes

* giscus  en/zh ([98c6976](https://github.com/Totoro-jam/battle-tested-patterns/commit/98c69767076d4632882bad82c229f53fe3f20ca6))
* remount giscus on route change to keep EN/ZH threads separate ([1c70ddf](https://github.com/Totoro-jam/battle-tested-patterns/commit/1c70ddf927cc20cb6ffaa61d202682552ee1e58c))
* target giscus threads by explicit term instead of pathname remount ([f6abc02](https://github.com/Totoro-jam/battle-tested-patterns/commit/f6abc0281071c3327ba7c7b21113cf4363348db2))
* tern as const ([46b9325](https://github.com/Totoro-jam/battle-tested-patterns/commit/46b93255f53acd1cc17047ce65d858a8aac9df3f))
* wrap Giscus component in a container for improved styling ([5991972](https://github.com/Totoro-jam/battle-tested-patterns/commit/59919723987ed24a1a29af4e6bf8311f631317bd))


### Documentation

* migrate site to patterns.totorojam.com ([3ac4299](https://github.com/Totoro-jam/battle-tested-patterns/commit/3ac4299e87ab64eb52ba6d4abbb4bd1ad40a5a5b))


### Code Refactoring

* use @giscus/vue for comments instead of hand-rolled script ([11e2982](https://github.com/Totoro-jam/battle-tested-patterns/commit/11e298229e770054d575b25ad29ed11f61c40a52))

## [1.16.2](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.16.1...v1.16.2) (2026-07-09)


### Bug Fixes

* **readme:** use sealed_token for star-history chart auth ([c6bdfa9](https://github.com/Totoro-jam/battle-tested-patterns/commit/c6bdfa9309f4672e89654dc15fa9bb71877d72ee))


### Documentation

* add a1576471428 as a contributor for bug ([acd78d2](https://github.com/Totoro-jam/battle-tested-patterns/commit/acd78d2d7fc44620d948db1d20d9685c84de68db))
* update .all-contributorsrc [skip ci] ([2cabc1a](https://github.com/Totoro-jam/battle-tested-patterns/commit/2cabc1af678c218644960391aa8c5dc226680d73))
* update README.md [skip ci] ([3496411](https://github.com/Totoro-jam/battle-tested-patterns/commit/3496411acc1528edb55973482839bcfe9ef36b79))
* update README.zh-CN.md [skip ci] ([2fdddef](https://github.com/Totoro-jam/battle-tested-patterns/commit/2fdddef5102bd241db71cc8e17f331fb03ee47f2))

## [1.16.1](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.16.0...v1.16.1) (2026-07-02)


### Bug Fixes

* **circuit-breaker:** correct Q3 HALF_OPEN thundering herd answer ([0307be9](https://github.com/Totoro-jam/battle-tested-patterns/commit/0307be9d2702567840f10bddfebf91c8868711a1)), closes [#63](https://github.com/Totoro-jam/battle-tested-patterns/issues/63)

## [1.16.0](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.15.0...v1.16.0) (2026-06-20)


### Features

* **case-studies:** add SQLite, Kafka, and Lucene three-pattern studies ([987234c](https://github.com/Totoro-jam/battle-tested-patterns/commit/987234c98c133a4dfe7f2643104e3540c362cbaa))
* **skills:** add adopt-pattern and audit-patterns agent skills ([e6177b0](https://github.com/Totoro-jam/battle-tested-patterns/commit/e6177b09c43059e4a822e96f71b879647aae57d1))
* **skills:** add pattern skills as installable Claude Code plugin ([b9f5696](https://github.com/Totoro-jam/battle-tested-patterns/commit/b9f569664d751edf380bad866e5994f8460d8336))
* **skills:** make skills installable as a Claude Code plugin via marketplace ([8bafd16](https://github.com/Totoro-jam/battle-tested-patterns/commit/8bafd16ee4b7c1d9c4c12ff8b7e8f4b3f70e2aaa))


### Bug Fixes

* **check-relations:** make R3 actually validate the catalog pages ([0757ddf](https://github.com/Totoro-jam/battle-tested-patterns/commit/0757ddf30bf2477c5a37cc739cb2765dfdf45e5a))
* **ci:** use test:ts in CI TypeScript job, fix remaining doc references ([aecd3df](https://github.com/Totoro-jam/battle-tested-patterns/commit/aecd3dfd00afd5a32025b000a78e14d6d79ad702))
* **lru-cache:** correct zh tradeoff translation in Production Proof ([f6d473b](https://github.com/Totoro-jam/battle-tested-patterns/commit/f6d473b75c54f40df094c10de65e1fb8b4cd614c))
* **skip-list:** replace fake Rust answer with a real skip list ([a696ad0](https://github.com/Totoro-jam/battle-tested-patterns/commit/a696ad0a43f358554d0317436dba8e75bafbce76))
* **test:** add Python minimum version check (≥ 3.10) to toolchain probe ([e37feed](https://github.com/Totoro-jam/battle-tested-patterns/commit/e37feed63aa54a3dbee6d574b1a6c91e29b36110))
* **test:** add Python version guard + diagnostic to test:python script ([72cb51a](https://github.com/Totoro-jam/battle-tested-patterns/commit/72cb51a664e9eae68bd76e962fcb519ee93469df))
* **test:** smart Python interpreter discovery for macOS conda users ([da0c965](https://github.com/Totoro-jam/battle-tested-patterns/commit/da0c965bc08944857a8e58040884a0486f6316b7))
* **viz:** align 5 more demos with their pattern bodies ([413e329](https://github.com/Totoro-jam/battle-tested-patterns/commit/413e32964a8d4531bc6303c25241dc6df47ec286))
* **viz:** align diff-patch & backpressure demos with their pattern bodies ([56eee78](https://github.com/Totoro-jam/battle-tested-patterns/commit/56eee7898166f82462b55e281e205c9e9aefe3a9))


### Documentation

* add Agent Skills install section to README (EN + ZH) ([74c7014](https://github.com/Totoro-jam/battle-tested-patterns/commit/74c7014b978182c053fddb9422efa65b005fc8ef))
* add raymondfeng as a contributor for code, doc, and ideas ([#50](https://github.com/Totoro-jam/battle-tested-patterns/issues/50)) ([0698508](https://github.com/Totoro-jam/battle-tested-patterns/commit/06985085b98d74f7aef65cfd06bdce6e1b882e8b))
* **case-studies:** apply three-role review fixes to linux-read & go-scheduler ([0ad02fe](https://github.com/Totoro-jam/battle-tested-patterns/commit/0ad02fe32fee956089203cd943a130bf924350df))
* **event-loop:** clarify reactor vs JS loop, link JSV9000 ([a59ac95](https://github.com/Totoro-jam/battle-tested-patterns/commit/a59ac959aad2e843bc7e7418205b1ee5df24b81c))
* **go-scheduler:** fix Production Proof header to match evidence types ([2963772](https://github.com/Totoro-jam/battle-tested-patterns/commit/2963772d4215b7c6f8f1249380c4e40718fa018b))
* **patterns:** update exercise run command to test:ts in 92 pattern docs ([125f753](https://github.com/Totoro-jam/battle-tested-patterns/commit/125f75346402a179d2dcff0ef677294c3e800047))
* suppress pre-existing markdownlint MD036/MD032 in README patterns table ([c0527f6](https://github.com/Totoro-jam/battle-tested-patterns/commit/c0527f62e618ec781a9dec1d93d0c8e7e752e07e))
* sync CLAUDE.md and CONTRIBUTING with new test:python behavior ([15d1052](https://github.com/Totoro-jam/battle-tested-patterns/commit/15d10523f11deda1c70390fde77a923e0fadf7e4))
* sync SOP 04/08, PR template, and diagnose skill with unified test commands ([a033324](https://github.com/Totoro-jam/battle-tested-patterns/commit/a03332460af577a101987aea05fa78b9844efe4f))


### Code Refactoring

* **test:** rename scripts for semantic clarity and sync docs ([f8d944d](https://github.com/Totoro-jam/battle-tested-patterns/commit/f8d944d61ca698286b36823c86f720209df7aa2e))
* **viz:** raise default useVizLog max from 30 to 60 ([02cb71b](https://github.com/Totoro-jam/battle-tested-patterns/commit/02cb71b671b6409560358a5bb3e3dde3550e8352))

## [1.15.0](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.14.1...v1.15.0) (2026-06-18)


### Features

* **case-study:** add LevelDB LSM multi-pattern case study (EN+ZH) ([8cbcd23](https://github.com/Totoro-jam/battle-tested-patterns/commit/8cbcd2326a934d564445833b28c92f7507435b7b))
* **case-study:** add PostgreSQL MVCC multi-pattern case study (EN+ZH) ([54d89b3](https://github.com/Totoro-jam/battle-tested-patterns/commit/54d89b38895cff68e0b84c689e522d7176b61946))
* **case-study:** add Redis single-thread multi-pattern case study (EN+ZH) ([37e9a13](https://github.com/Totoro-jam/battle-tested-patterns/commit/37e9a13045a3a58112e6fab54790a36242dbf3f9))
* **scripts:** add structure checks for case studies (C1-C5) ([28252e6](https://github.com/Totoro-jam/battle-tested-patterns/commit/28252e60cd3cb7703acb0a76de0b1a0f0af6d9cc))
* **scripts:** extend line-range & zh-parity checks to by-project pages ([99b6bf9](https://github.com/Totoro-jam/battle-tested-patterns/commit/99b6bf9e5c817925902bdb1ca1c0152be493c82a))
* **scripts:** extend line-range & zh-parity checks to case studies ([965e2cb](https://github.com/Totoro-jam/battle-tested-patterns/commit/965e2cb1aab84d24fc932897630ce9c10177784c))


### Bug Fixes

* **by-project:** correct Linux vtable line range to file_operations ([9a1589e](https://github.com/Totoro-jam/battle-tested-patterns/commit/9a1589e21695c84c1b14f8aa0b84118ae4678437))
* **ci:** correct first-interaction v3 input names to underscores ([387253c](https://github.com/Totoro-jam/battle-tested-patterns/commit/387253c52a372de29154be6b0f4848d1a02f6aa3))
* **ci:** skip welcome workflow for bots like dependabot ([af2ed2f](https://github.com/Totoro-jam/battle-tested-patterns/commit/af2ed2f45efd912f2db7e198a35fe92d98365a8e))
* **deps:** upgrade vitest to 4 and fix node type resolution ([2471fd1](https://github.com/Totoro-jam/battle-tested-patterns/commit/2471fd140a4d552b7ccc7b842a7334fef5db6631))


### Documentation

* **case-study:** add Git commit multi-pattern case study (EN+ZH) ([839b6ef](https://github.com/Totoro-jam/battle-tested-patterns/commit/839b6efe855fafff18e4882f82850358761373e9))
* **case-study:** add Go scheduler multi-pattern case study (EN+ZH) ([d62c3d4](https://github.com/Totoro-jam/battle-tested-patterns/commit/d62c3d4efeeebedacac849bf5967aff4c813ae4d))
* **case-study:** add Linux read() multi-pattern case study (EN+ZH) ([cd341b6](https://github.com/Totoro-jam/battle-tested-patterns/commit/cd341b655a2c7ddb3120fd5918850c8c0312898e))
* **case-study:** add Node.js request multi-pattern case study (EN+ZH) ([999ceb2](https://github.com/Totoro-jam/battle-tested-patterns/commit/999ceb2279215e52b8f05f18e503f23c47dca9cb))
* **case-study:** add React Fiber multi-pattern case study (EN+ZH) ([70c243c](https://github.com/Totoro-jam/battle-tested-patterns/commit/70c243cbc9ea0b0d07424bb5e0ac43da36f60349))
* **case-study:** deepen React Fiber study with lanes, flag bubbling, mental models ([b102414](https://github.com/Totoro-jam/battle-tested-patterns/commit/b102414552c6d39f2083f19c3c936d9293692a37))
* **case-study:** polish react-fiber after a fresh three-role review ([829df7f](https://github.com/Totoro-jam/battle-tested-patterns/commit/829df7fbc6a6e89725dbefc44ab5b80554b33d7e))
* **case-study:** refine 4 studies after a 3-role review pass ([bf7ed8f](https://github.com/Totoro-jam/battle-tested-patterns/commit/bf7ed8fa024c077d8cf6db1343412b2d659903b8))
* **case-study:** tighten technical precision across all 4 studies ([145a2d1](https://github.com/Totoro-jam/battle-tested-patterns/commit/145a2d1967c128c1989fa63f89d239677045ecd9))
* **git-commit:** apply three-role review fixes ([1d472c6](https://github.com/Totoro-jam/battle-tested-patterns/commit/1d472c659a65e90c15dd599e4813d99daaeee39c))
* **guide:** clarify when to use feat vs docs in commit convention ([5834d1e](https://github.com/Totoro-jam/battle-tested-patterns/commit/5834d1e00ab618624702fdd606b78ea7aa326f22))
* **sop,case-study:** iterate SOP 15 and fix per-P wording ([baef70a](https://github.com/Totoro-jam/battle-tested-patterns/commit/baef70a55c15305815bdb7d1a79c3145f999b4a2))
* **sop,case-study:** require 20-source research; enrich Further Reading ([ed2db61](https://github.com/Totoro-jam/battle-tested-patterns/commit/ed2db618578e74f678c2fb30f2534f6835b421c9))
* **sop:** add SOP 15 case study authoring methodology ([2680f8a](https://github.com/Totoro-jam/battle-tested-patterns/commit/2680f8a28844cc7e369c7ea2441d59a74a1af80b))

## [1.14.1](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.14.0...v1.14.1) (2026-06-16)


### Bug Fixes

* **scripts:** retry verify-links on HTTP 429 rate limiting ([c255a9f](https://github.com/Totoro-jam/battle-tested-patterns/commit/c255a9f4b9deb1bba401da2234452739275d633d))
* **scripts:** stop link extractor from eating HTML attribute quotes ([0d0302f](https://github.com/Totoro-jam/battle-tested-patterns/commit/0d0302f53c15514c1aebe1827282ce8a9f66dd6b))

## [1.14.0](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.13.0...v1.14.0) (2026-06-16)


### Features

* **theme:** add mobile back-to-top button and sticky navigation ([e5c08cb](https://github.com/Totoro-jam/battle-tested-patterns/commit/e5c08cb255e869687e4e978d2eb85a80e5ca5885))


### Bug Fixes

* **docs:** use &lt;div&gt; not &lt;p&gt; to wrap markdown, preventing invalid nesting ([c477570](https://github.com/Totoro-jam/battle-tested-patterns/commit/c477570d93eed3f93bf81e7a18d0b2ce8b361130))
* **theme:** give pinned mobile navbar an opaque background ([635d46b](https://github.com/Totoro-jam/battle-tested-patterns/commit/635d46b66e6ddd91faae2280582ec9948a437b99))
* **viz:** commit time-travel snapshot for missing write ops ([b66effa](https://github.com/Totoro-jam/battle-tested-patterns/commit/b66effaf1b34900ae2a8c365c14a3ae7574583f0))
* **viz:** correct time-travel label and clear stale read panel ([b143752](https://github.com/Totoro-jam/battle-tested-patterns/commit/b143752c5c652acaf00e36fc401b7ef3c21cc54c))
* **viz:** include structural fields in time-travel snapshots ([967eb80](https://github.com/Totoro-jam/battle-tested-patterns/commit/967eb804c6a9ab1ead26fd9c299a371deae4cf95))

## [1.13.0](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.12.0...v1.13.0) (2026-06-14)


### Features

* add time-travel playback infrastructure ([f0e1e3c](https://github.com/Totoro-jam/battle-tested-patterns/commit/f0e1e3c3fbe704f980de91e1cf87fc38fd43d6df))
* integrate time-travel into all viz components ([2509b96](https://github.com/Totoro-jam/battle-tested-patterns/commit/2509b96afd3fe4bb7fe4269488c92afbebb71c8d))

## v1.12.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.11.0...v1.12.0)

### Features

- Add ErrorBoundary and VizErrorBoundary components (Vue `defineComponent`) with ErrorFallback.vue for graceful error display
- Add mermaid FOUC prevention: CSS `visibility: hidden` + `data-mermaid-status` lifecycle + Apple HIG shimmer placeholder (dark/light mode)
- Add stale chunk auto-reload handler for deploy version skew (SPA navigation resilience)
- Add `verify-skip` info-string flag for code blocks that should not be compiled

### Performance

- Rewrite `verify-code-blocks.ts` execution engine (~30x faster: 115s → 3.6s)
  - TypeScript: single `ts.createProgram` with per-block module isolation
  - Rust: `rustc --emit=metadata` (skip codegen+linking) + bounded concurrency
  - Go: shared module + single `go vet ./...`
  - Python: bounded-concurrency `py_compile`

### Fixes

- Fix `<p>` nesting hydration warning in docs/index.md
- Fix Rust answer for batch-processing pattern exercise
- Unify approximate year notation in zh timeline table (`约` → `~`, `~1960s` → `~1960`)
- Downgrade mermaid render failure log from `console.error` to `console.warn`

### CI/CD

- Split `verify-code` into dedicated CI job with all 4 toolchains — fixes historical gap where 138 non-TS code blocks were silently skipped in CI
- Fix Go cache warnings (use `go.mod` instead of non-existent `go.sum`)
- Script now fails hard in CI (`CI=true`) when a toolchain is missing

### Documentation

- Expand SOP 08 AI Agent Review from 2 to 7 specialized roles (Contributor, Content, Source Proof, Multi-Language, Bilingual, Security, Frontend & A11y)
- Add prerequisites table to CONTRIBUTING.md and CONTRIBUTING.zh-CN.md

## v1.11.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.10.0...v1.11.0)

### Features

- Add `scripts/lib/patterns.ts` shared library for pattern discovery, frontmatter parsing, and CI diagnostics
- Add `scripts/check-structure.ts` — validate frontmatter, required sections, tab order, property table, and production proof links (rules S1–S8)
- Add `scripts/check-zh-parity.ts` — validate EN/ZH code block, section, and source link parity (rules P1–P7)
- Add `scripts/check-exercises.ts` — validate exercise/answer files, solution markers, and runner scripts (rules E1–E6)
- Add `scripts/check-relations.ts` — validate Related Patterns bidirectionality and sidebar consistency (rules R1–R3)
- Add `scripts/verify-line-ranges.ts` — validate production proof line ranges against actual file content with caching (rules L1–L2)
- Add `pnpm check:content`, `pnpm check:structure`, `pnpm check:zh-parity`, `pnpm check:exercises`, `pnpm check:relations`, `pnpm verify-lines` commands
- Merge 5 CI heredoc jobs into single typed `check-content` job

### Security

- Replace `execSync` with `execFileSync` in `verify-code-blocks.ts` — eliminates shell command injection (3 call sites)
- Add `sanitizeAnnotation()` in `patterns.ts` — prevents GitHub Actions annotation injection
- Add `AbortSignal.timeout(15s)` to all `fetch` calls in `verify-line-ranges.ts`, `verify-source-links.ts`, and `convert-to-sha-links.ts`
- Cap retry depth (2) and wait time (60s) in `convert-to-sha-links.ts` `resolveSHA` — prevents unbounded recursion

### Fixes

- Fix interning pattern `unicodeobject.c` line range (L15575→L14416)
- Fix backpressure `Subscription.java` line range (L25-L45→L14-L37)
- Fix stale line range references in README.md and README.zh-CN.md

### Documentation

- Update CLAUDE.md with new check/verify commands
- Update CONTRIBUTING guides, PR template, and SOPs 01/02/07/08/13
- Update `.claude/skills/verify-source/SKILL.md` for new toolchain

## v1.10.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.9.1...v1.10.0)

### Features

- Convert all 166 production proof links to SHA-pinned permalinks (never drift)
- Add `scripts/resolve-sha-links.ts` tooling for automated link conversion
- Replace vitepress-plugin-mermaid with conditional loading (`app.*.js` 608KB → 1.3KB, -99.8%)
- Add `scripts/verify-mermaid.ts` for Mermaid syntax validation (26 blocks, 0 errors)
- Add `ci-pass` gate job — Branch Protection now requires single `CI / CI Pass` check
- Upgrade ErrorBoundary to Apple HIG design (backdrop-filter blur, SF Mono, smooth transitions)
- Add global async component error handler in VitePress theme

### CI

- Merge `content-quality.yml` (5 jobs) into `ci.yml` — eliminates duplicate runs on push
- Add Vue component test job (`test-components`) to CI pipeline
- Split test scripts: `pnpm test` (all), `pnpm test:exercises`, `pnpm test:docs`
- Gate job aggregates all 12 CI jobs; Branch Protection only needs one check
- Fix Go cache warning by specifying `cache-dependency-path`

### Fixes

- Fix flawed component tests: ReferenceCountingViz wrong selector, VisitorViz count mismatch, SkipListViz conditional guards, MiddlewareChainViz reset logic
- Correct TS test count back to 491; total 1,073
- Resolve SSR hydration mismatch causing skeleton/component coexistence bug
- Eliminate shell injection risk in `verify-code-blocks.ts` (internally controlled paths)
- Rewrite actor-model Rust implementation with `enum` + `VecDeque`
- Correct Bitmask "Four operations" label to "Core operations"
- Sync Observer ZH translation with EN version
- Add 8 missing patterns to README pattern lists
- Fix stale exercise paths in ZH pattern docs and SOPs

### Testing

- Add Viz component test infrastructure: vitest + @vue/test-utils + jsdom + VitePress mock
- Add unit tests for 46 Viz components — 295 docs tests total
- Add edge-case tests for CircuitBreakerViz, RetryBackoffViz, SemaphoreViz, SkipListViz

### Refactors

- Restructure Go exercises into package-per-directory layout (46 pattern subdirectories)
- Restructure Python exercises into pattern subdirectories for pytest discovery
- Replace 229 hardcoded CSS values with `--viz-*` design tokens across 50 Viz components

### Documentation

- Update all docs to reference `pnpm test:exercises` (92 pattern files, guides, SOPs, skills)
- Align Viz design tokens with Apple HIG principles
- Add LRU Cache screenshots to EN/ZH READMEs
- Add clickable documentation links to all 46 patterns in STUDY_PLAN.md
- Add property tables to 4 remaining patterns — 46/46 coverage
- Add `package.json` keywords and homepage field
- Add Star History badge to README

### Chores

- Add Husky git hooks, a11y contrast fix, README prerequisites
- Add `.nvmrc`, `.python-version` for consistent tooling
- Organize exercises and answers into per-pattern directories
- Fix pnpm config for reliable dependency resolution

## v1.9.1

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.9.0...v1.9.1)

### Fixes

- Correct stale test counts across READMEs and exercise guides (TS 553→491→492, total 1,073→1,074)
- Add retry logic to verify-source-links for transient 5xx errors (avoids false-positive issues)
- Add `// TODO: implement` markers to all 46 Rust exercise files for consistency with TS/Go/Python
- Remove dead warn/strict split in verify-code-blocks script
- Standardize code-group tab order to TypeScript > Rust > Go > Python across all 66 pattern docs (EN+ZH)
- Add explicit frontmatter `title` to all 92 pattern docs + 22 guide pages + 18 by-project pages for SEO (og:title, browser tabs)
- Update markdownlint config for frontmatter title compatibility (MD025 front_matter_title)

### CI

- Extract release notes from CHANGELOG.md instead of changelogen (fixes empty release notes)
- Add answer file existence check to content-quality workflow
- Add frontmatter completeness and code-group tab order checks to content-quality workflow
- Expand content-quality trigger paths to include guide/ and by-project/ pages
- Increase Rust/Go compile timeouts in verify-code-blocks (fixes sporadic CI ETIMEDOUT)

### Chores

- Remove unused `changelogen` dependency and `changelog` script
- Sync package.json version from 1.5.0 to 1.9.0 (root + docs workspace)
- Add package.json version bump step to SOP 08 release process
- Bump dependency specifiers: commitlint 21.0.2, tsx 4.22, vitepress 1.6.4, vue 3.5.35

### Documentation

- Update SOPs 01/05/08 to match current 4-language exercise and release workflow
- Add missing commands to CLAUDE.md (verify-code, Rust, Go)
- Update CONTRIBUTING guides with 4-language exercise requirement and full command set
- Update Contributing quality bar in READMEs (EN+ZH) to match current standards
- Update PR template with complete quality checklist (exercises, i18n, related patterns)
- Update issue templates for 4-language standard (Python replaces C, add Rust/Go/Python env fields)

## v1.9.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.8.0...v1.9.0)

### Features

- Add Go implementation for diff-patch pattern
- Add Rust implementation for batch-processing pattern
- Add complexity cheat sheet and pattern comparison pages (EN+ZH)
- Add difficulty labels, learning paths, study plan, and real-world analogies
- Replace ASCII composition diagrams with interactive CompositionFlow Vue component
- Add DecisionTree interactive component for guide pages
- Add VizLog universal log panel with visual design upgrade to all 48 Viz components
- Add 3rd preset scenario + highlight logs to BPlusTree, MinHeap, SkipList
- Revamp homepage with value-focused tagline, live Viz demo, and PatternTimelineViz
- Add JSON-LD structured data for search engine rich results (WebSite, BreadcrumbList, TechArticle)
- Add dedicated skeleton loading for homepage MinHeap and Timeline components
- Add CJK word segmentation for VitePress local search using `Intl.Segmenter`

### Fixes

- Fix broken Erlang/BEAM VM source link (file moved to `emu/` subdirectory)
- Sync 23 missing When to Use / When NOT to Use entries in ZH patterns
- Restore missing arrow in ZH flyweight mermaid diagram
- Add property tables to 14 patterns + fix ZH diagram structural issues
- Remove technical terms from Real-World Analogy sections
- Add source links to 29 More Production Uses entries across 15 patterns
- Replace 3 imprecise Production Proof links with correct line numbers
- Correct pattern-connections matrix (remove 2 false positives, add 2 missing)
- Standardize em dashes in One Liner sections
- Add 37 missing bidirectional Related Patterns back-links (EN+ZH)
- Add precise line numbers to production proof links (EN+ZH)
- Correct 8 factual errors in challenge question answers (EN+ZH)
- Comprehensive quality audit: sync ZH code, fix implementations, improve SEO
- Address multi-role exercise audit findings
- Align Rust/Go exercises with TS/Python API coverage
- Add focus-visible styles and dark mode color overrides to viz CSS
- Replace `*` with `×` for multiplication in challenge answers and state-machine
- Normalize `--` to em dash (—) in prose text across EN+ZH patterns
- Add 11 missing patterns to pattern-connections page (EN+ZH)
- Add ARIA attributes to all 49 Viz components
- Add keyboard support to interactive non-button elements
- Add missing `isAborted()` checks after delay in preset scenarios
- Translate hardcoded English strings in VizLog and VizSkeleton
- Add mobile responsive styles for viz components on small screens

### Internationalization

- Translate "Exercise files:" to "练习文件：" across all 46 ZH pattern pages
- Translate "Production Proof" to "生产验证" in ZH interview guide
- Sync ZH code block text with EN in interning and visitor patterns
- Sync ZH/EN sidebar titles with page titles across 10 patterns
- Replace "Interview Guide" hero button with "Learning Paths" (EN+ZH)
- Add Chinese translations for VitePress UI elements
- Add 404 page and footer translations for both locales
- Add outline level [2,3] to ZH config to show h3 in page navigation
- Rename 归并迭代器 → 合并迭代器 in merge-iterator pattern page
- Translate all English pattern names to Chinese in use-cases.md

### SEO

- Add x-default hreflang for international search engines
- Add theme-color meta tag for mobile browser chrome

### Documentation

- Add 5 pattern comparison pairs: Backpressure vs Rate Limiter, Tombstone vs Dirty Flag, Interning vs Flyweight, Event Loop vs Work Stealing, Visitor vs Middleware Chain (EN+ZH)
- Add B+ Tree and Registry to more-projects by-project page (EN+ZH)
- Correct Go test count from ~170 to 173 in README
- Add SOP 12 (Related Patterns bidirectionality), SOP 13 (content quality audit)
- Add missing patterns to learning paths (Registry, Visitor, Vtable)
- Update stale test counts and sync STUDY_PLAN with learning paths
- Add game frame composition diagram to game-engines by-project page (EN+ZH)
- Add composition diagrams to ZH by-project pages
- Add exercise getting-started guide (EN+ZH)
- Add Rust/Go/Python exercise file paths to all 92 pattern docs
- Update READMEs with 4-language exercise stats and guide links
- Add learning guides row to README pattern tables (EN+ZH)
- Reorganize guide sidebar into 4 logical groups (EN+ZH)

### CI

- Add EN-ZH code parity check to content-quality workflow
- Expand exercise file check from TypeScript-only to all 4 languages (Rust/Go/Python)
- Use requirements.txt for pytest version in Python CI test step
- Increase Rust verify-code timeout to 30s for CI runner stability
- Upgrade GitHub Actions: setup-node v6, setup-python v6, deploy-pages v5, github-script v9
- Add cargo, gomod, pip ecosystems to dependabot config
- Bump pytest requirement to >=9.0.3

## v1.8.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.7.0...v1.8.0)

### Fixes

- Resolve broken source links flagged by CI (#11)

### Documentation

- Add narrative composition walkthroughs to React and Linux by-project pages
- Add goroutine scheduling composition walkthrough to Go page
- Add distributed write composition walkthrough
- Add git commit composition walkthrough
- Address multi-agent audit findings across exercises, CI, and docs

## v1.7.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.6.0...v1.7.0)

### Features

- Add Go and Rust exercises for final 8 patterns (batch 6) — full 4-language exercise coverage
- Add Go and Rust exercises for 8 more patterns (batch 5)
- Add Go and Rust exercises for 8 more patterns (batch 4)

## v1.6.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.5.1...v1.6.0)

### Features

- Add Go and Rust exercises for 20 patterns (batches 1-3) — first multi-language exercise expansion
- Add `DemoBadge` component for interactive demo discovery on all 92 pattern pages
- Add skeleton screen loading state for lazy-loaded viz components

### Fixes

- Replace eager Go `Filter` with lazy `iter.Seq` in iterator pattern (Go 1.23)
- Upgrade Go to 1.23 for `iter.Seq` support in CI and verify script
- Unify iterator pattern diagram with interactive component
- Align ZH LSM tree ASCII diagram box-top widths
- Correct 11 viz component bugs from comprehensive audit
- Adjust homepage feature icon size to 100×100

### Documentation

- Add recommended learning paths to getting-started guide (EN+ZH)
- Add pattern timeline entry to homepage pattern table area
- Add SOP 10 for interactive viz component audit checklist

## v1.5.1

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.5.0...v1.5.1)

### Features

- Add composition chains and expand cross-system pattern table in pattern-connections guide (React Reconciler, PostgreSQL, Kafka Broker, Go Runtime)

### Fixes

- Add Skip List coverage to use-cases guide and correct interview pattern mappings (cycle detection, read-write lock)
- Crop homepage feature icon whitespace and increase display size to 120×120

### Documentation

- Write proper CHANGELOG entries for v1.5.0

## v1.5.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.4.0...v1.5.0)

### Features

- Add 46 interactive SVG visualizations — 100% pattern coverage (Ring Buffer, LRU Cache, Bloom Filter, Min Heap, Skip List, Trie, State Machine, Circuit Breaker, Consistent Hashing, Event Loop, Rate Limiter, Merkle Tree, B+ Tree, Dependency Graph, Observer, Backpressure, Copy-on-Write, and more)
- Upgrade all 46 viz components with `useVizTimers` composable, scenario presets, and speed controls
- Add i18n composable with full bilingual support for all 46 visualizations
- Replace stacked mermaid charts with interactive components
- Add Pattern Timeline page — 80 years of computing history (EN+ZH)
- Add Cheat Sheet, Use Cases, Interview Guide pages (EN+ZH)
- Add homepage PNG icons for feature cards
- Add sitemap.xml generation and robots.txt for SEO
- Add description frontmatter to all 92 pattern pages and guide pages

### Fixes

- Add `onUnmounted` cleanup to all viz components with timers
- Move viz-status hints to top of visualization area
- Align LSM tree and Interning ASCII diagram box widths
- Add missing abort guards to animation loops
- Fix CJK double-width character alignment in Chinese README
- Add precise line numbers to gRPC-Go middleware-chain source link
- Fix mermaid timeline chart type causing global render errors

### Documentation

- Add SOP 09 for Vue component build pitfalls
- Add Related Patterns cross-references to all 92 pattern pages
- Add 4th challenge question to 7 patterns (EN+ZH)
- Complete timeline with 15 missing patterns, enrich by-project pages
- Update README pattern count, exercise counts, and test case counts
- Add missing intro paragraphs and Further Reading to ZH by-project pages
- Sync missing code blocks from EN to 14 ZH pattern pages

### Performance

- Lazy-load all 46 visualizer components via `defineAsyncComponent`
- Increase Node.js heap size for 46-component VitePress build
- Skip SSR for interactive visualizer components

## v1.4.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.3.0...v1.4.0)

### Features

- Add 4 new patterns: Tagged Union, Interning, Vtable, Visitor (Batch 3)
- Add final 4 patterns: Merkle Tree, Merge Iterator, LSM Tree, Checkpointing (Batch 4) — total reaches **46 patterns**
- Upgrade GitHub Actions to latest major versions

### Fixes

- Merkle Tree: remove external deps (crypto/sha2 → FNV hash, fully self-contained)
- Fix 10 ASCII alignment issues + ZH challenge translations
- Replace `x` with checkmark in pattern-connections summary table (EN+ZH)

### Documentation

- Add Batch 2 patterns to homepage and README cheat sheet (EN+ZH)
- Update all navigation for 46 patterns + fix lint
- SOP updates: pre-tag full audit, pattern-connections sync, by-project sync, accessibility verification

## v1.3.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.2.0...v1.3.0)

### Features

- Add 4 new patterns: Reference Counting, Logical Clock, Event Loop, Middleware Chain
- Add 4 new patterns: B+ Tree, Tombstone, Registry, Dirty Flag (Batch 2)
- Definitive OG social preview image — 35+ real project icons across full canvas
- Add Open Graph and Twitter Card meta tags for SEO

### Fixes

- OG image iteration: SVG → AI-generated PNG → compressed (643KB), correct dimensions (1200×630)
- Strict typecheck errors in free-list and WAL exercises
- Sync PostgreSQL visibility map fix to ZH pattern-connections
- ASCII alignment fixes: work-stealing STEAL box, skip-list level connectors

### Documentation

- Add 30-pattern cheat sheet to README + improve CONTRIBUTING
- Translate pattern-connections to Chinese (6 system case studies)
- Add 4 new patterns to sidebar and homepage tables (EN+ZH)
- Polish homepage, README, exercise tables
- SOP updates: tag release step, OG metadata iteration

## v1.2.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.1.1...v1.2.0)

### Features

- Exercises depth expansion: additional test scenarios for existing patterns
- ZH challenge question translations for all 30 patterns
- System case studies: cross-pattern composition walkthroughs

## v1.1.1

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.1.0...v1.1.1)

### Fixes

- Correct 6 factual errors in challenge questions across patterns

## v1.1.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.0.1...v1.1.0)

### Features

- Add challenge questions (3-4 scenario-based Q&A) to all 30 patterns
- Add 10 intermediate exercises with real-world scenarios

## v1.0.1

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v1.0.0...v1.0.1)

### Fixes

- Escape pipe character in bitmask Production Proof table

## v1.0.0

**First stable release** — 30 production-proven patterns with bilingual documentation.

### Highlights

- 30 patterns across 5 categories: Bit Manipulation, Scheduling & Concurrency, Data Structures, Resilience, and Memory Management
- Full bilingual support (English + 简体中文) with VitePress i18n
- TypeScript + Python exercises with Vitest and pytest
- Every pattern includes: One Liner, Core Idea with ASCII diagram, Production Proof with precise GitHub source links, multi-language implementations (TypeScript + Rust/Go/Python/C), exercises, When to Use / When NOT to Use, and Related Patterns
- All production proof links verified (277 unique GitHub URLs)
- GitHub Pages deployment with CI/CD

## v0.3.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v0.2.1...v0.3.0)

### Features

- Add Python exercises for all patterns (232 tests) + answer files for all 4 languages

### Chores

- Add `__pycache__` and `.pytest_cache` to `.gitignore`

## v0.2.1

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v0.2.0...v0.2.1)

See [commit history](https://github.com/Totoro-jam/battle-tested-patterns/commits/v0.2.1) for changes.

## v0.2.0

[compare changes](https://github.com/Totoro-jam/battle-tested-patterns/compare/v0.1.0...v0.2.0)

See [commit history](https://github.com/Totoro-jam/battle-tested-patterns/commits/v0.2.0) for changes.

## v0.1.0

**Initial release** — project scaffolding and first patterns.

## 2024-05-22 - [O(N^2) Scene Graph Traversal]
**Learning:** The legacy `getSceneGraph` implementation used `Array.prototype.shift()` in a while loop, leading to O(N^2) complexity for large scene graphs due to array re-indexing.
**Action:** Replaced BFS with iterative DFS using `Array.prototype.pop()` (O(1)) to achieve O(N) complexity while maintaining correct child order by pushing children in reverse.

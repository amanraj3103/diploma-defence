import type { Topic } from "./types";

export const programmingTopics: Topic[] = [
  {
    id: 12,
    title: "Object-Oriented Programming (OOP) Principles",
    domain: "Programming & OOP",
    definition:
      "Object-Oriented Programming is a programming paradigm based on the concept of objects, which contain data (attributes) and code (methods). OOP organizes software around real-world entities and their interactions, emphasizing encapsulation, inheritance, polymorphism, and abstraction.",
    keyConcepts: [
      "Encapsulation: Bundling data and methods that operate on that data within a single unit (class), hiding internal state",
      "Inheritance: Mechanism where a new class derives properties and behaviour from an existing class, promoting code reuse",
      "Polymorphism: Ability of objects of different types to respond to the same method call in type-specific ways",
      "Abstraction: Hiding complex implementation details and exposing only essential features to the user",
      "Class and Object: Class is a blueprint; object is an instance of that class with its own state",
      "Composition vs Inheritance: Building complex objects by combining simpler ones versus extending base classes"
    ],
    examples: [
      "A BankAccount class with balance (private) and deposit/withdraw methods — encapsulation",
      "Dog and Cat extending Animal class with overridden speak() — inheritance and polymorphism",
      "Vehicle interface with start() and stop(); Car and Bike implement it differently — abstraction"
    ],
    realWorldApplications: [
      "GUI frameworks: buttons, windows, events as objects with common base classes",
      "Game development: Player, Enemy, Item as classes with shared behaviour",
      "Enterprise software: User, Order, Product entities modelled as objects"
    ],
    advantages: [
      "Code reusability through inheritance and composition",
      "Easier maintenance: changes localized to classes",
      "Modularity: systems built from independent, testable units",
      "Natural mapping to real-world problem domains"
    ],
    limitations: [
      "Overuse of inheritance can lead to rigid, hard-to-change hierarchies",
      "Performance overhead compared to procedural code in some cases",
      "Steeper learning curve for beginners",
      "Not all problems fit the object model (e.g. pure data pipelines)"
    ],
    vivaQuestions: [
      { question: "What are the four pillars of OOP?", hint: "Encapsulation, Inheritance, Polymorphism, Abstraction" },
      { question: "Difference between abstraction and encapsulation?", hint: "Abstraction hides complexity; encapsulation hides data and implementation" },
      { question: "When would you use composition over inheritance?", hint: "When you need flexibility, avoid fragile base class, or model 'has-a' relationship" },
      { question: "Explain runtime vs compile-time polymorphism", hint: "Runtime: method overriding; Compile-time: method overloading" }
    ],
    defenceAnswer: {
      intro:
        "Object-Oriented Programming is a paradigm that structures code around objects — entities that combine data and behaviour. The four pillars of OOP are encapsulation, inheritance, polymorphism, and abstraction, and together they help us build maintainable, reusable software.",
      coreExplanation: [
        "Encapsulation means bundling data (attributes) and the methods that operate on that data inside a class, and restricting direct access to internal state. We use access modifiers like private and public. For example, a bank account's balance is private; you can only change it through deposit or withdraw methods. This protects data integrity and hides implementation details.",
        "Inheritance allows a new class to inherit attributes and methods from an existing class. The child class can add new members or override existing ones. This promotes code reuse — we write common logic once in a base class like Animal, and Dog and Cat extend it with their specific behaviour. We should prefer composition over inheritance when we want 'has-a' relationships or more flexibility.",
        "Polymorphism means 'many forms'. In OOP, it allows objects of different types to be treated through a common interface. With method overriding, a parent reference can point to a child object, and the correct overridden method is called at runtime. For example, a Vehicle reference pointing to a Car will call Car's start() when start() is invoked. This makes code extensible without changing existing code.",
        "Abstraction focuses on what an object does rather than how it does it. We use abstract classes or interfaces to define contracts — methods that implementing classes must provide. The user of an abstraction does not need to know the internal implementation. For instance, a DatabaseConnection interface might have connect() and query(); we don't care whether it's MySQL or PostgreSQL underneath.",
        "In practice, we design classes with single responsibility, use interfaces for contracts, and avoid deep inheritance hierarchies. Design patterns like Strategy and Decorator use composition and polymorphism to keep systems flexible and testable."
      ],
      exampleApplication:
        "Consider an e-commerce system. We have a Product class (encapsulation: price, stock). Book and Electronics extend Product (inheritance). We process payments through a PaymentProcessor interface — CreditCard and UPI are different implementations (polymorphism and abstraction). The order module only depends on the interface, so adding a new payment method does not change existing code.",
      conclusion:
        "OOP principles help us write code that is easier to understand, extend, and maintain. By modelling real-world entities as objects and using the four pillars wisely, we build systems that scale with changing requirements. The key is to use inheritance and polymorphism where they add value, and composition where flexibility is needed."
    },
    keyTerms: ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction", "Class", "Object", "Override"],
    speakingTips: [
      "Start with the four pillars and give a one-line definition of each",
      "Use a single example (e.g. Vehicle/Car) and show how all four apply",
      "Mention composition vs inheritance to show design awareness"
    ]
  },
  {
    id: 13,
    title: "Data Structures: Arrays, Linked Lists, Stacks, Queues",
    domain: "Programming & OOP",
    definition:
      "Data structures are ways of organizing and storing data so that operations can be performed efficiently. Arrays store elements in contiguous memory with index-based access; linked lists use nodes and pointers; stacks follow LIFO (Last In First Out); queues follow FIFO (First In First Out).",
    keyConcepts: [
      "Array: Contiguous memory, fixed or dynamic size, O(1) access by index, poor insertion/deletion in middle",
      "Linked List: Nodes with data and pointer to next (and optionally previous); no random access, O(1) insert/delete at head/tail",
      "Stack: LIFO — push and pop at one end; used for recursion, expression evaluation, undo",
      "Queue: FIFO — enqueue at rear, dequeue at front; used for BFS, task scheduling, buffers",
      "Circular Queue: Rear wraps to front to reuse space in fixed-size buffer",
      "Doubly Linked List: Each node has next and prev pointers for bidirectional traversal"
    ],
    examples: [
      "Array: storing marks of 100 students; access student 50 by index 49",
      "Stack: undo in editor — each action pushed; undo pops and reverses",
      "Queue: printer queue — documents printed in order of submission"
    ],
    realWorldApplications: [
      "Arrays: matrices, lookup tables, dynamic arrays (ArrayList, vector)",
      "Linked lists: browser history (back/forward), playlist (next/prev)",
      "Stacks and queues: function call stack, BFS in graphs, message queues"
    ],
    advantages: [
      "Arrays: fast access, cache-friendly, simple",
      "Linked lists: dynamic size, efficient insert/delete at ends",
      "Stacks/queues: simple model for many real-world orderings",
      "Choice of structure matches problem (FIFO vs LIFO vs random access)"
    ],
    limitations: [
      "Arrays: fixed size (unless dynamic), costly middle insert/delete",
      "Linked lists: no random access, extra memory for pointers, cache-unfriendly",
      "Stacks/queues: limited access (only top/front); not for general lookup",
      "Wrong choice leads to poor performance or complex code"
    ],
    vivaQuestions: [
      { question: "When would you choose linked list over array?", hint: "Frequent insertions/deletions, unknown size, no need for random access" },
      { question: "What is the time complexity of accessing middle element in singly linked list?", hint: "O(n) — must traverse from head" },
      { question: "Give two applications of stack", hint: "Expression evaluation, recursion, undo" },
      { question: "Difference between stack and queue?", hint: "Stack: LIFO; Queue: FIFO" }
    ],
    defenceAnswer: {
      intro:
        "Data structures are the building blocks we use to store and organize data. Arrays, linked lists, stacks, and queues are fundamental linear structures, each with different access patterns and trade-offs. Choosing the right one depends on the operations we need most often.",
      coreExplanation: [
        "An array stores elements in contiguous memory. We can access any element by index in constant time, which is very fast and cache-friendly. The downside is that size is usually fixed (or resizing is costly), and inserting or deleting in the middle requires shifting elements, which is O(n). Arrays are ideal when we need random access and know the size or when we can afford occasional resizing.",
        "A linked list is a sequence of nodes; each node holds data and a pointer to the next node. There is no random access — to reach the ith element we traverse from the head. But insertion and deletion at the head or tail are O(1) if we maintain head and tail pointers. Doubly linked lists also allow O(1) deletion at a known node. Linked lists are good when size changes often and we don't need indexing.",
        "A stack is LIFO — Last In First Out. We only add and remove from one end (top). Operations are push (add) and pop (remove). The call stack in programming uses this: when a function is called, its frame is pushed; when it returns, it's popped. Stacks are used for expression evaluation (e.g. postfix), undo mechanisms, and backtracking.",
        "A queue is FIFO — First In First Out. We enqueue at the rear and dequeue from the front. Queues model waiting lines: tasks, print jobs, or BFS in graphs. A circular queue uses a fixed array and wraps the rear to the front when the end is reached, avoiding wasted space.",
        "In practice we choose based on operations: arrays for indexing and iteration, linked lists for dynamic sequences with insert/delete at ends, stacks for reverse order or nested structure, queues for fair ordering and scheduling."
      ],
      exampleApplication:
        "In a browser, back and forward buttons can use two stacks: one stack for 'back' history and one for 'forward'. When you click a new link, the current page is pushed onto the back stack and the forward stack is cleared. When you press back, we pop from the back stack and push the current page onto the forward stack. This is a classic stack application.",
      conclusion:
        "Arrays, linked lists, stacks, and queues form the basis of many algorithms and systems. Understanding their strengths and weaknesses — access time, insertion cost, and memory layout — helps us pick the right structure and write efficient, clear code."
    },
    keyTerms: ["Array", "Linked List", "Stack", "Queue", "LIFO", "FIFO", "Node"],
    speakingTips: [
      "Compare array vs linked list with one sentence each for access and insert",
      "Say LIFO for stack and FIFO for queue, then give one example each",
      "Mention time complexity (O(1) vs O(n)) where relevant"
    ]
  },
  {
    id: 14,
    title: "Trees and Graphs",
    domain: "Programming & OOP",
    definition:
      "Trees are hierarchical data structures with a root node and child nodes; each node (except root) has exactly one parent. Graphs are structures of vertices (nodes) connected by edges, with no restriction on connections. Trees are acyclic graphs; graphs can have cycles and multiple components.",
    keyConcepts: [
      "Tree: Root, parent, child, leaf; binary tree has at most two children per node",
      "Binary Search Tree (BST): Left subtree < root < right subtree; enables O(log n) search when balanced",
      "Tree traversals: Inorder (left-root-right), Preorder (root-left-right), Postorder (left-right-root), Level-order (BFS)",
      "Graph: Vertices and edges; directed/undirected, weighted/unweighted",
      "Graph representations: Adjacency matrix (O(V²) space), adjacency list (O(V+E))",
      "Graph traversals: BFS (queue) and DFS (stack/recursion); used for shortest path, connectivity, cycles"
    ],
    examples: [
      "BST: dictionary or sorted set — search, insert, delete in O(log n) average",
      "Tree: file system — folders and files as nodes",
      "Graph: social network — users as vertices, friendships as edges"
    ],
    realWorldApplications: [
      "Trees: file systems, DOM in HTML, decision trees, compiler parse trees",
      "Graphs: social networks, maps (cities and roads), dependency graphs, networks",
      "BST and balanced trees: databases (B-tree), sets, ordered maps"
    ],
    advantages: [
      "Trees provide fast search (BST), hierarchical modelling, and efficient range operations",
      "Graphs model any relationship structure (networks, dependencies)",
      "Traversals (BFS/DFS) solve many problems: paths, connectivity, levels",
      "Balanced trees (AVL, Red-Black) guarantee O(log n) operations"
    ],
    limitations: [
      "Unbalanced BST degrades to O(n) for search/insert",
      "Graph algorithms (e.g. shortest path) can be complex and costly",
      "Trees and graphs use more memory than linear structures (pointers)",
      "Choosing representation (matrix vs list) affects space and time"
    ],
    vivaQuestions: [
      { question: "What is the difference between tree and graph?", hint: "Tree: one parent, no cycles; Graph: arbitrary edges, can have cycles" },
      { question: "When does BST give O(n) search time?", hint: "When tree is skewed (e.g. all nodes on one side)" },
      { question: "Name two graph representations and their space complexity", hint: "Adjacency matrix O(V²), adjacency list O(V+E)" },
      { question: "BFS vs DFS — when to use which?", hint: "BFS: shortest path in unweighted; DFS: cycle detection, backtracking" }
    ],
    defenceAnswer: {
      intro:
        "Trees and graphs are non-linear data structures. Trees represent hierarchies with a single root and no cycles; graphs represent general relationships between entities. Both are central to algorithms and real-world modelling.",
      coreExplanation: [
        "A tree has a root node; every other node has exactly one parent. In a binary tree, each node has at most two children — left and right. A Binary Search Tree (BST) keeps an ordering: all keys in the left subtree are smaller than the root, and all in the right are larger. This allows search, insert, and delete in O(log n) on average, but if we insert in sorted order, the tree becomes a linked list and operations become O(n). Balanced trees like AVL and Red-Black maintain O(log n) by rebalancing.",
        "Tree traversals visit every node in some order. Inorder (left, root, right) on a BST gives sorted order. Preorder (root, left, right) is useful for copying or prefix expressions. Postorder (left, right, root) is used when we need to process children before the root (e.g. deleting a tree). Level-order uses a queue and visits by levels (BFS).",
        "A graph has vertices (nodes) and edges. Edges can be directed or undirected, and weighted or unweighted. We can represent a graph with an adjacency matrix — a 2D array where entry [i][j] indicates an edge — which uses O(V²) space and gives O(1) edge lookup. An adjacency list stores, for each vertex, a list of its neighbours; space is O(V+E), which is better for sparse graphs.",
        "BFS (Breadth-First Search) uses a queue and explores level by level. It finds shortest paths in unweighted graphs. DFS (Depth-First Search) uses a stack or recursion and goes deep before backtracking. DFS is used for cycle detection, topological sort, and exploring connected components. Both run in O(V+E) with adjacency list.",
        "Applications are everywhere: file systems and DOM are trees; social networks, maps, and dependency graphs are graphs. Choosing between tree and graph depends on whether we have a clear hierarchy or general relationships; choosing representation and traversal depends on the problem (shortest path, connectivity, ordering)."
      ],
      exampleApplication:
        "In a social network, users are vertices and friendships are edges. To find 'friends of friends' at distance 2, we run BFS from a user: level 0 is the user, level 1 is direct friends, level 2 is friends of friends. To detect if there is a cycle (e.g. in a dependency graph of tasks), we run DFS and check for back edges. These are standard graph applications.",
      conclusion:
        "Trees and graphs are essential for modelling hierarchies and relationships. Mastery of BST, traversals, and graph representations plus BFS/DFS enables solving a wide range of problems in databases, networks, and compilers."
    },
    keyTerms: ["Tree", "Graph", "BST", "BFS", "DFS", "Adjacency List", "Traversal"],
    speakingTips: [
      "Define tree (one parent, no cycle) and graph (vertices + edges) clearly",
      "Give BST property and mention balanced trees to avoid O(n)",
      "Say BFS = queue/shortest path, DFS = stack/recursion/cycles"
    ]
  },
  {
    id: 15,
    title: "Sorting and Searching Algorithms",
    domain: "Programming & OOP",
    definition:
      "Sorting algorithms arrange elements in a specific order (e.g. ascending); searching algorithms find the presence or position of an element. Efficiency is measured in time and space complexity. Common sorts include Quick Sort, Merge Sort, and Heap Sort; common searches include Linear Search and Binary Search.",
    keyConcepts: [
      "Linear Search: Check each element sequentially — O(n); works on any data",
      "Binary Search: Divide sorted array in half each step — O(log n); requires sorted input",
      "Quick Sort: Choose pivot, partition smaller and larger, recurse — O(n log n) average, O(n²) worst",
      "Merge Sort: Divide into halves, sort recursively, merge — O(n log n) always; uses extra space",
      "Stable vs unstable sort: Stable preserves relative order of equal elements (Merge Sort stable; Quick Sort not)",
      "Comparison vs non-comparison sorts: Counting/Radix sort use key structure for linear time in special cases"
    ],
    examples: [
      "Binary search: find a word in dictionary by repeatedly opening middle",
      "Quick sort: pick last element as pivot, partition, then sort left and right subarrays",
      "Merge sort: split array until size 1, then merge sorted pairs"
    ],
    realWorldApplications: [
      "Binary search: autocomplete, lookups in sorted databases, finding boundaries",
      "Sorting: ranking results, preparing data for binary search, finding median/kth element",
      "Stable sort: sorting by one key then another (e.g. name then age)"
    ],
    advantages: [
      "Binary search is very fast on sorted data — O(log n)",
      "Merge sort gives guaranteed O(n log n) and is stable",
      "Quick sort is fast in practice and in-place (with careful implementation)",
      "Right choice (sort + search) reduces total cost for repeated lookups"
    ],
    limitations: [
      "Binary search only works on sorted data; sorting itself costs O(n log n)",
      "Quick sort worst case O(n²) on sorted or nearly sorted data without random pivot",
      "Merge sort uses O(n) extra space",
      "Comparison-based sorting lower bound is Ω(n log n)"
    ],
    vivaQuestions: [
      { question: "Why is binary search O(log n)?", hint: "Each step halves the search space" },
      { question: "Quick sort worst case — when does it occur?", hint: "Pivot always smallest or largest (e.g. sorted input)" },
      { question: "What is a stable sort? Give one example", hint: "Equal elements keep relative order; Merge Sort" },
      { question: "Can we do better than O(n log n) for comparison-based sorting?", hint: "No — Ω(n log n) lower bound" }
    ],
    defenceAnswer: {
      intro:
        "Sorting and searching are fundamental operations. Searching finds an element; sorting arranges elements so that efficient search (like binary search) is possible. We care about time and space complexity and whether the sort is stable.",
      coreExplanation: [
        "Linear search scans the array from start to end until the element is found or the array ends. Time is O(n) and it works on any data. Binary search works only on sorted arrays: we compare with the middle element; if the target is smaller we search the left half, otherwise the right half. Each step halves the search space, so time is O(log n). So for one lookup, linear is fine; for many lookups, we sort once and then use binary search.",
        "Quick Sort picks a pivot (often last or random element), partitions the array so that elements smaller than the pivot are on the left and larger on the right, then recursively sorts the two parts. Average time is O(n log n), but if the pivot is always the smallest or largest (e.g. sorted input with last element as pivot), we get O(n²). Using a random pivot or median-of-three reduces this risk. Quick sort is in-place (O(1) extra space for recursion in best case) and fast in practice.",
        "Merge Sort divides the array into two halves, recursively sorts each half (until size 1), then merges the two sorted halves into one sorted array. Merging is O(n) per level and there are O(log n) levels, so total time is O(n log n) in all cases. Merge sort is stable — equal elements keep their relative order — but it uses O(n) extra space for the temporary array.",
        "Stability matters when we sort by multiple keys: for example, sort by name then by age; we want same names to remain in age order. Merge sort is stable; quick sort as commonly implemented is not. Heap sort is O(n log n) and in-place but not stable.",
        "For comparison-based sorting, there is a lower bound of Ω(n log n). So we cannot do better without using more information about the data. Non-comparison sorts like counting sort or radix sort can achieve O(n) when keys are integers in a limited range."
      ],
      exampleApplication:
        "In a student database sorted by roll number, finding a student by roll number is binary search — O(log n). If we want to sort by name and then by marks, we first sort by marks (stable sort), then sort by name (stable sort); after that, names are in order and within the same name, marks remain in order. That's why stability matters.",
      conclusion:
        "We choose sorting and searching algorithms based on data (sorted or not), need for stability, and space constraints. Binary search plus a good sort (Quick or Merge) handles most application needs; understanding their trade-offs is essential for exams and interviews."
    },
    keyTerms: ["Binary Search", "Quick Sort", "Merge Sort", "Stable Sort", "Pivot", "Partition"],
    speakingTips: [
      "State time complexity for linear search, binary search, and one sort",
      "Explain 'divide and conquer' for both binary search and merge sort",
      "Mention stable sort and when it matters"
    ]
  },
  {
    id: 16,
    title: "Recursion and Dynamic Programming",
    domain: "Programming & OOP",
    definition:
      "Recursion is a technique where a function calls itself to solve a problem by breaking it into smaller subproblems of the same type. Dynamic Programming (DP) optimizes recursive solutions by storing results of subproblems to avoid redundant computation, typically using a table or memoization.",
    keyConcepts: [
      "Base case: Condition that stops recursion; without it we get infinite recursion and stack overflow",
      "Recursive case: Problem expressed in terms of smaller instances of the same problem",
      "Memoization: Top-down DP — cache results of recursive calls; first time compute, later return cached",
      "Tabulation: Bottom-up DP — fill a table from smallest subproblems to the original problem",
      "Overlapping subproblems: Same subproblem solved multiple times — required for DP to help",
      "Optimal substructure: Optimal solution built from optimal solutions of subproblems"
    ],
    examples: [
      "Fibonacci: fib(n) = fib(n-1) + fib(n-2) with base fib(0)=0, fib(1)=1",
      "DP for Fibonacci: store fib(i) in array; fill from 0 to n to get O(n) time",
      "Longest Common Subsequence: LCS(i,j) from LCS(i-1,j), LCS(i,j-1), LCS(i-1,j-1)"
    ],
    realWorldApplications: [
      "Recursion: tree/graph traversals, divide-and-conquer (merge sort), backtracking",
      "DP: sequence alignment in bioinformatics, knapsack, shortest path in DAGs",
      "Memoization: game theory, parsing, expensive computations with repeated inputs"
    ],
    advantages: [
      "Recursion simplifies code for problems with natural recursive structure",
      "DP reduces exponential time to polynomial by avoiding repeated work",
      "Memoization is easy to add to existing recursive code",
      "Tabulation often has better constant factors and no stack overflow risk"
    ],
    limitations: [
      "Recursion can cause stack overflow for deep recursion",
      "Naive recursion (e.g. Fibonacci without memo) is exponentially slow",
      "DP needs overlapping subproblems and optimal substructure — not all problems have them",
      "Space for table or cache can be significant"
    ],
    vivaQuestions: [
      { question: "What two properties must a problem have for DP?", hint: "Overlapping subproblems and optimal substructure" },
      { question: "Difference between memoization and tabulation?", hint: "Memoization: top-down, cache in recursion; Tabulation: bottom-up, fill table" },
      { question: "Why is plain recursive Fibonacci slow?", hint: "Same subproblems computed many times — exponential calls" },
      { question: "What is the base case in recursion?", hint: "Condition that stops recursion; solves smallest subproblem directly" }
    ],
    defenceAnswer: {
      intro:
        "Recursion is when a function solves a problem by calling itself on a smaller instance. Dynamic Programming is an optimization technique for recursive solutions that have overlapping subproblems: we store results so we don't recompute them, turning exponential time into polynomial time.",
      coreExplanation: [
        "Every recursive function needs a base case — a condition where we return without recursing. For Fibonacci, fib(0)=0 and fib(1)=1 are base cases. The recursive case defines fib(n) in terms of fib(n-1) and fib(n-2). Without a base case we get infinite recursion and stack overflow. Recursion is natural for trees, graphs, and divide-and-conquer problems.",
        "The problem with naive recursive Fibonacci is that we compute the same fib(k) many times. The recursion tree has exponential nodes. Overlapping subproblems means the same subproblem appears multiple times. Optimal substructure means the best solution to the big problem is built from best solutions to subproblems. When both hold, we can use DP.",
        "Memoization is top-down DP. We keep a cache (e.g. a dictionary or array). When we need fib(n), we first check the cache; if the value is there we return it. Otherwise we compute it, store it in the cache, and return. So each subproblem is solved only once. Time becomes O(n) for Fibonacci, with O(n) space for the cache and recursion stack.",
        "Tabulation is bottom-up DP. We fill a table from the smallest subproblems upward. For Fibonacci we create an array dp[0..n], set dp[0]=0 and dp[1]=1, then for i from 2 to n set dp[i]=dp[i-1]+dp[i-2]. We return dp[n]. This is also O(n) time and O(n) space, but no recursion, so no stack overflow. We can often reduce space to O(1) if we only need the last few values.",
        "Classic DP problems include Longest Common Subsequence (LCS), knapsack, coin change, and edit distance. The steps are: define the state (e.g. dp[i][j]), write the recurrence, identify base cases, choose order of filling (for tabulation), and optionally optimize space."
      ],
      exampleApplication:
        "To find the minimum number of coins to make a sum S (coin change problem), we define dp[i] as minimum coins for sum i. Base: dp[0]=0. For i>0, we try each coin c: if i>=c then dp[i] = min(dp[i], 1+dp[i-c]). We fill dp from 0 to S. This is tabulation. The same recurrence can be solved with recursion and memoization; both give O(S * number of coins).",
      conclusion:
        "Recursion gives clear, compact code for many problems; DP makes such solutions efficient when subproblems overlap. Identifying the state, recurrence, and base case is the core skill; then we choose memoization for simplicity or tabulation for robustness and space optimization."
    },
    keyTerms: ["Recursion", "Base Case", "Memoization", "Tabulation", "Overlapping Subproblems", "Optimal Substructure"],
    speakingTips: [
      "Always mention base case when explaining recursion",
      "Say 'overlapping subproblems' and 'optimal substructure' for DP",
      "Compare memoization (top-down) vs tabulation (bottom-up) in one sentence"
    ]
  },
  {
    id: 17,
    title: "Design Patterns",
    domain: "Programming & OOP",
    definition:
      "Design patterns are reusable solutions to common problems in software design. They are templates for how to structure classes and objects and how they interact. Classic patterns are categorized as Creational (object creation), Structural (object composition), and Behavioural (object interaction and responsibility).",
    keyConcepts: [
      "Creational: Singleton (one instance), Factory (create without specifying class), Builder (stepwise construction)",
      "Structural: Adapter (make incompatible interfaces work together), Decorator (add behaviour without subclassing), Facade (simple interface to subsystem)",
      "Behavioural: Observer (notify dependents on state change), Strategy (interchangeable algorithms), Iterator (traverse without exposing structure)",
      "Pattern vs anti-pattern: Pattern solves a problem; anti-pattern is a common bad solution",
      "Don't overuse: Apply patterns when they simplify design, not for their own sake"
    ],
    examples: [
      "Singleton: single database connection or config object for the app",
      "Observer: UI updates when model data changes (MVC/MVVM)",
      "Strategy: different sorting or payment algorithms swappable at runtime"
    ],
    realWorldApplications: [
      "Singleton: logging, thread pools, app configuration",
      "Factory: creating different types of documents, buttons, or database drivers",
      "Observer: event handling, reactive UIs, pub-sub systems"
    ],
    advantages: [
      "Common vocabulary — 'use a Factory' communicates intent quickly",
      "Proven solutions that reduce design errors",
      "Improves maintainability and testability when used appropriately",
      "Encourages loose coupling and high cohesion"
    ],
    limitations: [
      "Overuse leads to unnecessary abstraction and complexity",
      "Patterns can be misapplied; need to fit the problem",
      "Some patterns (e.g. Singleton) can hurt testability",
      "Learning many patterns takes time; focus on a few widely used ones"
    ],
    vivaQuestions: [
      { question: "Name one creational and one behavioural pattern", hint: "Creational: Singleton, Factory; Behavioural: Observer, Strategy" },
      { question: "What problem does the Singleton pattern solve?", hint: "Ensure only one instance of a class exists" },
      { question: "When would you use Strategy pattern?", hint: "When you have multiple interchangeable algorithms (e.g. sort, payment)" },
      { question: "Adapter vs Facade — difference?", hint: "Adapter: one interface to another; Facade: simple interface to many classes" }
    ],
    defenceAnswer: {
      intro:
        "Design patterns are reusable solutions to recurring design problems. They are not code to copy-paste but templates for organizing classes and objects. The Gang of Four categorized them into Creational, Structural, and Behavioural patterns.",
      coreExplanation: [
        "Creational patterns deal with object creation. Singleton ensures a class has only one instance and provides global access to it — useful for database connections or configuration. Factory Method lets a class defer instantiation to subclasses, so we get the right concrete type without the client depending on it. Abstract Factory provides an interface for creating families of related objects. Builder separates construction of a complex object from its representation, so the same process can create different representations.",
        "Structural patterns deal with composition. Adapter makes one interface look like another so that incompatible classes can work together — e.g. wrapping a third-party API to match our interface. Decorator adds behaviour to an object by wrapping it; we can stack decorators and avoid a burst of subclasses. Facade provides a simple interface to a set of interfaces in a subsystem, making the subsystem easier to use.",
        "Behavioural patterns deal with responsibility and communication. Observer defines a one-to-many dependency: when one object (subject) changes state, all dependents (observers) are notified. This is the basis of event-driven and reactive UIs. Strategy defines a family of algorithms, encapsulates each one, and makes them interchangeable; the client uses the strategy interface, so we can switch algorithms (e.g. sort or payment method) at runtime. Iterator provides a way to traverse a collection without exposing its internal structure.",
        "We should use patterns when they simplify design and communication, not to show off. Overuse or wrong use leads to unnecessary complexity. Singleton, for example, can make testing hard because of global state. It's better to understand a few patterns deeply — Factory, Observer, Strategy, Decorator — and apply them where they fit.",
        "In exams, we should be able to name a pattern, state the problem it solves, and give a simple example. Drawing a quick class diagram or mentioning 'subject and observers' or 'context and strategy' shows we understand the roles."
      ],
      exampleApplication:
        "In an e-commerce app, we might use Factory to create different payment processors (CreditCard, UPI) from a common interface. We use Strategy so the shipping cost calculation can be Standard, Express, or Free above threshold — we swap the strategy without changing the order class. Observer is used so that when an order's status changes, the UI and notification service get updated automatically. These three patterns together keep creation, behaviour, and notification cleanly separated.",
      conclusion:
        "Design patterns are a shared vocabulary and a set of proven solutions. Knowing a few creational, structural, and behavioural patterns helps us design flexible, maintainable systems. The key is to apply them where they reduce complexity, not to force them everywhere."
    },
    keyTerms: ["Singleton", "Factory", "Observer", "Strategy", "Adapter", "Decorator"],
    speakingTips: [
      "Name one pattern from each category: Creational, Structural, Behavioural",
      "Give one real use case per pattern you mention",
      "Say 'use when it simplifies design' to show maturity"
    ]
  },
  {
    id: 18,
    title: "Functional Programming Concepts",
    domain: "Programming & OOP",
    definition:
      "Functional Programming (FP) is a paradigm that treats computation as the evaluation of functions and avoids mutable state and side effects. Key ideas include first-class functions, pure functions, immutability, and higher-order functions. Many languages support FP alongside OOP (e.g. JavaScript, Python, Java).",
    keyConcepts: [
      "Pure function: Same inputs always give same output; no side effects (no I/O, no mutable state)",
      "Immutability: Data is not modified in place; 'changes' create new values",
      "First-class functions: Functions can be stored in variables, passed as arguments, returned",
      "Higher-order function: Function that takes or returns a function (e.g. map, filter, reduce)",
      "Referential transparency: Expression can be replaced by its value without changing behaviour",
      "Closure: Function that captures variables from its enclosing scope"
    ],
    examples: [
      "map(array, fn) applies fn to each element and returns new array — higher-order",
      "Pure function: add(a, b) return a+b; no side effects, same input same output",
      "Filter and reduce: filter for selection, reduce for aggregation (e.g. sum)"
    ],
    realWorldApplications: [
      "Data pipelines: transform lists with map, filter, reduce",
      "Event handlers and callbacks in JS; passing behaviour as functions",
      "Concurrent code: immutability avoids many race conditions"
    ],
    advantages: [
      "Easier to reason about and test (pure functions)",
      "Fewer bugs from shared mutable state",
      "Composability: small functions combine into larger ones",
      "Good fit for parallel and concurrent execution"
    ],
    limitations: [
      "Performance cost of immutability (copying instead of mutating)",
      "Not all problems fit pure FP; I/O and state are inherent in apps",
      "Learning curve (recursion, no loops, new style)",
      "Debugging can be harder with long compositions"
    ],
    vivaQuestions: [
      { question: "What makes a function pure?", hint: "Same input → same output; no side effects" },
      { question: "What is a higher-order function?", hint: "Function that takes or returns a function" },
      { question: "Give one advantage of immutability", hint: "Easier concurrency, no accidental mutation, predictable" },
      { question: "What is referential transparency?", hint: "Expression can be replaced by its value without changing program behaviour" }
    ],
    defenceAnswer: {
      intro:
        "Functional Programming is a paradigm that emphasizes functions as the main building blocks, avoids mutable state and side effects, and uses ideas like pure functions, immutability, and higher-order functions. Many modern languages support FP alongside other styles.",
      coreExplanation: [
        "A pure function always returns the same output for the same input and has no side effects — it doesn't read or write global state, I/O, or mutable data. For example, add(a,b) return a+b is pure. Pure functions are easy to test and reason about: we only look at inputs and output. Referential transparency means we can replace a call with its result without changing program behaviour.",
        "Immutability means we don't change data in place. Instead of modifying an array, we create a new array with the change. This avoids accidental shared mutation and makes concurrent code safer. In FP-style code we use constants and new values rather than updating variables.",
        "First-class functions mean functions are values: we can assign them to variables, pass them as arguments, and return them. A higher-order function is one that takes a function as argument or returns a function. Map, filter, and reduce are higher-order: they take a function and a collection and apply that function. This lets us express 'what' we want (transform, filter, aggregate) rather than 'how' (loops and indices).",
        "A closure is a function that remembers the environment where it was created — it can access variables from its outer scope even after that scope has finished. Closures are used for callbacks, partial application, and encapsulating state in a controlled way.",
        "FP doesn't mean we never do I/O or have state; it means we isolate side effects and keep most of the code pure. Languages like Haskell use monads to model effects; in JavaScript or Python we often use FP in the small (pure transformations) and allow side effects at boundaries (e.g. at the top level or in event handlers)."
      ],
      exampleApplication:
        "Processing a list of orders: we filter orders that are shipped (filter), then map to get the total amount (map), then sum (reduce). Each step is a pure transformation; we chain map, filter, and reduce instead of writing loops and mutable variables. The code reads like a pipeline: filter → map → reduce. This is typical FP style in everyday code.",
      conclusion:
        "Functional concepts — purity, immutability, higher-order functions — help us write clearer, safer, and more testable code. We don't have to go fully functional; using these ideas where they fit (e.g. in data transformation) already brings real benefits."
    },
    keyTerms: ["Pure Function", "Immutability", "Higher-Order Function", "Closure", "Map/Filter/Reduce", "Side Effect"],
    speakingTips: [
      "Define pure function with 'same input, same output; no side effects'",
      "Give map, filter, reduce as examples of higher-order functions",
      "Mention immutability and concurrency in one sentence"
    ]
  },
  {
    id: 19,
    title: "Pointers and Memory Management (C/C++)",
    domain: "Programming & OOP",
    definition:
      "A pointer is a variable that holds the memory address of another variable. In C and C++, pointers allow direct memory access, dynamic allocation (heap), and efficient passing of large data. Memory management involves allocating memory (malloc/new) and freeing it (free/delete) to avoid leaks and undefined behaviour.",
    keyConcepts: [
      "Pointer: Variable storing address; dereference (*) to access value; address-of (&) to get address",
      "Dynamic allocation: malloc/free in C; new/delete in C++; memory comes from heap",
      "Dangling pointer: Pointer to freed or invalid memory; using it is undefined behaviour",
      "Memory leak: Allocated memory never freed; program consumes more and more memory",
      "Null pointer: Pointer that doesn't point to valid object; must check before use",
      "Smart pointers (C++): unique_ptr, shared_ptr manage ownership and automatic deletion"
    ],
    examples: [
      "int* p = &x; *p = 10; — p holds address of x; *p modifies x",
      "int* arr = (int*)malloc(n * sizeof(int)); ... free(arr); — dynamic array in C",
      "std::unique_ptr<int> p(new int(42)); — automatic free when p goes out of scope"
    ],
    realWorldApplications: [
      "Dynamic data structures: linked lists, trees (nodes allocated on heap)",
      "Large arrays or buffers whose size is known only at runtime",
      "Passing large structs by pointer to avoid copy; sharing data across functions"
    ],
    advantages: [
      "Efficient: pass address instead of copying; direct memory access",
      "Dynamic structures: allocate exactly what we need at runtime",
      "Low-level control needed for systems programming and embedded",
      "Smart pointers in C++ give safety with automatic cleanup"
    ],
    limitations: [
      "Dangling pointers and leaks cause crashes and bugs that are hard to find",
      "No automatic garbage collection in C/C++; programmer must free",
      "Pointer arithmetic and raw pointers are error-prone",
      "Buffer overflows and misuse lead to security vulnerabilities"
    ],
    vivaQuestions: [
      { question: "What is a dangling pointer?", hint: "Pointer that points to memory that has been freed or is invalid" },
      { question: "Difference between malloc and new?", hint: "malloc: C, returns void*; new: C++, calls constructor, type-safe" },
      { question: "What is a memory leak?", hint: "Allocated memory never freed; program keeps using more memory" },
      { question: "Why use smart pointers in C++?", hint: "Automatic memory release; avoid leaks and double-free" }
    ],
    defenceAnswer: {
      intro:
        "Pointers are variables that store memory addresses. They allow direct access to memory, dynamic allocation on the heap, and efficient passing of data. In C and C++, we must manage this memory ourselves — allocating when we need it and freeing when we are done — to avoid leaks and dangling pointers.",
      coreExplanation: [
        "A pointer holds the address of another variable. We get an address with the address-of operator & and access the value at that address with the dereference operator *. For example, if p points to x, then *p is the value of x and *p = 5 changes x. Pointers are used to pass large data by address (avoiding copy), to build dynamic structures, and for low-level access.",
        "In C, we allocate memory with malloc(size), which returns a void pointer to a block on the heap. We must cast it to the right type and later call free(ptr) to release it. In C++, we use new Type() to allocate and delete ptr to free. If we forget to free, we have a memory leak — that memory is never returned to the system. If we free and then use the pointer, we have a dangling pointer and undefined behaviour.",
        "Common mistakes: using a pointer after free, double-free (freeing the same block twice), and not checking for null after malloc or new (they can fail). We should set a pointer to null after free so we don't use it again by mistake.",
        "C++ smart pointers automate ownership and deletion. unique_ptr owns the object exclusively; when the unique_ptr is destroyed, the object is deleted. shared_ptr uses reference counting; the object is deleted when the last shared_ptr is destroyed. We prefer these over raw new/delete to avoid leaks and double-free.",
        "Pointer arithmetic (e.g. p+1) moves by the size of the pointed type. It is used for arrays and low-level code but is easy to get wrong; out-of-bounds access causes buffer overflows and security issues. So we use pointers and manual memory only when necessary; otherwise we use containers (vector, string) and smart pointers."
      ],
      exampleApplication:
        "A linked list in C: each node is allocated with malloc. When we insert a node we malloc a new node and set pointers. When we delete a node we must free that node and update the list's next pointer. If we free a node but still have another pointer pointing to it, that pointer is dangling. In C++, we could make each node a unique_ptr to the next node, so when the list is destroyed all nodes are freed automatically.",
      conclusion:
        "Pointers and manual memory management give power and efficiency but also responsibility. We must pair every allocation with a corresponding free, avoid use-after-free and double-free, and prefer smart pointers and containers in C++ to reduce errors. These concepts are essential for C/C++ and for understanding how higher-level languages manage memory under the hood."
    },
    keyTerms: ["Pointer", "Dereference", "malloc/free", "new/delete", "Dangling Pointer", "Memory Leak", "Smart Pointer"],
    speakingTips: [
      "Define pointer as 'variable that holds an address'",
      "Always mention free/delete and the risk of leak and dangling pointer",
      "Name one smart pointer (unique_ptr or shared_ptr) and its benefit"
    ]
  },
  {
    id: 20,
    title: "Exception Handling",
    domain: "Programming & OOP",
    definition:
      "Exception handling is a mechanism to deal with runtime errors or unusual conditions without stopping the whole program. Code that may fail is placed in a try block; exceptions are thrown when an error occurs and caught by catch blocks. This separates normal flow from error handling and improves robustness.",
    keyConcepts: [
      "try: Block of code where exceptions might occur",
      "catch: Block that handles a thrown exception of matching type",
      "throw: Statement that raises an exception (often an object or built-in type)",
      "finally (in some languages): Block that runs whether or not an exception occurred — for cleanup",
      "Exception hierarchy: Base exception type (e.g. Exception) and derived types (e.g. IOException)",
      "Best practices: Catch specific exceptions; don't swallow exceptions; clean up resources (e.g. try-with-resources)"
    ],
    examples: [
      "try { openFile(); } catch (IOException e) { log(e); } — handle file errors",
      "if (divisor == 0) throw new IllegalArgumentException(\"Division by zero\");",
      "try { ... } finally { connection.close(); } — ensure resource is closed"
    ],
    realWorldApplications: [
      "File and network I/O: file not found, connection failed",
      "Validation: invalid input, out-of-range values",
      "Resource management: ensure files and connections are closed even on error"
    ],
    advantages: [
      "Separates error handling from main logic; code is clearer",
      "Propagates errors up the call stack until handled",
      "Allows centralised handling and logging",
      "Resource cleanup possible via finally or try-with-resources"
    ],
    limitations: [
      "Overuse for control flow makes code hard to follow",
      "Performance cost in some languages when throwing",
      "Uncaught exceptions can terminate the program",
      "Empty catch or catching Exception without rethrow can hide bugs"
    ],
    vivaQuestions: [
      { question: "What is the purpose of finally block?", hint: "Code that runs whether exception occurs or not; often for cleanup" },
      { question: "Why catch specific exception types instead of Exception?", hint: "Handle different errors differently; avoid catching what you can't handle" },
      { question: "What happens if an exception is never caught?", hint: "Propagates to top; program may terminate or unhandled handler runs" },
      { question: "Is it good to use exceptions for normal control flow?", hint: "No — use for exceptional conditions; use return values or state for normal flow" }
    ],
    defenceAnswer: {
      intro:
        "Exception handling lets us deal with runtime errors in a structured way. Instead of checking return codes everywhere, we put risky code in a try block, throw an exception when something goes wrong, and handle it in catch blocks. This keeps the main logic clear and centralises error handling.",
      coreExplanation: [
        "We wrap code that might fail in a try block. If an error occurs, we throw an exception — often an object that carries information about the error. Execution leaves the try block and looks for a catch block that matches the exception type. When found, that catch runs and then execution continues after the try-catch. If no catch matches, the exception propagates to the caller, and so on until it is caught or the program terminates.",
        "Catch blocks can be specific: we might catch FileNotFoundException separately from IOException. Catching the base Exception type catches everything but can hide bugs if we don't rethrow or log properly. Best practice is to catch the most specific type we can handle and let others propagate.",
        "The finally block (in Java, JavaScript, etc.) runs after the try and any catch, whether or not an exception was thrown. It is used for cleanup — closing files, releasing connections — so we don't leak resources when an error occurs. In Java, try-with-resources automatically closes resources that implement AutoCloseable when the try block exits.",
        "We should use exceptions for exceptional conditions — file not found, network failure, invalid state — not for normal flow. Using exceptions for control flow (e.g. throwing to break out of a loop) is discouraged because it is expensive and unclear. We should not leave catch blocks empty; at least log or rethrow.",
        "In C++, we use try, catch, and throw. Destructors are called during stack unwinding when an exception is thrown, so we can put cleanup in destructors (RAII). In Python we have try, except, finally, and we can raise and catch any exception type. The idea is the same: separate error handling from normal path and ensure resources are released."
      ],
      exampleApplication:
        "Reading a config file: we try to open the file and parse it. If the file doesn't exist we catch FileNotFoundException and use default config. If the file is malformed we throw or catch ParseException and log and exit. In a finally block or with try-with-resources we close the file so the handle is always released. The main code stays focused on 'open, parse, use'; error cases are in catch blocks.",
      conclusion:
        "Exception handling is a standard way to make programs robust. Use try-catch for code that can fail, throw meaningful exceptions, catch specifically, and always clean up resources. Avoid using exceptions for normal flow and avoid swallowing exceptions without logging or rethrowing."
    },
    keyTerms: ["try", "catch", "throw", "finally", "Exception", "Propagation", "RAII"],
    speakingTips: [
      "Say try (risky code), throw (signal error), catch (handle error)",
      "Mention finally or try-with-resources for cleanup",
      "Recommend catching specific exceptions and not swallowing"
    ]
  },
  {
    id: 21,
    title: "Generics and Templates",
    domain: "Programming & OOP",
    definition:
      "Generics (Java, C#, TypeScript) and Templates (C++) are language features that allow types or functions to be written with type parameters. Code is written once and reused for many types without duplication, while preserving type safety. For example, a single List<T> can be List<Integer> or List<String>.",
    keyConcepts: [
      "Type parameter: Placeholder (e.g. T, E) replaced by concrete type at use site",
      "Type safety: Compiler checks that operations match the actual type; avoids runtime casts",
      "Code reuse: One generic class or function for many types (e.g. List<T>, sort<T>)",
      "Bounded type (Java): T extends Comparable<T> — T must be subtype of given type",
      "C++ templates: Compiler generates separate code for each type (instantiation)",
      "Erasure (Java): Type parameters removed at runtime; C++ keeps full type info at compile time"
    ],
    examples: [
      "List<String> names = new ArrayList<>(); — type-safe list of strings",
      "public <T> T getFirst(List<T> list) { return list.get(0); } — generic method",
      "template<typename T> void swap(T& a, T& b) { ... } — C++ template function"
    ],
    realWorldApplications: [
      "Collections: List<T>, Map<K,V>, Set<E> for any element type",
      "Algorithms: sort, search work on any comparable type",
      "APIs and libraries: one implementation for many types without duplication"
    ],
    advantages: [
      "Type safety: compiler catches type errors instead of runtime",
      "No need to duplicate code for each type (e.g. one List for all types)",
      "Better readability: List<String> is clearer than list of Object",
      "Reusable algorithms and data structures"
    ],
    limitations: [
      "Java type erasure: generic type info not available at runtime",
      "C++ templates can lead to code bloat (one copy per type)",
      "Syntax can be complex (wildcards, bounds, template metaprogramming)",
      "Some operations (e.g. new T()) not possible in Java due to erasure"
    ],
    vivaQuestions: [
      { question: "What is type erasure in Java generics?", hint: "Type parameters removed at runtime; only raw type remains" },
      { question: "Why use generics instead of Object or void*?", hint: "Type safety at compile time; no casting; clearer intent" },
      { question: "What is a bounded type parameter?", hint: "T extends SomeClass — T must be subtype of SomeClass" },
      { question: "How do C++ templates differ from Java generics?", hint: "C++ generates code per type; Java erases and uses one implementation" }
    ],
    defenceAnswer: {
      intro:
        "Generics and templates let us write code that works with many types while keeping type safety. Instead of writing a list for integers and another for strings, we write List<T> once and use List<Integer> or List<String>. The compiler checks types and we avoid casting and many runtime errors.",
      coreExplanation: [
        "A generic class or function has one or more type parameters — often T, E, K, V. When we use it we supply concrete types: List<String>, Map<Integer, String>. The compiler treats the generic as if it were written for that type, so we get type-safe operations. For example, get(0) on List<String> returns String; no cast needed.",
        "In Java, generics are implemented with type erasure: after compilation, type parameters are removed and replaced with Object (or bounds). So at runtime there is only one List class. We cannot create new T() or get T.class in Java because T is not available at runtime. But we get type safety at compile time: the compiler inserts casts and checks that we don't put the wrong type in a list.",
        "Bounded type parameters restrict what T can be. In Java, T extends Comparable<T> means T must be a subtype of Comparable<T>, so we can call compareTo. In C++, we can use concepts (C++20) or static_assert to constrain template parameters. This lets generic code use operations that only some types support.",
        "In C++, templates are expanded at compile time: the compiler generates a separate version of the function or class for each type used. So vector<int> and vector<string> produce different code. There is no erasure — full type information is available. The downside is longer compile times and possible code bloat.",
        "We use generics for containers (list, map, set), utility methods (compare, swap), and APIs that should work with any type. Good practice is to use meaningful names (T for type, E for element, K and V for key and value) and to add bounds only when we need to call methods on the type parameter."
      ],
      exampleApplication:
        "A repository class might be Repository<User> or Repository<Order>. We write one implementation with methods like findById(id): T and save(entity: T). The same code works for User and Order; the compiler ensures we don't mix types. Without generics we would use Object or separate classes for each entity and lose type safety. With generics we get one implementation and full type checking.",
      conclusion:
        "Generics and templates are essential for reusable, type-safe code. They eliminate duplication and casting while making intent clear. Understanding type parameters, bounds, and the difference between Java erasure and C++ code generation helps in both exams and real design."
    },
    keyTerms: ["Type Parameter", "Generics", "Templates", "Type Erasure", "Bounded Type", "Type Safety"],
    speakingTips: [
      "Define generics as 'code parameterised by type'",
      "Give one example: List<T> or Map<K,V>",
      "Mention type safety and code reuse in one sentence"
    ]
  },
  {
    id: 22,
    title: "Algorithm Complexity (Big O Notation)",
    domain: "Programming & OOP",
    definition:
      "Algorithm complexity describes how the time or space required by an algorithm grows as the input size grows. Big O notation gives an upper bound on growth rate, ignoring constants and lower-order terms. It helps us compare algorithms and choose the right one for the problem size and constraints.",
    keyConcepts: [
      "Big O: Upper bound — algorithm does no worse than this growth (e.g. O(n²) means at most order of n²)",
      "Time complexity: How run time grows with input size n",
      "Space complexity: How extra memory (excluding input) grows with n",
      "Common orders: O(1) constant, O(log n) logarithmic, O(n) linear, O(n log n), O(n²) quadratic, O(2^n) exponential",
      "Best, average, worst case: We often care about worst case for guarantee; average for typical behaviour",
      "Amortized analysis: Average cost per operation over a sequence (e.g. dynamic array append)"
    ],
    examples: [
      "Single loop over n elements: O(n) time",
      "Binary search: O(log n) — each step halves the search space",
      "Nested loops over n: O(n²) — e.g. bubble sort, comparing all pairs"
    ],
    realWorldApplications: [
      "Choosing data structures: O(log n) search in tree vs O(1) in hash table",
      "Scalability: O(n²) may be fine for n=100 but not for n=10^6",
      "Interview and exam problems: justify solution with complexity"
    ],
    advantages: [
      "Machine-independent way to compare algorithms",
      "Reveals bottlenecks (e.g. nested loop → quadratic)",
      "Guides design: aim for lower complexity when possible",
      "Standard language for interviews and technical discussion"
    ],
    limitations: [
      "Hides constants: 2n and 1000n are both O(n)",
      "Worst case may be rare; average case might matter more",
      "Does not account for cache, I/O, or constant factors in practice",
      "Small n: simpler O(n²) code may beat complex O(n log n) code"
    ],
    vivaQuestions: [
      { question: "What does O(n log n) mean?", hint: "Growth proportional to n times log n; e.g. merge sort, heapsort" },
      { question: "Why do we ignore constants in Big O?", hint: "Focus on growth as n gets large; constants matter less" },
      { question: "Time complexity of binary search?", hint: "O(log n) — each step halves the input" },
      { question: "Difference between time and space complexity?", hint: "Time: how long it runs; Space: extra memory used (often similar analysis)" }
    ],
    defenceAnswer: {
      intro:
        "Algorithm complexity tells us how the cost of an algorithm — in time or space — grows as the input size grows. Big O notation describes the upper bound of this growth in a simple, machine-independent way. We use it to compare algorithms and to predict how they will scale.",
      coreExplanation: [
        "Big O gives an upper bound: we say an algorithm is O(f(n)) if, for large n, the cost is at most proportional to f(n), ignoring constant factors and lower-order terms. So 5n² + 3n + 10 is O(n²). We ignore the 5, 3, and 10 because as n grows, the n² term dominates. This lets us focus on growth rate: linear is better than quadratic, and logarithmic is better than linear.",
        "Time complexity is how many steps (or basic operations) the algorithm takes as a function of input size n. A single loop over n elements is O(n). Two nested loops over n are O(n²). Binary search is O(log n) because we halve the search space each step. We usually care about worst-case time so we have a guarantee; sometimes we analyse average case (e.g. quick sort).",
        "Space complexity is the extra memory used besides the input. Recursion uses stack space — depth of recursion matters. An algorithm that allocates an array of size n uses O(n) extra space. We can often trade space for time (e.g. hash table for O(1) lookup but O(n) space).",
        "Common complexities: O(1) constant — same cost regardless of n (e.g. array index, hash lookup). O(log n) — divide and conquer (binary search, balanced tree). O(n) — single pass (linear search, one loop). O(n log n) — efficient sorting (merge, quick, heap sort). O(n²) — nested loops (bubble sort, simple comparisons). O(2^n) — exponential (naive Fibonacci, subset enumeration). We want to avoid exponential and high-degree polynomial when n can grow.",
        "In practice we use Big O to choose: for large n we prefer O(n log n) over O(n²) for sorting; we prefer O(log n) or O(1) over O(n) for search when we do many lookups. We also use amortized analysis when a single operation can be expensive but the average over many operations is good — e.g. dynamic array append is O(1) amortized."
      ],
      exampleApplication:
        "Suppose we have a million records and we need to search often. Linear search is O(n) per search — a million steps per query. If we sort once, O(n log n), and then use binary search, each query is O(log n) — about 20 steps. So we pay the sort cost once and get fast queries. Big O makes this comparison clear: O(log n) vs O(n) per search. For a few searches linear might be fine; for many searches we sort and use binary search.",
      conclusion:
        "Big O notation is the standard way to express and compare algorithm complexity. Understanding time and space complexity, and the common orders (constant, log, linear, n log n, quadratic, exponential), helps us design and choose algorithms that scale. It is fundamental for exams and for writing efficient software."
    },
    keyTerms: ["Big O", "Time Complexity", "Space Complexity", "Worst Case", "Asymptotic", "Amortized"],
    speakingTips: [
      "Define Big O as 'upper bound on growth rate, ignoring constants'",
      "List 3–4 common orders: O(1), O(log n), O(n), O(n²)",
      "Give one example each: e.g. binary search O(log n), two loops O(n²)"
    ]
  }
];

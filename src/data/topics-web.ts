import { Topic } from "./types";

export const webTopics: Topic[] = [
  {
    id: 23,
    title: "HTML5 and Semantic Web",
    domain: "Web Technologies",
    definition: "HTML5 is the fifth major version of the HyperText Markup Language used to structure and present content on the web. The Semantic Web refers to using meaningful HTML elements that describe the purpose of content (e.g., header, nav, article, section, footer) rather than generic divs, improving accessibility, SEO, and maintainability.",
    keyConcepts: [
      "Semantic elements: <header>, <nav>, <article>, <section>, <aside>, <footer>, <main>",
      "Document structure: Logical hierarchy that reflects content meaning",
      "Accessibility: Screen readers and assistive tech use semantics to navigate",
      "New HTML5 features: <video>, <audio>, <canvas>, form inputs (email, date, range)",
      "Data attributes: data-* for custom metadata without affecting presentation",
      "DOCTYPE and character encoding: <!DOCTYPE html> and UTF-8 as standard"
    ],
    examples: [
      "Using <article> for a blog post and <section> for chapters within it",
      "<nav> for main navigation links, <aside> for related links or ads",
      "HTML5 form validation: type='email' and required attribute for client-side checks"
    ],
    realWorldApplications: [
      "News and blog sites using semantic structure for better SEO and readability",
      "E-commerce product pages with clear article/section hierarchy",
      "Government and educational sites meeting accessibility standards (WCAG)"
    ],
    advantages: [
      "Better SEO as search engines understand content structure",
      "Improved accessibility for screen readers and keyboard navigation",
      "Cleaner, self-documenting markup for developers",
      "Future-proof and standardised across modern browsers"
    ],
    limitations: [
      "Older browsers may not support all semantic elements fully",
      "Overuse of sections without headings can reduce clarity",
      "Semantic choice can be subjective (article vs section)",
      "Requires discipline; teams may still fall back to divs"
    ],
    vivaQuestions: [
      { question: "What is the difference between <article> and <section>?", hint: "Article is self-contained; section groups thematic content" },
      { question: "Why use semantic HTML instead of divs everywhere?", hint: "Accessibility, SEO, and meaning for both humans and machines" },
      { question: "Name three HTML5-only elements", hint: "video, audio, canvas, or semantic: header, nav, main, etc." },
      { question: "What are data attributes used for?", hint: "Custom data without affecting layout; used by JS or CSS" }
    ],
    defenceAnswer: {
      intro: "HTML5 is the current standard for building web pages, and the Semantic Web is about using elements that describe what content is, not just how it looks. This makes pages more accessible, easier for search engines to understand, and simpler to maintain.",
      coreExplanation: [
        "Before HTML5, developers used mostly <div> and <span> for layout. HTML5 introduced semantic elements like <header>, <nav>, <article>, <section>, <aside>, and <footer>. These tags tell both browsers and assistive technologies what each part of the page represents. For example, <nav> indicates navigation links, and <main> wraps the primary content of the page.",
        "Semantic structure improves accessibility. Screen readers can jump to main content, skip repeated navigation, and understand headings and landmarks. This is important for users with disabilities and is often required by accessibility standards like WCAG.",
        "Search engines use semantic markup to understand page structure. A well-structured page with proper headings and articles can rank better than one that is just a pile of divs. Crawlers can identify the main content versus sidebars and footers.",
        "HTML5 also added media elements like <video> and <audio> with built-in controls, the <canvas> element for graphics, and new form input types such as email, url, date, and number. These reduce the need for plugins and improve usability on mobile.",
        "Using data-* attributes, we can attach custom information to elements without affecting styling. JavaScript can read these for behaviour, and they keep markup clean. Overall, semantic HTML5 leads to better maintainability and a more inclusive web."
      ],
      exampleApplication: "On a news website, the top of the page would be wrapped in <header>, the menu in <nav>, each news story in <article> with <section> for different parts of the story, related links in <aside>, and site links and copyright in <footer>. A screen reader user can jump straight to the first article, and Google can clearly identify the main content."
      ,
      conclusion: "In short, HTML5 and semantic markup make the web more meaningful and usable. By choosing the right elements, we improve accessibility, SEO, and code quality, which are essential for any serious web project."
    },
    keyTerms: ["Semantic HTML", "HTML5", "Accessibility", "WCAG", "SEO", "Document outline", "Data attributes"],
    speakingTips: [
      "Define semantic as 'meaningful' and contrast with presentational divs",
      "Give one accessibility and one SEO benefit with concrete examples",
      "Mention at least three semantic tags: header, nav, article, section, footer"
    ]
  },
  {
    id: 24,
    title: "CSS3 and Responsive Design",
    domain: "Web Technologies",
    definition: "CSS3 is the latest evolution of Cascading Style Sheets, adding features like flexbox, grid, transitions, animations, and media queries. Responsive design is an approach where layouts and styles adapt to different screen sizes (mobile, tablet, desktop) using fluid grids, flexible images, and media queries, often following a mobile-first strategy.",
    keyConcepts: [
      "Media queries: @media (min-width: 768px) to apply styles by viewport size",
      "Flexbox: One-dimensional layout (row or column) with flex-grow, shrink, align",
      "CSS Grid: Two-dimensional layout with rows and columns",
      "Fluid units: %, vw, vh, rem, em for scalable layouts and typography",
      "Mobile-first: Base styles for small screens, then enhance for larger",
      "Transitions and transforms: Smooth animations and layout shifts"
    ],
    examples: [
      "Navigation that stacks vertically on mobile and becomes horizontal on desktop",
      "CSS Grid for a card layout: grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))",
      "Flexbox centering: display: flex; justify-content: center; align-items: center;"
    ],
    realWorldApplications: [
      "E-commerce and news sites that work on phones and desktops",
      "Dashboards and admin panels that adapt to different monitors",
      "Landing pages and portfolios that look good on any device"
    ],
    advantages: [
      "Single codebase serves all devices, reducing maintenance",
      "Better user experience and lower bounce rates on mobile",
      "Improved SEO as Google favours mobile-friendly sites",
      "Flexbox and Grid simplify complex layouts without floats"
    ],
    limitations: [
      "Performance: large CSS and many media queries can add overhead",
      "Testing effort across many devices and breakpoints",
      "Older browsers may need fallbacks or polyfills",
      "Complex designs may still need JavaScript for some behaviour"
    ],
    vivaQuestions: [
      { question: "What is the difference between Flexbox and Grid?", hint: "Flexbox is 1D (row or column); Grid is 2D (rows and columns)" },
      { question: "Explain mobile-first CSS", hint: "Base styles for small screens; media queries add styles for larger" },
      { question: "What are rem and em units?", hint: "rem = root em; em is relative to parent; rem to root font size" },
      { question: "How do media queries work?", hint: "Apply CSS when conditions (e.g. min-width) are true" }
    ],
    defenceAnswer: {
      intro: "CSS3 provides the tools to style modern websites, and responsive design ensures that those websites work well on phones, tablets, and desktops. We achieve this with fluid layouts, flexible units, and media queries.",
      coreExplanation: [
        "Responsive design started with the need to support many screen sizes. Instead of building separate mobile and desktop sites, we use one HTML structure and change the layout with CSS. Media queries let us apply different styles based on viewport width, height, or device features. For example, we might use a single column on small screens and three columns on large ones.",
        "Mobile-first means we write base styles for the smallest screen first, then use min-width media queries to add or override styles for larger screens. This keeps the default lightweight and progressively enhances for bigger viewports.",
        "Flexbox is for one-dimensional layouts — either a row or a column. We use it for navigation bars, card rows, and centering content. Properties like justify-content and align-items control alignment. Grid is for two-dimensional layouts: we define rows and columns and place items in cells. Grid is ideal for page layouts and card grids.",
        "We use relative units like rem and em for typography so that text scales with user settings. Percentages and vw/vh make layouts fluid. Images are often set to max-width: 100% so they don’t overflow on small screens.",
        "CSS3 also adds transitions and transforms for smooth effects without JavaScript. Together, these techniques let us build one responsive, maintainable design that works across devices."
      ],
      exampleApplication: "A product listing page might use Grid with auto-fill and minmax so cards wrap and resize. On mobile, the nav becomes a hamburger menu (hidden by default, shown with a toggle). Font sizes use rem, and padding uses relative units so the same design scales from 320px to 1920px width."
      ,
      conclusion: "CSS3 and responsive design are standard practice today. Using media queries, Flexbox, Grid, and flexible units, we build sites that are maintainable and user-friendly on any device."
    },
    keyTerms: ["Media queries", "Flexbox", "CSS Grid", "Responsive", "Mobile-first", "Viewport", "rem/em"],
    speakingTips: [
      "Contrast Flexbox (1D) and Grid (2D) with one use case each",
      "Explain mobile-first in one sentence with a media query example",
      "Mention at least one relative unit (rem, %, vw) and why it matters"
    ]
  },
  {
    id: 25,
    title: "JavaScript and ES6+ Features",
    domain: "Web Technologies",
    definition: "JavaScript is the primary scripting language of the web, running in browsers and on servers (Node.js). ES6 (ECMAScript 2015) and later versions added major features: let/const, arrow functions, template literals, destructuring, spread/rest, Promises, async/await, classes, and modules, making the language more expressive and easier to maintain.",
    keyConcepts: [
      "let and const: Block-scoped declarations; const for values that don't reassign",
      "Arrow functions: () => {} with lexical 'this' and concise syntax",
      "Template literals: `Hello ${name}` for strings and multi-line text",
      "Destructuring: Unpacking arrays/objects into variables",
      "Spread and rest: ... for copying, merging, and variable arguments",
      "Promises and async/await: Asynchronous code without deep callbacks"
    ],
    examples: [
      "const greet = (name) => `Hello, ${name}`;",
      "const { id, title } = product; or const [first, ...rest] = arr;",
      "async function fetchData() { const res = await fetch(url); return res.json(); }"
    ],
    realWorldApplications: [
      "Front-end apps: form handling, DOM updates, API calls with async/await",
      "Node.js backends: reading files, calling APIs, handling requests",
      "Build tools and automation scripts using modern syntax"
    ],
    advantages: [
      "Cleaner, shorter code with less boilerplate",
      "Fewer bugs from block scope and const immutability",
      "Async/await makes asynchronous logic easier to read",
      "Modules (import/export) improve code organisation"
    ],
    limitations: [
      "Older browsers need transpilation (e.g. Babel) for ES6+",
      "Learning curve for developers used to older JS",
      "Async/await can hide parallelism; need Promise.all when appropriate",
      "Too much destructuring or chaining can hurt readability"
    ],
    vivaQuestions: [
      { question: "Difference between let, const, and var?", hint: "let/const block-scoped; var function-scoped; const no reassignment" },
      { question: "What is the 'this' in an arrow function?", hint: "Lexical — inherits from enclosing scope, not caller" },
      { question: "What does async/await do?", hint: "Write async code in a synchronous style; await pauses until Promise settles" },
      { question: "What is destructuring?", hint: "Unpacking values from arrays or properties from objects into variables" }
    ],
    defenceAnswer: {
      intro: "JavaScript is the language of the web, and ES6 and later versions have made it much more powerful and readable. Key additions include block-scoped variables, arrow functions, template literals, destructuring, and async/await for asynchronous code.",
      coreExplanation: [
        "Before ES6, we had only var, which is function-scoped and can lead to bugs. let and const are block-scoped: they exist only inside the block where they are declared. const is for values we don’t intend to reassign; the object or array can still be mutated, but the binding cannot change. This reduces accidental reassignment and makes intent clear.",
        "Arrow functions provide a shorter syntax and, importantly, lexical 'this'. In a regular function, 'this' depends on how the function is called. In an arrow function, 'this' comes from the surrounding scope, which is very helpful in callbacks and event handlers.",
        "Template literals use backticks and ${} for interpolation and multi-line strings. Destructuring lets us pull out array elements or object properties into variables in one line, which simplifies function parameters and return values. The spread operator (...) copies or merges arrays and objects; rest (...) collects remaining arguments into an array.",
        "Asynchronous code used to rely on callbacks, leading to callback hell. Promises represent a future value and can be chained with .then() and .catch(). async/await builds on Promises: we mark a function async and use await to pause until a Promise resolves, so async code looks almost like synchronous code.",
        "ES6+ also added classes (syntactic sugar over prototypes), modules (import/export), and other features. Together, these make JavaScript better suited for large applications and modern tooling."
      ],
      exampleApplication: "When fetching user data from an API, we might write: async function loadUser(id) { const res = await fetch(`/api/users/${id}`); const { name, email } = await res.json(); return { name, email }; }. Here we use async/await, template literals, and destructuring to keep the code short and clear."
      ,
      conclusion: "ES6+ has become the baseline for modern JavaScript. Understanding let/const, arrow functions, destructuring, and async/await is essential for both front-end and Node.js development in real projects."
    },
    keyTerms: ["ES6", "let/const", "Arrow function", "Promise", "async/await", "Destructuring", "Template literal"],
    speakingTips: [
      "Give a one-line example of arrow function and mention lexical 'this'",
      "Explain async/await as 'synchronous-looking' async code",
      "Compare var and let/const in terms of scope in one sentence"
    ]
  },
  {
    id: 26,
    title: "React.js / Frontend Frameworks",
    domain: "Web Technologies",
    definition: "React is a JavaScript library for building user interfaces, developed by Facebook. It uses a component-based architecture where the UI is built from reusable components, a virtual DOM for efficient updates, and a declarative style where you describe what the UI should look like for a given state. Similar front-end frameworks include Vue and Angular.",
    keyConcepts: [
      "Components: Reusable, composable UI pieces (function or class)",
      "Virtual DOM: In-memory representation of DOM; diffing and minimal updates",
      "JSX: Syntax that looks like HTML but compiles to React.createElement",
      "State and props: props flow down; state is internal, triggers re-render",
      "Hooks: useState, useEffect for state and side effects in function components",
      "Unidirectional data flow: Data flows down; events bubble up"
    ],
    examples: [
      "function Button({ label, onClick }) { return <button onClick={onClick}>{label}</button>; }",
      "const [count, setCount] = useState(0); setCount(c => c + 1);",
      "useEffect(() => { fetchData(); }, [dependency]); for side effects"
    ],
    realWorldApplications: [
      "Single-page applications (SPAs): dashboards, admin panels, social UIs",
      "E-commerce product pages and checkout flows",
      "Content and marketing sites with rich interactivity"
    ],
    advantages: [
      "Component reuse and clear structure for large UIs",
      "Virtual DOM reduces expensive DOM operations",
      "Rich ecosystem: routing, state management, testing tools",
      "React Native allows code reuse for mobile apps"
    ],
    limitations: [
      "Learning curve: JSX, hooks, and mental model of reactivity",
      "React is only the view layer; routing and state need extra libraries",
      "SEO for SPAs requires SSR or pre-rendering",
      "Boilerplate and tooling (build, bundler) can be heavy"
    ],
    vivaQuestions: [
      { question: "What is the Virtual DOM and why use it?", hint: "Lightweight copy of DOM; diff and update only what changed" },
      { question: "Difference between state and props?", hint: "Props from parent, read-only; state internal, can change" },
      { question: "What does useEffect do?", hint: "Run side effects after render; dependency array controls when" },
      { question: "What is JSX?", hint: "Syntax that looks like HTML; compiles to JavaScript (React elements)" }
    ],
    defenceAnswer: {
      intro: "React is a popular library for building user interfaces. It is component-based and declarative: you describe the UI for each state, and React updates the DOM efficiently using a virtual DOM. It is widely used in industry along with ecosystems like Vue and Angular.",
      coreExplanation: [
        "In React, the UI is built from components — small, reusable pieces that can receive props and hold state. A component can be a function or a class. Function components with Hooks are the recommended approach today. Each component returns a description of the UI (using JSX), and React turns that into actual DOM updates.",
        "The Virtual DOM is an in-memory tree that mirrors the real DOM. When state or props change, React builds a new virtual tree and compares it with the previous one (diffing). Only the differences are applied to the real DOM, which is slower to touch. This keeps the app responsive even with frequent updates.",
        "Data flow is unidirectional: parent components pass data down via props. Children cannot change props directly; they notify the parent via callbacks or state-lifting. This makes data flow predictable and easier to debug.",
        "Hooks like useState and useEffect add state and side effects to function components. useState returns a value and a setter; when you call the setter, React re-renders. useEffect runs after render and can fetch data, subscribe to events, or manipulate DOM; the dependency array controls when it runs.",
        "React does not include routing or global state management. Projects often use React Router and Redux or Context. React is just the view layer, so you combine it with other libraries to build a full application."
      ],
      exampleApplication: "A todo app might have a TodoList component that holds an array of todos in state. It maps over the array and renders a TodoItem for each, passing the todo and an onToggle callback as props. When the user clicks, the callback runs, the parent updates state, and React re-renders only the changed parts of the list."
      ,
      conclusion: "React’s component model, virtual DOM, and hooks make it a strong choice for complex UIs. Understanding components, state, props, and hooks is essential for front-end development in the React ecosystem."
    },
    keyTerms: ["Component", "Virtual DOM", "JSX", "State", "Props", "Hooks", "useEffect"],
    speakingTips: [
      "Define Virtual DOM in one sentence and mention diffing",
      "Give a simple example: useState or a small component",
      "State 'unidirectional data flow' and why it helps"
    ]
  },
  {
    id: 27,
    title: "Node.js and Server-Side JavaScript",
    domain: "Web Technologies",
    definition: "Node.js is a JavaScript runtime built on Chrome's V8 engine that runs JavaScript outside the browser, on the server. It uses an event-driven, non-blocking I/O model, making it efficient for I/O-heavy workloads like APIs, file handling, and real-time applications. npm is the default package manager for the Node ecosystem.",
    keyConcepts: [
      "Event loop: Single thread handling I/O asynchronously via callbacks",
      "Non-blocking I/O: Operations don't block; callbacks run when done",
      "npm: Package manager for installing and publishing packages",
      "Modules: CommonJS (require/module.exports) and ES modules (import/export)",
      "Streams: Reading/writing data in chunks for large files or network",
      "Express and frameworks: Building HTTP servers and REST APIs"
    ],
    examples: [
      "const http = require('http'); http.createServer((req, res) => { ... }).listen(3000);",
      "fs.readFile('file.txt', (err, data) => { ... }); non-blocking file read",
      "npm install express — then app.get('/', (req, res) => res.send('Hello'))"
    ],
    realWorldApplications: [
      "REST and GraphQL APIs powering web and mobile apps",
      "Real-time apps: chat, notifications, dashboards (with WebSockets)",
      "Build tools, scripts, and DevOps tooling (e.g. webpack, Babel)"
    ],
    advantages: [
      "One language (JavaScript) for front-end and back-end",
      "Fast for I/O-bound tasks due to event loop",
      "Large ecosystem (npm) and active community",
      "Scalable with clustering and microservices"
    ],
    limitations: [
      "Single-threaded; CPU-heavy tasks can block the event loop",
      "Callback-style code can become complex (mitigated by Promises/async)",
      "Less structure than some frameworks; need discipline for large apps",
      "Callback hell if not using async/await or Promises"
    ],
    vivaQuestions: [
      { question: "Why is Node.js non-blocking?", hint: "I/O is delegated; event loop runs callbacks when I/O completes" },
      { question: "What is the event loop?", hint: "Mechanism that processes events and callbacks on a single thread" },
      { question: "What is npm?", hint: "Node Package Manager — install and manage dependencies" },
      { question: "When is Node.js a bad choice?", hint: "CPU-intensive tasks that block the single thread" }
    ],
    defenceAnswer: {
      intro: "Node.js allows us to run JavaScript on the server. It is built on V8 and uses an event-driven, non-blocking I/O model, which makes it well suited for building APIs, handling many concurrent connections, and real-time applications.",
      coreExplanation: [
        "In a traditional server model, each request might get a new thread. Node uses a single thread and an event loop. When you start an I/O operation like reading a file or querying a database, Node doesn’t wait — it registers a callback and continues. When the I/O finishes, the callback is queued and run. This allows one process to handle many concurrent connections without creating thousands of threads.",
        "Non-blocking I/O means that slow operations (file system, network, database) do not block the thread. While waiting for a response from a database, Node can serve other requests. This is why Node is often chosen for I/O-heavy workloads like APIs and real-time systems.",
        "Node comes with built-in modules for HTTP, file system (fs), path, and more. We use require() for CommonJS or import for ES modules to load code. npm is the default package manager: we run npm install to add dependencies and npm run to execute scripts. The ecosystem is huge, so we can quickly add libraries for web frameworks, databases, and utilities.",
        "For web servers, Express is the most common framework. We define routes, middleware for logging or auth, and send JSON or HTML responses. Node can also stream data, which is useful for large files or real-time feeds.",
        "The main drawback is that CPU-intensive work (heavy computation, image processing) runs on the same single thread and can block the event loop. For such tasks, we use worker threads, separate processes, or offload to other services."
      ],
      exampleApplication: "A simple REST API might use Express: app.get('/users', async (req, res) => { const users = await db.getUsers(); res.json(users); }). When a client requests /users, Node handles the request, waits for the database asynchronously without blocking, and sends the JSON response. Many such requests can be in flight at once."
      ,
      conclusion: "Node.js brings JavaScript to the server with a model that excels at I/O and concurrency. Understanding the event loop, non-blocking I/O, and the npm ecosystem is important for back-end and full-stack development."
    },
    keyTerms: ["Event loop", "Non-blocking I/O", "npm", "V8", "Express", "Callback", "Module"],
    speakingTips: [
      "Explain non-blocking in one sentence with an example (e.g. file read)",
      "Mention single thread + event loop and why it scales for I/O",
      "Name one advantage (one language) and one limitation (CPU-bound)"
    ]
  },
  {
    id: 28,
    title: "RESTful APIs and Web Services",
    domain: "Web Technologies",
    definition: "REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs use HTTP methods (GET, POST, PUT, DELETE) to perform operations on resources identified by URLs. Resources are represented in formats like JSON or XML, and the API is stateless — each request carries enough information for the server to process it.",
    keyConcepts: [
      "Resources: Entities identified by URIs (e.g. /users/1, /orders)",
      "HTTP methods: GET (read), POST (create), PUT/PATCH (update), DELETE (remove)",
      "Stateless: No session state on server; each request self-contained",
      "Status codes: 200 OK, 201 Created, 400 Bad Request, 404 Not Found, 500 Error",
      "JSON: Common format for request and response bodies",
      "Idempotency: GET, PUT, DELETE same result if repeated; POST creates new each time"
    ],
    examples: [
      "GET /api/products — list products; GET /api/products/5 — get product 5",
      "POST /api/orders with body — create order; DELETE /api/orders/3 — delete order 3",
      "PUT /api/users/2 with body — full update; PATCH for partial update"
    ],
    realWorldApplications: [
      "Mobile and web apps consuming backend APIs for data",
      "Microservices communicating via HTTP REST",
      "Third-party integrations (e.g. payment, maps, social login)"
    ],
    advantages: [
      "Simple, uses standard HTTP and widely understood",
      "Stateless design scales well and is cacheable",
      "Language- and platform-independent",
      "Easy to test with tools like Postman or curl"
    ],
    limitations: [
      "Over-fetching or under-fetching (e.g. need multiple calls for related data)",
      "No standard for versioning or documentation (often use OpenAPI)",
      "REST is not a strict protocol; implementations vary",
      "Real-time or subscription patterns need WebSockets or similar"
    ],
    vivaQuestions: [
      { question: "What does stateless mean in REST?", hint: "Server doesn't store client state; each request has all needed info" },
      { question: "When to use POST vs PUT?", hint: "POST create new resource; PUT replace existing at known URI" },
      { question: "What HTTP status codes do you know?", hint: "2xx success, 4xx client error, 5xx server error" },
      { question: "What is idempotency?", hint: "Same request repeated has same effect; GET, PUT, DELETE typically idempotent" }
    ],
    defenceAnswer: {
      intro: "REST is a way of designing web APIs so that clients interact with resources using HTTP methods and URLs. RESTful APIs are stateless, use standard HTTP, and typically exchange data in JSON. They are the backbone of most modern web and mobile applications.",
      coreExplanation: [
        "In REST, everything we manage is a resource: users, products, orders. Each resource is identified by a URI, for example /api/users or /api/orders/42. Clients perform actions using HTTP methods: GET to read, POST to create, PUT or PATCH to update, and DELETE to remove. The same URL can behave differently based on the method, which keeps the API consistent and predictable.",
        "Statelessness means the server does not keep session state between requests. Each request must include everything the server needs — for example, authentication in headers. The server can then scale horizontally because any server can handle any request. Caching is also easier: GET responses can be cached by proxies and browsers.",
        "We use HTTP status codes to indicate result: 200 for success, 201 for created, 400 for bad request, 401 unauthorized, 404 not found, 500 server error. The body usually carries the resource representation, often in JSON. This convention makes it easy for different clients and languages to integrate.",
        "Good REST design uses nouns for resources and HTTP methods for actions. We avoid verbs in URLs — we use POST /api/orders instead of /api/createOrder. Nested resources can be represented like /api/orders/1/items. Versioning is often done via URL prefix (/api/v1/) or headers.",
        "REST is not a standard but a style. Practices like filtering (e.g. ?status=active), pagination, and error format can vary. Documentation with OpenAPI (Swagger) helps teams agree on contract. For real-time updates, we combine REST with WebSockets or Server-Sent Events."
      ],
      exampleApplication: "An e-commerce app might call GET /api/products?category=books to list books, GET /api/products/101 for one product, POST /api/cart/items with a body to add an item, and DELETE /api/cart/items/3 to remove it. The same API can serve the website, mobile app, and partners."
      ,
      conclusion: "RESTful APIs provide a simple, scalable way to expose and consume services over HTTP. Understanding resources, methods, statelessness, and status codes is essential for back-end and full-stack development."
    },
    keyTerms: ["REST", "HTTP methods", "Stateless", "Resource", "URI", "JSON", "Idempotent"],
    speakingTips: [
      "List the four main HTTP methods and their meaning in one sentence each",
      "Explain stateless in one sentence and why it helps scaling",
      "Give one example URL and method (e.g. GET /api/users/1)"
    ]
  },
  {
    id: 29,
    title: "HTTP/HTTPS Protocol",
    domain: "Web Technologies",
    definition: "HTTP (HyperText Transfer Protocol) is the application-layer protocol used for communication between clients (e.g. browsers) and servers on the web. It is request-response based and stateless. HTTPS is HTTP over TLS/SSL, which encrypts the data in transit and provides authentication of the server, protecting against eavesdropping and tampering.",
    keyConcepts: [
      "Request: Method, URL, headers, optional body (e.g. GET, POST)",
      "Response: Status code, headers, body (HTML, JSON, etc.)",
      "Headers: Content-Type, Authorization, Cookie, Cache-Control, and many more",
      "TLS/SSL: Encryption and server authentication for HTTPS",
      "Connection: Historically one request per connection; HTTP/2 allows multiplexing",
      "Stateless: No built-in session; cookies or tokens used for state"
    ],
    examples: [
      "GET /index.html HTTP/1.1 Host: example.com — request for a page",
      "HTTP/1.1 200 OK Content-Type: application/json — success with JSON",
      "HTTPS uses port 443; certificate validates server identity"
    ],
    realWorldApplications: [
      "Every web page load, API call, and form submit uses HTTP/HTTPS",
      "APIs and microservices communicating over HTTP",
      "Secure login and payment flows over HTTPS"
    ],
    advantages: [
      "Simple text-based protocol (for HTTP/1), human-readable",
      "HTTPS ensures confidentiality and integrity in transit",
      "Widely supported and works with firewalls and proxies",
      "Stateless design simplifies servers and caching"
    ],
    limitations: [
      "HTTP/1.1 can have latency with many small requests (no multiplexing)",
      "No encryption in plain HTTP — sensitive data at risk",
      "Certificate management and renewal for HTTPS",
      "Protocol itself does not define auth — we add cookies/JWT etc."
    ],
    vivaQuestions: [
      { question: "What is the difference between HTTP and HTTPS?", hint: "HTTPS adds TLS encryption and server authentication" },
      { question: "What are HTTP headers used for?", hint: "Metadata: content type, auth, cookies, caching, etc." },
      { question: "What does a 404 status mean?", hint: "Resource not found" },
      { question: "Why is HTTPS important for login forms?", hint: "Passwords encrypted in transit; prevent sniffing" }
    ],
    defenceAnswer: {
      intro: "HTTP is the protocol that powers the web: browsers send requests, servers send responses. HTTPS is the secure version that encrypts data and verifies the server, which is essential for login, payments, and any sensitive data.",
      coreExplanation: [
        "An HTTP request has a method (GET, POST, etc.), a URL, headers, and optionally a body. A response has a status code (e.g. 200, 404), headers, and a body. Headers carry metadata: Content-Type says what the body is (HTML, JSON), Authorization can carry a token, and Set-Cookie can set cookies. The protocol is text-based and stateless — the server does not remember previous requests.",
        "GET is used to retrieve a resource and should not change server state. POST is used to submit data, often creating a resource. PUT and DELETE are used for update and delete. Browsers and servers follow these conventions so that caches and tools can behave correctly.",
        "HTTPS runs HTTP over TLS (or SSL). TLS provides encryption so that anyone on the network cannot read or alter the data. It also provides server authentication: the server presents a certificate, and the client checks that it is signed by a trusted CA. That way we know we are talking to the right server and not an attacker.",
        "Without HTTPS, passwords and personal data sent over HTTP can be intercepted. Modern best practice is to use HTTPS everywhere and to mark cookies as Secure and HttpOnly. Browsers also treat HTTPS as a signal for features like geolocation.",
        "HTTP/2 and HTTP/3 improve performance with multiplexing and other optimisations, but the basic request-response model and use of methods and status codes remain. Understanding HTTP and HTTPS is fundamental for web development and security."
      ],
      exampleApplication: "When you open https://example.com/login and submit a form, the browser sends a POST request with the credentials in the body. The connection is encrypted by TLS, so the password is not sent in clear text. The server responds with 200 and maybe Set-Cookie for a session, or 401 if the login fails."
      ,
      conclusion: "HTTP defines how clients and servers communicate on the web; HTTPS adds encryption and authentication. Knowing methods, status codes, headers, and why HTTPS is required for sensitive data is essential for building and securing web applications."
    },
    keyTerms: ["HTTP", "HTTPS", "TLS/SSL", "Request", "Response", "Status code", "Header"],
    speakingTips: [
      "State the difference between HTTP and HTTPS in one sentence",
      "Name at least two status codes and their meaning",
      "Mention one header (e.g. Content-Type or Authorization)"
    ]
  },
  {
    id: 30,
    title: "Web Security (XSS, CSRF, SQL Injection)",
    domain: "Web Technologies",
    definition: "Web security protects applications and users from attacks. Cross-Site Scripting (XSS) occurs when an attacker injects malicious scripts into pages viewed by other users. Cross-Site Request Forgery (CSRF) tricks a user's browser into sending unwanted requests to a site where the user is authenticated. SQL Injection happens when user input is concatenated into SQL queries, allowing attackers to run arbitrary SQL.",
    keyConcepts: [
      "XSS: Injecting script (e.g. via input or URL); stored vs reflected XSS",
      "XSS prevention: Escape output, use Content-Security-Policy, avoid eval/innerHTML with user data",
      "CSRF: Forged request from another site using user's cookies/session",
      "CSRF prevention: CSRF tokens, SameSite cookies, check Referer/Origin",
      "SQL Injection: ' OR 1=1 — style input to alter query logic",
      "SQL injection prevention: Parameterised queries / prepared statements, never concatenate input"
    ],
    examples: [
      "XSS: Comment containing <script>alert('XSS')</script> shown to others",
      "CSRF: Malicious site has <form action='https://bank.com/transfer'> with auto-submit",
      "SQL: Login with username ' OR '1'='1' to bypass password check"
    ],
    realWorldApplications: [
      "Every web app must prevent XSS in user-generated content and forms",
      "Banking and e-commerce protect against CSRF for state-changing actions",
      "Any app using SQL must use parameterised queries to avoid injection"
    ],
    advantages: [
      "Defence in depth: multiple controls reduce risk",
      "Standard techniques (parameterised queries, CSP) are well understood",
      "Frameworks often provide built-in protections (e.g. CSRF tokens)",
      "Preventing these protects both data and user trust"
    ],
    limitations: [
      "Developers must apply controls consistently; one mistake can compromise",
      "CSP and escaping can break legitimate content if misconfigured",
      "New attack variants and bypasses appear over time",
      "Security is ongoing: updates, logging, and monitoring needed"
    ],
    vivaQuestions: [
      { question: "What is XSS and how do you prevent it?", hint: "Script injection; escape output, CSP, sanitise input" },
      { question: "What is CSRF and how do you prevent it?", hint: "Forged request using user's session; CSRF token, SameSite cookie" },
      { question: "How does SQL injection work and how to prevent it?", hint: "Input in query changes logic; use parameterised queries" },
      { question: "Difference between stored and reflected XSS?", hint: "Stored in DB and shown to many; reflected in response to one request" }
    ],
    defenceAnswer: {
      intro: "Web applications face several common attacks: XSS, CSRF, and SQL injection. Understanding what they are and how to prevent them is essential for building secure applications and for exams and interviews.",
      coreExplanation: [
        "XSS (Cross-Site Scripting) means an attacker gets their script to run in another user's browser. If we display user input without escaping, someone could submit a comment like <script>steal_cookies()</script>. When others view the page, the script runs. In stored XSS the payload is saved (e.g. in a database); in reflected XSS it is echoed back in the same response (e.g. from a search parameter). Prevention: always escape output for the context (HTML, JavaScript, URL), use Content-Security-Policy to limit script sources, and avoid putting user data into eval or innerHTML.",
        "CSRF (Cross-Site Request Forgery) exploits the fact that the browser sends cookies with every request to a site. A malicious site can include a form or image that submits to your site — for example, a transfer on a bank. The user is logged in, so the request carries their session cookie and the bank may execute the action. Prevention: use CSRF tokens (a secret value in the form that the server checks), set cookies with SameSite=Strict or Lax, and verify Origin or Referer for sensitive requests.",
        "SQL injection happens when we build SQL by concatenating user input. For example, login might do: SELECT * FROM users WHERE name='${username}'. If username is ' OR '1'='1', the condition becomes always true and the attacker can log in without a password. Attackers can also read or modify data, or drop tables. Prevention: never concatenate user input into SQL. Use parameterized queries (prepared statements) so the database treats input as data, not as part of the query.",
        "Defence in depth means we use several controls: input validation, output encoding, parameterised queries, HTTPS, secure cookies, and security headers. Frameworks often provide CSRF tokens and escaping helpers; we must use them correctly and keep dependencies updated.",
        "In exams and vivas, you may be asked to identify an attack from a scenario or to suggest mitigations. Always name the attack (XSS, CSRF, or SQL injection), explain in one sentence how it works, and list at least two concrete prevention measures."
      ],
      exampleApplication: "A blog allows comments. Without escaping, an XSS comment could steal session cookies. We escape HTML when rendering. For a 'Post comment' form, we use a CSRF token so a fake site cannot post as the user. If the site used raw SQL like 'INSERT INTO comments VALUES (\'' + userInput + '\')', an attacker could inject SQL; we use parameterised queries instead."
      ,
      conclusion: "XSS, CSRF, and SQL injection are among the most common web vulnerabilities. Preventing them requires correct output encoding, CSRF tokens, and parameterised queries, along with secure configuration and ongoing awareness of new threats."
    },
    keyTerms: ["XSS", "CSRF", "SQL Injection", "Parameterised query", "CSRF token", "Content-Security-Policy", "Escaping"],
    speakingTips: [
      "For each attack: one sentence what it is, one sentence how to prevent",
      "Give a very short example (e.g. ' OR 1=1 for SQL)",
      "Mention 'parameterised queries' and 'escape output' by name"
    ]
  },
  {
    id: 31,
    title: "Session Management and Authentication (JWT, OAuth)",
    domain: "Web Technologies",
    definition: "Authentication verifies who a user is; session management tracks that identity across requests. Traditional sessions store state on the server (e.g. in memory or a store) and send a session ID in a cookie. JWT (JSON Web Token) is a stateless token that encodes claims and can be verified without server-side storage. OAuth is a protocol that lets users authorise third-party applications to access their resources (e.g. 'Login with Google') without sharing passwords.",
    keyConcepts: [
      "Session: Server-side state identified by session ID in cookie",
      "JWT: Signed token (header.payload.signature) with claims; stateless verification",
      "OAuth 2.0: Authorization framework; roles: resource owner, client, auth server, resource server",
      "OAuth flows: Authorization code (web), implicit (legacy), client credentials (machine-to-machine)",
      "Secure cookies: HttpOnly, Secure, SameSite to reduce XSS/CSRF exposure",
      "Token storage: Where to keep JWT (memory, cookie, or localStorage — each has trade-offs)"
    ],
    examples: [
      "Login → server creates session, sets Set-Cookie: sessionId=abc; HttpOnly",
      "JWT payload: { sub: userId, exp: 1234567890 }; client sends in Authorization header",
      "OAuth: User clicks 'Login with Google' → redirect to Google → consent → redirect back with code → exchange for token"
    ],
    realWorldApplications: [
      "Any app with login: sessions or JWT for API and SPA auth",
      "Single Sign-On (SSO) and 'Login with Google/Facebook' via OAuth",
      "APIs and microservices using JWT for stateless auth"
    ],
    advantages: [
      "Sessions: Server controls invalidation; no token leakage in JS if HttpOnly",
      "JWT: Stateless, scales horizontally; good for APIs and multiple services",
      "OAuth: Users don't share passwords with third parties; delegated access",
      "Industry-standard patterns and libraries available"
    ],
    limitations: [
      "Sessions need storage and can be hard to scale across servers",
      "JWT revocation is difficult; short expiry and refresh tokens used",
      "OAuth is complex; misconfiguration can lead to security issues",
      "Token theft (XSS, network) still a risk; secure storage and HTTPS critical"
    ],
    vivaQuestions: [
      { question: "What is JWT and how is it verified?", hint: "Signed token with claims; verify signature with secret/public key" },
      { question: "Difference between session and JWT?", hint: "Session state on server; JWT stateless, self-contained" },
      { question: "What is OAuth used for?", hint: "Let user authorise third-party app to access resources without sharing password" },
      { question: "Why use HttpOnly and Secure on auth cookies?", hint: "HttpOnly: no JS access (XSS); Secure: only over HTTPS" }
    ],
    defenceAnswer: {
      intro: "Authentication and session management decide how we know who the user is and how we remember that across requests. We can use server-side sessions, JWTs for stateless auth, or OAuth for third-party login. Each has trade-offs between security, scalability, and complexity.",
      coreExplanation: [
        "In traditional session-based auth, the user logs in with credentials; the server creates a session (stored in memory or Redis), sets a session ID in a cookie, and sends it to the client. Subsequent requests send the cookie; the server looks up the session and knows the user. Sessions are easy to invalidate (delete the session) but require shared storage in a multi-server setup. Cookies should be HttpOnly (not readable by JavaScript, reducing XSS impact), Secure (HTTPS only), and SameSite (reduces CSRF).",
        "JWT (JSON Web Token) is a compact way to carry claims. It has three parts: header, payload (e.g. user id, expiry), and signature. The server signs the token with a secret or private key; later it verifies the signature and reads the payload. No server-side storage is needed, so JWTs work well across services and scale horizontally. The client typically sends the token in the Authorization header as Bearer <token>. Drawbacks: once issued, the token is valid until expiry unless we add a blocklist; we often use short-lived access tokens and refresh tokens to limit damage if a token is stolen.",
        "OAuth 2.0 is for authorisation: a user grants a client app access to their resources (e.g. profile) without giving the app their password. The user is sent to the authorisation server (e.g. Google), logs in there, and consents. The server redirects back with an authorisation code; the client exchanges it for an access token. The client then calls the resource server (e.g. Google APIs) with that token. Roles: resource owner (user), client (app), authorisation server, resource server. The authorization code flow is recommended for web apps because the code is exchanged server-side, keeping the token away from the browser.",
        "Choosing between session and JWT depends on the app. Sessions suit traditional server-rendered apps and when we need instant revocation. JWT suits APIs, SPAs, and microservices. OAuth is for 'Login with Google' or any delegated access. We can combine them: for example, our own login creates a session or JWT, and OAuth is used only for third-party sign-in.",
        "Security practices: strong passwords, HTTPS, secure cookie flags, short JWT expiry, refresh token rotation, and protecting against XSS and CSRF so that session or token theft is harder."
      ],
      exampleApplication: "A SPA might use JWT: after login, the server returns access and refresh tokens. The SPA stores the access token in memory (or a secure cookie) and sends it in the Authorization header. For 'Login with Google', we use OAuth: redirect to Google, user consents, we get a code, exchange it on our backend for tokens, then create our own session or JWT for the user."
      ,
      conclusion: "Session management and authentication are core to secure web apps. Understanding sessions, JWT, and OAuth, and when to use each, along with secure cookie and token practices, is essential for both implementation and exams."
    },
    keyTerms: ["Session", "JWT", "OAuth", "Cookie", "HttpOnly", "Authorization code", "Refresh token"],
    speakingTips: [
      "Define JWT in one sentence and mention 'stateless'",
      "Explain OAuth in one sentence: 'login without giving password to the app'",
      "Name at least two secure cookie attributes (HttpOnly, Secure, SameSite)"
    ]
  },
  {
    id: 32,
    title: "WebSockets and Real-Time Communication",
    domain: "Web Technologies",
    definition: "WebSockets provide a full-duplex, persistent connection between client and server over a single TCP connection. Unlike HTTP's request-response pattern, both sides can send messages at any time without polling. This is used for real-time features like chat, live notifications, gaming, and dashboards where low latency and instant updates matter.",
    keyConcepts: [
      "Full-duplex: Client and server can send independently at any time",
      "Persistent connection: One connection reused; no repeated handshake",
      "Upgrade: Initial HTTP request with Upgrade: websocket; then protocol switch",
      "Frames: Binary or text messages; low overhead after connection",
      "Use cases: Chat, live feeds, collaborative editing, real-time dashboards",
      "Libraries: Socket.io (with fallbacks), ws in Node.js"
    ],
    examples: [
      "Chat: User sends message → server broadcasts to other users on same channel",
      "Live score: Server pushes score updates to all connected clients",
      "Collaborative doc: Each keystroke sent to server, server broadcasts to other editors"
    ],
    realWorldApplications: [
      "Chat applications (Slack, WhatsApp Web, in-app chat)",
      "Live dashboards (trading, monitoring, analytics)",
      "Multiplayer games and collaborative tools (Google Docs–style)"
    ],
    advantages: [
      "Low latency; no polling overhead",
      "Efficient: single connection, small frame overhead",
      "Bidirectional; server can push whenever needed",
      "Works through most proxies and firewalls (HTTP upgrade)"
    ],
    limitations: [
      "More complex than REST; connection and reconnection logic needed",
      "Scaling: need sticky sessions or pub/sub (e.g. Redis) for multiple servers",
      "No built-in reconnection or heartbeat; often implemented by libraries",
      "Some corporate proxies may block or alter WebSocket traffic"
    ],
    vivaQuestions: [
      { question: "What is the main advantage of WebSocket over HTTP for real-time?", hint: "Persistent connection, bidirectional; no polling" },
      { question: "How does a WebSocket connection start?", hint: "HTTP request with Upgrade: websocket; server responds 101 Switching Protocols" },
      { question: "When would you use WebSockets vs REST?", hint: "WebSocket: real-time, push; REST: request-response, CRUD" },
      { question: "What is full-duplex?", hint: "Both sides can send at the same time, independently" }
    ],
    defenceAnswer: {
      intro: "WebSockets allow real-time, two-way communication between browser and server over a single long-lived connection. Unlike HTTP, where the client always requests and the server responds, with WebSockets either side can send data at any time, which is ideal for chat, notifications, and live updates.",
      coreExplanation: [
        "HTTP is request-response: the client sends a request and waits for a response. For real-time updates we would have to poll — the client repeatedly asks 'any new data?' — which wastes bandwidth and adds delay. WebSockets solve this by opening one connection and keeping it open. After an initial HTTP upgrade handshake, the protocol switches to WebSocket and both sides can send frames (text or binary) at any time.",
        "The handshake is an HTTP GET with headers Upgrade: websocket and Connection: Upgrade. The server responds with 101 Switching Protocols and the connection becomes a WebSocket. From then on, data is sent as WebSocket frames with minimal overhead, which is efficient for frequent small messages.",
        "Use cases include chat (each message is pushed to recipients), live notifications (server pushes to connected clients), real-time dashboards (server pushes metrics), and collaborative editing (each change is broadcast). The server can push without the client asking, so latency is low.",
        "On the server we use libraries like ws in Node.js or similar in other languages. We handle connection, disconnect, and message events. For scaling across multiple servers, we use a message broker (e.g. Redis pub/sub) so that a message received on one server is forwarded to connections on others. The client uses the WebSocket API or a library like Socket.io that adds reconnection and fallbacks.",
        "WebSockets are not a replacement for REST. We use REST for normal CRUD and one-off requests, and WebSockets when we need continuous, low-latency, server-push communication. Understanding both helps in choosing the right tool for each feature."
      ],
      exampleApplication: "In a chat app, when a user sends a message, the client sends it over the WebSocket. The server receives it, optionally stores it, and broadcasts to all other users in that room. Each client receives the message and updates the UI immediately. No polling; everyone sees new messages as they arrive."
      ,
      conclusion: "WebSockets enable real-time web applications by providing a persistent, bidirectional channel. Knowing how they differ from HTTP, how the connection is established, and when to use them is important for both design and implementation in exams and projects."
    },
    keyTerms: ["WebSocket", "Full-duplex", "Polling", "Upgrade", "Real-time", "Bidirectional", "Frame"],
    speakingTips: [
      "Contrast with HTTP: 'HTTP is request-response; WebSocket is persistent and bidirectional'",
      "Give one use case: chat or live notifications",
      "Mention the 101 Switching Protocols handshake briefly"
    ]
  },
  {
    id: 33,
    title: "Progressive Web Apps (PWA)",
    domain: "Web Technologies",
    definition: "A Progressive Web App (PWA) is a web application that uses modern web capabilities (service workers, manifest, responsive design) to deliver an app-like experience: installable on the home screen, works offline or on poor networks, and can send push notifications. PWAs bridge web and native apps without requiring a separate app store distribution.",
    keyConcepts: [
      "Service Worker: Script that runs in background; intercepts requests, caches responses",
      "Manifest: JSON file with name, icons, theme, display (standalone, fullscreen)",
      "Offline support: Cache-first or network-first strategies for assets and API",
      "Installability: Criteria (HTTPS, manifest, service worker, etc.) for 'Add to Home Screen'",
      "Push notifications: Service worker receives push events when app not in foreground",
      "Responsive and fast: Works on any device; perceived performance via caching"
    ],
    examples: [
      "Caching static assets (HTML, CSS, JS) for offline loading",
      "manifest.json with short_name, icons, start_url, display: standalone",
      "Push notification: server sends payload; service worker shows notification"
    ],
    realWorldApplications: [
      "E-commerce and news sites offering install and offline reading",
      "Internal tools and dashboards used like native apps",
      "Content and media apps with push and offline support"
    ],
    advantages: [
      "Single codebase for web and app-like experience",
      "No app store submission; updates deploy like a website",
      "Offline and low-network usability improves reach",
      "Engagement through push notifications and home screen install"
    ],
    limitations: [
      "Limited access to device APIs compared to native (e.g. some sensors, Bluetooth)",
      "iOS has historically had limited PWA support (improving over time)",
      "Service worker and caching logic can be complex to get right",
      "Discovery is harder than in app stores; depends on user visiting site"
    ],
    vivaQuestions: [
      { question: "What is a service worker?", hint: "Background script; can intercept requests and cache; works offline" },
      { question: "What is the web app manifest for?", hint: "Installability, name, icons, theme, display mode" },
      { question: "How does a PWA work offline?", hint: "Service worker caches assets/API responses; serves from cache when no network" },
      { question: "What makes an app 'progressive'?", hint: "Works for everyone; enhanced with service worker, manifest, etc. when supported" }
    ],
    defenceAnswer: {
      intro: "Progressive Web Apps are web applications that use service workers and a manifest to become installable, work offline, and support push notifications. They give users an app-like experience from the browser without needing a separate native app from an app store.",
      coreExplanation: [
        "The idea behind 'progressive' is that the app works for all users on the web, and those with supporting browsers get extra capabilities: install to home screen, offline support, and push notifications. So we build a normal responsive website first, then add a manifest and a service worker to make it a PWA.",
        "The service worker is a script that runs in the background, separate from the page. It can intercept fetch requests — for example, for HTML, CSS, JS, or API calls — and return cached responses when the network is unavailable or slow. We register the service worker from the main page; after that it can act on fetch events. Common strategies are cache-first (use cache if present) for static assets and network-first (try network, fall back to cache) for dynamic content.",
        "The web app manifest is a JSON file that describes the app: name, short name, icons in various sizes, start URL, display mode (standalone so it looks like an app without browser chrome), and theme colours. Browsers use this to show an 'Install' option and to display the app correctly when launched from the home screen.",
        "For push notifications, we request permission from the user and subscribe to a push service. The server can then send a push message; the service worker receives it even when the app is not open and can show a notification. This helps re-engage users.",
        "PWAs must be served over HTTPS. They are used by many companies for mobile and desktop to reduce development cost (one codebase) while still offering install, offline, and notifications. Limitations include less access to some device APIs than native apps and varying support on older browsers and iOS."
      ],
      exampleApplication: "A news PWA loads articles over the web. The service worker caches the shell (layout, CSS, JS) and recently read articles. When the user is offline, the app still opens and shows cached content. The user can install it from the browser menu; it opens in standalone mode. Breaking news can be sent via push notifications."
      ,
      conclusion: "PWAs extend the web with installability, offline support, and push notifications. Understanding the role of the service worker and manifest, and how they improve experience and reach, is important for modern web development and exams."
    },
    keyTerms: ["PWA", "Service Worker", "Manifest", "Offline", "Installable", "Push notification", "Cache strategy"],
    speakingTips: [
      "Define PWA in one sentence: web app that is installable, works offline, can push",
      "Explain service worker in one sentence: background script, intercepts requests, enables caching",
      "Mention manifest for install and display (standalone)"
    ]
  },
  {
    id: 34,
    title: "Cloud Computing and Deployment (AWS, Docker)",
    domain: "Web Technologies",
    definition: "Cloud computing is the delivery of computing resources (servers, storage, databases, networking) over the internet on demand, often with pay-per-use pricing. Deployment is the process of releasing an application to a running environment. AWS (Amazon Web Services) is a major cloud provider offering many services; Docker is a platform for packaging applications and their dependencies into containers that run consistently across development and production.",
    keyConcepts: [
      "Cloud models: IaaS (e.g. EC2), PaaS (e.g. Elastic Beanstalk), SaaS (e.g. Gmail)",
      "AWS core services: EC2 (VMs), S3 (storage), RDS (DB), Lambda (serverless)",
      "Docker: Image (read-only template), container (running instance), Dockerfile (build steps)",
      "Containers vs VMs: Containers share OS kernel; lighter and faster to start",
      "CI/CD: Automated build, test, and deploy (e.g. GitHub Actions, AWS CodePipeline)",
      "Scaling: Horizontal (more instances) vs vertical (bigger instance); load balancers"
    ],
    examples: [
      "Dockerfile: FROM node:18; COPY . .; RUN npm install; CMD ['node','server.js']",
      "AWS: EC2 for a server, S3 for file storage, RDS for PostgreSQL",
      "CI/CD: Push to main → run tests → build Docker image → deploy to ECS or Kubernetes"
    ],
    realWorldApplications: [
      "Web apps and APIs hosted on AWS, GCP, or Azure",
      "Microservices and apps deployed as Docker containers in production",
      "Startups and enterprises using cloud for scalability and cost efficiency"
    ],
    advantages: [
      "Scalability: scale up or out based on demand",
      "No need to manage physical servers; faster setup",
      "Docker ensures same environment in dev and production",
      "Pay for what you use; many managed services reduce ops burden"
    ],
    limitations: [
      "Cloud costs can grow if not monitored; vendor lock-in risk",
      "Docker adds abstraction; networking and storage can be complex",
      "Security and compliance responsibility shared with provider",
      "Learning curve for many services and best practices"
    ],
    vivaQuestions: [
      { question: "What is the difference between Docker and a VM?", hint: "Container shares OS kernel; VM has full OS; container lighter" },
      { question: "What is AWS EC2?", hint: "Virtual server in the cloud; IaaS" },
      { question: "What is a Dockerfile?", hint: "Instructions to build a Docker image (FROM, COPY, RUN, CMD)" },
      { question: "What is CI/CD?", hint: "Continuous Integration and Deployment; automate build, test, deploy" }
    ],
    defenceAnswer: {
      intro: "Cloud computing provides on-demand infrastructure and services over the internet, and deployment is how we get our applications running there. AWS is a leading cloud provider; Docker is a standard way to package and run applications in containers, making deployment consistent and portable.",
      coreExplanation: [
        "Cloud computing offers different levels: IaaS (Infrastructure as a Service) gives you VMs and networks — you manage OS and apps; examples are AWS EC2 and Azure VMs. PaaS (Platform as a Service) gives you a runtime and services — you deploy code; examples are Elastic Beanstalk and Heroku. SaaS is ready-to-use software like Gmail. We choose based on how much we want to manage versus how much flexibility we need.",
        "AWS provides many services: EC2 for virtual servers, S3 for object storage (files, backups), RDS for managed databases, Lambda for serverless functions, and many more. We can host a web app on EC2, store uploads in S3, and use RDS for the database. Understanding at least EC2, S3, and one database or serverless option is useful for interviews and projects.",
        "Docker packages an application and its dependencies into an image. A Dockerfile defines the build: base image (e.g. Node), copy code, install dependencies, set the command to run. We build an image and run it as a container. Containers share the host OS kernel but have isolated filesystem and network, so they are lighter than VMs and start quickly. The same image runs on a developer's laptop and in production, reducing 'works on my machine' issues.",
        "Deployment often involves CI/CD: when we push code, a pipeline runs tests, builds the Docker image, and deploys to a cloud service (e.g. ECS, Kubernetes, or a PaaS). We may use blue-green or rolling deployments to avoid downtime. Scaling can be horizontal (more containers or instances) behind a load balancer, or we use auto-scaling based on CPU or traffic.",
        "Security and cost matter: we use private networks, IAM roles, and secrets management in the cloud. We monitor usage to avoid surprise bills. Docker and cloud together form the basis of modern deployment; explaining these concepts clearly is important for both practical work and exams."
      ],
      exampleApplication: "A Node.js API might be written in a Dockerfile: FROM node:18, COPY package.json, RUN npm install --production, COPY ., CMD node server.js. We build the image and push to a registry. In AWS we could run it on ECS (container service) or Elastic Beanstalk. S3 holds uploaded files; RDS holds the database. CI/CD runs on every merge to main: test, build image, deploy."
      ,
      conclusion: "Cloud computing and Docker are central to how applications are built and deployed today. Understanding IaaS/PaaS, key AWS services, containers versus VMs, and basic CI/CD will help you in both development and viva discussions."
    },
    keyTerms: ["Cloud", "AWS", "Docker", "Container", "Image", "EC2", "CI/CD"],
    speakingTips: [
      "Define container in one sentence: packaged app with dependencies, runs consistently",
      "Name at least two AWS services (EC2, S3, RDS, Lambda) and what they do",
      "Mention one benefit of cloud: scalability or no server management"
    ]
  }
];

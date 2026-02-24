import { Topic } from "./types";

export const seTopics: Topic[] = [
  {
    id: 57,
    title: "Software Development Life Cycle (SDLC)",
    domain: "Software Engineering",
    definition:
      "SDLC is a structured process used to plan, design, build, test, deploy, and maintain software. It defines a series of phases from initial requirement gathering to final delivery and support, ensuring systematic and predictable software production.",
    keyConcepts: [
      "Phases: Requirements, Design, Implementation, Testing, Deployment, Maintenance",
      "Planning and feasibility: Assessing scope, cost, and technical viability",
      "Design: High-level and low-level design; architecture and module breakdown",
      "Implementation: Coding according to design and coding standards",
      "Verification and validation: Ensuring the product meets requirements and is fit for use",
      "Maintenance: Bug fixes, updates, and enhancements after release"
    ],
    examples: [
      "Waterfall: Sequential phases; each phase completes before the next begins",
      "A banking app: requirements from stakeholders, design of modules (auth, transactions), coding, testing, go-live, and ongoing support",
      "Academic project: problem statement, system design document, coding, testing report, deployment demo, and maintenance plan"
    ],
    realWorldApplications: [
      "Enterprise software projects where scope and timeline are fixed (e.g., payroll systems)",
      "Government and regulated industries requiring documented phases and audits",
      "Large teams where clear handoffs between analysis, design, and development are needed"
    ],
    advantages: [
      "Clear structure and milestones; easy to track progress and budget",
      "Well-defined deliverables at each phase; good for contracts and documentation",
      "Suits projects with stable, well-understood requirements",
      "Easier for new team members to understand the process"
    ],
    limitations: [
      "Changes in later phases are costly; little flexibility for changing requirements",
      "Working software comes late; customer feedback only after implementation",
      "Can be slow; not ideal for fast-moving or uncertain domains",
      "Risk of over-documentation and bureaucracy in small projects"
    ],
    vivaQuestions: [
      { question: "Name the main phases of SDLC.", hint: "Requirements, Design, Implementation, Testing, Deployment, Maintenance" },
      { question: "What is the difference between verification and validation?", hint: "Verification: built right; Validation: right product for the user" },
      { question: "When is a sequential SDLC model suitable?", hint: "When requirements are clear and stable, and changes are minimal" },
      { question: "What happens in the maintenance phase?", hint: "Bug fixes, patches, updates, and enhancements after release" }
    ],
    defenceAnswer: {
      intro:
        "The Software Development Life Cycle, or SDLC, is a structured approach to building software. It divides the work into clear phases from understanding what to build, to designing and coding it, testing it, deploying it, and then maintaining it. This helps teams deliver software in a predictable and manageable way.",
      coreExplanation: [
        "The first phase is requirements gathering and analysis. We talk to stakeholders, users, and business owners to understand what the system must do. We document functional requirements (features and behaviour) and non-functional requirements (performance, security, usability). We also do feasibility study. The output is a requirements specification that becomes the basis for all later work.",
        "Next comes design. We create high-level design: the overall architecture, main modules, and how they interact. Then we do detailed or low-level design: data structures, algorithms, and interfaces for each module. Design documents help developers know exactly what to build and reduce misunderstandings. Good design also considers scalability, security, and maintainability.",
        "Implementation is the coding phase. Developers write code according to the design and follow coding standards and best practices. Version control is used to manage code. Code reviews and unit testing are often done during this phase. The goal is to produce a working product that matches the design and requirements.",
        "Testing is a critical phase. We do unit testing, integration testing, system testing, and sometimes user acceptance testing (UAT) with real users. We find and fix defects so that the software meets quality standards. Testing can be manual or automated.",
        "After testing, we deploy the software to production or to users. This may involve installation, configuration, data migration, and training. Then we enter the maintenance phase: fixing bugs, applying patches, and adding small enhancements. Over time, the system may need major updates, which can start a new cycle of SDLC."
      ],
      exampleApplication:
        "Suppose we are building a college library management system. In requirements we list: issue/return books, search catalogue, fine calculation, user roles. In design we define modules: user management, catalogue, transactions, reports. We implement each module, write tests, and then do integration and system testing. We deploy on the college server and train librarians. Later we fix bugs and add features like SMS reminders—that is maintenance.",
      conclusion:
        "In summary, SDLC gives us a clear roadmap from idea to delivered software. The phases ensure we do not skip important steps like requirements or testing. Different models (like Waterfall or Agile) implement these phases in different ways, but the idea of a life cycle—plan, build, test, deploy, maintain—remains central to software engineering."
    },
    keyTerms: ["SDLC", "Requirements", "Design", "Implementation", "Verification", "Validation", "Maintenance"],
    speakingTips: [
      "List the six phases in order and give one sentence for each",
      "Distinguish verification (did we build it right?) from validation (did we build the right thing?)",
      "Mention that Waterfall and Agile are different ways to apply SDLC phases"
    ]
  },
  {
    id: 58,
    title: "Agile Methodology and Scrum",
    domain: "Software Engineering",
    definition:
      "Agile is an iterative and incremental approach to software development that emphasizes flexibility, customer collaboration, and delivering working software frequently. Scrum is a popular Agile framework that uses fixed-length sprints, roles like Product Owner and Scrum Master, and ceremonies such as Sprint Planning and Daily Stand-up.",
    keyConcepts: [
      "Iterative and incremental: Small releases, frequent feedback, and continuous improvement",
      "Scrum roles: Product Owner (prioritizes work), Scrum Master (facilitates process), Development Team (builds product)",
      "Sprint: Time-boxed iteration (e.g., 2 weeks) producing a potentially shippable increment",
      "Artifacts: Product Backlog, Sprint Backlog, Increment",
      "Ceremonies: Sprint Planning, Daily Stand-up, Sprint Review, Sprint Retrospective",
      "User stories and acceptance criteria for describing requirements in simple language"
    ],
    examples: [
      "A 2-week sprint: plan on day one, daily 15-minute stand-ups, demo at end, retrospective to improve",
      "Product Backlog: As a user I want to reset password so that I can regain access — then broken into tasks in Sprint Backlog",
      "Sprint Review: team demos login and password reset; stakeholder gives feedback for next sprint"
    ],
    realWorldApplications: [
      "Startups and product companies where requirements evolve quickly",
      "Web and mobile app development with frequent releases",
      "Teams that want fast feedback and the ability to change direction based on user input"
    ],
    advantages: [
      "Adapts to changing requirements; feedback is built into the process",
      "Working software delivered in short cycles; reduces risk of building the wrong thing",
      "Clear roles and ceremonies improve communication and focus",
      "Retrospectives encourage continuous improvement"
    ],
    limitations: [
      "Requires committed, collaborative teams and active customer involvement",
      "Can be chaotic if scope is not well managed or backlog is unclear",
      "Less suitable when fixed scope, fixed price, and heavy documentation are required",
      "Success depends on discipline in following ceremonies and not skipping them"
    ],
    vivaQuestions: [
      { question: "What are the three main roles in Scrum?", hint: "Product Owner, Scrum Master, Development Team" },
      { question: "What is a Sprint?", hint: "A time-boxed iteration (e.g., 2 weeks) that produces a potentially shippable increment" },
      { question: "What is the purpose of Daily Stand-up?", hint: "Short sync: what I did, what I will do, any blockers" },
      { question: "What is the difference between Product Backlog and Sprint Backlog?", hint: "Product Backlog = all work; Sprint Backlog = work selected for current sprint" }
    ],
    defenceAnswer: {
      intro:
        "Agile is a way of developing software that focuses on delivering value in small steps, getting feedback often, and adapting to change. Scrum is one of the most used Agile frameworks. It uses short cycles called sprints, clear roles, and regular meetings to keep the team aligned and the product moving forward.",
      coreExplanation: [
        "Agile came as a response to rigid, document-heavy processes where requirements were fixed at the start and change was expensive. The Agile Manifesto values individuals and interactions over processes and tools, working software over comprehensive documentation, customer collaboration over contract negotiation, and responding to change over following a plan. So we plan, but we stay ready to change based on what we learn.",
        "In Scrum we have three roles. The Product Owner represents the customer and stakeholders. They maintain the Product Backlog—a prioritized list of what the product needs. The Scrum Master helps the team follow Scrum, removes obstacles, and facilitates meetings. The Development Team builds the product. They are self-organizing: they decide how to do the work within the sprint. There are no sub-managers; the team commits to the sprint goal together.",
        "Work is done in sprints—fixed-length iterations, usually two weeks. At Sprint Planning we choose items from the Product Backlog for the sprint and break them into tasks (Sprint Backlog). During the sprint we have a short Daily Stand-up: each person says what they did yesterday, what they will do today, and any blockers. At the end we have a Sprint Review where we demo the increment to stakeholders, and a Sprint Retrospective where we discuss what went well and what to improve.",
        "Requirements are often written as user stories: As a [role], I want [feature] so that [benefit]. Each story has acceptance criteria that define done. This keeps requirements simple and understandable. The Product Backlog is refined regularly—items are clarified, estimated, and prioritized. Only the top items need to be ready for the next sprint.",
        "Agile and Scrum work best when the customer or Product Owner can engage regularly, the team is empowered and committed, and the organization accepts that scope or priorities can change. They are less suitable when a contract requires fixed scope and price up front, or when the team or organization is not ready to collaborate in this way. Even then, many ideas from Agile—like short cycles and retrospectives—can be adopted gradually."
      ],
      exampleApplication:
        "Imagine building an online exam portal. The Product Owner has a backlog: user registration, login, take exam, view results, admin dashboard. We pick user registration and login for Sprint 1. We plan tasks: database schema, API, UI, validation. We meet daily for 15 minutes. In two weeks we demo registration and login. Stakeholders say they also want forgot password. We add it to the backlog and plan it for Sprint 2. After the demo we do a retrospective: we say our stand-ups were good but we need better test automation—we add that as an improvement for next sprint.",
      conclusion:
        "In summary, Agile and Scrum help us deliver software in small, visible steps and adapt based on feedback. Scrum gives us roles, artifacts, and ceremonies that make this discipline practical. For viva or project defence, it is useful to explain one full sprint cycle and how backlog, planning, stand-up, review, and retrospective fit together."
    },
    keyTerms: ["Agile", "Scrum", "Sprint", "Product Owner", "Scrum Master", "Backlog", "User Story"],
    speakingTips: [
      "Name the three Scrum roles and one responsibility each",
      "Walk through one sprint: planning, daily stand-up, review, retrospective",
      "Give one example of a user story with As a... I want... So that..."
    ]
  },
  {
    id: 59,
    title: "Software Testing (Unit, Integration, System)",
    domain: "Software Engineering",
    definition:
      "Software testing is the process of checking whether the software behaves as expected and meets requirements. Unit testing checks individual components in isolation; integration testing checks how components work together; system testing checks the complete system end-to-end. Together they help find defects at different levels.",
    keyConcepts: [
      "Unit testing: Testing the smallest testable units (functions, methods) in isolation, often with mocks",
      "Integration testing: Testing interaction between modules, APIs, or layers (e.g., app and database)",
      "System testing: Testing the full system as a whole; end-to-end scenarios in a environment close to production",
      "Test cases: Input, expected output, and steps; derived from requirements or code",
      "White-box vs black-box: White-box uses internal structure; black-box uses only inputs and outputs",
      "Automation: Automated tests (e.g., JUnit, Selenium) for regression and fast feedback"
    ],
    examples: [
      "Unit test: A function that calculates discount—given price and rate, assert result equals expected value",
      "Integration test: API that saves order to database—call API, check that order row exists in DB",
      "System test: User logs in, adds item to cart, checks out—verify order is created and confirmation shown"
    ],
    realWorldApplications: [
      "CI/CD pipelines running unit and integration tests on every commit",
      "Release gates: system and regression tests before deploying to production",
      "Bug prevention: unit tests catch logic errors early; integration tests catch interface and data errors"
    ],
    advantages: [
      "Finds defects at different levels; early testing (unit) is cheaper to fix",
      "Automated tests enable fast regression checking and safer refactoring",
      "Documentation: tests show how the code is expected to behave",
      "Confidence: passing tests give assurance before release"
    ],
    limitations: [
      "Cannot prove absence of defects; only reduce risk",
      "Writing and maintaining tests takes time; poor tests can be brittle",
      "Integration and system tests can be slow and flaky",
      "Test coverage metrics can be misleading if tests are shallow"
    ],
    vivaQuestions: [
      { question: "What is the difference between unit and integration testing?", hint: "Unit tests one component in isolation; integration tests multiple components together" },
      { question: "What is a mock in unit testing?", hint: "A fake object that simulates a dependency so we test only the unit" },
      { question: "When is system testing performed?", hint: "After integration; tests the complete system end-to-end" },
      { question: "What is regression testing?", hint: "Re-running tests to ensure new changes did not break existing functionality" }
    ],
    defenceAnswer: {
      intro:
        "Software testing is the activity of checking that software does what it is supposed to do. We test at different levels: unit testing for small pieces of code, integration testing for how parts work together, and system testing for the full application. Each level catches different kinds of defects and builds confidence before release.",
      coreExplanation: [
        "Unit testing focuses on the smallest testable parts—usually a function or a class method. We give inputs and check that the output or behaviour matches what we expect. We isolate the unit by using mocks or stubs for dependencies like databases or APIs, so we are testing only that piece of logic. For example, we test a function that computes tax: for a given amount and rate, we assert the result. Unit tests are fast, numerous, and run often—every time a developer commits code. They help catch logic errors early.",
        "Integration testing checks that multiple components work correctly together. We might test that the application layer correctly calls the database, or that the API and the front-end communicate properly. We use real or test doubles for external services as needed. Integration tests catch interface mismatches, wrong data flow, or configuration errors. They are slower than unit tests, so we may run them on every commit or in a separate pipeline step.",
        "System testing treats the entire system as a black box. We run end-to-end scenarios: for example, user logs in, creates an order, and receives confirmation. We test in an environment that is as close as possible to production. System tests verify that all parts work together and that the system meets functional and sometimes non-functional requirements. They are the slowest and often run before release or in staging.",
        "Test cases can be designed from requirements (black-box) or from code structure (white-box). We write test cases with clear steps, input data, and expected results. Automation is important: we use frameworks like JUnit for unit tests, and tools like Selenium or Cypress for UI or end-to-end tests. Automated tests are run in continuous integration so we get quick feedback.",
        "Together, unit, integration, and system testing form a testing pyramid: many unit tests at the base, fewer integration tests in the middle, and fewer still system tests at the top. This balance keeps feedback fast while still checking behaviour at every level. Testing does not guarantee zero defects, but it significantly reduces risk and helps teams deliver reliable software."
      ],
      exampleApplication:
        "In an e-commerce project, we unit-test the function that applies a coupon (e.g., 10% off above 500). We give amount 600 and coupon 10%; we assert result is 540. For integration we test the place order API: we send a valid order payload and check that an order is created in the database and inventory is updated. For system test we simulate a user: open browser, login, add product to cart, apply coupon, checkout, and verify order confirmation page and email. If all levels pass, we are more confident to release.",
      conclusion:
        "In summary, unit testing catches bugs in small units, integration testing catches bugs at the boundaries between components, and system testing validates the full flow. Using all three levels and automating them helps teams deliver quality software and refactor safely. For your defence, you can describe one example at each level from your project."
    },
    keyTerms: ["Unit Test", "Integration Test", "System Test", "Mock", "Regression Testing", "Test Case", "Black-box"],
    speakingTips: [
      "Explain the testing pyramid: many unit, fewer integration, fewer system tests",
      "Give one concrete example for unit, integration, and system from your project",
      "Mention that mocks are used in unit tests to isolate the unit"
    ]
  },
  {
    id: 60,
    title: "Version Control and Git",
    domain: "Software Engineering",
    definition:
      "Version control is a system that tracks changes to files over time, allowing multiple people to work on the same codebase without overwriting each other's work. Git is a distributed version control system that stores snapshots of the project, supports branching and merging, and is the standard tool for source code management in modern development.",
    keyConcepts: [
      "Repository: A storage for project files and their history (local and remote, e.g., GitHub)",
      "Commit: A snapshot of the project at a point in time with a message describing the change",
      "Branch: A parallel line of development; default branch often main or master",
      "Merge: Combining changes from one branch into another",
      "Clone, pull, push: Getting a copy of a repo, updating from remote, and sending commits to remote",
      "Conflict: When two changes affect the same lines; resolved manually before completing merge"
    ],
    examples: [
      "git init to create repo; git add file.txt; git commit -m Add login feature",
      "git branch feature-cart; git checkout feature-cart; work and commit; git merge feature-cart into main",
      "git clone url; make changes; git pull to update; git push to upload your commits"
    ],
    realWorldApplications: [
      "Team collaboration: everyone works on branches and merges via pull requests",
      "Keeping history: revert to any past version, see who changed what and why",
      "Deployment and CI/CD: pipelines trigger on push to main or release branch"
    ],
    advantages: [
      "Full history of changes; easy to revert and compare versions",
      "Branching allows parallel work and feature isolation without blocking others",
      "Distributed: every developer has a full copy; work can continue offline",
      "Integrates with code review (pull requests), CI/CD, and issue tracking"
    ],
    limitations: [
      "Learning curve for branching and merge conflict resolution",
      "Large binary files can bloat the repository; often need Git LFS or avoid",
      "Merge conflicts require manual resolution and can slow down delivery",
      "Poor commit messages or messy history can make debugging harder"
    ],
    vivaQuestions: [
      { question: "What is the difference between Git and GitHub?", hint: "Git is the tool; GitHub is a hosting service for Git repositories" },
      { question: "What is a merge conflict?", hint: "When two branches change the same lines; Git cannot auto-merge and asks for manual resolution" },
      { question: "What does git pull do?", hint: "Fetches from remote and merges into current branch" },
      { question: "Why use branches?", hint: "To work on features or fixes in isolation without affecting main line until ready" }
    ],
    defenceAnswer: {
      intro:
        "Version control is the practice of tracking every change we make to our code so we can go back to any previous version, work in parallel with others, and collaborate without losing work. Git is the most widely used version control system today. It is distributed—every developer has a full copy of the repository—and it supports branching and merging, which makes team workflow manageable.",
      coreExplanation: [
        "A repository is a database of your project: all files and their history. We can create a new repo with git init or get a copy of an existing one with git clone. Every time we make a logical change, we stage the files with git add and save a snapshot with git commit. Each commit has a unique ID, a message, and the author. The history is a chain of commits, so we can see what changed, when, and by whom. This is useful for debugging and understanding why something was done.",
        "Branching is a key feature. By default we have a main branch (often called main or master). We can create a new branch for a feature or fix—for example, git branch feature-login. We switch to that branch with git checkout feature-login, do our work, and commit. The main branch stays unchanged. When the feature is ready, we merge the branch into main. So multiple people can work on different branches at the same time and merge when ready.",
        "In a team we usually have a remote repository on a server like GitHub or GitLab. We push our commits to the remote with git push and get others changes with git pull (which fetches and merges). Before pushing we often pull first to get the latest changes and resolve any conflicts locally. Pull requests (or merge requests) are a way to propose merging a branch: others review the code and then the branch is merged. This supports code review and quality.",
        "A merge conflict happens when two branches modify the same part of a file. Git cannot decide which version to keep, so it marks the conflict in the file and asks us to edit it, keep the right version or combine both, then mark as resolved and complete the merge. Understanding how to read conflict markers and resolve them is a basic skill.",
        "Git is used not only for code but also for configuration, documentation, and scripts. It integrates with CI/CD: for example, every push to main can trigger a build and tests. For academic projects, using Git shows that you can work in a professional way: meaningful commits, clear branch names, and optionally a README and .gitignore. Explaining clone, add, commit, push, pull, and branch-merge in simple terms is enough for a good defence answer."
      ],
      exampleApplication:
        "In our project we used Git and GitHub. We cloned the repo, created a branch feature-student-dashboard for the dashboard work. We added and committed files with messages like Add dashboard layout and Add grades widget. We pushed the branch to GitHub and opened a pull request. After review we merged into main. Once we had to fix a conflict when main had changed the same CSS file—we opened the file, saw the conflict markers, kept our layout changes and the other persons colour fix, saved, and completed the merge.",
      conclusion:
        "In summary, version control with Git gives us history, branching, and collaboration. We commit often with clear messages, use branches for features, and use push, pull, and merge to stay in sync with the team. For your defence, describe how you used Git in your project—whether alone or in a team—and mention branch, commit, and merge in one short example."
    },
    keyTerms: ["Repository", "Commit", "Branch", "Merge", "Clone", "Push", "Pull Request"],
    speakingTips: [
      "Say Git = tool, GitHub = hosting; then give one workflow: branch, commit, push, pull request, merge",
      "Explain merge conflict in one sentence: same lines changed in two branches, resolve manually",
      "Mention .gitignore for excluding build artifacts and secrets"
    ]
  },
  {
    id: 61,
    title: "UML Diagrams",
    domain: "Software Engineering",
    definition:
      "UML (Unified Modeling Language) is a standard way to visualize software design using diagrams. Common diagrams include use case diagrams (actors and use cases), class diagrams (structure of classes and relationships), sequence diagrams (interaction over time), and activity diagrams (flow of activities). They help in analysis, design, and communication.",
    keyConcepts: [
      "Use case diagram: Actors (users/systems) and use cases (functionality); shows who does what",
      "Class diagram: Classes, attributes, methods, and relationships (association, inheritance, composition)",
      "Sequence diagram: Objects and messages over time; order of interactions in a scenario",
      "Activity diagram: Flow of activities with decisions, forks, and joins; like a flowchart",
      "Component and deployment diagrams: Physical structure and deployment of software",
      "Standard notation: Rectangles for classes, stick figures for actors, arrows for relationships and messages"
    ],
    examples: [
      "Use case: Actor Student linked to use cases View grades, Register course, Pay fee",
      "Class diagram: Class Student with attributes id, name; methods enroll(), getGrades(); relationship with Course",
      "Sequence diagram: User to LoginPage to AuthService to Database; messages in time order"
    ],
    realWorldApplications: [
      "Requirements and design documents for academic and industry projects",
      "Communication between analysts, designers, and developers",
      "Documentation of existing systems and onboarding of new team members"
    ],
    advantages: [
      "Visual representation is easier to discuss than raw text",
      "Standard notation understood across teams and tools",
      "Different diagrams for different views: behaviour, structure, interaction",
      "Helps spot missing requirements or design flaws early"
    ],
    limitations: [
      "Can become outdated if not updated when code changes",
      "Over-detailed diagrams can be hard to read and maintain",
      "Not all teams use UML; some prefer code or lighter sketches",
      "Learning all diagram types and correct notation takes time"
    ],
    vivaQuestions: [
      { question: "What is the purpose of a use case diagram?", hint: "Shows actors and use cases; who interacts with the system and what they can do" },
      { question: "What does a sequence diagram represent?", hint: "Order of messages between objects over time in a scenario" },
      { question: "What is the difference between association and inheritance in a class diagram?", hint: "Association = uses or has; Inheritance = is a (subclass extends superclass)" },
      { question: "When would you use an activity diagram?", hint: "To show flow of activities, decisions, and parallel steps in a process" }
    ],
    defenceAnswer: {
      intro:
        "UML stands for Unified Modeling Language. It is a standard set of diagrams we use to describe software—what it does, how it is structured, and how parts interact. In projects we often use use case diagrams for requirements, class diagrams for structure, and sequence diagrams for behaviour. These diagrams help us communicate and document our design before and during coding.",
      coreExplanation: [
        "Use case diagrams show the system from the user perspective. We draw actors—people or other systems that interact with our system—and use cases, which are pieces of functionality like Login or View Report. We connect actors to the use cases they perform. This gives a high-level view of system functionality and is useful in the requirements phase. We can also show relationships between use cases, like include or extend.",
        "Class diagrams show the static structure of the system. We draw classes as rectangles with three parts: name, attributes, and methods. We show relationships: association (e.g., Student enrolls in Course), inheritance (e.g., Admin extends User), and composition or aggregation (e.g., Order has OrderItems). Multiplicity can be shown (e.g., one Student many Enrollments). Class diagrams are the backbone of object-oriented design and map closely to code.",
        "Sequence diagrams show how objects interact over time in a specific scenario. We list objects or actors at the top and draw horizontal timelines. Arrows between timelines represent messages or method calls, in the order they happen. We can show return values, creation of objects, and loops or conditions. This is useful to understand a flow like user logs in or order is placed and to see which component calls which.",
        "Activity diagrams show the flow of activities—like a flowchart. We have start and end nodes, activities (rounded rectangles), decisions (diamonds), and forks/joins for parallel flows. They are good for business processes or algorithm flows. Other UML diagrams include state diagrams (states and transitions of an object), component diagrams (physical modules), and deployment diagrams (where software runs).",
        "In practice we do not draw every diagram for every project. We choose what helps: use cases for requirements, class diagram for core structure, sequence for critical flows. Tools like Draw.io, Lucidchart, or PlantUML help create and maintain diagrams. For defence, it is enough to explain two or three diagrams you used in your project and what each one represents."
      ],
      exampleApplication:
        "In our library management system we had a use case diagram with actors Librarian and Member. Use cases included Issue Book, Return Book, Search Catalogue, and Pay Fine. Our class diagram had classes Book, Member, Loan, and Fine with attributes and methods and relationships between them. For the Issue Book flow we drew a sequence diagram: Member requests book, Librarian scans book and member ID, system checks availability and member limit, system creates Loan and updates Book status. These diagrams were in our design document and we referred to them while coding.",
      conclusion:
        "In summary, UML gives us a common language to describe structure and behaviour. Use case diagrams capture who does what; class diagrams capture structure; sequence diagrams capture interaction over time. Using even a few of these improves clarity and is expected in many academic and professional projects."
    },
    keyTerms: ["UML", "Use Case", "Class Diagram", "Sequence Diagram", "Actor", "Association", "Inheritance"],
    speakingTips: [
      "Name at least three diagram types and one purpose each (e.g., use case = requirements, class = structure)",
      "Give one example from your project: e.g., Our class diagram had Student, Course, and Enrollment",
      "Keep notation simple: actors, use cases, classes, and arrows—no need to list every symbol"
    ]
  },
  {
    id: 62,
    title: "Software Architecture Patterns (MVC, Microservices)",
    domain: "Software Engineering",
    definition:
      "Software architecture patterns define high-level structure of a system—how components are organized and how they interact. MVC (Model-View-Controller) separates data, presentation, and logic in an application. Microservices architecture builds a system as a set of small, independent services that communicate over the network, each owning its data and deployable separately.",
    keyConcepts: [
      "MVC: Model (data and business logic), View (UI), Controller (handles input, updates model, selects view)",
      "Separation of concerns: Each layer has a clear responsibility; easier to test and change",
      "Microservices: Many small services; each service is a separate process, often with its own database",
      "Service communication: REST APIs, message queues, or gRPC between microservices",
      "Monolith vs microservices: Monolith = one deployable unit; microservices = many deployable units",
      "Trade-offs: MVC simplifies UI apps; microservices enable scaling and independent deployment but add complexity"
    ],
    examples: [
      "MVC in web app: Model = User, Product; View = HTML templates; Controller = route handlers that get data from Model and pass to View",
      "Microservices: User service, Order service, Payment service; each has API; Order service calls User and Payment via HTTP",
      "Monolith: One codebase and one database; all features in one application"
    ],
    realWorldApplications: [
      "MVC: Most web frameworks (Django, Rails, Spring MVC, Express with templates)",
      "Microservices: Large systems (e.g., Netflix, Amazon) where teams own services and scale independently",
      "Hybrid: Monolith first, then extract critical or scaling parts into microservices"
    ],
    advantages: [
      "MVC: Clear structure, easier testing of model and controller, multiple views for same model",
      "Microservices: Independent scaling and deployment, technology diversity, team ownership",
      "Both: Better organization than a single unstructured codebase"
    ],
    limitations: [
      "MVC: Model and view can become tightly coupled if discipline is weak; fat controllers",
      "Microservices: Network latency, distributed debugging, data consistency across services, operational complexity",
      "Microservices are not always needed; monolith can be simpler for small teams"
    ],
    vivaQuestions: [
      { question: "What are the three components of MVC?", hint: "Model (data/logic), View (presentation), Controller (input and coordination)" },
      { question: "What is the main benefit of microservices over monolith?", hint: "Independent deployment and scaling; teams can own services" },
      { question: "How do microservices communicate?", hint: "REST APIs, message queues, or gRPC over the network" },
      { question: "When might you choose a monolith over microservices?", hint: "Small team, simple domain, or when operational complexity of many services is not justified" }
    ],
    defenceAnswer: {
      intro:
        "Software architecture patterns help us organize code and components at a high level. Two important patterns are MVC—Model-View-Controller—which we use in many web applications, and microservices, where we build the system as many small, independent services. Both aim for clear structure and maintainability, but they operate at different scales.",
      coreExplanation: [
        "MVC divides an application into three parts. The Model represents the data and business logic—for example, what a User or an Order is and what rules apply to them. The View is the presentation—what the user sees, like HTML pages or screens. The Controller receives user input, talks to the Model to get or update data, and chooses which View to show. So when a user submits a form, the Controller handles the request, updates the Model if needed, and returns the appropriate View. This separation makes it easier to change the UI without touching business logic, and to test the Model and Controller without the UI.",
        "MVC is used in many frameworks: Django, Ruby on Rails, Spring MVC, and in front-end patterns where the view might be React components and the model is state or API data. The important idea is separation of concerns: each part has one job. Sometimes we hear Model-View-ViewModel (MVVM) or similar variants; the idea is the same—separate data, logic, and presentation.",
        "Microservices architecture takes a different approach. Instead of one big application (a monolith), we build many small services. Each service is a separate process, often with its own database or storage. For example, we might have a User Service, an Order Service, and a Payment Service. They communicate over the network using REST APIs or message queues. Each team can own one or more services, deploy them independently, and use different technologies if needed. This suits large systems and large teams.",
        "Microservices bring benefits: we can scale one service (e.g., Order) without scaling others; we can deploy the Order service without touching Payment; and teams can work in parallel. But they also bring challenges: network calls can fail or be slow; we need to handle distributed transactions and eventual consistency; and we have more moving parts to monitor and debug. So we choose microservices when the system and organization are large enough to need this flexibility, not by default for every project.",
        "For a college project, MVC is very common—we have a backend with models, views or API responses, and controllers. Microservices might be used in a project to demonstrate the concept—e.g., two or three small services that call each other—but a single MVC or layered application is often enough. Explaining both patterns and when to use which shows good understanding."
      ],
      exampleApplication:
        "Our project used MVC. The Model had entities like Student and Course and functions to fetch and update them. The View was the React front-end that displayed forms and tables. The Controller was the Express or Next.js API routes: they received requests, called the Model, and sent JSON back to the View. We did not use microservices because the project was small and one application was easier to develop and deploy. If we had to scale, we could later extract, say, a Notifications service into a separate microservice that other parts call via API.",
      conclusion:
        "In summary, MVC is a pattern for organizing a single application into Model, View, and Controller. Microservices is an architecture where the system is split into many small services. Both improve structure and maintainability; the choice depends on the size of the system, the team, and the need for independent scaling and deployment."
    },
    keyTerms: ["MVC", "Model", "View", "Controller", "Microservices", "Monolith", "REST API"],
    speakingTips: [
      "Define MVC in one line: Model = data/logic, View = UI, Controller = input and coordination",
      "Say microservices = many small services, each deployable and scalable independently",
      "Mention one trade-off: microservices add network and operational complexity"
    ]
  },
  {
    id: 63,
    title: "DevOps and CI/CD",
    domain: "Software Engineering",
    definition:
      "DevOps is a culture and set of practices that bring development and operations together to deliver software faster and more reliably. CI (Continuous Integration) means frequently integrating code into a shared repository and running automated builds and tests. CD (Continuous Delivery or Deployment) means delivering or deploying that code to production in an automated, repeatable way.",
    keyConcepts: [
      "CI: Merge code often; run automated build and tests on every commit or pull request",
      "CD: Automate release pipeline so that every successful build can be deployed (Continuous Delivery) or is deployed (Continuous Deployment)",
      "Pipeline: Sequence of steps—e.g., checkout, install, build, test, deploy—often in a tool like Jenkins, GitHub Actions, or GitLab CI",
      "DevOps culture: Collaboration between dev and ops; automation, monitoring, and feedback",
      "Infrastructure as Code (IaC): Define servers and config in code (e.g., Terraform, Ansible) for repeatability",
      "Monitoring and logging: Observe production to detect issues and improve over time"
    ],
    examples: [
      "CI: On every push to main, run npm install, npm test, and npm run build; fail the pipeline if tests fail",
      "CD: After CI passes, deploy to staging; after approval, deploy to production (e.g., to Vercel or AWS)",
      "Pipeline in GitHub Actions: checkout, setup Node, install deps, lint, test, build, deploy"
    ],
    realWorldApplications: [
      "Teams releasing multiple times a day with high confidence",
      "Reducing manual errors in build and deployment",
      "Faster feedback: developers see test and deploy results within minutes"
    ],
    advantages: [
      "Faster delivery and quicker feedback from production",
      "Fewer manual steps; fewer human errors in build and deploy",
      "Consistent environments from dev to production",
      "Easier rollback: redeploy previous version if something goes wrong"
    ],
    limitations: [
      "Requires investment in tools, scripts, and culture",
      "Flaky tests or unstable pipelines can block or delay delivery",
      "Security and access control must be considered in pipelines",
      "Small or solo projects may not need full CI/CD initially"
    ],
    vivaQuestions: [
      { question: "What does CI stand for and what does it do?", hint: "Continuous Integration; integrate code often and run automated build and tests" },
      { question: "What is the difference between Continuous Delivery and Continuous Deployment?", hint: "Delivery = deployable anytime, may need manual approval; Deployment = every change goes to production automatically" },
      { question: "Name one CI/CD tool.", hint: "Jenkins, GitHub Actions, GitLab CI, Azure DevOps, CircleCI" },
      { question: "Why is automation important in DevOps?", hint: "Reduces errors, speeds up delivery, and makes process repeatable" }
    ],
    defenceAnswer: {
      intro:
        "DevOps is about bringing development and operations together so we can deliver software quickly and reliably. Two central practices are Continuous Integration, or CI—integrating code frequently and running automated tests—and Continuous Delivery or Deployment, or CD—automating the path from code to production. Together they form a CI/CD pipeline that runs on every change.",
      coreExplanation: [
        "In Continuous Integration, developers merge their code into a shared branch (e.g., main) often. Every time someone pushes, we automatically run a pipeline: we checkout the code, install dependencies, build the project, and run tests. If any step fails, the pipeline fails and the team is notified. So we catch integration and test failures early, instead of discovering them late. The key is that integration and testing are continuous and automated.",
        "Continuous Delivery means that every successful build is in a state ready to be released. We might automatically deploy to a staging environment, and then deployment to production is a button click or a manual approval. Continuous Deployment goes one step further: every change that passes the pipeline is automatically deployed to production. So CD can mean deliverable or deployed; both rely on a reliable, automated pipeline.",
        "A typical pipeline has stages: source checkout, install dependencies, lint (code style), unit tests, integration tests, build (e.g., compile or bundle), and then deploy to a server or cloud. Tools like Jenkins, GitHub Actions, GitLab CI, and Azure DevOps let us define these steps in configuration or code. For a web project we might use GitHub Actions: on push to main, run tests and build, then deploy to Vercel or Netlify. The pipeline is defined in a YAML file in the repo.",
        "DevOps also includes practices like Infrastructure as Code—defining servers and configuration in code so we can recreate environments consistently—and monitoring and logging, so we know how the application behaves in production and can fix issues quickly. The culture part means developers and operations work together, share responsibility for delivery and stability, and use automation instead of manual handoffs.",
        "For a college project, even a simple pipeline is valuable: for example, on every push we run tests and build. If we add a deploy step to a free hosting service, we have a minimal CI/CD setup. Explaining that CI catches problems early and CD makes release repeatable and safe is enough for a good defence answer."
      ],
      exampleApplication:
        "In our project we used GitHub Actions for CI/CD. On every push to main we ran: checkout code, npm ci, npm run lint, npm test, and npm run build. If all passed, we deployed to Vercel using their GitHub integration. So when we merged a pull request, within a few minutes the updated site was live. We did not use staging because the team was small, but in a larger project we would add a staging deploy step before production.",
      conclusion:
        "In summary, DevOps emphasizes collaboration and automation. CI keeps the codebase integrated and tested on every change. CD takes that built and tested code and delivers or deploys it in an automated way. Together they reduce risk and speed up delivery, and a simple pipeline in a tool like GitHub Actions is a practical way to apply these ideas in your project."
    },
    keyTerms: ["DevOps", "CI", "CD", "Pipeline", "Continuous Integration", "Continuous Deployment", "Automation"],
    speakingTips: [
      "Define CI in one sentence: merge often, run build and tests automatically",
      "Define CD: automated deployment (or at least deployable) after CI passes",
      "Give one example from your project: e.g., We used GitHub Actions to run tests and deploy on push"
    ]
  },
  {
    id: 64,
    title: "Requirements Engineering",
    domain: "Software Engineering",
    definition:
      "Requirements engineering is the process of discovering, documenting, analyzing, and managing what the system must do and what constraints it must satisfy. It produces functional requirements (features and behaviour) and non-functional requirements (quality attributes like performance and security), and ensures they are clear, consistent, and testable.",
    keyConcepts: [
      "Functional requirements: What the system must do—features, behaviour, inputs and outputs",
      "Non-functional requirements: How well the system must do it—performance, security, usability, reliability",
      "Stakeholders: Users, customers, sponsors, and others who have an interest in the system",
      "Elicitation: Techniques to gather requirements—interviews, surveys, workshops, observation",
      "Specification: Documenting requirements in a clear, unambiguous, and verifiable way",
      "Validation and verification: Checking that requirements are correct and that the product meets them"
    ],
    examples: [
      "Functional: The system shall allow users to reset password via email link",
      "Non-functional: The system shall respond to login within 2 seconds under normal load",
      "Elicitation: Interview with librarian to list all tasks (issue book, return, fine calculation)"
    ],
    realWorldApplications: [
      "First phase of SDLC; input to design and testing",
      "Contract and tender documents in outsourced projects",
      "Product backlogs and user stories in Agile (requirements in iterative form)"
    ],
    advantages: [
      "Reduces risk of building the wrong thing; aligns team and stakeholders",
      "Clear requirements enable better estimation and planning",
      "Testable requirements become acceptance criteria for testing",
      "Documentation for future maintenance and handover"
    ],
    limitations: [
      "Stakeholders may not know exactly what they want or may change their mind",
      "Ambiguity and missing requirements are common; needs iteration",
      "Over-documentation can slow down Agile teams",
      "Requirements can conflict; trade-offs need to be made"
    ],
    vivaQuestions: [
      { question: "What is the difference between functional and non-functional requirements?", hint: "Functional = what the system does; non-functional = how well (performance, security, etc.)" },
      { question: "What is requirements elicitation?", hint: "The process of gathering requirements from stakeholders (interviews, workshops, etc.)" },
      { question: "Why should requirements be testable?", hint: "So we can verify that the system meets them; they become acceptance criteria" },
      { question: "Name two techniques for gathering requirements.", hint: "Interviews, surveys, workshops, observation, document analysis" }
    ],
    defenceAnswer: {
      intro:
        "Requirements engineering is the discipline of finding out what the system should do and documenting it clearly. We distinguish between functional requirements—what the system does—and non-functional requirements—how well it does it, in terms of performance, security, and so on. Good requirements are the foundation for design, development, and testing.",
      coreExplanation: [
        "We start by identifying stakeholders: anyone who will use the system, pay for it, or be affected by it. We then elicit requirements—gather them—using techniques like interviews, surveys, workshops, or observing current work. The goal is to understand the problem and the needs. Stakeholders often do not state everything clearly at first, so we ask questions, show prototypes, and iterate.",
        "Functional requirements describe behaviour and features. For example: The system shall allow students to register for courses or The system shall send an email when payment is successful. They should be specific and testable. Non-functional requirements describe quality attributes: The homepage shall load within 3 seconds, Data shall be encrypted in transit, The system shall support 1000 concurrent users. These often need measurable criteria so we can verify them.",
        "We document requirements in a specification—a structured document or a backlog. In traditional projects we might have a Software Requirements Specification (SRS) with numbered requirements. In Agile we use user stories and acceptance criteria. In both cases we aim for clarity: avoid vague words like user-friendly unless we define what that means. We also check for consistency: no conflicting requirements.",
        "Analysis includes prioritizing requirements (must-have vs nice-to-have), identifying gaps or ambiguities, and resolving conflicts. Validation means checking with stakeholders that we have captured their needs correctly. Verification later means checking that the built system meets the requirements—that is where test cases and acceptance criteria come from.",
        "Poor requirements lead to wrong or incomplete software and rework. Investing time in requirements engineering saves cost and time later. In academic projects we usually have a problem statement and a requirements section in our report; explaining how we gathered and wrote requirements—and giving one functional and one non-functional example—shows that we understand this phase."
      ],
      exampleApplication:
        "For our library management system we interviewed the librarian and listed all tasks: issue book, return book, calculate fine, search catalogue, manage members. We wrote functional requirements like System shall record issue date and due date for each loan and System shall compute fine as Rs 5 per day after due date. We added non-functional requirements: Search result shall appear within 2 seconds and Only librarians can delete members. We put these in our SRS and used them to design the database and modules and to write test cases.",
      conclusion:
        "In summary, requirements engineering is about discovering and documenting what the system must do and how well it must do it. Functional requirements describe features; non-functional requirements describe quality. Good requirements are clear, consistent, and testable, and they form the basis for the rest of the project. For your defence, describe how you gathered requirements and give one example of each type."
    },
    keyTerms: ["Functional Requirements", "Non-functional Requirements", "Elicitation", "Stakeholder", "SRS", "Validation", "Verification"],
    speakingTips: [
      "Give one functional and one non-functional example from your project",
      "Mention at least one elicitation technique (e.g., interview with client/librarian)",
      "Say that requirements should be clear and testable"
    ]
  },
  {
    id: 65,
    title: "Software Quality Assurance",
    domain: "Software Engineering",
    definition:
      "Software Quality Assurance (SQA) is the set of activities and processes that ensure software meets defined quality standards and is fit for use. It includes process standards, reviews, testing, and measurement, and focuses on preventing defects and improving the development process as well as the product.",
    keyConcepts: [
      "Quality: Fitness for use; meeting requirements and user expectations",
      "Process quality: Following defined processes (e.g., coding standards, review steps) to reduce defects",
      "Product quality: Attributes of the software—correctness, reliability, usability, maintainability",
      "Reviews and inspections: Formal or informal review of documents and code to find defects early",
      "Testing: Executing the software to find defects (part of QA but often treated separately)",
      "Metrics: Defect density, test coverage, cycle time—to measure and improve quality"
    ],
    examples: [
      "Code review: Another developer reviews code before merge to catch bugs and improve style",
      "Checklist: Requirements review checklist—clear? Testable? Complete?",
      "Metrics: Number of bugs found in testing, test pass rate, code coverage percentage"
    ],
    realWorldApplications: [
      "Quality gates: No release until tests pass and review is done",
      "Audits and compliance in regulated industries",
      "Continuous improvement: Using defect data to improve process and prevent recurrence"
    ],
    advantages: [
      "Fewer defects in production; higher user satisfaction",
      "Early detection of issues is cheaper than fixing later",
      "Consistent processes improve predictability and team performance",
      "Metrics help identify weak areas and track improvement"
    ],
    limitations: [
      "Can add overhead (time for reviews, documentation, metrics)",
      "Quality is multi-dimensional; no single metric captures everything",
      "Over-emphasis on process can slow down delivery if not balanced",
      "Requires buy-in from the team and management"
    ],
    vivaQuestions: [
      { question: "What is the difference between quality assurance and quality control?", hint: "QA = process-focused, prevention; QC = product-focused, finding defects (e.g., testing)" },
      { question: "What is a code review?", hint: "Another person examines code for defects, style, and improvement before it is merged" },
      { question: "Name one quality metric.", hint: "Defect density, test coverage, number of open bugs, cycle time" },
      { question: "Why is process quality important?", hint: "Good processes reduce defects and make outcomes more predictable" }
    ],
    defenceAnswer: {
      intro:
        "Software Quality Assurance, or SQA, is about making sure that software meets quality standards and is fit for use. It includes both process—how we work—and product—what we deliver. We use reviews, testing, and metrics to prevent and find defects and to improve over time.",
      coreExplanation: [
        "Quality in software means the product meets requirements and user needs—it is correct, reliable, usable, and maintainable. Quality assurance focuses on the process: we define standards (e.g., coding guidelines, review steps), we follow them, and we improve them. The idea is that a good process leads to a good product. Quality control is often used to mean checking the product—testing, inspections—to find defects. In practice both are part of SQA.",
        "Reviews are a key practice. We review requirements to see if they are clear and complete. We review design to catch design flaws before coding. We review code—code review or peer review—so another developer looks at the code for bugs, readability, and alignment with standards. Reviews find many defects early, when they are cheap to fix. They also share knowledge across the team.",
        "Testing is another pillar. We run unit, integration, and system tests to find defects. Test automation helps us run tests often and catch regressions. SQA also cares about test coverage and the quality of test cases—are we testing the right things? So testing is both an activity and something we assure: we ensure testing is done and is effective.",
        "We use metrics to understand quality. Examples: defect density (bugs per size of code), test pass rate, code coverage, time to fix a bug, number of defects found in production. These help us see trends—are we getting better or worse?—and focus improvement. We do not rely on a single number; we look at a set of metrics and at actual user feedback.",
        "In a project we might have: a coding standard and a rule that every change is code-reviewed; automated tests that must pass before merge; and a simple dashboard of test results and open bugs. For defence, explain that SQA is about process and product, mention reviews and testing, and give one example of how you applied quality practices in your project."
      ],
      exampleApplication:
        "In our project we did code review for every feature: at least one team member reviewed the code before we merged to main. We had a short checklist: does it meet the requirement, are there obvious bugs, is the code readable? We also had automated unit and API tests; the pipeline failed if tests failed, so we could not merge without passing tests. We did not track formal metrics, but we used the number of bugs found in testing versus in production as a rough quality indicator.",
      conclusion:
        "In summary, Software Quality Assurance ensures we build the right thing and build it well. It combines process (standards, reviews) and product checks (testing, metrics). Reviews and testing catch defects early; metrics and feedback help us improve. Describing how you used reviews and testing in your project is a strong defence answer."
    },
    keyTerms: ["SQA", "Quality Assurance", "Quality Control", "Code Review", "Defect", "Metrics", "Process Quality"],
    speakingTips: [
      "Distinguish QA (process, prevention) from QC (product, finding defects)",
      "Mention code review and testing as two main practices",
      "Give one example: e.g., We did peer code review and had automated tests in CI"
    ]
  },
  {
    id: 66,
    title: "Code Review and Refactoring",
    domain: "Software Engineering",
    definition:
      "Code review is the practice of having other developers examine code before it is merged, to find bugs, improve design, and share knowledge. Refactoring is the process of improving the internal structure of code without changing its external behaviour—making it cleaner, simpler, and easier to maintain while keeping functionality the same.",
    keyConcepts: [
      "Code review: Systematic examination of code by one or more reviewers; done via pull requests or pair programming",
      "What reviewers look for: Correctness, readability, design, security, performance, and adherence to standards",
      "Refactoring: Changing code structure (rename, extract method, simplify conditionals) without changing behaviour",
      "Tests as safety net: Run tests before and after refactoring to ensure behaviour is preserved",
      "Technical debt: Shortcuts and mess that slow us down later; refactoring pays off that debt",
      "Small steps: Refactor in small, focused steps and run tests frequently"
    ],
    examples: [
      "Review: Reviewer suggests extracting a long function into smaller functions and points out a possible null reference",
      "Refactoring: Extract method—move a block of code into a named function; rename variable for clarity",
      "Technical debt: Copy-pasted code in three places; refactor into one shared function"
    ],
    realWorldApplications: [
      "Pull request reviews in Git-based workflows; mandatory before merge",
      "Improving legacy code before adding new features",
      "Keeping code maintainable as requirements change"
    ],
    advantages: [
      "Code review finds bugs and improves design before code is merged",
      "Refactoring reduces complexity and makes future changes easier and safer",
      "Both spread knowledge and improve consistency across the team",
      "Refactoring with tests prevents regressions"
    ],
    limitations: [
      "Review can slow down if not done promptly or if feedback is unclear",
      "Refactoring without tests risks introducing bugs",
      "Over-refactoring or perfectionism can delay delivery",
      "Review quality depends on reviewer skill and context"
    ],
    vivaQuestions: [
      { question: "What is refactoring?", hint: "Improving internal structure of code without changing its external behaviour" },
      { question: "Why run tests after refactoring?", hint: "To ensure we did not change behaviour and introduce bugs" },
      { question: "What is technical debt?", hint: "Shortcuts or poor design that make future changes harder; refactoring pays it off" },
      { question: "What should a code reviewer look for?", hint: "Correctness, readability, design, security, adherence to standards" }
    ],
    defenceAnswer: {
      intro:
        "Code review and refactoring are two practices that keep code quality high. Code review means having someone else look at your code before it is merged—to find bugs, suggest improvements, and share knowledge. Refactoring means improving the structure of code without changing what it does—making it cleaner and easier to maintain.",
      coreExplanation: [
        "In code review, one or more developers read the new or changed code. They check if it is correct and handles edge cases, if it is readable and well-named, if the design fits the rest of the system, and if there are security or performance issues. They also check that it follows team standards and that tests are present and meaningful. Review is done through pull requests: the author opens a PR, reviewers comment, the author updates the code, and then the PR is merged. The goal is to catch issues early and to learn from each other.",
        "Good review feedback is specific and constructive. Instead of this is bad, we say this function is long; consider splitting into two. We ask questions when we do not understand. The author stays open to feedback and fixes what makes sense. Review should be timely so the author does not wait too long. Many teams require at least one approval before merge.",
        "Refactoring is changing the internal structure of code without changing its behaviour. We rename variables and functions for clarity, extract a block of code into a separate function, replace complex conditionals with guard clauses or polymorphism, or remove duplication. We do it in small steps: one refactoring, then run tests, then the next. The tests are our safety net—if they pass before and after, we have not changed behaviour. Refactoring is not adding features; it is cleaning up.",
        "We refactor when we see duplication, long functions, unclear names, or code that is hard to test or change. Sometimes we refactor a bit before adding a new feature so that the new code fits in cleanly. Technical debt is the cost of not refactoring—the code becomes harder to change and riskier to touch. Regular refactoring keeps debt low.",
        "In a project we might do lightweight review: every PR is reviewed by at least one person, and we refactor when we touch a file—improve names or extract a function. We do not need to refactor everything at once; we improve code as we work on it. For defence, explain that code review catches bugs and improves quality, and that refactoring keeps code maintainable without changing behaviour, and give one example of each from your experience."
      ],
      exampleApplication:
        "In our project we used pull requests. Before merging we had a teammate review the code. Once a reviewer suggested we were repeating the same validation in two places—we refactored by extracting a shared validateInput function and used it in both. Another time we had a very long route handler; we refactored by moving business logic into a service layer and keeping the route thin. We ran tests after each change to make sure nothing broke.",
      conclusion:
        "In summary, code review improves quality and shared understanding before code is merged. Refactoring improves structure over time without changing behaviour, with tests as a safety net. Both are part of professional development and are easy to describe in a defence with one or two concrete examples."
    },
    keyTerms: ["Code Review", "Refactoring", "Pull Request", "Technical Debt", "Extract Method", "Test", "Maintainability"],
    speakingTips: [
      "Define refactoring in one line: improve structure without changing behaviour",
      "Emphasize that tests must pass before and after refactoring",
      "Give one review example and one refactoring example from your project"
    ]
  },
  {
    id: 67,
    title: "Project Management (Waterfall, Kanban)",
    domain: "Software Engineering",
    definition:
      "Project management in software covers planning, scheduling, and controlling work to deliver a product on time and within constraints. Waterfall is a sequential approach where each phase (requirements, design, build, test, deploy) is completed before the next begins. Kanban is a flow-based approach that visualizes work on a board (To Do, In Progress, Done) and limits work in progress to improve flow.",
    keyConcepts: [
      "Waterfall: Sequential phases; minimal overlap; requirements and design fixed early; change is costly",
      "Kanban: Visual board with columns; work flows from left to right; limit WIP (Work In Progress)",
      "Work In Progress (WIP) limits: Cap on how many items can be in a column to avoid overload and improve flow",
      "Scope, time, cost: The triple constraint; changing one affects the others",
      "Milestones and deliverables: In Waterfall, each phase has clear outputs; in Kanban, focus is on continuous flow",
      "When to use which: Waterfall for fixed scope and contract; Kanban for ongoing flow and flexibility"
    ],
    examples: [
      "Waterfall: Complete SRS, then design document, then code, then test plan and execution, then go-live",
      "Kanban board: To Do | In Progress (limit 3) | Review | Done; move cards as work advances",
      "Academic project: Gantt chart for Waterfall; Trello or physical board for Kanban"
    ],
    realWorldApplications: [
      "Waterfall: Government projects, regulated domains, fixed-price contracts",
      "Kanban: Support teams, maintenance, continuous delivery, teams that want flexibility",
      "Hybrid: Some phases (e.g., requirements) more formal; execution in sprints or Kanban"
    ],
    advantages: [
      "Waterfall: Clear plan and milestones; good for fixed scope and documentation",
      "Kanban: Flexible; visible flow; WIP limits reduce multitasking and improve delivery",
      "Both: Structure and visibility so stakeholders and team know status"
    ],
    limitations: [
      "Waterfall: Late feedback; change is expensive; working software comes late",
      "Kanban: Can lack time-boxing and predictability if not combined with metrics",
      "Wrong choice for context can lead to frustration or poor outcomes"
    ],
    vivaQuestions: [
      { question: "What is the main characteristic of Waterfall?", hint: "Sequential phases; each phase completes before the next starts" },
      { question: "What is a WIP limit in Kanban?", hint: "Maximum number of items allowed in a column to improve flow" },
      { question: "When might you choose Waterfall over Agile or Kanban?", hint: "Fixed scope and contract, heavy documentation or compliance needs" },
      { question: "What does a Kanban board show?", hint: "Work items moving through stages (e.g., To Do, In Progress, Done)" }
    ],
    defenceAnswer: {
      intro:
        "Project management in software is about planning and controlling work so we deliver on time and within scope and budget. Waterfall and Kanban are two different approaches. Waterfall is sequential—we finish one phase before starting the next. Kanban is flow-based—we visualize work on a board and move items through stages, often with limits on how much work is in progress at once.",
      coreExplanation: [
        "In Waterfall we have distinct phases: requirements, design, implementation, testing, deployment, and maintenance. We complete each phase and produce deliverables—for example, an SRS after requirements, a design document after design—before moving to the next. The flow is one-way, like a waterfall. This suits projects where requirements are stable and can be fully defined upfront, and where we need a clear plan and contract. Change in a later phase is expensive because we may have to go back and redo earlier work.",
        "Waterfall gives predictability: we know the sequence and the milestones. It is used in construction, defence, and regulated industries where documentation and phase gates are required. The drawback is that we get working software only at the end, and if requirements were wrong or changed, we discover it late. So it is less suitable when requirements are uncertain or changing.",
        "Kanban comes from lean manufacturing. We visualize work on a board with columns—for example, To Do, In Progress, Review, Done. Each work item is a card. We move cards from left to right as we work on them. We limit how many items can be In Progress at once—that is the WIP limit. This reduces multitasking and helps us finish work before starting more. The focus is on flow: we pull work when we have capacity, rather than pushing a fixed batch into a time box.",
        "Kanban does not prescribe roles or ceremonies like Scrum. We can add meetings (e.g., replenishment, retrospectives) as needed. We often use metrics like lead time (from start to done) and cycle time to improve. Kanban is good for support teams, maintenance work, or any team that wants continuous flow without fixed sprints. It is also used together with Agile: for example, Scrum with a Kanban board for the sprint backlog.",
        "For a college project we might use a simple Gantt chart or phase plan (Waterfall-style) in the report, or we might use a Trello-style board to track tasks (Kanban-style). Explaining both—Waterfall as sequential and plan-driven, Kanban as flow-based with a visual board and WIP limits—and when each is useful, shows good understanding for a defence."
      ],
      exampleApplication:
        "In our project we used a mix. We had an initial requirements and design phase (like Waterfall) and wrote an SRS and design document. For implementation we used a simple Kanban board: To Do, In Progress, Done. We listed tasks (e.g., Login API, Dashboard UI) and moved them as we worked. We did not set a strict WIP limit but tried to finish one feature before starting the next. So we had upfront planning and documentation, but day-to-day execution was more flexible and visible on the board.",
      conclusion:
        "In summary, Waterfall is a sequential, phase-based approach good for fixed scope and clear documentation. Kanban is a flow-based approach with a visual board and optional WIP limits, good for flexibility and continuous delivery. The choice depends on the project and organization; explaining both and how you managed your project is a strong defence answer."
    },
    keyTerms: ["Waterfall", "Kanban", "WIP Limit", "Milestone", "Scope", "Deliverable", "Flow"],
    speakingTips: [
      "Describe Waterfall in one line: sequential phases, complete one before the next",
      "Describe Kanban: board with columns, cards move through, WIP limits to improve flow",
      "Mention one situation where each is suitable (e.g., Waterfall for fixed contract, Kanban for ongoing flow)"
    ]
  }
  ];
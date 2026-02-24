import { Topic } from "./types";

export const databaseTopics: Topic[] = [
  {
    id: 46,
    title: "Relational Database Management Systems (RDBMS)",
    domain: "Databases",
    definition:
      "An RDBMS is software that stores and manages data in a relational model, where data is organized in tables (relations) with rows and columns. It enforces data integrity, supports SQL for querying, and maintains relationships between tables through keys.",
    keyConcepts: [
      "Tables (relations) with rows (tuples) and columns (attributes)",
      "Primary Key: Unique identifier for each row in a table",
      "Foreign Key: Reference to primary key in another table, enforcing referential integrity",
      "Schema: Structure defining tables, columns, data types, and constraints",
      "SQL (Structured Query Language) for defining and manipulating data",
      "ACID properties for reliable transaction processing"
    ],
    examples: [
      "MySQL, PostgreSQL, Oracle Database, and SQL Server are popular RDBMS",
      "A Students table with columns: student_id (PK), name, email; linked to Enrollments via student_id (FK)",
      "Bank accounts stored in an Accounts table with balance; Transactions table references account_id"
    ],
    realWorldApplications: [
      "Banking systems storing accounts, transactions, and customer data",
      "E-commerce platforms for products, orders, and user profiles",
      "Hospital management systems for patients, appointments, and records"
    ],
    advantages: [
      "Data integrity through constraints and normalization",
      "Powerful querying with SQL; standardized and portable",
      "Strong consistency and ACID guarantees",
      "Mature tooling, backup, and recovery support"
    ],
    limitations: [
      "Scaling writes horizontally is difficult; often need vertical scaling",
      "Rigid schema; schema changes can be costly",
      "Not ideal for highly unstructured or document-style data",
      "JOIN-heavy queries can become slow on very large datasets"
    ],
    vivaQuestions: [
      { question: "What is the difference between primary key and foreign key?", hint: "Primary key uniquely identifies a row; foreign key references another table's primary key" },
      { question: "Name three popular RDBMS.", hint: "MySQL, PostgreSQL, Oracle, SQL Server" },
      { question: "What does referential integrity mean?", hint: "Foreign key values must exist as primary key in referenced table" },
      { question: "Why is RDBMS called 'relational'?", hint: "Data is stored in relations (tables) and relationships are maintained via keys" }
    ],
    defenceAnswer: {
      intro:
        "An RDBMS, or Relational Database Management System, is software that stores data in the form of tables and manages relationships between them. It is the most widely used type of database in enterprise applications, from banking to e-commerce.",
      coreExplanation: [
        "In an RDBMS, data is organized in tables. Each table has a name and contains rows and columns. A row represents one record, and each column represents an attribute. For example, a Students table might have columns like student_id, name, and email. The structure of all tables—their columns and data types—is called the schema.",
        "Keys are central to the relational model. A primary key is a column or set of columns that uniquely identifies each row. No two rows can have the same primary key value. A foreign key is a column in one table that references the primary key of another table. This creates a relationship: for instance, an Orders table might have customer_id as a foreign key pointing to the Customers table. The RDBMS enforces referential integrity, meaning it will not allow a foreign key value that does not exist in the referenced table.",
        "We interact with an RDBMS using SQL. We use DDL (Data Definition Language) to create and alter tables; DML (Data Manipulation Language) to insert, update, and delete data; and DQL (Data Query Language) to query data with SELECT. The RDBMS also supports transactions and ensures ACID properties so that multiple operations either all succeed or all fail, keeping data consistent.",
        "Popular RDBMS products include MySQL, PostgreSQL, Oracle Database, and Microsoft SQL Server. They differ in features, licensing, and performance, but all follow the relational model and support standard SQL. They provide tools for backup, recovery, user management, and optimization.",
        "RDBMS is best suited when data has a clear structure, relationships matter, and we need strong consistency and integrity. It is less suitable when we need to scale writes across many servers without complex sharding, or when data is highly unstructured, in which case NoSQL options may be better."
      ],
      exampleApplication:
        "Consider a university system. We have a Students table (student_id, name, email), a Courses table (course_id, title), and an Enrollments table (student_id, course_id, grade). student_id and course_id in Enrollments are foreign keys. The RDBMS ensures we cannot enroll a student that does not exist or add a grade for a non-existent course. We can query 'all courses taken by student X' or 'all students in course Y' using simple SQL JOINs.",
      conclusion:
        "In summary, RDBMS provides a structured, reliable way to store and query data with strong integrity and relationships. It remains the default choice for most business applications where data consistency and clear structure are important."
    },
    keyTerms: ["RDBMS", "Primary Key", "Foreign Key", "Schema", "SQL", "Referential Integrity", "Relation"],
    speakingTips: [
      "Define 'relation' as a table and mention rows/columns early",
      "Give one concrete example of PK and FK (e.g., Students and Enrollments)",
      "Briefly mention ACID and SQL to show breadth"
    ]
  },
  {
    id: 47,
    title: "SQL Fundamentals (DDL, DML, DCL)",
    domain: "Databases",
    definition:
      "SQL (Structured Query Language) is the standard language for managing relational databases. It is divided into DDL for defining structure, DML for manipulating data, DCL for controlling access, and DQL for querying. Understanding these categories is essential for database work.",
    keyConcepts: [
      "DDL (Data Definition Language): CREATE, ALTER, DROP for schema objects",
      "DML (Data Manipulation Language): INSERT, UPDATE, DELETE for data",
      "DCL (Data Control Language): GRANT, REVOKE for permissions",
      "DQL (Data Query Language): SELECT for retrieving data",
      "TCL (Transaction Control): COMMIT, ROLLBACK, SAVEPOINT",
      "Constraints: PRIMARY KEY, FOREIGN KEY, UNIQUE, NOT NULL, CHECK"
    ],
    examples: [
      "CREATE TABLE users (id INT PRIMARY KEY, name VARCHAR(100)); ALTER TABLE users ADD email VARCHAR(255);",
      "INSERT INTO users VALUES (1, 'Alice'); UPDATE users SET name='Bob' WHERE id=1; DELETE FROM users WHERE id=1;",
      "GRANT SELECT ON orders TO clerk_role; REVOKE DELETE ON users FROM guest_user;"
    ],
    realWorldApplications: [
      "Application backends executing DML and SELECT; DBAs using DDL and DCL",
      "Migration scripts using CREATE/ALTER to evolve schema",
      "Role-based access: GRANT/REVOKE to limit who can read or modify data"
    ],
    advantages: [
      "Single, standardized language across most RDBMS",
      "Clear separation of structure (DDL), data (DML), and security (DCL)",
      "Declarative: specify what you want, not how to do it",
      "Portable across MySQL, PostgreSQL, Oracle, SQL Server with minor dialect differences"
    ],
    limitations: [
      "Dialect differences between vendors (e.g., LIMIT vs OFFSET-FETCH)",
      "Complex analytics sometimes need extensions or procedural SQL",
      "Schema changes (DDL) can lock tables and affect availability",
      "Over-reliance on string concatenation for dynamic SQL can lead to injection"
    ],
    vivaQuestions: [
      { question: "Which SQL category does CREATE TABLE belong to?", hint: "DDL - Data Definition Language" },
      { question: "What is the difference between DELETE and DROP?", hint: "DELETE removes rows; DROP removes the table structure" },
      { question: "What does GRANT do?", hint: "Gives a user or role permission to perform operations on objects" },
      { question: "Name two DML commands.", hint: "INSERT, UPDATE, DELETE" }
    ],
    defenceAnswer: {
      intro:
        "SQL is the standard language we use to work with relational databases. It is divided into several sub-languages: DDL for defining structure, DML for changing data, DCL for access control, and we often treat SELECT separately as DQL for querying.",
      coreExplanation: [
        "DDL stands for Data Definition Language. It is used to define and change the structure of the database. CREATE TABLE builds a new table with columns and constraints. ALTER TABLE adds or drops columns, or changes constraints. DROP TABLE removes a table and its data. We also use CREATE INDEX, CREATE VIEW, and similar commands. DDL commands typically commit implicitly and can lock objects, so they are used carefully in production.",
        "DML is Data Manipulation Language. It deals with the data inside tables. INSERT adds new rows; we specify the table and either list values for all columns or specify column names and values. UPDATE modifies existing rows; we set new values and use WHERE to choose which rows. DELETE removes rows, again with an optional WHERE clause. Without WHERE, UPDATE and DELETE affect all rows, so we must be cautious. These commands work within transactions, so we can ROLLBACK if something goes wrong.",
        "DCL is Data Control Language, used for security and permissions. GRANT gives privileges to a user or role—for example, GRANT SELECT, INSERT ON orders TO sales_team. REVOKE takes back those privileges. This way we can ensure that only certain users can read or modify sensitive tables. In production, we rarely give full access; we grant only the minimum required.",
        "SELECT is used for querying. We list columns (or * for all), specify FROM table, and optionally use WHERE, GROUP BY, HAVING, and ORDER BY. We can join multiple tables and use aggregate functions like COUNT, SUM, AVG. This is sometimes called DQL. Transaction control commands like COMMIT, ROLLBACK, and SAVEPOINT are often grouped as TCL.",
        "Understanding when to use which category helps in both development and exams. DDL changes structure; DML changes data; DCL changes who can do what; and SELECT is for reading. In a typical application, developers write a lot of DML and SELECT, while DBAs use DDL and DCL during setup and migrations."
      ],
      exampleApplication:
        "Imagine setting up a small shop database. We use DDL: CREATE TABLE products (id INT PRIMARY KEY, name VARCHAR(200), price DECIMAL(10,2)). Then DML: INSERT INTO products VALUES (1, 'Pen', 10.00). We use SELECT to list products and UPDATE to change prices. For security, we use DCL: GRANT SELECT ON products TO public, but GRANT INSERT, UPDATE ONLY to manager_role, so only managers can change data.",
      conclusion:
        "In short, SQL fundamentals revolve around DDL for structure, DML for data changes, DCL for permissions, and SELECT for querying. Knowing these categories and a few key commands in each is enough to work effectively with any standard RDBMS."
    },
    keyTerms: ["SQL", "DDL", "DML", "DCL", "DQL", "GRANT", "REVOKE"],
    speakingTips: [
      "List the four categories (DDL, DML, DCL, DQL) and one example each",
      "Emphasize DELETE vs DROP to avoid confusion",
      "Mention GRANT/REVOKE as the way to implement access control"
    ]
  },
  {
    id: 48,
    title: "Normalization (1NF to BCNF)",
    domain: "Databases",
    definition:
      "Normalization is a design process that organizes data into tables to reduce redundancy and avoid update anomalies. We apply normal forms (1NF, 2NF, 3NF, BCNF) by applying rules about dependencies between attributes, leading to a cleaner and more maintainable schema.",
    keyConcepts: [
      "1NF: Atomic values; each cell holds a single value; no repeating groups",
      "2NF: In 1NF + every non-key attribute fully dependent on the whole primary key",
      "3NF: In 2NF + no non-key attribute depends on another non-key attribute",
      "BCNF: Every determinant is a candidate key (stronger than 3NF)",
      "Functional dependency: If A determines B, then B is functionally dependent on A",
      "Decomposition: Splitting tables to achieve higher normal form while preserving data"
    ],
    examples: [
      "1NF: Replace 'Phone1, Phone2' with one row per phone or a separate Phones table",
      "2NF: Move 'CourseName' out of Enrollments if it depends only on CourseID",
      "3NF: Move 'DepartmentName' to a Department table if it depends on DepartmentID"
    ],
    realWorldApplications: [
      "Designing enterprise databases to avoid duplicate and inconsistent data",
      "Refactoring legacy schemas before adding new features",
      "Teaching and documenting database design in academic and certification courses"
    ],
    advantages: [
      "Reduces redundancy and saves storage",
      "Minimizes update, insert, and delete anomalies",
      "Clearer structure and easier maintenance",
      "Better integrity through smaller, focused tables"
    ],
    limitations: [
      "More tables mean more JOINs in queries; can affect performance",
      "Over-normalization can make schema hard to understand",
      "Denormalization is often used in data warehouses for read speed",
      "Real-world constraints sometimes force practical compromises"
    ],
    vivaQuestions: [
      { question: "What is 1NF?", hint: "Atomic values; no repeating groups; unique rows" },
      { question: "What is the difference between 2NF and 3NF?", hint: "2NF: full dependency on PK; 3NF: no transitive dependency on non-key" },
      { question: "What is a functional dependency?", hint: "If we know A we can determine B; written A → B" },
      { question: "When do we use BCNF?", hint: "When we have multiple candidate keys and want every determinant to be a candidate key" }
    ],
    defenceAnswer: {
      intro:
        "Normalization is a step-by-step method to design database tables so that we avoid redundancy and certain types of errors called update anomalies. We progress through normal forms: First, Second, Third, and Boyce-Codd Normal Form, each adding stricter rules.",
      coreExplanation: [
        "First Normal Form (1NF) requires that every attribute holds only atomic, indivisible values, and there are no repeating groups. For example, instead of having columns Phone1, Phone2, Phone3, we should have a single Phone column with one value per row, or a separate table for phones. Each row must be uniquely identifiable, so we need a primary key. 1NF is the baseline that every relational table should satisfy.",
        "Second Normal Form (2NF) applies when we have composite primary keys. It requires that every non-key attribute must depend on the entire primary key, not just part of it. If we have Enrollments(StudentID, CourseID, Grade, CourseName), CourseName depends only on CourseID. So we have a partial dependency. To achieve 2NF, we move CourseName to a Courses table. Now each non-key attribute in Enrollments depends on the full key (StudentID, CourseID).",
        "Third Normal Form (3NF) requires that no non-key attribute depends on another non-key attribute. This removes transitive dependencies. Example: Employee(EmpID, Name, DeptID, DeptName). DeptName depends on DeptID, and DeptID depends on EmpID, so DeptName transitively depends on EmpID. We remove DeptName from Employee and put it in a Department(DeptID, DeptName) table. Now we have 3NF.",
        "BCNF (Boyce-Codd Normal Form) is stronger than 3NF. It says every determinant must be a candidate key. A determinant is an attribute or set that uniquely determines another. In 3NF we might still have a non-key attribute determining another; in BCNF that is not allowed. BCNF handles cases with multiple candidate keys. Sometimes achieving BCNF can lose some dependency; then we choose between BCNF and 3NF based on the application.",
        "We apply normalization by identifying functional dependencies, then decomposing tables. We must ensure that decomposition is lossless—that we can recover the original data by joining the new tables—and that dependencies are preserved where possible. In practice, we often normalize to 3NF or BCNF for OLTP systems, and sometimes denormalize in reporting or data warehouses for query performance."
      ],
      exampleApplication:
        "Take a table OrderDetails(OrderID, ProductID, Quantity, ProductName, Price). To get 1NF we ensure no repeating groups. For 2NF, we note ProductName and Price depend only on ProductID, not on the full key (OrderID, ProductID). We split into OrderDetails(OrderID, ProductID, Quantity) and Products(ProductID, ProductName, Price). If Products has no other non-key dependencies, we are in 3NF. This removes redundancy: product name and price are stored once, and updates happen in one place.",
      conclusion:
        "Normalization helps us design databases that avoid redundancy and update anomalies. We move from 1NF to 2NF to 3NF to BCNF by removing partial and transitive dependencies through decomposition. The trade-off is more tables and more JOINs, so in read-heavy analytics we sometimes denormalize intentionally."
    },
    keyTerms: ["1NF", "2NF", "3NF", "BCNF", "Functional Dependency", "Decomposition", "Update Anomaly"],
    speakingTips: [
      "Define 1NF first, then build 2NF and 3NF step by step",
      "Use one simple example (e.g., OrderDetails and Products) through the normal forms",
      "Mention trade-off: less redundancy vs more JOINs"
    ]
  },
  {
    id: 49,
    title: "Transactions and ACID Properties",
    domain: "Databases",
    definition:
      "A transaction is a single logical unit of work that groups one or more database operations. Either all operations in the transaction succeed (commit) or none of them do (rollback). ACID—Atomicity, Consistency, Isolation, Durability—describes the guarantees that ensure reliable transaction processing.",
    keyConcepts: [
      "Transaction: Logical unit of work (e.g., debit one account, credit another)",
      "Atomicity: All operations in a transaction complete or none do",
      "Consistency: Transaction leaves database in a valid state (constraints hold)",
      "Isolation: Concurrent transactions do not see each other's uncommitted changes",
      "Durability: Once committed, changes persist even after system failure",
      "COMMIT and ROLLBACK: End transaction successfully or undo all changes"
    ],
    examples: [
      "Bank transfer: debit Account A, credit Account B in one transaction; both or neither",
      "Order placement: insert Order row and update Inventory in one transaction",
      "ROLLBACK on error: if update fails, all earlier inserts in the transaction are undone"
    ],
    realWorldApplications: [
      "Financial systems: payments, transfers, and ledger updates",
      "E-commerce: order creation, inventory deduction, and payment in one transaction",
      "Booking systems: reserve seat and charge card atomically"
    ],
    advantages: [
      "Data remains correct even with concurrent users and failures",
      "Application logic is simpler: define boundaries and rely on DB guarantees",
      "Recovery after crash: committed data is durable; uncommitted is rolled back",
      "Isolation avoids dirty reads and inconsistent analysis"
    ],
    limitations: [
      "Strict isolation can reduce concurrency and throughput",
      "Long transactions hold locks and can cause blocking",
      "Distributed transactions across multiple DBs are complex (two-phase commit)",
      "Performance cost of logging and checkpointing for durability"
    ],
    vivaQuestions: [
      { question: "What do the four letters in ACID stand for?", hint: "Atomicity, Consistency, Isolation, Durability" },
      { question: "What is atomicity?", hint: "All operations in a transaction succeed or all fail" },
      { question: "What does isolation prevent?", hint: "One transaction seeing uncommitted or partial changes of another" },
      { question: "What is the difference between COMMIT and ROLLBACK?", hint: "COMMIT makes changes permanent; ROLLBACK undoes all changes in the transaction" }
    ],
    defenceAnswer: {
      intro:
        "A transaction is a set of database operations that we treat as one unit. Either all of them are applied or none are. This is essential for applications like banking or e-commerce where multiple steps must succeed or fail together. ACID is the set of properties that make transactions reliable.",
      coreExplanation: [
        "Atomicity means all-or-nothing execution. If a transaction has five operations and the fourth one fails, the first three must be undone. The database does this using a transaction log: it records changes and, on rollback, reverses them. So we never get a half-done transfer where money is debited from one account but not credited to another.",
        "Consistency means that after every transaction, the database is in a valid state. All constraints—primary keys, foreign keys, checks—must hold. We maintain consistency by defining valid states and ensuring that each transaction, if run alone, would take the database from one valid state to another. Together with atomicity, we get the guarantee that we never leave the database in an invalid state due to a partial transaction.",
        "Isolation means that concurrent transactions do not interfere with each other. One transaction should not see uncommitted changes from another, or intermediate states that might lead to dirty reads or lost updates. Databases implement isolation using locks or multi-versioning (MVCC). The SQL standard defines isolation levels: Read Uncommitted, Read Committed, Repeatable Read, and Serializable. Higher levels give stronger guarantees but can reduce concurrency.",
        "Durability means that once a transaction is committed, its effects persist even if the system crashes immediately after. The database writes committed changes to durable storage (e.g., disk or replicated log). Recovery after a crash replays the log and reapplies committed transactions while discarding uncommitted ones.",
        "In practice we use BEGIN or START TRANSACTION, then run our statements, and end with COMMIT (to make changes permanent) or ROLLBACK (to undo). Application code often wraps critical operations in a transaction and rolls back on error. Understanding ACID helps in both designing schemas and debugging concurrency or consistency issues."
      ],
      exampleApplication:
        "In a bank transfer we do: BEGIN; UPDATE accounts SET balance = balance - 100 WHERE id = 'A'; UPDATE accounts SET balance = balance + 100 WHERE id = 'B'; COMMIT;. If the second UPDATE fails—maybe account B is locked—we ROLLBACK, and the debit from A is undone. The user sees either a complete transfer or no change. Without transactions, we could end up with money deducted from A but not added to B.",
      conclusion:
        "Transactions and ACID are the foundation of reliable database systems. Atomicity gives all-or-nothing execution, consistency ensures valid states, isolation protects from concurrent interference, and durability ensures committed data survives failures. We use COMMIT and ROLLBACK to control transaction boundaries in our applications."
    },
    keyTerms: ["Transaction", "ACID", "Atomicity", "Consistency", "Isolation", "Durability", "COMMIT", "ROLLBACK"],
    speakingTips: [
      "Start with a one-sentence definition of transaction, then spell out ACID",
      "Use the bank transfer as the standard example for atomicity",
      "Mention isolation levels briefly if asked about concurrency"
    ]
  },
  {
    id: 50,
    title: "Indexing and Query Optimization",
    domain: "Databases",
    definition:
      "Indexing is the technique of maintaining auxiliary data structures (indexes) that allow the database to find rows quickly without scanning entire tables. Query optimization is the process by which the database chooses the best execution plan—using indexes, join order, and algorithms—to answer a query efficiently.",
    keyConcepts: [
      "Index: Data structure (e.g., B-tree, hash) that maps key values to row locations",
      "B-tree index: Balanced tree; good for range queries and sorting; default in most RDBMS",
      "Hash index: Equality lookups only; no range or ORDER BY support",
      "Clustered vs non-clustered: Clustered stores table data in index order; one per table",
      "Query plan: Steps (scan, index seek, join) chosen by the optimizer",
      "Selectivity and cardinality: Choosing indexes on columns used in WHERE and JOINs"
    ],
    examples: [
      "CREATE INDEX idx_user_email ON users(email); speeds up WHERE email = 'x@y.com'",
      "Composite index on (department_id, hire_date) helps queries filtering by both",
      "EXPLAIN ANALYZE in PostgreSQL shows the actual execution plan and cost"
    ],
    realWorldApplications: [
      "Speeding up login lookups by indexing username or email",
      "Faster reporting with indexes on date and category columns",
      "Reducing full table scans on large tables in OLTP and reporting"
    ],
    advantages: [
      "Faster SELECT and JOINs when filters match index columns",
      "Faster ORDER BY and GROUP BY when columns are indexed",
      "Better throughput under concurrent load by reducing lock duration",
      "Optimizer can choose index seek instead of full scan"
    ],
    limitations: [
      "Indexes consume storage and slow down INSERT/UPDATE/DELETE",
      "Too many indexes can confuse the optimizer and waste memory",
      "Index only helps if query predicate uses indexed columns",
      "Maintenance (rebuild, statistics) needed for best performance"
    ],
    vivaQuestions: [
      { question: "What is a B-tree index?", hint: "Balanced tree structure; supports range queries and ordering" },
      { question: "When would you use a composite index?", hint: "When queries filter or sort by multiple columns together" },
      { question: "What is the trade-off of adding more indexes?", hint: "Faster reads vs slower writes and more storage" },
      { question: "What is a clustered index?", hint: "Index that defines the physical order of table data; one per table" }
    ],
    defenceAnswer: {
      intro:
        "Indexing and query optimization are how we make databases fast. An index is a separate structure that helps the database locate rows quickly instead of scanning every row. The query optimizer uses these indexes, along with statistics, to pick the best way to execute each query.",
      coreExplanation: [
        "An index is like a book index: instead of reading every page to find a topic, we look up the topic in the index and jump to the right page. In a database, we have key values—for example, employee_id or email—and the index maps each value to the location of the row. The most common type is the B-tree index. It is a balanced tree that keeps data sorted. So we can do both equality lookups (find id = 5) and range queries (find id between 10 and 20) efficiently. Some databases also offer hash indexes, which are fast for equality but do not support ranges or ORDER BY.",
        "We create indexes with CREATE INDEX on one or more columns. A single-column index on email helps queries like WHERE email = 'user@example.com'. A composite index on (department_id, hire_date) helps queries that filter by both columns or order by hire_date within a department. The order of columns in a composite index matters: the leftmost column should be the one we filter on first. We typically index columns that appear in WHERE, JOIN conditions, and ORDER BY.",
        "Clustered index is special: the table data is stored in the same order as the index. So there is only one clustered index per table. In SQL Server, the primary key is often clustered. Non-clustered indexes are separate structures that point to the table rows. They can be multiple per table. Reading from a non-clustered index may require an extra lookup to get the full row if the index does not cover all needed columns.",
        "Query optimization is the process of choosing an execution plan. The optimizer considers available indexes, table sizes, and statistics. It might choose an index seek (use index to find rows) instead of a full table scan when the query is selective. It also decides join order and join algorithm (nested loop, hash join, merge join). We can use EXPLAIN or EXPLAIN ANALYZE to see the chosen plan and improve indexes or query wording if needed.",
        "Indexes have costs. Each index uses disk space and must be updated on INSERT, UPDATE, and DELETE. So we do not index every column; we focus on columns that are frequently used in predicates and that have good selectivity. We also maintain statistics so the optimizer can make good choices. In exam or viva, we should be able to explain what an index is, when to add one, and the trade-off between read speed and write cost."
      ],
      exampleApplication:
        "Suppose we have a table orders with millions of rows and we often run SELECT * FROM orders WHERE customer_id = 123 AND order_date > '2024-01-01'. Without an index, the database does a full table scan. We create an index on (customer_id, order_date). Now the database can use the index to find only the matching rows quickly. If we also have ORDER BY order_date DESC, the same index can help. We monitor slow queries and add or adjust indexes based on actual usage."
      ,
      conclusion:
        "Indexing and query optimization are essential for performance. We create indexes on columns used in WHERE, JOIN, and ORDER BY, preferring B-tree for general use. The optimizer uses these indexes to avoid full scans. We balance the benefit of faster reads against the cost of extra storage and slower writes."
    },
    keyTerms: ["Index", "B-tree", "Clustered Index", "Query Optimizer", "Execution Plan", "Selectivity", "Composite Index"],
    speakingTips: [
      "Compare index to a book index for quick understanding",
      "Give one example: index on email for login query",
      "Mention the trade-off: faster reads, slower writes"
    ]
  },
  {
    id: 51,
    title: "NoSQL Databases (MongoDB, Redis, Cassandra)",
    domain: "Databases",
    definition:
      "NoSQL databases are non-relational data stores designed for flexibility, scale, or speed. They include document stores (MongoDB), key-value stores (Redis), and wide-column stores (Cassandra). They often relax strict ACID or fixed schema in favor of horizontal scaling and varied data models.",
    keyConcepts: [
      "Document store (MongoDB): Stores JSON-like documents in collections; flexible schema",
      "Key-value store (Redis): In-memory; key maps to value; very fast; used for cache/session",
      "Wide-column store (Cassandra): Rows with many columns; partition key for distribution",
      "CAP theorem: Among Consistency, Availability, Partition tolerance, only two can be fully guaranteed",
      "Horizontal scaling: Adding more nodes instead of bigger single server",
      "Schema flexibility: Documents can have different fields; no fixed DDL for structure"
    ],
    examples: [
      "MongoDB: { _id: 1, name: 'Alice', orders: [{ id: 101, total: 50 }] } in a users collection",
      "Redis: SET session:user123 '{\"logged_in\":true}'; GET session:user123",
      "Cassandra: Table with partition key (user_id), clustering key (timestamp); rows per user"
    ],
    realWorldApplications: [
      "MongoDB: Content management, product catalogs, user profiles with nested data",
      "Redis: Caching, session store, rate limiting, real-time leaderboards",
      "Cassandra: Time-series data, event logs, large-scale write-heavy workloads"
    ],
    advantages: [
      "Horizontal scaling by adding nodes; good for big data and cloud",
      "Flexible or schema-less model; faster iteration on structure",
      "Document and key-value models match many application objects",
      "Redis offers sub-millisecond latency for cache and session"
    ],
    limitations: [
      "No standard query language like SQL; each product has its own API",
      "Weaker consistency or no ACID in some modes (eventual consistency)",
      "Less built-in integrity (e.g., no foreign keys); application must enforce",
      "Operational complexity: replication, tuning, and monitoring differ from RDBMS"
    ],
    vivaQuestions: [
      { question: "What type of NoSQL is MongoDB?", hint: "Document store; stores JSON-like documents" },
      { question: "What is Redis best used for?", hint: "Caching, session storage, real-time data; in-memory key-value" },
      { question: "What is the CAP theorem?", hint: "In a partition, we cannot have both full consistency and full availability" },
      { question: "When would you choose NoSQL over RDBMS?", hint: "Need for scale, flexible schema, or very high read/write throughput" }
    ],
    defenceAnswer: {
      intro:
        "NoSQL databases are an alternative to traditional relational systems. They are used when we need flexible schema, horizontal scaling, or very high speed. Three important types are document stores like MongoDB, key-value stores like Redis, and wide-column stores like Cassandra.",
      coreExplanation: [
        "MongoDB is a document database. Data is stored as documents, usually in JSON-like format (BSON). Documents are grouped in collections. Unlike a relational table, documents in the same collection can have different fields; there is no fixed schema. This is useful for evolving data like user profiles or product catalogs where each item may have different attributes. We query by field values, use aggregation pipelines for analytics, and can embed related data in a single document to avoid JOINs. MongoDB can be scaled horizontally using sharding.",
        "Redis is an in-memory key-value store. Each key maps to a value (string, list, set, hash, etc.). Because data is in RAM, latency is very low, in the sub-millisecond range. Redis is often used for caching: we cache database results or computed values under a key and set a TTL (time to live). It is also used for session storage, rate limiting, pub/sub, and real-time leaderboards. By default Redis is single-threaded and runs on one node; for persistence we can use RDB snapshots or AOF. Redis Cluster provides partitioning and high availability.",
        "Cassandra is a wide-column (column-family) database designed for write-heavy, geographically distributed workloads. Data is organized by partition key and clustering key. Rows can have many columns, and the schema is flexible. Cassandra is built for horizontal scale: we add nodes and data is distributed by partition key. It offers tunable consistency: we can trade consistency for availability depending on the read/write consistency level. There are no JOINs; we often denormalize and design tables per query pattern.",
        "The CAP theorem says that in the presence of network partitions, we cannot have all three of strong Consistency, full Availability, and Partition tolerance. In practice we choose between CP (consistency and partition tolerance) and AP (availability and partition tolerance). Many NoSQL systems offer eventual consistency: after writes stop, all replicas will eventually agree. This can simplify design and improve availability but requires the application to handle temporary inconsistencies.",
        "Choosing between RDBMS and NoSQL depends on requirements. Use RDBMS when we need strong consistency, complex queries, and well-defined relationships. Use NoSQL when we need to scale out, have variable or nested structure, or need extreme read/write performance. In many systems we use both: RDBMS for core transactional data and Redis or MongoDB for cache, sessions, or flexible content."
      ],
      exampleApplication:
        "An e-commerce site might use PostgreSQL for orders, inventory, and users (ACID and relationships). It uses Redis to cache product details and session data so that every page load does not hit the database. Product catalog with varying attributes (size, color, specs) might be stored in MongoDB for flexible schema. High-volume click or event logs might go to Cassandra for fast writes and time-range queries. So we use the right store for each kind of data."
      ,
      conclusion:
        "NoSQL databases provide document (MongoDB), key-value (Redis), and wide-column (Cassandra) models. They excel in scalability, schema flexibility, and specialized workloads like caching. Understanding their strengths and the CAP trade-offs helps in choosing and explaining them in exams and interviews."
    },
    keyTerms: ["NoSQL", "MongoDB", "Redis", "Cassandra", "Document Store", "Key-Value", "CAP Theorem"],
    speakingTips: [
      "Classify the three: MongoDB = document, Redis = key-value, Cassandra = wide-column",
      "Give one use case each: MongoDB for catalogs, Redis for cache, Cassandra for logs",
      "Mention CAP when asked about consistency vs availability"
    ]
  },
  {
    id: 52,
    title: "ER Model and Database Design",
    domain: "Databases",
    definition:
      "The Entity-Relationship (ER) model is a conceptual way to describe the structure of a database using entities, attributes, and relationships. It is used in the design phase before implementing tables in an RDBMS. Good ER design leads to a clear, normalized, and maintainable database.",
    keyConcepts: [
      "Entity: A real-world object (e.g., Student, Course) represented as a table",
      "Attribute: Property of an entity (e.g., name, id); becomes a column",
      "Relationship: Association between entities (e.g., Student enrolls in Course)",
      "Cardinality: One-to-one, one-to-many, many-to-many between entities",
      "Primary key: Attribute(s) that uniquely identify an entity",
      "Weak entity: Entity that depends on another (e.g., Dependent depends on Employee)"
    ],
    examples: [
      "Entity Student (id, name, email); Entity Course (code, title); Relationship Enrolls (many-to-many)",
      "One-to-many: Department has many Employees; many-to-many: Students and Courses via Enrollments",
      "ER diagram: rectangles for entities, diamonds for relationships, ovals for attributes"
    ],
    realWorldApplications: [
      "Designing new databases by capturing requirements as entities and relationships",
      "Documenting existing systems and communicating with stakeholders",
      "Teaching and standardizing database design in academia and industry"
    ],
    advantages: [
      "Visual and intuitive; easy to discuss with non-technical users",
      "Helps spot missing entities, relationships, or constraints",
      "Maps cleanly to relational tables and normalization",
      "Reduces design errors before coding"
    ],
    limitations: [
      "Complex diagrams can become hard to read",
      "Different notations (Chen, Crow's foot) can cause confusion",
      "ER does not show queries or performance; need physical design separately",
      "Iteration needed when requirements change"
    ],
    vivaQuestions: [
      { question: "What is an entity in the ER model?", hint: "A real-world object we want to store; becomes a table" },
      { question: "What is cardinality?", hint: "Number of related instances: one-to-one, one-to-many, many-to-many" },
      { question: "How do we represent many-to-many in tables?", hint: "Create a separate table (junction table) with FKs to both entities" },
      { question: "What is a weak entity?", hint: "Entity that cannot be identified without another entity; has identifying relationship" }
    ],
    defenceAnswer: {
      intro:
        "The Entity-Relationship model is a conceptual tool for database design. We identify entities—things we want to store—their attributes, and the relationships between them. This gives us a clear picture before we create tables and write SQL.",
      coreExplanation: [
        "An entity is a distinct object in the real world that we want to represent in the database. Examples: Student, Course, Employee, Department. Each entity has attributes—properties that describe it. Student might have student_id, name, email. In the ER diagram we draw entities as rectangles and attributes as ovals. We choose one or more attributes as the primary key to uniquely identify each instance of the entity.",
        "Relationships connect entities. For example, Student enrolls in Course, or Employee works in Department. We draw relationships as diamonds and connect them to entities with lines. Cardinality describes how many instances of one entity relate to another: one-to-one (e.g., one person has one passport), one-to-many (one department has many employees), many-to-many (students enroll in many courses, and each course has many students).",
        "Many-to-many relationships cannot be represented by just adding a foreign key in one table. We introduce a separate table, often called a junction or link table. For Student and Course we create Enrollments with student_id and course_id as foreign keys, and maybe grade or date. So the many-to-many is broken into two one-to-many relationships: Student to Enrollments and Course to Enrollments.",
        "We also model optional vs mandatory participation. For example, every employee must belong to a department (mandatory), but a department might have zero employees (optional). We might have weak entities that depend on another entity for their identity—for example, Dependent might be identified by (employee_id, dependent_name). We show this with a double rectangle and an identifying relationship.",
        "From the ER model we derive tables: each entity becomes a table, each attribute a column, and relationships become foreign keys or junction tables. We then apply normalization to remove redundancy. Good ER design—clear entities, correct cardinality, and keys—makes the resulting database easier to implement, query, and maintain."
      ],
      exampleApplication:
        "For a library system we have entities: Member, Book, Copy, Loan. Member has member_id, name, join_date. Book has isbn, title, author. Copy has copy_id and links to Book (one-to-many). Loan is a relationship between Member and Copy with loan_date and return_date—so we have a Loan table with member_id, copy_id, loan_date, return_date. This ER design translates directly into a normalized schema with proper keys and relationships."
      ,
      conclusion:
        "The ER model is the bridge between requirements and implementation. We define entities, attributes, and relationships with cardinality, then map them to tables and keys. It helps us get the structure right and avoid missing or wrong relationships in the final database."
    },
    keyTerms: ["Entity", "Attribute", "Relationship", "Cardinality", "Primary Key", "ER Diagram", "Junction Table"],
    speakingTips: [
      "Define entity, attribute, relationship with one example each",
      "Explain one-to-many and many-to-many with a simple example (e.g., Students and Courses)",
      "Mention that many-to-many becomes a junction table in implementation"
    ]
  },
  {
    id: 53,
    title: "Concurrency Control in Databases",
    domain: "Databases",
    definition:
      "Concurrency control ensures that when multiple transactions run at the same time, the result is correct and consistent—as if they had run one after another. It uses techniques like locking and multi-versioning to prevent problems such as lost updates, dirty reads, and inconsistent analysis.",
    keyConcepts: [
      "Lost update: Two transactions update same data; one overwrites the other",
      "Dirty read: Reading uncommitted data from another transaction",
      "Locking: Exclusive (write) and shared (read) locks to serialize access",
      "Two-phase locking (2PL): Grow phase (acquire locks), shrink phase (release); guarantees serializability",
      "Deadlock: Two or more transactions waiting for each other's locks",
      "MVCC (Multi-Version Concurrency Control): Keep multiple versions; readers see snapshot; less locking"
    ],
    examples: [
      "Lost update: Two clerks update balance of same account; final balance wrong without locking",
      "Shared lock on row for SELECT; exclusive lock for UPDATE; wait if conflict",
      "Deadlock: T1 locks A and waits for B; T2 locks B and waits for A; DB detects and aborts one"
    ],
    realWorldApplications: [
      "Banking and inventory: multiple users updating same account or stock",
      "Booking systems: concurrent seat or room reservations",
      "Any multi-user database application with simultaneous reads and writes"
    ],
    advantages: [
      "Correct results under concurrent access without manual coordination",
      "Serializability: outcome equivalent to some serial order of transactions",
      "MVCC allows high read concurrency with fewer locks",
      "Deadlock detection and resolution prevent permanent blocking"
    ],
    limitations: [
      "Locks can cause waiting and reduced throughput",
      "Deadlocks require abort and retry; application must handle",
      "Strict isolation may limit scalability",
      "Implementation and tuning are complex"
    ],
    vivaQuestions: [
      { question: "What is a lost update?", hint: "Two transactions update same data; second overwrites first without considering it" },
      { question: "What is two-phase locking?", hint: "Transactions acquire all locks first (grow), then release (shrink); no new locks after release" },
      { question: "How does the database handle deadlock?", hint: "Detect cycle in wait-for graph; abort one transaction to break deadlock" },
      { question: "What is MVCC?", hint: "Multiple versions of data; readers see snapshot; writers create new version; reduces read-write blocking" }
    ],
    defenceAnswer: {
      intro:
        "Concurrency control is the set of techniques that allow a database to run many transactions at the same time while still preserving correctness. Without it we could get lost updates, dirty reads, or inconsistent results. The main ideas are locking and multi-versioning.",
      coreExplanation: [
        "When two transactions update the same row, we can get a lost update. For example, both read balance = 100; one adds 50, one subtracts 30. If they both write back without coordination we might get 70 or 150 instead of 120. To prevent this we use locks. A transaction that wants to read a row takes a shared (read) lock; one that wants to update takes an exclusive (write) lock. If another transaction holds an exclusive lock, we wait. This serializes conflicting operations so updates are not lost.",
        "Two-phase locking (2PL) is a classic scheme. In the grow phase a transaction only acquires locks; in the shrink phase it only releases them. Once it releases any lock it cannot acquire new ones. Under 2PL, the schedule of transactions is serializable—the outcome is equivalent to running them in some serial order. The downside is that holding locks until commit can cause waiting and deadlocks.",
        "A deadlock occurs when two or more transactions are waiting for each other. For example, T1 holds lock on A and waits for B, and T2 holds lock on B and waits for A. Neither can proceed. The database has a deadlock detector that builds a wait-for graph. If there is a cycle, it chooses a victim transaction and aborts it, releasing its locks so others can continue. The application must retry the aborted transaction.",
        "Many modern databases use Multi-Version Concurrency Control (MVCC). Instead of blocking readers when a writer is active, we keep multiple versions of rows. A reader sees a consistent snapshot (e.g., all data as of the start of its transaction). Writers create new versions. So reads do not block writes and writes do not block reads in the same way as with simple locking. This improves concurrency for read-heavy workloads. PostgreSQL and Oracle use MVCC.",
        "Isolation levels (Read Uncommitted, Read Committed, Repeatable Read, Serializable) define what anomalies we allow. Lower levels allow more concurrency but permit dirty reads or non-repeatable reads. Higher levels give stronger guarantees but may use more locking or aborts. In practice we choose the level that matches our application’s consistency needs and performance."
      ],
      exampleApplication:
        "In a ticket booking system, 100 users might try to book the last seat. Without concurrency control, several could see 'available' and pay. We use row-level locking: the first transaction that updates the row to 'sold' gets an exclusive lock; others wait. When the first commits, the rest see 'sold' and do not complete the booking. So only one booking succeeds. If two transactions lock seats in different orders we might get deadlock; the DB aborts one and we retry."
      ,
      conclusion:
        "Concurrency control ensures correct behavior when many transactions run together. Locking and 2PL prevent lost updates and provide serializability; deadlock detection resolves cycles. MVCC improves read concurrency by using multiple versions. Understanding these concepts is important for both exams and production systems."
    },
    keyTerms: ["Concurrency Control", "Lock", "Two-Phase Locking", "Deadlock", "MVCC", "Serializability", "Isolation Level"],
    speakingTips: [
      "Start with the problem: lost update or dirty read, then introduce locking",
      "Define 2PL briefly: grow then shrink; no new locks after release",
      "Mention deadlock: cycle in wait-for graph, abort victim, retry"
    ]
  },
  {
    id: 54,
    title: "Database Recovery and Backup",
    domain: "Databases",
    definition:
      "Database recovery is the process of restoring the database to a consistent state after a failure (crash, disk error, or corruption). Backup is the practice of copying data and logs periodically so that we can restore to a point in time and meet recovery objectives.",
    keyConcepts: [
      "Transaction log: Sequential record of all changes (redo) and transaction boundaries (commit/abort)",
      "Redo: Reapply committed changes from the log after a crash",
      "Undo: Reverse uncommitted changes during recovery",
      "Checkpoint: Periodic flush of buffer and log position; reduces recovery work",
      "Backup types: Full, incremental, differential; cold vs hot backup",
      "RTO and RPO: Recovery Time Objective (how fast to restore); Recovery Point Objective (how much data loss is acceptable)"
    ],
    examples: [
      "Full backup every Sunday; incremental backup daily; restore full + all incrementals to recover",
      "After crash: redo all committed transactions from log; undo uncommitted ones",
      "Hot backup: backup while DB is running (e.g., PostgreSQL pg_basebackup)"
    ],
    realWorldApplications: [
      "Disaster recovery: restore data center or server from backups",
      "Point-in-time recovery: restore to just before a bad update or delete",
      "Compliance and audit: retain backups for a required period"
    ],
    advantages: [
      "Protection against hardware failure, corruption, and human error",
      "Point-in-time recovery when we have logs and backups",
      "RTO and RPO guide how often to backup and how to design recovery",
      "Replication plus backup for high availability and durability"
    ],
    limitations: [
      "Backups consume storage and I/O; can impact performance",
      "Restore can take time; RTO depends on backup size and type",
      "Backups can be outdated; RPO depends on backup and log frequency",
      "Off-site and encrypted backup add operational complexity"
    ],
    vivaQuestions: [
      { question: "What is the use of the transaction log in recovery?", hint: "Redo committed transactions; identify uncommitted for undo" },
      { question: "What is the difference between redo and undo in recovery?", hint: "Redo: reapply committed changes; Undo: reverse uncommitted changes" },
      { question: "What is a checkpoint?", hint: "Point where dirty buffers are flushed and log position recorded; shortens recovery" },
      { question: "What is RPO?", hint: "Recovery Point Objective; maximum acceptable data loss (e.g., 1 hour)" }
    ],
    defenceAnswer: {
      intro:
        "Database recovery and backup are essential for durability and business continuity. When the system crashes or data is lost, we use the transaction log and backups to bring the database back to a consistent state. Backup is the process of copying data and logs so that we have something to restore from.",
      coreExplanation: [
        "The transaction log is a sequential file where the database records every change (e.g., after image of a page) and transaction boundaries (commit or abort). When we commit, the log is forced to disk before we say the transaction is committed. So even if the system crashes immediately after, we have a durable record. During normal operation we may keep modified pages in memory (buffer); the log allows us to reconstruct those changes after a crash.",
        "Recovery after a crash has two main phases. In the redo phase we replay the log from the last checkpoint and reapply all changes belonging to committed transactions. This reproduces updates that might not have been written to data files before the crash. In the undo phase we identify transactions that had not committed at the time of the crash and undo their changes, so we do not leave partial transactions in the database. After redo and undo, the database is in a consistent state with only committed data.",
        "A checkpoint is a point at which we flush dirty buffer pages to disk and record the checkpoint position in the log. During recovery we start from the last checkpoint instead of the beginning of the log, which makes recovery faster. We take checkpoints periodically based on time or log size.",
        "Backup is a copy of the database (or its files) and optionally the log. A full backup is a complete copy at a point in time. Incremental backup copies only what changed since the last backup (full or incremental). Differential backup copies what changed since the last full backup. To restore we typically restore the last full backup and then apply incremental or differential backups in order. If we have the log, we can do point-in-time recovery—restore to a specific time, which is useful after a bad update or delete.",
        "Cold backup is taken when the database is shut down; hot backup is taken while it is running. Hot backup is preferred for availability. We also define RTO (Recovery Time Objective)—how quickly we must restore—and RPO (Recovery Point Objective)—how much data loss we can tolerate. These drive how often we take backups and how we manage the log."
      ],
      exampleApplication:
        "A company backs up the database fully every night at 2 AM and keeps the transaction log. One day at 11 AM someone runs a wrong DELETE. We restore the last full backup (2 AM) and then replay the log until 10:59 AM, just before the mistake. The database is back to the state before the error. Without the log we could only restore to 2 AM and lose all changes from 2 AM to 11 AM."
      ,
      conclusion:
        "Recovery relies on the transaction log for redo and undo, and on checkpoints to limit how much we replay. Backup gives us a copy to restore; with logs we can achieve point-in-time recovery. RTO and RPO guide how we design backup and recovery procedures."
    },
    keyTerms: ["Transaction Log", "Redo", "Undo", "Checkpoint", "Backup", "RTO", "RPO", "Point-in-Time Recovery"],
    speakingTips: [
      "Explain recovery in two steps: redo committed, undo uncommitted",
      "Give one example of point-in-time recovery (wrong DELETE)",
      "Define RTO and RPO in one sentence each"
    ]
  },
  {
    id: 55,
    title: "Data Warehousing and OLAP",
    domain: "Databases",
    definition:
      "A data warehouse is a central repository of integrated, historical data from one or more sources, used for analysis and decision support. OLAP (Online Analytical Processing) is the style of querying that involves aggregations, dimensions, and drill-down/roll-up over this data, as opposed to OLTP’s transaction-level updates.",
    keyConcepts: [
      "Data warehouse: Subject-oriented, integrated, time-variant, non-volatile collection of data",
      "ETL: Extract data from sources, Transform (clean, integrate), Load into warehouse",
      "OLTP vs OLAP: OLTP for daily transactions; OLAP for analysis and reporting",
      "Star schema: Fact table (measures) surrounded by dimension tables (attributes)",
      "Snowflake schema: Normalized dimensions; more tables, less redundancy",
      "Drill-down, roll-up, slice, dice: OLAP operations for exploring dimensions and measures"
    ],
    examples: [
      "Fact table Sales (product_id, store_id, date_id, amount, quantity); dimensions Product, Store, Date",
      "ETL: Extract from ERP and CRM; transform (standardize dates, keys); load into warehouse nightly",
      "OLAP query: Total sales by region and month; drill down to city and week"
    ],
    realWorldApplications: [
      "Business intelligence: dashboards, KPIs, and reports for management",
      "Retail: sales analysis by product, store, and time",
      "Healthcare: patient outcomes and resource utilization analysis"
    ],
    advantages: [
      "Single place for cross-source analysis; consistent definitions",
      "Historical data preserved for trend analysis",
      "Optimized for read-heavy, aggregate queries rather than small updates",
      "Supports complex analytics and decision support"
    ],
    limitations: [
      "ETL is complex and must be maintained as sources change",
      "Data can be delayed (batch load); not real-time unless we add streaming",
      "Storage and compute can be expensive at scale",
      "Schema design (star/snowflake) requires upfront modeling"
    ],
    vivaQuestions: [
      { question: "What is the difference between OLTP and OLAP?", hint: "OLTP: transactional, many small updates; OLAP: analytical, read-heavy, aggregations" },
      { question: "What is a star schema?", hint: "One or more fact tables with measures; dimension tables connected; denormalized dimensions" },
      { question: "What does ETL stand for?", hint: "Extract, Transform, Load" },
      { question: "What is drill-down in OLAP?", hint: "Move from higher level to lower level of detail (e.g., year to month to day)" }
    ],
    defenceAnswer: {
      intro:
        "A data warehouse is a database designed for analysis and decision support, not for day-to-day transactions. It holds integrated, historical data from many sources. OLAP is the way we query this data—using dimensions, measures, and operations like drill-down and roll-up.",
      coreExplanation: [
        "OLTP systems handle daily operations: orders, payments, inventory updates. They are optimized for many small transactions and current data. A data warehouse, in contrast, is used for analysis. We load data from OLTP and other sources into the warehouse periodically. The data is integrated—we use common keys and definitions—and time-variant—we keep history so we can analyze trends. It is largely read-only (non-volatile) for users; updates happen through ETL, not as real-time transactions.",
        "ETL stands for Extract, Transform, Load. We extract data from source systems (databases, files, APIs). We transform it: clean it, standardize formats, resolve keys, and apply business rules. Then we load it into the warehouse, often in batch (e.g., nightly). ETL pipelines are critical; they must handle duplicates, errors, and schema changes. Modern setups also use ELT (load raw first, transform inside the warehouse) when the warehouse has strong compute.",
        "The schema of a warehouse is often dimensional. In a star schema we have one or more fact tables that store measures (e.g., sales amount, quantity) and foreign keys to dimension tables. Dimensions describe the context: Product, Store, Time, Customer. So we have a central fact table (Sales) and dimension tables (Product, Store, Date) around it, like a star. This is denormalized for simpler, faster analytical queries. A snowflake schema normalizes dimensions into more tables, reducing redundancy but adding JOINs.",
        "OLAP operations include roll-up (aggregate to a higher level, e.g., city to region), drill-down (go to more detail, e.g., year to month), slice (fix one dimension, e.g., one product), and dice (select a subcube). We run queries that GROUP BY dimensions and aggregate measures—SUM, AVG, COUNT—often with a time dimension for trends. OLAP can be implemented with standard SQL, or with special engines and structures like materialized views or cubes.",
        "Data warehousing and OLAP support business intelligence: reporting, dashboards, and ad-hoc analysis. They answer questions like 'What were our sales by region last quarter?' or 'How did customer retention change over the year?' Understanding the difference from OLTP and the role of ETL and dimensional design is important for both exams and real-world projects."
      ],
      exampleApplication:
        "A retail chain has OLTP databases in each store for sales transactions. Every night, ETL extracts new sales, maps product and store codes to warehouse keys, and loads into a central warehouse. The warehouse has a Sales fact table (store_id, product_id, date_id, amount, quantity) and dimensions Store, Product, and Date. Analysts run OLAP queries: total revenue by region and month, top products by category, year-over-year growth. They drill down from year to quarter to month and slice by a specific product category."
      ,
      conclusion:
        "Data warehousing provides a central, historical store for analysis. ETL brings in and prepares data; star or snowflake schemas organize it for OLAP. OLAP queries focus on dimensions and measures with roll-up, drill-down, slice, and dice. This supports business intelligence and decision making, separate from OLTP operations."
    },
    keyTerms: ["Data Warehouse", "OLAP", "OLTP", "ETL", "Star Schema", "Fact Table", "Dimension", "Drill-Down"],
    speakingTips: [
      "Contrast OLTP (transactions) vs OLAP (analysis) clearly",
      "Describe star schema: fact table in the middle, dimensions around it",
      "Name ETL and one OLAP operation (e.g., drill-down)"
    ]
  },
  {
    id: 56,
    title: "Distributed Databases",
    domain: "Databases",
    definition:
      "A distributed database is a database that is spread across multiple physical locations (sites or nodes), either over a network or in different data centers. Data may be partitioned (sharded) or replicated. The system appears as a single logical database while providing scalability, availability, or locality.",
    keyConcepts: [
      "Distribution: Data and/or processing spread across multiple nodes",
      "Fragmentation: Horizontal (rows) or vertical (columns) splitting of tables",
      "Replication: Copying data to multiple nodes for availability and read performance",
      "Distribution transparency: User or application does not need to know where data lives",
      "CAP and consistency: Trade-off between consistency, availability, and partition tolerance",
      "Two-phase commit (2PC): Protocol for atomic transaction across multiple nodes"
    ],
    examples: [
      "Sharding: Users table split by user_id range—node 1 has 1–1M, node 2 has 1M–2M",
      "Replication: Same data on 3 nodes; read from any; write to primary and replicate",
      "2PC: Coordinator asks all nodes to prepare; if all yes, commit; else abort"
    ],
    realWorldApplications: [
      "Global applications: data close to users in different regions",
      "Large-scale systems: store and process more than one server can hold",
      "High availability: multiple replicas so one failure does not lose service"
    ],
    advantages: [
      "Horizontal scalability by adding nodes",
      "Higher availability through replication and failover",
      "Local access: data near users reduces latency",
      "Can handle larger data and more load than a single node"
    ],
    limitations: [
      "Complexity: consistency, replication, and failure handling are hard",
      "Network latency and partitions affect performance and consistency",
      "Distributed transactions (2PC) are slow and can block",
      "Design and operations require careful planning"
    ],
    vivaQuestions: [
      { question: "What is horizontal fragmentation?", hint: "Splitting table by rows; different rows on different nodes" },
      { question: "What is two-phase commit?", hint: "Prepare phase (all nodes ready?) then Commit/Abort; ensures atomicity across nodes" },
      { question: "Why use replication in distributed DB?", hint: "Availability, read scalability, and fault tolerance" },
      { question: "What is distribution transparency?", hint: "User/application does not need to know where data is stored or how it is distributed" }
    ],
    defenceAnswer: {
      intro:
        "A distributed database spreads data and sometimes processing across multiple nodes or sites. We do this to scale beyond a single machine, to improve availability through replication, or to keep data close to users. The system still presents a single logical database to the user.",
      coreExplanation: [
        "Data can be distributed in two main ways: fragmentation and replication. Fragmentation means splitting a table. In horizontal fragmentation we put different rows on different nodes—for example, users with id 1 to 1 million on node A and 1 million to 2 million on node B. This is often called sharding. In vertical fragmentation we put different columns on different nodes. Replication means keeping copies of the same data on multiple nodes. We replicate for availability—if one node fails, others can serve—and for read performance—we can read from the nearest replica.",
        "Distribution transparency means the user or application does not need to know where data is stored. They issue normal queries; the system finds the right node(s) and may combine results. In practice we have different levels: we might hide location (location transparency), or we might also hide that data is fragmented (fragmentation transparency). Full transparency simplifies programming but can limit how much we optimize for locality.",
        "When a transaction touches data on more than one node, we need a protocol to ensure atomicity—all nodes commit or all abort. Two-phase commit (2PC) is the classic approach. A coordinator node asks all participants to prepare (phase 1). Each participant does the work and votes yes or no. If all vote yes, the coordinator tells everyone to commit (phase 2); otherwise it tells everyone to abort. The problem is that 2PC can block if the coordinator or a participant fails after prepare, and it adds latency. So distributed transactions are used carefully; many systems avoid them or use limited consistency models.",
        "The CAP theorem says that in the presence of a network partition we cannot have all three of strong Consistency, full Availability, and Partition tolerance. So we choose: CP systems (e.g., consistent and partition-tolerant) may refuse writes during a partition; AP systems (available and partition-tolerant) may allow writes and resolve consistency later. This influences how we design replication and conflict resolution.",
        "Distributed databases are used for very large data, global applications, and high availability. Examples include distributed SQL databases (CockroachDB, Spanner-style), sharded MySQL or PostgreSQL, and distributed NoSQL systems. Understanding fragmentation, replication, transparency, and the limits of distributed transactions (2PC, CAP) is important for both exams and real-world design."
      ],
      exampleApplication:
        "An e-commerce company has users in India, the US, and Europe. They shard the Orders table by region: Indian orders on nodes in India, US orders in the US, and so on. So writes are local and fast. They also replicate product catalog to all regions so that product pages can be read locally. For an order that involves inventory in another region, they might use a distributed transaction (2PC) or a saga (sequence of local transactions with compensation) to keep consistency."
      ,
      conclusion:
        "Distributed databases achieve scale and availability by fragmenting and replicating data across nodes. Distribution transparency hides placement from users. Distributed transactions use protocols like 2PC for atomicity but have cost and blocking issues. CAP reminds us that we trade off consistency, availability, and partition tolerance in distributed systems."
    },
    keyTerms: ["Distributed Database", "Fragmentation", "Replication", "Sharding", "2PC", "CAP", "Distribution Transparency"],
    speakingTips: [
      "Define distributed DB as data spread across multiple nodes/sites",
      "Distinguish fragmentation (split data) vs replication (copy data)",
      "Mention 2PC for distributed transactions and CAP for trade-offs"
    ]
  }
];

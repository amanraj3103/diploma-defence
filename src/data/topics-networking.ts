import type { Topic } from "./types";

export const networkingTopics: Topic[] = [
  {
    id: 35,
    title: "OSI Model and TCP/IP Model",
    domain: "Networking & Telecom",
    definition: "The OSI (Open Systems Interconnection) model is a seven-layer conceptual framework that standardizes how different systems communicate over a network. The TCP/IP model is a four-layer practical model that underpins the modern Internet. Both describe how data is packaged, transmitted, and received across networks.",
    keyConcepts: [
      "OSI has 7 layers: Physical, Data Link, Network, Transport, Session, Presentation, Application",
      "TCP/IP has 4 layers: Network Access, Internet, Transport, Application",
      "Each layer adds headers (encapsulation) and passes data to the layer below",
      "Peer-to-peer communication: same layer on sender and receiver communicate logically",
      "Separation of concerns: each layer has a specific responsibility",
      "Protocols operate at specific layers (e.g., IP at Network, TCP at Transport)"
    ],
    examples: [
      "Sending an email: Application layer composes message, Transport adds TCP, Network adds IP, Data Link adds Ethernet frame",
      "HTTP runs at Application layer; routers work at Network layer (Layer 3)",
      "Ethernet and WiFi operate at Physical and Data Link layers"
    ],
    realWorldApplications: [
      "Network troubleshooting: isolate issues by layer (e.g., cable fault = Physical, wrong IP = Network)",
      "Protocol design: developers choose which layer to implement new protocols",
      "Teaching and certification: CCNA, CompTIA Network+ use OSI for explaining concepts"
    ],
    advantages: [
      "Modularity: change one layer without affecting others",
      "Standardization: vendors can build interoperable equipment",
      "Easier debugging: pinpoint which layer has the problem",
      "Clear division of responsibilities across vendors and software"
    ],
    limitations: [
      "OSI was designed before TCP/IP; TCP/IP won in practice",
      "Some protocols span multiple layers, blurring boundaries",
      "Overhead of multiple layers can add latency",
      "Real networks often don't map neatly to all seven layers"
    ],
    vivaQuestions: [
      { question: "What are the seven layers of the OSI model?", hint: "Physical, Data Link, Network, Transport, Session, Presentation, Application — use mnemonic: Please Do Not Throw Sausage Pizza Away" },
      { question: "At which layer does a router operate?", hint: "Network layer (Layer 3) — it forwards packets based on IP address" },
      { question: "How does TCP/IP map to OSI?", hint: "Application = App+Presentation+Session; Transport = Transport; Internet = Network; Network Access = Data Link + Physical" },
      { question: "What is encapsulation?", hint: "Each layer adds its own header (and sometimes trailer) to the data from the layer above" }
    ],
    defenceAnswer: {
      intro: "The OSI model and TCP/IP model are two reference models used to understand how network communication works. The OSI model is a seven-layer theoretical framework, while TCP/IP is a four-layer model that actually runs the Internet today.",
      coreExplanation: [
        "The OSI model has seven layers from bottom to top: Physical (bits on wire), Data Link (frames, MAC addresses), Network (packets, IP, routing), Transport (segments, end-to-end reliability), Session (dialog control), Presentation (encoding, encryption), and Application (user applications like HTTP, FTP). Each layer serves the layer above and uses the layer below.",
        "The TCP/IP model collapses these into four layers: Network Access (Physical + Data Link), Internet (Network — IP), Transport (TCP/UDP), and Application (Session + Presentation + Application). When we send data, the application produces a message; the Transport layer adds a TCP or UDP header; the Internet layer adds an IP header; and the Network Access layer adds frame headers and sends bits over the medium.",
        "Encapsulation means that at each layer we add control information. The receiving side strips headers layer by layer (decapsulation) until the application gets the original data. This is why we say data at the Transport layer is a segment, at the Network layer a packet, and at the Data Link layer a frame.",
        "Routers operate at Layer 3 (Network); they look at IP addresses and forward packets. Switches typically work at Layer 2 (Data Link) using MAC addresses. Hubs and repeaters work at Layer 1 (Physical). Understanding which device works at which layer helps in troubleshooting.",
        "The OSI model is still widely taught and used for troubleshooting and design because it gives a clear mental model. In practice, the Internet runs on TCP/IP, so the four-layer TCP/IP model is what we see in real implementations. Many protocols map to both: for example, HTTP is Application in both; TCP is Transport; IP is Network/Internet."
      ],
      exampleApplication: "When you open a website, your browser uses HTTP at the Application layer. The HTTP request is wrapped in a TCP segment (Transport) with source and destination port numbers. That segment is put inside an IP packet (Network) with source and destination IP addresses. The packet is then put in an Ethernet frame (Data Link) with MAC addresses and sent as electrical or radio signals (Physical). Each router on the path looks at the IP header, forwards the packet, and the destination server reverses the process until the web server application receives the HTTP request.",
      conclusion: "Both models help us understand and design networks. The OSI model is excellent for learning and troubleshooting; the TCP/IP model reflects how the Internet actually works. Knowing both and how they relate is essential for any networking professional."
    },
    keyTerms: ["OSI", "TCP/IP", "Encapsulation", "Layer", "Protocol", "Segment", "Packet", "Frame"],
    speakingTips: [
      "Recite the seven OSI layers in order; use a mnemonic if needed",
      "Give one device per layer: hub (1), switch (2), router (3)",
      "Explain encapsulation with a simple example like opening a webpage"
    ]
  },
  {
    id: 36,
    title: "TCP vs UDP",
    domain: "Networking & Telecom",
    definition: "TCP (Transmission Control Protocol) and UDP (User Datagram Protocol) are the two main transport-layer protocols. TCP provides reliable, connection-oriented, ordered delivery with flow control and congestion control. UDP provides connectionless, best-effort delivery with no guarantee of delivery or order, but with lower overhead and latency.",
    keyConcepts: [
      "TCP: connection-oriented (3-way handshake), reliable, ordered, flow control, congestion control",
      "UDP: connectionless, no guarantee of delivery or order, no retransmission",
      "TCP has higher overhead (headers, acknowledgments, retransmissions); UDP has minimal header",
      "TCP is used where reliability matters (HTTP, email, file transfer); UDP where speed/latency matters (video, gaming, DNS)",
      "Port numbers in both identify applications (e.g., 80 for HTTP, 53 for DNS)",
      "TCP provides stream of bytes; UDP delivers discrete datagrams"
    ],
    examples: [
      "Web browsing and file download use TCP so no data is lost",
      "Video streaming and online gaming often use UDP to avoid delay from retransmissions",
      "DNS queries use UDP for quick one-shot request-response"
    ],
    realWorldApplications: [
      "Video conferencing (e.g., Zoom) uses UDP for real-time video with application-level error handling",
      "Online banking and HTTPS use TCP to ensure every byte is delivered correctly",
      "IoT sensors often use UDP for small, frequent updates where occasional loss is acceptable"
    ],
    advantages: [
      "TCP: reliable delivery, ordered data, and built-in flow and congestion control",
      "UDP: low latency and minimal overhead, no connection setup delay",
      "TCP prevents overwhelming the receiver and helps the network during congestion",
      "UDP suitable for real-time and broadcast where speed matters more than reliability"
    ],
    limitations: [
      "TCP: higher latency, more overhead, not ideal for real-time or loss-tolerant applications",
      "UDP: no reliability — packets can be lost, duplicated, or reordered; application must handle errors",
      "TCP can be slower under loss due to retransmissions and congestion control",
      "UDP can cause network congestion if applications send too aggressively"
    ],
    vivaQuestions: [
      { question: "What is the three-way handshake in TCP?", hint: "SYN from client, SYN-ACK from server, ACK from client — establishes connection" },
      { question: "When would you choose UDP over TCP?", hint: "Real-time apps (video, voice, gaming) where low latency matters more than reliability" },
      { question: "Does UDP guarantee delivery?", hint: "No — best-effort only; no ACKs or retransmissions" },
      { question: "What are TCP flow control and congestion control?", hint: "Flow control: receiver tells sender how much it can accept (window). Congestion control: sender slows down when network is congested." }
    ],
    defenceAnswer: {
      intro: "TCP and UDP are the two main protocols at the transport layer. TCP is used when we need reliable, ordered delivery — like when loading a webpage or downloading a file. UDP is used when we need low latency and can tolerate some loss — like in video calls or online games.",
      coreExplanation: [
        "TCP is connection-oriented. Before sending data, the client and server perform a three-way handshake: the client sends SYN, the server replies with SYN-ACK, and the client sends ACK. After that, a connection is established. TCP assigns sequence numbers to every byte so the receiver can reassemble data in order and detect missing segments. The receiver sends acknowledgments (ACKs); if the sender does not receive an ACK within a timeout, it retransmits. This makes TCP reliable.",
        "TCP also provides flow control so the sender does not overwhelm the receiver. The receiver advertises a window size indicating how much data it can accept. TCP also implements congestion control: when the network is congested (packet loss), the sender reduces its rate and then gradually increases it. This protects the network from collapse.",
        "UDP is connectionless. There is no handshake and no connection state. The sender simply puts data in UDP datagrams with source and destination port numbers and sends them. There are no sequence numbers, no ACKs, and no retransmissions. If a packet is lost, it is lost. UDP has a small fixed header (8 bytes) compared to TCP's 20-byte minimum plus options.",
        "Because UDP does not wait for ACKs or retransmit, it has lower latency and less overhead. This makes it suitable for real-time applications where a late packet is useless (e.g., in a video call, showing an old frame is worse than dropping it). Applications using UDP can implement their own reliability or error correction if needed.",
        "In practice, HTTP, HTTPS, FTP, SSH, and email use TCP. DNS typically uses UDP for queries (with TCP fallback for large responses). Streaming, gaming, and VoIP often use UDP. The choice depends on whether the application needs reliability and order (TCP) or low latency and simplicity (UDP)."
      ],
      exampleApplication: "When you watch a live sports stream, the video is often sent over UDP. If a few packets are lost, you might see a brief glitch, but the stream continues without waiting for retransmissions. In contrast, when you download a document, the browser uses TCP so that every part of the file is received correctly; if a segment is lost, TCP retransmits it before the file is considered complete.",
      conclusion: "TCP ensures that data arrives correctly and in order, at the cost of higher latency and overhead. UDP sacrifices reliability for speed and simplicity. Understanding both helps in choosing the right protocol for an application and in debugging network issues."
    },
    keyTerms: ["TCP", "UDP", "Connection-oriented", "Connectionless", "Three-way handshake", "Flow control", "Congestion control"],
    speakingTips: [
      "Start with: TCP = reliable and ordered; UDP = fast and best-effort",
      "Give one concrete use case for each (e.g., web = TCP, video call = UDP)",
      "Mention the three-way handshake when discussing TCP"
    ]
  },
  {
    id: 37,
    title: "IP Addressing and Subnetting",
    domain: "Networking & Telecom",
    definition: "IP addressing is the scheme used to uniquely identify devices on a network using IP addresses (IPv4: 32-bit, e.g., 192.168.1.1; IPv6: 128-bit). Subnetting is the practice of dividing a network into smaller subnetworks (subnets) for better organization, security, and efficient use of IP addresses.",
    keyConcepts: [
      "IPv4: 32 bits, dotted-decimal (e.g., 192.168.1.0), divided into network and host portions",
      "Subnet mask (e.g., 255.255.255.0) or CIDR notation (e.g., /24) defines network vs host bits",
      "Subnetting: borrow host bits to create more subnets with fewer hosts per subnet",
      "Default gateway: router address used to reach other networks",
      "Private IP ranges: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16; rest are public",
      "CIDR: Classless Inter-Domain Routing — flexible allocation (e.g., /25, /26)"
    ],
    examples: [
      "192.168.1.0/24 gives 254 usable host addresses (192.168.1.1 to 192.168.1.254)",
      "Subnetting 192.168.1.0/24 into /26 gives four subnets with 62 hosts each",
      "A typical home router uses 192.168.0.1 as gateway with subnet mask 255.255.255.0"
    ],
    realWorldApplications: [
      "Enterprises subnet their network by department (e.g., HR, IT, Sales) for security and management",
      "ISPs allocate blocks to customers using CIDR (e.g., /22 for a medium business)",
      "Home and office networks use private IPs with NAT to share one public IP"
    ],
    advantages: [
      "Efficient use of IP space through subnetting and CIDR",
      "Logical grouping improves security (e.g., isolate guest WiFi)",
      "Reduced broadcast domain size with smaller subnets",
      "Easier network design and troubleshooting with clear boundaries"
    ],
    limitations: [
      "IPv4 address exhaustion — limited to about 4.3 billion addresses",
      "Subnetting calculations can be error-prone; mistakes cause connectivity issues",
      "Complex routing tables when many small subnets exist",
      "Need for NAT and private addresses adds complexity"
    ],
    vivaQuestions: [
      { question: "What is the difference between network ID and host ID?", hint: "Network ID identifies the subnet; host ID identifies the device within that subnet" },
      { question: "How many hosts in a /26 subnet?", hint: "2^(32-26) - 2 = 64 - 2 = 62 (minus network and broadcast)" },
      { question: "What are private IP ranges?", hint: "10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16 — not routable on Internet" },
      { question: "What is CIDR?", hint: "Classless Inter-Domain Routing — notation like /24 to specify subnet size without classes" }
    ],
    defenceAnswer: {
      intro: "IP addressing is how we identify devices on a network. IPv4 addresses are 32 bits long, usually written in dotted-decimal form like 192.168.1.1. Subnetting is the process of splitting a network into smaller pieces for better management and security.",
      coreExplanation: [
        "An IPv4 address has two parts: the network portion and the host portion. The subnet mask (or CIDR prefix like /24) tells us how many bits are for the network. For example, 192.168.1.0/24 means the first 24 bits are the network; the last 8 bits are for hosts. So we have one network with 2^8 - 2 = 254 usable host addresses (we subtract the network address and the broadcast address).",
        "In subnetting, we borrow bits from the host portion to create more subnets. If we take a /24 and make it /26, we have 2^(26-24) = 4 subnets. Each subnet has 2^(32-26) = 64 addresses, of which 62 are usable for hosts. So we trade number of hosts per subnet for number of subnets.",
        "Private IP addresses are reserved for use inside networks and are not routed on the public Internet. The ranges are 10.0.0.0/8, 172.16.0.0/12, and 192.168.0.0/16. Home and office devices use these; when they need to reach the Internet, a router performs NAT (Network Address Translation) to use a single public IP.",
        "The default gateway is the IP address of the router on the same subnet. When a device wants to send a packet to another subnet, it sends the packet to the gateway, which then forwards it. Without a correct gateway and subnet mask, a device cannot reach other networks.",
        "CIDR (Classless Inter-Domain Routing) replaced the old classful system (A, B, C). With CIDR we can have any prefix length (/8 to /30), which allows flexible and efficient allocation. ISPs and enterprises use CIDR to allocate and aggregate routes."
      ],
      exampleApplication: "A company has the block 192.168.0.0/24. They create four subnets: 192.168.0.0/26 for IT, 192.168.0.64/26 for HR, 192.168.0.128/26 for Sales, and 192.168.0.192/26 for Guest WiFi. Each department has its own broadcast domain and can be secured separately. The gateway for each subnet might be .1, .65, .129, and .193 respectively.",
      conclusion: "IP addressing and subnetting are fundamental for designing and managing networks. Understanding network and host bits, subnet masks, and CIDR is essential for configuring devices and troubleshooting connectivity."
    },
    keyTerms: ["IPv4", "Subnet mask", "CIDR", "Network ID", "Host ID", "Default gateway", "Private IP"],
    speakingTips: [
      "Explain /24 and /26 with a simple example (e.g., 192.168.1.0/24)",
      "Mention why we subtract 2 for usable hosts (network and broadcast)",
      "Name the three private IP ranges briefly"
    ]
  },
  {
    id: 38,
    title: "DNS (Domain Name System)",
    domain: "Networking & Telecom",
    definition: "DNS is a distributed, hierarchical system that translates human-readable domain names (e.g., www.example.com) into IP addresses that computers use to communicate. It acts as the Internet's phone book, enabling users to access websites by name instead of remembering numeric IP addresses.",
    keyConcepts: [
      "Hierarchical structure: root, TLD (e.g., .com, .org), second-level domain, subdomain",
      "DNS resolution: iterative or recursive query from client to resolver to authoritative servers",
      "Record types: A (IPv4), AAAA (IPv6), MX (mail), CNAME (alias), NS (name server), TXT",
      "Caching: resolvers and clients cache responses to reduce load and speed up lookups",
      "Authoritative vs recursive resolvers: authoritative servers hold zone data; resolvers query on behalf of clients",
      "UDP port 53 for queries; TCP port 53 for large responses or zone transfers"
    ],
    examples: [
      "Typing google.com in a browser triggers a DNS query that returns Google's IP address",
      "Email delivery uses MX records to find the mail servers for a domain",
      "CNAME record points blog.example.com to the same server as www.example.com"
    ],
    realWorldApplications: [
      "Every webpage load, email send, and most app connections start with a DNS lookup",
      "Content delivery networks (CDNs) use DNS to direct users to the nearest server",
      "Load balancing can be done via DNS by returning different IPs for the same name"
    ],
    advantages: [
      "Users don't need to remember IP addresses",
      "IPs can change without changing the domain name (flexibility)",
      "Distributed and cached design scales globally and reduces latency",
      "Supports multiple record types for different services (web, mail, etc.)"
    ],
    limitations: [
      "DNS can be a single point of failure or attack (e.g., DDoS, cache poisoning)",
      "Propagation delay when updating records (TTL-dependent)",
      "Privacy: DNS queries can reveal which sites users visit",
      "No built-in encryption in traditional DNS (DNS over HTTPS/TLS address this)"
    ],
    vivaQuestions: [
      { question: "What is the purpose of DNS?", hint: "Translate domain names to IP addresses so users don't have to remember numbers" },
      { question: "Difference between iterative and recursive DNS query?", hint: "Recursive: resolver does all queries until answer; iterative: resolver gets referral and queries next server itself" },
      { question: "What are A, AAAA, and MX records?", hint: "A = IPv4, AAAA = IPv6, MX = mail server for the domain" },
      { question: "Why is DNS caching important?", hint: "Reduces load on authoritative servers and speeds up repeated lookups" }
    ],
    defenceAnswer: {
      intro: "DNS, or Domain Name System, is what allows us to type www.google.com instead of an IP address. It is a distributed database that maps domain names to IP addresses and other information, and it is one of the most critical services on the Internet.",
      coreExplanation: [
        "Domain names are hierarchical. For example, in www.example.com, 'com' is the top-level domain (TLD), 'example' is the second-level domain, and 'www' is a subdomain. The DNS hierarchy mirrors this: root servers at the top, then TLD servers (e.g., for .com), then authoritative servers for each domain. Each zone has authoritative name servers that hold the official records for that zone.",
        "When your computer needs the IP for a domain, it sends a query to a DNS resolver (often provided by your ISP or a service like Google DNS). The resolver can do recursive resolution: it asks the root server 'where is .com?', then asks the .com server 'where is example.com?', then asks the example.com server for the A record for www. The resolver returns the final answer to your computer. In iterative resolution, the resolver does each step and the client or resolver queries the next server based on referrals.",
        "DNS has several record types. A records map a name to an IPv4 address; AAAA for IPv6. MX records specify mail servers for the domain. CNAME records create an alias (e.g., blog.example.com points to www.example.com). NS records say which servers are authoritative for a zone. TXT records hold arbitrary text, often used for verification or SPF for email.",
        "Caching is crucial. Resolvers and clients cache DNS responses for a period specified by TTL (Time To Live). This reduces the number of queries to authoritative servers and speeds up repeated lookups. If the IP of a site changes, it may take up to TTL for the change to propagate everywhere.",
        "DNS typically uses UDP port 53 for queries because messages are small. For large responses (e.g., many records) or zone transfers between servers, TCP port 53 is used. Security concerns include DNS spoofing and cache poisoning; DNS over HTTPS (DoH) and DNS over TLS (DoT) encrypt DNS traffic to protect privacy and integrity."
      ],
      exampleApplication: "When you type 'youtube.com' in your browser, your device first asks the configured DNS resolver for the IP of youtube.com. The resolver may have it cached; if not, it queries the root, then the .com servers, then Google's authoritative servers, gets the A or AAAA record, and returns the IP to your device. The browser then opens a TCP connection to that IP on port 443 for HTTPS. All of this happens in milliseconds, often with the help of caching.",
      conclusion: "DNS is essential for the usability and operation of the Internet. Understanding its hierarchy, record types, and the role of resolvers and caching helps in both configuring services and troubleshooting connectivity or email issues."
    },
    keyTerms: ["DNS", "Domain name", "Resolver", "A record", "MX record", "CNAME", "TTL", "Authoritative server"],
    speakingTips: [
      "Start with the simple idea: DNS converts names to IPs",
      "Mention hierarchy: root → TLD → domain → subdomain",
      "Name at least two record types (A, MX, CNAME) with their use"
    ]
  },
  {
    id: 39,
    title: "Routing Algorithms and Protocols",
    domain: "Networking & Telecom",
    definition: "Routing is the process of selecting the best path for packets from source to destination across networks. Routing algorithms determine how routers build and update their routing tables. Routing protocols (e.g., RIP, OSPF, BGP) automate the exchange of routing information between routers so they can forward packets correctly.",
    keyConcepts: [
      "Static vs dynamic routing: static routes are manual; dynamic routes are learned via protocols",
      "Distance-vector (e.g., RIP): routers share their full table with neighbors; prone to slow convergence and count-to-infinity",
      "Link-state (e.g., OSPF): routers flood link state; each router builds same map and runs shortest path (e.g., Dijkstra)",
      "Path-vector (BGP): used between autonomous systems; carries full path and policy",
      "Metrics: hop count, bandwidth, delay, cost; used to choose best path",
      "Autonomous System (AS): collection of networks under one administrative control; BGP used between ASes"
    ],
    examples: [
      "RIP uses hop count; OSPF uses cost (often inverse of bandwidth)",
      "Within an organization: OSPF or EIGRP; between ISPs: BGP",
      "Default route (0.0.0.0/0) sends all unknown destinations to upstream router"
    ],
    realWorldApplications: [
      "Enterprise networks use OSPF or EIGRP for internal routing",
      "Internet backbone uses BGP to exchange routes between ISPs",
      "Home routers use a single default route to the ISP"
    ],
    advantages: [
      "Dynamic routing adapts to link failures and topology changes",
      "Scales to large networks when the right protocol is chosen",
      "Load balancing possible with equal-cost or policy-based paths",
      "Reduces manual configuration and human error"
    ],
    limitations: [
      "Routing loops possible (especially in distance-vector) until convergence",
      "Protocol overhead: bandwidth and CPU for updates",
      "Misconfiguration (e.g., BGP) can cause global outages",
      "Security: fake routes can redirect traffic; need authentication and filtering"
    ],
    vivaQuestions: [
      { question: "Difference between distance-vector and link-state routing?", hint: "Distance-vector: share distance to destinations with neighbors. Link-state: flood link info, each router computes shortest path." },
      { question: "What is BGP used for?", hint: "Routing between autonomous systems (ASes) on the Internet" },
      { question: "What is count-to-infinity?", hint: "Problem in distance-vector when a link fails; routers keep incrementing distance until a maximum" },
      { question: "What is an Autonomous System?", hint: "Set of networks under one administrative entity, identified by AS number" }
    ],
    defenceAnswer: {
      intro: "Routing is how packets find their way from source to destination across multiple networks. Routers maintain routing tables that say, for each destination, which next hop to use. Routing algorithms and protocols determine how those tables are built and updated.",
      coreExplanation: [
        "We have static and dynamic routing. In static routing, an administrator manually configures routes. It is simple and secure but does not adapt to failures or topology changes. In dynamic routing, routers run a routing protocol and exchange information with each other to learn routes automatically. When a link goes down, they can recompute and use an alternative path.",
        "Distance-vector protocols like RIP work by each router telling its neighbors its entire routing table (or the distances to all destinations). Each router updates its table based on what it hears. The metric is often hop count. The drawback is slow convergence and the count-to-infinity problem: when a link fails, incorrect distance information can propagate for many rounds. Solutions include split horizon and poison reverse.",
        "Link-state protocols like OSPF work differently. Each router floods information about its directly connected links (and their cost) to all other routers in the area. So every router gets the same view of the topology. Each router then runs a shortest-path algorithm (e.g., Dijkstra) to compute the best path to every destination. Convergence is faster and there is no count-to-infinity. OSPF is widely used in enterprise networks.",
        "BGP (Border Gateway Protocol) is used for routing between autonomous systems (ASes) on the Internet. An AS is a set of networks under one organization (e.g., an ISP). BGP is a path-vector protocol: it advertises not just the destination but the full path of ASes. This allows policy-based routing — an AS can choose to prefer or reject certain paths. BGP is critical for the Internet but complex; misconfigurations can cause large outages.",
        "Metrics matter. RIP uses hop count. OSPF uses cost (often inversely related to bandwidth). BGP uses attributes like AS path length and policy. The choice of protocol depends on size, need for policy, and whether we are inside one AS (OSPF, EIGRP) or between ASes (BGP)."
      ],
      exampleApplication: "In a company network, all internal routers might run OSPF. When a link between two buildings fails, OSPF routers detect the failure, flood updated link-state information, recompute shortest paths, and update their routing tables so traffic uses an alternate path. The company's edge router also runs BGP with the ISP to learn Internet routes and to advertise the company's public prefix to the rest of the world.",
      conclusion: "Routing algorithms and protocols are what make large and resilient networks possible. Understanding the difference between distance-vector and link-state, and the role of BGP between ASes, is essential for network design and troubleshooting."
    },
    keyTerms: ["Routing", "Routing table", "RIP", "OSPF", "BGP", "Autonomous System", "Metric", "Convergence"],
    speakingTips: [
      "Compare distance-vector and link-state in one sentence each",
      "Say where each protocol is used: RIP/OSPF inside AS, BGP between ASes",
      "Mention one problem: e.g., count-to-infinity in distance-vector"
    ]
  },
  {
    id: 40,
    title: "Network Security (Firewalls, VPN, IDS)",
    domain: "Networking & Telecom",
    definition: "Network security involves protecting network infrastructure and data from unauthorized access, attacks, and misuse. Firewalls filter traffic based on rules; VPNs create encrypted tunnels for secure remote access; IDS (Intrusion Detection Systems) monitor traffic and alert or act on suspicious behavior.",
    keyConcepts: [
      "Firewall: controls traffic based on rules (allow/deny by IP, port, protocol); stateful firewalls track connections",
      "VPN: encrypts traffic between endpoints (site-to-site or remote access); uses tunnels (e.g., IPsec, SSL/TLS)",
      "IDS: monitors traffic or host activity to detect attacks; signature-based or anomaly-based",
      "IPS: Intrusion Prevention System — like IDS but can block or mitigate in real time",
      "Defence in depth: combine firewall, VPN, IDS/IPS, and other controls",
      "Zero trust: verify every access; do not trust based on network location alone"
    ],
    examples: [
      "Office firewall allows HTTP/HTTPS outbound but blocks unknown inbound connections",
      "Employee working from home connects via VPN to access internal apps securely",
      "IDS alerts when it sees a known attack signature or unusual traffic pattern"
    ],
    realWorldApplications: [
      "Every corporate network uses firewalls at the perimeter and often internally",
      "Remote work and branch offices rely on VPNs for secure connectivity",
      "Data centers and enterprises deploy IDS/IPS to detect and stop intrusions"
    ],
    advantages: [
      "Firewalls prevent unauthorized access and limit blast radius of attacks",
      "VPNs enable secure communication over untrusted networks (e.g., Internet)",
      "IDS/IPS improve visibility and can stop attacks in real time",
      "Layered security (firewall + VPN + IDS) increases overall protection"
    ],
    limitations: [
      "Firewalls can be misconfigured or bypassed (e.g., allowed ports abused)",
      "VPNs add latency and require key and identity management",
      "IDS can generate false positives or miss novel attacks",
      "Encrypted traffic can hide malicious content from IDS unless decrypted"
    ],
    vivaQuestions: [
      { question: "What is the difference between stateful and stateless firewall?", hint: "Stateful tracks connections (e.g., allow return traffic for established sessions); stateless looks at each packet in isolation" },
      { question: "What does a VPN provide?", hint: "Confidentiality (encryption), integrity, and often authentication for traffic over untrusted networks" },
      { question: "Signature-based vs anomaly-based IDS?", hint: "Signature: match known attack patterns. Anomaly: baseline normal behavior, flag deviations." },
      { question: "What is an IPS?", hint: "Intrusion Prevention System — detects and can block or mitigate attacks in real time, not just alert" }
    ],
    defenceAnswer: {
      intro: "Network security aims to protect the network and the data that flows through it. Three key technologies are firewalls, which control what traffic is allowed; VPNs, which provide secure tunnels for remote or site-to-site connectivity; and IDS, which detect when someone is trying to break in or misuse the network.",
      coreExplanation: [
        "A firewall sits at the boundary of a network (or between segments) and applies rules to allow or deny traffic. Rules are typically based on source and destination IP, port, and protocol. A stateless firewall looks at each packet alone. A stateful firewall keeps track of connections: for example, if an internal host initiates an outbound connection, the firewall can allow the return traffic without opening a wide range of inbound ports. This is much safer. Next-generation firewalls also do application-level inspection and can block malware or unwanted applications.",
        "A VPN (Virtual Private Network) creates an encrypted tunnel between two endpoints. When you use a VPN, your traffic is encrypted on your device and decrypted at the VPN server (or the other site). So even if someone captures packets on the Internet, they cannot read the contents. VPNs use protocols like IPsec (common for site-to-site and many remote-access VPNs) or SSL/TLS (e.g., used in many remote-access VPNs). VPNs provide confidentiality and integrity and are essential for remote work and connecting branch offices.",
        "An Intrusion Detection System (IDS) monitors network traffic (or host activity) to detect attacks or policy violations. It can be signature-based: it has a database of known attack patterns and raises an alert when it sees a match. Or it can be anomaly-based: it learns what normal traffic looks like and flags significant deviations. IDS is usually passive — it alerts but does not block. An Intrusion Prevention System (IPS) is like an IDS but placed in-line so it can drop or modify malicious traffic in real time.",
        "In practice we use multiple layers. The firewall defines what is allowed. VPNs protect traffic that must cross untrusted networks. IDS/IPS add visibility and the ability to detect and sometimes stop attacks that get past the firewall or that come from inside. This is called defence in depth.",
        "Modern approaches also include zero trust: instead of assuming that everyone inside the network is trusted, we verify every user and device and limit access to only what is needed. Network security is not only about technology; policies, patching, and user awareness are equally important."
      ],
      exampleApplication: "When an employee works from a café, they connect to the company VPN. Their laptop encrypts all traffic to the company VPN gateway. The café WiFi and the Internet only see encrypted data. Inside the company, a firewall limits which internal servers the employee can reach, and an IDS monitors for unusual behavior. If the IDS sees a known malware signature, it can alert the security team or the IPS can block the connection.",
      conclusion: "Firewalls, VPNs, and IDS/IPS are fundamental building blocks of network security. Using them together and keeping rules and signatures updated helps protect organizations from both external and internal threats."
    },
    keyTerms: ["Firewall", "VPN", "IDS", "IPS", "Stateful", "Encryption", "Intrusion", "Defence in depth"],
    speakingTips: [
      "Define each in one line: firewall = filter traffic, VPN = secure tunnel, IDS = detect attacks",
      "Give one real use: e.g., VPN for remote work",
      "Mention stateful firewall and signature vs anomaly IDS"
    ]
  },
  {
    id: 41,
    title: "Wireless Networks and WiFi",
    domain: "Networking & Telecom",
    definition: "Wireless networks use radio waves instead of cables to connect devices. WiFi (based on IEEE 802.11) is the dominant technology for local wireless networking, providing high-speed access in homes, offices, and public places. It operates in unlicensed bands (2.4 GHz and 5 GHz) and uses access points to bridge wireless clients to wired networks.",
    keyConcepts: [
      "IEEE 802.11: family of standards (a/b/g/n/ac/ax); later letters mean higher speed and better features",
      "Access Point (AP): device that creates WiFi network; clients associate with AP and get IP via DHCP",
      "SSID: network name; BSSID: MAC address of the AP",
      "Channels and bands: 2.4 GHz (more range, more interference); 5 GHz (faster, less range); 6 GHz in WiFi 6E",
      "Security: WEP (broken), WPA2 (AES-CCMP), WPA3 (stronger encryption and key exchange)",
      "CSMA/CA: Carrier Sense Multiple Access with Collision Avoidance — wireless uses this instead of Ethernet's CSMA/CD"
    ],
    examples: [
      "Home router acts as AP; phones and laptops connect to its SSID and get Internet access",
      "Office deploys multiple APs for coverage; same SSID with roaming",
      "WiFi 6 (802.11ax) offers higher throughput and better performance in dense environments"
    ],
    realWorldApplications: [
      "Home and office broadband access without running cables to every device",
      "Hotspots in cafes, airports, and campuses",
      "IoT devices, smart home, and industrial sensors using WiFi"
    ],
    advantages: [
      "Mobility: users can move without being tied to a cable",
      "Easy to add new devices; no cabling cost",
      "Modern WiFi offers high data rates (hundreds of Mbps to Gbps)",
      "Unlicensed spectrum reduces cost of deployment"
    ],
    limitations: [
      "Interference from other WiFi networks and devices (e.g., microwaves on 2.4 GHz)",
      "Range and penetration through walls limited compared to wired",
      "Security risks if not properly configured (weak or default passwords)",
      "Shared medium: more users reduce per-user throughput"
    ],
    vivaQuestions: [
      { question: "What is the difference between 2.4 GHz and 5 GHz WiFi?", hint: "2.4: longer range, more interference; 5: higher speed, shorter range, less congestion" },
      { question: "Why does WiFi use CSMA/CA and not CSMA/CD?", hint: "In wireless we cannot detect collision while transmitting; so we avoid collision (RTS/CTS, backoff) instead" },
      { question: "What is WPA2?", hint: "Security standard for WiFi using AES-CCMP encryption; replaces WEP and WPA" },
      { question: "What is an SSID?", hint: "Service Set Identifier — the name of the WiFi network that users see" }
    ],
    defenceAnswer: {
      intro: "Wireless networks allow devices to connect without physical cables by using radio waves. WiFi, which follows the IEEE 802.11 standards, is the main technology for local wireless networking in homes, offices, and public spaces.",
      coreExplanation: [
        "WiFi is built on the IEEE 802.11 family. Older standards like 802.11b/g use 2.4 GHz; 802.11a and later use 5 GHz as well. Newer standards like 802.11ac (WiFi 5) and 802.11ax (WiFi 6) offer higher speeds and better efficiency. WiFi 6E also uses the 6 GHz band. The access point (AP) is the device that creates the wireless network. Clients discover APs by scanning for beacons that advertise the SSID (network name) and then associate with the AP. The AP typically connects to a wired network and provides DHCP so clients get IP addresses.",
        "Wireless uses shared medium: everyone on the same channel shares the same radio space. So we cannot use Ethernet's CSMA/CD (collision detection) because a station cannot transmit and listen at the same time to detect a collision. Instead, WiFi uses CSMA/CA — Carrier Sense Multiple Access with Collision Avoidance. Stations sense the channel; if it is busy they wait. They use random backoff and optionally RTS/CTS (Request to Send / Clear to Send) to reduce collisions.",
        "The 2.4 GHz band has fewer channels and is used by many devices (WiFi, Bluetooth, microwaves), so interference is common. The 5 GHz band has more channels and generally less interference, giving higher throughput but slightly shorter range. Placement of APs and choice of channel affect performance. In enterprises, multiple APs are deployed with the same SSID so users can roam.",
        "Security is critical. WEP is obsolete and easily broken. WPA2 uses AES-CCMP and is the minimum recommended. WPA3 adds stronger key exchange and better protection for open networks. Always use a strong passphrase and keep firmware updated. For enterprises, WPA2/WPA3-Enterprise with RADIUS and per-user credentials is used.",
        "WiFi is used for Internet access, file sharing, streaming, and IoT. Understanding bands, channels, security, and the role of the AP helps in designing and securing wireless networks."
      ],
      exampleApplication: "In a coffee shop, the router acts as an access point broadcasting an SSID like 'CoffeeShop_WiFi'. Your phone scans, finds this SSID, and connects. The AP gives your phone an IP via DHCP and forwards your traffic to the Internet. Other customers share the same AP and channel, so if many people are streaming, each gets a share of the bandwidth. The shop might use WPA2 with a shared password or a captive portal for authentication.",
      conclusion: "Wireless networks and WiFi are essential for mobile and flexible connectivity. Knowing how 802.11 works, the difference between 2.4 and 5 GHz, and how to secure WiFi is important for both personal and enterprise use."
    },
    keyTerms: ["WiFi", "802.11", "Access Point", "SSID", "CSMA/CA", "WPA2", "2.4 GHz", "5 GHz"],
    speakingTips: [
      "Start with: WiFi = wireless LAN based on 802.11",
      "Compare 2.4 GHz and 5 GHz in one sentence",
      "Mention WPA2 and why we don't use WEP"
    ]
  },
  {
    id: 42,
    title: "Network Topologies",
    domain: "Networking & Telecom",
    definition: "Network topology is the physical or logical arrangement of nodes (devices) and links (connections) in a network. It defines how devices are connected and how data flows. Common topologies include bus, star, ring, mesh, and tree; each has implications for cost, scalability, fault tolerance, and management.",
    keyConcepts: [
      "Physical topology: actual layout of cables and devices (e.g., star wiring)",
      "Logical topology: how data flows (e.g., logical ring in Token Ring)",
      "Bus: all devices on a single shared cable; simple but single point of failure and collision domain",
      "Star: all devices connect to a central hub/switch; easy to manage, central point of failure",
      "Ring: devices in a circle; token passing or data circulates; failure of one link can break ring",
      "Mesh: devices connected to many others; full mesh = every pair connected; high redundancy, high cost"
    ],
    examples: [
      "Classic Ethernet used bus topology (coaxial cable); modern Ethernet is physical star (to switch)",
      "Token Ring used logical ring with token passing",
      "WAN or data center backbone may use partial or full mesh for redundancy"
    ],
    realWorldApplications: [
      "Home and small office: star topology with a single router/switch",
      "Enterprise: star per floor, tree or hierarchical overall",
      "Critical networks: redundant links or mesh for high availability"
    ],
    advantages: [
      "Star: easy to add/remove devices, isolate failures to one link, simple cabling",
      "Mesh: multiple paths increase reliability and can load balance",
      "Ring: orderly access, no collisions in token ring",
      "Choosing right topology balances cost, performance, and resilience"
    ],
    limitations: [
      "Bus: entire segment fails if cable breaks; shared medium limits performance",
      "Star: central device is single point of failure; all traffic through it",
      "Ring: one link or node failure can break the ring unless dual ring",
      "Full mesh: cost and complexity grow quickly with number of nodes"
    ],
    vivaQuestions: [
      { question: "What is the difference between physical and logical topology?", hint: "Physical = how cables and devices are laid out; logical = how data actually flows" },
      { question: "Which topology uses a central device to which all others connect?", hint: "Star topology — hub or switch at center" },
      { question: "What is a disadvantage of bus topology?", hint: "Single cable break can disconnect segment; shared medium, collisions" },
      { question: "Why would you use mesh topology?", hint: "Redundancy, multiple paths, fault tolerance — at higher cost" }
    ],
    defenceAnswer: {
      intro: "Network topology describes how devices and links are arranged in a network — either physically, in terms of cabling, or logically, in terms of how data flows. The choice of topology affects cost, performance, and how well the network handles failures.",
      coreExplanation: [
        "Physical topology is the actual layout. In a bus topology, all devices share one cable (like old Ethernet with coaxial). It is simple and uses less cable, but a break in the cable can split the network, and everyone shares the same collision domain. Bus is largely obsolete in new deployments.",
        "In a star topology, every device connects to a central node — a hub or, more commonly, a switch. So the physical layout looks like a star. Adding or removing a device only affects one link. If one cable fails, only that device is affected. The downside is that the central device is critical: if it fails, the whole segment fails. Star is the most common in LANs today.",
        "In a ring topology, devices are connected in a circle. Data may travel in one direction (e.g., Token Ring) or both (e.g., FDDI dual ring). In token passing, a token circulates; only the holder can transmit, which avoids collisions. A disadvantage is that a single link or node failure can break the ring unless we have a dual ring or similar protection.",
        "In a mesh topology, devices have multiple connections to other devices. In a full mesh, every pair of nodes is directly connected — maximum redundancy but N(N-1)/2 links for N nodes, so cost grows fast. In a partial mesh, only some pairs have direct links. Mesh is used where reliability is critical, e.g., in WAN backbones or data centers.",
        "Logical topology can differ from physical. For example, Ethernet today is physically a star (each host to a switch) but logically a bus in the sense that all hosts are in the same broadcast domain unless VLANs are used. Token Ring was physically a star (wired to a MAU) but logically a ring. When designing a network, we choose a topology that fits our requirements for cost, scalability, and fault tolerance."
      ],
      exampleApplication: "A small office typically uses star topology: a switch in the server room and cables from the switch to each desk. When a new employee joins, we run one cable to the switch and plug in. If a cable to one desk fails, only that desk is affected. The switch is the central point — so the office might have a backup switch or redundant links for the server. In contrast, a bank's data center might use a partial mesh between core routers so that if one link fails, traffic can still reach its destination via another path.",
      conclusion: "Understanding topologies helps in designing and troubleshooting networks. Star is dominant in LANs for its simplicity; mesh is used where redundancy is essential. The right choice depends on size, budget, and availability requirements."
    },
    keyTerms: ["Topology", "Bus", "Star", "Ring", "Mesh", "Physical topology", "Logical topology"],
    speakingTips: [
      "Name at least four topologies: bus, star, ring, mesh",
      "Say that star is most common in LANs and why",
      "Give one advantage and one disadvantage of one topology"
    ]
  },
  {
    id: 43,
    title: "Switching and VLANs",
    domain: "Networking & Telecom",
    definition: "Switching is the process of forwarding frames at the data link layer (Layer 2) using MAC addresses. A switch learns which MAC addresses are on which ports and forwards frames only to the appropriate port. VLANs (Virtual LANs) logically segment a physical network into separate broadcast domains, improving security and traffic management without needing separate switches.",
    keyConcepts: [
      "Switch: Layer 2 device; forwards frames based on destination MAC; builds MAC table by learning source MACs",
      "VLAN: Virtual LAN — logical grouping of ports (or devices) into separate broadcast domains",
      "VLAN trunking: carrying multiple VLANs on one link (e.g., between switches) using 802.1Q tag",
      "Broadcast domain: without VLANs, all ports on a switch are in one domain; VLANs split it",
      "Inter-VLAN routing: devices in different VLANs need a router (or Layer 3 switch) to communicate",
      "VLAN benefits: security (isolate departments), reduce broadcast traffic, logical grouping without extra hardware"
    ],
    examples: [
      "Switch receives frame, looks up destination MAC in table, forwards to that port only (unicast)",
      "VLAN 10 for HR, VLAN 20 for IT — same switch, separate broadcast domains",
      "Trunk link between two switches carries traffic for VLAN 10 and 20 with 802.1Q tags"
    ],
    realWorldApplications: [
      "Enterprise: separate VLANs for different departments, guest WiFi, and servers",
      "Campus network: one physical infrastructure, multiple logical networks via VLANs",
      "Data center: VLANs for different tenants or application tiers"
    ],
    advantages: [
      "Switches reduce collision domain (per port) and forward only where needed",
      "VLANs improve security by isolating groups",
      "VLANs reduce broadcast traffic and allow flexible grouping without new cabling",
      "Trunking allows one link to carry many VLANs between switches"
    ],
    limitations: [
      "Switches forward broadcasts to all ports in the same VLAN; large VLANs mean more broadcast traffic",
      "Misconfiguration (e.g., wrong VLAN on port) can cause connectivity or security issues",
      "VLAN hopping attacks if trunk or native VLAN misconfigured",
      "Inter-VLAN routing adds complexity and need for Layer 3 device"
    ],
    vivaQuestions: [
      { question: "How does a switch learn MAC addresses?", hint: "It looks at source MAC of incoming frames and records MAC-to-port mapping in its table" },
      { question: "What is the purpose of a VLAN?", hint: "Logically separate broadcast domains on the same physical switch; security and traffic isolation" },
      { question: "What is 802.1Q?", hint: "Standard for VLAN tagging on trunk links; adds VLAN ID to frame" },
      { question: "How can two VLANs communicate?", hint: "Through a router or Layer 3 switch — inter-VLAN routing" }
    ],
    defenceAnswer: {
      intro: "Switching is how we forward traffic at Layer 2 using MAC addresses. VLANs let us split one physical switch into multiple logical networks, so we get better security and control over broadcast traffic without buying separate switches for each group.",
      coreExplanation: [
        "A switch has multiple ports and maintains a MAC address table (or forwarding table). When a frame arrives, the switch looks at the source MAC and records that this MAC is reachable via the port it came from. It then looks at the destination MAC. If it finds it in the table, it forwards the frame only to that port. If not, it floods the frame to all ports in the same VLAN (except the incoming port). So the switch learns over time and reduces unnecessary traffic. Unlike a hub, each port is its own collision domain, and the switch forwards only where needed.",
        "Without VLANs, all ports on a switch belong to one broadcast domain. So a broadcast from one device goes to every other device. In a large network that wastes bandwidth and can cause broadcast storms. A VLAN is a logical group of ports (or devices) that form a separate broadcast domain. So we can have VLAN 10 for HR and VLAN 20 for IT on the same switch; broadcasts in VLAN 10 do not go to VLAN 20.",
        "To carry multiple VLANs between switches we use a trunk. A trunk link connects two switches and carries frames for several VLANs. So we need to tag each frame with its VLAN ID. The standard for this is 802.1Q: a 4-byte tag is inserted into the Ethernet frame with the VLAN ID (12 bits). The receiving switch reads the tag and forwards the frame only to ports in that VLAN. On access ports (facing end devices), frames are usually untagged and the port is assigned to one VLAN.",
        "Devices in different VLANs cannot communicate at Layer 2 alone. We need a router or a Layer 3 switch to route between VLANs. The router has an interface (or sub-interface) per VLAN and forwards packets between them. This is called inter-VLAN routing.",
        "VLANs give us logical separation: we can put all HR devices in one VLAN and IT in another, so that even on the same switch they are isolated. That improves security and makes it easier to apply policies. We can also reduce broadcast scope and group users by function rather than by physical location."
      ],
      exampleApplication: "In an office building, one switch might have ports for both the HR floor and the IT floor. Instead of one flat network, we assign ports to VLAN 10 (HR) and VLAN 20 (IT). HR and IT each get their own broadcast domain and cannot see each other's traffic at Layer 2. The switch connects to a router (or Layer 3 switch) that has an IP in each VLAN and routes between them when needed. The link between this switch and another switch in the building is a trunk, so VLAN 10 and 20 traffic can go over one cable with 802.1Q tags.",
      conclusion: "Switching provides efficient Layer 2 forwarding; VLANs add logical segmentation on top of the same hardware. Together they are the basis of most enterprise LAN designs. Understanding MAC learning, VLANs, and trunking is essential for configuring and securing switched networks."
    },
    keyTerms: ["Switch", "MAC table", "VLAN", "Trunk", "802.1Q", "Broadcast domain", "Inter-VLAN routing"],
    speakingTips: [
      "Explain switch in one line: forwards by MAC, learns from source MAC",
      "Define VLAN: logical separation of broadcast domains on one switch",
      "Mention trunk and 802.1Q for multi-VLAN link"
    ]
  },
  {
    id: 44,
    title: "Quality of Service (QoS)",
    domain: "Networking & Telecom",
    definition: "Quality of Service (QoS) refers to mechanisms and techniques that manage network resources to ensure that critical or time-sensitive traffic gets the required bandwidth, low latency, and low loss, while other traffic can use the remaining capacity. QoS is essential when multiple types of traffic (voice, video, data) share the same network.",
    keyConcepts: [
      "Key metrics: bandwidth, delay (latency), jitter (variation in delay), packet loss",
      "Classification: identify traffic by DSCP, CoS, or other markers and put in queues",
      "Queuing: multiple queues (e.g., high priority for voice, low for bulk data); scheduler serves queues",
      "Policing vs shaping: policing drops or marks excess traffic; shaping buffers and delays excess to smooth rate",
      "DSCP (Differentiated Services Code Point): field in IP header for marking; CoS in Ethernet for Layer 2",
      "Congestion management: when link is busy, which packets get served first (e.g., priority queuing, WFQ)"
    ],
    examples: [
      "Voice over IP (VoIP) gets highest priority so calls are clear and without delay",
      "Video conferencing gets high priority; file download gets best-effort",
      "Router marks incoming traffic with DSCP and downstream device queues by DSCP"
    ],
    realWorldApplications: [
      "Enterprise: prioritize VoIP and video meetings over web browsing and backups",
      "ISP: offer tiered services (e.g., low-latency for gamers)",
      "Carrier networks: separate classes for voice, video, and data"
    ],
    advantages: [
      "Critical applications get predictable performance",
      "Reduces latency and jitter for real-time traffic",
      "Prevents one type of traffic from starving others",
      "Enables single network to carry voice, video, and data"
    ],
    limitations: [
      "Requires consistent configuration across the path; one device without QoS can break it",
      "Misconfiguration can favor wrong traffic or cause starvation",
      "Over-provisioning can reduce need for complex QoS but costs more",
      "Encrypted traffic is harder to classify unless marked at the edge"
    ],
    vivaQuestions: [
      { question: "What is jitter?", hint: "Variation in delay; problematic for voice and video" },
      { question: "What is the difference between policing and shaping?", hint: "Policing drops or marks excess; shaping buffers and smooths rate" },
      { question: "What is DSCP used for?", hint: "Marking IP packets for QoS; routers and switches use it to classify and queue traffic" },
      { question: "Why is QoS important for VoIP?", hint: "Voice needs low delay and jitter; without QoS, data traffic can cause choppy calls" }
    ],
    defenceAnswer: {
      intro: "Quality of Service, or QoS, is the set of techniques we use to give certain traffic better treatment than others when the network is busy. Without QoS, voice and video can suffer when the same link is used for file downloads or backups. With QoS, we can prioritize real-time traffic and manage congestion fairly.",
      coreExplanation: [
        "We care about several metrics: bandwidth (how much we can send), latency (delay), jitter (change in delay over time), and packet loss. For voice and video, high latency and jitter make the experience poor; for file transfer, we care more about throughput. QoS aims to give each type of traffic what it needs.",
        "Traffic must first be classified — we need to know which packets are voice, video, or data. Classification can be based on port numbers, IP addresses, or, better, on markings already in the packet. The IP header has a DSCP (Differentiated Services Code Point) field; we can set it at the edge (e.g., when a phone sends a packet) or when traffic enters our network. At Layer 2, Ethernet can use CoS (Class of Service) in the 802.1Q tag. Once marked, devices along the path can treat packets according to policy.",
        "Queuing is central. Instead of one big queue, we have multiple queues — for example, one for voice, one for video, one for critical data, one for best-effort. A scheduler decides which queue to serve. Strict priority means the high-priority queue is always served first (good for voice, but can starve others). Weighted fair queuing (WFQ) gives each queue a share of the link so no class is fully starved. Many networks use a combination.",
        "Policing and shaping limit the rate of traffic. Policing: if traffic exceeds a rate, we drop or re-mark the excess. Shaping: we buffer excess and send it later, so we smooth the rate. Policing is often at the edge when traffic enters; shaping can be used to smooth bursts before sending to a slower or congested link.",
        "For QoS to work, every device on the path that can be congested should support it. If one router in the path does not honor QoS, that router can introduce delay or loss and undo the benefit. So we need end-to-end design: classify and mark at the edge, then trust and apply queuing and policing in the core. In practice, VoIP and video are given top priority, interactive data next, and bulk transfer last."
      ],
      exampleApplication: "In a company, all VoIP traffic is marked with a high-priority DSCP at the IP phones or at the first switch. The switches and routers have queues: voice in the highest priority queue, video in the next, and everything else in best-effort. When the link is busy, voice packets are sent first, so calls remain clear. A large file download might slow down but does not affect the call. Without QoS, the download could use most of the bandwidth and cause voice packets to be delayed or dropped, making the call unusable.",
      conclusion: "QoS is essential when voice, video, and data share the same network. By classifying, marking, queuing, and sometimes policing and shaping, we can ensure that critical applications get the performance they need. Understanding the concepts and where to apply them is key for designing and supporting modern networks."
    },
    keyTerms: ["QoS", "Latency", "Jitter", "DSCP", "Queuing", "Policing", "Shaping", "Classification"],
    speakingTips: [
      "Define QoS in one sentence: manage network so important traffic gets better treatment",
      "Name the metrics: bandwidth, delay, jitter, loss",
      "Give one example: e.g., prioritize VoIP over file download"
    ]
  },
  {
    id: 45,
    title: "Mobile Communication (3G/4G/5G)",
    domain: "Networking & Telecom",
    definition: "Mobile communication refers to wireless cellular networks that provide voice and data services to mobile users. 3G brought mobile data and internet; 4G (LTE) provided high-speed broadband-like experience; 5G adds much higher speed, very low latency, and massive connectivity for IoT and new applications.",
    keyConcepts: [
      "Generations: 1G (analog voice), 2G (digital voice, SMS), 3G (mobile data), 4G LTE (high-speed IP), 5G (eMBB, URLLC, mMTC)",
      "Cellular structure: coverage divided into cells; frequency reuse; base station (eNodeB/gNB) per cell",
      "4G LTE: OFDMA, all-IP core (EPC), high peak rates (e.g., 100+ Mbps); voice over LTE (VoLTE)",
      "5G: New Radio (NR), higher bands (mmWave), lower latency (~1 ms), network slicing, massive MIMO",
      "Handover: moving from one cell to another without dropping the call or session",
      "Core network: 4G uses EPC; 5G uses 5GC (cloud-native, service-based architecture)"
    ],
    examples: [
      "3G allowed early mobile browsing and email; 4G enables streaming and video calls",
      "5G enables augmented reality, autonomous vehicles communication, and smart factories",
      "When you drive, your phone switches from one cell tower to the next (handover)"
    ],
    realWorldApplications: [
      "Consumer: voice, messaging, streaming, browsing, video calls on phones and tablets",
      "Enterprise: mobile workforce, IoT sensors, fixed wireless access",
      "Industry: 5G for automation, remote control, and real-time monitoring"
    ],
    advantages: [
      "Mobility: use services while moving over wide areas",
      "Each generation improves speed, capacity, and latency",
      "5G enables new use cases: IoT, AR/VR, critical communications",
      "Global standards (3GPP) allow interoperability and roaming"
    ],
    limitations: [
      "Spectrum is limited and expensive; coverage depends on deployment",
      "Indoor and rural coverage can be weak; 5G mmWave has short range",
      "Power consumption and cost of 5G infrastructure",
      "Backward compatibility and migration from 4G to 5G add complexity"
    ],
    vivaQuestions: [
      { question: "What does 4G LTE stand for?", hint: "Long Term Evolution; fourth generation mobile standard" },
      { question: "What are the main improvements in 5G over 4G?", hint: "Higher speed, much lower latency, massive connectivity, network slicing" },
      { question: "What is handover?", hint: "Process of transferring an active call or session from one cell to another" },
      { question: "What is network slicing in 5G?", hint: "Creating logical separate networks on same physical infrastructure for different use cases" }
    ],
    defenceAnswer: {
      intro: "Mobile communication has evolved through generations: 3G gave us mobile data and internet on the go, 4G LTE made it fast enough for video and browsing like at home, and 5G is bringing even higher speeds, very low latency, and support for a huge number of connected devices for IoT and new applications.",
      coreExplanation: [
        "Cellular networks divide the coverage area into cells. Each cell has a base station — in 4G we call it eNodeB, in 5G gNB. Frequencies are reused in non-adjacent cells to increase capacity. When you move, your device is handed over from one cell to another so the call or data session continues. 2G brought digital voice and SMS; 3G added packet-switched data so we could browse and use apps. 4G LTE is all-IP: voice and data both use IP, and the core network is the EPC (Evolved Packet Core).",
        "4G LTE uses OFDMA for the air interface, which gives good spectral efficiency and handles multipath well. Peak speeds can exceed 100 Mbps in good conditions. Voice is carried as VoIP over LTE (VoLTE) instead of the old circuit-switched voice. LTE is the foundation of today's mobile broadband.",
        "5G New Radio (NR) uses new spectrum bands, including high-frequency mmWave for very high capacity over short distances, and lower bands for coverage. 5G aims at three use cases: eMBB (enhanced Mobile Broadband) for high data rates, URLLC (Ultra-Reliable Low Latency) for critical applications like remote control and autonomous driving, and mMTC (massive Machine Type Communications) for huge numbers of IoT devices. Latency can be reduced to around 1 ms in ideal conditions.",
        "The 5G core (5GC) is designed as a service-based architecture with cloud-native functions. Network slicing allows the operator to create logical networks on the same infrastructure — for example, one slice for consumers, one for critical IoT, one for enterprise — each with its own QoS and security. This flexibility is a key differentiator of 5G.",
        "Deployment is gradual: 5G often starts in dense areas and uses 4G as fallback. Devices may support both 4G and 5G (and 3G where still available). Understanding the generations, the role of the cell and handover, and the goals of 5G (speed, latency, slicing) helps in discussing mobile networks and their applications."
      ],
      exampleApplication: "When you stream a video on your phone while traveling, your device is likely on 4G or 5G. It is connected to the nearest cell tower; as you move, the network hands you over to the next tower so the stream continues. The video data is sent as IP packets over the radio link and through the mobile core to the Internet. With 5G in a stadium, many users can get high speed at once, and in a factory, 5G can connect sensors and robots with very low latency for real-time control.",
      conclusion: "Mobile communication has moved from voice-only to high-speed data and is now evolving toward 5G with lower latency and massive connectivity. Understanding 3G, 4G, and 5G and concepts like cells, handover, and network slicing is important for anyone working in networking or telecommunications."
    },
    keyTerms: ["3G", "4G", "5G", "LTE", "Cell", "Handover", "eNodeB", "Network slicing", "Latency"],
    speakingTips: [
      "Summarize generations: 3G = data, 4G = high-speed, 5G = speed + latency + IoT",
      "Mention cell and handover for mobility",
      "Name one 5G feature: e.g., network slicing or low latency"
    ]
  }
];

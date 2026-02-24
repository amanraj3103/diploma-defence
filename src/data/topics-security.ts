import type { Topic } from "./types";

export const securityTopics: Topic[] = [
  {
    id: 80,
    title: "Cryptography Fundamentals (Symmetric, Asymmetric)",
    domain: "Cybersecurity",
    definition: "Cryptography is the science of securing information by converting it into an unreadable form (ciphertext) using algorithms and keys. Symmetric cryptography uses a single shared key for both encryption and decryption; asymmetric cryptography uses a pair of keys (a public key for encryption and a private key for decryption) enabling secure communication without sharing secrets.",
    keyConcepts: [
      "Symmetric encryption: one key for encrypt and decrypt; both parties must share the key securely (e.g., AES, DES, 3DES)",
      "Asymmetric encryption: public key encrypts, private key decrypts; public key can be shared openly (e.g., RSA, ECC)",
      "Confidentiality: only intended recipient can read the message",
      "Integrity: hashing (e.g., SHA-256) ensures data has not been altered",
      "Key exchange: symmetric keys are often exchanged using asymmetric crypto (e.g., TLS handshake)",
      "Hybrid systems: asymmetric used to exchange symmetric key; bulk data encrypted with symmetric for speed"
    ],
    examples: [
      "AES-256 encrypting a file: same key used to encrypt and decrypt; fast for large data",
      "RSA used in HTTPS: server public key encrypts session key; only server private key can decrypt",
      "Hashing a password with SHA-256: one-way; same input always gives same hash; used for verification"
    ],
    realWorldApplications: [
      "HTTPS/TLS: asymmetric handshake to establish session, symmetric AES for encrypting web traffic",
      "File and disk encryption (e.g., BitLocker, VeraCrypt): symmetric encryption for speed",
      "Digital signatures: private key signs, public key verifies; proves authenticity and integrity"
    ],
    advantages: [
      "Symmetric: fast, efficient for large data; simple key management when key is already shared",
      "Asymmetric: no need to share secret over insecure channel; enables digital signatures and PKI",
      "Combined use (hybrid) gives both security and performance",
      "Standard algorithms (AES, RSA) are well-tested and widely supported"
    ],
    limitations: [
      "Symmetric: key distribution problem; how to securely share the key with the recipient",
      "Asymmetric: slower and larger ciphertext; not practical for encrypting huge amounts of data alone",
      "Key management: lost private key means lost access; compromised key compromises all past and future data",
      "Algorithm strength: weak algorithms or short keys (e.g., old DES) can be broken"
    ],
    vivaQuestions: [
      { question: "What is the main difference between symmetric and asymmetric cryptography?", hint: "Symmetric uses one shared key; asymmetric uses a public-private key pair; only private key can decrypt what public key encrypted." },
      { question: "Why is AES preferred over DES today?", hint: "DES has 56-bit key (broken); AES supports 128, 192, 256 bits and is faster and more secure." },
      { question: "How does hybrid encryption work in practice?", hint: "Asymmetric encrypts a random symmetric key; that key is then used to encrypt the actual data (e.g., in TLS)." },
      { question: "What is the role of hashing in cryptography?", hint: "Hashing is one-way; used for integrity (checksums, password storage) and in digital signatures." }
    ],
    defenceAnswer: {
      intro: "Cryptography is the foundation of securing data in transit and at rest. There are two main families: symmetric cryptography, where one key is used for both encryption and decryption, and asymmetric cryptography, where a public key encrypts and a private key decrypts. Both are essential in modern systems.",
      coreExplanation: [
        "In symmetric cryptography, the same secret key is used to encrypt and decrypt. Algorithms like AES (Advanced Encryption Standard) are fast and suitable for encrypting large volumes of data. The problem is key distribution: how do two parties agree on a key without an attacker intercepting it? Historically, keys had to be exchanged in person or through a secure channel.",
        "Asymmetric cryptography solves the key distribution problem. Each party has a key pair: a public key, which can be shared with anyone, and a private key, which is kept secret. Data encrypted with the public key can only be decrypted with the corresponding private key. So Alice can send Bob her public key over an insecure channel; Bob encrypts his message with it, and only Alice, with her private key, can decrypt it. RSA and Elliptic Curve Cryptography (ECC) are common asymmetric algorithms.",
        "Asymmetric encryption is much slower and produces larger ciphertext than symmetric encryption. So in practice we use a hybrid approach: asymmetric cryptography is used once to securely exchange a random symmetric key, and then that symmetric key is used to encrypt the actual data. This is exactly what happens in TLS when you connect to an HTTPS website.",
        "Besides confidentiality, we need integrity. Hash functions like SHA-256 take any input and produce a fixed-size digest. The same input always gives the same hash; a tiny change in input changes the hash completely. Hashes are one-way: you cannot recover the input from the hash. They are used in password storage (store hash, not password), file integrity checks, and digital signatures.",
        "Digital signatures combine hashing and asymmetric crypto: the signer hashes the message and encrypts the hash with their private key. Anyone with the public key can decrypt the hash, recompute the hash of the message, and verify they match. This proves the message came from the holder of the private key and was not altered. Thus cryptography provides confidentiality, integrity, and authenticity."
      ],
      exampleApplication: "When you log into your bank website over HTTPS, your browser and the server first run a TLS handshake. The server sends its certificate containing its public key. The browser verifies the certificate, then generates a random symmetric session key, encrypts it with the server public key, and sends it. Only the server can decrypt it with its private key. From then on, all HTTP data is encrypted with that symmetric key using AES. So we get both secure key exchange (asymmetric) and fast bulk encryption (symmetric).",
      conclusion: "Symmetric cryptography is fast and good for bulk data but requires secure key exchange. Asymmetric cryptography enables secure key exchange and digital signatures but is slower. Real-world systems use both: asymmetric for key exchange and signatures, symmetric for encrypting the actual data. Understanding both is essential for implementing and evaluating secure systems."
    },
    keyTerms: ["Symmetric encryption", "Asymmetric encryption", "Public key", "Private key", "AES", "RSA", "Hash", "Digital signature"],
    speakingTips: [
      "Start with: one key vs two keys; symmetric vs asymmetric",
      "Give the hybrid example: TLS uses asymmetric to exchange symmetric key, then symmetric for data",
      "Mention hashing for integrity and that it is one-way"
    ]
  },
  {
    id: 81,
    title: "Public Key Infrastructure (PKI) and Digital Certificates",
    domain: "Cybersecurity",
    definition: "Public Key Infrastructure (PKI) is a framework to create, manage, distribute, and revoke digital certificates. A digital certificate binds a public key to an identity (person, server, or organization) and is signed by a trusted Certificate Authority (CA), so others can verify that the public key really belongs to that entity.",
    keyConcepts: [
      "Certificate Authority (CA): trusted third party that issues and signs certificates (e.g., DigiCert, Let's Encrypt)",
      "Digital certificate: contains public key, identity (e.g., domain name), validity period, and CA signature",
      "Certificate chain: root CA signs intermediate CAs; intermediate signs end-entity certificate; chain of trust",
      "X.509: standard format for certificates (subject, issuer, validity, public key, extensions)",
      "Revocation: CRL (Certificate Revocation List) or OCSP to check if certificate was revoked",
      "Trust store: list of root CAs that the browser or OS trusts by default"
    ],
    examples: [
      "HTTPS: server presents certificate; browser checks CA signature and domain match",
      "Code signing: developer signs software with private key; users verify with certificate from CA",
      "Email (S/MIME): certificate binds public key to email address for signed or encrypted email"
    ],
    realWorldApplications: [
      "Web security: TLS/HTTPS relies on server certificates to authenticate websites and establish encrypted sessions",
      "Enterprise: internal CA issues certificates for employees, devices, and services (VPN, Wi-Fi, email)",
      "Software distribution: code signing certificates ensure software has not been tampered with"
    ],
    advantages: [
      "Enables authentication without pre-shared secrets; anyone can verify identity using CA public key",
      "Scalability: one CA can issue many certificates; clients only need to trust the root CA",
      "Revocation mechanism allows invalidating compromised or expired certificates",
      "Standard (X.509) ensures interoperability across platforms and applications"
    ],
    limitations: [
      "Trust dependency: if a CA is compromised or malicious, it can issue fake certificates",
      "Revocation checking adds latency (OCSP) or may not be checked by some clients",
      "Certificate lifecycle management is complex: renewal, revocation, key rotation",
      "Private key compromise: if key is stolen, certificate must be revoked and reissued"
    ],
    vivaQuestions: [
      { question: "What is the role of a Certificate Authority (CA)?", hint: "CA is a trusted party that signs certificates, binding a public key to an identity; clients trust the CA signature." },
      { question: "What is a certificate chain?", hint: "Root CA signs intermediate CA; intermediate signs end-entity cert; verification follows the chain to a trusted root." },
      { question: "How does the browser verify an HTTPS certificate?", hint: "Checks signature with CA public key, validity dates, domain name match, and optionally revocation (OCSP)." },
      { question: "What is certificate revocation and why is it needed?", hint: "Revocation invalidates a cert before expiry (e.g., key compromise); done via CRL or OCSP." }
    ],
    defenceAnswer: {
      intro: "Public Key Infrastructure, or PKI, is the system that allows us to trust that a public key really belongs to the person or server it claims to. It is built around digital certificates and Certificate Authorities. Without PKI, we could not securely verify identities on the Internet, such as when we connect to an HTTPS website.",
      coreExplanation: [
        "A digital certificate is a document that says: this public key belongs to this identity (e.g., this public key belongs to the server at www.example.com). The certificate includes the public key, the identity (domain name or organization), a validity period, and a digital signature. The signature is produced by a Certificate Authority, or CA. The CA is a trusted third party that we assume will only issue certificates to entities that have proven they own that identity.",
        "When your browser connects to an HTTPS site, the server sends its certificate. The browser has a list of trusted root CAs built in (the trust store). The server certificate may be signed directly by a root CA, or more commonly by an intermediate CA, which is itself signed by the root. The browser verifies the chain: it checks that the server certificate is signed by the intermediate, and the intermediate by the root, and that the root is in the trust store. It also checks that the domain name in the certificate matches the site you are visiting, and that the certificate is within its validity period.",
        "If any of these checks fail (wrong domain, expired certificate, or signature that does not verify), the browser will show a warning. If all pass, the browser trusts the server public key and uses it to establish an encrypted session. So PKI solves the problem: how do we know this public key really belongs to example.com? Answer: because a CA we trust has signed a certificate saying so.",
        "Certificates can be revoked before they expire (e.g., if the server private key is stolen). Revocation is handled by Certificate Revocation Lists (CRLs) or by OCSP (Online Certificate Status Protocol), where the client asks in real time whether a certificate is still valid. In practice, not all clients check revocation strictly, which is a known limitation.",
        "PKI is used not only for HTTPS but also for code signing, email (S/MIME), and within organizations for VPNs, Wi-Fi authentication, and device identity. Enterprises often run their own internal CA. The security of the whole system depends on protecting the CA private key and on CAs following strict procedures when issuing certificates."
      ],
      exampleApplication: "When you visit https://bank.example.com, the server sends its certificate. Your browser sees that the certificate is signed by an intermediate CA (e.g., DigiCert), and that intermediate is signed by DigiCert Root CA, which is in your browser trust store. The certificate says the public key inside belongs to bank.example.com, and you are on bank.example.com, so the domain matches. The browser then uses that public key to complete the TLS handshake. Without PKI, you would have no way to be sure that the public key really belongs to the bank and not to an attacker.",
      conclusion: "PKI provides a scalable way to bind public keys to identities through digital certificates and trusted Certificate Authorities. Certificates are verified by checking the CA signature and the certificate chain up to a trusted root. Revocation mechanisms exist for compromised certificates. PKI is the backbone of HTTPS, code signing, and many enterprise authentication systems."
    },
    keyTerms: ["PKI", "Digital certificate", "Certificate Authority (CA)", "X.509", "Trust store", "Certificate chain", "Revocation", "OCSP"],
    speakingTips: [
      "Explain certificate as identity card for a public key, signed by a trusted CA",
      "Describe the chain: server cert to intermediate to root; browser trusts root",
      "Mention domain match and validity as part of verification"
    ]
  },
  {
    id: 82,
    title: "Network Security and Firewalls",
    domain: "Cybersecurity",
    definition: "Network security protects network infrastructure and traffic from unauthorized access. A firewall monitors and controls traffic based on rules (e.g., allow/deny by IP, port), acting as a barrier between trusted and untrusted networks.",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 83,
    title: "Malware Types and Detection",
    domain: "Cybersecurity",
    definition: "Malware (malicious software) includes viruses, worms, Trojans, ransomware, and spyware. Detection uses signatures (known patterns), heuristics, and behavior-based analysis or sandboxing.",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 84,
    title: "Ethical Hacking and Penetration Testing",
    domain: "Cybersecurity",
    definition: "Definition 84",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 85,
    title: "Access Control Models (DAC, MAC, RBAC)",
    domain: "Cybersecurity",
    definition: "Definition 85",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 86,
    title: "Intrusion Detection and Prevention Systems",
    domain: "Cybersecurity",
    definition: "Definition 86",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 87,
    title: "Blockchain and Cryptocurrency Basics",
    domain: "Cybersecurity",
    definition: "Definition 87",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 88,
    title: "Social Engineering Attacks",
    domain: "Cybersecurity",
    definition: "Definition 88",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 89,
    title: "Cyber Laws and Digital Forensics",
    domain: "Cybersecurity",
    definition: "Definition 89",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  },
  {
    id: 90,
    title: "Zero Trust Security Model",
    domain: "Cybersecurity",
    definition: "Definition 90",
    keyConcepts: ["C1", "C2", "C3", "C4", "C5"],
    examples: ["E1", "E2", "E3"],
    realWorldApplications: ["A1", "A2", "A3"],
    advantages: ["V1", "V2", "V3", "V4"],
    limitations: ["L1", "L2", "L3", "L4"],
    vivaQuestions: [{ question: "Q1?", hint: "H1" }, { question: "Q2?", hint: "H2" }, { question: "Q3?", hint: "H3" }, { question: "Q4?", hint: "H4" }],
    defenceAnswer: { intro: "Intro.", coreExplanation: ["P1", "P2", "P3", "P4", "P5"], exampleApplication: "Example.", conclusion: "End." },
    keyTerms: ["T1", "T2", "T3", "T4", "T5"],
    speakingTips: ["Tip1", "Tip2", "Tip3"]
  }
];

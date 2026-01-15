# Basic concepts

This section covers the basics of decentralized identity and explains how  Identus functions.  
Learning outcomes:

* Discover why identity is important  
* Understand the main components and how they interact  
* Explore multi-tenancy features  
* See how these ideas work together in real-world situations.

## 1. Why identity matters {#1-why-identity-matters}

Identity is about access. It is the key that unlocks doors we wish to enter. To stream movies, we need access to the virtual theater. Today, we do that by having an account with a streaming service, which authenticates us into the lobby.

We need authorization to access a streaming service, which requires a subscription plan. The type of plan determines whether we can watch content in standard, high definition, or 4K resolution.

This example is repeatable across all interactions, including banking, insurance, online services, shopping, investing, education, traveling, driving, and many more. Identity may be the most essential thing we undervalue in our lives. We use it to access goods and services both physically and digitally, locally and globally.

### The challenge with current identity systems {#the-challenge-with-current-identity-systems}

* Control – organizations control identity data instead of individuals  
* Privacy – multiple parties collect and store personal information  
* Security – hackers target centralized databases to steal data  
* Flexibility – users struggle to move identity data between services  
* Portability – credentials fail to work across different platforms.

### Self-sovereign identity  {#self-sovereign-identity}

[SSI](https://github.com/input-output-hk/atala-prism-docs/blob/doc-fixes/docs/concepts/glossary/#self-sovereign-identity) directly addresses the challenges above. Instead of organizations holding control, SSI shifts power to individuals. Decentralized identity technology gives people ownership of their identity data, improves privacy, strengthens security, and enables portability across platforms. Sovrin has compiled [a clear overview of SSI principles](https://sovrin.org/principles-of-ssi/).

### How SSI compares to traditional identity frameworks {#how-ssi-compares-to-traditional-identity-frameworks}

* Control – in traditional systems, organizations control data. With SSI, individuals own and manage their identity data  
* Privacy – traditional models force all-or-nothing data sharing. SSI lets users share only the minimum required information  
* Interoperability – platform-specific credentials limit usability. SSI credentials work across different platforms and services  
* Security – centralized databases remain vulnerable to breaches. SSI uses cryptographic proofs that make credentials tamper-evident  
* Availability – traditional verification depends on service providers. SSI removes this dependency through decentralized verification.

### Industry standards {#industry-standards}

The World Wide Web Consortium (W3C) has been setting the standards for the internet as we know it. Similarly, they are also working on next-generation technologies such as decentralized identity. In July 2022, the W3C approved the DID specification to become a [recommendation](https://www.w3.org/press-releases/2022/did-rec/).

The W3C has compiled a comprehensive registry of all DID methods available in its [DID specification registries](https://www.w3.org/TR/did-spec-registries/).

For a deep dive into the DID specification itself, see the [W3C DID Core specification](https://www.w3.org/TR/did-core/).

### Real-world applications {#real-world-applications}

| Application area | Use case | Key benefit |
| :---- | :---- | :---- |
| **Education** | Tamper-proof diplomas and certificates | Eliminates fraud such as educational misrepresentation |
| **Professional** | Verifiable professional qualifications | Instant verification |
| **Healthcare** | Secure, portable medical information | Patient data integrity |
| **Financial** | Simplified KYC processes | Reduced onboarding time, reusable KYC credentials |
| **Supply chain** | Product authenticity and provenance tracking | Combat counterfeiting |
| **Government** | Digital citizenship and voting systems | Enhanced civic participation, voting system |

---

## 2. How Identus works {#2-how-identus-works}

Identus enables secure, decentralized identity interactions through a simple but powerful trust model. Understanding this model is key to building effective identity solutions.

### The trust triangle {#the-trust-triangle}

The trust triangle is the most basic process for conveying trust in the digital world. There are three roles in the SSI ecosystem – holders, issuers, and verifiers.

![Trust Triangle diagram](/img/trust-triangle.png)

### Holders {#holders}

**Holders** can be any entity, such as individuals, organizations, or digital or physical things. They hold verifiable credentials (VCs) and use verifiable presentations to share their VCs when needed.

**Example**: Alice holds a university degree credential and a driver's license credential in her digital wallet.

### Issuers {#issuers}

**Issuers** can also be any entity that makes claims about another entity. These claims are attestations, or evidence of something, about the holder. Issuers create and sign verifiable credentials.

**Example**: A university issues a degree credential to Alice, and the driver licensing authority issues a driver’s license credential to Alice.

### Verifiers {#verifiers}

**Verifiers** are the relying party in the triangle. They request information from the holder, such as proof of education, and the holder uses a verifiable presentation to share the appropriate VCs with the verifier. The holder's digital signature and the issuer’s DID are verified to ensure nothing has been tampered with.

**Example**: An employer requests proof of Alice's degree. Alice creates a verifiable presentation containing her university credentials and shares it with the employer.

### How it works {#how-it-works}

Identus comprises core libraries that facilitate typical SSI interactions among issuers, holders, and verifiers.

![Identus component diagram](/img/component-diagram.png)

**Identus component capabilities** 

The Identus ecosystem consists of three core components, each serving distinct functions in the decentralized identity infrastructure:

* **Cloud agent** provides comprehensive server-side identity operations, enabling organizations to issue and verify credentials, manage decentralized identifiers, establish secure connections between parties, and support multi-tenant deployments for scalable enterprise use.

* **Wallet SDKs** deliver client-side credential management capabilities for mobile and web applications, allowing users to securely store their VCs, create presentations for verification requests, manage cryptographic keys, and handle encrypted DIDComm messaging with other parties.


* **The mediator** acts as a message routing proxy, ensuring reliable communication in the decentralized ecosystem. It routes and stores messages between parties, enables offline message delivery for mobile devices, and provides privacy-preserving message forwarding without exposing communication patterns.

For more information, refer to the [Advanced explainers](/documentation/learn/advanced-explainers/). 

**Typical interaction flow**

| Phase | Actor | Action | Outcome |
| :---- | :---- | :---- | :---- |
| **Setup** | Issuer | Sets up the Cloud agent and creates a DID | Ready to issue credentials |
| **Setup** | Holder | Installs the wallet app with the SDK | Ready to receive credentials |
| **Setup** | Verifier | Sets up the Cloud agent and creates a DID | Ready to verify credentials |
| **Connection** | Issuer | Generates a connection invitation | QR code or link created |
| **Connection** | Holder | Scans the QR code or clicks the link | Connection request sent |
| **Connection** | System | Establishes a secure DIDComm connection | Parties can communicate securely |
| **Issuance** | Issuer | Creates a credential offer | Offer sent to the holder |
| **Issuance** | Holder | Receives and accepts the offer | Verifiable credential obtained |
| **Issuance** | System | Stores the credential securely | Credential ready for use |
| **Verification** | Verifier | Requests proof of attributes | Proof request sent |
| **Verification** | Holder | Creates a verifiable presentation | Presentation sent to verifier |
| **Verification** | Verifier | Cryptographically verifies presentation | Trust decision made |

## 3. Features and benefits {#3-features-and-benefits}

Identus includes a range of features that strengthen security, safeguard privacy, and ensure a resilient and reliable architecture.

| Security layer | Feature | Description |
| :---- | :---- | :---- |
| **Cryptographic** | Digital signatures | Issuers digitally sign all credentials |
| **Cryptographic** | Ownership proofs | Holders prove ownership through cryptographic proofs |
| **Cryptographic** | Encrypted messaging | Communications use encrypted DIDComm messaging |
| **Cryptographic** | Secure key management | Keys managed in secure hardware or software enclaves |
| **Privacy** | Selective disclosure | Share only required attributes |
| **Privacy** | Zero-knowledge proofs | Prove statements without revealing underlying data |
| **Privacy** | Unlinkable presentations | Prevent correlation across verifiers |
| **Privacy** | Minimal data sharing | Verifiers see only what they need |
| **Architecture** | No single point of failure | Distributed system design |
| **Architecture** | Offline operations | Works offline for many operations |
| **Architecture** | Issuer independence | No dependency on issuer for verification |
| **Architecture** | Censorship resistance | Resistant to censorship and service interruptions |

### Benefits for different roles {#benefits-for-different-roles}

Identus provides distinct advantages for each participant in the SSI ecosystem:

* **Issuers** benefit from tamper-evident credentials, automated verification processes, and comprehensive audit trails, resulting in reduced fraud, lower operational costs, and an enhanced customer experience.  
* **Holders** gain complete data ownership and control, portable credentials across platforms, and enhanced privacy protection, resulting in greater convenience, improved security, and reduced unnecessary information sharing.  
* **Verifiers** enjoy instant verification capabilities, access to trusted information, and easy system integration, which translates to lower compliance costs, reduced liability, and simplified system architecture.

Now that you've learned about the core concepts of identity, the trust triangle, and how Identus components work together, you can explore multi-tenancy features and discover how to implement these concepts in real-world scenarios.

## 4. Multi-tenancy {#4-multi-tenancy}

Multi-tenancy is a fundamental capability of the Identus toolset designed to provide secure and efficient identity and credential management for diverse users and organizations. It enables the platform to serve multiple tenants while ensuring the logical isolation of their assets.

**Key benefits**

| Benefit | Description | Business impact |
| :---- | :---- | :---- |
| **Scalability** | Platform scales effortlessly for growing users and organizations | Supports business growth without infrastructure overhaul |
| **Resource efficiency** | Optimizes resource utilization through infrastructure sharing | Enhanced cost-effectiveness and reduced operational overhead |
| **Data isolation** | Complete separation of tenant data (DIDs, VCs, keys, connections) | Preserves data privacy and security across multiple tenants |
| **Enhanced collaboration** | Shared wallets enable collaboration while maintaining data segregation | Supports complex organizational workflows |
| **Granular control** | Administrators control resources and permissions per entity | Fine-tuned security and access management |

### Roles in multi-tenancy {#roles-in-multi-tenancy}

Multi-tenancy enables multiple users or systems to utilize the Cloud Agent within a shared instance, enhancing resource utilization while maintaining the separation of each tenant's resources. Understanding different roles in multi-tenancy is essential for the secure and efficient operation of the Cloud agent.

**Administrator**  
The administrator's primary responsibilities include setting up, allocating, and managing tenant resources. Administrators have elevated privileges within the system, enabling them to create, modify, or delete multi-tenant resources, including entities, wallets, and authentication methods. They play a critical role in tenant management but typically don't participate in everyday interactions.

**Tenant**  
Tenants are users or systems engaged in everyday interactions. They have representation via a resource called an entity, which uses a wallet as a container for the assets they own. Tenants can only view the assets within the wallet assigned to their entity. To access the system, they need an authentication method provided by the administrator.

### Concepts {#concepts}

**Wallet**  
A wallet is a central component of Identus' multi-tenancy model. It serves as a container for storing and managing a tenant's DIDs, connections, VCs, keys, and other related items. Wallets are logically isolated to ensure that the data associated with one entity remains separate and secure from others.

**Entity**  
An entity represents a user or any other identity within the Identus platform. Each entity owns a wallet, making it the primary entity for managing and interacting with its digital credentials and assets. Entities can also share wallets, allowing for the collaborative use of resources.

**Authentication method**  
Each entity is associated with an authentication method, which serves as a secure means of verifying the identity and access rights of the entity. This method ensures the entity's identity is authenticated during interactions with the platform, enhancing security.

**Logical isolation**  
Logical isolation is a core principle of Identus' multi-tenancy model. It ensures that one entity's digital assets, transactions, and data are logically separated from those of others, maintaining the highest level of data privacy and security.

**Shared wallets**  
Identus' multi-tenancy capabilities enable the sharing of wallets across multiple entities. This feature facilitates collaborative work and resource sharing while preserving data isolation within the shared wallet. The entity can own only one wallet. Sharing it with other entities is possible, but multiple entities cannot own it.

**Tenant management**  
Tenant management is the process of onboarding, provisioning, and managing entities and wallets within the Identus platform. Administrators can configure each entity's permissions, resources, and access control, ensuring efficient and secure multi-tenancy operations.

### Getting started with multi-tenancy {#getting-started-with-multi-tenancy}

Multi-tenancy requires implementation planning to configure the Cloud agent with multi-tenancy enabled. The system supports various authentication methods, including API keys, JWT tokens, and third-party identity providers.

For detailed implementation guidance, refer to the [multi-tenancy tutorials](https://hyperledger-identus.github.io/docs/tutorials/multitenancy/tenant-onboarding). 

## 5. Common use cases {#5-common-use-cases}

Identus enables a wide range of identity and credential applications across various industries. Understanding these use cases helps you identify opportunities to implement decentralized identity solutions in your organization.

### Education sector {#education-sector}

**Digital diplomas and certificates**  
Universities and other educational institutions can issue tamper-proof, verifiable diplomas and certificates that students own and control.

**Benefits**:

* Elimination of fraudulent credentials  
* Reduction in verification time from weeks to seconds  
* Enablement of global portability of educational achievements  
* Lowering of administrative costs for institutions.

**Example implementation**: a university issues blockchain-anchored degree credentials to graduates. Employers can instantly verify the authenticity without contacting the university.

**Continuing education tracking**  
Professional development and certification programs can create portable learning records that follow learners throughout their careers.

**Benefits**:

* Comprehensive professional development history  
* Cross-platform recognition of achievements  
* Automated compliance tracking  
* Simplified certification renewal processes.

### Healthcare {#healthcare}

**Medical records portability**  
Patients can own and control their medical records, selectively sharing information with healthcare providers while maintaining privacy.

**Benefits**:

* Improved care coordination between providers  
* Patient control over sensitive health data  
* Reduced medical errors from incomplete records  
* Emergency access to critical health information.

**Example implementation**: a patient holds verifiable health credentials, including vaccination status, allergies, and medical history. They can selectively share relevant information with new medical practitioners or emergency responders.

**Professional licensing**  
Medical boards can issue digital licenses that healthcare professionals can present for verification across jurisdictions.

**Benefits**:

* Simplified credentialing for multi-state practice  
* Real-time license status verification  
* Reduced administrative burden on healthcare systems  
* Enhanced patient safety through verified practitioner credentials.

### Financial services {#financial-services}

**Know-Your-Customer (KYC) optimization**  
Financial institutions can streamline customer onboarding by accepting VCs instead of requiring document collection.

**Benefits**:

* Faster account opening processes  
* Reduced compliance costs  
* Enhanced customer experience  
* Improved fraud prevention.

**Example implementation**: a customer uses government-issued digital identity credentials to open a bank account instantly, without submitting physical documents.

**Credit and lending**  
Verifiable financial credentials can enable portable credit histories and alternative lending models.

**Benefits**:

* Access to credit for underbanked populations  
* Portable credit history across financial institutions  
* Reduced risk through verified income and employment data  
* Faster loan approval processes.

### Supply chain and logistics {#supply-chain-and-logistics}

**Product authenticity**  
Manufacturers can create verifiable product credentials that prove authenticity and track provenance throughout the supply chain.

**Benefits**:

* Combat counterfeit goods  
* Enable consumer verification of product origins  
* Simplify regulatory compliance  
* Support sustainability and ethical sourcing claims.

**Example implementation**: a luxury goods manufacturer embeds VCs in its products, allowing consumers to verify authenticity.

**Shipping and customs**  
VCs can streamline international trade by providing trusted documentation for customs and border control.

**Benefits**:

* Faster customs clearance  
* Reduced paperwork and manual verification  
* Enhanced security through cryptographic proofs  
* Improved trade compliance.

### Employment and HR {#employment-and-hr}

**Professional qualifications**  
Professional organizations can issue VCs for licenses, certifications, and memberships that employers can instantly verify.

**Benefits**:

* Streamlined hiring processes  
* Reduced credential fraud  
* Portable professional qualifications  
* Automated compliance verification.

**Employee background checks**  
VCs can simplify background check processes by providing trusted, verified information about education, employment history, and certifications.

**Benefits**:

* Faster hiring decisions  
* Reduced the cost of background verification  
* Enhanced privacy for job candidates  
* Improved accuracy of verification data.

### Government and civic services {#government-and-civic-services}

**Digital citizenship**  
Governments can issue digital identity credentials that citizens use to access services, vote, and interact with public agencies.

**Benefits**:

* Improved access to government services  
* Reduced identity fraud in public programs  
* Enhanced privacy in civic participation  
* Streamlined service delivery.

**Immigration and travel**  
Verifiable travel documents and immigration credentials can simplify border control and international travel.

**Benefits**:

* Faster border processing  
* Enhanced security through cryptographic verification  
* Reduced document fraud  
* Improved traveler experience.

### Professional services {#professional-services}

**Legal credentials**  
Bar associations and legal organizations can issue VCs for attorney licensing and specializations.

**Benefits**:

* Instant verification of legal qualifications  
* Simplified bar admission across jurisdictions  
* Enhanced client confidence  
* Reduced regulatory compliance costs.

**Consulting and expertise verification**  
Professional consultants can maintain verifiable portfolios of their qualifications, project experience, and client testimonials.

**Benefits**:

* Enhanced credibility with potential clients  
* Simplified proposal and bidding processes  
* Portable professional reputation  
* Improved matching of expertise to opportunities.

### Technology and the internet of things (IoT) {#technology-and-the-internet-of-things-(iot)}

**Device identity and certification**  
IoT devices can hold VCs that prove their identity, security compliance, and operational parameters.

**Benefits**:

* Enhanced IoT security through device authentication  
* Simplified device lifecycle management  
* Trusted communication between devices  
* Compliance with security and safety standards.


**Software and API credentials**  
Software applications and APIs can use VCs for authentication and access control.

**Benefits**:

* Enhanced application security  
* Simplified service-to-service authentication  
* Portable API access across platforms  
* Improved audit trails for system access.

### Implementation considerations {#implementation-considerations}

When planning a use case implementation, consider:

**Technical requirements**

* Integration with existing systems  
* Performance and scalability needs  
* Security and privacy requirements  
* Compliance with industry regulations.

**Stakeholder alignment**

* Benefits for all participants in the ecosystem  
* Change management and adoption strategies  
* Governance and policy frameworks  
* Interoperability with other systems.


**Business model**

* Cost distribution among participants  
* Revenue models and value creation  
* Risk mitigation strategies  
* Success metrics and measurement.

### Recommended approach to getting started {#recommended-approach-to-getting-started}

To implement these use cases:

1. **Identify your scenario**: map your specific requirements to these proven use case patterns  
2. **Design the ecosystem**: clearly define issuers, holders, and verifiers in your implementation  
3. **Plan integration**: choose appropriate Identus components based on your technical and business needs  
4. **Build a pilot**: start with a limited scope to prove value and refine the approach  
5. **Scale systematically**: expand to full implementation based on pilot learnings and user feedback.

These use cases demonstrate that decentralized identity isn't just a technical improvement. It's a fundamental enhancement to how people and organizations interact in digital systems. The shift from institutional trust to cryptographic proof creates new possibilities for privacy, security, and user empowerment, potentially transforming entire industries.

For technical implementation guidance, explore the [Advanced explainers](/documentation/learn/advanced-explainers/) and tutorial content.

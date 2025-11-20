---
id: README
title: Developers
sidebar_position: 1
sidebar_class_name: hidden-sidebar-item
---

# Developer Documentation

Welcome to the Hyperledger Identus developer documentation. This comprehensive guide provides everything you need to build decentralized identity applications using the Identus platform.

## Getting Started

New to Identus? Start here to understand the fundamentals and get your development environment up and running.

### 🚀 [Quick Start Guide](./quick-start.md)

Follow our comprehensive quick start guide to:

- Deploy Issuer and Verifier Cloud Agents
- Set up Wallet SDKs (TypeScript, Swift, or Kotlin)
- Deploy and connect to a Mediator
- Create DIDs and credential schemas
- Issue your first verifiable credential
- Perform credential verification

**Perfect for:** Developers new to Identus or SSI who want to see the full flow in action.

## Developer Resources

### 📱 SDKs

Build wallet applications for web and mobile platforms using our comprehensive SDKs:

#### [TypeScript SDK](../../sdk-ts/docs/sdk/README.md)

Build browser and Node.js applications with full support for:
- DIDComm messaging
- Credential issuance and presentation
- AnonCreds, SD-JWT, and JWT credentials
- OpenID for Verifiable Credentials
- Backup and recovery

**Tutorials available:**
- [Storage with Pluto](../../sdk-ts/docs/pluto/README.md)
- [PRISM DID Management](../../sdk-ts/docs/prism/what-is-did-prism.md)
- [Connectionless & Out-of-Band](../../sdk-ts/docs/examples/connectionless/ConnectionlessOffer.md)
- [SDK Verification](../../sdk-ts/docs/examples/SDKVerification.md)
- [Migration Guides](/category/migration-guides)

#### [Swift SDK](https://hyperledger-identus.github.io/sdk-swift/documentation/edgeagentsdk/)

Native iOS SDK for building wallet applications with Swift. Includes sample applications and complete API reference.

#### [Kotlin Multiplatform SDK](https://hyperledger-identus.github.io/sdk-kmp/)

Cross-platform SDK for Android, iOS, and JVM applications. Share code across platforms while maintaining native performance.

### ☁️ Cloud Agent

The Cloud Agent provides REST API endpoints for enterprise SSI operations. It can act as an Issuer, Holder, or Verifier.

#### [Tutorials](../../cloud-agent/docs/docusaurus/index.md)

Step-by-step guides covering:

- **Connections** - Establish DIDComm connections between agents
- **DIDs** - Create, publish, update, and deactivate DIDs
- **Schemas** - Define and manage credential schemas
- **Credential Definitions** - Set up AnonCreds credential definitions
- **Credential Issuance** - Issue credentials via DIDComm and OID4VCI
- **Credential Verification** - Request and verify presentations
- **Multi-tenancy** - Manage multiple tenants and access control
- **Webhooks** - Subscribe to agent events
- **Secrets Management** - Secure key and secret storage

#### Cloud Agent Configuration

Essential guides for deploying and configuring the Cloud Agent:

- **[Building Blocks](./cloud-agent/building-blocks.md)** - Understanding Apollo, Castor, Pollux, and Mercury modules
- **[Authentication](./cloud-agent/authentication.md)** - API key and JWT authentication setup
- **[DID Management](./cloud-agent/did-management.md)** - Managing DIDs in the Cloud Agent
- **[Environment Variables](./cloud-agent/environment-variables.md)** - Complete configuration reference
- **[Secrets Storage](./cloud-agent/secrets-storage.md)** - Vault and database secret management
- **[VDR Configuration](./cloud-agent/vdr.md)** - Verifiable Data Registry setup
- **[Troubleshooting](./cloud-agent/troubleshooting&considerations.md)** - Common issues and considerations

## Core Concepts

Before diving deep, familiarize yourself with these essential concepts:

- **[Self-Sovereign Identity (SSI)](../learn/glossary.md#self-sovereign-identity)** - User-controlled digital identity
- **[Decentralized Identifiers (DIDs)](../learn/glossary.md#decentralized-identifier)** - Globally unique identifiers you control
- **[Verifiable Credentials (VCs)](../learn/glossary.md#verifiable-credential)** - Digital credentials you can prove are authentic
- **[DIDComm](../learn/glossary.md#didcomm)** - Secure, private messaging protocol for DIDs
- **[Trust Triangle](../learn/)** - The relationship between Issuers, Holders, and Verifiers

[Learn more about Identus concepts →](../learn/README.md)

## Architecture & Building Blocks

Identus provides modular building blocks that can be combined for various use cases:

| Building Block | Code Name | Purpose |
|----------------|-----------|---------|
| **Cryptography** | Apollo | Cryptographic primitives for data integrity and security |
| **DIDs** | Castor | Create, manage, and resolve decentralized identifiers |
| **Verifiable Credentials** | Pollux | Issue, manage, and verify credentials |
| **DIDComm** | Mercury | Secure peer-to-peer messaging protocols |

This modular architecture provides flexibility to customize solutions for specific requirements.

## Development Workflows

### Credential Issuance Flow

1. **Issuer** creates a credential schema
2. **Issuer** publishes a DID (for verification)
3. **Issuer** sends credential offer to **Holder**
4. **Holder** accepts and creates credential request
5. **Issuer** issues credential to **Holder**
6. **Holder** stores credential securely

### Credential Verification Flow

1. **Verifier** sends presentation request to **Holder**
2. **Holder** selects matching credentials
3. **Holder** creates and sends presentation to **Verifier**
4. **Verifier** validates credential authenticity and issuer
5. **Verifier** checks credential status (not revoked)

### Connection Establishment

Agents establish secure DIDComm connections using:
- **Direct invitations** - For known parties with existing connections
- **Out-of-Band (OOB) invitations** - QR codes or deep links for new connections
- **Mediator routing** - Message delivery for offline/mobile wallets

## Standards Support

Identus implements current W3C and DIF standards:

- ✅ W3C DID Core 1.0
- ✅ W3C Verifiable Credentials with JWT/SD-JWT
- ✅ DIDComm Messaging v2
- ✅ Hyperledger AnonCreds v1.0
- ✅ OpenID for Verifiable Credential Issuance (OID4VCI)
- ✅ OpenID for Verifiable Presentations (OID4VP)
- ✅ W3C Bitstring Status List v1.0
- ✅ DIF Presentation Exchange

[View complete specifications →](../reference/specifications.md)

## API Reference

- **[Cloud Agent API](../reference/Cloud%20Agent%20API/identus-cloud-agent-api-reference.info.mdx)** - Complete OpenAPI specification
- **[TypeScript SDK API](../../sdk-ts/docs/sdk/)** - Auto-generated API documentation
- **[Swift SDK API](https://hyperledger-identus.github.io/sdk-swift/documentation/edgeagentsdk/)**
- **[Kotlin SDK API](https://hyperledger-identus.github.io/sdk-kmp/)**

## Example Applications

All SDKs include sample applications demonstrating end-to-end flows:

- **TypeScript**: React demo at `sdk-ts/demos/next`
- **Swift**: Wallet Demo in `identus-edge-agent-sdk-swift/Sample`
- **Kotlin**: SampleApp in `identus-edge-agent-sdk-kmm`

## Community & Support

- **[GitHub Discussions](https://github.com/hyperledger/identus)** - Ask questions and share ideas
- **[Issue Tracker](https://github.com/hyperledger/identus-cloud-agent/issues)** - Report bugs and request features
- **[Discord](https://discord.gg/hyperledger)** - Real-time community chat
- **[Contributing Guidelines](../../CONTRIBUTING.md)** - How to contribute to Identus

## Additional Resources

- **[Architecture Decision Records](../reference/adrs/README.md)** - Understand key architectural decisions
- **[PRISM DID Specification](https://github.com/input-output-hk/prism-did-method-spec/)** - Deep dive into did:prism
- **[Security Policy](../../SECURITY.md)** - Security best practices and reporting

---

Ready to start building? Head to the [Quick Start Guide](./quick-start.md) to deploy your first Identus application!
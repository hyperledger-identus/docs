---
title: Project Catalyst VDR
sidebar_position: 1
description: Completion overview of the Project Catalyst–funded Verifiable Data Registry for Identus on Cardano.
---

# Verifiable Data Registry (VDR) for Identus on Cardano  
**Project Catalyst – Project Completion Overview**

This document summarizes the completion of the **Project Catalyst initiative** to design and deliver a **Verifiable Data Registry (VDR)** framework for **Identus on Cardano**.

The project resulted in a **fully open-source, modular, and production-ready VDR ecosystem**, including specifications, multiple implementations, and real Cardano integrations, all developed and maintained under **Hyperledger Identus**.

---

## What Is the VDR?

A **Verifiable Data Registry (VDR)** is a foundational component for decentralized trust systems.  
It enables data to be:

- Published in a verifiable way
- Resolved independently by any party
- Cryptographically verified
- Stored across different backends (blockchain, database, files)

In Identus, VDRs are used for:
- DID documents and operations
- Credential schemas and definitions
- Trust and identity metadata anchored on Cardano

This project establishes VDRs as a **generic, reusable abstraction**, not tied to a single implementation or storage layer.

---

## What Was Delivered

### 1. Generic VDR Specification

A technology-agnostic specification defining:
- VDR interfaces and responsibilities
- Driver families and versions
- URL-based resolution model
- Immutable and mutable data handling
- Cryptographic proof mechanisms

This specification allows **any storage backend** to implement a VDR consistently.

**Links**
- Repository & specification:  
  https://github.com/hyperledger-identus/vdr

---

### 2. Cardano / PRISM VDR Specification

A Cardano-specific VDR protocol describing:
- How verifiable data is anchored in Cardano transactions
- Metadata encoding and verification rules
- Compatibility with DID PRISM and Identus architecture

**Links**
- Specification:  
  https://github.com/hyperledger-identus/prism-vdr-driver/blob/main/prism-vdr-specification.md
- Repository:  
  https://github.com/hyperledger-identus/prism-vdr-driver

---

### 3. Generic VDR Driver (Kotlin)

A reference implementation of the generic VDR specification:
- Implemented in Kotlin
- Demonstrates how to build VDR drivers
- Used for validation, testing, and non-ledger backends

**Links**
- Implementation:  
  https://github.com/hyperledger-identus/vdr/tree/main/src

---

### 4. PRISM VDR Driver Implementations

To prove real-world applicability, multiple independent PRISM VDR drivers were implemented.

#### Scala PRISM VDR Driver
- Uses the Blockfrost API
- Supports file-based and MongoDB indexing
- Published as reusable artifacts

**Links**
- https://github.com/hyperledger-identus/prism-vdr-driver

---

#### NeoPrism VDR Driver (Rust)
- Rust-based Cardano indexing and resolution service
- Pluggable input feeds (Blockfrost, DBSync, custom)
- REST API for VDR resolution
- W3C-compliant DID resolution

**Links**
- https://github.com/hyperledger-identus/neoprism

---

#### Prism-Node + Cloud-Agent Integration

The production Identus stack:
- `prism-node` performs Cardano ledger operations
- `cloud-agent` exposes REST and DIDComm APIs
- Together they provide a complete Cardano-backed VDR service

**Links**
- Prism Node:  
  https://github.com/hyperledger-identus/prism-node
- Cloud Agent:  
  https://github.com/hyperledger-identus/cloud-agent

---

## Public Demonstration

A full end-to-end demonstration was recorded and published, showing:
- VDR architecture in practice
- Multiple driver implementations
- Cardano-anchored publishing and resolution flows

**Final demo video (start at 06:55)**  
https://www.youtube.com/watch?v=K1LhBHkOREE

---

## Why This Matters

This Catalyst project delivered **core infrastructure**, not a one-off feature:

- A reusable VDR standard for Identus
- Multiple interoperable implementations
- Cardano-native anchoring and resolution
- Open governance under Hyperledger
- A foundation for future identity and trust use cases

The VDR system is now a **shared building block** for decentralized trust on Cardano.

---

## Project Status

**Status:** ✅ Completed  
**All deliverables:** Open source and publicly verifiable  
**Governance:** Hyperledger Identus (Linux Foundation Decentralized Trust)

This document serves as **community-facing evidence of completion** for the full Project Catalyst initiative.

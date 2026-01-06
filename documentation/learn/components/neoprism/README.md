---
id: README
sidebar_position: 2
---

# NeoPRISM

## Overview

[NeoPRISM](https://github.com/hyperledger-identus/neoprism) is an open-source alternative implementation of a PRISM Node for managing PRISM [Decentralized Identifiers (DIDs)](/home/concepts/glossary#decentralized-identifier) anchored on the Cardano blockchain. Written in Rust, NeoPRISM provides a lightweight, resource-efficient solution for DID resolution, indexing, and operation submission capabilities for the `did:prism` method.

As part of the Identus Community Projects ecosystem, NeoPRISM offers an alternative to the legacy PRISM Node, focusing on ease of deployment, efficient resource usage, and reliable performance. It integrates seamlessly with the [Cloud Agent](/home/concepts/glossary#cloud-agent) as a configurable DID node backend.

## Key Features

NeoPRISM provides the following capabilities:

- **Multiple Deployment Modes**: Supports Indexer, Submitter, and Standalone modes for flexible deployment scenarios
- **Cardano Integration**: Works with Oura and DBSync data sources for blockchain synchronization
- **W3C-Compliant**: Provides Universal Resolver-compatible HTTP endpoints for DID resolution
- **Operation Publishing**: Submits DID operations to the Cardano blockchain
- **VDR Support**: Implements [Verifiable Data Registry](/home/concepts/glossary#verifiable-data-registry) functionality with arbitrary data storage
- **Resource Efficient**: Rust implementation optimized for performance and low resource consumption
- **Docker Ready**: Official Docker images with multi-architecture support (x86_64, arm64)
- **Database Flexibility**: Supports both PostgreSQL and SQLite backends

## NeoPRISM Deployment mode

NeoPRISM supports multiple deployment modes to accommodate different architectural needs:

#### Indexer Mode

The Indexer mode synchronizes with the Cardano blockchain, processes DID operations from blocks, and maintains the current state of DIDs in the database. This mode only performs read operations from the blockchain.

#### Submitter Mode

The Submitter mode handles the submission of signed DID operations to the Cardano blockchain. It manages the transaction lifecycle and tracks operation status until confirmation.

#### Standalone Mode

The Standalone mode combines both Indexer and Submitter functionality into a single service, providing complete DID management capabilities.

#### Dev Mode

The Dev mode provides a simplified setup for local development and testing, using an in-memory SQLite database and an in-memory blockchain with minimal configuration.

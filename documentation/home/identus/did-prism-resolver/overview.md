# Overview

Decentralized Identifiers ([DIDs](/home/concepts/glossary#did)) are a key component of decentralized identity systems, enabling users to control their digital identities without relying on a centralized authority. 
The [DID PRISM method specification](https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md) specifies a DID method that conforms to the [W3C DID specification](https://www.w3.org/TR/did-core/).
DID PRISM Resolution refers to the process of retrieving the corresponding DID Document for a given PRISM DID.
This document contains the public keys, authentication methods, service endpoints, and other metadata required to interact with the subject identified by the DID.

## Cloud Agent and Prism Node
The [Prism-Node](/home/identus/prism-node/overview) is a microservice that exposes gRPC endpoint and implements DID PRISM operations, allowing users to create, update, deactivate, and resolve DIDs in a secure and privacy-preserving manner.
The DID PRISM resolver is a component that interacts with the Prism-Node to retrieve the current state of a DID and its associated DID Document.
The Cloud Agent can serve as a DID PRISM resolver, allowing users to resolve DIDs and retrieve their associated DID Documents.

## Universal Resolver
The DID PRISM can also be resolved via the Universal Resolver, which is a service that provides a unified interface for resolving DIDs across different DID methods.

## SDK

This documentation provides an in-depth guide to the DID PRISM resolution process, including its architecture, resolution flow, components, and how it integrates with decentralized identity ecosystems. 
Whether you're building identity-enabled applications or integrating DID support into your systems, this overview will help you understand how DID PRISM resolves DIDs and retrieves trusted identity data.

# DID PRISM Resolver

## Cloud Agent and Prism Node
The Cloud Agent together with the Prism Node provides a comprehensive solution for managing and resolving DIDs. The Prism Node is a microservice that exposes gRPC endpoints and implements DID PRISM operations, allowing users to create, update, deactivate, and resolve DIDs in a secure and privacy-preserving manner.
This solution was designed for the enterprise use case and requires setup of the Cardano stack together with the Prism Node.

## Universal Resolver
The Universal Resolver is a service that provides a unified interface for resolving DIDs across different DID methods. 
It allows users to resolve DIDs from various DID methods, including PRISM, and retrieve their associated DID Documents.
The DID PRISM has been integrated into the Universal Resolver, enabling users to resolve PRISM DIDs using the same interface as other DID methods.

According to the DID PRISM specification, the Universal Resolver resolves PRISM DIDs published on the Cardano mainnet.

The Universal Resolver endpoint for PRISM DIDs is:
//TODO

## SDKs
Each SDK provides a way to resolve DIDs and retrieve their associated DID Documents. The SDKs are designed to be easy to use and integrate into existing applications, allowing developers to quickly add DID resolution capabilities to their projects.
Each SDK implement the DIDResolver interface via URL. In order to configure the DIDResolver the corresponding endpoint should be set in the SDK configuration.

## Identus Community Project
### Prism-VDR
The [prism-vdr](https://github.com/FabioPinheiro/prism-vdr) is alternative PRISM DID indexer that hosts all the PRISM DIDs and their associated DID Documents in the GitHub repository.
The PRISM-VDR supports the following Cardano networks:
- mainnet
- preprod
- preview

### Blocktrust Node
The Blocktrust Node is a community alternative to the Prism Node, providing similar functionality for resolving DIDs and managing DID Documents.
The publicly available Blocktrust Node can be used to resolve PRISM DIDs and retrieve their associated DID Documents.

The list of the Blocktrust endpoints for the PRISM DIDs is:
//TODO

### Neoprism
The [Neoprism](https://github.com/patextreme/neoprism) is a community alternative to the Prism Node, providing similar functionality for resolving DIDs and managing DID Documents.
The publicly available Neoprism can be used to resolve PRISM DIDs and retrieve their associated DID Documents.

The instance of the Neoprism for the PRISM DIDs published in the Cardano mainnet is:
https://neoprism.patlo.dev/resolver
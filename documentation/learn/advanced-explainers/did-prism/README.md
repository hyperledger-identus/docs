# DID PRISM Resolver

The did:prism method has multiple resolver implementations in different programming languages, that are totally independent.

Officially according to the specs the `did:prism` method only existed in the Cardano `mainnet` network.
But for testing purposes, many of the users are using the Cardano `preprod` network.

## Cloud Agent and Prism Node
The Cloud Agent together with the Prism Node provides a comprehensive solution for managing and resolving DIDs. The Prism Node is a microservice that exposes gRPC endpoints and implements `did:prism` events, allowing users to create, update, deactivate, and resolve DIDs in a secure and privacy-preserving manner.
This solution is designed for the enterprise use case and requires setting up the full Cardano stack together with the Prism Node.

## Universal Resolver
The Universal Resolver is a service that provides a unified interface for resolving DIDs across different DID methods. 
It allows users to resolve DIDs from various DID methods, including PRISM, and retrieve their associated DID Documents.
The `did:prism` has been integrated into the Universal Resolver, enabling users to resolve PRISM DIDs using the same interface as other DID methods.

According to the `did:prism` specification, the Universal Resolver resolves PRISM DIDs published on the Cardano mainnet.

The Universal Resolver endpoint for PRISM DIDs is:
https://dev.uniresolver.io/

## SDKs
Each SDK provides a way to resolve DIDs and retrieve their associated DID Documents. The SDKs are designed to be easy to use and integrate into existing applications, allowing developers to quickly add DID resolution capabilities to their projects.
Each SDK implements the `DIDResolver` interface via a URL. In order to configure the DIDResolver the corresponding endpoint should be set in the SDK configuration.

## Identus Community Project

### Blocktrust Node
The Blocktrust Node is a community alternative to the Prism Node, providing similar functionality for resolving DIDs and managing DID Documents.
The publicly available Blocktrust Node can be used to resolve PRISM DIDs and retrieve their associated DID Documents.

The list of the Blocktrust endpoints for the PRISM DIDs is:
[https://statistics.blocktrust.dev/resolve](https://statistics.blocktrust.dev/resolve)

### NeoPRISM
[NeoPRISM](https://github.com/hyperledger-identus/neoprism) is a community alternative to the Prism Node, providing similar functionality for resolving DIDs and managing DID Documents. Written in Rust, NeoPRISM offers a lightweight, resource-efficient solution that can also be configured as a DID node backend for the Cloud Agent.

The publicly available NeoPRISM can be used to resolve PRISM DIDs and retrieve their associated DID Documents.

The instance of NeoPRISM for the PRISM DIDs published in the Cardano mainnet is:
[https://neoprism.patlo.dev/resolver](https://neoprism.patlo.dev/resolver)

For more details on integrating NeoPRISM with the Cloud Agent, see the [NeoPRISM documentation](/docs/documentation/learn/advanced-explainers/neoprism/).

### PRISM Indexer

The PRISM Indexer is a community project that uses the Blockfrost API to fetch all relative transactions and metadata from the Cardano Blockchain relative to `did:prism` protocol.
It them passes the method data into PRISM events and indexes them by DID.

After having the sequence of events relative to each `did:prism` the indexer is capable of validate the PRISM Events and build the corresponding DID Document.
This validation can also be performed locally on the end-user's device. Requiring zero trust on Indexer since from the PRISM events you can verify the authenticity from the SSI itself.

The project is distributed as a Docker image and available in [fmgp's Docker Hub](https://hub.docker.com/repository/docker/fmgp/prism-indexer/general).
This image store the status off all DIDs in the file system. But the image is light enough that is capable of running constantly in GitHub actions.

The code is also distributed as a library in [Maven Central repository](https://mvnrepository.com/repos/central) and it's capable to run on the JVM and JS Environments.

#### Prism-VDR
The [prism-vdr](https://github.com/FabioPinheiro/prism-vdr) is alternative PRISM DID indexer that stores all the PRISM DIDs events and their associated DID Documents in the GitHub repository.
The PRISM-VDR supports the following Cardano networks:
- [`mainnet` network](https://github.com/FabioPinheiro/prism-vdr/tree/main/mainnet/diddoc)
- [`preprod` network](https://github.com/FabioPinheiro/prism-vdr/tree/main/preprod/diddoc)

#### Blockfrost & PRISM 

Blockfrost is also constantly running the PRISM Indexer for all the Cardano networks and uploading the status to a [Blockfrost's GitHub repository](https://github.com/blockfrost/prism-vdr):
- [`mainnet` network](https://github.com/blockfrost/prism-vdr/tree/main/mainnet/diddoc)
- [`preprod` network](https://github.com/blockfrost/prism-vdr/tree/main/preprod/diddoc)
- [`preview` network](https://github.com/blockfrost/prism-vdr/tree/main/preview/diddoc)

Blockfrost is also developing a experimental API for resolving and managing the PRISM DIDs.

#### scala-did

Its a tool using the same library as PRISM Indexer but running the in JS Environment.
Its fetchs the all PRISM events from one DID from the Prism-VDR Github repos and resolves into a DID Document.

A instance of this tool can be found in [did.fmgp.app](https://did.fmgp.app/#/resolver/did:prism:00592a141a4c2bcb7a6aa691750511e2e9b048231820125e15ab70b12a210aae).
Its capable of resolving some DID methods including the `did:prism`.

## Related Tutorials

- [Create DIDs](/cloud-agent/docs/docusaurus/dids/create) - Create Cloud Agent-managed DIDs
- [Publish DIDs](/cloud-agent/docs/docusaurus/dids/publish) - Publish DIDs to the ledger
- [Update DIDs](/cloud-agent/docs/docusaurus/dids/update) - Update existing DIDs
- [Deactivate DIDs](/cloud-agent/docs/docusaurus/dids/deactivate) - Deactivate DIDs when no longer needed

---
title: DID Resolver
---
# DID PRISM Resolver in SDKs

In order to resolve the DID PRISM in the SDKs, the corresponding DIDResolver must be configured in the application.
The DID resolver URL should be set in the SDK configuration to point to the appropriate resolver endpoint.

## SDK-TS

The SDK-TS provides a way to resolve PRISM DIDs and retrieve their associated DID Documents. 
The resolver that can be configured with the corresponding URL is the [PrismShortFormDIDResolver](https://github.com/hyperledger-identus/sdk-ts/blob/main/integration-tests/e2e-tests/src/resolvers/PrismShortFormDIDResolver.ts).

## SDK-Swift
The SDK-Swift provides a way to resolve PRISM DIDs and retrieve their associated DID Documents.
The resolver that can be configured with the corresponding URL is the [PrismShortFormResolver](https://github.com/hyperledger-identus/sdk-swift/blob/main/E2E/Tests/Source/Resolvers/PrismShortFormResolver.swift)

## SDK-KMP

SDK-KMP cannot resolve the short form DIDs, but it can resolve the long form DIDs.
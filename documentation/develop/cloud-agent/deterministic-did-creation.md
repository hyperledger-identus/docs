# Deterministic PRISM DID Creation

Deterministic PRISM DID creation enables generating the same DID consistently from a BIP-39 mnemonic phrase across all Identus platform components. This allows stateless DID recovery and cross-platform interoperability without requiring backup of DID state.

## Overview

Given a BIP-39 mnemonic and optional passphrase, the same DID is produced on every platform (Cloud Agent, TypeScript SDK, Kotlin SDK, Swift SDK) by following a deterministic process:

1. **Derive seed** from the mnemonic using BIP-39 PBKDF2
2. **Derive master key** via HD key derivation at a fixed path
3. **Serialize** the public key as `CompressedECKeyData` in protobuf
4. **Compute DID** by hashing the serialized `AtalaOperation`

## Key Derivation

The HD derivation path follows the structure:

```
m / 29' / 29' / didIndex' / keyUsage' / keyIndex'
```

Where:
- `29` (0x1D) is the wallet purpose and DID method identifier
- `didIndex` identifies which DID to derive (default: 0)
- `keyUsage` maps to the key purpose (Master=1, Issuing=2, KeyAgreement=3, Authentication=4, Revocation=5, CapabilityInvocation=6, CapabilityDelegation=7, VDR=8)
- `keyIndex` is the key index within a given purpose (default: 0)
- All path components use hardened derivation (`'`)

For a deterministic DID with only a master key:

```
m/29'/29'/0'/1'/0'
```

## Normalization Rules

To ensure determinism across platforms, the following rules are enforced:

### Master Key ID

The master key's `id` field in the protobuf `PublicKey` message is always `"master"` (no index suffix). Other key types continue to use indexed IDs (e.g., `"authentication0"`, `"issuing0"`).

### Compressed Key Encoding

All secp256k1 public keys use `CompressedECKeyData` (33-byte compressed format) instead of `ECKeyData` (uncompressed x, y coordinates). This ensures identical protobuf serialization across platforms.

### Protobuf Structure

The `AtalaOperation` contains a `CreateDIDOperation` with a single `PublicKey`:

```protobuf
AtalaOperation {
  createDid: CreateDIDOperation {
    didData: DIDCreationData {
      publicKeys: [
        PublicKey {
          id: "master"
          usage: MASTER_KEY
          compressedEcKeyData: CompressedECKeyData {
            curve: "secp256k1"
            data: <33-byte compressed public key>
          }
        }
      ]
    }
  }
}
```

The DID is computed as:
- **Method-specific ID**: `SHA-256(serialized AtalaOperation)` as hex
- **Long-form DID**: `did:prism:<hex-hash>:<base64url-encoded-operation>`

## Test Vector

Use this test vector to verify your implementation:

| Field | Value |
|-------|-------|
| **Mnemonic** | `vacuum only object oxygen sell engine firm fiscal shiver finish village clock limit unable reject lawn hard adapt plunge between lawsuit stuff educate knock` |
| **Passphrase** | *(empty string)* |
| **Seed** | `3b32a5049f2b4e3af31ec5c1ae75fada1ad2eb8be5accf56ada343ad89eeb083208e538b3b97836e3bd7048c131421bf5bea9e3a1d25812a2d831e2bab89e058` |
| **Path** | `m/29'/29'/0'/1'/0'` |
| **Private Key** | `158bf13202ccafe551b5b4e60ed516efe0fe190e5c1421c3387f0f9fef2a6111` |
| **Compressed Public Key** | `023f7c75c9e5fba08fea1640d6faa3f8dc0151261d2b56026d46ddcbe1fc5a5bbb` |

## Backward Compatibility

Existing DIDs created before this normalization continue to work:

- DID resolution handles both `ECKeyData` (uncompressed) and `CompressedECKeyData` (compressed) formats
- Old master key IDs like `"master0"` or `"master-0"` are still parseable when resolving existing DIDs
- Only **new** DID creation uses the normalized format

## SDK Usage

### TypeScript

```typescript
const did = await agent.createDeterministicPrismDID(mnemonicWords);
// With options:
const did = await agent.createDeterministicPrismDID(mnemonicWords, "passphrase", 0);
```

### Kotlin

```kotlin
// Uses the standard createNewPrismDID with mnemonic-derived seed
// Master key ID is automatically normalized to "master"
```

### Swift

```swift
let did = try await agent.createDeterministicPrismDID(
    mnemonic: mnemonicWords,
    passphrase: "",
    didIndex: 0
)
```

## Related

- [DID Management](./did-management.md) - Cloud Agent DID management overview
- [DID PRISM Resolver](/documentation/learn/advanced-explainers/did-prism/) - PRISM DID resolution
- [Create DIDs](/cloud-agent/docs/docusaurus/dids/create) - Cloud Agent DID creation

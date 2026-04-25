---
title: Deterministic PRISM DID Creation
sidebar_position: 2
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Deterministic PRISM DID Creation

This guide documents deterministic PRISM DID creation from a mnemonic phrase, based on the [Deterministic PRISM DID Generation Proposal](https://github.com/input-output-hk/prism-did-method-spec/blob/main/extensions/deterministic-prism-did-generation-proposal.md) and the existing [HD key derivation ADR](/adrs/decisions/2023-05-16-hierarchical-deterministic-key-generation-algorithm).

## Why deterministic DID creation

With deterministic derivation, the same mnemonic + passphrase + DID index always produce the same PRISM DID. This enables stateless recovery and reproducible identity creation across compatible components.

## Mnemonic to DID flow

1. Convert BIP-39 mnemonic (+ optional passphrase) to seed bytes.
2. Derive the master key with path `m/29'/29'/did-index'/key-usage'/key-index'`.
3. For deterministic DID creation, use the master key path `m/29'/29'/did-index'/1'/0'` (`key-usage = 1` for the master key).
4. Build the PRISM create operation with a single `master` secp256k1 key encoded as `CompressedECKeyData`.
5. Hash/canonicalize the create operation according to DID:PRISM rules to obtain the canonical DID.

## HD derivation path format

```
m/29'/29'/did-index'/key-usage'/key-index'
```

- `29'` (purpose): Identus identity wallet constant (`0x1D`).
- `29'` (method): PRISM method constant.
- `did-index'`: deterministic DID slot (`0`, `1`, `2`, ...).
- `key-usage'`: key purpose (`1` = master, `8` = VDR, etc.).
- `key-index'`: key number inside the selected usage bucket.

## Test vectors and examples

Reference mnemonic (24 words, empty passphrase):

```json
[
  "vacuum","only","object","oxygen","sell","engine",
  "firm","fiscal","shiver","finish","village","clock",
  "limit","unable","reject","lawn","hard","adapt",
  "plunge","between","lawsuit","stuff","educate","knock"
]
```

Seed (hex):

```text
3b32a5049f2b4e3af31ec5c1ae75fada1ad2eb8be5accf56ada343ad89eeb083208e538b3b97836e3bd7048c131421bf5bea9e3a1d25812a2d831e2bab89e058
```

Known deterministic outputs:

- `m/29'/29'/0'/1'/0'` -> `did:prism:35fbaf7f8a68e927feb89dc897f4edc24ca8d7510261829e4834d931e947e6ca`
- `m/29'/29'/1'/1'/0'` -> `did:prism:c25c6ca7f4062cbdb5f770cbc88de6c679a0efd4674dbeee76d78b91cd82daac`
- `m/29'/29'/2'/1'/0'` -> `did:prism:fe521d12e470aef305cd2e27e1b940c5492f3595452019cb2f4c9ca9835c346e`

Known compressed master public key for `m/29'/29'/0'/1'/0'`:

```text
023f7c75c9e5fba08fea1640d6faa3f8dc0151261d2b56026d46ddcbe1fc5a5bbb
```

## Code snippets

### Cloud Agent API

For Cloud Agent managed wallets, deterministic behavior depends on using the same wallet seed/mnemonic material and DID index progression.

```bash
# 1) Register wallet with deterministic seed material
curl --location --request POST 'http://localhost:8000/cloud-agent/wallets' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "seed": "<secure-seed-value>",
    "name": "deterministic-wallet"
  }'

# 2) Create managed PRISM DID
curl --location --request POST 'http://localhost:8000/cloud-agent/did-registrar/dids' \
  --header 'Accept: application/json' \
  --header 'Content-Type: application/json' \
  --data-raw '{
    "documentTemplate": {
      "publicKeys": [],
      "services": []
    }
  }'
```

### SDK examples (TS, KMP)

<Tabs>
  <TabItem value="ts" label="SDK-TS">

```typescript
const did = await agent.createDeterministicPrismDID(
  mnemonicWords,
  "",   // passphrase (optional)
  0     // didIndex
);
console.log(did.toString());
```

  </TabItem>
  <TabItem value="kmp" label="SDK-KMP">

```kotlin
// Derive master key at m/29'/29'/0'/1'/0'
val masterPrivateKey = apollo.createPrivateKey(
    mapOf(
        TypeKey().property to "EC",
        CurveKey().property to Curve.SECP256K1.value,
        SeedKey().property to seedBytes.base64UrlEncoded,
        DerivationPathKey().property to "m/29'/29'/0'/1'/0'"
    )
)

val did = CastorShared.createPrismDID(
    apollo = apollo,
    keys = listOf(KeyPurpose.MASTER to masterPrivateKey.publicKey()),
    services = null
)
```

  </TabItem>
</Tabs>

## Notes

- Use `CompressedECKeyData` for secp256k1 master key encoding to preserve deterministic compatibility.
- Keep the mnemonic and passphrase secret; they are sufficient to reconstruct deterministic keys.
- For managed deployments, store/retrieve seed material through secure secret storage and wallet management controls.

## References

- [Deterministic PRISM DID Generation Proposal](https://github.com/input-output-hk/prism-did-method-spec/blob/main/extensions/deterministic-prism-did-generation-proposal.md)
- [Hierarchical deterministic key generation algorithm ADR](/adrs/decisions/2023-05-16-hierarchical-deterministic-key-generation-algorithm)
- [Cloud Agent DID management](/documentation/develop/cloud-agent/did-management)

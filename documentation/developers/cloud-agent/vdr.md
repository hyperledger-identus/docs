# VDR Interface

## Overview

VDR is an interface for performing CRUD and verification operations on a generic data storage driver.
The specification is available [here](https://github.com/hyperledger-identus/vdr),
along with a reference implementation provided as a library.
The interface defines simple create, read, update, delete, and verify operations, delegating
their execution to an underlying driver. Driver is an actual implementation of a data storage mechanism.

## HTTP Binding

Although the VDR implementation is available as a library, it is also integrated into the Cloud Agent
to expose its functionality via HTTP, supporting use cases where direct library integration is not feasible.

The Cloud Agent exposes the VDR functionality through a RESTful style API,
providing an interface analogous to direct method calls.

__Example__

| Operation | HTTP Endpoint |
|-|-|
| `create(data, options)`      | `POST /vdr/entries?drid=...`  |
| `read(url, options)`         | `GET /vdr/entries?url=...`    |
| `update(url, data, options)` | `PUT /vdr/entries?url=...`    |
| `delete(url, options)`       | `DELETE /vdr/entries?url=...` |

## Selecting VDR Drivers

The driver is a key component of VDR, providing the actual implementation for the storage backend.
The cloud agent acts as a proxy, supporting multiple drivers and allowing users to choose the one that best fits their needs.
To select the appropriate driver, specify the following parameters when creating a VDR entry.

| Parameters | Description |
|-|-|
| `drid` | Driver ID      |
| `drf`  | Driver family  |
| `drv`  | Driver version |

For a full range of parameters and driver options, please refer to the [VDR specification](https://github.com/hyperledger-identus/vdr).

## Available Drivers

The Cloud Agent supports multiple VDR drivers for different use cases:

| Driver | ID | Family | Version | Description | Use Case |
|--------|----|----|---------|-------------|----------|
| In-memory | `memory` | `memory` | `0.1.0` | Ephemeral in-memory storage | Testing, non-persistent data |
| Database | `database` | `database` | `0.1.0` | Local database storage | Development, testing |
| PRISM | `PRISMDriverInMemory` | `PRISM` | `1.0` | Cardano blockchain storage | Production, public verification |

### Driver Configuration

**Memory Driver**: Enable with `VDR_MEMORY_DRIVER_ENABLED=true`. No additional configuration required.

**Database Driver**: Enable with `VDR_DATABASE_DRIVER_ENABLED=true`. Uses the Cloud Agent's existing database configuration.

**PRISM Driver**: See the [PRISM Driver](#prism-driver) section below.

For all VDR environment variables, see the [Environment Variables](./environment-variables.md) documentation.

**Choosing a driver**:
- **Development/Testing**: Use `memory` or `database` drivers for fast iteration without blockchain overhead
- **Production**: Use `PRISM` driver for decentralized, permanent, publicly verifiable storage

## PRISM Driver

### Overview

The PRISM driver stores data on the Cardano blockchain, providing decentralized, permanent, and verifiable storage. Unlike the in-memory and database drivers which store data locally for testing, the PRISM driver offers blockchain-backed guarantees suitable for production deployments.

**Key capabilities**:
- Data stored on Cardano blockchain, not controlled by any single entity
- Permanent, immutable storage that persists beyond agent lifecycle
- Publicly verifiable by anyone with blockchain access
- Designed for production use cases requiring auditability

**Best suited for**:
- Production deployments requiring public, decentralized verification
- Credential status lists that must remain accessible indefinitely
- Use cases with regulatory requirements for tamper-proof storage

**For development**: Use the in-memory or database drivers for faster iteration without blockchain transaction costs and delays.

### Prerequisites

Before enabling the PRISM driver, ensure you have:

1. **Active PRISM DID**: A `did:prism:` identifier with an active VDR key
2. **Cardano Wallet**: A wallet mnemonic phrase (24 words) for blockchain transactions
3. **VDR Private Key**: A Secp256k1 private key (in hexadecimal format) of an active VDR key of the DID
4. **Blockfrost Access**: Either:
   - A Blockfrost API key for public networks (mainnet, preprod, preview), OR
   - A private Blockfrost instance URL and protocol magic number
5. **State Directory**: A filesystem directory with read/write permissions for the indexed VDR state

### Configuration

Configure the PRISM driver using these environment variables:

#### Core Configuration

| Variable | Required? | Description | Example/Default |
|----------|-----------|-------------|-----------------|
| `VDR_PRISM_DRIVER_ENABLED` | ✅ Yes | Enable the PRISM VDR driver | `true` |
| `VDR_PRISM_DRIVER_DID_PRISM` | ✅ Yes | DID that owns the data (must have active VDR key) | `did:prism:abc123...` |
| `VDR_PRISM_DRIVER_VDR_PRIVATE_KEY` | ✅ Yes | VDR private key in hexadecimal format | `a1b2c3d4e5f6...` |
| `VDR_PRISM_DRIVER_WALLET_MNEMONIC` | ✅ Yes | Wallet mnemonic phrase (space-separated, 24 words) | `word1 word2 ... word24` |
| `VDR_PRISM_DRIVER_VDR_STATE_DIR` | ✅ Yes | Directory path for indexer state storage | `/var/lib/cloud-agent/vdr-state` |

#### Network Configuration (choose ONE)

| Variable | Required? | Description | Example/Default |
|----------|-----------|-------------|-----------------|
| `VDR_PRISM_DRIVER_BLOCKFROST_API_KEY` | Option A | Your Blockfrost API key (mainnet/preprod/preview) | `mainnetABC123...` |
| `VDR_PRISM_DRIVER_PRIVATE_NETWORK_URL` | Option B | URL of private Blockfrost instance | `http://localhost:18082` |
| `VDR_PRISM_DRIVER_PRIVATE_NETWORK_PROTOCOL_MAGIC` | Option B | Protocol magic number for private network | `42` |

**⚠️ Network Configuration**: You MUST configure exactly ONE network option:
- **Option A** (Public Blockfrost): Set `VDR_PRISM_DRIVER_BLOCKFROST_API_KEY` only
- **Option B** (Private Network): Set both `VDR_PRISM_DRIVER_PRIVATE_NETWORK_URL` and `VDR_PRISM_DRIVER_PRIVATE_NETWORK_PROTOCOL_MAGIC`

The Cloud Agent will reject configurations that set both options simultaneously.

#### Optional Configuration

| Variable | Required? | Description | Example/Default |
|----------|-----------|-------------|-----------------|
| `VDR_PRISM_DRIVER_INDEX_INTERVAL_SECOND` | No | Blockchain polling interval (seconds) | `60` (default) |

### Configuration Examples

#### Example 1: Public Blockfrost (Mainnet)

This example shows a production configuration using Blockfrost's mainnet service:

```bash
export VDR_PRISM_DRIVER_ENABLED=true
export VDR_PRISM_DRIVER_BLOCKFROST_API_KEY="mainnetABC123YourKeyHere"
export VDR_PRISM_DRIVER_DID_PRISM="did:prism:4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b"
export VDR_PRISM_DRIVER_VDR_PRIVATE_KEY="a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
export VDR_PRISM_DRIVER_WALLET_MNEMONIC="word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15 word16 word17 word18 word19 word20 word21 word22 word23 word24"
export VDR_PRISM_DRIVER_VDR_STATE_DIR="/var/lib/cloud-agent/vdr-state"
export VDR_PRISM_DRIVER_INDEX_INTERVAL_SECOND=60
```

#### Example 2: Private Network

This example shows a configuration for a private or local Cardano network:

```bash
export VDR_PRISM_DRIVER_ENABLED=true
export VDR_PRISM_DRIVER_PRIVATE_NETWORK_URL="http://localhost:18082"
export VDR_PRISM_DRIVER_PRIVATE_NETWORK_PROTOCOL_MAGIC=42
export VDR_PRISM_DRIVER_DID_PRISM="did:prism:4a5b6c7d8e9f0a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b"
export VDR_PRISM_DRIVER_VDR_PRIVATE_KEY="a1b2c3d4e5f6a7b8c9d0e1f2a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1b2"
export VDR_PRISM_DRIVER_WALLET_MNEMONIC="word1 word2 word3 word4 word5 word6 word7 word8 word9 word10 word11 word12 word13 word14 word15 word16 word17 word18 word19 word20 word21 word22 word23 word24"
export VDR_PRISM_DRIVER_VDR_STATE_DIR="/var/lib/cloud-agent/vdr-state"
```

### Driver Variants

**⚠️ Cloud Agent Users**: The Cloud Agent is configured to use `PRISMDriverInMemory` ONLY. This is the sole PRISM driver implementation available via the Cloud Agent's HTTP API.

The underlying [PRISM VDR driver library](https://github.com/hyperledger-identus/prism-vdr-driver) provides three implementations with different storage backends:

#### 1. PRISMDriverInMemory ✅ Available in Cloud Agent

- **Storage**: In-memory state with chunk file persistence
- **Use case**: Standard Cloud Agent deployment, balances performance with persistence
- **Configuration**: Via environment variables documented in the [Configuration](#configuration) section above
- **State management**: Loads blockchain state from chunk files in the configured state directory
- **Source code**: [PRISMDriverInMemory.scala](https://github.com/hyperledger-identus/prism-vdr-driver/blob/main/src/main/scala/hyperledger/identus/vdr/prism/PRISMDriverInMemory.scala), [PrismDriver.scala](https://github.com/hyperledger-identus/prism-vdr-driver/blob/main/src/main/scala/hyperledger/identus/vdr/prism/PrismDriver.scala)

#### 2. PRISMDriverMongoDB ❌ Library Integration Only

- **Storage**: MongoDB (read-only)
- **Use case**: Applications requiring shared, scalable state storage across multiple instances
- **Requires**: Direct Scala library integration, external MongoDB setup and indexing
- **NOT available**: Cannot be used via Cloud Agent's HTTP API
- **Source code**: [PRISMDriverMongoDB.scala](https://github.com/hyperledger-identus/prism-vdr-driver/blob/main/src/main/scala/hyperledger/identus/vdr/prism/PRISMDriverMongoDB.scala)

#### 3. PRISMDriverMongoDBWithIndexer ❌ Library Integration Only

- **Storage**: MongoDB with built-in indexing capability
- **Use case**: Applications that need to manage their own blockchain indexing process
- **Requires**: Direct Scala library integration, external MongoDB setup
- **NOT available**: Cannot be used via Cloud Agent's HTTP API
- **Source code**: [PRISMDriverMongoDBWithIndexer.scala](https://github.com/hyperledger-identus/prism-vdr-driver/blob/main/src/main/scala/hyperledger/identus/vdr/prism/PRISMDriverMongoDBWithIndexer.scala)

#### Comparison Table

| Implementation | Storage Backend | Cloud Agent | Library Integration |
|----------------|-----------------|-------------|---------------------|
| PRISMDriverInMemory | In-memory + chunk files | ✅ Available | ✅ Available |
| PRISMDriverMongoDB | MongoDB (read-only) | ❌ Not available | ✅ Available |
| PRISMDriverMongoDBWithIndexer | MongoDB + indexing | ❌ Not available | ✅ Available |

All implementations share the same protocol parameters:
- **Driver Family**: `PRISM`
- **Driver Version**: `1.0`

**For Cloud Agent users**: Use the environment variables documented above. The `PRISMDriverInMemory` implementation is automatically configured when you enable the PRISM driver.

**For library integrators**: If you need MongoDB-backed storage, you must integrate the PRISM VDR driver library directly into your Scala application. Refer to the driver source code and library documentation for integration details.

### Important Considerations

**Security**: Store your wallet mnemonic and VDR private key securely. Never commit these values to version control or expose them in logs. Consider using secret management solutions like HashiCorp Vault in production environments.

**State Directory**: Ensure the state directory has appropriate permissions and sufficient disk space. The indexer will create required subdirectories automatically on first run.

**Blockchain Data Permanence**: Data stored on the blockchain is permanent and cannot be truly deleted. The VDR `DELETE` operation marks entries as deactivated but does not remove them from the blockchain. Plan your data lifecycle accordingly and avoid storing sensitive information that may need to be removed.

**Transaction Costs**: Writing data to the Cardano blockchain incurs transaction fees paid from your configured wallet. Ensure the wallet has sufficient ADA balance for your expected operations.

**Indexing Delay**: Changes to the blockchain may take time to be reflected in the driver's state, depending on the configured polling interval and blockchain confirmation times. Consider these delays when designing time-sensitive workflows.

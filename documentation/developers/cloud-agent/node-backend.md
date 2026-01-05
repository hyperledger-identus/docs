---
title: Node Backend
---

# Node Backend

The [Cloud Agent](/home/concepts/glossary#cloud-agent) uses node backends to manage PRISM DIDs anchored on the Cardano blockchain. These backends handle DID resolution, blockchain data indexing, and operation submission to the Cardano network.

Two backend options are available: the legacy PRISM Node and NeoPRISM. **We recommend NeoPRISM for new deployments** due to its lightweight architecture, simple deployment, and modern REST API. Both backends are interchangeable via a simple configuration change.

## Node Backend Options

Cloud Agent supports two node backend implementations:

| Feature | PRISM Node | NeoPRISM |
|---------|------------|----------|
| Status | Legacy | **Recommended** |
| Protocol | gRPC | HTTP/REST |
| Implementation | Scala | Rust |
| Resource Usage | Higher | Lightweight |
| Default Backend | ✅ Yes | ❌ No |
| VDR Storage Support | Partial | Full |

### PRISM Node

The legacy PRISM Node implementation uses gRPC for communication and has been the default backend since the initial release of Cloud Agent. While still supported for existing deployments, PRISM Node requires more resources and has a more complex deployment process.

### NeoPRISM (Recommended)

NeoPRISM is an open-source alternative implementation written in Rust. It provides the same DID management capabilities with improved resource efficiency and a modern HTTP/REST API. NeoPRISM is designed for easy deployment with Docker and supports multiple deployment modes.

For more information about NeoPRISM, see the [NeoPRISM component documentation](/docs/documentation/learn/components/neoprism/).

## Configuration

The node backend is configured using environment variables. Switch between backends by changing the `NODE_BACKEND` variable.

### Environment Variables

| Variable | Description | Type | Default |
|----------|-------------|------|---------|
| `NODE_BACKEND` | DID node backend implementation to use. Use `prism-node` for the legacy PRISM Node or `neoprism` for NeoPRISM service. | Enum (`prism-node`, `neoprism`) | `prism-node` |
| `NEOPRISM_BASE_URL` | Base URL of the NeoPRISM service for DID resolution. Only required when `NODE_BACKEND` is set to `neoprism`. | String | `http://localhost:8080` |
| `PRISM_NODE_HOST` | Hostname of the server where the PRISM Node is running. Only used when `NODE_BACKEND` is set to `prism-node`. | String | `localhost` |
| `PRISM_NODE_PORT` | Port of the PRISM Node. Only used when `NODE_BACKEND` is set to `prism-node`. | Int | `50053` |
| `PRISM_NODE_USE_PLAIN_TEXT` | Whether to use plain text for PRISM Node communication. Only used when `NODE_BACKEND` is set to `prism-node`. | Boolean | `true` |

### Configuration Examples

**For NeoPRISM (Recommended):**

```bash
NODE_BACKEND=neoprism
NEOPRISM_BASE_URL=http://neoprism:8080
```

**For PRISM Node (Legacy):**

```bash
NODE_BACKEND=prism-node
PRISM_NODE_HOST=prism-node
PRISM_NODE_PORT=50053
PRISM_NODE_USE_PLAIN_TEXT=true
```

## Prerequisites

### For PRISM Node

:::warning Deprecation Notice
PRISM Node is considered a legacy implementation and may be deprecated in future versions of Cloud Agent. While existing deployments using PRISM Node will continue to be supported, **we strongly recommend using NeoPRISM for all new deployments**.
:::

To use PRISM Node as the backend, you need:

- A deployed PRISM Node instance
- Network connectivity to the PRISM Node service

For detailed instructions on deploying and running PRISM Node, see the [Running PRISM Node](/docs/documentation/learn/components/prism-node/running-node) documentation.

### For NeoPRISM (Recommended)

:::info
NeoPRISM **MUST** be run in **standalone mode** when integrating with Cloud Agent. Standalone mode provides both indexing and operation submission capabilities required by the Cloud Agent.
:::

To use NeoPRISM as the backend, you need:

- A deployed NeoPRISM instance in standalone mode
- Network connectivity to the NeoPRISM service

Additionally, you need:

- **Database:** PostgreSQL or SQLite for storing indexed blockchain data
- **Cardano Wallet:** A configured Cardano wallet for submitting operations to the blockchain
- **Cardano Network Sources:** Connectivity to the Cardano network (mainnet, preprod, or testnet). Might be cardano relay node or dbsync instance

For detailed instructions on deploying and running NeoPRISM in standalone mode, see the [Running NeoPRISM](/docs/documentation/learn/components/neoprism/running-neoprism) documentation.

## Migration Guide

Migrating from PRISM Node to NeoPRISM is seamless and requires no code changes. The migration process involves updating environment variables and restarting the Cloud Agent.

### Migration Steps

1. **Deploy NeoPRISM:** Ensure NeoPRISM is deployed and running in standalone mode with all prerequisites configured.

2. **Update Environment Variables:** Change the `NODE_BACKEND` variable to `neoprism` and set the `NEOPRISM_BASE_URL`:
   ```bash
   NODE_BACKEND=neoprism
   NEOPRISM_BASE_URL=http://your-neoprism-host:8080
   ```

3. **Restart Cloud Agent:** Restart the Cloud Agent service to apply the new configuration.

4. **Verify Operation:** Test DID operations to ensure the Cloud Agent is successfully communicating with NeoPRISM.

## Additional Resources

- [NeoPRISM Official Documentation](https://hyperledger-identus.github.io/neoprism/)

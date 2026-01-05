---
id: running-neoprism
sidebar_position: 2
---

# Running NeoPRISM

## Overview

NeoPRISM is a Rust-based service for managing PRISM [Decentralized Identifiers (DIDs)](/home/concepts/glossary#decentralized-identifier) anchored on the Cardano blockchain. It exposes a W3C-compliant HTTP REST API for DID resolution, indexing, and operation submission. The [Cloud Agent](/home/concepts/glossary#cloud-agent) communicates with NeoPRISM through this API to perform all DID-related operations.

:::note
This documentation provides a high-level overview of running NeoPRISM. For comprehensive deployment guides and internal configuration details, refer to the [official NeoPRISM documentation](https://hyperledger-identus.github.io/neoprism/).
:::

The following documentation explains how to deploy NeoPRISM, including the environment variables required and how to integrate it with the Cloud Agent for both development and production environments.

## Configuration

NeoPRISM is configured through environment variables that correspond to CLI options. The available configuration options vary depending on the deployment mode (dev, standalone, indexer, or submitter).

:::note
For a comprehensive and up-to-date list of all configuration options, environment variables, CLI arguments, default values, and descriptions for each deployment mode, refer to the [official NeoPRISM CLI Options documentation](https://hyperledger-identus.github.io/neoprism/references/cli-options.html).
:::

## Running NeoPRISM

### Docker Image

Before running the examples below, set the `NEOPRISM_VERSION` environment variable to specify which version to use (e.g., `export NEOPRISM_VERSION=0.9.1`).

The NeoPRISM Docker image is available on Docker Hub:

```bash
docker pull hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION
```

### Database Configuration

NeoPRISM supports two database backends configured via the `NPRISM_DB_URL` environment variable:

#### SQLite
```bash
# In-memory database (development/testing)
NPRISM_DB_URL='sqlite::memory:'

# File-based database
NPRISM_DB_URL='sqlite:/path/to/database.db'
```

#### PostgreSQL
```bash
# PostgreSQL connection string
NPRISM_DB_URL='postgresql://username:password@hostname:5432/database_name'
```

### Cardano Network Selection

Set the `NPRISM_CARDANO_NETWORK` environment variable to specify which Cardano network to operate on:

- **mainnet**: Production Cardano network
- **preprod**: Pre-production testing network
- **testnet**: Legacy testing network
- **custom**: Custom network configuration

Ensure that the selected network matches your blockchain data source configuration and the Cloud Agent's intended deployment environment.


### Examples

#### Development Mode

For local development and testing with an in-memory database:

```bash
docker run -p 8080:8080 \
  -e NPRISM_DB_URL='sqlite::memory:' \
  hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION dev
```

This mode provides a simplified setup ideal for local testing without requiring external dependencies.

#### Indexer Mode

The indexer mode synchronizes with the Cardano blockchain and maintains the current state of DIDs. It supports multiple backend options for blockchain synchronization.

##### Using Cardano Relay (Oura Backend)

For direct synchronization from a Cardano relay node on mainnet:

```bash
docker run -p 8080:8080 \
  -e NPRISM_DB_URL='sqlite::memory:' \
  -e NPRISM_CARDANO_NETWORK=mainnet \
  -e NPRISM_CARDANO_RELAY_ADDR=backbone.mainnet.cardanofoundation.org:3001 \
  hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION indexer
```

This configuration connects directly to a Cardano relay node for real-time blockchain synchronization.

##### Using DBSync Backend

For synchronization using an existing DBSync database on preprod:

```bash
docker run -p 8080:8080 \
  -e NPRISM_DB_URL='postgresql://username:password@hostname:5432/database' \
  -e NPRISM_CARDANO_NETWORK=preprod \
  -e NPRISM_CARDANO_DBSYNC_URL='postgresql://dbsync_user:password@dbsync_host:5432/dbsync_db' \
  hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION indexer
```

Replace the placeholder values with your actual database credentials and DBSync connection details.

#### Standalone Mode

The standalone mode combines both indexer and submitter functionality, providing complete DID management capabilities in a single service.

```bash
docker run -p 8080:8080 \
  -e NPRISM_DB_URL='postgresql://username:password@hostname:5432/database' \
  -e NPRISM_CARDANO_NETWORK=preprod \
  -e NPRISM_CARDANO_RELAY_ADDR=backbone.preprod.cardanofoundation.org:4001 \
  -e NPRISM_CARDANO_WALLET_BASE_URL='http://cardano-wallet:8090' \
  -e NPRISM_CARDANO_WALLET_WALLET_ID='<wallet-id>' \
  -e NPRISM_CARDANO_WALLET_PASSPHRASE='<wallet-passphrase>' \
  -e NPRISM_CARDANO_WALLET_PAYMENT_ADDR='<payment-address>' \
  hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION standalone
```

Replace the placeholder values (`<wallet-id>`, `<wallet-passphrase>`, `<payment-address>`) with your actual Cardano wallet configuration. The database URL and wallet base URL should point to your PostgreSQL database and Cardano wallet service respectively.

#### Submitter Mode

The submitter mode handles the submission of signed DID operations to the Cardano blockchain, typically used in distributed deployments alongside a separate indexer service.

```bash
docker run -p 8080:8080 \
  -e NPRISM_CARDANO_WALLET_BASE_URL='http://cardano-wallet:8090' \
  -e NPRISM_CARDANO_WALLET_WALLET_ID='<wallet-id>' \
  -e NPRISM_CARDANO_WALLET_PASSPHRASE='<wallet-passphrase>' \
  -e NPRISM_CARDANO_WALLET_PAYMENT_ADDR='<payment-address>' \
  hyperledgeridentus/identus-neoprism:$NEOPRISM_VERSION submitter
```

Replace the placeholder values with your actual Cardano wallet configuration. This mode requires a separately running indexer instance to provide DID resolution capabilities.


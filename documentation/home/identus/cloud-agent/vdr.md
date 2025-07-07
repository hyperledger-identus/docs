# VDR

VDR is an interface for performing CRUD and verification operations on a generic data storage driver.
The specification is available [here](https://github.com/hyperledger-identus/vdr),
along with a reference implementation provided as a library.
The interface defines simple create, read, update, delete, and verify operations, delegating
their execution to an underlying driver. Driver is an actual implementation of a data storage mechanism.

## HTTP binding

Although the VDR implementation is available as a library, it is also integrated intothe Cloud Agent
to expose its functionality via HTTP, supporting use cases where direct library integration is not feasible.

The Cloud Agent exposes the VDR functionality through a RESTful stlye API,
providing an interface analogous to direct method calls.

__Example__

| Operation | HTTP Endpoint |
|-|-|
| `create(data, options)`| `POST /vdr/entries?drid=...`  |
| `read(url)`            | `GET /vdr/entries?url=...`    |
| `update(url, data)`    | `PUT /vdr/entries?url=...`    |
| `delete(url      )`    | `DELETE /vdr/entries?url=...` |

## Selecting VDR drivers

The driver is a key component of VDR, providing the actual implementation for the storage backend.
The cloud agent acts as a proxy, supporting multiple drivers and allowing users to choose the one that best fits their needs.
To select the appropriate driver, specify the following parameters when creating a VDR entry.

| Parameters | Description |
|-|-|
| `drid` | Driver ID      |
| `drf`  | Driver famely  |
| `drv`  | Driver version |

Currently, the Cloud Agent supports the following drivers

| Driver | ID | Family | Version | Description |
|-|-|-|-|-|
| In-memory | `memory`   | `memory` | `0.1.0` | Driver storing data in-memory for testing |
| Database  | `database` | `database` | `0.1.0` | Driver storing data in local database testing purposes |

For a full range of parameters and driver options, please refer the the [VDR specification](https://github.com/hyperledger-identus/vdr).

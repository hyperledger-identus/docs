"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1694],{81404:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var i=n(74848),s=n(28453);const a={},o="Secret storage",r={id:"secrets/secret-storage",title:"Secret storage",description:"Status: draft",source:"@site/cloud-agent/docs/docusaurus/secrets/secret-storage.md",sourceDirName:"secrets",slug:"/secrets/secret-storage",permalink:"/docs/tutorials/secrets/secret-storage",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Terminology",id:"terminology",level:2},{value:"Vault",id:"vault",level:3},{value:"Agent",id:"agent",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Technical Overview",id:"technical-overview",level:2},{value:"The Cloud Agent Logical Isolation",id:"the-cloud-agent-logical-isolation",level:3},{value:"The Cloud Agent Authentication",id:"the-cloud-agent-authentication",level:3},{value:"Wallet Authentication",id:"wallet-authentication",level:3},{value:"Secrets Engine Configuration",id:"secrets-engine-configuration",level:3},{value:"Single and Multi-Tenant Configuration",id:"single-and-multi-tenant-configuration",level:3},{value:"Key Derivation",id:"key-derivation",level:3},{value:"Naming Convention",id:"naming-convention",level:3}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"secret-storage",children:"Secret storage"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Status"}),": draft"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Date"}),": 2021-06-02"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": this document is a draft and is not implemented yet. Statement in this document might be changed in the future."]}),"\n",(0,i.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,i.jsx)(t.p,{children:"Secrets are sensitive data that should be stored securely.\nThere are following types of the secrets in the Identus Platform:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"seed: a secret used to derive cryptographic keys"}),"\n",(0,i.jsx)(t.li,{children:"private key: a secret used to sign data"}),"\n",(0,i.jsxs)(t.li,{children:["any other entities that contain sensitive data (for instance, ",(0,i.jsx)(t.code,{children:"credential-definition"})," and the ",(0,i.jsx)(t.code,{children:"link-secret"})," used by the AnonCreds)"]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": public keys are not considered as secrets and can be stored in the same of other storage depending on the needs"]}),"\n",(0,i.jsx)(t.p,{children:"The Identus Platform provides a secure storage for secrets.\nHashicorp Vault is used as a secret storage service and provides a REST API, Web UI and command client to interact with the service."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE:"})," The Identus Platform uses a single Vault instance for all tenants per environment. Logical data separation is achieved by using Vault namespaces and policies applied to the tenant."]}),"\n",(0,i.jsx)(t.h2,{id:"terminology",children:"Terminology"}),"\n",(0,i.jsx)(t.h3,{id:"vault",children:"Vault"}),"\n",(0,i.jsx)(t.p,{children:"Vault is a secrets management service developed by HashiCorp.\nIt can be used as the default secret storage for the Identus Platform as well as for authentication and account management."}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"NOTE"}),": The Identus Platform must not be dependent on the Vault service and must be able to use other services for the same purposes"]}),"\n",(0,i.jsx)(t.h3,{id:"agent",children:"Agent"}),"\n",(0,i.jsx)(t.p,{children:"The Cloud Agent is a service that provides an APIs to interact with the Identus Platform and use the SSI capabilities."}),"\n",(0,i.jsx)(t.h3,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsx)(t.p,{children:"Logical component of the Agent that holds secrets and provides the logical or physical isolation of the data."}),"\n",(0,i.jsx)(t.h2,{id:"technical-overview",children:"Technical Overview"}),"\n",(0,i.jsx)(t.h3,{id:"the-cloud-agent-logical-isolation",children:"The Cloud Agent Logical Isolation"}),"\n",(0,i.jsx)(t.p,{children:"Each instance of the Cloud Agent needs to have access to the secrets but must be isolated from other agents at the same environment.\nFor horizontal scalability the group of agents can be configured to share the same namespace, so they can access the same secrets, but they still need to use different Vault account to authenticate themselves to the Vault service."}),"\n",(0,i.jsx)(t.h3,{id:"the-cloud-agent-authentication",children:"The Cloud Agent Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["Each instance of the Cloud Agent needs to authenticate itself to the Vault service.\nThe Vault service uses a token-based authentication mechanism.\nThe Cloud Agent uses a Vault ",(0,i.jsx)(t.a,{href:"https://developer.hashicorp.com/vault/docs/auth/approle",children:"AppRole"})," authentication method to authenticate itself to the Vault service.\nThe token issued to the agent has the expiration time set in the application configuration.\nAfter the token expires, the agent needs to re-authenticate itself to the Vault service."]}),"\n",(0,i.jsx)(t.h3,{id:"wallet-authentication",children:"Wallet Authentication"}),"\n",(0,i.jsx)(t.p,{children:"Each instance of the Wallet needs to authenticate itself to the Vault service.\nThe Cloud Agent issues the authentication token to the Wallet based on the tenant ID."}),"\n",(0,i.jsx)(t.h3,{id:"secrets-engine-configuration",children:"Secrets Engine Configuration"}),"\n",(0,i.jsx)(t.p,{children:"The Vault service uses a secrets engine to store secrets.\nKV2 secrets engine is used to store secrets in the Vault service and provides the following features:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"secrets are encrypted at rest"}),"\n",(0,i.jsx)(t.li,{children:"secrets are encrypted in transit"}),"\n",(0,i.jsx)(t.li,{children:"secrets are versioned"}),"\n",(0,i.jsx)(t.li,{children:"secrets can be deleted, restored and rolled back to a previous version"}),"\n",(0,i.jsx)(t.li,{children:"secrets are available via REST API, WEB UI, and command client"}),"\n",(0,i.jsx)(t.li,{children:"secrets are logically separated by tenants"}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"single-and-multi-tenant-configuration",children:"Single and Multi-Tenant Configuration"}),"\n",(0,i.jsx)(t.p,{children:"The Identus Platform supports single and multi-tenant configurations.\nIn the single-tenant configuration, the Cloud Agent uses a single Wallet and a single Vault account to authenticate itself to the Vault service.\nIn the multi-tenant configuration, the Cloud Agent manages multiple Wallets, each Wallet is associated with a single tenant.\nMulti-tenant configuration is used to achieve logical data separation between tenants, so each Wallet can access only its own secrets.\nThe Wallet is identified by the tenant ID and represented by the account in the Vault service."}),"\n",(0,i.jsx)(t.p,{children:"The common sequence diagram for the single and multi-tenant configurations is shown below:"}),"\n",(0,i.jsx)(t.mermaid,{value:"sequenceDiagram\n    Tenant->>+Agent: REST/DIDComm API\n    Agent->>+Wallet: route the request\n    Wallet->>+Vault: manage secrets\n    Vault->>+Wallet: secrets\n    Wallet->>+Wallet: business logic\n    Wallet->>+Agent: route the response\n    Agent->>+Tenant: REST/DIDComm API"}),"\n",(0,i.jsx)(t.h3,{id:"key-derivation",children:"Key Derivation"}),"\n",(0,i.jsx)(t.p,{children:"The Identus Platform uses HD key derivation to derive cryptographic keys from the seed.\nThe Wallet is initialized with the seed and uses it to derive cryptographic keys for managed DIDs.\nKey derivation path is conventional and is defined as follows:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"m / wallet-purpose / DID-index / key-purpose / key-index\n"})}),"\n",(0,i.jsx)(t.h3,{id:"naming-convention",children:"Naming Convention"}),"\n",(0,i.jsx)(t.p,{children:"To store the assets in the Vault service each asset is assigned a unique name.\nThe Vault is a key/value store with metadata attached to the key and versioning."}),"\n",(0,i.jsxs)(t.p,{children:["The naming convention for the Vault assets is a matter of the implementation, but for the multi-tenant configuration all the assets of the Wallet must be stored under the path that contains the ",(0,i.jsx)(t.code,{children:"tenant-id"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["For example, the ",(0,i.jsx)(t.code,{children:"seed"})," can be stored by the following path:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<tenant-id>/seed value=<base64-encoded-value> <metadata>\n"})}),"\n",(0,i.jsx)(t.p,{children:"The private keys for the DID can be stored by the following path:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<tenant-id>/dids/prism/<did-ref>/keys/<key-purpose>/<key-index>/<operation-hash> value=<base64-encoded-value> <metadata>\n"})}),"\n",(0,i.jsx)(t.p,{children:"where:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tenant-id"})," is the tenant ID assigned to the Wallet"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"did-ref"})," is the DID ref"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"key-purpose"})," is the key purpose according to the PRISM DID Method specification"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"key-index"})," is the key index. Starts from 0 and grows incrementally after each key rotation"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"operation-hash"})," is the reference to the update DID document operation"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"base64-encoded-value"})," is the base64-encoded value of the key"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"metadata"})," is the key/value metadata attached the key that can be used to store additional information about the key such as ",(0,i.jsx)(t.code,{children:"seed"})," or ",(0,i.jsx)(t.code,{children:"key-derivation-path"})]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"The keys material of the DID peer can be stored by the following path:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"<tenant-id>/dids/peer/<did-ref>/keys/<key-purpose> value=<base64-encoded-value> <metadata>\n"})}),"\n",(0,i.jsx)(t.p,{children:"Links:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/prism-did-method-spec",children:"PRISM DID Method Specification"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/api/secret/kv/kv-v2",children:"Vault Secrets Engine API"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/concepts/namespaces",children:"Vault Namespaces"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://github.com/input-output-hk/atala-prism-building-blocks/blob/main/docs/decisions/20230516-hierarchical-deterministic-key-generation-algorithm.md",children:"HD Key Derivation ADR"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/approle",children:"Vault AppRole Authentication"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/auth/token",children:"Vault Token Authentication"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/secrets/kv/kv-v2",children:"Vault KV Secrets Engine"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"https://www.vaultproject.io/docs/concepts/entities",children:"Vault Entities"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var i=n(96540);const s={},a=i.createContext(s);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
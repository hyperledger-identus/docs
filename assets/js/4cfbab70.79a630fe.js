"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[2380],{18284:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var i=n(74848),s=n(28453);const o={},a="Building Blocks",r={id:"identus/cloud-agent/building-blocks",title:"Building Blocks",description:"Identus is a toolset for implementing decentralized identity and consists of several core building blocks. These building blocks are modular components that can be easily combined and configured to meet various use cases and product requirements. By abstracting these fundamental components into modular building blocks, Identus allows for rapid development and deployment of new features and capabilities for its Cloud Agents.",source:"@site/documentation/docs/identus/cloud-agent/building-blocks.md",sourceDirName:"identus/cloud-agent",slug:"/identus/cloud-agent/building-blocks",permalink:"/docs/docs/identus/cloud-agent/building-blocks",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/docs/docs/identus/cloud-agent/overview"},next:{title:"Authentication and Authorisation",permalink:"/docs/docs/identus/cloud-agent/authentication"}},d={},l=[{value:"Apollo - Cryptography Module",id:"apollo---cryptography-module",level:2},{value:"Castor - DID Module",id:"castor---did-module",level:2},{value:"Pollux - Verifiable Credential Module",id:"pollux---verifiable-credential-module",level:2},{value:"Mercury - DIDComm Module",id:"mercury---didcomm-module",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"building-blocks",children:"Building Blocks"}),"\n",(0,i.jsxs)(t.p,{children:["Identus is a toolset for implementing decentralized identity and consists of several core building blocks. These building blocks are modular components that can be easily combined and configured to meet various use cases and product requirements. By abstracting these fundamental components into modular building blocks, Identus allows for rapid development and deployment of new features and capabilities for its ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#cloud-agent",children:"Cloud Agents"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"This modular architecture also provides excellent flexibility and customization options, as different building blocks can be combined in various ways to fit specific use case requirements. However, in the future, some unique use cases may arise that require designing and developing new building blocks. The Atala team continuously improves and expands the suite's capabilities to meet its users' evolving needs."}),"\n",(0,i.jsx)(t.p,{children:"Below is a brief overview of the current building blocks of Identus:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Building Block"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Definition"})}),(0,i.jsx)(t.th,{style:{textAlign:"center"},children:(0,i.jsx)(t.strong,{children:"Code Name"})})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Cryptography"}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"A set of cryptographic primitives that ensure the integrity, authenticity, and confidentiality of all data we store and process in a provable secure way."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Apollo"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#decentralized-identifer",children:"Decentralized Identifiers (DID)"})}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"A set of DID operations to create, manage, and resolve standards-based DIDs in a user-controlled manner."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Castor"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{style:{textAlign:"center"},children:(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#verifiable-credentials",children:"Verifiable Credentials"})}),(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:["A set of credential operations to issue, manage, and verify standards-based ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#verifiable-credential",children:"verifiable credentials"})," in a privacy-preserving manner."]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Pollux"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsxs)(t.td,{style:{textAlign:"center"},children:[(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#didcomm",children:"DIDComm"})," V2"]}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"A set of secure, standards-based communications protocols to establish and manage trusted, peer-to-peer connections and interactions between DIDs in a transport-agnostic and interoperable manner."}),(0,i.jsx)(t.td,{style:{textAlign:"center"},children:"Mercury"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"apollo---cryptography-module",children:"Apollo - Cryptography Module"}),"\n",(0,i.jsx)(t.p,{children:"Apollo is one of the building blocks of Identus. It is a suite of cryptographic primitives ensuring data security during storage and handling. Cryptographic primitives are mathematical algorithms and protocols that form the foundation for secure communication and data protection."}),"\n",(0,i.jsx)(t.p,{children:"The primary purpose of Apollo is to provide data integrity, authenticity, and confidentiality, which are essential components of secure information systems. Apollo ensures that tampering, unauthorized access, and other security threats do not compromise the protection of user data, giving users confidence in its security."}),"\n",(0,i.jsx)(t.p,{children:"Apollo utilizes cryptographic hash functions to create digital fingerprints of data for detecting any changes or modifications to the original data. These functions ensure that the data stored and processed remains authentic and unaltered."}),"\n",(0,i.jsx)(t.p,{children:"For authenticity, Apollo uses digital signatures to authenticate the identity of the sender and recipient of data and ensure that the data has not been tampered with during transmission."}),"\n",(0,i.jsx)(t.p,{children:"Finally, for confidentiality, Apollo uses encryption algorithms to protect sensitive data from unauthorized access and exposure. This feature helps ensure that sensitive information remains confidential and protected against cyber-attacks and data breaches."}),"\n",(0,i.jsx)(t.p,{children:"Overall, the Apollo building block is an essential component of Identus, providing a secure and reliable means of protecting data stored and processed within the platform."}),"\n",(0,i.jsx)(t.h2,{id:"castor---did-module",children:"Castor - DID Module"}),"\n",(0,i.jsx)(t.p,{children:"Castor is a building block of Identus that provides a set of DID operations, allowing users to create, manage, and resolve DIDs."}),"\n",(0,i.jsxs)(t.p,{children:["A ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#did-document",children:"DID Document"})," is a JSON-LD document that contains information about a DID. It includes information such as the public keys associated with the DID, the authentication mechanisms, and linked services. Castor consists of a resolver that resolves a DID to its associated DID Document. The lookup service allows users to retrieve the DID Document for a given DID."]}),"\n",(0,i.jsxs)(t.p,{children:["Castor supports a variety of ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#did-method",children:"DID methods"}),", including full support of the in-house ",(0,i.jsx)(t.code,{children:"did:prism"})," method and other widely-used methods such as the ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#peer-did-method",children:"Peer DID method"}),", enabling users to choose the DID method that best suits their needs and allows for interoperability with other systems and platforms."]}),"\n",(0,i.jsx)(t.p,{children:"Castor gives users complete control over their DIDs, including creating new DIDs, updating existing ones, and deleting or deactivating them if necessary."}),"\n",(0,i.jsx)(t.h2,{id:"pollux---verifiable-credential-module",children:"Pollux - Verifiable Credential Module"}),"\n",(0,i.jsxs)(t.p,{children:["Pollux is a building block of Identus that provides a set of operations for managing and verifying verifiable credentials (VCs). This building block is a vital aspect of the ",(0,i.jsx)(t.a,{href:"/docs/concepts/glossary#self-sovereign-identity",children:"self-sovereign identity"})," paradigm. With Pollux, users can issue, manage, and verify VCs in a privacy-preserving manner. Pollux ensures that users can share their credentials with others while maintaining control over their personal information and protecting it from unauthorized access and exposure."]}),"\n",(0,i.jsx)(t.p,{children:"In terms of issuing credentials, Pollux provides the necessary functions to create and issue VCs, including the ability to specify the type of credential, the attributes it represents, and the trusted party attesting to the credentials."}),"\n",(0,i.jsx)(t.p,{children:"For managing credentials, Pollux allows users to store and manage their VCs in a secure and easily accessible manner, which includes adding, updating, or revoking credentials as needed."}),"\n",(0,i.jsx)(t.p,{children:"Finally, for verifying credentials, Pollux provides the tools to check a given credential's validity and authenticate that a trusted party has issued it. Pollux includes the ability to check the status of the credential, such as whether it has been revoked or not, and to validate that the attributes it represents are accurate and up-to-date."}),"\n",(0,i.jsx)(t.h2,{id:"mercury---didcomm-module",children:"Mercury - DIDComm Module"}),"\n",(0,i.jsx)(t.p,{children:"Mercury is a building block of Identus that provides a set of secure, standards-based communication protocols and infrastructure for establishing and managing trusted, peer-to-peer connections between decentralized identifiers. DIDs allow their owners to manage their identity and interact with others in a privacy-preserving manner."}),"\n",(0,i.jsx)(t.p,{children:"Additionally, using standards-based protocols ensures that the communication between DIDs is interoperable, meaning that different systems and platforms can communicate seamlessly."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>r});var i=n(96540);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);
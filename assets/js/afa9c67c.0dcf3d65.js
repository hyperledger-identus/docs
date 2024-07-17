"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[2089],{45161:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),r=i(28453);const s={},d="Anoncred Credential Definition Guide",a={id:"credentialdefinition/credential-definition",title:"Anoncred Credential Definition Guide",description:"Abstract",source:"@site/identus-cloud-agent/docs/docusaurus/credentialdefinition/credential-definition.md",sourceDirName:"credentialdefinition",slug:"/credentialdefinition/credential-definition",permalink:"/tutorials/credentialdefinition/credential-definition",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Credential Definition",permalink:"/tutorials/category/credential-definition"},next:{title:"Create the Credential Definition",permalink:"/tutorials/credentialdefinition/create"}},o={},c=[{value:"Abstract",id:"abstract",level:2},{value:"1. Introduction",id:"1-introduction",level:2},{value:"2. Anoncred Credential Definition Attributes",id:"2-anoncred-credential-definition-attributes",level:2},{value:"name (String)",id:"name-string",level:3},{value:"description (String)",id:"description-string",level:3},{value:"version (String)",id:"version-string",level:3},{value:"tag (String)",id:"tag-string",level:3},{value:"author (DID)",id:"author-did",level:3},{value:"schemaId (URI)",id:"schemaid-uri",level:3},{value:"signatureType (String)",id:"signaturetype-string",level:3},{value:"supportRevocation (Boolean)",id:"supportrevocation-boolean",level:3},{value:"Conclusion",id:"conclusion",level:2},{value:"References",id:"references",level:2}];function l(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"anoncred-credential-definition-guide",children:"Anoncred Credential Definition Guide"}),"\n",(0,t.jsx)(n.h2,{id:"abstract",children:"Abstract"}),"\n",(0,t.jsx)(n.p,{children:"This document details the structure, supported formats, and technical intricacies of Anoncred Credential Definitions within the Identus Platform."}),"\n",(0,t.jsx)(n.h2,{id:"1-introduction",children:"1. Introduction"}),"\n",(0,t.jsx)(n.p,{children:"An Anoncred Credential Definition serves as a standardized format for any given Anoncred Verifiable Credential. By embedding essential attributes unique to each type of credential, it lays the groundwork for diverse categories of verifiable credentials. Integrating this definition on a public blockchain ensures its availability and verifiability for all stakeholders."}),"\n",(0,t.jsxs)(n.p,{children:["The Identus Platform endorses the Anoncred Credential Definition, conforming to the ",(0,t.jsx)(n.a,{href:"https://hyperledger.github.io/anoncreds-spec/#term:schemas",children:"Hyperledger AnonCreds specification"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"2-anoncred-credential-definition-attributes",children:"2. Anoncred Credential Definition Attributes"}),"\n",(0,t.jsx)(n.h3,{id:"name-string",children:"name (String)"}),"\n",(0,t.jsx)(n.p,{children:"A descriptive and readable name indicating the type or category of the credential."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"name": "{{CREDENTIAL_NAME}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"description-string",children:"description (String)"}),"\n",(0,t.jsx)(n.p,{children:"A succinct descriptor providing an overview of the credential definition's purpose or category."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"description": "{{CREDENTIAL_DESCRIPTION}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"version-string",children:"version (String)"}),"\n",(0,t.jsxs)(n.p,{children:["Specifies the version of the credential definition, using the ",(0,t.jsx)(n.a,{href:"https://semver.org/",children:"SemVer"})," protocol."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"version": "{{VERSION_NUMBER}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"tag-string",children:"tag (String)"}),"\n",(0,t.jsx)(n.p,{children:"A unique identifier or tag associated with the credential definition."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"tag": "{{TAG_IDENTIFIER}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"author-did",children:"author (DID)"}),"\n",(0,t.jsx)(n.p,{children:"The decentralized identifier (DID) of the entity that created the credential definition."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"author": "{{ISSUER_DID_SHORT}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"schemaid-uri",children:"schemaId (URI)"}),"\n",(0,t.jsx)(n.p,{children:"A distinct reference to retrieve the schema from the Schema Registry."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"schemaId": "{{SCHEMA_REGISTRY_URI}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"signaturetype-string",children:"signatureType (String)"}),"\n",(0,t.jsx)(n.p,{children:"Indicates the type of signature applied to the credential definition."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"signatureType": "{{SIGNATURE_TYPE}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h3,{id:"supportrevocation-boolean",children:"supportRevocation (Boolean)"}),"\n",(0,t.jsx)(n.p,{children:"Specifies if the credential definition incorporates revocation capabilities."}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Example:"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-json",children:'{\n"supportRevocation": "{{BOOLEAN_VALUE}}"\n}\n'})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:"The Anoncred Credential Definition is a versatile tool that offers a standardized approach for an array of verifiable credentials. By ensuring its correct incorporation within the Identus Platform, the issuance and validation processes of various credentials can be streamlined and made more efficient."}),"\n",(0,t.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://hyperledger.github.io/anoncreds-spec/#term:schemas",children:"Hyperledger AnonCreds specification"})}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," Throughout the implementation phase within the Identus Platform, it's crucial to replace placeholders (such as ",(0,t.jsx)(n.code,{children:"{{CREDENTIAL_NAME}}"}),", ",(0,t.jsx)(n.code,{children:"{{VERSION_NUMBER}}"}),", and others) with their real, intended values."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>a});var t=i(96540);const r={},s=t.createContext(r);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
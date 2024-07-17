"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[8],{22519:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var i=n(74848),s=n(28453),a=n(11470),r=n(19365);const o={},l="Credential revocation",c={id:"credentials/revocation",title:"Credential revocation",description:"Identus implements the revocation mechanism of JWT credentials according to Verifiable Credentials Status List v2021. This open standard enables Identus to verify the revocation status of any credential that implements the revocation mechanism using the same specification.",source:"@site/identus-cloud-agent/docs/docusaurus/credentials/revocation.md",sourceDirName:"credentials",slug:"/credentials/revocation",permalink:"/tutorials/credentials/revocation",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Present proof",permalink:"/tutorials/credentials/present-proof"},next:{title:"DIDs",permalink:"/tutorials/category/dids"}},d={},u=[{value:"Overview",id:"overview",level:2},{value:"Verification",id:"verification",level:2},{value:"Proof verification",id:"proof-verification",level:2},{value:"Example of status list credential with <code>DataIntegrityProof</code>",id:"example-of-status-list-credential-with-dataintegrityproof",level:4},{value:"Example of status list credential with <code>EcdsaSecp256k1Signature2019</code> proof",id:"example-of-status-list-credential-with-ecdsasecp256k1signature2019-proof",level:4},{value:"Revocation",id:"revocation",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"credential-revocation",children:"Credential revocation"}),"\n",(0,i.jsxs)(t.p,{children:["Identus implements the revocation mechanism of JWT credentials according to ",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/2023/WD-vc-status-list-20230427/",children:"Verifiable Credentials Status List v2021"}),". This open standard enables Identus to verify the revocation status of any credential that implements the revocation mechanism using the same specification."]}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["Every credential will contain the property ",(0,i.jsx)(t.code,{children:"credentialStatus"}),", which will look like this:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'"credentialStatus": {\n    "id": "http://localhost:8080/cloud-agent/cloud-agent/credential-status/27526236-3836-4061-9867-f69314e258b4#94567"\n    "type": "StatusList2021Entry",\n    "statusPurpose": "revocation",\n    "statusListIndex": "94567",\n    "statusListCredential": "http://localhost:8080/cloud-agent/cloud-agent/credential-status/27526236-3836-4061-9867-f69314e258b4"\n  },\n'})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"type"})," will always be ",(0,i.jsx)(t.code,{children:"StatusList2021Entry"})]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"statusListCredential"})," is a publicly accessible URL that resolves a status list credential that looks like this:"]}),"\n"]}),"\n",(0,i.jsx)(a.A,{groupId:"vc-formats",children:(0,i.jsx)(r.A,{value:"jwt",label:"JWT",children:(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "proof" : {...},\n  "@context" : [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://w3id.org/vc/status-list/2021/v1"\n  ],\n  "type" : [\n    "VerifiableCredential",\n    "StatusList2021Credential"\n  ],\n  "id" : "http://localhost:8085/credential-status/c2688c98-ecb5-4dd3-87e8-a689b8fa84dd",\n  "issuer" : "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",\n  "issuanceDate" : 1717793619,\n  "credentialSubject" : {\n    "type" : "StatusList2021",\n    "statusPurpose" : "Revocation",\n    "encodedList" : "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"\n  }\n}\n\n'})})})}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"statusListIndex"})," is an index in a bit string at which the credential's revocation status can be verified."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The status list credential contains  ",(0,i.jsx)(t.code,{children:"encodedList"}),", a base64-encoded bit string that contains the credential's revocation status."]}),"\n",(0,i.jsx)(t.h2,{id:"verification",children:"Verification"}),"\n",(0,i.jsx)(t.p,{children:"To verify the revocation status of the credential, one must follow these steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["Resolve the Status list credential using the URL found at path: ",(0,i.jsx)(t.code,{children:"credentialStatus.statusListCredential"})]}),"\n",(0,i.jsx)(t.li,{children:"Verify the embedded proof of the credential."}),"\n",(0,i.jsxs)(t.li,{children:["Decode bit-string, which is in the JSON document of the Status list credential, found at path - ",(0,i.jsx)(t.code,{children:"credentialSubject.encodedList"})]}),"\n",(0,i.jsxs)(t.li,{children:["Use the status list index from ",(0,i.jsx)(t.code,{children:"credentialStatus.statusListIndex"})," to check if the bit at this index in the decoded bit-string from step 3 is on or off. If the bit is on, the credential is revoked. Otherwise, a revocation has yet to occur."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"proof-verification",children:"Proof verification"}),"\n",(0,i.jsx)(t.p,{children:"Status list credential integrity can be verified using the embedded proof."}),"\n",(0,i.jsx)(a.A,{groupId:"vc-formats",children:(0,i.jsxs)(r.A,{value:"jwt",label:"JWT",children:[(0,i.jsx)(t.p,{children:"We currently support 2 types of proofs:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"DataIntegrityProof"})," via crypto suite ",(0,i.jsx)(t.code,{children:"eddsa-jcs-2022"}),". The exact steps on how to create a verify this proof are in the ",(0,i.jsx)(t.a,{href:"https://www.w3.org/TR/vc-di-eddsa/#eddsa-jcs-2022",children:"Data Integrity EdDSA Cryptosuites v1.0"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Used for Ed25519 EC curves, meaning if the proof was created using Ed25519 private key"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"EcdsaSecp256k1Signature2019"}),", the description of this cryptosuite can be found ",(0,i.jsx)(t.a,{href:"https://w3c-ccg.github.io/lds-ecdsa-secp256k1-2019/",children:"here"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Used for secp256k1 EC curves, meaning if the proof was created using secp256k1 private key"}),"\n",(0,i.jsxs)(t.li,{children:["This proof type uses RDF canonicalization algorithm as a data normalization before singing and verifying, the variant of this algorithm used is ",(0,i.jsx)(t.code,{children:"URDNA2015"})]}),"\n"]}),"\n"]}),"\n"]}),(0,i.jsxs)(t.h4,{id:"example-of-status-list-credential-with-dataintegrityproof",children:["Example of status list credential with ",(0,i.jsx)(t.code,{children:"DataIntegrityProof"})]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "proof" : {\n    "type" : "DataIntegrityProof",\n    "proofPurpose" : "assertionMethod",\n    "verificationMethod" : "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L211bHRpa2V5L3YxIl0sInR5cGUiOiJNdWx0aWtleSIsInB1YmxpY0tleU11bHRpYmFzZSI6InVNRll3RUFZSEtvWkl6ajBDQVFZRks0RUVBQW9EUWdBRUNYSUZsMlIxOGFtZUxELXlrU09HS1FvQ0JWYkZNNW91bGtjMnZJckp0UzRQWkJnMkxyNEQzUFdYR2xHTXB1aHdwSk84MEFpdzFXeVVHT1hONkJqSlFBPT0ifQ==",\n    "created" : "2024-03-23T16:45:50.924279Z",\n    "proofValue" : "ziKx1CJPKLy4U9kMmVzYct5xztq4oHRLPgMpAjh95zQxzBZorhLFmhZ85UPixJoQbaqkVaygLBnLARyxgGJGFNKFggaPSXHgJuG",\n    "cryptoSuite" : "eddsa-jcs-2022"\n  },\n  "@context" : [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://w3id.org/vc/status-list/2021/v1"\n  ],\n  "type" : [\n    "VerifiableCredential",\n    "StatusList2021Credential"\n  ],\n  "id" : "http://localhost:8080/cloud-agent/credential-status/27526236-3836-4061-9867-f69314e258b4",\n  "issuer" : "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",\n  "issuanceDate" : 1711212350,\n  "credentialSubject" : {\n    "id" : "",\n    "type" : "StatusList2021",\n    "statusPurpose" : "Revocation",\n    "encodedList" : "H4sIAAAAAAAAAO3BMQEAAADCoPVPbQwfoAAAAAAAAAAAAAAAAAAAAIC3AYbSVKsAQAAA"\n  }\n}\n'})}),(0,i.jsxs)(t.h4,{id:"example-of-status-list-credential-with-ecdsasecp256k1signature2019-proof",children:["Example of status list credential with ",(0,i.jsx)(t.code,{children:"EcdsaSecp256k1Signature2019"})," proof"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{\n  "proof" : {\n    "type" : "EcdsaSecp256k1Signature2019",\n    "proofPurpose" : "assertionMethod",\n    "verificationMethod" : "data:application/json;base64,eyJAY29udGV4dCI6WyJodHRwczovL3czaWQub3JnL3NlY3VyaXR5L3YxIl0sInR5cGUiOiJFY2RzYVNlY3AyNTZrMVZlcmlmaWNhdGlvbktleTIwMTkiLCJwdWJsaWNLZXlKd2siOnsiY3J2Ijoic2VjcDI1NmsxIiwia2V5X29wcyI6WyJ2ZXJpZnkiXSwia3R5IjoiRUMiLCJ4IjoiQ1hJRmwyUjE4YW1lTEQteWtTT0dLUW9DQlZiRk01b3Vsa2MydklySnRTND0iLCJ5IjoiRDJRWU5pNi1BOXoxbHhwUmpLYm9jS1NUdk5BSXNOVnNsQmpsemVnWXlVQT0ifX0=",\n    "created" : "2024-06-07T20:53:40.177613Z",\n    "jws" : "eyJiNjQiOmZhbHNlLCJjcml0IjpbImI2NCJdLCJhbGciOiJFUzI1NksifQ..-JD-ggFe1JgWd7NxUqOvmkHwuO-B2U9V-Nqn2jIsXg1TN8G_Suy__ZNSUwIRPdhFXKy3YXvisfrtheDdOemu7g"\n  },\n  "@context" : [\n    "https://www.w3.org/2018/credentials/v1",\n    "https://w3id.org/vc/status-list/2021/v1"\n  ],\n  "type" : [\n    "VerifiableCredential",\n    "StatusList2021Credential"\n  ],\n  "id" : "http://localhost:8085/credential-status/c2688c98-ecb5-4dd3-87e8-a689b8fa84dd",\n  "issuer" : "did:prism:462c4811bf61d7de25b3baf86c5d2f0609b4debe53792d297bf612269bf8593a",\n  "issuanceDate" : 1717793619,\n  "credentialSubject" : {\n    "type" : "StatusList2021",\n    "statusPurpose" : "Revocation",\n    "encodedList" : "H4sIAAAAAAAA_-3BMQ0AAAACIGf_0MbwARoAAAAAAAAAAAAAAAAAAADgbbmHB0sAQAAA"\n  }\n}\n\n'})})]})}),"\n",(0,i.jsx)(t.h2,{id:"revocation",children:"Revocation"}),"\n",(0,i.jsx)(t.p,{children:"Only issuers of a credential can revoke a credential."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Get the list of credentials"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/cloud-agent/issue-credentials/records' \\\n  -H 'accept: application/json'\n"})}),"\n",(0,i.jsx)(t.p,{children:"This endpoint will return the credentials issued. Every credential includes an ID."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"Revoke the credential"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:"curl -X 'PATCH' \\\n  'http://localhost:8080/cloud-agent/revoke-credential/<credential_id>' \\\n  -H 'accept: */*'\n"})}),"\n",(0,i.jsx)(t.admonition,{type:"note",children:(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/tutorials/credentials/issue",children:"Present proof"})," will fail the verification if one of the credentials the holder presents a revoked credential."]})})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>r});n(96540);var i=n(34164);const s={tabItem:"tabItem_Ymn6"};var a=n(74848);function r(e){let{children:t,hidden:n,className:r}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,i.A)(s.tabItem,r),hidden:n,children:t})}},11470:(e,t,n)=>{n.d(t,{A:()=>w});var i=n(96540),s=n(34164),a=n(23104),r=n(56347),o=n(205),l=n(57485),c=n(31682),d=n(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:i,default:s}}=e;return{value:t,label:n,attributes:i,default:s}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const s=(0,r.W6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(a),(0,i.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function v(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[r,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=n.find((e=>e.default))??n[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:a}))),[c,u]=f({queryString:n,groupId:s}),[v,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,d.Dv)(n);return[s,(0,i.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),m=(()=>{const e=c??v;return p({value:e,tabValues:a})?e:null})();(0,o.A)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,i.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,a]),tabValues:a}}var b=n(92303);const m={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=n(74848);function x(e){let{className:t,block:n,selectedValue:i,selectValue:r,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),d=e=>{const t=e.currentTarget,n=l.indexOf(t),s=o[n].value;s!==i&&(c(t),r(s))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,A.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:d,...a,className:(0,s.A)("tabs__item",m.tabItem,a?.className,{"tabs__item--active":i===t}),children:n??t},t)}))})}function j(e){let{lazy:t,children:n,selectedValue:s}=e;const a=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function g(e){const t=v(e);return(0,A.jsxs)("div",{className:(0,s.A)("tabs-container",m.tabList),children:[(0,A.jsx)(x,{...t,...e}),(0,A.jsx)(j,{...t,...e})]})}function w(e){const t=(0,b.A)();return(0,A.jsx)(g,{...e,children:u(e.children)},String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var i=n(96540);const s={},a=i.createContext(s);function r(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);
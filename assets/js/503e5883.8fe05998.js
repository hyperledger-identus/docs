"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[3928],{90840:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var d=t(74848),i=t(28453);const s={},r="Create DID",o={id:"dids/create",title:"Create DID",description:"PRISM DIDs are a type of decentralized identifier (DID) used across the Atala PRISM product suite.",source:"@site/identus-cloud-agent/docs/docusaurus/dids/create.md",sourceDirName:"dids",slug:"/dids/create",permalink:"/identus-docs/tutorials/dids/create",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"DIDs",permalink:"/identus-docs/tutorials/category/dids"},next:{title:"Update DID",permalink:"/identus-docs/tutorials/dids/update"}},a={},l=[{value:"Roles",id:"roles",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"DID Controller interactions",id:"did-controller-interactions",level:2},{value:"1. Check existing DID on the Cloud Agent",id:"1-check-existing-did-on-the-cloud-agent",level:3},{value:"2. Create the Cloud Agent managed DID using DID registrar endpoint",id:"2-create-the-cloud-agent-managed-did-using-did-registrar-endpoint",level:3},{value:"3. List the created DID",id:"3-list-the-created-did",level:3},{value:"4. Resolution of the created DID",id:"4-resolution-of-the-created-did",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"create-did",children:"Create DID"}),"\n",(0,d.jsxs)(n.p,{children:["PRISM DIDs are a type of ",(0,d.jsx)(n.a,{href:"/docs/concepts/glossary#decentralized-identifier",children:"decentralized identifier (DID)"})," used across the Atala PRISM product suite."]}),"\n",(0,d.jsxs)(n.p,{children:["It is a variation of a ",(0,d.jsx)(n.a,{href:"https://identity.foundation/sidetree/spec/",children:"sidetree protocol"})," and uses the Cardano blockchain as the underlying ledger for ",(0,d.jsx)(n.a,{href:"/docs/concepts/glossary#did-resolution",children:"DID resolution"})," and operation publication.\nPlease refer to the ",(0,d.jsx)(n.a,{href:"https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md",children:"PRISM method specification"})," for a more detailed explanation of how it works."]}),"\n",(0,d.jsxs)(n.p,{children:["PRISM DIDs can be created entirely offline without interacting with the blockchain by constructing a DID create-operation, a ",(0,d.jsx)(n.a,{href:"/docs/concepts/glossary#protocol-buffer",children:"protocol buffer (protobuf)"})," message with a set of public keys and services.\nOnce the create-operation gets constructed, deriving a DID from this operation is possible, which is well-defined by the ",(0,d.jsx)(n.a,{href:"https://github.com/input-output-hk/prism-did-method-spec/blob/main/w3c-spec/PRISM-method.md",children:"PRISM DID method"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.a,{href:"/docs/concepts/glossary#did-controller",children:"DID Controller"})," is the organization or individual who has control of the DID."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsx)(n.li,{children:"DID Controller Cloud Agent up and running"}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsx)(n.p,{children:"For this example, a PRISM DID gets created and stored inside the Cloud Agent along with the private keys. It is not automatically published.\nThe Agent will keep track of private keys used for the create-operation and the content of the operation itself."}),"\n",(0,d.jsx)(n.p,{children:"The Cloud Agent provides two endpoint groups to facilitate PRISM DID usage."}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/dids/*"}),"\nfacilitate of low-level interactions between DID operations and the blockchain.\nThe DID controllers will handle key management independently and use these endpoints for blockchain interaction."]}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"/did-registrar/*"}),"\nFacilitates a higher-level interaction with PRISM DID, where the Cloud Agent handles key management concerns."]}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,d.jsx)(n.p,{children:"The example uses the following endpoints"}),"\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Endpoint"}),(0,d.jsx)(n.th,{children:"Description"}),(0,d.jsx)(n.th,{children:"Role"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/agent-api/#tag/DID-Registrar/operation/listManagedDid",children:(0,d.jsx)(n.code,{children:"GET /did-registrar/dids"})})}),(0,d.jsx)(n.td,{children:"List all DIDs stored in the Cloud Agent"}),(0,d.jsx)(n.td,{children:"DID Controller"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/agent-api/#tag/DID-Registrar/operation/createManagedDid",children:(0,d.jsx)(n.code,{children:"POST /did-registrar/dids"})})}),(0,d.jsx)(n.td,{children:"Create a new PRISM DID to be managed by the Cloud Agent"}),(0,d.jsx)(n.td,{children:"DID Controller"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/agent-api/#tag/DID/operation/getDid",children:(0,d.jsx)(n.code,{children:"GET /dids/{didRef}"})})}),(0,d.jsx)(n.td,{children:"Resolve a DID to DID document representation"}),(0,d.jsx)(n.td,{children:"DID Controller"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"did-controller-interactions",children:"DID Controller interactions"}),"\n",(0,d.jsx)(n.h3,{id:"1-check-existing-did-on-the-cloud-agent",children:"1. Check existing DID on the Cloud Agent"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl --location --request GET 'http://localhost:8080/cloud-agent/did-registrar/dids' \\\n  --header \"apikey: $API_KEY\" \\\n  --header 'Accept: application/json'\n"})}),"\n",(0,d.jsx)(n.p,{children:"The result should show an empty list, as no DIDs exist on this Cloud Agent instance."}),"\n",(0,d.jsx)(n.h3,{id:"2-create-the-cloud-agent-managed-did-using-did-registrar-endpoint",children:"2. Create the Cloud Agent managed DID using DID registrar endpoint"}),"\n",(0,d.jsxs)(n.p,{children:["The DID controller can create a new DID by sending a ",(0,d.jsx)(n.a,{href:"/docs/concepts/glossary#did-document",children:"DID document"})," template to the Agent.\nSince key pairs are generated and managed by the Cloud Agent, DID controller only has to specify the key ",(0,d.jsx)(n.code,{children:"id"}),",\n",(0,d.jsx)(n.code,{children:"purpose"})," (",(0,d.jsx)(n.code,{children:"authentication"}),", ",(0,d.jsx)(n.code,{children:"assertionMethod"}),", etc.), and optional ",(0,d.jsx)(n.code,{children:"curve"})," (",(0,d.jsx)(n.code,{children:"secp256k1"}),", ",(0,d.jsx)(n.code,{children:"Ed25519"}),", ",(0,d.jsx)(n.code,{children:"X25519"}),").\nIf the ",(0,d.jsx)(n.code,{children:"curve"})," is omitted, the agent uses the ",(0,d.jsx)(n.code,{children:"secp256k1"})," curve by default."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:'curl --location --request POST \'http://localhost:8080/cloud-agent/did-registrar/dids\' \\\n  --header \'Content-Type: application/json\' \\\n  --header \'Accept: application/json\' \\\n  --header "apikey: $API_KEY" \\\n  --data-raw \'{\n    "documentTemplate": {\n      "publicKeys": [\n        {\n          "id": "auth-1",\n          "purpose": "authentication",\n          "curve": "secp256k1"\n        }\n      ],\n      "services": []\n    }\n  }\'\n'})}),"\n",(0,d.jsx)(n.p,{children:"The response should look like"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "longFormDid": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff:Cr4BCrsBElsKBmF1dGgtMRAEQk8KCXNlY3AyNTZrMRIg0opTuxu-zt6aRbT1tPniG4eu4CYsQPM3rrLzvzNiNgwaIIFTnyT2N4U7qCQ78qtWC3-p0el6Hvv8qxG5uuEw-WgMElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIKhBU0eCOO6Vinz_8vhtFSAhYYqrkEXC8PHGxkuIUev8GiAydFHLXb7c22A1Uj_PR21NZp6BCDQqNq2xd244txRgsQ"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"3-list-the-created-did",children:"3. List the created DID"}),"\n",(0,d.jsxs)(n.p,{children:["Check the ",(0,d.jsx)(n.code,{children:"GET /did-registrar/dids"})," endpoint. The response should return a list containing one DID."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "contents": [\n        {\n            "did": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff",\n            "longFormDid": "did:prism:4a5b5cf0a513e83b598bbea25cd6196746747f361a73ef77068268bc9bd732ff:Cr4BCrsBElsKBmF1dGgtMRAEQk8KCXNlY3AyNTZrMRIg0opTuxu-zt6aRbT1tPniG4eu4CYsQPM3rrLzvzNiNgwaIIFTnyT2N4U7qCQ78qtWC3-p0el6Hvv8qxG5uuEw-WgMElwKB21hc3RlcjAQAUJPCglzZWNwMjU2azESIKhBU0eCOO6Vinz_8vhtFSAhYYqrkEXC8PHGxkuIUev8GiAydFHLXb7c22A1Uj_PR21NZp6BCDQqNq2xd244txRgsQ",\n            "status": "CREATED"\n        }\n    ],\n    "kind": "ManagedDIDPage",\n    "pageOf": "http://localhost:8080/cloud-agent/did-registrar/dids",\n    "self": "http://localhost:8080/cloud-agent/did-registrar/dids"\n}\n'})}),"\n",(0,d.jsx)(n.h3,{id:"4-resolution-of-the-created-did",children:"4. Resolution of the created DID"}),"\n",(0,d.jsx)(n.p,{children:"To check that the DID document is correctly populated, test the created DID against the resolution endpoint."}),"\n",(0,d.jsxs)(n.p,{children:["Replacing the ",(0,d.jsx)(n.code,{children:"{didRef}"})," with the long-form DID, and the response should return the DID document.\nReplacing the ",(0,d.jsx)(n.code,{children:"{didRef}"})," with the short-form DID, and the resolution should fail since the DID still needs to be published."]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-bash",children:"curl --location --request GET 'http://localhost:8080/cloud-agent/dids/{didRef}' \\\n--header \"apikey: $API_KEY\" \\\n--header 'Accept: */*'\n"})}),"\n",(0,d.jsx)(n.p,{children:"Example DID document response (some fields omitted for readability)"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-json",children:'{\n    "@context": "https://w3id.org/did-resolution/v1",\n    "didDocument": {\n        "@context": ["https://www.w3.org/ns/did/v1"],\n        ...\n        "id": "did:prism:62675a438616773280f70e4f4d1047133fc56bb183758fcccd5d5714ea5b1959:Cr0BCroBEloKBWtleS0xEARCTwoJc2VjcDI1NmsxEiDRh7iIj8WKJ28nde1uc6ZnEBWIwEVMXlIEmrqCo-bE5Bogn6o2TzP0HzekLOhA-06MrIpOuaaHL_Rhy01wyjV4ypsSXAoHbWFzdGVyMBABQk8KCXNlY3AyNTZrMRIg0y28R1CS3F0-kwNcQShdRhtcvz-LQlI86z1DIYrKM7oaIPkmCAegj-sSaAy0zTxrR9F4TSXB-62vCQxIsEovkEcA",\n        "verificationMethod": [\n            {...}\n        ],\n    },\n    "didDocumentMetadata": {...},\n    "didResolutionMetadata": {...}\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var d=t(96540);const i={},s=d.createContext(i);function r(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);
"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[5171],{61029:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>o,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var n=d(74848),t=d(28453);const i={},r="Interface: Castor",l={id:"sdk/interfaces/Domain.Castor",title:"Domain.Castor",description:"@atala/prism-wallet-sdk / Exports / Domain / Castor",source:"@site/identus-edge-agent-sdk-ts/docs/sdk/interfaces/Domain.Castor.md",sourceDirName:"sdk/interfaces",slug:"/sdk/interfaces/Domain.Castor",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"AttachmentLinkData",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.AttachmentLinkData"},next:{title:"CredentialIssueOptions",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.CredentialIssueOptions"}},c={},a=[{value:"Implemented by",id:"implemented-by",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Methods",id:"methods",level:3},{value:"Methods",id:"methods-1",level:2},{value:"createPeerDID",id:"createpeerdid",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"createPrismDID",id:"createprismdid",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"getEcnumbasis",id:"getecnumbasis",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-2",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"parseDID",id:"parsedid",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Defined in",id:"defined-in-3",level:4},{value:"resolveDID",id:"resolvedid",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Defined in",id:"defined-in-4",level:4},{value:"verifySignature",id:"verifysignature",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Defined in",id:"defined-in-5",level:4}];function h(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/",children:"@atala/prism-wallet-sdk"})," / ",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules",children:"Exports"})," / ",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules/Domain",children:"Domain"})," / Castor"]}),"\n",(0,n.jsx)(s.h1,{id:"interface-castor",children:"Interface: Castor"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules/Domain",children:"Domain"}),".Castor"]}),"\n",(0,n.jsx)(s.h2,{id:"implemented-by",children:"Implemented by"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Castor",children:(0,n.jsx)(s.code,{children:"Castor"})})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,n.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#createpeerdid",children:"createPeerDID"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#createprismdid",children:"createPrismDID"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#getecnumbasis",children:"getEcnumbasis"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#parsedid",children:"parseDID"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#resolvedid",children:"resolveDID"})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Castor#verifysignature",children:"verifySignature"})}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"methods-1",children:"Methods"}),"\n",(0,n.jsx)(s.h3,{id:"createpeerdid",children:"createPeerDID"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"createPeerDID"}),"(",(0,n.jsx)(s.code,{children:"publicKeys"}),", ",(0,n.jsx)(s.code,{children:"services"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"publicKeys"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.PublicKey",children:(0,n.jsx)(s.code,{children:"PublicKey"})}),"[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"services"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.Service",children:(0,n.jsx)(s.code,{children:"Service"})}),"[]"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L11",children:"src/domain/buildingBlocks/Castor.ts:11"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"createprismdid",children:"createPrismDID"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"createPrismDID"}),"(",(0,n.jsx)(s.code,{children:"masterPublicKey"}),", ",(0,n.jsx)(s.code,{children:"services?"}),", ",(0,n.jsx)(s.code,{children:"authenticationKeys?"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"masterPublicKey"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.PublicKey",children:(0,n.jsx)(s.code,{children:"PublicKey"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"services?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.Service",children:(0,n.jsx)(s.code,{children:"Service"})}),"[]"]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"authenticationKeys?"})}),(0,n.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.PublicKey",children:(0,n.jsx)(s.code,{children:"PublicKey"})})," | ",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.KeyPair",children:(0,n.jsx)(s.code,{children:"KeyPair"})}),")[]"]})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L6",children:"src/domain/buildingBlocks/Castor.ts:6"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"getecnumbasis",children:"getEcnumbasis"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"getEcnumbasis"}),"(",(0,n.jsx)(s.code,{children:"did"}),", ",(0,n.jsx)(s.code,{children:"publicKey"}),"): ",(0,n.jsx)(s.code,{children:"string"})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"did"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"publicKey"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.PublicKey",children:(0,n.jsx)(s.code,{children:"PublicKey"})})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:"string"})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L21",children:"src/domain/buildingBlocks/Castor.ts:21"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"parsedid",children:"parseDID"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"parseDID"}),"(",(0,n.jsx)(s.code,{children:"did"}),"): ",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})})]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"did"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})})}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L5",children:"src/domain/buildingBlocks/Castor.ts:5"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"resolvedid",children:"resolveDID"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"resolveDID"}),"(",(0,n.jsx)(s.code,{children:"did"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DIDDocument",children:(0,n.jsx)(s.code,{children:"DIDDocument"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"did"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"string"})})]})})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DIDDocument",children:(0,n.jsx)(s.code,{children:"DIDDocument"})}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L15",children:"src/domain/buildingBlocks/Castor.ts:15"})}),"\n",(0,n.jsx)(s.hr,{}),"\n",(0,n.jsx)(s.h3,{id:"verifysignature",children:"verifySignature"}),"\n",(0,n.jsxs)(s.p,{children:["\u25b8 ",(0,n.jsx)(s.strong,{children:"verifySignature"}),"(",(0,n.jsx)(s.code,{children:"did"}),", ",(0,n.jsx)(s.code,{children:"challenge"}),", ",(0,n.jsx)(s.code,{children:"signature"}),"): ",(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,n.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"did"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,n.jsx)(s.code,{children:"DID"})})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"challenge"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Uint8Array"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"signature"})}),(0,n.jsx)(s.td,{style:{textAlign:"left"},children:(0,n.jsx)(s.code,{children:"Uint8Array"})})]})]})]}),"\n",(0,n.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"Promise"}),"<",(0,n.jsx)(s.code,{children:"boolean"}),">"]}),"\n",(0,n.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/domain/buildingBlocks/Castor.ts#L16",children:"src/domain/buildingBlocks/Castor.ts:16"})})]})}function o(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>l});var n=d(96540);const t={},i=n.createContext(t);function r(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);
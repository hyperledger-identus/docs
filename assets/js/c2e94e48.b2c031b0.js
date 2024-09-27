"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[6643],{31134:(e,s,d)=>{d.r(s),d.d(s,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var i=d(74848),n=d(28453);const t={},r="Class: BasicMediatorHandler",a={id:"sdk/classes/BasicMediatorHandler",title:"BasicMediatorHandler",description:"@atala/prism-wallet-sdk / Exports / BasicMediatorHandler",source:"@site/identus-edge-agent-sdk-ts/docs/sdk/classes/BasicMediatorHandler.md",sourceDirName:"sdk/classes",slug:"/sdk/classes/BasicMediatorHandler",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Apollo",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Apollo"},next:{title:"BasicMessage",permalink:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMessage"}},l={},c=[{value:"Implements",id:"implements",level:2},{value:"Table of contents",id:"table-of-contents",level:2},{value:"Constructors",id:"constructors",level:3},{value:"Properties",id:"properties",level:3},{value:"Methods",id:"methods",level:3},{value:"Constructors",id:"constructors-1",level:2},{value:"constructor",id:"constructor",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Defined in",id:"defined-in",level:4},{value:"Properties",id:"properties-1",level:2},{value:"mediator",id:"mediator",level:3},{value:"Implementation of",id:"implementation-of",level:4},{value:"Defined in",id:"defined-in-1",level:4},{value:"mediatorDID",id:"mediatordid",level:3},{value:"Implementation of",id:"implementation-of-1",level:4},{value:"Defined in",id:"defined-in-2",level:4},{value:"mercury",id:"mercury",level:3},{value:"Defined in",id:"defined-in-3",level:4},{value:"store",id:"store",level:3},{value:"Defined in",id:"defined-in-4",level:4},{value:"Methods",id:"methods-1",level:2},{value:"achieveMediation",id:"achievemediation",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Implementation of",id:"implementation-of-2",level:4},{value:"Defined in",id:"defined-in-5",level:4},{value:"bootRegisteredMediator",id:"bootregisteredmediator",level:3},{value:"Returns",id:"returns-2",level:4},{value:"Implementation of",id:"implementation-of-3",level:4},{value:"Defined in",id:"defined-in-6",level:4},{value:"listenUnreadMessages",id:"listenunreadmessages",level:3},{value:"Parameters",id:"parameters-2",level:4},{value:"Returns",id:"returns-3",level:4},{value:"Implementation of",id:"implementation-of-4",level:4},{value:"Defined in",id:"defined-in-7",level:4},{value:"pickupUnreadMessages",id:"pickupunreadmessages",level:3},{value:"Parameters",id:"parameters-3",level:4},{value:"Returns",id:"returns-4",level:4},{value:"Implementation of",id:"implementation-of-5",level:4},{value:"Defined in",id:"defined-in-8",level:4},{value:"registerMessagesAsRead",id:"registermessagesasread",level:3},{value:"Parameters",id:"parameters-4",level:4},{value:"Returns",id:"returns-5",level:4},{value:"Implementation of",id:"implementation-of-6",level:4},{value:"Defined in",id:"defined-in-9",level:4},{value:"updateKeyListWithDIDs",id:"updatekeylistwithdids",level:3},{value:"Parameters",id:"parameters-5",level:4},{value:"Returns",id:"returns-6",level:4},{value:"Implementation of",id:"implementation-of-7",level:4},{value:"Defined in",id:"defined-in-10",level:4},{value:"fromMediator",id:"frommediator",level:3},{value:"Parameters",id:"parameters-6",level:4},{value:"Returns",id:"returns-7",level:4},{value:"Defined in",id:"defined-in-11",level:4}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/",children:"@atala/prism-wallet-sdk"})," / ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/modules",children:"Exports"})," / BasicMediatorHandler"]}),"\n",(0,i.jsx)(s.h1,{id:"class-basicmediatorhandler",children:"Class: BasicMediatorHandler"}),"\n",(0,i.jsx)(s.p,{children:"A basic implementation of our MediatorHandler Interface which is mainly used\nto establish mediation and get new messages using the mediation and pickup didcomm v2 protocols"}),"\n",(0,i.jsx)(s.p,{children:"BasicMediatorHandler"}),"\n",(0,i.jsx)(s.h2,{id:"implements",children:"Implements"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:(0,i.jsx)(s.code,{children:"MediatorHandler"})})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"table-of-contents",children:"Table of contents"}),"\n",(0,i.jsx)(s.h3,{id:"constructors",children:"Constructors"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#constructor",children:"constructor"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"properties",children:"Properties"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#mediator",children:"mediator"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#mediatordid",children:"mediatorDID"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#mercury",children:"mercury"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#store",children:"store"})}),"\n"]}),"\n",(0,i.jsx)(s.h3,{id:"methods",children:"Methods"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#achievemediation",children:"achieveMediation"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#bootregisteredmediator",children:"bootRegisteredMediator"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#listenunreadmessages",children:"listenUnreadMessages"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#pickupunreadmessages",children:"pickupUnreadMessages"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#registermessagesasread",children:"registerMessagesAsRead"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#updatekeylistwithdids",children:"updateKeyListWithDIDs"})}),"\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler#frommediator",children:"fromMediator"})}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"constructors-1",children:"Constructors"}),"\n",(0,i.jsx)(s.h3,{id:"constructor",children:"constructor"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"new BasicMediatorHandler"}),"(",(0,i.jsx)(s.code,{children:"mediatorDID"}),", ",(0,i.jsx)(s.code,{children:"mercury"}),", ",(0,i.jsx)(s.code,{children:"store"}),"): ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler",children:(0,i.jsx)(s.code,{children:"BasicMediatorHandler"})})]}),"\n",(0,i.jsx)(s.p,{children:"Creates an instance of BasicMediatorHandler."}),"\n",(0,i.jsx)(s.h4,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"mediatorDID"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,i.jsx)(s.code,{children:"DID"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"mercury"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mercury",children:(0,i.jsx)(s.code,{children:"Mercury"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"store"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/MediatorStore",children:(0,i.jsx)(s.code,{children:"MediatorStore"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler",children:(0,i.jsx)(s.code,{children:"BasicMediatorHandler"})})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L41",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:41"})}),"\n",(0,i.jsx)(s.h2,{id:"properties-1",children:"Properties"}),"\n",(0,i.jsx)(s.h3,{id:"mediator",children:"mediator"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.code,{children:"Optional"})," ",(0,i.jsx)(s.strong,{children:"mediator"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})})]}),"\n",(0,i.jsx)(s.p,{children:"Optional instance of the mediator so that if the mediation was already\nestablished and recorded we don't need to mediate again with the same mediator"}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#mediator",children:"mediator"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-1",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L31",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:31"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mediatordid",children:"mediatorDID"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"mediatorDID"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,i.jsx)(s.code,{children:"DID"})})]}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-1",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#mediatordid",children:"mediatorDID"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-2",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L42",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:42"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"mercury",children:"mercury"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"mercury"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mercury",children:(0,i.jsx)(s.code,{children:"Mercury"})})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-3",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L43",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:43"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"store",children:"store"}),"\n",(0,i.jsxs)(s.p,{children:["\u2022 ",(0,i.jsx)(s.strong,{children:"store"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/MediatorStore",children:(0,i.jsx)(s.code,{children:"MediatorStore"})})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-4",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L44",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:44"})}),"\n",(0,i.jsx)(s.h2,{id:"methods-1",children:"Methods"}),"\n",(0,i.jsx)(s.h3,{id:"achievemediation",children:"achieveMediation"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"achieveMediation"}),"(",(0,i.jsx)(s.code,{children:"host"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Asyncronously achieve mediation by specifying the HOST DID, this will\nexchange the mediation protocol messages between the user and the mediator until established"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-1",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"host"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,i.jsx)(s.code,{children:"DID"})})})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-1",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-2",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#achievemediation",children:"achieveMediation"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-5",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L96",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:96"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"bootregisteredmediator",children:"bootRegisteredMediator"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"bootRegisteredMediator"}),"(): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"undefined"})," | ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Will asyncronously fetch the first mediator stored in database and set it as default mediator."}),"\n",(0,i.jsx)(s.h4,{id:"returns-2",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"undefined"})," | ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-3",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#bootregisteredmediator",children:"bootRegisteredMediator"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-6",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L77",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:77"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"listenunreadmessages",children:"listenUnreadMessages"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"listenUnreadMessages"}),"(",(0,i.jsx)(s.code,{children:"signal"}),", ",(0,i.jsx)(s.code,{children:"serviceEndpointUri"}),", ",(0,i.jsx)(s.code,{children:"onMessage"}),"): ",(0,i.jsx)(s.code,{children:"void"})]}),"\n",(0,i.jsx)(s.p,{children:"Asyncronously create a websocket connection with the mediator\nEstablish a websocket connection and activate the live-mode with the mediator\nand also listen for incomming unread messages with existing protocols."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-2",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"signal"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"AbortSignal"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"serviceEndpointUri"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"string"})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"onMessage"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:["(",(0,i.jsx)(s.code,{children:"messages"}),": { ",(0,i.jsx)(s.code,{children:"attachmentId"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"message"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.Message-1",children:(0,i.jsx)(s.code,{children:"Message"})}),"  }[]) => ",(0,i.jsx)(s.code,{children:"void"})," | ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-3",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.code,{children:"void"})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-4",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#listenunreadmessages",children:"listenUnreadMessages"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-7",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L196",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:196"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"pickupunreadmessages",children:"pickupUnreadMessages"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"pickupUnreadMessages"}),"(",(0,i.jsx)(s.code,{children:"limit"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<{ ",(0,i.jsx)(s.code,{children:"attachmentId"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"message"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.Message-1",children:(0,i.jsx)(s.code,{children:"Message"})}),"  }[]>"]}),"\n",(0,i.jsx)(s.p,{children:"Asyncronously pickup unread messages from the mediator\nif new messages are found, because the messages from in form of attachments inside the pickup response\nwe need to parse those and return the user a list of messages it can read and decode, this is done inside the pickup runner."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-3",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"limit"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"number"})})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-4",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<{ ",(0,i.jsx)(s.code,{children:"attachmentId"}),": ",(0,i.jsx)(s.code,{children:"string"})," ; ",(0,i.jsx)(s.code,{children:"message"}),": ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.Message-1",children:(0,i.jsx)(s.code,{children:"Message"})}),"  }[]>"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-5",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#pickupunreadmessages",children:"pickupUnreadMessages"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-8",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L166",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:166"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"registermessagesasread",children:"registerMessagesAsRead"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"registerMessagesAsRead"}),"(",(0,i.jsx)(s.code,{children:"ids"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Asyncronously notify the current mediator that one or multiple message ID's have been read (or stored)"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-4",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"ids"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.code,{children:"string"}),"[]"]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-5",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-6",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#registermessagesasread",children:"registerMessagesAsRead"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-9",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L251",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:251"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"updatekeylistwithdids",children:"updateKeyListWithDIDs"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"updateKeyListWithDIDs"}),"(",(0,i.jsx)(s.code,{children:"dids"}),"): ",(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.p,{children:"Asyncronously update the mediator with the new keyList, used during the mediation process or during DID Rotation"}),"\n",(0,i.jsx)(s.h4,{id:"parameters-5",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"dids"})}),(0,i.jsxs)(s.td,{style:{textAlign:"left"},children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/Domain.DID",children:(0,i.jsx)(s.code,{children:"DID"})}),"[]"]})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-6",children:"Returns"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.code,{children:"Promise"}),"<",(0,i.jsx)(s.code,{children:"void"}),">"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Async"})})}),"\n",(0,i.jsx)(s.h4,{id:"implementation-of-7",children:"Implementation of"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler",children:"MediatorHandler"}),".",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/MediatorHandler#updatekeylistwithdids",children:"updateKeyListWithDIDs"})]}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-10",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L145",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:145"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.h3,{id:"frommediator",children:"fromMediator"}),"\n",(0,i.jsxs)(s.p,{children:["\u25b8 ",(0,i.jsx)(s.strong,{children:"fromMediator"}),"(",(0,i.jsx)(s.code,{children:"mediator"}),", ",(0,i.jsx)(s.code,{children:"mercury"}),", ",(0,i.jsx)(s.code,{children:"store"}),"): ",(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler",children:(0,i.jsx)(s.code,{children:"BasicMediatorHandler"})})]}),"\n",(0,i.jsx)(s.p,{children:"Secondary constructor for BasicMediation Handler, to instanciate if from an existing Mediator\ninstance."}),"\n",(0,i.jsx)(s.h4,{id:"parameters-6",children:"Parameters"}),"\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Name"}),(0,i.jsx)(s.th,{style:{textAlign:"left"},children:"Type"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"mediator"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mediator",children:(0,i.jsx)(s.code,{children:"Mediator"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"mercury"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/Domain.Mercury",children:(0,i.jsx)(s.code,{children:"Mercury"})})})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.code,{children:"store"})}),(0,i.jsx)(s.td,{style:{textAlign:"left"},children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/interfaces/MediatorStore",children:(0,i.jsx)(s.code,{children:"MediatorStore"})})})]})]})]}),"\n",(0,i.jsx)(s.h4,{id:"returns-7",children:"Returns"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"/identus-docs/identus-edge-agent-sdk-ts/sdk/classes/BasicMediatorHandler",children:(0,i.jsx)(s.code,{children:"BasicMediatorHandler"})})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:(0,i.jsx)(s.code,{children:"Static"})})}),"\n",(0,i.jsx)(s.h4,{id:"defined-in-11",children:"Defined in"}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.a,{href:"https://github.com/input-output-hk/atala-prism-wallet-sdk-ts/blob/1ffdae52df023bad4ba1a76cf6d76793dfc29b80/src/edge-agent/mediator/BasicMediatorHandler.ts#L57",children:"src/edge-agent/mediator/BasicMediatorHandler.ts:57"})})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},28453:(e,s,d)=>{d.d(s,{R:()=>r,x:()=>a});var i=d(96540);const n={},t=i.createContext(n);function r(e){const s=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(t.Provider,{value:s},e.children)}}}]);
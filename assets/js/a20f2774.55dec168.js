"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[4480],{65508:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>d,metadata:()=>o,toc:()=>h});var s=i(74848),t=i(28453),r=i(11470),a=i(19365);const d={},l="Issue credentials (Connectionless)",o={id:"credentials/connectionless/issue",title:"Issue credentials (Connectionless)",description:"In the Identus Platform, the Issue Credentials Protocol allows you to create, retrieve, and manage issued verifiable credentials (VCs) between a VC issuer and a VC holder.",source:"@site/cloud-agent/docs/docusaurus/credentials/connectionless/issue.md",sourceDirName:"credentials/connectionless",slug:"/credentials/connectionless/issue",permalink:"/docs/tutorials/credentials/connectionless/issue",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Issue credentials (DIDComm)",permalink:"/docs/tutorials/credentials/didcomm/issue"},next:{title:"Issue credentials (OID4VCI)",permalink:"/docs/tutorials/credentials/oid4vci/issue"}},c={},h=[{value:"Roles",id:"roles",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Issuer interactions",id:"issuer-interactions",level:2},{value:"Creating a Credential Offer",id:"creating-a-credential-offer",level:3},{value:"Sending the Offer to the Holder",id:"sending-the-offer-to-the-holder",level:3},{value:"Issuing the Credential",id:"issuing-the-credential",level:3},{value:"Holder interactions",id:"holder-interactions",level:2},{value:"Receiving the VC Offer",id:"receiving-the-vc-offer",level:3},{value:"Approving the VC Offer",id:"approving-the-vc-offer",level:3},{value:"Receiving the VC Credential",id:"receiving-the-vc-credential",level:3},{value:"Sequence diagram",id:"sequence-diagram",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"issue-credentials-connectionless",children:"Issue credentials (Connectionless)"}),"\n",(0,s.jsxs)(n.p,{children:["In the Identus Platform, the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#issue-credential-protocol",children:"Issue Credentials Protocol"})," allows you to create, retrieve, and manage issued ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#verifiable-credentials",children:"verifiable credentials (VCs)"})," between a VC issuer and a VC holder."]}),"\n",(0,s.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,s.jsx)(n.p,{children:"In the Issue Credentials Protocol, there are two roles:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#issuer",children:"Issuer"})," is responsible for creating a new credential offer, sending it to a Holder, and issuing the VC once the offer is accepted."]}),"\n",(0,s.jsxs)(n.li,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#holder",children:"Holder"})," is responsible for accepting a credential offer from an issuer and receiving the VC."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The Issuer and Holder interact with the Identus Cloud Agent API to perform the operations defined in the protocol."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.p,{children:'Before using the "Connectionless" Issuing Credentials protocol, the following conditions must be present:'}),"\n",(0,s.jsxs)(r.A,{groupId:"vc-formats",children:[(0,s.jsx)(a.A,{value:"jwt",label:"JWT",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Issuer Cloud Agents is up and running"}),"\n",(0,s.jsxs)(n.li,{children:["The Issuer has a published PRISM DID, and the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#did-document",children:"DID document"})," must have at least one ",(0,s.jsx)(n.code,{children:"assertionMethod"})," key for issuing credentials (see ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/create",children:"Create DID"})," and ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/publish",children:"Publish DID"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"The Holder is either another Cloud Agent or Edge Agent SDK"}),"\n"]})}),(0,s.jsx)(a.A,{value:"anoncreds",label:"AnonCreds",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Issuer Cloud Agents is up and running"}),"\n",(0,s.jsxs)(n.li,{children:["The Issuer has a published PRISM DID, and the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#did-document",children:"DID document"})," must have at least one ",(0,s.jsx)(n.code,{children:"assertionMethod"})," key for issuing credentials (see ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/create",children:"Create DID"})," and ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/publish",children:"Publish DID"}),")"]}),"\n",(0,s.jsxs)(n.li,{children:["The Issuer must have created an AnonCreds Credential Definition as described ",(0,s.jsx)(n.a,{href:"/docs/tutorials/credentialdefinition/create",children:"here"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"The Holder is either another Cloud Agent or Edge Agent SDK"}),"\n"]})}),(0,s.jsxs)(a.A,{value:"sdjwt",label:"SDJWT",children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udccc ",(0,s.jsx)(n.strong,{children:"Note:"})," Currently we only support ",(0,s.jsx)(n.code,{children:"Ed25519"})," curve"]}),"\n"]}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Issuer Cloud Agents is up and running"}),"\n",(0,s.jsxs)(n.li,{children:["The Issuer has a published PRISM DID, and the ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#did-document",children:"DID document"})," must have at least one ",(0,s.jsx)(n.code,{children:"assertionMethod"})," key for issuing credentials (see ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/create",children:"Create DID"})," and ",(0,s.jsx)(n.a,{href:"/docs/tutorials/dids/publish",children:"Publish DID"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"The Holder is either another Cloud Agent or Edge Agent SDK"}),"\n",(0,s.jsxs)(n.li,{children:["The Holder must have a PRISM DID, and the DID document must have at least one ",(0,s.jsx)(n.code,{children:"authentication"})," key for presenting the proof and the curve must be ",(0,s.jsx)(n.code,{children:"Ed25519"}),"."]}),"\n"]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"The protocol described is a VC issuance process between an Issuer (Identus Cloud Agent) and Holder (Identus Edge Agent SDK)."}),"\n",(0,s.jsx)(n.p,{children:"The protocol consists of the following main parts:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["The Issuer creates a new credential offer using the ",(0,s.jsx)(n.a,{href:"/identus-docs/agent-api/#tag/Issue-Credentials-Protocol/operation/createCredentialOffer",children:(0,s.jsx)(n.code,{children:"/issue-credentials/credential-offers/invitation"})})," endpoint, which includes information such as the schema identifier and claims. This returns a unique OOB (out-of-band) invitate code for the prospective Holder."]}),"\n",(0,s.jsxs)(n.li,{children:["The Holder accepts the OOB invite (see SDK ",(0,s.jsx)(n.code,{children:"acceptInvitation"}),")"]}),"\n",(0,s.jsx)(n.li,{children:"The Issuer responds by sending the actual Credential Offer"}),"\n",(0,s.jsx)(n.li,{children:"The Holder accepts the Credential Offer"}),"\n",(0,s.jsx)(n.li,{children:"The Issuer sends the Verifiable Credential"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"The claims provide specific information about the individual, such as their name or qualifications."}),"\n",(0,s.jsx)(n.p,{children:"This protocol is applicable in various real-life scenarios, such as educational credentialing, employment verification, and more.\nIn these scenarios, the Issuer could be a school, an employer, etc., and the Holder could be a student or an employee.\nThe VCs issued during this protocol could represent a diploma, a certificate of employment, etc."}),"\n",(0,s.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Endpoint"}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{children:"Role"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/createCredentialOffer",children:(0,s.jsx)(n.code,{children:"/issue-credentials/credential-offers/invitation"})})}),(0,s.jsx)(n.td,{children:"This endpoint allows you to create a new credential offer invitation"}),(0,s.jsx)(n.td,{children:"Issuer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/acceptCredentialOfferInvitation",children:(0,s.jsx)(n.code,{children:"/issue-credentials/credential-offers/accept-invitation"})})}),(0,s.jsx)(n.td,{children:"This endpoint allows you to accept the invitation"}),(0,s.jsx)(n.td,{children:"Holder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/getCredentialRecords",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records"})})}),(0,s.jsx)(n.td,{children:"This endpoint allows you to retrieve a collection of all the existing credential records"}),(0,s.jsx)(n.td,{children:"Issuer, Holder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/getCredentialRecord",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}"})})}),(0,s.jsxs)(n.td,{children:["This endpoint allows you to retrieve a specific credential record by its ",(0,s.jsx)(n.code,{children:"id"})]}),(0,s.jsx)(n.td,{children:"Issuer, Holder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/acceptCredentialOffer",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}/accept-offer"})})}),(0,s.jsx)(n.td,{children:"This endpoint allows you to accept a credential offer"}),(0,s.jsx)(n.td,{children:"Holder"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/issueCredential",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}/issue-credential"})})}),(0,s.jsx)(n.td,{children:"This endpoint allows you to issue a VC for a specific credential record."}),(0,s.jsx)(n.td,{children:"Issuer"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Please check the full ",(0,s.jsx)(n.a,{href:"/agent-api",children:"Cloud Agent API"})," specification for more detailed information."]})}),"\n",(0,s.jsx)(n.h2,{id:"issuer-interactions",children:"Issuer interactions"}),"\n",(0,s.jsx)(n.p,{children:"This section describes the Issuer role's available interactions with the Cloud Agent."}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-credential-offer",children:"Creating a Credential Offer"}),"\n",(0,s.jsxs)(n.p,{children:["To start the process, the issuer needs to create a credential offer invitation.\nTo do this, make a ",(0,s.jsx)(n.code,{children:"POST"})," request to the ",(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/createCredentialOffer",children:(0,s.jsx)(n.code,{children:"/issue-credentials/credential-offers/invitation"})})," endpoint with a JSON payload that includes the following information:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"vc-formats",children:[(0,s.jsxs)(a.A,{value:"jwt",label:"JWT",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"claims"}),": The data stored in a verifiable credential. Claims get expressed in a key-value format. The claims contain the data that the issuer attests to, such as name, address, date of birth, and so on."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issuingDID"}),": The DID referring to the issuer to issue this credential from"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schemaId"}),": An optional field that, if specified, contains a valid URL to an existing VC schema.\nThe Cloud Agent must be able to dereference the specified URL (i.e. fetch the VC schema content from it), in order to validate the provided claims against it.\nWhen not specified, the claims fields is not validated and can be any valid JSON object.\nPlease refer to the ",(0,s.jsx)(n.a,{href:"/docs/tutorials/schemas/create",children:"Create VC schema"})," doc for details on how to create a VC schema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentialFormat"}),": The format of the credential that will be issued - ",(0,s.jsx)(n.code,{children:"JWT"})," in this case. When not specified, the default value is ",(0,s.jsx)(n.code,{children:"JWT"}),"."]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"issuingDID"})," property comes from completing the pre-requisite steps listed above"]})}),(0,s.jsxs)(n.p,{children:["Once the request initiates, a new credential record for the issuer gets created with a unique ID. The state of this record is now ",(0,s.jsx)(n.code,{children:"OfferPending"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Issuer POST request to create a new credential offer\ncurl -X \'POST\' \\\n  \'http://localhost:8080/cloud-agent/issue-credentials/credential-offers/invitation\' \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "claims": {\n            "emailAddress": "alice@wonderland.com",\n            "givenName": "Alice",\n            "familyName": "Wonderland",\n            "dateOfIssuance": "2020-11-13T20:20:39+00:00",\n            "drivingLicenseID": "12345",\n            "drivingClass": 3\n          },\n          "credentialFormat": "JWT",\n          "issuingDID": "did:prism:9f847f8bbb66c112f71d08ab39930d468ccbfe1e0e1d002be53d46c431212c26",\n          "schemaId": "http://localhost:8080/cloud-agent/schema-registry/schemas/3f86a73f-5b78-39c7-af77-0c16123fa9c2"\n        }\'\n'})})]}),(0,s.jsxs)(a.A,{value:"anoncreds",label:"AnonCreds",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"claims"}),': The data stored in a verifiable credential. AnonCreds claims get expressed in a flat, "string -> string", key-value pair format. The claims contain the data that the issuer attests to, such as name, address, date of birth, and so on.']}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issuingDID"}),": The DID referring to the issuer to issue this credential from"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentialDefinitionId"}),": The unique ID of the ",(0,s.jsx)(n.a,{href:"/docs/tutorials/credentialdefinition/credential-definition",children:"credential definition"})," that has been created by the issuer as a prerequisite. Please refer to the ",(0,s.jsx)(n.a,{href:"/docs/tutorials/credentialdefinition/credential-definition",children:"Create AnonCreds Credential Definition"})," doc for details on how to create a credential definition."]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["\ud83d\udccc Note: If the credential definition was created via HTTP URL endpoint, then this credential definition will be referenced to that credential via HTTP URL, and if this credential definition was created via DID URL endpoint, then it will be referenced via DID URL, How to create credential definition for HTTP URL or DID URL is explained in ",(0,s.jsx)(n.a,{href:"/docs/tutorials/credentialdefinition/create",children:"credential definition creation guide"})]})}),(0,s.jsxs)(n.ol,{start:"4",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentialFormat"}),": The format of the credential that will be issued - ",(0,s.jsx)(n.code,{children:"AnonCreds"})," in this case."]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"issuingDID"})," and ",(0,s.jsx)(n.code,{children:"credentialDefinitionId"})," properties come from completing the pre-requisite steps listed above"]})}),(0,s.jsxs)(n.p,{children:["Once the request initiates, a new credential record for the issuer gets created with a unique ID. The state of this record is now ",(0,s.jsx)(n.code,{children:"OfferPending"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Issuer POST request to create a new credential offer\ncurl -X \'POST\' \\\n  \'http://localhost:8080/cloud-agent/issue-credentials/credential-offers/invitation\' \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "claims": {\n            "emailAddress": "alice@wonderland.com",\n            "givenName": "Alice",\n            "familyName": "Wonderland",\n            "dateOfIssuance": "2020-11-13T20:20:39+00:00",\n            "drivingLicenseID": "12345",\n            "drivingClass": "3"\n          },\n          "credentialFormat": "AnonCreds",\n          "issuingDID": "did:prism:9f847f8bbb66c112f71d08ab39930d468ccbfe1e0e1d002be53d46c431212c26",\n          "credentialDefinitionId": "5d737816-8fe8-3492-bfe3-1b3e2b67220b"\n        }\'\n'})})]}),(0,s.jsxs)(a.A,{value:"sdjwt",label:"SDJWT",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"claims"}),": The data stored in a verifiable credential. Claims get expressed in a key-value format. The claims contain the data that the issuer attests to, such as name, address, date of birth, and so on."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"issuingDID"}),": The DID referring to the issuer to issue this credential from"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"schemaId"}),": An optional field that, if specified, contains a valid URL to an existing VC schema.\nThe Cloud Agent must be able to dereference the specified URL (i.e. fetch the VC schema content from it), in order to validate the provided claims against it.\nWhen not specified, the claims fields is not validated and can be any valid JSON object.\nPlease refer to the ",(0,s.jsx)(n.a,{href:"/docs/tutorials/schemas/create",children:"Create VC schema"})," doc for details on how to create a VC schema."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"credentialFormat"}),": The format of the credential that will be issued - ",(0,s.jsx)(n.code,{children:"SDJWT"})," in this case."]}),"\n"]}),(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"issuingDID"})," property comes from completing the pre-requisite steps listed above"]})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\ud83d\udccc ",(0,s.jsx)(n.strong,{children:"Note:"})," Claims can also include the ",(0,s.jsx)(n.code,{children:"exp"})," Expiration Time attribute, which is part of JWT claims. ",(0,s.jsx)(n.code,{children:"exp"})," attribute is disclosable if specified and can have a value in epoch time (in seconds), indicating when the SDJWT credential expires for more details\n",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/html/rfc7519#page-9",children:"RFC5719"})]}),"\n"]}),(0,s.jsxs)(n.p,{children:["Once the request initiates, a new credential record for the issuer gets created with a unique ID. The state of this record is now ",(0,s.jsx)(n.code,{children:"OfferPending"}),"."]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Issuer POST request to create a new credential offer\ncurl -X \'POST\' \\\n  \'http://localhost:8080/cloud-agent/issue-credentials/credential-offers/invitation\' \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "claims": {\n            "emailAddress": "alice@wonderland.com",\n            "givenName": "Alice",\n            "familyName": "Wonderland",\n            "dateOfIssuance": "2020-11-13T20:20:39+00:00",\n            "drivingLicenseID": "12345",\n            "drivingClass": 3,\n            "exp" : 1883000000\n          },\n          "credentialFormat": "SDJWT",\n          "issuingDID": "did:prism:9f847f8bbb66c112f71d08ab39930d468ccbfe1e0e1d002be53d46c431212c26",\n          "schemaId": "http://localhost:8080/cloud-agent/schema-registry/schemas/3f86a73f-5b78-39c7-af77-0c16123fa9c2"\n        }\'\n'})})]})]}),"\n",(0,s.jsx)(n.h3,{id:"sending-the-offer-to-the-holder",children:"Sending the Offer to the Holder"}),"\n",(0,s.jsx)(n.p,{children:'The next step for the Issuer is to send the OOB invite Holder (by definition, this is "out of band", so not handled by Identus).\nCommon ways to convey such OOB invites might be a QR code that is scanned, or via an existing channel of connection in an application.'}),"\n",(0,s.jsx)(n.h3,{id:"issuing-the-credential",children:"Issuing the Credential"}),"\n",(0,s.jsxs)(n.p,{children:["Once the holder has approved the offer and sent a request to the Issuer,\nthe Issuer will receive the request via DIDComm and update the record state to ",(0,s.jsx)(n.code,{children:"RequestReceived."})]}),"\n",(0,s.jsxs)(n.p,{children:["The Issuer can then use the ",(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/issueCredential",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}/issue-credential"})})," endpoint to issue the credential to the holder."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Issuer POST request to issue the credential\n# make sure you have `issuer_record_id` extracted from created credential offer\n# and the record achieved `RequestReceived` state\ncurl -X POST \\\n    "http://localhost:8080/cloud-agent/issue-credentials/records/$issuer_record_id/issue-credential" \\\n    -H "Content-Type: application/json" \\\n    -H "apikey: $API_KEY"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["When this endpoint gets called, the state of the record will change to ",(0,s.jsx)(n.code,{children:"CredentialPending,"})," and after processing, it will change to ",(0,s.jsx)(n.code,{children:"CredentialGenerated."})]}),"\n",(0,s.jsxs)(n.p,{children:["Finally, the Issuer agent will send the credential to the holder via DIDComm,\nand the state of the record will change to ",(0,s.jsx)(n.code,{children:"CredentialSent"}),".\nAt this point, the Issuer's interactions with the holder are complete."]}),"\n",(0,s.jsx)(n.mermaid,{value:"---\ntitle: Issuer flow\n---\nstateDiagram-v2\n  [*] --\x3e OfferPending: create credential offer (`/issue-credentials/credential-offers`)\n  OfferPending --\x3e OfferSent: send offer (auto via PRISM Agent DIDComm)\n  OfferSent --\x3e RequestReceived: receive request (auto via PRISM Agent DIDComm)\n  RequestReceived --\x3e CredentialPending: issue credential (`/issue-credentials/records/{recordId}/issue-credential`)\n  CredentialPending --\x3e CredentialGenerated: process issued credential (auto via PRISM Agent)\n  CredentialGenerated --\x3e CredentialSent: send credential (auto via PRISM Agent)"}),"\n",(0,s.jsx)(n.h2,{id:"holder-interactions",children:"Holder interactions"}),"\n",(0,s.jsx)(n.p,{children:"This section describes the Holder role's available interactions with the Cloud Agent."}),"\n",(0,s.jsx)(n.h3,{id:"receiving-the-vc-offer",children:"Receiving the VC Offer"}),"\n",(0,s.jsxs)(n.p,{children:["The Holder will receive the offer from the Issuer via DIDComm,\nand a new credential record with a unique ID gets created in the ",(0,s.jsx)(n.code,{children:"OfferReceived"})," state."]}),"\n",(0,s.jsx)(n.p,{children:"This process is automatic for the Cloud Agent."}),"\n",(0,s.jsxs)(n.p,{children:["You could check if a new credential offer is available using ",(0,s.jsx)(n.a,{href:"/#tag/Issue-Credentials-Protocol/operation/getCredentialRecords",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records"})})," request and check for any records available in ",(0,s.jsx)(n.code,{children:"OfferReceived"})," state:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Holder GET request to retrieve credential records\ncurl "http://localhost:8090/cloud-agent/issue-credentials/records" \\\n    -H "Content-Type: application/json" \\\n    -H "apikey: $API_KEY"\n'})}),"\n",(0,s.jsx)(n.h3,{id:"approving-the-vc-offer",children:"Approving the VC Offer"}),"\n",(0,s.jsxs)(n.p,{children:["To accept the offer, the Holder can make a ",(0,s.jsx)(n.code,{children:"POST"})," request to the ",(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/acceptCredentialOffer",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}/accept-offer"})})," endpoint with a JSON payload that includes the following information:"]}),"\n",(0,s.jsxs)(r.A,{groupId:"vc-formats",children:[(0,s.jsxs)(a.A,{value:"jwt",label:"JWT",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"holder_record_id"}),": The unique identifier of the issue credential record known by the holder's Cloud Agent."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"subjectId"}),": This field represents the unique identifier for the subject of the verifiable credential. It is a short-form PRISM ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#decentralized-identifier",children:"DID"})," string, such as ",(0,s.jsx)(n.code,{children:"did:prism:subjectIdentifier"}),"."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Holder POST request to accept the credential offer\ncurl -X POST "http://localhost:8090/cloud-agent/issue-credentials/records/$holder_record_id/accept-offer" \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "subjectId": "did:prism:subjectIdentifier"\n     }\'\n'})})]}),(0,s.jsxs)(a.A,{value:"anoncreds",labal:"AnonCreds",children:[(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"holder_record_id"}),": The unique identifier of the issue credential record known by the holder's Cloud Agent."]}),"\n"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"# Holder POST request to accept the credential offer\ncurl -X POST \"http://localhost:8090/cloud-agent/issue-credentials/records/$holder_record_id/accept-offer\" \\\n    -H 'accept: application/json' \\\n    -H 'Content-Type: application/json' \\\n    -H \"apikey: $API_KEY\" \\\n    -d '{}'\n"})})]}),(0,s.jsx)(a.A,{value:"sdjwt",label:"SDJWT",children:(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"holder_record_id"}),": The unique identifier of the issue credential record known by the holder's Cloud Agent."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"subjectId"}),": This field represents the unique identifier for the subject of the verifiable credential. It is a short-form PRISM ",(0,s.jsx)(n.a,{href:"/docs/concepts/glossary#decentralized-identifier",children:"DID"})," string, such as ",(0,s.jsx)(n.code,{children:"did:prism:subjectIdentifier"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"keyId"})," Option parameter"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"when keyId is not provided the SDJWT VC is not binded to Holder/Prover key"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Holder POST request to accept the credential offer\ncurl -X POST "http://localhost:8090/cloud-agent/issue-credentials/records/$holder_record_id/accept-offer" \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "subjectId": "did:prism:subjectIdentifier"\n     }\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A SD-JWT Verifiable Credential (VC) without a ",(0,s.jsx)(n.code,{children:"cnf"})," key could possibly look like below"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' {\n  "_sd": [\n    "CrQe7S5kqBAHt-nMYXgc6bdt2SH5aTY1sU_M-PgkjPI",\n    "JzYjH4svliH0R3PyEMfeZu6Jt69u5qehZo7F7EPYlSE",\n    "PorFbpKuVu6xymJagvkFsFXAbRoc2JGlAUA2BA4o7cI",\n    "TGf4oLbgwd5JQaHyKVQZU9UdGE0w5rtDsrZzfUaomLo",\n    "XQ_3kPKt1XyX7KANkqVR6yZ2Va5NrPIvPYbyMvRKBMM",\n    "XzFrzwscM6Gn6CJDc6vVK8BkMnfG8vOSKfpPIZdAfdE",\n    "gbOsI4Edq2x2Kw-w5wPEzakob9hV1cRD0ATN3oQL9JM",\n    "jsu9yVulwQQlhFlM_3JlzMaSFzglhQG0DpfayQwLUK4"\n  ],\n  "iss": "https://issuer.example.com",\n  "iat": 1683000000,\n  "exp": 1883000000,\n  "sub": "user_42",\n  "_sd_alg": "sha-256"\n}\n'})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"keyId"}),": This is optional field but must be specified to choose which key bounds to the verifiable credential.\nFor more information on key-binding, ",(0,s.jsx)(n.a,{href:"https://datatracker.ietf.org/doc/draft-ietf-oauth-selective-disclosure-jwt",children:"ietf-oauth-selective-disclosure-jwt"}),".\nCurrently, we only support the EdDSA algorithm and curve Ed25519.\nThe specified keyId should be of type Ed25519.\nThe purpose of the keyId should be authentication."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'# Holder POST request to accept the credential offer with keyId\ncurl -X POST "http://localhost:8090/cloud-agent/issue-credentials/records/$holder_record_id/accept-offer" \\\n    -H \'accept: application/json\' \\\n    -H \'Content-Type: application/json\' \\\n    -H "apikey: $API_KEY" \\\n    -d \'{\n          "subjectId": "did:prism:subjectIdentifier",\n          "keyId": "key-1"    \n     }\'\n'})}),"\n",(0,s.jsxs)(n.p,{children:["A SD-JWT Verifiable Credential (VC) that includes a ",(0,s.jsx)(n.code,{children:"cnf"})," key could possibly look like below"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:' {\n  "_sd": [\n    "CrQe7S5kqBAHt-nMYXgc6bdt2SH5aTY1sU_M-PgkjPI",\n    "JzYjH4svliH0R3PyEMfeZu6Jt69u5qehZo7F7EPYlSE",\n    "PorFbpKuVu6xymJagvkFsFXAbRoc2JGlAUA2BA4o7cI",\n    "TGf4oLbgwd5JQaHyKVQZU9UdGE0w5rtDsrZzfUaomLo",\n    "XQ_3kPKt1XyX7KANkqVR6yZ2Va5NrPIvPYbyMvRKBMM",\n    "XzFrzwscM6Gn6CJDc6vVK8BkMnfG8vOSKfpPIZdAfdE",\n    "gbOsI4Edq2x2Kw-w5wPEzakob9hV1cRD0ATN3oQL9JM",\n    "jsu9yVulwQQlhFlM_3JlzMaSFzglhQG0DpfayQwLUK4"\n  ],\n  "iss": "https://issuer.example.com",\n  "iat": 1683000000,\n  "exp": 1883000000,\n  "sub": "user_42",\n  "_sd_alg": "sha-256",\n  "cnf": {\n    "jwk": {\n      "kty": "EC",\n      "crv": "P-256",\n      "x": "TCAER19Zvu3OHF4j4W4vfSVoHIP1ILilDls7vCeGemc",\n      "y": "ZxjiWWbZMQGHVWKVQ4hbSIirsVfuecCE6t4jT9F2HZQ"\n    }\n  }\n}\n'})}),"\n"]}),"\n"]})})]}),"\n",(0,s.jsxs)(n.p,{children:["This request will change the state of the record to ",(0,s.jsx)(n.code,{children:"RequestPending"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"receiving-the-vc-credential",children:"Receiving the VC Credential"}),"\n",(0,s.jsxs)(n.p,{children:["Once the Holder has approved the offer and sent a request to the Issuer, the Holder agent will process the request and send it to the Issuer agent.\nThe state of the Holder's record will change to ",(0,s.jsx)(n.code,{children:"RequestSent"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["After the Issuer has issued the credential, the Holder will receive the credential via DIDComm, and the state of the Holder's record will change to ",(0,s.jsx)(n.code,{children:"CredentialReceived"}),".\nThis process is automatic for the Cloud Agent."]}),"\n",(0,s.jsxs)(n.p,{children:["The Holder can check the achieved credential using a GET request to ",(0,s.jsx)(n.a,{href:"/agent-api/#tag/Issue-Credentials-Protocol/operation/getCredentialRecord",children:(0,s.jsx)(n.code,{children:"/issue-credentials/records/{recordId}/"})})," endpoint."]}),"\n",(0,s.jsx)(n.mermaid,{value:"---\ntitle: Holder Flow\n---\nstateDiagram-v2\n  [*] --\x3e OfferReceived: receive offer (auto via PRISM Agent)\n  OfferReceived --\x3e RequestPending: accept offer (`/issue-credentials/records/{recordId}/accept-offer`)\n  RequestPending --\x3e RequestSent: send request (auto via PRISM Agent)\n  RequestSent --\x3e CredentialReceived: receive credential (auto via PRISM Agent)"}),"\n",(0,s.jsx)(n.h2,{id:"sequence-diagram",children:"Sequence diagram"}),"\n",(0,s.jsx)(n.p,{children:"TODO"})]})}function f(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},19365:(e,n,i)=>{i.d(n,{A:()=>a});i(96540);var s=i(34164);const t={tabItem:"tabItem_Ymn6"};var r=i(74848);function a(e){let{children:n,hidden:i,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(t.tabItem,a),hidden:i,children:n})}},11470:(e,n,i)=>{i.d(n,{A:()=>C});var s=i(96540),t=i(34164),r=i(23104),a=i(56347),d=i(205),l=i(57485),o=i(31682),c=i(70679);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:i}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:i,attributes:s,default:t}}=e;return{value:n,label:i,attributes:s,default:t}}))}(i);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function f(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:i}=e;const t=(0,a.W6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,l.aZ)(r),(0,s.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function j(e){const{defaultValue:n,queryString:i=!1,groupId:t}=e,r=u(e),[a,l]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=i.find((e=>e.default))??i[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:r}))),[o,h]=p({queryString:i,groupId:t}),[j,x]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,c.Dv)(i);return[t,(0,s.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:t}),g=(()=>{const e=o??j;return f({value:e,tabValues:r})?e:null})();(0,d.A)((()=>{g&&l(g)}),[g]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),h(e),x(e)}),[h,x,r]),tabValues:r}}var x=i(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var m=i(74848);function v(e){let{className:n,block:i,selectedValue:s,selectValue:a,tabValues:d}=e;const l=[],{blockElementScrollPositionUntilNextRender:o}=(0,r.a_)(),c=e=>{const n=e.currentTarget,i=l.indexOf(n),t=d[i].value;t!==s&&(o(n),a(t))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const i=l.indexOf(e.currentTarget)+1;n=l[i]??l[0];break}case"ArrowLeft":{const i=l.indexOf(e.currentTarget)-1;n=l[i]??l[l.length-1];break}}n?.focus()};return(0,m.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":i},n),children:d.map((e=>{let{value:n,label:i,attributes:r}=e;return(0,m.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>l.push(e),onKeyDown:h,onClick:c,...r,className:(0,t.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":s===n}),children:i??n},n)}))})}function b(e){let{lazy:n,children:i,selectedValue:t}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===t));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,m.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function I(e){const n=j(e);return(0,m.jsxs)("div",{className:(0,t.A)("tabs-container",g.tabList),children:[(0,m.jsx)(v,{...n,...e}),(0,m.jsx)(b,{...n,...e})]})}function C(e){const n=(0,x.A)();return(0,m.jsx)(I,{...e,children:h(e.children)},String(n))}},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>d});var s=i(96540);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
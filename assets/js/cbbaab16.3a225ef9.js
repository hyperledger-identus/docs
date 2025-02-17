"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[1279],{69693:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>I,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(74848),l=i(28453);const s={},o="Edge SDK Connectionless Credential Offer",a={id:"examples/ConnectionlessOffer",title:"Edge SDK Connectionless Credential Offer",description:"Flow",source:"@site/sdk-ts/docs/examples/ConnectionlessOffer.md",sourceDirName:"examples",slug:"/examples/ConnectionlessOffer",permalink:"/docs/sdk-ts/examples/ConnectionlessOffer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Verification",permalink:"/docs/sdk-ts/examples/SDKVerification"},next:{title:"Presentation",permalink:"/docs/sdk-ts/examples/ConnectionlessPresentation"}},d={},c=[{value:"Flow",id:"flow",level:2}];function r(e){const n={code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",...(0,l.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"edge-sdk-connectionless-credential-offer",children:"Edge SDK Connectionless Credential Offer"}),"\n",(0,t.jsx)(n.h2,{id:"flow",children:"Flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Obtain a Connectionless Credential Offer from an Issuer."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A Connectionless Credential Offer is an Out of Band Invitation with a Credential Offer Attachment.\nThis should be a URI with a single query parameter ",(0,t.jsx)(n.code,{children:"_oob"}),", which is an encoded JSON.\nIt should look similar to:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"https://my.domain.com/path?_oob=eyJpZCI6ImY5NmUzNjk5LTU5MWMtNGFlNy1iNWU2LTZlZmU2ZDI2MjU1YiIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL291dC1vZi1iYW5kLzIuMC9pbnZpdGF0aW9uIiwiZnJvbSI6ImRpZDpwZWVyOjIuRXo2TFNmc0tNZTh2U1NXa1lkWkNwbjRZVmlQRVJmZEdBaGRMQUdIZ3gyTEdKd2ZtQS5WejZNa3B3MWtTYWJCTXprQTN2NTl0UUZuaDNGdGtLeTZ4TGhMeGQ5UzZCQW9hQmcyLlNleUowSWpvaVpHMGlMQ0p6SWpwN0luVnlhU0k2SW1oMGRIQTZMeTh4T1RJdU1UWTRMakV1TXpjNk9EQTRNQzlrYVdSamIyMXRJaXdpY2lJNlcxMHNJbUVpT2xzaVpHbGtZMjl0YlM5Mk1pSmRmWDAiLCJib2R5Ijp7ImdvYWxfY29kZSI6Imlzc3VlLXZjIiwiZ29hbCI6IlRlc3QgT09CIiwiYWNjZXB0IjpbImRpZGNvbW0vdjIiXX0sImNyZWF0ZWRfdGltZSI6MTcyNDg1MTEzOSwiZXhwaXJlc190aW1lIjo5OTI0ODUxNDM5LCJhdHRhY2htZW50cyI6W3siaWQiOiIwMGNkYzkwYy05YTk5LTRjZGEtODdmZS00ZjRiMjU5NTExMmEiLCJtZWRpYV90eXBlIjoiYXBwbGljYXRpb24vanNvbiIsImRhdGEiOnsianNvbiI6eyJpZCI6IjY1NWU5YTJjLTQ4ZWQtNDU5Yi1iM2RhLTZiMzY4NjY1NTU2NCIsInR5cGUiOiJodHRwczovL2RpZGNvbW0ub3JnL2lzc3VlLWNyZWRlbnRpYWwvMy4wL29mZmVyLWNyZWRlbnRpYWwiLCJib2R5Ijp7ImdvYWxfY29kZSI6Ik9mZmVyIENyZWRlbnRpYWwiLCJjcmVkZW50aWFsX3ByZXZpZXciOnsidHlwZSI6Imh0dHBzOi8vZGlkY29tbS5vcmcvaXNzdWUtY3JlZGVudGlhbC8zLjAvY3JlZGVudGlhbC1jcmVkZW50aWFsIiwiYm9keSI6eyJhdHRyaWJ1dGVzIjpbeyJuYW1lIjoiZmFtaWx5TmFtZSIsInZhbHVlIjoiV29uZGVybGFuZCJ9XX19fSwiYXR0YWNobWVudHMiOlt7ImlkIjoiODQwNDY3OGItOWEzNi00OTg5LWFmMWQtMGY0NDUzNDdlMGUzIiwibWVkaWFfdHlwZSI6ImFwcGxpY2F0aW9uL2pzb24iLCJkYXRhIjp7Impzb24iOnsib3B0aW9ucyI6eyJjaGFsbGVuZ2UiOiJhZDBmNDNhZC04NTM4LTQxZDQtOWNiOC0yMDk2N2JjNjg1YmMiLCJkb21haW4iOiJkb21haW4ifSwicHJlc2VudGF0aW9uX2RlZmluaXRpb24iOnsiaWQiOiI3NDhlZmE1OC0yYmNlLTQ0MGQtOTIxZi0yNTIwYTg0NDY2NjMiLCJpbnB1dF9kZXNjcmlwdG9ycyI6W10sImZvcm1hdCI6eyJqd3QiOnsiYWxnIjpbIkVTMjU2SyJdLCJwcm9vZl90eXBlIjpbXX19fX19LCJmb3JtYXQiOiJwcmlzbS9qd3QifV0sInRoaWQiOiJmOTZlMzY5OS01OTFjLTRhZTctYjVlNi02ZWZlNmQyNjI1NWIiLCJmcm9tIjoiZGlkOnBlZXI6Mi5FejZMU2ZzS01lOHZTU1drWWRaQ3BuNFlWaVBFUmZkR0FoZExBR0hneDJMR0p3Zm1BLlZ6Nk1rcHcxa1NhYkJNemtBM3Y1OXRRRm5oM0Z0a0t5NnhMaEx4ZDlTNkJBb2FCZzIuU2V5SjBJam9pWkcwaUxDSnpJanA3SW5WeWFTSTZJbWgwZEhBNkx5OHhPVEl1TVRZNExqRXVNemM2T0RBNE1DOWthV1JqYjIxdElpd2ljaUk2VzEwc0ltRWlPbHNpWkdsa1kyOXRiUzkyTWlKZGZYMCJ9fX1dfQ==\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["Ensure the validity of the Invitation with ",(0,t.jsx)(n.code,{children:"Agent.parseInvitation"})]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"parseInvitation"})," decodes and validates the encoded Out of Band Invitation, plus attachments, returning an instance of ",(0,t.jsx)(n.code,{children:"OutOfBandInvitation"})," on success. This OutOfBandInvitation will have a single Attachment for the Credential Offer."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"const oob = await Agent.parseInvitation(rawOob);\n"})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsxs)(n.li,{children:["Use ",(0,t.jsx)(n.code,{children:"Agent.acceptInvitation"})," to handle the OutOfBandInvitation appropriately.\nIn this case, with an attached Credential Offer, the Credential Offer Message will be stored in Pluto."]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"await Agent.acceptInvitation(oob)\n"})})]})}function I(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(r,{...e})}):r(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var t=i(96540);const l={},s=t.createContext(l);function o(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);
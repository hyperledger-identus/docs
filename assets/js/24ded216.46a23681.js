"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[7807],{49024:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var s=n(74848),a=n(28453);const i={},r="Delete the credential schema",c={id:"schemas/delete",title:"Delete the credential schema",description:"Unfortunately, after publishing (especially in the Verifiable Data Registry (VDR), deleting the credential schema is impossible.",source:"@site/cloud-agent/docs/docusaurus/schemas/delete.md",sourceDirName:"schemas",slug:"/schemas/delete",permalink:"/docs/tutorials/schemas/delete",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Update the credential schema",permalink:"/docs/tutorials/schemas/update"},next:{title:"Credential Definition",permalink:"/docs/tutorials/category/credential-definition"}},o={},l=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"delete-the-credential-schema",children:"Delete the credential schema"}),"\n",(0,s.jsxs)(t.p,{children:["Unfortunately, after publishing (especially in the ",(0,s.jsx)(t.a,{href:"/docs/concepts/glossary#verifiable-data-registry",children:"Verifiable Data Registry (VDR)"}),", deleting the credential schema is impossible."]}),"\n",(0,s.jsx)(t.p,{children:"The Identus Platform doesn't publish the credential schema in the VDR. This capability will get implemented in the later version of the platform. That's why the platform does not expose the REST API for deletion."}),"\n",(0,s.jsxs)(t.p,{children:["If you need to ",(0,s.jsx)(t.code,{children:"delete"})," the credential schema, you can ask the database administrator or delete it from the\nPostgres instance by ",(0,s.jsx)(t.code,{children:"guid"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"For example:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-sql",children:"DELETE\nFROM credential_schema\nWHERE guid = '3f86a73f-5b78-39c7-af77-0c16123fa9c2'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(96540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);
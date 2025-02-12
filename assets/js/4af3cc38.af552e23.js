"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[3316],{81088:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>o});var i=t(74848),a=t(28453);const s={},l="Tenant Onboarding",r={id:"multitenancy/tenant-onboarding",title:"Tenant Onboarding",description:"In a multi-tenant setup, it's crucial to understand the various roles within the system.",source:"@site/cloud-agent/docs/docusaurus/multitenancy/tenant-onboarding.md",sourceDirName:"multitenancy",slug:"/multitenancy/tenant-onboarding",permalink:"/docs/tutorials/multitenancy/tenant-onboarding",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialsSidebar",previous:{title:"Webhook Notifications",permalink:"/docs/tutorials/webhooks/webhook"},next:{title:"Tenant Onboarding with External IAM",permalink:"/docs/tutorials/multitenancy/tenant-onboarding-ext-iam"}},d={},o=[{value:"Roles",id:"roles",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"Administrator interactions",id:"administrator-interactions",level:2},{value:"1. Check the existing wallets",id:"1-check-the-existing-wallets",level:3},{value:"2. Create a new wallet",id:"2-create-a-new-wallet",level:3},{value:"3. Create a new entity",id:"3-create-a-new-entity",level:3},{value:"4. Register <code>apikey</code> authentication method",id:"4-register-apikey-authentication-method",level:3},{value:"Tenant interactions",id:"tenant-interactions",level:2},{value:"1. Perform a simple action to verify access to the Cloud Agent",id:"1-perform-a-simple-action-to-verify-access-to-the-cloud-agent",level:3}];function c(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"tenant-onboarding",children:"Tenant Onboarding"}),"\n",(0,i.jsx)(n.p,{children:"In a multi-tenant setup, it's crucial to understand the various roles within the system.\nThere are two key roles in tenant management: administrators and tenants.\nAdministrators are in charge of managing wallets and tenants,\nwhile tenants are users who engage in standard SSI interactions with the Cloud Agent."}),"\n",(0,i.jsx)(n.h2,{id:"roles",children:"Roles"}),"\n",(0,i.jsx)(n.p,{children:"In tenant management, there are 2 roles:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/concepts/glossary#administrator",children:"Administrator"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/docs/concepts/glossary#tenant",children:"Tenant"})}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"The Cloud Agent up and running"}),"\n",(0,i.jsxs)(n.li,{children:["The Cloud Agent is configured with the following environment variables:","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"ADMIN_TOKEN=my-admin-token"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"API_KEY_ENABLED=true"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"API_KEY_AUTO_PROVISIONING=false"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"DEFAULT_WALLET_ENABLED=false"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(n.p,{children:"This is a guide on how to onboard a new tenant from scratch.\nThis tutorial will demonstrate the creation of a new entity representing the tenant,\nthe provisioning of a wallet, and enabling an authentication method for this tenant.\nSubsequently, the tenant will gain the capability to engage in SSI activities within an\nisolated wallet environment using the Cloud Agent."}),"\n",(0,i.jsx)(n.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Endpoint"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Role"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET /wallets"})}),(0,i.jsx)(n.td,{children:"List the wallets on the Cloud Agent"}),(0,i.jsx)(n.td,{children:"Administrator"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POST /wallets"})}),(0,i.jsx)(n.td,{children:"Create a new wallet on the Cloud Agent"}),(0,i.jsx)(n.td,{children:"Administrator"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POST /iam/entities"})}),(0,i.jsx)(n.td,{children:"Create a new entity on the Cloud Agent"}),(0,i.jsx)(n.td,{children:"Administrator"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"POST /iam/apikey-authentication"})}),(0,i.jsx)(n.td,{children:"Create a new authentication for the entity"}),(0,i.jsx)(n.td,{children:"Administrator"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"GET /did-registrar/dids"})}),(0,i.jsx)(n.td,{children:"List the DIDs inside the wallet"}),(0,i.jsx)(n.td,{children:"Tenant"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"administrator-interactions",children:"Administrator interactions"}),"\n",(0,i.jsx)(n.h3,{id:"1-check-the-existing-wallets",children:"1. Check the existing wallets"}),"\n",(0,i.jsx)(n.p,{children:"When running the Cloud Agent using the configurations above, the Agent should start with an empty state.\nListing wallets on it should return empty results."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'GET' \\\n  'http://localhost:8080/cloud-agent/wallets' \\\n  -H 'accept: application/json' \\\n  -H 'x-admin-api-key: my-admin-token'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Response Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "self": "/wallets",\n  "kind": "WalletPage",\n  "pageOf": "/wallets",\n  "contents": []\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"2-create-a-new-wallet",children:"2. Create a new wallet"}),"\n",(0,i.jsxs)(n.p,{children:["The wallet can be created using a ",(0,i.jsx)(n.code,{children:"POST /wallets"})," endpoint.\nThis wallet is going to act as a container for the tenant's assets (DIDs, VCs, Connections, etc.).\nThe wallet seed may be provided during the wallet creation or omitted to let the Agent generate one randomly."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/cloud-agent/wallets' \\\n  -H 'accept: application/json' \\\n  -H 'x-admin-api-key: my-admin-token' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"seed\": \"c9994785ce6d548134020f610b76102ca1075d3bb672a75ec8c9a27a7b8607e3b9b384e43b77bb08f8d5159651ae38b98573f7ecc79f2d7e1f1cc371ce60cf8a\",\n    \"name\": \"my-wallet\"\n  }'\n"})}),"\n",(0,i.jsx)(n.p,{children:"Response Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id": "99734c87-5c9d-4697-b5fd-dea4e9590ba7",\n  "name": "my-wallet",\n  "createdAt": "2023-01-01T00:00:00Z",\n  "updatedAt": "2023-01-01T00:00:00Z"\n}\n'})}),"\n",(0,i.jsx)(n.h3,{id:"3-create-a-new-entity",children:"3. Create a new entity"}),"\n",(0,i.jsxs)(n.p,{children:["A new entity can be created to represent a tenant.\nTo create a new entity, send a ",(0,i.jsx)(n.code,{children:"POST"})," request to the ",(0,i.jsx)(n.code,{children:"/iam/entities"})," endpoint with the following parameters:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/cloud-agent/iam/entities' \\\n  -H 'accept: application/json' \\\n  -H 'x-admin-api-key: my-admin-token' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"name\": \"John\",\n    \"walletId\": \"99734c87-5c9d-4697-b5fd-dea4e9590ba7\"\n  }'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to use the ",(0,i.jsx)(n.code,{children:"walletId"})," from the previous step."]}),"\n",(0,i.jsx)(n.p,{children:"Response Example:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "kind": "Entity",\n  "self": "/iam/entities/10000000-0000-0000-0000-000000000000",\n  "id": "10000000-0000-0000-0000-000000000000",\n  "name": "John",\n  "walletId": "99734c87-5c9d-4697-b5fd-dea4e9590ba7",\n  "createdAt": "2023-09-01T14:00:38.760045Z",\n  "updatedAt": "2023-09-01T14:00:38.760047Z"\n}\n'})}),"\n",(0,i.jsxs)(n.h3,{id:"4-register-apikey-authentication-method",children:["4. Register ",(0,i.jsx)(n.code,{children:"apikey"})," authentication method"]}),"\n",(0,i.jsxs)(n.p,{children:["With the new tenant now equipped with both a wallet and an entity,\nthe final step involves setting up the entity's authentication method.\nOnce this step is completed, the administrator should provide the tenant with an ",(0,i.jsx)(n.code,{children:"apikey"}),", granting them access to utilize the Agent."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl -X 'POST' \\\n  'http://localhost:8080/cloud-agent/iam/apikey-authentication' \\\n  -H 'accept: */*' \\\n  -H 'x-admin-api-key: my-admin-token' \\\n  -H 'Content-Type: application/json' \\\n  -d '{\n    \"entityId\": \"10000000-0000-0000-0000-000000000000\",\n    \"apiKey\": \"my-tenant-token\"\n  }'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Make sure to use the ",(0,i.jsx)(n.code,{children:"entityId"})," from the previous step."]}),"\n",(0,i.jsx)(n.p,{children:"HTTP code 201 returns in the case of the successful request execution."}),"\n",(0,i.jsx)(n.h2,{id:"tenant-interactions",children:"Tenant interactions"}),"\n",(0,i.jsxs)(n.p,{children:["With the ",(0,i.jsx)(n.code,{children:"apikey"})," provisioned by the administrator, the tenant is able to authenticate and use the Cloud Agent."]}),"\n",(0,i.jsx)(n.h3,{id:"1-perform-a-simple-action-to-verify-access-to-the-cloud-agent",children:"1. Perform a simple action to verify access to the Cloud Agent"}),"\n",(0,i.jsxs)(n.p,{children:["To prove that the tenant can be authenticated as the created entity and use the wallet,\ntry listing the DIDs in the wallet using ",(0,i.jsx)(n.code,{children:"apikey"})," header."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"curl --location --request GET 'http://localhost:8080/cloud-agent/did-registrar/dids' \\\n  --header \"apikey: my-tenant-token\" \\\n  --header 'Accept: application/json'\n"})}),"\n",(0,i.jsx)(n.p,{children:"The result should show 200 status with an empty list.\nThis means that the wallet has been created and it does not contain any DIDs.\nAny interactions that the tenant performs should be scoped to only this wallet."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>r});var i=t(96540);const a={},s=i.createContext(a);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);
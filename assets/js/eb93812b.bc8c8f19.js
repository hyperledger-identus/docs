"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[703],{98607:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(74848),t=i(28453);const r={},o="Performance framework for the Identus platform",a={id:"decisions/2023-07-14-performance-framework-for-atala-prism",title:"Performance framework for the Identus platform",description:"- Status: accepted",source:"@site/documentation/adrs/decisions/2023-07-14-performance-framework-for-atala-prism.md",sourceDirName:"decisions",slug:"/decisions/2023-07-14-performance-framework-for-atala-prism",permalink:"/docs/adrs/decisions/2023-07-14-performance-framework-for-atala-prism",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"adrsSidebar",previous:{title:"Apollo as centralised and secure cryptography management module",permalink:"/docs/adrs/decisions/2023-06-28-apollo-as-centralised-and-secure-cryptography-management-module"},next:{title:"Use keycloak authorisation service for managing wallet permissions",permalink:"/docs/adrs/decisions/2023-09-26-use-keycloak-authorisation-service-for-managing-wallet-permissions"}},l={},d=[{value:"Context and Problem Statement",id:"context-and-problem-statement",level:2},{value:"Decision Drivers ",id:"decision-drivers-",level:2},{value:"Considered Options",id:"considered-options",level:2},{value:"Decision Outcome",id:"decision-outcome",level:2},{value:"Pros and Cons of the Options ",id:"pros-and-cons-of-the-options-",level:2},{value:"K6",id:"k6",level:3},{value:"Gatling",id:"gatling",level:3},{value:"Locust",id:"locust",level:3}];function c(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"performance-framework-for-the-identus-platform",children:"Performance framework for the Identus platform"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Status: accepted"}),"\n",(0,s.jsx)(n.li,{children:"Deciders: Anton Baliasnikov, Shota Jolbordi, David Poltorak"}),"\n",(0,s.jsx)(n.li,{children:"Date: 2023-07-14"}),"\n",(0,s.jsx)(n.li,{children:"Tags: benchmarks, performance, k6, load testing"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Technical Story: ",(0,s.jsx)(n.a,{href:"https://input-output.atlassian.net/browse/ATL-4119",children:"Performance Management"})]}),"\n",(0,s.jsx)(n.h2,{id:"context-and-problem-statement",children:"Context and Problem Statement"}),"\n",(0,s.jsx)(n.p,{children:"There are multiple great solutions today on the market for load testing. We need to choose one that corresponds to our needs, infrastructure, and price. The objective is to assess our requirements and explore the range of available load-testing solutions. Subsequently, we will provide a proposal recommending the load-testing framework that best suits our needs."}),"\n",(0,s.jsx)(n.h2,{id:"decision-drivers-",children:"Decision Drivers "}),"\n",(0,s.jsxs)(n.p,{children:["What are our needs? Let\u2019s try to sum up the required capabilities based on ",(0,s.jsx)(n.a,{href:"https://input-output.atlassian.net/wiki/spaces/ATB/pages/3819044870/RFC+0028+-+PI2+-+Performance+Testing+Guidance+Framework",children:"RFC-0028"}),", we need:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create required performance scenarios on various levels, such as endpoint level (e.g. get connections) and  flow level (calling endpoints one by one in order, e.g. issuing credentials flow)"}),"\n",(0,s.jsx)(n.li,{children:"Do checks for each request to make sure achieved statuses and response data are correct"}),"\n",(0,s.jsx)(n.li,{children:"Custom metrics support as we have custom scenarios connected"}),"\n",(0,s.jsx)(n.li,{children:"Protocols support: HTTP (rest API), WebSocket (if we support it in the future for Mediator), gRPC (if we need PRISM Node direct benchmarks on gRPC level)"}),"\n",(0,s.jsx)(n.li,{children:"Create the required load over time depending on the scenario and type of test, the more different things are supported - the better"}),"\n",(0,s.jsx)(n.li,{children:"Easy to understand, read and share reports"}),"\n",(0,s.jsx)(n.li,{children:"Something that does not require too much RAM/CPU resources on the host machine to run, so we can use our custom GitHub runners for performance testing and possible Cloud Execution"}),"\n",(0,s.jsx)(n.li,{children:"The fast learning curve for everybody to contribute"}),"\n",(0,s.jsx)(n.li,{children:"Good documentation and examples to be able to develop complex scenarios faster"}),"\n",(0,s.jsx)(n.li,{children:"Cloud support for tests running"}),"\n",(0,s.jsx)(n.li,{children:"Cloud support for tests analysis to make results visible and present them easily as per request"}),"\n",(0,s.jsx)(n.li,{children:"Support for GitHub actions to integrate into CI/CD"}),"\n",(0,s.jsx)(n.li,{children:"Open source to be able to customize if required"}),"\n",(0,s.jsx)(n.li,{children:"Cheap or free"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"considered-options",children:"Considered Options"}),"\n",(0,s.jsx)(n.p,{children:"What\u2019s on the market?\nHere is the list of TOP10 load test frameworks currently available on the market:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Apache JMeter"}),"\n",(0,s.jsx)(n.li,{children:"LoadRunner"}),"\n",(0,s.jsx)(n.li,{children:"PFLB Platform"}),"\n",(0,s.jsx)(n.li,{children:"Gatling"}),"\n",(0,s.jsx)(n.li,{children:"K6"}),"\n",(0,s.jsx)(n.li,{children:"LoadNinja"}),"\n",(0,s.jsx)(n.li,{children:"WebLOAD"}),"\n",(0,s.jsx)(n.li,{children:"BlazeMeter"}),"\n",(0,s.jsx)(n.li,{children:"NeoLoad"}),"\n",(0,s.jsx)(n.li,{children:"Locust"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We can read multiple papers about their comparison, for example, ",(0,s.jsx)(n.a,{href:"https://pflb.us/blog/best-load-testing-tools/",children:"this one for reference"}),", but we need to understand the difference between them all and which pros and cons they have, and why they were created."]}),"\n",(0,s.jsx)(n.p,{children:"There are 3 main classes of frameworks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"enterprise - huge enterprise solutions in clouds with advanced tools to generate all kinds of load testing scenarios targeted for non-technical testing engineers"}),"\n",(0,s.jsx)(n.li,{children:"lightweight - small, highly optimized solutions, open-sourced, and easily extendable"}),"\n",(0,s.jsx)(n.li,{children:"mixed - developer-friendly frameworks that are usually open-sourced with some free version providing cloud-paid plans, a kind of a medium between enterprise and lightweight"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"All frameworks are using different technologies and approaches: JVM-based, JS-based, GO-based, etc; GUI-oriented solutions to simplify tests development; cloud-only, etc."}),"\n",(0,s.jsx)(n.p,{children:"Keeping in mind that we are not interested in enterprise solutions, because:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"They are very expensive"}),"\n",(0,s.jsx)(n.li,{children:"We are smarter than they think we are (for example, we don\u2019t need GUI simplifications and blocks to generate scenarios, we would like to use our coding power here)"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Based on that, we can conclude that it makes sense for us to analyze and compare the following load-testing frameworks:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Gatling"}),"\n",(0,s.jsx)(n.li,{children:"K6"}),"\n",(0,s.jsx)(n.li,{children:"Locust"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"decision-outcome",children:"Decision Outcome"}),"\n",(0,s.jsx)(n.p,{children:"Native support for CI, Grafana, lots of output formats, custom metrics, distributed modes, amazing native Cloud integration, but most importantly the extensive documentation with tutorials and videos makes K6 the best choice for us."}),"\n",(0,s.jsx)(n.h2,{id:"pros-and-cons-of-the-options-",children:"Pros and Cons of the Options "}),"\n",(0,s.jsx)(n.h3,{id:"k6",children:"K6"}),"\n",(0,s.jsx)(n.p,{children:"Strengths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Modern, JavaScript-based: K6 is built on modern web technologies and uses JavaScript as its scripting language, which makes it accessible to a wide range of developers."}),"\n",(0,s.jsx)(n.li,{children:"Cloud-native: K6 is designed to work seamlessly with cloud-based infrastructure, making it easy to scale tests and generate high loads."}),"\n",(0,s.jsx)(n.li,{children:"Open-source: K6 is fully open-source, with an active community and extensive documentation."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Weaknesses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Limited protocol support: K6 currently only supports HTTP, WebSocket, and gRPC protocols, which may not be ideal for testing more complex systems."}),"\n",(0,s.jsx)(n.li,{children:"Limited customization: While K6 is highly customizable, it does not allow for as much customization as Gatling or Locust."}),"\n",(0,s.jsx)(n.li,{children:"JavaScript knowledge required: Developers need to be familiar with JavaScript or TypeScript to use K6 effectively."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"JavaScript-based, easy to start using for everyone"}),"\n",(0,s.jsx)(n.li,{children:"Native integration with Grafana that we\u2019re using in our infrastructure"}),"\n",(0,s.jsx)(n.li,{children:"A nice Cloud solution that can be used inside our infrastructure"}),"\n",(0,s.jsx)(n.li,{children:"Custom metrics support"}),"\n",(0,s.jsx)(n.li,{children:"Tons of output formats"}),"\n",(0,s.jsx)(n.li,{children:"Native CI/CD support for GitHub actions"}),"\n",(0,s.jsx)(n.li,{children:"Extensive, easy-to-read docs with tutorials and youtube videos"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Not as extendable as Gatling or Locust"}),"\n",(0,s.jsx)(n.li,{children:"Quite an expensive Cloud solution"}),"\n",(0,s.jsx)(n.li,{children:"New for us, some learning curve is expected"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"gatling",children:"Gatling"}),"\n",(0,s.jsx)(n.p,{children:"Strengths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"High performance and scalability: Gatling can simulate thousands of virtual users with high performance and low resource usage."}),"\n",(0,s.jsx)(n.li,{children:"User-friendly DSL: Gatling uses a domain-specific language (DSL) that is easy to read and write, making it accessible to developers and testers with varying levels of experience."}),"\n",(0,s.jsx)(n.li,{children:"Comprehensive reporting: Gatling provides detailed and customizable HTML reports that make it easy to analyze test results."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Weaknesses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Java-based: Gatling requires Java to run, which may not be ideal for some developers or organizations."}),"\n",(0,s.jsx)(n.li,{children:"Steep learning curve: Although the DSL is user-friendly, a learning curve is still associated with mastering Gatling's features and functionality."}),"\n",(0,s.jsx)(n.li,{children:"Limited community support: Gatling has a smaller community than some other load-testing tools, which may make it harder to find answers to specific questions or issues."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We already have the performance setup on Gatling and used it as part of 1.4"}),"\n",(0,s.jsx)(n.li,{children:"Nice concepts and solid base DSL"}),"\n",(0,s.jsx)(n.li,{children:"Performance scenarios are written in Scala or Kotlin which gives us 2 advantages: re-use data models from our Scala libraries in our benchmarks if required, and we don\u2019t need to learn any new language to use the framework (most of the team is Scala, Kotlin programmers)"}),"\n",(0,s.jsx)(n.li,{children:"Extendable with plugins"}),"\n",(0,s.jsx)(n.li,{children:"Custom Cloud solutions available"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"[subjective opinion writing the code] DSL is not that good, lots of boilerplates to achieve simple things, not intuitive"}),"\n",(0,s.jsx)(n.li,{children:"Custom metrics are available only in Enterprise"}),"\n",(0,s.jsx)(n.li,{children:"No native integration with Grafana that we use in our infrastructure"}),"\n",(0,s.jsx)(n.li,{children:"Documentation is not that good, many examples are implicit, no good video tutorials"}),"\n",(0,s.jsx)(n.li,{children:"No native CI/CD integration"}),"\n",(0,s.jsx)(n.li,{children:"Supports a lot less of output formats than K6"}),"\n",(0,s.jsx)(n.li,{children:"Distributed load generation is very complex, not natively integrated"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"locust",children:"Locust"}),"\n",(0,s.jsx)(n.p,{children:"Strengths:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python-based: Locust is built on Python, which is a popular and widely used programming language."}),"\n",(0,s.jsx)(n.li,{children:"Simple syntax: Locust uses a clean and intuitive syntax that is easy to read and write, even for beginners."}),"\n",(0,s.jsx)(n.li,{children:"Highly customizable: Locust allows you to customize your test scenarios using Python code, which gives you more flexibility and control over your tests."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Weaknesses:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Limited protocol support: Locust currently only supports HTTP, WebSockets, and MQTT protocols, which may not be ideal for testing more complex systems."}),"\n",(0,s.jsx)(n.li,{children:"Limited reporting: Locust provides basic reporting out of the box, but more advanced reporting features require third-party plugins."}),"\n",(0,s.jsx)(n.li,{children:"Python knowledge required: While Locust's syntax is simple, developers still need to be familiar with Python to use it effectively."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pros:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Python-based, very intuitive, and easy-to-write scenarios"}),"\n",(0,s.jsx)(n.li,{children:"Already used in IO for benchmarking in other projects"}),"\n",(0,s.jsx)(n.li,{children:"Very lightweight and powerful with capabilities for distributed load testing out of the box"}),"\n",(0,s.jsx)(n.li,{children:"Nice docs and examples"}),"\n",(0,s.jsx)(n.li,{children:"Highly and easily extendable"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Cons:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"No Cloud solution is available"}),"\n",(0,s.jsx)(n.li,{children:"New for us, some learning curve is expected, but easier"}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(96540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);
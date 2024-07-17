"use strict";(self.webpackChunkidentus_documentation_portal=self.webpackChunkidentus_documentation_portal||[]).push([[8544],{95138:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(74848),r=t(28453);const s={},a="Definitions",l={id:"identus/identus-cloud-agent/manage/definitions",title:"Definitions",description:"Credential Schemas",source:"@site/documentation/docs/identus/identus-cloud-agent/manage/definitions.md",sourceDirName:"identus/identus-cloud-agent/manage",slug:"/identus/identus-cloud-agent/manage/definitions",permalink:"/docs/identus/identus-cloud-agent/manage/definitions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},o={},d=[{value:"Credential Schemas",id:"credential-schemas",level:2},{value:"Attributes",id:"attributes",level:2},{value:"Attribute Types",id:"attribute-types",level:3},{value:"<strong>Integer</strong>",id:"integer",level:4},{value:"<strong>Number</strong>",id:"number",level:4},{value:"<strong>String</strong>",id:"string",level:4},{value:"<strong>Object</strong>",id:"object",level:4},{value:"<strong>Array</strong>",id:"array",level:4},{value:"<strong>Boolean</strong>",id:"boolean",level:4},{value:"Attribute Rules",id:"attribute-rules",level:3},{value:"<strong>Required</strong>",id:"required",level:4},{value:"<strong>Minimum/Maximum</strong>",id:"minimummaximum",level:4},{value:"<strong>Format</strong>",id:"format",level:4},{value:"<strong>multipleOf</strong>",id:"multipleof",level:4},{value:"<strong>eNum</strong>",id:"enum",level:4},{value:"<strong>Format (Strings)</strong>",id:"format-strings",level:4},{value:"<strong>RegEx</strong>",id:"regex",level:4},{value:"<strong>AllowAdditionalProperties</strong>",id:"allowadditionalproperties",level:4},{value:"<strong>Unique Items</strong>",id:"unique-items",level:4},{value:"<strong>Default Value</strong>",id:"default-value",level:4},{value:"Applicable Rules Per Attribute",id:"applicable-rules-per-attribute",level:3},{value:"Verification Policies",id:"verification-policies",level:2},{value:"DIDs",id:"dids",level:2}];function c(e){const i={a:"a",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h1,{id:"definitions",children:"Definitions"}),"\n",(0,n.jsx)(i.h2,{id:"credential-schemas",children:"Credential Schemas"}),"\n",(0,n.jsx)(i.p,{children:"A credential schema is a standardised specification or template that defines the structure, format, and properties of a digital credential. It outlines the necessary attributes, data elements, and metadata that should be included in a credential to ensure consistency and interoperability."}),"\n",(0,n.jsx)(i.p,{children:"PRISM Manage allows you to to easily and visually create a  credential schema, and allow you to decide:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Which data attributes are included"}),"\n",(0,n.jsx)(i.li,{children:"What rules to apply to each attribute"}),"\n"]}),"\n",(0,n.jsxs)(i.p,{children:["These schemas are then stored as JSON in specific format per this ",(0,n.jsx)(i.a,{href:"https://json-schema.org/",children:"specification"}),", and can subsequently be used to issue credentials using the Issue Credential APIs."]}),"\n",(0,n.jsx)(i.h2,{id:"attributes",children:"Attributes"}),"\n",(0,n.jsx)(i.p,{children:"In a credential schema, attributes refer to the properties or characteristics associated with a credential."}),"\n",(0,n.jsx)(i.p,{children:"Attributes provide additional information and metadata about the credential, such as its title, issuer, issuance date, description, and any other relevant details."}),"\n",(0,n.jsx)(i.p,{children:"Attributes help define and describe the credential in a structured manner, allowing for clear identification, validation, and organization of the credential data. They provide a standardized way to represent and exchange information about the credential, ensuring consistency and interoperability."}),"\n",(0,n.jsx)(i.h3,{id:"attribute-types",children:"Attribute Types"}),"\n",(0,n.jsx)(i.p,{children:"Each Attribute has to be one of the following type;"}),"\n",(0,n.jsx)(i.h4,{id:"integer",children:(0,n.jsx)(i.strong,{children:"Integer"})}),"\n",(0,n.jsx)(i.p,{children:"An integer attribute is used to define a property that expects a whole number as its value. It represents numeric values without any fractional or decimal component. Integers can be positive or negative, including zero. The JSON specification does not impose any specific limitation on the minimum or maximum.This means that any integer value would be considered valid for that attribute."}),"\n",(0,n.jsx)(i.h4,{id:"number",children:(0,n.jsx)(i.strong,{children:"Number"})}),"\n",(0,n.jsx)(i.p,{children:"A number attribute is used to define a property that expects a numeric value. This numeric value can include both whole numbers (integers) and decimal numbers. A number attribute can have any number of decimal points. The JSON specification does not impose any specific limit on the precision or number of decimal places for numeric values."}),"\n",(0,n.jsx)(i.h4,{id:"string",children:(0,n.jsx)(i.strong,{children:"String"})}),"\n",(0,n.jsx)(i.p,{children:"A string attribute is used to define a property that expects textual data as its value, such as words, sentences, or any sequence of characters. The JSON specification does not impose any specific limitation on the maximum number of characters a string attribute can have."}),"\n",(0,n.jsx)(i.h4,{id:"object",children:(0,n.jsx)(i.strong,{children:"Object"})}),"\n",(0,n.jsx)(i.p,{children:"An object attribute is used to define a property that expects a complex data structure consisting of key-value pairs, allowing for the organization and representation of structured data."}),"\n",(0,n.jsx)(i.h4,{id:"array",children:(0,n.jsx)(i.strong,{children:"Array"})}),"\n",(0,n.jsx)(i.p,{children:"An array attribute is used to define a property that expects an ordered collection of values, allowing for the representation of multiple items or elements within a single property."}),"\n",(0,n.jsx)(i.h4,{id:"boolean",children:(0,n.jsx)(i.strong,{children:"Boolean"})}),"\n",(0,n.jsx)(i.p,{children:"A boolean attribute is used to define a property that expects a value that can be either true or false, representing binary logic or conditions."}),"\n",(0,n.jsx)(i.h3,{id:"attribute-rules",children:"Attribute Rules"}),"\n",(0,n.jsx)(i.p,{children:"Each Attribute can have a set of rules applied. The types of rules that are available include:"}),"\n",(0,n.jsx)(i.h4,{id:"required",children:(0,n.jsx)(i.strong,{children:"Required"})}),"\n",(0,n.jsx)(i.p,{children:'The "required" rule specifies which attributes must be included or present in a credential for it to be considered valid or complete.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set True (Mandatory)"}),"\n",(0,n.jsx)(i.li,{children:"Option to set False (Optional)"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"minimummaximum",children:(0,n.jsx)(i.strong,{children:"Minimum/Maximum"})}),"\n",(0,n.jsx)(i.p,{children:'The "Minimum" and "Maximum" rules define numeric constraints on attribute values. They allow specifying the minimum and maximum allowed values for numeric attributes within a credential.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set Minimum value"}),"\n",(0,n.jsx)(i.li,{children:"Option to set Maximum value"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"format",children:(0,n.jsx)(i.strong,{children:"Format"})}),"\n",(0,n.jsx)(i.p,{children:'The "format" rule ensures that the attribute values representing integers are within the expected bit size range. This helps maintain data integrity and enables consistent interpretation and handling of integer values in the context of the credential.'}),"\n",(0,n.jsx)(i.p,{children:"For int32, which represents a 32-bit signed integer, the attribute value should conform to this format. The value should be within the range of -2,147,483,648 to 2,147,483,647, as dictated by the 32-bit signed integer representation."}),"\n",(0,n.jsx)(i.p,{children:"For int64, representing a 64-bit signed integer, the attribute value should fall within the range of -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807, adhering to the 64-bit signed integer representation."}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set to int32"}),"\n",(0,n.jsx)(i.li,{children:"Option to set to int64"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"multipleof",children:(0,n.jsx)(i.strong,{children:"multipleOf"})}),"\n",(0,n.jsx)(i.p,{children:'The "multipleOf" rule defines a constraint on numeric attribute values, specifying that they must be a multiple of a given number.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set MultipleOf"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"enum",children:(0,n.jsx)(i.strong,{children:"eNum"})}),"\n",(0,n.jsx)(i.p,{children:'The "enum" rule is used to define a list of allowable or valid values for an attribute. It restricts the attribute value to be one of the specified options, ensuring that it conforms to a predefined set of choices.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set fixed set of values"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"format-strings",children:(0,n.jsx)(i.strong,{children:"Format (Strings)"})}),"\n",(0,n.jsx)(i.p,{children:'The "format" rule specifies the expected format or pattern for attribute values that represent specific data types, such as dates, email addresses, URLs, or custom formats. It allows for the validation and enforcement of a particular structure or pattern for attribute values.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:'Date (Attribute must be a string representing a valid  Date in format  "YYYY-MM-DD")'}),"\n",(0,n.jsxs)(i.li,{children:['Date-time (Attribute must be a string representing a valid Date in format "YYYY-MM-DDTHH:MM',":SSZ",'" (ISO 8601 format)']}),"\n",(0,n.jsxs)(i.li,{children:['Time  (Attribute must be a string representing a valid Date in format   "HH:MM',":SS",'"']}),"\n",(0,n.jsx)(i.li,{children:"Email  (Attribute must be a string representing a valid email address)"}),"\n",(0,n.jsx)(i.li,{children:"URL"}),"\n",(0,n.jsx)(i.li,{children:"Hostname (Attribute must be a string representing a valid hostname)"}),"\n",(0,n.jsx)(i.li,{children:"Ipv4 (Attribute must be a string representing a valid IPv4 address)"}),"\n",(0,n.jsx)(i.li,{children:"Ipv6  (Attribute must be a string representing a valid  IPv6 address)"}),"\n",(0,n.jsx)(i.li,{children:"uuid  (Attribute must be a string representing a valid UUID)"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"regex",children:(0,n.jsx)(i.strong,{children:"RegEx"})}),"\n",(0,n.jsx)(i.p,{children:'The "regex" rule allows the definition of a custom validation pattern using a regular expression. Regular expressions (regex) are powerful string matching patterns that specify the format or pattern that an attribute value must follow.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set fixed set regular expression"}),"\n",(0,n.jsx)(i.li,{children:"Enter as text"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"allowadditionalproperties",children:(0,n.jsx)(i.strong,{children:"AllowAdditionalProperties"})}),"\n",(0,n.jsx)(i.p,{children:'The "additionalProperties" rule allows you to define whether additional properties, which are not explicitly defined in the schema, are allowed or disallowed within the credential.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set True (Allow additional properties)"}),"\n",(0,n.jsx)(i.li,{children:"Option to set False (Disallow additional properties)"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"unique-items",children:(0,n.jsx)(i.strong,{children:"Unique Items"})}),"\n",(0,n.jsx)(i.p,{children:'The "uniqueItems" rule is used to enforce that the elements within an array attribute must be unique. It ensures that there are no duplicate values present in the array.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set True (Allow Unique Items)"}),"\n",(0,n.jsx)(i.li,{children:"Option to set False (Do Not Allow Unique Items)"}),"\n"]}),"\n",(0,n.jsx)(i.h4,{id:"default-value",children:(0,n.jsx)(i.strong,{children:"Default Value"})}),"\n",(0,n.jsx)(i.p,{children:'The "default" rule allows you to specify a default value for an attribute. The default value is used when no explicit value is provided for that attribute in the credential.'}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Option to set Default value"}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"applicable-rules-per-attribute",children:"Applicable Rules Per Attribute"}),"\n",(0,n.jsx)(i.p,{children:"Below summarises the rules applicable for each attribute"}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Integer"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Required"}),"\n",(0,n.jsx)(i.li,{children:"Min/Max Value"}),"\n",(0,n.jsx)(i.li,{children:"Format"}),"\n",(0,n.jsx)(i.li,{children:"multipleOf"}),"\n",(0,n.jsx)(i.li,{children:"eNum"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Number"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Required"}),"\n",(0,n.jsx)(i.li,{children:"Min/Max Value"}),"\n",(0,n.jsx)(i.li,{children:"Format"}),"\n",(0,n.jsx)(i.li,{children:"multipleOf"}),"\n",(0,n.jsx)(i.li,{children:"eNum"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"String"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Required"}),"\n",(0,n.jsx)(i.li,{children:"Format"}),"\n",(0,n.jsx)(i.li,{children:"Min/Max Length"}),"\n",(0,n.jsx)(i.li,{children:"multipleOf"}),"\n",(0,n.jsx)(i.li,{children:"RegEx"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Object"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Min/Max Properties"}),"\n",(0,n.jsx)(i.li,{children:"AllowAdditionalProperties"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Array"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Required"}),"\n",(0,n.jsx)(i.li,{children:"Min/Max Items"}),"\n",(0,n.jsx)(i.li,{children:"Unique Items"}),"\n"]}),"\n",(0,n.jsx)(i.p,{children:(0,n.jsx)(i.strong,{children:"Boolean"})}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Default Value"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"verification-policies",children:"Verification Policies"}),"\n",(0,n.jsx)(i.p,{children:"Verification Policies enable verifiers to define the specific data that they require for their business processes and that they will request from holders."}),"\n",(0,n.jsx)(i.p,{children:"Verification Policies are flexible in that you can request only the specific data you need from a holder."}),"\n",(0,n.jsx)(i.p,{children:"When you create a verification policy, you can decide:"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"From what specific credential schemas  you require the data from"}),"\n",(0,n.jsx)(i.li,{children:"From which specific issuer you require the data from"}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"dids",children:"DIDs"}),"\n",(0,n.jsx)(i.p,{children:"Create and manage PRISM DIDs easily using PRISM Manage. Easily publish or deactivate your PRISM DIDs"})]})}function u(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,i,t)=>{t.d(i,{R:()=>a,x:()=>l});var n=t(96540);const r={},s=n.createContext(r);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);
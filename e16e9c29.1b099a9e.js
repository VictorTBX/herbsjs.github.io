(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{90:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return c}));var n=a(3),l=a(7),i=(a(0),a(101)),r={id:"sumaDoc3",title:"Validators",sidebar_label:"Validators",slug:"/suma/validators"},o={unversionedId:"sumaDoc3",id:"sumaDoc3",isDocsHomePage:!1,title:"Validators",description:"Presence",source:"@site/docs/suma-validators.md",slug:"/suma/validators",permalink:"/website/docs/suma/validators",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/suma-validators.md",version:"current",sidebar_label:"Validators",sidebar:"someSidebar",previous:{title:"Getting started",permalink:"/website/docs/suma/getting-started"}},s=[{value:"Presence",id:"presence",children:[]},{value:"Allow Null",id:"allow-null",children:[]},{value:"Presence vs allowNull",id:"presence-vs-allownull",children:[]},{value:"Contains",id:"contains",children:[]},{value:"Length",id:"length",children:[]},{value:"Numericality",id:"numericality",children:[]},{value:"Datetime",id:"datetime",children:[]},{value:"E-mail",id:"e-mail",children:[]},{value:"Format",id:"format",children:[]},{value:"Type",id:"type",children:[]},{value:"URL",id:"url",children:[]},{value:"Null Values",id:"null-values",children:[]}],b={toc:s};function c(e){var t=e.components,a=Object(l.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"presence"},"Presence"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"presence")," (boolean) - Validates that the specified value is not empty."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = ''\nconst validations = { presence: true }\nconst result = validate(value, validations) \n/* {\n    value: '',\n    errors: [{ cantBeEmpty: true }]\n} */\n")),Object(i.b)("h3",{id:"allow-null"},"Allow Null"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowNull")," (boolean) - Validates that the specified value is not ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = null\nconst validations = { allowNull: false }\nconst result = validate(value, validations) \n/* {\n    value: null,\n    errors: [{ cantBeNull: true }]\n} */\n")),Object(i.b)("h3",{id:"presence-vs-allownull"},"Presence vs allowNull"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"presence: true"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"allowNull: false"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"'Text'"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"123"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"0"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"' '"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"''"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"[]"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"{}"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Valid")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"null"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"undefined"),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h3",{id:"contains"},"Contains"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"contains")," -  The contains validator is useful for validating allowance or restriction in certain values.\nIt checks that the given value exists in the target given by the ",Object(i.b)("strong",{parentName:"p"},"allowed")," or  ",Object(i.b)("strong",{parentName:"p"},"notAllowed")," option."),Object(i.b)("p",null,"You can specify the validator as a list, string or as an object (in which case the keys of the object are used)."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"allowed option examples:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst value = \'xlarge\'\nconst validations = { contains: { allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'hello\'\nconst validations = { contains: { allowed: "lorem ipsum dolor" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ notContains: "lorem ipsum dolor" }]\n} */\n\n\nconst attr = \'price\'\nconst validations = { contains: { allowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n    value: \'price\',\n     errors: [{ notContains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"notAllowed option examples:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst value = \'small\'\nconst validations = { contains: { notAllowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'small\',\n    errors: [{ contains: ["small", "medium", "large"] }]\n} */\n\n\nconst value = \'hello\'\nconst validations = { contains: { notAllowed: "hello world" } }\nconst result = validate(value, validations) \n/* {\n    value: \'hello\',\n    errors: [{ contains: "hello world" }]\n} */\n\n\nconst attr = \'type\'\nconst validations = { contains: { notAllowed: {type:"Fiat", model:"500", color:"white"} } }\nconst result = validate(attr, validations) \n/* {\n     value: \'type\',\n     errors: [{ contains: {type:"Fiat", model:"500", color:"white"} }]\n} */\n\n')),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"using both options examples:")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'\nconst value = \'regular\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'regular\',\n    errors: [{ notContains: ["small", "medium", "large"] }]\n} */\n\nconst value = \'xlarge\'\nconst validations = { contains: { notAllowed: ["xlarge", "xxlarge", "tiny"], allowed: ["small", "medium", "large"] } }\nconst result = validate(value, validations) \n/* {\n    value: \'xlarge\',\n    errors: [\n             { notContains: ["small", "medium", "large"] },\n             { contains: ["xlarge", "xxlarge", "tiny"] }\n            ]\n} */\n\n\n')),Object(i.b)("h3",{id:"length"},"Length"),Object(i.b)("p",null,"Validates the length of the value. "),Object(i.b)("p",null,"It is possible to specify length constraints in different ways:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"minimum")," (number) - The value cannot have less than the specified length"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"maximum")," (number) - The value cannot have more than the specified length"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"is")," (number) - The value length must be equal to the given length"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = 'john'\nconst validations = { length: { minimum: 5, maximum: 3, is: 1 } }\nconst result = validate(value, validations) \n/* {\n    value: 'john',\n    errors: [\n        { isTooShort: 5 },\n        { isTooLong: 3 },\n        { wrongLength: 1 }\n    ]\n} */\n")),Object(i.b)("h3",{id:"numericality"},"Numericality"),Object(i.b)("p",null,"Validates constraints to acceptable numeric values."),Object(i.b)("p",null,"It must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," JS object. Use ",Object(i.b)("inlineCode",{parentName:"p"},"{ type: Number }")," to validate if the value is a valid JS ",Object(i.b)("inlineCode",{parentName:"p"},"Number")," object."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"equalTo")," (number) - Specifies the value must be equal to the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"greaterThan")," (number) - Specifies the value must be greater than the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"greaterThanOrEqualTo")," (number) - Specifies the value must be greater than or equal to the supplied value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"lessThan")," (number) - Specifies the value must be less than the supplied value."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"lessThanOrEqualTo")," (number) - Specifies the value must be less than or equal to the supplied value. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"onlyInteger")," (boolean) - To specify that only integral numbers are allowed."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = 123.4\nconst validations = {\n    numericality: {\n        equalTo: 123,\n        greaterThan: 200,\n        greaterThanOrEqualTo: 123,\n        lessThan: 0,\n        lessThanOrEqualTo: 123,\n        onlyInteger: true\n    }\n}\nconst result = validate(value, validations) \n/* {\n    value: 123.4,\n    errors: [\n        { notEqualTo: 123 },\n        { notGreaterThan: 200 },\n        { notLessThan: 0 },\n        { notLessThanOrEqualTo: 123 },\n        { notAnInteger: true }\n    ]\n} */\n")),Object(i.b)("h3",{id:"datetime"},"Datetime"),Object(i.b)("p",null,"Validates constraints to acceptable date and time values."),Object(i.b)("p",null,"It must be a valid ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," time JS object. Use ",Object(i.b)("inlineCode",{parentName:"p"},"{ type: Date }")," to validate if the value is a valid JS ",Object(i.b)("inlineCode",{parentName:"p"},"Date")," object."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"before")," (date) - A date must be before this value to be valid "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"after")," (date) - A date must be after this value to be valid "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"isAt")," (date) - A date must be equal to value to be valid "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = new Date('2001-01-02')\nconst validations = {\n    datetime : {\n            before: new Date('2001-01-01'),\n            after: new Date('2001-01-03'),\n            isAt: new Date('2001-02-02')\n        }\n}\nconst result = validate(value, validations) \n/* {\n    value: '2001-01-02T00:00:00.000Z',\n    errors: [\n        { tooLate: '2001-01-01T00:00:00.000Z' },\n        { tooEarly: '2001-01-03T00:00:00.000Z') },\n        { notAt: '2001-02-02T00:00:00.000Z') }\n    ]\n} */\n")),Object(i.b)("h3",{id:"e-mail"},"E-mail"),Object(i.b)("p",null,"The email validator attempts to make sure the input is a valid email.\nValidating emails is tricky business due to the complex rules of email address formatting."),Object(i.b)("p",null,"For example ",Object(i.b)("strong",{parentName:"p"},"john.doe@gmail")," is a perfectly valid email but it's most likely just the case that John has forgotten to write .com at the end."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = 'just\\\"not\\\"right@example.com'\nconst validations = { email: true }\nconst result = validate(value, validations) \n/* {\n    value: 'just\\\"not\\\"right@example.com'\n    errors: [{ invalidEmail: true }]\n} */\n")),Object(i.b)("h3",{id:"format"},"Format"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"format")," (regex) -The format validator will validate a value against a regular expression of your chosing."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nconst pattern = /^[0-9]{8}$/ // or you can use new RegExp('^[0-9]{8}$')\nconst value = '05547-022'\nconst validations = { format: pattern }\nconst result = validate(value, validations) \n/* {\n    value: '05547-022',\n    errors: [{ invalidFormat: true }]\n} */\n\n\n")),Object(i.b)("h3",{id:"type"},"Type"),Object(i.b)("p",null,"Type validator ensures a value is of the correct JavaScript type or a custom type."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"type")," - A valid native JavaScript type, a custom type or a array with type"),Object(i.b)("p",null,"Native JavaScript types:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Number")," - double-precision 64-bit binary format IEEE 754 value"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"String")," - a UTF\u201016 character sequence"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Boolean")," - true or false"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Date")," - represents a single moment in time in a platform-independent format. "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Object")," - the Object class represents one of JavaScript's data types."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"Array")," - the Array class is a object that is used in the construction of arrays. "),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = '2001'\nconst validations = { type: Date }\nconst result = validate(value, validations)\n/* {\n    value: '2001',\n    errors:[{ wrongType: 'Date' }]\n} */\n\n")),Object(i.b)("p",null,"Custom types:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"\nclass User { ... }\n\nconst value = 'Admin'\nconst validations = { type: User }\nconst result = validate(value, validations)\n/* {\n    value: 'Admin',\n    errors:[{ wrongType: 'User' }]\n} */\n\n")),Object(i.b)("p",null,"Lists - Array with types:"),Object(i.b)("p",null,"It is possible to validate the type of elements of an array. Just use ",Object(i.b)("inlineCode",{parentName:"p"},"[type]"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = ['2']\nconst validations = { type: [Number] }\nconst result = validate(value, validations)\n/* {\n    value: ['2'],\n    errors:[{ wrongType: ['Number'] }]\n} */\n")),Object(i.b)("h3",{id:"url"},"URL"),Object(i.b)("p",null," The URL validator ensures that the input is a valid URL. Validating URLs are pretty tricky but this validator is inspired on a gist that can be found ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://gist.github.com/dperini/729294"}),Object(i.b)("inlineCode",{parentName:"a"},"here")),". "),Object(i.b)("p",null," The following options are supported: "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"schemes")," - (array of string) A list of schemes to allow. If you want to support any scheme you can use a regexp here (for example ",Object(i.b)("strong",{parentName:"p"},'[".+"]'),"). The default value is ",Object(i.b)("strong",{parentName:"p"},'["http", "https"]'),". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowLocal")," (boolean) - A boolean that if true allows local hostnames such as ",Object(i.b)("strong",{parentName:"p"},"10.0.1.1")," or localhost. The default is ",Object(i.b)("strong",{parentName:"p"},"false"),". "),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"allowDataUrl")," (boolean) - A boolean that if true allows data URLs as defined in ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://tools.ietf.org/html/rfc2397"}),Object(i.b)("inlineCode",{parentName:"a"},"RFC 2397")),". The default is ",Object(i.b)("strong",{parentName:"p"},"false")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),"const value = \"google.com\"\nconst validations = { url: true }\nconst result = validate(value, validations) \n/* {\n    value: 'google.com',\n    errors: [{ invalidURL: true }]\n} */\n\nconst value = \"http://localhost\"\nconst validations = { url: {allowLocal: true} }\nconst result = validate(value, validations) \n/* {\n    value: 'http://localhost',\n    errors: []\n} */\n\nconst options = {schemes: ['ftp']}\nconst value = \"ftp://google.com\"\nconst validations = { url: options }\nconst result = validate(value, validations) \n/* {\n    value: 'ftp://google.com',\n    errors: []\n} */\n")),Object(i.b)("h3",{id:"null-values"},"Null Values"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"type"),", ",Object(i.b)("inlineCode",{parentName:"p"},"length"),", ",Object(i.b)("inlineCode",{parentName:"p"},"numericality"),", ",Object(i.b)("inlineCode",{parentName:"p"},"format")," and ",Object(i.b)("inlineCode",{parentName:"p"},"datetime")," validators won't validate a value if it's ",Object(i.b)("inlineCode",{parentName:"p"},"null")," or ",Object(i.b)("inlineCode",{parentName:"p"},"undefined"),"."),Object(i.b)("p",null,"To ensure your your value is not null, use ",Object(i.b)("inlineCode",{parentName:"p"},"allowNull: false")," or ",Object(i.b)("inlineCode",{parentName:"p"},"presence: true"),"."))}c.isMDXComponent=!0}}]);
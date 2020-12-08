(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var i=n(0),a=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(n),b=i,m=p["".concat(o,".").concat(b)]||p[b]||u[b]||r;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<r;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},247:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/intro-47f913b212891442343e483f5ca2ec47.png"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),a=n(7),r=(n(0),n(103)),o={id:"doc2",title:"Introduction",sidebar_label:"Introduction",custom_edit_url:null,slug:"/"},c={unversionedId:"doc2",id:"doc2",isDocsHomePage:!1,title:"Introduction",description:"Background",source:"@site/docs/doc2.md",slug:"/",permalink:"/ASR/docs/",editUrl:null,version:"current",sidebar_label:"Introduction",sidebar:"someSidebar",next:{title:"Related Work & Our Goals",permalink:"/ASR/docs/doc3"}},l=[{value:"Background",id:"background",children:[]},{value:"Motivation",id:"motivation",children:[]}],s={rightToc:l};function d(e){var t=e.components,o=Object(a.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h3",{id:"background"},"Background"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Human activity recognition")," can provide context on the individual\u2019s lifestyle and aid in providing valuable information to the user on their daily intake of food, physical activity, and metabolism. It becomes particularly useful for eldercare and health care as a monitoring technology,  in addition to this, recognizing the activity can help systems to generate personalized recommendations for a user and enrich their experience. ",Object(r.b)("strong",{parentName:"p"},"Sensor based activity recognition")," is prevalent and mobile devices like ",Object(r.b)("strong",{parentName:"p"},"smartphones")," are one among the ubiquitous technology to monitor the user\u2019s lifestyle. It is estimated that there are ",Object(r.b)("strong",{parentName:"p"},"5.23 billion")," people that have a mobile device in the world amounting to more than ",Object(r.b)("strong",{parentName:"p"},"66.79%")," of the world's population. Smartphones have built-in ",Object(r.b)("strong",{parentName:"p"},"accelerometers")," which make it capable of recognizing daily activities. This helps to gather an understanding of what people are doing at any moment in time, anticipating what they would probably do next, and providing services automatically and according to the context."),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(247).default})),Object(r.b)("h3",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"There are some challenges that limit the translation of the idea into a product, like ",Object(r.b)("inlineCode",{parentName:"p"},"intraclass variability"),", ",Object(r.b)("inlineCode",{parentName:"p"},"interclass similarity"),", ",Object(r.b)("inlineCode",{parentName:"p"},"class imbalance"),", ",Object(r.b)("inlineCode",{parentName:"p"},"ground truth annotation"),". In this project we specifically focus on two of these major challenges in building an activity recognition model, "),Object(r.b)("p",null,"First we address the problem of ",Object(r.b)("strong",{parentName:"p"},"intraclass variability")," which implies that same activity can be performed differently by different individuals and even differently by the same individual over time. That means the classifier may have poor performance when it is applied to the test samples gathered from the users different from the those in training. One solution to this problem is to collect the necessary data from each user beforehand but this could be time-consuming and not feasible."),Object(r.b)("p",null,"Second we address the problem of ",Object(r.b)("strong",{parentName:"p"},"sensor placement variations"),", i.e an activity aware product should be able to recognize the individual\u2019s activity with variations in the placement of sensors as well, since mobile phones can be freely carried around instead of getting strapped to a part of the body like a smart watch, it becomes increasingly difficult to build a recognizer that can account for this variation. Hence an activity recognition method should function independent of the phone's position along the subject's body and should be capable of providing high recognition results even in the absence of adequate amount of training data from different positions."),Object(r.b)("p",null,"We leverage active and semi-supervised learning methods and aim to solve the above two problems by, "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Building a personalized model for an individual, to continually learn from the activities of the individual over time."),Object(r.b)("li",{parentName:"ul"},"Adapting a model trained on data collected from a individual in a particular sensor placement to recognize activities when the placement changes. ")))}d.isMDXComponent=!0}}]);
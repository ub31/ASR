(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=r,m=d["".concat(o,".").concat(f)]||d[f]||u[f]||i;return n?a.a.createElement(m,c(c({ref:t},p),{},{components:n})):a.a.createElement(m,c({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),i=(n(0),n(103)),o={id:"doc3",title:"Related Work & Our Goals",sidebar_label:"Related Work & Goals",custom_edit_url:null},c={unversionedId:"doc3",id:"doc3",isDocsHomePage:!1,title:"Related Work & Our Goals",description:"In the paper \u201cImproving Activity Classification for Health Applications on Mobile Devices using Active and Semi-Supervised Learning\u201c by Brent et. al. , the authors compared the performance improvement of active learning and three different semi-supervised learning methods about automatically adapting classifiers. However, this paper did not further investigate the effect of these augmented classifiers on the test set where the user\u2019s way of performing activities differs from how it was performed in the training data set.",source:"@site/docs/doc3.md",slug:"/doc3",permalink:"/ASR/docs/doc3",editUrl:null,version:"current",sidebar_label:"Related Work & Goals",sidebar:"someSidebar",previous:{title:"Introduction",permalink:"/ASR/docs/"},next:{title:"Dataset Collection",permalink:"/ASR/docs/doc5"}},s=[],p={rightToc:s};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"In the paper ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.176.4918&rep=rep1&type=pdf"}),Object(i.b)("strong",{parentName:"a"},"\u201cImproving Activity Classification for Health Applications on Mobile Devices using Active and Semi-Supervised Learning\u201c by Brent et. al."))," , the authors compared the performance improvement of active learning and three different semi-supervised learning methods about automatically adapting classifiers. However, this paper did not further investigate the effect of these augmented classifiers on the test set where the user\u2019s way of performing activities differs from how it was performed in the training data set."),Object(i.b)("p",null,"In the paper, ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://dl.acm.org/doi/10.1145/2499621"}),Object(i.b)("strong",{parentName:"a"},"A Tutorial on Human Activity Recognition Using Body-Worn Inertial Sensors by Andreas et. al."))," the authors discuss a case study on the influence of sensor placement on the recognition performance, using sensors strapped to different positions on hand and did not deal with mobile phone sensors. "),Object(i.b)("p",null,"Recently, in the paper ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://ieeexplore-ieee-org.ezproxy.lib.utexas.edu/stamp/stamp.jsp?tp=&arnumber=9153742&tag=1"}),Object(i.b)("strong",{parentName:"a"},"Human Activity Recognition Based on Dynamic Active Learning by Haixia et. al.")),", the authors present a method that focuses on activity learning with new activity discovery while they did not actually conduct the performance evaluation in the scenario where training data set and test data set come from different participants."),Object(i.b)("p",null,"The major goal of this project is twofold. They are :"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"We aim to identify the percentage improvement in performance of an activity recognition model over time for a single subject not present in the training dataset using active and semi-supervised learning methods.(",Object(i.b)("inlineCode",{parentName:"li"},"subject-independent"),")"),Object(i.b)("li",{parentName:"ol"},"We aim to identify how much can a classifier be adapted to account for sensor placement variations for a single individual subject.(",Object(i.b)("inlineCode",{parentName:"li"},"subject-dependent"),")")))}l.isMDXComponent=!0}}]);
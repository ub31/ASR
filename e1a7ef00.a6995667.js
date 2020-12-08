(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),d=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(i,".").concat(f)]||p[f]||u[f]||o;return n?a.a.createElement(m,s(s({ref:t},l),{},{components:n})):a.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),o=(n(0),n(103)),i={id:"doc9",title:"Conclusion & Contribution",sidebar_label:"Conclusion & Contribution",custom_edit_url:null},s={unversionedId:"doc9",id:"doc9",isDocsHomePage:!1,title:"Conclusion & Contribution",description:"In this project, we leverage active and semi-supervised learning methods to prove the feasibility of the personalization of a classifier and to observe the degree of improvement with respect to the variation of sensor placements and individual differences. For example, we can achieve 70%-80% accuracy using active learning with the least confidence if 20% of unlabeled data (500 out of 2500 samples) are labeled and added into the training set. That is a huge improvement compared to the baseline classifier that only had less than 20% accuracy.",source:"@site/docs/doc9.md",slug:"/doc9",permalink:"/ASR/docs/doc9",editUrl:null,version:"current",sidebar_label:"Conclusion & Contribution",sidebar:"someSidebar",previous:{title:"Experimental Result & Analysis",permalink:"/ASR/docs/doc8"},next:{title:"Future Work & Key Takeaways",permalink:"/ASR/docs/doc10"}},c=[],l={rightToc:c};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this project, we leverage ",Object(o.b)("strong",{parentName:"p"},"active and semi-supervised learning methods")," to prove the feasibility of the personalization of a classifier and to observe the degree of improvement with respect to the variation of sensor placements and individual differences. For example, we can achieve 70%-80% accuracy using active learning with the least confidence if 20% of unlabeled data (500 out of 2500 samples) are labeled and added into the training set. That is a huge improvement compared to the baseline classifier that only had less than 20% accuracy."),Object(o.b)("p",null,"In experiment 1,  we train our baseline models using the RandomForest classifier for hand and pocket data using LOSO. Then we compare the performance of various query methods of active learning and semi-supervised learning. In our experimental result, ",Object(o.b)("strong",{parentName:"p"},"active learning with the least confidence method has the best performance")," while the mix of active and semi-supervised learning has the worst one. The reason could be that the performance of the baseline classifier is so poor that the ",Object(o.b)("strong",{parentName:"p"},"semi-supervised learning labels many instances incorrectly"),"."),Object(o.b)("p",null,"Moreover, we study the impact of the number of training subjects on the performance: As expected, the performance becomes worse with more training subjects used to build the baseline classifier, which implies it is more difficult to personalize the model as more other people\u2019s activity patterns are considered in the training model. There is a tradeoff between baseline performance and personalization."),Object(o.b)("p",null,"In experiment 2, we further discover how can a classifier be adapted to account for sensor placement variations for a single individual subject. We observe that the performance of placement on hand remains stably high as more unlabeled data of placement on pocket is annotated to labeled data and added to the training set. Eventually, it reaches good performance for both placements. The result indicates that we can ",Object(o.b)("strong",{parentName:"p"},"adapt a classifier with active learning")," to get a good performance of activity recognition even if the placement of the test set is different than that of the baseline training data set."))}d.isMDXComponent=!0}}]);
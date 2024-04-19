"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[532],{9613:(n,e,t)=>{t.d(e,{Zo:()=>f,kt:()=>g});var o=t(9496);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,o,r=function(n,e){if(null==n)return{};var t,o,r={},a=Object.keys(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(o=0;o<a.length;o++)t=a[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var l=o.createContext({}),s=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},f=function(n){var e=s(n.components);return o.createElement(l.Provider,{value:e},n.children)},p="mdxType",u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},d=o.forwardRef((function(n,e){var t=n.components,r=n.mdxType,a=n.originalType,l=n.parentName,f=c(n,["components","mdxType","originalType","parentName"]),p=s(t),d=r,g=p["".concat(l,".").concat(d)]||p[d]||u[d]||a;return t?o.createElement(g,i(i({ref:e},f),{},{components:t})):o.createElement(g,i({ref:e},f))}));function g(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c[p]="string"==typeof n?n:r,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8919:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var o=t(8957),r=(t(9496),t(9613));const a={sidebar_position:3},i="\u81ea\u5b9a\u4e49\u914d\u7f6e",c={unversionedId:"basic/custom_config",id:"basic/custom_config",title:"\u81ea\u5b9a\u4e49\u914d\u7f6e",description:"\u5728build\u6784\u5efa\u65f6\uff0c\u6839\u636eloadEncodeBundleConfig\u83b7\u53d6\u914d\u7f6e",source:"@site/docs/basic/custom_config.md",sourceDirName:"basic",slug:"/basic/custom_config",permalink:"/fe-bundle/docs/basic/custom_config",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"external",permalink:"/fe-bundle/docs/basic/external"},next:{title:"dts",permalink:"/fe-bundle/docs/basic/dts"}},l={},s=[],f={toc:s},p="wrapper";function u(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,o.Z)({},f,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u81ea\u5b9a\u4e49\u914d\u7f6e"},"\u81ea\u5b9a\u4e49\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"build"),"\u6784\u5efa\u65f6\uff0c\u6839\u636e",(0,r.kt)("inlineCode",{parentName:"p"},"loadEncodeBundleConfig"),"\u83b7\u53d6\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const config =\n  _options.config === false\n    ? {}\n    : await loadEncodeBundleConfig(\n        process.cwd(),\n        _options.config === true ? undefined : _options.config,\n      );\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function loadEncodeBundleConfig(\n  cwd: string,\n  configFile?: string,\n): Promise<{ path?: string; data?: ReturnType<typeof defineConfig> }> {\n  const configJoycon = new JoyCon();\n  const configPath = await configJoycon.resolve({\n    files: configFile\n      ? [configFile]\n      : [\n          'wj-fe-bundle.config.ts',\n          'wj-fe-bundle.config.js',\n          'wj-fe-bundle.config.cjs',\n          'wj-fe-bundle.config.mjs',\n          'wj-fe-bundle.config.json',\n          'package.json',\n        ],\n    cwd,\n    stopDir: path.parse(cwd).root,\n    packageKey: 'wj-fe-bundle',\n  });\n\n  if (configPath) {\n    if (configPath.endsWith('.json')) {\n      let data = await loadJson(configPath);\n      if (configPath.endsWith('package.json')) {\n        data = data['wj-fe-bundle'];\n      }\n      if (data) {\n        return { path: configPath, data };\n      }\n      return {};\n    }\n\n    const config = await bundleRequire({\n      filepath: configPath,\n    });\n    return {\n      path: configPath,\n      data: config.mod['wj-fe-bundle'] || config.mod.default || config.mod,\n    };\n  }\n\n  return {};\n}\n")),(0,r.kt)("p",null,"\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"JoyCon"),"\u8bc6\u522b\u6307\u5b9a\u6587\u4ef6\u6216 package.json \u4e2d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"wj-fe-bundle"),"\uff0c\u4f5c\u4e3a\u76f8\u5bf9\u7528\u6237\u914d\u7f6e\u9879\u7684\u8fd4\u56de\u3002"))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[447],{9613:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(9496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(t),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||s;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var s=t.length,a=new Array(s);a[0]=f;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},6137:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var r=t(8957),o=(t(9496),t(9613));const s={sidebar_position:4},a="dts",i={unversionedId:"basic/dts",id:"basic/dts",title:"dts",description:"\u5728CLI\u6307\u4ee4\u89e3\u6790\u65f6\uff0c\u683c\u5f0f\u5316 dts \u76f8\u5173\u914d\u7f6e",source:"@site/docs/basic/dts.md",sourceDirName:"basic",slug:"/basic/dts",permalink:"/fe-bundle/docs/basic/dts",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"\u81ea\u5b9a\u4e49\u914d\u7f6e",permalink:"/fe-bundle/docs/basic/custom_config"},next:{title:"sourcemap",permalink:"/fe-bundle/docs/basic/sourcemap"}},l={},c=[],p={toc:c},u="wrapper";function d(e){let{components:n,...t}=e;return(0,o.kt)(u,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"dts"},"dts"),(0,o.kt)("p",null,"\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"CLI"),"\u6307\u4ee4\u89e3\u6790\u65f6\uff0c\u683c\u5f0f\u5316 dts \u76f8\u5173\u914d\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"if (flags.dts || flags.dtsResolve || flags.dtsOnly) {\n  options.dts = {};\n  if (typeof flags.dts === 'string') {\n    options.dts.entry = flags.dts;\n  }\n  if (flags.dtsResolve) {\n    options.dts.resolve = flags.dtsResolve;\n  }\n  if (flags.dtsOnly) {\n    options.dts.only = true;\n  }\n}\n")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u5728\u6267\u884c\u6784\u5efa\u65f6\uff0c\u6839\u636e",(0,o.kt)("inlineCode",{parentName:"p"},"options"),"\u7684\u9009\u9879\uff0c\u521b\u5efa\u65b0\u7684\u7ebf\u7a0b\u6267\u884c rollup \u6307\u4ee4\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"const dtsTask = async () => {\n  if (options.dts) {\n    await new Promise<void>((resolve, reject) => {\n      const worker = new Worker(path.join(__dirname, './rollup.js'));\n      worker.postMessage({\n        configName: item?.name,\n        options: {\n          ...options, // functions cannot be cloned\n          banner: undefined,\n          footer: undefined,\n          esbuildPlugins: undefined,\n          esbuildOptions: undefined,\n          plugins: undefined,\n          treeshake: undefined,\n          onSuccess: undefined,\n          outExtension: undefined,\n        },\n      });\n      worker.on('message', (data) => {\n        if (data === 'error') {\n          reject(new Error('error occured in dts build'));\n        } else if (data === 'success') {\n          resolve();\n        } else {\n          const { type, text } = data;\n          if (type === 'log') {\n            console.log(text);\n          } else if (type === 'error') {\n            console.error(text);\n          }\n        }\n      });\n    });\n  }\n};\n")),(0,o.kt)("p",null,"\u6839\u636e\u914d\u7f6e\uff0c\u751f\u6210 dts"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"async function runRollup(options: RollupConfig) {\n  const { rollup } = await import('rollup');\n  try {\n    const start = Date.now();\n    const getDuration = () => {\n      return `${Math.floor(Date.now() - start)}ms`;\n    };\n    logger.info('dts', 'Build start');\n    const bundle = await rollup(options.inputConfig);\n    const results = await Promise.all(options.outputConfig.map(bundle.write));\n    const outputs = results.flatMap((result) => result.output);\n    logger.success('dts', `\u26a1\ufe0f Build success in ${getDuration()}`);\n    reportSize(\n      logger,\n      'dts',\n      outputs.reduce((res, info) => {\n        const name = path.relative(\n          process.cwd(),\n          path.join(options.outputConfig[0].dir || '.', info.fileName),\n        );\n        return {\n          ...res,\n          [name]: info.type === 'chunk' ? info.code.length : info.source.length,\n        };\n      }, {}),\n    );\n  } catch (error) {\n    handleError(error);\n    logger.error('dts', 'Build error');\n  }\n}\n")),(0,o.kt)("p",null,"\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"JoyCon"),"\u8bc6\u522b\u6307\u5b9a\u6587\u4ef6\u6216 package.json \u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"wj-fe-bundle"),"\uff0c\u4f5c\u4e3a\u76f8\u5bf9\u7528\u6237\u914d\u7f6e\u9879\u7684\u8fd4\u56de\u3002"))}d.isMDXComponent=!0}}]);
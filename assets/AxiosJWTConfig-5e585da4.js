var d=Object.defineProperty;var l=(r,e,t)=>e in r?d(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var c=(r,e,t)=>(l(r,typeof e!="symbol"?e+"":e,t),t);import{cb as h,bK as p,cc as i,cd as u}from"./index-ad7ff6c0.js";class s extends Error{}s.prototype.name="InvalidTokenError";function f(r){return decodeURIComponent(atob(r).replace(/(.)/g,(e,t)=>{let n=t.charCodeAt(0).toString(16).toUpperCase();return n.length<2&&(n="0"+n),"%"+n}))}function T(r){let e=r.replace(/-/g,"+").replace(/_/g,"/");switch(e.length%4){case 0:break;case 2:e+="==";break;case 3:e+="=";break;default:throw new Error("base64 string is not of the correct length")}try{return f(e)}catch{return atob(e)}}function g(r,e){if(typeof r!="string")throw new s("Invalid token specified: must be a string");e||(e={});const t=e.header===!0?0:1,n=r.split(".")[t];if(typeof n!="string")throw new s(`Invalid token specified: missing part #${t+1}`);let o;try{o=T(n)}catch(a){throw new s(`Invalid token specified: invalid base64 for part #${t+1} (${a.message})`)}try{return JSON.parse(o)}catch(a){throw new s(`Invalid token specified: invalid json for part #${t+1} (${a.message})`)}}class k{static getJWTInstance(){return this.JWTInstance||(this.JWTInstance=h.create({baseURL:p,headers:{"Content-Type":"application/json"},withCredentials:!0}),this.JWTInstance.interceptors.request.use(async e=>{const t=i.getItem("USER"),n=t==null?void 0:t.accessToken;if(!n)return e;if(g(n).exp<new Date().getTime()/1e3){const a=await u();i.setItem("USER",{...t,accessToken:a}),console.log("REFRESHED TOKEN",a),e.headers.authorization=`Bearer ${a}`}else e.headers.authorization=`Bearer ${n}`;return e})),this.JWTInstance}}c(k,"JWTInstance",null);export{k as A};

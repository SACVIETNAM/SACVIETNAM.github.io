import{A as r}from"./AxiosJWTConfig-5e585da4.js";import{aw as c}from"./index-ad7ff6c0.js";const s=c.getAxiosInstance(),n=r.getJWTInstance(),A=async(t=5,a=1)=>(await s.get(`/articles?limit=${t}&page=${a}`)).data.allArticle,p=async t=>(await s.get(`/articles/${t}`)).data.article,u=async()=>(await s.get("/articles/size")).data.size,x=async({title:t,description:a,image:e,content:i})=>(await n.post("/articles",{title:t,description:a,image:e,content:i})).data.article;export{u as a,p as b,x as c,A as g};

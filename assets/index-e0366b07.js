import{r as s,L as m,j as e,az as d,m as x}from"./index-51183d7f.js";import{u as p}from"./AxiosJWTConfig-54097723.js";import{a as h}from"./index.esm-e7ba8e48.js";import{W as g}from"./index.module-44f5c2d3.js";import{C as a}from"./comingsoon-square-df519825.js";import{P as u}from"./index-5ddd2323.js";import{g as f,a as j}from"./articleService-fa1498c6.js";import"./authService-57dbc50f.js";import"./Pagination-67e77464.js";import"./LeftOutlined-9a65a1da.js";import"./RightOutlined-d1bd1910.js";import"./pickAttrs-4856a254.js";import"./index-f064d780.js";import"./compact-item-c1d3c96e.js";import"./index-065e50bb.js";import"./CloseCircleFilled-aa26d74b.js";const v=10,R=()=>{const{trans:r}=s.useContext(m),[i,o]=s.useState(1),{data:l}=p({queryKey:["articlesSize"],queryFn:j}),n=t=>e.jsx(d,{to:`/blog/${t._id}`,children:e.jsxs(x.article,{className:"grid grid-cols-6 gap-0 hover:shadow-md rounded-r-lg group max-h-[300px] mt-2",initial:{opacity:0,x:100},whileInView:{opacity:1,x:0},transition:{duration:.5},viewport:{once:!0},children:[e.jsx("div",{className:"col-span-full md:col-span-2",children:e.jsx("div",{className:"overflow-hidden rounded-l-lg",children:e.jsx("img",{src:t.image||a,onError:c=>c.target.src=a,className:"group-hover:scale-110 duration-300 transition-all object-center object-cover select-none w-full h-full max-h-[200px] group-hover:brightness-90",alt:t.title})})}),e.jsxs("div",{className:"p-4 overflow-hidden bg-white border rounded-r-lg col-span-full md:col-span-4",children:[e.jsx("h3",{className:"text-xl font-semibold hoverable-text",children:t.title}),e.jsxs("div",{className:"flex gap-1",children:[e.jsx(h,{}),e.jsx("p",{className:"text-sm font-semibold",children:t.view})]}),e.jsx("span",{className:"font-semibold text-gray-600 text-md",children:new Date(t.publishedAt).toLocaleDateString("vi-VN")}),e.jsx("p",{className:"text-sm italic",children:t.description})]})]})},t._id);return e.jsxs("div",{className:"relative",children:[e.jsxs("div",{className:"max-w-screen-lg min-h-screen px-2 mx-auto",children:[e.jsx("h1",{className:"mt-8 mb-8 text-2xl font-bold text-center font-display",children:r({en:"SAC's journey",vi:"Hành trình của SAC"})}),e.jsx(u,{currentPage:i,pageSize:v,setPage:o,total:l||0,className:"flex flex-col gap-16 md:gap-4 ",queryFn:f,renderEach:n,queryKey:"articles"})]}),e.jsx(g,{className:"absolute bottom-0.5 left-0 right-0 -z-[1] h-20 lg:h-40 translate-y-1 ",fill:"#4096ff",paused:!1,options:{amplitude:20,speed:.2,points:3}})]})};export{R as default};
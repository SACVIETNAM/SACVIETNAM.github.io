import{j as t,m as i,r,L as h,G as f,T as y}from"./index-51183d7f.js";import{A as m,u as g}from"./index-01f4aa4f.js";import{F as j,a as b,b as w}from"./index.esm-77f1b63d.js";import{a as p}from"./index-eafa9bfc.js";import{A as N}from"./index-24c1e6bc.js";import{I as C}from"./index.esm-e7ba8e48.js";import{L as k,a as A}from"./index.esm-e0b70f2c.js";import{a as I,b as T,c as B}from"./index.esm-5a656ef8.js";import{E as L}from"./Each-d36c55bb.js";import{T as F}from"./index.esm-08ed952b.js";import{W as M}from"./index.module-44f5c2d3.js";import{P as H}from"./index-694bb69d.js";const S=()=>t.jsx(i.div,{children:t.jsxs("div",{className:"flex justify-center gap-2 pt-4 text-2xl text-center md:text-3xl lg:text-4xl font-display2 text-primary",children:[t.jsx(i.span,{className:"inline-block",initial:{opacity:0,x:80},animate:{opacity:1,x:0},transition:{duration:.8,delay:.8},children:"Make"}),t.jsx(i.span,{className:"inline-block",initial:{opacity:0,x:100},animate:{opacity:1,x:0},transition:{duration:1,delay:.5},children:"your"}),t.jsx(i.span,{className:"inline-block",initial:{opacity:0,x:-100},animate:{opacity:1,x:4},transition:{duration:1,delay:.5},children:"cool"}),t.jsx(i.span,{className:"inline-block",initial:{opacity:0,x:-80},animate:{opacity:1,x:4},transition:{duration:.8,delay:.8},children:"move"})]})}),u=({item:e,className:l,show:n})=>{const{trans:s}=r.useContext(h),[a,o]=r.useState(!1),c=()=>{o(!a)};return t.jsx(i.div,{className:l,onClick:n?void 0:c,initial:{rotateY:90},animate:{rotateY:0},children:t.jsx(i.div,{whileTap:{rotateY:n?0:a?90:-90,scale:.9},className:"flex flex-col items-center h-full p-2 text-center border rounded-lg shadow-md cursor-pointer select-none justify-evenly",children:n||a?t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:"flex items-center gap-2 px-2 text-xs font-semibold md:gap-2 md:text-xl text-primary",children:[t.jsx("div",{className:"-translate-y-0.5",children:t.jsx(e.Icon,{})}),t.jsx(m,{text:s(e.name)})]}),t.jsx(i.span,{initial:{scale:.4},animate:{scale:1},className:"p-2 text-xs text-justify md:text-base text-secondary",children:s(e.description)})]}):t.jsxs(t.Fragment,{children:[t.jsx(e.Icon,{className:"text-4xl text-secondary"}),t.jsx("h3",{className:"text-sm font-semibold md:text-xl",children:s(e.name)})]})})},e.name.en)},P="/assets/phone-14145ee3.png",D=g.div`
  background-image: url(${P});
  background-repeat: no-repeat;
  background-size: contain;
  aspect-ratio: 6/12;
  max-width: 300px;
  min-width: 200px;
  height: fit-content;
  padding-block: 24px;
  padding-inline: 16px;
  position: relative;
  user-select: none;
`,Z=g.div`
  position: absolute;
  z-index: -1;
  inset: 0;
  overflow: hidden;
`,v=g(i.button)`
  position: absolute;
  border-radius: 50%;
  padding: 8px;
  top: 50%;
  color: gray;
  border-width: 1px;
`,E=()=>{const[e,l]=r.useState(0),n=p[e],s=()=>{l(o=>o>0?e-1:p.length-1)},a=()=>{l(o=>o<p.length-1?e+1:0)};return t.jsxs(D,{className:"w-[200px] lg:w-[300px]",children:[t.jsx(Z,{className:" md:px-4 md:py-2.5 p-2.5 py-1 overflow-hidden rounded-[50px] md:rounded-[60px]",children:t.jsx(N,{children:t.jsx(i.img,{initial:{opacity:0},animate:{opacity:1},src:n,className:"object-cover w-full h-full p-1 -translate-x-[2px]"},e)})}),t.jsxs("div",{children:[t.jsx(v,{onClick:s,className:"shadow-md -left-9",whileTap:{scale:.9},initial:{y:"-50%"},children:t.jsx(j,{})}),t.jsx(v,{onClick:a,className:"shadow-md -right-8",whileTap:{scale:.8},initial:{y:"-50%"},children:t.jsx(b,{})})]})]})};function V(e){return f({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M17.0001 12C17.5524 12 18.0001 12.4477 18.0001 13V22H16.0001V14H8.00015V22H6.00015V13C6.00015 12.4477 6.44786 12 7.00015 12H17.0001ZM12.0001 16V18H10.0001V16H12.0001ZM12.0001 6C14.3491 6 16.3827 7.34978 17.3678 9.31602L15.5787 10.2108C14.922 8.89991 13.5662 8 12.0001 8C10.4341 8 9.07833 8.89991 8.42163 10.2108L6.63247 9.31602C7.61755 7.34978 9.65122 6 12.0001 6ZM12.0001 2C15.9153 2 19.3049 4.24991 20.9466 7.5273L19.1576 8.42242C17.8443 5.80019 15.1325 4 12.0001 4C8.86783 4 6.15596 5.80019 4.84271 8.42242L3.05371 7.5273C4.69541 4.24991 8.08503 2 12.0001 2Z"}}]})(e)}const z=()=>{const[e,l]=r.useState(!1),{trans:n}=r.useContext(h),s=[d[0],d[1]],a=[d[2],d[3]],o=()=>{l(!0)};return t.jsxs("div",{className:"max-w-screen-xl p-2 pb-8 mx-auto",children:[t.jsx(m,{text:n({en:"Overview of Application",vi:"Tổng quan ứng dụng"}),className:"text-2xl text-center lg:text-4xl font-display text-primary"}),t.jsxs("div",{className:"grid grid-cols-1 gap-0 mt-8 lg:gap-12 lg:grid-cols-3 place-items-center",children:[t.jsx("div",{className:"flex flex-col justify-around order-2 w-full h-full",children:s.map((c,x)=>t.jsx("div",{className:"w-full p-2 lg:p-8",children:t.jsx(u,{show:e,className:"w-full h-[150px] md:h-[200px]",item:c})},x))}),t.jsxs("div",{className:"order-1 lg:order-2 h-fit",children:[t.jsx("div",{className:"flex justify-center my-8 mt-16",children:!e&&t.jsx(y,{label:n({en:"Show All",vi:"Hiện hết"}),onPress:o})}),t.jsx(E,{})]}),t.jsx("div",{className:"flex flex-col justify-around order-3 w-full h-full",children:a.map((c,x)=>t.jsx("div",{className:"w-full p-2 lg:p-8",children:t.jsx(u,{show:e,className:"w-full h-[150px] md:h-[200px]",item:c})},x))})]})]})},d=[{name:{en:"Monitor Status",vi:"Theo dõi trạng thái"},description:{en:"Directly monitor the device status: battery level, device power source, temperature, and humidity from the device's sensors.",vi:"Theo dõi trực tiếp trạng thái thiết bị: lượng pin, nguồn, nhiệt độ và độ ẩm từ cảm biến thiết bị."},Icon:C},{name:{en:"Device control",vi:"Điều khiển thiết bị"},description:{en:"Power on/off the device, adjust fan speed, set up other automatic on/off features.",vi:"Bật/tắt nguồn thiết bị, thay đổi tốc độ quạt, thiết lập các tính năng tự động."},Icon:V},{name:{en:"Offline operation",vi:"Không cần kết nối mạng"},description:{en:"Utilizing BLE (Bluetooth Low Energy) helps save battery power.",vi:"Ứng dụng BLE (Bluetooth Low Energy) để tiết kiệm năng lượng."},Icon:k},{name:{en:"Lightweight",vi:"Nhỏ gọn"},description:{en:"The app takes up very little storage space on your phone.",vi:"Dung lượng gọn nhẹ, không chiếm nhiều dung lượng điện thoại của bạn."},Icon:I}];function O(e){return f({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M120,96a24,24,0,1,1,24-24A24,24,0,0,1,120,96Zm88-16a24,24,0,1,0,24,24A24,24,0,0,0,208,80Zm-56,80a24,24,0,1,0,24,24A24,24,0,0,0,152,160Z",opacity:"0.2"}},{tag:"path",attr:{d:"M184,184a32,32,0,0,1-32,32c-13.7,0-26.95-8.93-31.5-21.22a8,8,0,0,1,15-5.56C137.74,195.27,145,200,152,200a16,16,0,0,0,0-32H40a8,8,0,0,1,0-16H152A32,32,0,0,1,184,184Zm-64-80a32,32,0,0,0,0-64c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C105.74,60.73,113,56,120,56a16,16,0,0,1,0,32H24a8,8,0,0,0,0,16Zm88-32c-13.7,0-26.95,8.93-31.5,21.22a8,8,0,0,0,15,5.56C193.74,92.73,201,88,208,88a16,16,0,0,1,0,32H32a8,8,0,0,0,0,16H208a32,32,0,0,0,0-64Z"}}]})(e)}const R=()=>{const[e,l]=r.useState(!1),{trans:n}=r.useContext(h),s=()=>{l(!0)};return t.jsxs("div",{className:"max-w-screen-xl py-8 pb-20 mx-auto mt-20",children:[t.jsx(m,{text:n({en:"Overview of Features",vi:"Tổng quan tính năng"}),className:"text-2xl text-center lg:text-4xl font-display text-primary"}),t.jsx("div",{className:"flex flex-col items-center justify-center my-8 mt-16",children:!e&&t.jsxs(t.Fragment,{children:[t.jsx(y,{label:n({en:"Show All",vi:"Hiện hết"}),onPress:s}),t.jsxs("p",{className:"mt-2 text-center text-secondary",children:["(",n({en:"Press on the features for more details",vi:"Chạm vào các thẻ để đọc chi tiết"}),")"]})]})}),t.jsx("div",{className:"flex flex-wrap mt-8",children:t.jsx(L,{of:W,render:(a,o)=>t.jsx(u,{show:e,className:"w-1/2 p-2 md:p-8 md:py-4 md:w-1/3 h-[200px]",item:a},o)})})]})},W=[{name:{en:"Body Cooling",vi:"Làm mát cơ thể"},description:{en:"With 3 different fan speeds, you won't have to worry about getting hot.",vi:"Với 3 chế độ quạt tùy chọn, bạn không phải lo về vấn đề nóng bức."},Icon:O},{name:{en:"Body Temp & Humidity",vi:"Nhiệt & độ ẩm cơ thể"},description:{en:"Monitor the temperature and humidity inside your clothing to better protect yourself.",vi:"Theo dõi nhiệt độ và độ ẩm bên trong trang phục của bạn để bảo vệ bản thân tốt hơn."},Icon:T},{name:{en:"Smart Design",vi:"Thiết kế thông minh"},description:{en:"It can be disassembled & cleaned and can be paired with various types of clothing, suitable even for those who have to wear uniforms for work.",vi:"Dễ dàng tháo rời & vệ sinh và có thể sử dụng kèm với nhiều loại trang phục, cực kỳ phù hợp với những người phải mặc đồng phục để làm việc."},Icon:B},{name:{en:"Control via smartphone",vi:"Điều khiển với smartphone"},description:{en:"Connect to the phone to monitor body status, device status, and customize the device through Bluetooth.",vi:"Kết nối với điện thoại thông minh để theo dõi trạng thái cơ thể, thiết bị và tùy chỉnh thiết bị."},Icon:w},{name:{en:"Auto-adjustment",vi:"Tự động điều chỉnh"},description:{en:"Based on your body's condition, the device will provide settings tailored to your state.",vi:"Dựa trên trạng thái cơ thể, thiết bị sẽ cung cấp thiết lập phù hợp."},Icon:F},{name:{en:"Long battery life",vi:"Thời lượng pin dài"},description:{en:"The battery usually lasts about 6 - 8 hours to help you work outdoors all day.",vi:"Với thường lượng pin dài khoảng 6 - 8 tiếng giúp bạn làm việc ngoài trời cả ngày."},Icon:A}],q=()=>{const{trans:e}=r.useContext(h);return t.jsxs("div",{className:"bg-primary h-[150px] md:h-[300px] lg:h-[400px] relative flex items-center justify-center select-none mb-[50px] md:mb-[100px] lg:mb-[150px]	",children:[t.jsxs("div",{className:"absolute top-0 bottom-0 z-10 w-full -translate-x-1/2 translate-y-1/2 left-1/2",children:[t.jsx("div",{className:"absolute z-10 w-full text-3xl text-center text-white -translate-y-full -top-2 text-nowrap font-display md:text-6xl lg:text-7xl",children:t.jsx(m,{text:e({en:"Smart Aircon Belt",vi:"Đai điều hòa TM"})})}),t.jsx(H,{})]}),t.jsx(M,{className:"absolute bottom-0.5 left-0 right-0 z-[1] h-10 lg:h-20 translate-y-1",fill:"#fff",paused:!1,options:{amplitude:20,speed:.2,points:3}})]})},it=()=>t.jsxs("div",{className:"pb-32",children:[t.jsx(q,{}),t.jsx("div",{className:"max-w-screen-xl mx-auto",children:t.jsx(S,{})}),t.jsx("div",{className:"my-32",children:t.jsx(R,{})}),t.jsx(z,{})]});export{it as default};
import{_ as p,c as f,a as e,b as s,w as d,F as g,r as o,o as b,n as i,m as v,d as m}from"./index-BQ3Nmv-Z.js";const x="/agree/assets/%E6%AF%8D%E8%A6%AA%E7%AF%80DM_20240417-%E5%AE%8C%E7%A8%BF6-GfAoWqwY.jpg",h={data(){return{userData:{data:{user:{tel:""}}}}}},V=e("div",{class:""},[e("img",{src:"https://noke.jutretail.com.tw/images/logo.png",alt:"logo"})],-1),k={class:"container"},E=e("img",{class:"w-100 d-block",src:x,alt:""},null,-1),F={class:"col-md-4 mb-2 mx-auto"},A=e("label",{for:"orderTel",class:"sr-only text-primary py-3"},[e("span",{class:"text-danger me-1 align-middle"},"*"),m("手機號碼")],-1),w={class:"col-md-4 mb-4 mx-auto"},y=e("span",{class:"text-danger me-1 align-middle"},"*",-1),D=e("button",{class:"mx-auto d-block mb-6"},"下一步",-1);function B(l,a,C,q,n,M){const r=o("VField"),c=o("ErrorMessage"),u=o("VForm");return b(),f(g,null,[V,e("div",k,[E,s(u,{onSubmit:a[1]||(a[1]=t=>l.handleOrderSubmit())},{default:d(({errors:t})=>[e("div",F,[A,s(r,{type:"text",id:"orderTel",name:"電話",class:i(["form-control",{"is-invalid":t.電話}]),placeholder:"請輸入電話",rules:"required|numeric|min:10|max:10",autofocus:"",modelValue:n.userData.data.user.tel,"onUpdate:modelValue":a[0]||(a[0]=_=>n.userData.data.user.tel=_)},null,8,["class","modelValue"]),s(c,{name:"電話",class:"invalid-feedback"})]),e("div",w,[y,s(r,{name:"terms",type:"checkbox",value:!0,"unchecked-value":!1,class:i({"is-invalid":t.terms}),rules:"required",autofocus:""},{default:d(()=>[e("label",null,[e("input",v({type:"checkbox",name:"terms"},l.field,{value:!0}),null,16),m(" 我同意 ")])]),_:2},1032,["class"]),s(c,{name:"terms",class:"invalid-feedback"})]),D]),_:1})])],64)}const T=p(h,[["render",B]]);export{T as default};

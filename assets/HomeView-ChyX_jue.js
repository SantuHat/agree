import{_ as f}from"./母親節DM_20240417-完稿6-BBdvnB3v.js";import{_ as h,c as g,a as s,w as n,b as e,F as b,r as a,o as x,n as i,t as k,d as v}from"./index-D9vldo3Z.js";const V={data(){return{userData:{tel:""}}},methods:{handleOrderSubmit(l){console.log(l),console.log("userData",this.userData),window.location="https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx"}}},y=e("img",{src:"https://noke.jutretail.com.tw/images/logo.png",alt:"logo"},null,-1),w={class:"container"},T=e("img",{class:"w-100 d-block",src:f,alt:""},null,-1),D={class:"col-md-4 mb-2 mx-auto"},F=e("label",{for:"orderTel",class:"sr-only text-primary py-3"},[e("span",{class:"text-danger me-1 align-middle"},"*"),v("手機號碼")],-1),S={class:"col-md-4 mb-2 mx-auto"},B=e("span",{class:"text-danger me-1 align-middle"},"*",-1),C={class:"form-group form-check"},E=e("label",{for:"acceptTerms",class:"form-check-label"},"我同意",-1),L={class:"invalid-feedback"},N=e("div",{class:"form-group text-center mb-5"},[e("button",{type:"submit",class:"btn btn-primary mr-1"},"參加活動")],-1);function j(l,o,q,M,r,d){const m=a("RouterLink"),c=a("VField"),u=a("ErrorMessage"),_=a("VForm");return x(),g(b,null,[s(m,{to:"/"},{default:n(()=>[y]),_:1}),e("div",w,[T,s(_,{onSubmit:o[1]||(o[1]=t=>d.handleOrderSubmit(t))},{default:n(({errors:t})=>[e("div",D,[F,s(c,{type:"tel",id:"orderTel",name:"手機號碼",class:i(["form-control",{"is-invalid":t.手機號碼}]),placeholder:"請輸入手機號碼",rules:"required|numeric|min:10|max:10",modelValue:r.userData.tel,"onUpdate:modelValue":o[0]||(o[0]=p=>r.userData.tel=p)},null,8,["class","modelValue"]),s(u,{name:"手機號碼",class:"invalid-feedback"})]),e("div",S,[e("div",{class:i(["d-flex",{"is-invalid":t.acceptTerms}])},[B,e("div",C,[s(c,{name:"acceptTerms",type:"checkbox",id:"acceptTerms",value:!0,class:"form-check-input",rules:"required"}),E])],2),e("div",L,k(t.acceptTerms?"請勾選同意":""),1)]),N]),_:1})])],64)}const z=h(V,[["render",j]]);export{z as default};

import{a as m,t as g}from"./telStore-UFdniFG9.js";import{_ as v,m as D,a as E,c as p,b as n,w as h,d as e,e as w,F as P,r as c,o as d,n as f,t as b,f as V,g as T}from"./index-Dr2PZ3z3.js";const I="/agree/assets/%E6%AF%8D%E8%A6%AA%E7%AF%80DM_20240417-%E5%AE%8C%E7%A8%BF6-GfAoWqwY.jpg";var R={VITE_APP_API_URL:"https://testappbackend.jutretail.com.tw/",VITE_APP_API_NAME:"lottery-registration",BASE_URL:"/agree/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_NAME:u}=R,F={data(){return{userData:{tel:""},isRegistration:!1,type:"create",telId:0}},methods:{...D(g,["setTel","getTel"]),handleOrderSubmit(s){console.log(s),console.log("userData",this.userData),this.setTel(this.userData.tel),this.type==="create"?(this.postForm(),window.location="https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx"):this.type==="update"&&this.updateApi(this.telId)},updateInput(s){this.type=s,this.isRegistration=!1},getDate(){const s=`/api/${u}`;m.get(s).then(t=>{console.log(t.data),console.log(this.tel),this.getTel();const a=t.data;this.isRegistration=a.some(l=>(console.log("item",l),l.tel===this.tel&&(this.telId=l.id),l.tel===this.tel)),console.log("isRegistration",this.isRegistration)}).catch(t=>{console.log(t)})},postForm(){const s=`/api/${u}`;m.post(s,this.userData).then(t=>{console.log(t.data)}).catch(t=>{alert(t)})},updateApi(s){console.log("id",s);const t=`/api/${u}/${s}`;m.put(t,this.userData).then(a=>{console.log(a.data),alert("已完成修改"),window.location="https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx"}).catch(a=>{alert("此號碼已存在")})},goLuckyPage(){window.location="https://testappcrm.jutretail.com.tw/Pages/LuckyIndex.aspx"}},computed:{...E(g,["tel"])},created(){this.getDate()}},L=e("img",{src:"https://noke.jutretail.com.tw/images/logo.png",alt:"logo"},null,-1),S={class:"container"},C=e("img",{class:"w-100 d-block",src:I,alt:""},null,-1),j={key:0,class:"form-group text-center mb-5"},B={class:"col-md-4 mb-2 mx-auto"},M=e("label",{for:"orderTel",class:"sr-only text-primary py-3"},[e("span",{class:"text-danger me-1 align-middle"},"*"),T("手機號碼")],-1),N={key:0,class:"col-md-4 mb-2 mx-auto"},O=e("span",{class:"text-danger me-1 align-middle"},"*",-1),q={class:"form-group form-check"},U=e("label",{for:"acceptTerms",class:"form-check-label"},"我同意",-1),W={class:"invalid-feedback"},z={class:"form-group text-center mb-5"},G={type:"submit",class:"btn btn-primary mr-1"};function Y(s,t,a,l,r,i){const y=c("RouterLink"),_=c("VField"),k=c("ErrorMessage"),x=c("VForm");return d(),p(P,null,[n(y,{to:"/"},{default:h(()=>[L]),_:1}),e("div",S,[C,r.isRegistration?(d(),p("div",j,[e("button",{class:"btn btn-primary my-4 d-block mx-auto",onClick:t[0]||(t[0]=o=>i.updateInput("update"))},"使用其他號碼參加活動"),e("button",{onClick:t[1]||(t[1]=(...o)=>i.goLuckyPage&&i.goLuckyPage(...o)),type:"button",class:"btn btn-secondary my-4 d-block mx-auto"},"查詢抽獎號嗎")])):(d(),w(x,{key:1,onSubmit:t[3]||(t[3]=o=>i.handleOrderSubmit(o))},{default:h(({errors:o})=>[e("div",B,[M,n(_,{type:"tel",id:"orderTel",name:"手機號碼",class:f(["form-control",{"is-invalid":o.手機號碼}]),placeholder:"請輸入手機號碼",rules:"required|numeric|min:10|max:10|startsWith09",modelValue:r.userData.tel,"onUpdate:modelValue":t[2]||(t[2]=A=>r.userData.tel=A)},null,8,["class","modelValue"]),n(k,{name:"手機號碼",class:"invalid-feedback"})]),r.type==="create"?(d(),p("div",N,[e("div",{class:f(["d-flex",{"is-invalid":o.acceptTerms}])},[O,e("div",q,[n(_,{name:"acceptTerms",type:"checkbox",id:"acceptTerms",value:!0,class:"form-check-input",rules:"required"}),U])],2),e("div",W,b(o.acceptTerms?"請勾選同意":""),1)])):V("",!0),e("div",z,[e("button",G,b(r.type==="create"?"參加活動":"送出"),1)])]),_:1}))])],64)}const K=v(F,[["render",Y]]);export{K as default};

import{a as p}from"./axios-5KWFXKlW.js";import{_ as u,c as s,b as i,w as h,d as l,a as t,F as c,j as P,r as f,o as r,t as n,p as m,e as I}from"./index-CLAVCOEV.js";var A={VITE_APP_API_URL:"https://testappbackend.jutretail.com.tw",VITE_APP_API_NAME:"lottery-registration",BASE_URL:"/agree/",MODE:"production",DEV:!1,PROD:!0,SSR:!1};const{VITE_APP_API_URL:g,VITE_APP_API_NAME:E}=A,D={data(){return{telData:[]}},methods:{getDate(){const e=`${g}/${E}`;p.get(e).then(a=>{console.log(a.data),this.telData=a.data}).catch(a=>{console.log(a)})}},mounted(){this.getDate()}},V=e=>(m("data-v-3a4e169c"),e=e(),I(),e),x={class:"text-center box-shadow-gray-300 border-collapse border-1 p-1"},b=V(()=>t("thead",null,[t("tr",null,[t("th",null,"編號"),t("th",null,"手機號碼"),t("th",null,"建立時間")])],-1)),R={class:"p-1"},S={class:"p-1"};function k(e,a,w,L,_,T){const d=f("RouterLink");return r(),s(c,null,[i(d,{to:"/"},{default:h(()=>[l("Home")]),_:1}),l(" | "),t("table",x,[b,(r(!0),s(c,null,P(_.telData,o=>(r(),s("tbody",{key:o.id},[t("tr",null,[t("td",null,n(o.id),1),t("td",R,n(o.tel),1),t("td",S,n(o.created_at),1)])]))),128))])],64)}const N=u(D,[["render",k],["__scopeId","data-v-3a4e169c"]]);export{N as default};
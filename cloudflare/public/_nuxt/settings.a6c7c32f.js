import{l as k,u as $,n as h,r as i,o as y,c as b,a as l,t as r,b as t,w as n,d,s as w,F as O}from"./entry.dc320ebb.js";/* empty css             */const U={class:"text-h4"},I={class:"mainGroup"},N={style:{"margin-top":"20px"}},P={style:{"margin-top":"10px"}},B={key:0,style:{"margin-top":"10px"}},m=k(),v={position:"top-right",timeout:5e3,closeOnClick:!0,pauseOnFocusLoss:!0,pauseOnHover:!0,draggable:!1,draggablePercent:.6,showCloseButtonOnHover:!0,hideProgressBar:!0,closeButton:"button",icon:!0,rtl:!1},T={data(){return{drawer:!0,rail:!0,config:{users:{},site:{},surveys:{},captcha:{}},originalConfig:{users:{},site:{},surveys:{},captcha:{}},loading:!0}},methods:{async update(){let a=!0;for(const e in this.config)if(typeof this.config[e]=="object")for(const s in this.config[e])this.config[e][s]!=this.originalConfig[e][s]&&(a=!1);else this.config[e]!=this.originalConfig[e]&&(a=!1);if(a)return m.info(this.$t("settings.no_changes"),v),!1;this.loading=!0,(await $fetch("/api/config/set",{method:"POST",body:JSON.stringify({token:sessionStorage.getItem("_cransurvey_token"),data:this.config})})).code==0?m.success(this.$t("editUser.update_success"),v):m.error(this.$t("editUser.update_failed"),v),this.loadConfig()},async loadConfig(){const a=await $fetch("/api/config/get",{method:"POST",body:JSON.stringify({token:sessionStorage.getItem("_cransurvey_token")})});this.config=a.data,this.config.users||(this.config.users={}),this.config.site||(this.config.site={}),this.config.surveys||(this.config.surveys={}),this.config.captcha||(this.config.captcha={}),this.originalConfig=structuredClone(a.data),this.loading=!1}},async mounted(){this.loading=!0,this.loadConfig()}},j=Object.assign(T,{__name:"settings",setup(a){const c=$();{const e=sessionStorage.getItem("_cransurvey_token"),s=sessionStorage.getItem("_cransurvey_usr");!e||!s?h(c("/sign-in")):sessionStorage.getItem("_cransurvey_token_lock")||$fetch("/api/usr/token",{method:"POST",body:JSON.stringify({token:e})}).then(u=>{u.code==0?sessionStorage.setItem("_cransurvey_token_lock",!0):(sessionStorage.removeItem("_cransurvey_token"),sessionStorage.removeItem("_cransurvey_usr"),h(c("/sign-in")))})}return(e,s)=>{const u=i("v-expansion-panel-title"),p=i("v-text-field"),g=i("v-expansion-panel-text"),f=i("v-expansion-panel"),_=i("v-switch"),C=i("v-expansion-panels"),V=i("v-card"),S=i("v-btn");return y(),b(O,null,[l("h1",U,r(e.$t("settings.settings")),1),l("div",I,[t(V,{variant:"flat",style:{margin:"10px auto 30px 0",padding:"10px"},loading:e.loading,disabled:e.loading},{default:n(()=>[t(C,{multiple:""},{default:n(()=>[t(f,null,{default:n(()=>[t(u,null,{default:n(()=>[d(r(e.$t("settings.site")),1)]),_:1}),t(g,null,{default:n(()=>[l("div",N,[t(p,{label:e.$t("settings.site_title"),variant:"outlined",placeholder:"CranSurvey",modelValue:e.config.site.title,"onUpdate:modelValue":s[0]||(s[0]=o=>e.config.site.title=o)},null,8,["label","modelValue"])]),l("div",P,[t(p,{label:e.$t("settings.site_url"),variant:"outlined",placeholder:"https://csur-preview.vercel.app",modelValue:e.config.site.url,"onUpdate:modelValue":s[1]||(s[1]=o=>e.config.site.url=o)},null,8,["label","modelValue"])])]),_:1})]),_:1}),t(f,null,{default:n(()=>[t(u,null,{default:n(()=>[d(r(e.$t("settings.users")),1)]),_:1}),t(g,null,{default:n(()=>[l("div",null,[t(_,{label:e.$t("settings.use_captcha_sign"),inset:"",modelValue:e.config.users.useCaptcha,"onUpdate:modelValue":s[2]||(s[2]=o=>e.config.users.useCaptcha=o),disabled:""},null,8,["label","modelValue"])]),l("div",null,[t(_,{label:e.$t("settings.allow_signup"),inset:"",modelValue:e.config.users.allowSignUp,"onUpdate:modelValue":s[3]||(s[3]=o=>e.config.users.allowSignUp=o)},null,8,["label","modelValue"])]),e.config.users.allowSignUp?(y(),b("div",B,[t(p,{label:e.$t("settings.invite_code"),variant:"outlined",placeholder:"",modelValue:e.config.users.inviteCode,"onUpdate:modelValue":s[4]||(s[4]=o=>e.config.users.inviteCode=o)},null,8,["label","modelValue"])])):w("",!0)]),_:1})]),_:1}),t(f,null,{default:n(()=>[t(u,null,{default:n(()=>[d(r(e.$t("settings.surveys")),1)]),_:1}),t(g,null,{default:n(()=>[l("div",null,[t(_,{label:e.$t("settings.use_captcha_survey"),inset:"",modelValue:e.config.surveys.useCaptcha,"onUpdate:modelValue":s[5]||(s[5]=o=>e.config.surveys.useCaptcha=o),disabled:""},null,8,["label","modelValue"])])]),_:1})]),_:1}),t(f,{disabled:""},{default:n(()=>[t(u,null,{default:n(()=>[d(r(e.$t("settings.captcha")),1)]),_:1}),t(g)]),_:1})]),_:1})]),_:1},8,["loading","disabled"]),t(S,{variant:"outlined",onClick:e.update},{default:n(()=>[d(r(e.$t("settings.update")),1)]),_:1},8,["onClick"])])],64)}}});export{j as default};

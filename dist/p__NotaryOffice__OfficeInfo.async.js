(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{"/j5V":function(e,a,t){"use strict";t("sPJy");var n,i,c=t("bE4q"),l=t("q1tI"),r=t.n(l),o=t("utR0"),m=t("mOP9"),d=t("iujR"),s=t.n(d),f=t("MuoO"),u=(n=Object(f["connect"])(e=>{var a=e.global;return{global:a}}),n(i=class extends l["Component"]{render(){var e=this.props,a=e.location,t=e.children,n=a.query.module,i={"/dynamicList":`${n}`,"/notarization":`${n}`,"/notaryOffice":`${n}`,"/revokeCertificate":`${n}`,"/certificateGuide":`${n}`,"/advisory":`${n}`,"/reportDownload":`${n}`,"/searchPage":`${n}`,"/article":`${n}`,"/notaryOffice/OfficeInfo":"\u516c\u8bc1\u673a\u6784\u8be6\u60c5","/pageFlip":`${n}`},l=a.pathname.split("/").filter(e=>e),o=l.map((e,a)=>{var t=`/${l.slice(0,a+1).join("/")}`;return r.a.createElement(c["a"].Item,{key:t},r.a.createElement(m["a"],{to:t+`?module=${n}`},i[t]))}),d=[r.a.createElement(c["a"].Item,{key:"home"},r.a.createElement(m["a"],{to:"/?module=\u9996\u9875"},"\u9996\u9875"))].concat(o);return r.a.createElement("div",{className:s.a["dynamic-container"]},r.a.createElement("div",{className:s.a["dynamic-nav"],style:{marginBottom:10}},r.a.createElement("div",{className:s.a["dynamic-title"]},n),r.a.createElement("div",{className:s.a["dynamic-breadcrumb"]},"\u60a8\u7684\u4f4d\u7f6e\uff1a",r.a.createElement(c["a"],{style:{display:"inline-block",marginLeft:5}},d))),t)}})||i);a["a"]=Object(o["a"])(u)},"4Oyz":function(e,a,t){e.exports={title:"title___205XR",desc:"desc___3kNgj",content:"content___3a8re","list-title":"list-title___1HAhn","next-before":"next-before___102at"}},YTio:function(e,a,t){"use strict";t.r(a);var n,i,c=t("q1tI"),l=t.n(c),r=t("MuoO"),o=t("/j5V"),m=t("4Oyz"),d=t.n(m),s=(n=Object(r["connect"])(e=>{var a=e.global;return{global:a}}),n(i=class extends c["Component"]{componentDidMount(){this.props.dispatch({type:"global/fetchOfficeInfo",payload:{id:this.props.location.query.id}})}render(){var e=this.props.global.officeInfo;return l.a.createElement(o["a"],null,l.a.createElement("div",{style:{padding:"0 134px"}},l.a.createElement("div",{className:d.a["title"]},e.office.name),l.a.createElement("div",{className:d.a["desc"],style:{height:5}}),l.a.createElement("div",null,"\u6267\u4e1a\u8bc1\u53f7\uff1a",e.office.cardNumber),l.a.createElement("div",null,"\u8d1f\u8d23\u4eba\uff1a ",e.office.master||"\u6682\u65e0"),l.a.createElement("div",null,"\u7535\u8bdd\uff1a ",e.office.phone||"\u6682\u65e0"),l.a.createElement("div",null,"\u4f20\u771f\uff1a ",e.office.fax||"\u6682\u65e0"),l.a.createElement("div",null,"\u90ae\u7f16\uff1a ",e.office.zipCode||"\u6682\u65e0"),l.a.createElement("div",null,"\u529e\u516c\u573a\u6240\uff1a",e.office&&e.office.address),l.a.createElement("div",{style:{marginTop:20}},"\u516c\u8bc1\u5458\uff1a",e.users.map((e,a)=>{return l.a.createElement("span",{key:a,style:{padding:"0 10px"}},e.name)}))))}})||i);a["default"]=s},iujR:function(e,a,t){e.exports={"dynamic-container":"dynamic-container___2GivA","dynamic-nav":"dynamic-nav___103_o","dynamic-title":"dynamic-title___2oqja","dynamic-breadcrumb":"dynamic-breadcrumb___2mWJo"}}}]);
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{"/j5V":function(e,a,t){"use strict";t("sPJy");var n,r,i=t("bE4q"),l=t("q1tI"),o=t.n(l),s=t("utR0"),c=t("mOP9"),m=t("iujR"),d=t.n(m),p=t("MuoO"),h=(n=Object(p["connect"])(e=>{var a=e.global;return{global:a}}),n(r=class extends l["Component"]{render(){var e=this.props,a=e.location,t=e.children,n=a.query.module,r={"/dynamicList":`${n}`,"/notarization":`${n}`,"/notaryOffice":`${n}`,"/revokeCertificate":`${n}`,"/certificateGuide":`${n}`,"/advisory":`${n}`,"/reportDownload":`${n}`,"/searchPage":`${n}`,"/article":`${n}`,"/notaryOffice/OfficeInfo":"\u516c\u8bc1\u673a\u6784\u8be6\u60c5","/pageFlip":`${n}`},l=a.pathname.split("/").filter(e=>e),s=l.map((e,a)=>{var t=`/${l.slice(0,a+1).join("/")}`;return o.a.createElement(i["a"].Item,{key:t},o.a.createElement(c["a"],{to:t+`?module=${n}`},r[t]))}),m=[o.a.createElement(i["a"].Item,{key:"home"},o.a.createElement(c["a"],{to:"/?module=\u9996\u9875"},"\u9996\u9875"))].concat(s);return o.a.createElement("div",{className:d.a["dynamic-container"]},o.a.createElement("div",{className:d.a["dynamic-nav"],style:{marginBottom:10}},o.a.createElement("div",{className:d.a["dynamic-title"]},n),o.a.createElement("div",{className:d.a["dynamic-breadcrumb"]},"\u60a8\u7684\u4f4d\u7f6e\uff1a",o.a.createElement(i["a"],{style:{display:"inline-block",marginLeft:5}},m))),t)}})||r);a["a"]=Object(s["a"])(h)},fUBn:function(e,a,t){"use strict";t.r(a);t("g9YV");var n,r,i,l,o,s,c=t("wCAj"),m=t("q1tI"),d=t.n(m),p=(t("14J3"),t("BMrR")),h=(t("+L6B"),t("2/Rp")),y=(t("jCWc"),t("kPKH")),u=t("pVnL"),b=t.n(u),E=(t("5NDa"),t("5rEg")),v=(t("miYZ"),t("tsqr")),g=(t("y8nQ"),t("Vl3Y")),f=(t("OaEy"),t("2fM7")),k=t("MuoO"),I=f["a"].Option,x=(n=Object(k["connect"])(e=>{var a=e.notarization;return{notarization:a}}),r=g["a"].create(),n(i=r((l=class extends m["Component"]{constructor(){super(...arguments),this.state={time:"",num:"",field:null,area:""},this.search=(()=>{var e=this.state,a=e.time,t=e.num,n=e.field,r=e.area;if(""===a||""===t||null===n||""===r)v["a"].error("\u8bf7\u8f93\u5165\u5b8c\u6574\u4fe1\u606f\u540e\u67e5\u8be2");else{var i="js"===this.props.type?"fetchJS":"fetchSD";this.props.dispatch({type:`notarization/${i}`,payload:{year:a,bh:t,office:n,area:r}}),this.props.dispatch({type:"notarization/save",payload:{searchColumns:"js"===this.props.type?"col1":"col2"}})}}),this.changeField=(e=>{this.setState({field:e})}),this.changeArea=(e=>{this.setState({area:e}),this.props.dispatch({type:"notarization/fetchNotarizationList",payload:{area:e}})}),this.changeTime=(e=>{this.setState({time:e.target.value})}),this.changeNum=(e=>{this.setState({num:e.target.value})})}render(){var e={labelCol:{span:20},wrapperCol:{span:20}},a=this.state,t=a.time,n=a.num,r=this.props,i=r.area,l=(r.type,this.props.notarization.notarizationList);return d.a.createElement(g["a"],{layout:"vertical"},d.a.createElement(p["a"],null,d.a.createElement(y["a"],{span:10},d.a.createElement(g["a"].Item,b()({label:"\u5e74\u5ea6"},e),d.a.createElement(E["a"],{placeholder:"\u586b\u5199\u5e74\u5ea6",value:t,onChange:this.changeTime}))),d.a.createElement(y["a"],{span:10},d.a.createElement(g["a"].Item,b()({label:"\u8bc1\u4e66\u53f7"},e),d.a.createElement(E["a"],{placeholder:"\u586b\u5199\u8bc1\u4e66\u53f7",value:n,onChange:this.changeNum}))),d.a.createElement(y["a"],{span:24},d.a.createElement(g["a"].Item,{label:"\u533a\u57df",labelCol:{span:20},wrapperCol:{span:15}},d.a.createElement(f["a"],{placeholder:"\u9009\u62e9\u533a\u57df",onChange:this.changeArea},i.map((e,a)=>d.a.createElement(I,{key:a,value:e.id},e.name))))),d.a.createElement(y["a"],{span:24},d.a.createElement(g["a"].Item,{label:"\u516c\u8bc1\u5904",labelCol:{span:20},wrapperCol:{span:15}},d.a.createElement(f["a"],{placeholder:"\u9009\u62e9\u516c\u8bc1\u5904",onChange:this.changeField},l.map((e,a)=>d.a.createElement(I,{key:a,value:e.id},e.name))))),d.a.createElement(y["a"],{span:24},d.a.createElement(g["a"].Item,{style:{marginTop:10},labelCol:{span:20},wrapperCol:{span:15}},d.a.createElement(h["a"],{type:"primary",onClick:this.search},"\u67e5\u8be2"),d.a.createElement("span",{className:"spanHover",style:{marginLeft:24,cursor:"pointer",fontWeight:"bold"}},"\u6e05\u7a7a")))))}},i=l))||i)||i),C=x,z=t("/j5V"),j=t("oVTy"),_=t.n(j),w=[{title:"\u51fd\u53f7",dataIndex:"hanhao",key:"hanhao"},{title:"\u5bc4\u51fa\u65e5\u671f",dataIndex:"jsDate",key:"jsDate",render:(e,a)=>{return e?e.substr(0,10):""}},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u516c\u8bc1\u5458",key:"gzUser",dataIndex:"gzUser"},{title:"\u516c\u8bc1\u5904",key:"company",dataIndex:"company",render:(e,a)=>{return a.company.name}},{title:"\u7f16\u53f7",dataIndex:"bh",key:"bh"},{title:"\u516c\u8bc1\u65e5\u671f",key:"gzDate",dataIndex:"gzDate",render:(e,a)=>{return e?e.substr(0,10):""}},{title:"\u7c7b\u522b",key:"leibie",dataIndex:"leibie"},{title:"\u6c34\u5370\u53f7",key:"watermark",dataIndex:"watermark"},{title:"\u5bc4\u9001\u65b9\u5f0f",key:"jsWay",dataIndex:"jsWay"},{title:"\u9875\u6570",key:"pagination",dataIndex:"pagination"}],L=[{title:"\u51fd\u53f7",dataIndex:"hanhao",key:"hanhao"},{title:"\u5bc4\u9001\u65e5\u671f",dataIndex:"sdDate",key:"sdDate",render:(e,a)=>{return e?e.substr(0,10):""}},{title:"\u516c\u8bc1\u5904",key:"company",dataIndex:"company",render:(e,a)=>{return a.company.name}},{title:"\u59d3\u540d",dataIndex:"name",key:"name"},{title:"\u7c7b\u522b",key:"leibie",dataIndex:"leibie"},{title:"\u516c\u8bc1\u4e66\u7f16\u53f7",dataIndex:"bh",key:"bh"},{title:"\u51fa\u8bc1\u65e5\u671f",key:"gzDate",dataIndex:"gzDate",render:(e,a)=>{return e?e.substr(0,10):""}},{title:"\u7f16\u53f7",key:"no",dataIndex:"no"}],$=(o=Object(k["connect"])(e=>{var a=e.notarization;return{notarization:a}}),o(s=class extends m["Component"]{componentDidMount(){this.props.dispatch({type:"notarization/fetchAreaList",payload:{leibie:0}}),this.props.dispatch({type:"notarization/fetchAreaList2",payload:{leibie:1}})}render(){var e=this.props.notarization,a=e.searchList,t=e.searchColumns,n=e.areaList,r=e.areaList2;return d.a.createElement(z["a"],null,d.a.createElement("div",{className:_.a["search-box"]},d.a.createElement("div",null,d.a.createElement("div",null,"\u5bc4\u9001\u67e5\u8be2"),d.a.createElement("div",null,n.length&&d.a.createElement(C,{type:"js",area:n}))),d.a.createElement("div",{style:{marginLeft:55}},d.a.createElement("div",null,"\u6536\u5230\u67e5\u8be2"),d.a.createElement("div",null,n.length&&d.a.createElement(C,{type:"sd",area:r})))),d.a.createElement("div",{style:{borderTop:"1px solid #9b9b9b"}},d.a.createElement(c["a"],{dataSource:a,columns:"col1"===t?w:L})))}})||s);a["default"]=$},iujR:function(e,a,t){e.exports={"dynamic-container":"dynamic-container___2GivA","dynamic-nav":"dynamic-nav___103_o","dynamic-title":"dynamic-title___2oqja","dynamic-breadcrumb":"dynamic-breadcrumb___2mWJo"}},oVTy:function(e,a,t){e.exports={"search-box":"search-box___iW-A8"}}}]);
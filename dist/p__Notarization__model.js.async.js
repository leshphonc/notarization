(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[9,10],{Cia0:function(e,t,a){"use strict";a.r(t),a.d(t,"fetchJS",function(){return c}),a.d(t,"fetchSD",function(){return s}),a.d(t,"fetchNotarizationList",function(){return i}),a.d(t,"fetchNotarizationList2",function(){return o}),a.d(t,"fetchAreaList",function(){return u});var n=a("y0tt"),r=a("mjZG");function c(e,t,a,c){return Object(n["a"])("".concat(r["b"],"/api/gzsjs?year=").concat(e,"&bh=").concat(t,"&office=").concat(a,"&areaId=").concat(c),{method:"GET",credentials:"omit"})}function s(e,t,a,c){return Object(n["a"])("".concat(r["b"],"/api/gzssd?year=").concat(e,"&bh=").concat(t,"&office=").concat(a,"&areaId=").concat(c),{method:"GET",credentials:"omit"})}function i(){return Object(n["a"])("".concat(r["b"],"/api/office/list/select"),{method:"GET",credentials:"omit"})}function o(e){return Object(n["a"])("".concat(r["b"],"/api/office/area/officeList?areaId=").concat(e),{method:"GET",credentials:"omit"})}function u(e){return Object(n["a"])("".concat(r["b"],"/api/office/area?leibie=").concat(e),{method:"GET",credentials:"omit"})}},"OO/R":function(e,t,a){"use strict";a.r(t);var n=a("MVZn"),r=a.n(n),c=a("o0o1"),s=a.n(c),i=(a("miYZ"),a("tsqr")),o=a("Cia0");t["default"]={namespace:"notarization",state:{searchList:[],notarizationListJS:[],notarizationListSD:[],searchColumns:"col1",areaList:[],areaList2:[]},subscriptions:{setup:function(e){e.dispatch;var t=e.history;return t.listen(function(e){e.pathname,e.query})}},effects:{fetchJS:s.a.mark(function e(t,a){var n,r,c,u,f,p,d,h,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=n.year,c=n.bh,u=n.office,f=n.area,p=a.call,d=a.put,e.next=4,p(o["fetchJS"],r,c,u,f);case 4:if(h=e.sent,l=h.data,1!==parseInt(l.code,10)){e.next=11;break}return e.next=9,d({type:"save",payload:{searchList:l.data.list}});case 9:e.next=12;break;case 11:i["a"].error(l.message);case 12:case"end":return e.stop()}},e,this)}),fetchSD:s.a.mark(function e(t,a){var n,r,c,u,f,p,d,h,l;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=n.year,c=n.bh,u=n.office,f=n.area,p=a.call,d=a.put,e.next=4,p(o["fetchSD"],r,c,u,f);case 4:if(h=e.sent,l=h.data,1!==parseInt(l.code,10)){e.next=11;break}return e.next=9,d({type:"save",payload:{searchList:l.data.list}});case 9:e.next=12;break;case 11:i["a"].error(l.message);case 12:case"end":return e.stop()}},e,this)}),fetchNotarizationList:s.a.mark(function e(t,a){var n,r,c,u,f,p,d;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload,r=n.area,c=n.type,u=a.call,f=a.put,e.next=4,u(o["fetchNotarizationList2"],r);case 4:if(p=e.sent,d=p.data,1!==parseInt(d.code,10)){e.next=16;break}if("js"!==c){e.next=12;break}return e.next=10,f({type:"save",payload:{notarizationListJS:d.data}});case 10:e.next=14;break;case 12:return e.next=14,f({type:"save",payload:{notarizationListSD:d.data}});case 14:e.next=17;break;case 16:i["a"].error(d.message);case 17:case"end":return e.stop()}},e,this)}),fetchAreaList:s.a.mark(function e(t,a){var n,r,c,u,f;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload.leibie,r=a.call,c=a.put,e.next=4,r(o["fetchAreaList"],n);case 4:if(u=e.sent,f=u.data,1!==parseInt(f.code,10)){e.next=11;break}return e.next=9,c({type:"save",payload:{areaList:f.data}});case 9:e.next=12;break;case 11:i["a"].error(f.message);case 12:case"end":return e.stop()}},e,this)}),fetchAreaList2:s.a.mark(function e(t,a){var n,r,c,u,f;return s.a.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=t.payload.leibie,r=a.call,c=a.put,e.next=4,r(o["fetchAreaList"],n);case 4:if(u=e.sent,f=u.data,1!==parseInt(f.code,10)){e.next=11;break}return e.next=9,c({type:"save",payload:{areaList2:f.data}});case 9:e.next=12;break;case 11:i["a"].error(f.message);case 12:case"end":return e.stop()}},e,this)})},reducers:{save:function(e,t){return r()({},e,t.payload)}}}}}]);
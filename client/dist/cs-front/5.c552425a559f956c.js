"use strict";(self.webpackChunkcs_front=self.webpackChunkcs_front||[]).push([[5],{6005:(u,d,e)=>{e.r(d),e.d(d,{MainModule:()=>s});var l=e(6895),i=e(3456),t=e(4650);const h=[{path:"",component:(()=>{class n{constructor(){this.value=""}ngOnInit(){}}return n.\u0275fac=function(o){return new(o||n)},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-wrapper"]],decls:26,vars:0,consts:[[1,"wrapper"],[1,"header"],["routerLink","/home",1,"header__logo"],["src","./assets/images/logo1.svg","alt",""],[1,"header__search"],["type","search"],[1,"header__nav"],["routerLink","/home"],["routerLink","/sales"],["routerLink","/catalog"],["routerLink","/about-us"],["routerLink","/contacts"],["routerLink","/auth/sign-in",1,"header__profile"],["src","./assets/images/Maskgroup.svg","alt",""],[1,"content"],[1,"footer__content"],["src","./assets/images/image.png","alt",""]],template:function(o,c){1&o&&(t.TgZ(0,"div",0)(1,"header")(2,"div",1)(3,"a",2),t._UZ(4,"img",3),t.qZA(),t.TgZ(5,"div",4),t._UZ(6,"input",5),t.qZA(),t.TgZ(7,"nav",6)(8,"a",7),t._uU(9,"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"),t.qZA(),t.TgZ(10,"a",8),t._uU(11,"\u0410\u043a\u0446\u0438\u0438"),t.qZA(),t.TgZ(12,"a",9),t._uU(13,"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"),t.qZA(),t.TgZ(14,"a",10),t._uU(15,"\u041e \u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438"),t.qZA(),t.TgZ(16,"a",11),t._uU(17,"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"),t.qZA()(),t.TgZ(18,"a",12),t._UZ(19,"img",13),t.qZA()()(),t.TgZ(20,"main")(21,"div",14),t._UZ(22,"router-outlet"),t.qZA()(),t.TgZ(23,"footer")(24,"div",15),t._UZ(25,"img",16),t.qZA()()())},dependencies:[i.lC,i.yS],styles:[".wrapper[_ngcontent-%COMP%]{position:relative;min-height:100%}header[_ngcontent-%COMP%]{z-index:20;width:100%;background-image:linear-gradient(#132152,rgba(16,31,82,.8));height:90px;position:sticky;top:0}.header[_ngcontent-%COMP%]{margin:0 auto;height:100%;width:1140px;display:flex;align-items:center;justify-content:space-between}.header__logo[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center}.header__logo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:70px}.header__nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:18px;text-decoration:none;color:#fff;font-size:18px}.header__search[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center}.header__search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:216px;height:38px;border:none;border-radius:5px}.header__profile[_ngcontent-%COMP%]{height:100%;display:flex;align-items:center}.header__profile[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:37px;height:37px}main[_ngcontent-%COMP%]{padding-bottom:150px}main[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{margin:0 auto;width:1140px}footer[_ngcontent-%COMP%]{box-sizing:border-box;position:absolute;bottom:0;width:100%;height:150px}footer[_ngcontent-%COMP%]   .footer__content[_ngcontent-%COMP%]{height:100%;width:1140px;margin:0 auto;padding:30px 0}footer[_ngcontent-%COMP%]   .footer__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:90px}"]}),n})(),children:[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>e.e(386).then(e.bind(e,6386)).then(n=>n.HomeModule),data:{title:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}},{path:"about-us",loadChildren:()=>e.e(30).then(e.bind(e,30)).then(n=>n.AboutUsModule),data:{title:"\u041e \u043d\u0430\u0441"}},{path:"contacts",loadChildren:()=>e.e(343).then(e.bind(e,2343)).then(n=>n.ContactsModule),data:{title:"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}},{path:"catalog",loadChildren:()=>Promise.all([e.e(367),e.e(884)]).then(e.bind(e,7884)).then(n=>n.CatalogModule),data:{title:"\u041a\u0430\u0442\u0430\u043b\u043e\u0433"}},{path:"sales",loadChildren:()=>e.e(136).then(e.bind(e,6136)).then(n=>n.SalesModule),data:{title:"\u0410\u043a\u0446\u0438\u0438"}},{path:"guarantee-obligation",loadChildren:()=>e.e(432).then(e.bind(e,2432)).then(n=>n.GuaranteeObligationModule),data:{title:"\u0413\u0430\u0440\u0430\u043d\u0442\u0438\u0439\u0442\u043d\u043e\u0435 \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u0441\u0442\u0432\u043e"}},{path:"repair-and-service",loadChildren:()=>e.e(551).then(e.bind(e,551)).then(n=>n.RepairAndServiceModule),data:{title:"\u0420\u0435\u043c\u043e\u043d\u0442 \u0438 \u0441\u0435\u0440\u0432\u0438\u0441"}},{path:"diplomas-and-documentation",loadChildren:()=>e.e(238).then(e.bind(e,5238)).then(n=>n.DiplomasAndDocumentationModule),data:{title:"\u0414\u0438\u043f\u043b\u043e\u043c\u044b \u0438 \u0442\u0435\u0445\u043d\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0434\u043e\u043a\u0443\u043c\u0435\u043d\u0442\u0430\u0446\u0438\u044f"}}]}];let g=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[i.Bz.forChild(h),i.Bz]}),n})(),s=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,g]}),n})()}}]);
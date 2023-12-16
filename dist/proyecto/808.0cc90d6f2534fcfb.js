"use strict";(self.webpackChunkproyecto=self.webpackChunkproyecto||[]).push([[808],{3808:(f,s,r)=>{r.r(s),r.d(s,{MyRecipesModule:()=>u});var d=r(6814),c=r(72),t=r(4946),p=r(3106);let _=(()=>{class n{constructor(o){this.router=o,this.recipeCommunity=!0,this.isCheck=!1,this.showDropdown=!1}toDetail(){this.router.navigate(["recipes/recipe-details"])}toEdit(){this.router.navigate(["editrecipe"])}toggleDropdown(){this.showDropdown=!this.showDropdown,console.log("showDropdown",this.showDropdown)}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-my-recipe-card"]],inputs:{recipeCommunity:"recipeCommunity"},decls:35,vars:2,consts:[[1,"card"],["src","/assets/icons/recipes-card.png","alt","recipes-card",1,"card__img"],[1,"card__body"],[1,"card__body--title"],[1,"card__body--quantity"],["clasS","card__body--quantity__content"],["type","button",1,"card__body--quantity__btn"],["src","/assets/icons/heart.svg","alt","heart",1,"card__body--quantity__actions"],[1,"dropdown"],["type","button",1,"card__body--quantity__btn","dropdown__button",3,"click"],["src","/assets/icons/dots-vertical.svg","alt","dots-vertical",1,"card__body--quantity__dots"],[1,"dropdown__menu",3,"ngClass"],[1,"dropdown__menu--item"],[1,"dropdown__menu--items","dropdown__button--item"],[1,"card__body--mins"],["src","/assets/icons/clock.svg","alt","clock"],[1,"card__body--user"],[1,"card__body--user__info"],["src","/assets/icons/avatar.svg","alt","user"],["type","button",1,"card__body--btn",3,"click"],[1,"card__check",3,"click"],["alt","check-icon",3,"src"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0),t._UZ(1,"img",1),t.TgZ(2,"div",2)(3,"div",3)(4,"h4"),t._uU(5,"Name of dishes"),t.qZA(),t.TgZ(6,"div",4)(7,"div",5)(8,"button",6),t._UZ(9,"img",7),t.qZA(),t.TgZ(10,"span"),t._uU(11,"289"),t.qZA()(),t.TgZ(12,"div",8)(13,"button",9),t.NdJ("click",function(){return i.toggleDropdown()}),t._UZ(14,"img",10),t.qZA(),t.TgZ(15,"ul",11)(16,"li",12)(17,"a",13),t._uU(18," Eliminar "),t.qZA()(),t.TgZ(19,"li",12)(20,"a",13),t._uU(21," Editar "),t.qZA()()()()()(),t.TgZ(22,"div",14),t._UZ(23,"img",15),t.TgZ(24,"span"),t._uU(25,"30 min"),t.qZA()(),t.TgZ(26,"div",16)(27,"div",17),t._UZ(28,"img",18),t.TgZ(29,"span"),t._uU(30,"Juan delgadillo"),t.qZA()(),t.TgZ(31,"button",19),t.NdJ("click",function(){return i.toDetail()}),t._uU(32," Preparaci\xf3n "),t.qZA()()(),t.TgZ(33,"div",20),t.NdJ("click",function(){return i.isCheck=!i.isCheck}),t._UZ(34,"img",21),t.qZA()()),2&e&&(t.xp6(15),t.Q6J("ngClass",i.showDropdown?"dropdown__active":""),t.xp6(19),t.Q6J("src",i.isCheck?"assets/checked.svg":"assets/uncheck.svg",t.LSH))},dependencies:[d.mk],styles:[".card[_ngcontent-%COMP%]{border-radius:10px;border:1px solid #CDCDCD;position:relative}.card__img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;border-top-right-radius:10px;border-top-left-radius:10px}.card__check[_ngcontent-%COMP%]{all:initial;position:absolute;top:.5rem;left:.5rem;cursor:pointer;transition:all ease-in-out .3s;border-radius:50%}.card__check[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block}.card__check[_ngcontent-%COMP%]:hover{transform:translateY(-2px);box-shadow:0 3px 2px #00000080}.card__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.3125rem}.card__body--title[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-start;gap:.3125rem;padding:.625rem .625rem 0}.card__body--title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:12px}@media screen and (min-width: 767px){.card__body--title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:14px}}.card__body--quantity[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.3125rem}.card__body--quantity__content[_ngcontent-%COMP%]{display:flex;justify-content:center;gap:.125rem}.card__body--quantity__content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-weight:500;font-size:10px;color:#9e9ea7}@media screen and (min-width: 767px){.card__body--quantity__content[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.card__body--quantity__actions[_ngcontent-%COMP%]{width:12px;height:12px}.card__body--quantity__btn[_ngcontent-%COMP%]{background-color:transparent;border:none;cursor:pointer}.card__body--quantity__dots[_ngcontent-%COMP%]{width:14px;height:14px}.card__body--mins[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:.25rem;padding:0 .625rem}.card__body--mins[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:10px;height:10px}@media screen and (min-width: 767px){.card__body--mins[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:12px;height:12px}}.card__body--mins[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#afafaf;font-family:Poppins,sans-serif;font-size:10px}@media screen and (min-width: 767px){.card__body--mins[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.card__body--user[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding:0 .625rem .625rem;margin-top:.75rem}@media screen and (min-width: 767px){.card__body--user[_ngcontent-%COMP%]{margin-top:.875rem}}@media screen and (min-width: 1023px){.card__body--user[_ngcontent-%COMP%]{margin-top:1.25rem}}.card__body--user__info[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:.3125rem}.card__body--user__info[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:18px;height:18px}.card__body--user__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-family:Poppins,sans-serif;font-size:10px}@media screen and (min-width: 767px){.card__body--user__info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px}}.card__body--btn[_ngcontent-%COMP%]{border-radius:10px;background-color:#f4f8f9;border:none;color:#1f1f1f;text-align:center;font-family:Poppins,sans-serif;font-size:10px;font-weight:500;width:80px;height:25px;cursor:pointer}.dropdown[_ngcontent-%COMP%]{position:relative}.dropdown__menu[_ngcontent-%COMP%]{position:absolute;top:-85px;right:0;max-height:117px;min-width:128px;border-radius:8px;background-color:#fff;display:none;padding:10px;box-shadow:0 5px 30px #1b1f231a,0 0 1px #1b1f2366,0 1px 2px #1b1f2326;z-index:2;animation:fadeIn .2s ease-in-out}.dropdown__menu--item[_ngcontent-%COMP%]{margin-bottom:.5rem;border-radius:4px}.dropdown__menu--item[_ngcontent-%COMP%]:hover{background-color:#f4f8f9;color:#1f1f1f}.dropdown__menu--item[_ngcontent-%COMP%]:nth-child(2){margin-bottom:0}.dropdown__menu--items[_ngcontent-%COMP%]{display:flex;gap:1rem;font-size:.875rem;font-family:Poppins,sans-serif;width:100%;cursor:pointer;color:#0b0b0b;padding:5px}.dropdown[_ngcontent-%COMP%]   .dropdown__button--item[_ngcontent-%COMP%]{background-color:transparent;border:none;font-size:.875rem}.dropdown__active[_ngcontent-%COMP%]{display:block}"]})}return n})();const m=[{path:"",component:(()=>{class n{constructor(o){this.route=o,this.recipes=[]}createList(){this.route.navigate(["selectingredients"])}static#t=this.\u0275fac=function(e){return new(e||n)(t.Y36(c.F0))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-my-recipes"]],decls:15,vars:1,consts:[[1,"section"],[3,"btnRedirection"],[1,"recipe","container"],[1,"recipe__wrap"],["type","button",1,"createListBtn",3,"click"],["src","assets/list-icon.svg","alt","list-icon"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0),t._UZ(1,"app-search-box",1),t.TgZ(2,"div",2)(3,"article",3),t._UZ(4,"app-my-recipe-card")(5,"app-my-recipe-card")(6,"app-my-recipe-card")(7,"app-my-recipe-card")(8,"app-my-recipe-card")(9,"app-my-recipe-card")(10,"app-my-recipe-card"),t.qZA(),t.TgZ(11,"button",4),t.NdJ("click",function(){return i.createList()}),t._UZ(12,"img",5),t.TgZ(13,"span"),t._uU(14,"Generar"),t.qZA()()()()),2&e&&(t.xp6(1),t.Q6J("btnRedirection","crear receta"))},dependencies:[p.B,_],styles:["[_nghost-%COMP%]{flex-grow:2}.section[_ngcontent-%COMP%]{padding:7rem 0 3rem}.recipe[_ngcontent-%COMP%]{margin-top:2rem}.recipe__wrap[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.5rem}@media screen and (min-width: 420px){.recipe__wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media screen and (min-width: 767px){.recipe__wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}@media screen and (min-width: 1023px){.recipe__wrap[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.createListBtn[_ngcontent-%COMP%]{position:fixed;bottom:1rem;right:1rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#f4f8f9;border-radius:50%;border:none;padding:1rem;color:#1f1f1f;cursor:pointer;box-shadow:0 1px 10px #0000004d;width:max-content;transition-duration:.3s;transition-property:opacity;animation:_ngcontent-%COMP%_up 3s infinite;transition-timing-function:ease-in-out}.createListBtn[_ngcontent-%COMP%]:hover{opacity:1}.createListBtn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:1.5rem;height:1.5rem}.createListBtn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.75rem;font-weight:500;font-family:Poppins,sans-serif}.scrollup[_ngcontent-%COMP%]{position:fixed;bottom:-30%;right:3rem;line-height:0;background-color:var(--container-color);box-shadow:0 1px 10px #0000004d;color:var(--first-color);font-size:2rem;width:max-content;padding:.4rem;border-radius:50%}@keyframes _ngcontent-%COMP%_up{0%{transform:translateY(0)}50%{transform:translateY(.45rem)}to{transform:translateY(0)}}"]})}return n})()}];let g=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[c.Bz.forChild(m),c.Bz]})}return n})();var l=r(6208);let u=(()=>{class n{static#t=this.\u0275fac=function(e){return new(e||n)};static#n=this.\u0275mod=t.oAB({type:n});static#e=this.\u0275inj=t.cJS({imports:[d.ez,g,l.m]})}return n})()}}]);
"use strict";(self.webpackChunkproyecto=self.webpackChunkproyecto||[]).push([[898],{6095:(x,c,i)=>{i.r(c),i.d(c,{RecipeDetailsModule:()=>f});var _=i(6814),s=i(7276),e=i(4946),d=i(4664),p=i(574);function m(t,o){if(1&t&&(e.TgZ(0,"li",40)(1,"div",41),e._UZ(2,"img",42),e.TgZ(3,"p"),e._uU(4),e.qZA()(),e.TgZ(5,"div",43)(6,"p"),e._uU(7),e.qZA(),e.TgZ(8,"span"),e._uU(9),e.qZA()()()),2&t){const n=o.$implicit;e.xp6(4),e.Oqu(n.nombre),e.xp6(3),e.Oqu(n.cantidad),e.xp6(2),e.Oqu(n.tipo_medida)}}function g(t,o){if(1&t&&(e.TgZ(0,"li",44)(1,"p",45),e._uU(2),e.qZA()()),2&t){const n=o.$implicit;e.xp6(2),e.hij("",n," ")}}const l=[{path:"",component:(()=>{class t{constructor(){this.recipeDetails={id:0,nombre:"",procedimientos:"",visible:!0,likes:0,categoria:{id:0,nombre:""},ingredientes:[{id:0,nombre:"",cantidad:0,tipo_medida:""}],procedimientosArray:[]},this.recipeService=(0,e.f3M)(p.j),this.activeRouter=(0,e.f3M)(s.gz),this.router=(0,e.f3M)(s.F0)}ngOnInit(){this.activeRouter.params.pipe((0,d.w)(({id:n})=>this.recipeService.getRecipeById(n))).subscribe({next:n=>n?(this.recipeDetails=n,this.extraerPasos(this.recipeDetails.procedimientos),null):this.router.navigate(["/recipes"])})}extraerPasos(n){this.recipeDetails.procedimientosArray=n.split("."),console.log(this.recipeDetails.procedimientosArray)}static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-recipe-details"]],decls:87,vars:5,consts:[[1,"details","section"],[1,"details__container"],[1,"header"],[1,"header__wrap"],[1,"header__wrap--text"],[1,"header__wrap--quantity"],["src","../../../assets/icons/heart.svg","alt","heart"],[1,"header__quantity--text"],[1,"header__subheader"],[1,"header__subheader--content"],[1,"header__subheader--user"],["src","../../../assets/icons/avatar.svg","alt","avatar",1,"comments-img"],[1,"header__subheader--user__text"],[1,"header__subheader--content__calendar"],["src","../../../assets/icons/calendar.svg","alt","calendar",1,"header__subheader--content__img"],[1,"header__subheader--content__text"],[1,"header__subheader--dishes"],[1,"header__subheader--dishes__items"],[1,"header__btns"],["type","button",1,"header__btns--primary"],["src","../../../assets/icons/book-mark.svg","alt","book-mark",1,"header__btns--actions"],["src","../../../assets/icons/heart-solid.svg","alt","header",1,"header__btns--actions"],[1,"details__info"],["src","../../../assets/foodieDetails.webp","alt","foodhero2",1,"details__info--img"],[1,"instructions"],[1,"instructions__wrap"],[1,"instructions__wrap--title"],[1,"instructions__wrap--list"],["class","instructions__wrap--items",4,"ngFor","ngForOf"],[1,"instructions__preparation"],[1,"instructions__preparation--title"],[1,"instructions__preparation--list"],["class","instructions__preparation--item",4,"ngFor","ngForOf"],[1,"comments"],[1,"comments__title"],[1,"comments__wrap"],[1,"comments__wrap--content"],[1,"comments__wrap--content__user"],[1,"comments__wrap--user__text"],[1,"comments__wrap--text"],[1,"instructions__wrap--items"],[1,"instructions__wrap--items__name"],["src","../../../assets/icons/list-item-ingredients.svg","alt","list-item-ingredients"],[1,"instructions__wrap--quantity"],[1,"instructions__preparation--item"],[1,"instructions__preparation--text"]],template:function(a,r){1&a&&(e.TgZ(0,"section",0)(1,"div",1)(2,"header",2)(3,"div",3)(4,"h2",4),e._uU(5),e.qZA(),e.TgZ(6,"div",5),e._UZ(7,"img",6),e.TgZ(8,"p",7),e._uU(9),e.qZA()()(),e.TgZ(10,"div",8)(11,"div",9)(12,"div",10),e._UZ(13,"img",11),e.TgZ(14,"p",12),e._uU(15,"Juanito alima\xf1a"),e.qZA()(),e.TgZ(16,"div",13),e._UZ(17,"img",14),e.TgZ(18,"p",15),e._uU(19,"13 de Diciembre"),e.qZA()()(),e.TgZ(20,"ul",16)(21,"li",17)(22,"p"),e._uU(23,"Cocinar"),e.qZA(),e.TgZ(24,"span"),e._uU(25,"30 min"),e.qZA()(),e.TgZ(26,"li",17)(27,"p"),e._uU(28,"Cantidad"),e.qZA(),e.TgZ(29,"span"),e._uU(30,"4 personas"),e.qZA()(),e.TgZ(31,"li",17)(32,"p"),e._uU(33,"Categoria"),e.qZA(),e.TgZ(34,"span"),e._uU(35),e.qZA()()()(),e.TgZ(36,"div",18)(37,"button",19),e._UZ(38,"img",20),e._uU(39," Guarda la receta "),e.qZA(),e._UZ(40,"img",21),e.qZA()(),e.TgZ(41,"section")(42,"div",22),e._UZ(43,"img",23),e.qZA()(),e.TgZ(44,"section",24)(45,"article",25)(46,"h3",26),e._uU(47,"Ingredientes"),e.qZA(),e.TgZ(48,"ul",27),e.YNc(49,m,10,3,"li",28),e.qZA()(),e.TgZ(50,"article",29)(51,"h3",30),e._uU(52,"Preparaci\xf3n"),e.qZA(),e.TgZ(53,"ul",31),e.YNc(54,g,3,1,"li",32),e.qZA()()(),e.TgZ(55,"section",33)(56,"h3",34),e._uU(57,"Comentarios(5)"),e.qZA(),e.TgZ(58,"div",35)(59,"div",36)(60,"div",37),e._UZ(61,"img",11),e.TgZ(62,"span",38),e._uU(63,"Juanito Alima\xf1a"),e.qZA()(),e.TgZ(64,"p",39),e._uU(65," Excelente receta, especialmente para las personas que buscan una vida saludable "),e.qZA()(),e.TgZ(66,"div",36)(67,"div",37),e._UZ(68,"img",11),e.TgZ(69,"span",38),e._uU(70,"Juanito Alima\xf1a"),e.qZA()(),e.TgZ(71,"p",39),e._uU(72," Excelente receta, especialmente para las personas que buscan una vida saludable "),e.qZA()(),e.TgZ(73,"div",36)(74,"div",37),e._UZ(75,"img",11),e.TgZ(76,"span",38),e._uU(77,"Juanito Alima\xf1a"),e.qZA()(),e.TgZ(78,"p",39),e._uU(79," Excelente receta, especialmente para las personas que buscan una vida saludable "),e.qZA()(),e.TgZ(80,"div",36)(81,"div",37),e._UZ(82,"img",11),e.TgZ(83,"span",38),e._uU(84,"Juanito Alima\xf1a"),e.qZA()(),e.TgZ(85,"p",39),e._uU(86," Excelente receta, especialmente para las personas que buscan una vida saludable "),e.qZA()()()()()()),2&a&&(e.xp6(5),e.Oqu(r.recipeDetails.nombre),e.xp6(4),e.Oqu(r.recipeDetails.likes),e.xp6(26),e.Oqu(r.recipeDetails.categoria.nombre),e.xp6(14),e.Q6J("ngForOf",r.recipeDetails.ingredientes),e.xp6(5),e.Q6J("ngForOf",r.recipeDetails.procedimientosArray))},dependencies:[_.sg],styles:["[_nghost-%COMP%]{flex-grow:2}.section[_ngcontent-%COMP%]{padding:7rem 0 2rem}.details__container[_ngcontent-%COMP%]{max-width:1060px;margin-right:1rem;margin-left:1rem}@media screen and (min-width: 767px){.details__container[_ngcontent-%COMP%]{margin-left:1.25rem;margin-right:1.25rem}}@media screen and (min-width: 1124px){.details__container[_ngcontent-%COMP%]{margin-left:auto;margin-right:auto}}.header[_ngcontent-%COMP%]{font-family:Poppins,sans-serif}.header__wrap[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:1.25rem;margin-bottom:.9375rem}@media screen and (min-width: 767px){.header__wrap[_ngcontent-%COMP%]{justify-content:flex-start;align-items:center}}.header__wrap--text[_ngcontent-%COMP%]{font-size:1.25rem;font-family:Poppins,sans-serif;text-transform:capitalize}@media screen and (min-width: 539px){.header__wrap--text[_ngcontent-%COMP%]{font-size:1.5rem}}.header__wrap--quantity[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;gap:.3125rem}@media screen and (min-width: 767px){.header__wrap--quantity[_ngcontent-%COMP%]{justify-content:flex-start}}.header__wrap--quantity[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:13px;height:13px}.header__wrap--quantity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;font-weight:600;color:red}.header__subheader[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:2rem;margin-bottom:1.875rem;padding:14px 0 10px;width:100%}@media screen and (min-width: 767px){.header__subheader[_ngcontent-%COMP%]{flex-direction:row;justify-content:space-between;align-items:center;gap:0}}.header__subheader--content[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;gap:.75rem}@media screen and (min-width: 539px){.header__subheader--content[_ngcontent-%COMP%]{flex-direction:row;justify-content:flex-start;align-items:center}}.header__subheader--content__calendar[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:.625rem}.header__subheader--content__calendar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:20px;height:20px}.header__subheader--content__text[_ngcontent-%COMP%]{font-size:12px}@media screen and (min-width: 767px){.header__subheader--content__text[_ngcontent-%COMP%]{font-size:14px}}.header__subheader--user[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:.625rem}.header__subheader--user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:30px;height:30px;border-radius:50%}.header__subheader--user__text[_ngcontent-%COMP%]{font-size:12px}@media screen and (min-width: 767px){.header__subheader--user__text[_ngcontent-%COMP%]{font-size:14px}}.header__subheader--dishes[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:1rem}@media screen and (min-width: 767px){.header__subheader--dishes[_ngcontent-%COMP%]{gap:1.5625rem}}.header__subheader--dishes__items[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;gap:.625rem}.header__subheader--dishes__items[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500}.header__subheader--dishes__items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:12px;color:#6a6969}.header__btns[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:1.25rem;margin-bottom:1.875rem}.header__btns--primary[_ngcontent-%COMP%]{outline:none;border:none;background-color:#f29c5e;color:#f4f8f9;box-shadow:0 10px 15px -5px #000000bf;border-radius:1rem;padding-block:.5rem;margin-bottom:1rem;border-radius:10px;padding:1rem;width:201px;height:54px;box-shadow:none;margin:0;display:flex;justify-content:center;align-items:center;gap:.9375rem;font-size:.875rem;cursor:pointer}.header__btns--actions[_ngcontent-%COMP%]:nth-child(2){border:1px solid #e5e5e5;border-radius:50%;padding:.5625rem}.details__info[_ngcontent-%COMP%]{margin-bottom:2rem}.details__info--img[_ngcontent-%COMP%]{width:100%;max-width:100%;margin-bottom:.75rem;border-radius:1rem}.instructions[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:1.25rem;margin-bottom:2.5rem}@media screen and (min-width: 767px){.instructions[_ngcontent-%COMP%]{flex-direction:row}}.instructions__wrap[_ngcontent-%COMP%]{background-color:#f4f8f9;padding:1.25rem;border-radius:10px;height:100%}.instructions__wrap--title[_ngcontent-%COMP%]{font-size:14px;margin-bottom:3rem;font-family:Poppins,sans-serif}@media screen and (min-width: 539px){.instructions__wrap--title[_ngcontent-%COMP%]{font-size:1rem}}@media screen and (min-width: 767px){.instructions__wrap--title[_ngcontent-%COMP%]{font-size:1.125rem}}.instructions__wrap--list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1rem}@media screen and (min-width: 767px){.instructions__wrap--list[_ngcontent-%COMP%]{width:250px;gap:1.5rem}}@media screen and (min-width: 1023px){.instructions__wrap--list[_ngcontent-%COMP%]{width:350px}}.instructions__wrap--quantity[_ngcontent-%COMP%], .instructions__wrap--items[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}.instructions__wrap--items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;color:#6a6969}@media screen and (min-width: 539px){.instructions__wrap--items[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:1rem}}.instructions__wrap--items__name[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:.5rem}.instructions__wrap--items__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;font-weight:500;text-transform:capitalize}@media screen and (min-width: 539px){.instructions__wrap--items__name[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:1rem}}.instructions__preparation[_ngcontent-%COMP%]{background-color:#f4f8f9;padding:1.25rem;border-radius:10px}.instructions__preparation--title[_ngcontent-%COMP%]{font-size:14px;text-align:flex-start;margin-bottom:3rem;font-family:Poppins,sans-serif}@media screen and (min-width: 539px){.instructions__preparation--title[_ngcontent-%COMP%]{font-size:1rem}}@media screen and (min-width: 767px){.instructions__preparation--title[_ngcontent-%COMP%]{font-size:1.125rem}}.instructions__preparation--list[_ngcontent-%COMP%]{list-style-type:decimal;display:flex;flex-direction:column;gap:1rem;margin:0 0 2rem 1rem}.instructions__preparation--text[_ngcontent-%COMP%]{font-size:14px;line-height:1.4}@media screen and (min-width: 539px){.instructions__preparation--text[_ngcontent-%COMP%]{font-size:1rem}}.comments__title[_ngcontent-%COMP%]{font-size:1.125rem;margin-bottom:3rem;font-family:Poppins,sans-serif;font-weight:500}@media screen and (min-width: 767px){.comments__title[_ngcontent-%COMP%]{font-size:1.25rem}}.comments__wrap[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.25rem;margin-bottom:2.5rem}.comments__wrap--content[_ngcontent-%COMP%]{border:1px solid #e5e5e5;border-radius:10px;padding:.625rem;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;gap:.625rem}.comments__wrap--content__user[_ngcontent-%COMP%]{display:flex;justify-content:flex-start;align-items:center;gap:.625rem}.comments__wrap--content__user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:14px;font-weight:500}@media screen and (min-width: 767px){.comments__wrap--content__user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:initial}}.comments__wrap--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:12px;color:#535353;line-height:1.4}@media screen and (min-width: 767px){.comments__wrap--content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:14px;line-height:initial}}.comments-img[_ngcontent-%COMP%]{width:35px;height:35px;border-radius:50%}"]})}return t})()}];let u=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[s.Bz.forChild(l),s.Bz]})}return t})();var h=i(6208);let f=(()=>{class t{static#e=this.\u0275fac=function(a){return new(a||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[_.ez,u,h.m]})}return t})()}}]);
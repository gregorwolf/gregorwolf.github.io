"use strict"
define("ember-quickstart/app",["exports","ember","ember-quickstart/resolver","ember-load-initializers","ember-quickstart/config/environment"],function(e,t,i,r,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=t.default.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:i.default});(0,r.default)(n,a.default.modulePrefix),e.default=n}),define("ember-quickstart/components/people-list",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Component.extend({actions:{showPerson:function(e){alert(e)}}})}),define("ember-quickstart/helpers/app-version",["exports","ember","ember-quickstart/config/environment","ember-cli-app-version/utils/regexp"],function(e,t,i,r){function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{}
return t.hideSha?n.match(r.versionRegExp)[0]:t.hideVersion?n.match(r.shaRegExp)[0]:n}Object.defineProperty(e,"__esModule",{value:!0}),e.appVersion=a
var n=i.default.APP.version
e.default=t.default.Helper.helper(a)}),define("ember-quickstart/helpers/pluralize",["exports","ember-inflector/lib/helpers/pluralize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-quickstart/helpers/singularize",["exports","ember-inflector/lib/helpers/singularize"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-quickstart/initializers/app-version",["exports","ember-cli-app-version/initializer-factory","ember-quickstart/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=i.default.APP,a=r.name,n=r.version
e.default={name:"App Version",initialize:(0,t.default)(a,n)}}),define("ember-quickstart/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("ember-quickstart/initializers/data-adapter",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"data-adapter",before:"store",initialize:function(){}}}),define("ember-quickstart/initializers/ember-data",["exports","ember-data/setup-container","ember-data"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/initializers/export-application-global",["exports","ember","ember-quickstart/config/environment"],function(e,t,i){function r(){var e=arguments[1]||arguments[0]
if(!1!==i.default.exportApplicationGlobal){var r
if("undefined"!=typeof window)r=window
else if("undefined"!=typeof global)r=global
else{if("undefined"==typeof self)return
r=self}var a,n=i.default.exportApplicationGlobal
a="string"==typeof n?n:t.default.String.classify(i.default.modulePrefix),r[a]||(r[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete r[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=r,e.default={name:"export-application-global",initialize:r}}),define("ember-quickstart/initializers/injectStore",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"injectStore",before:"store",initialize:function(){}}}),define("ember-quickstart/initializers/store",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"store",after:"ember-data",initialize:function(){}}}),define("ember-quickstart/initializers/transforms",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"transforms",before:"store",initialize:function(){}}}),define("ember-quickstart/instance-initializers/ember-data",["exports","ember-data/instance-initializers/initialize-store-service"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"ember-data",initialize:t.default}}),define("ember-quickstart/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("ember-quickstart/router",["exports","ember","ember-quickstart/config/environment"],function(e,t,i){Object.defineProperty(e,"__esModule",{value:!0})
var r=t.default.Router.extend({location:i.default.locationType,rootURL:i.default.rootURL})
r.map(function(){this.route("scientists")}),e.default=r}),define("ember-quickstart/routes/scientists",["exports","ember"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default.Route.extend({model:function(){return["Marie Curie","Mae Jemison","Albert Hofmann","Albert Einstein","Max Plank"]}})}),define("ember-quickstart/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("ember-quickstart/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"EceCJ4Dw",block:'{"statements":[[11,"h1",[]],[13],[0,"Gregor\'s PeopleTracker"],[14],[0,"\\n\\n"],[1,[26,["outlet"]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/application.hbs"}})}),define("ember-quickstart/templates/components/people-list",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"RpdrFNyT",block:'{"statements":[[11,"h2",[]],[13],[1,[26,["title"]],false],[14],[0,"\\n\\n"],[11,"ul",[]],[13],[0,"\\n"],[6,["each"],[[28,["people"]]],null,{"statements":[[0,"    "],[11,"li",[]],[5,["action"],[[28,[null]],"showPerson",[28,["person"]]]],[13],[1,[28,["person"]],false],[14],[0,"\\n"]],"locals":["person"]},null],[14]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/components/people-list.hbs"}})}),define("ember-quickstart/templates/scientists",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"qR9tMZDD",block:'{"statements":[[1,[33,["people-list"],null,[["title","people"],["List of Scientists",[28,["model"]]]]],false]],"locals":[],"named":[],"yields":[],"hasPartials":false}',meta:{moduleName:"ember-quickstart/templates/scientists.hbs"}})}),define("ember-quickstart/config/environment",["ember"],function(e){try{var t="ember-quickstart/config/environment",i=document.querySelector('meta[name="'+t+'"]').getAttribute("content"),r=JSON.parse(unescape(i)),a={default:r}
return Object.defineProperty(a,"__esModule",{value:!0}),a}catch(e){throw new Error('Could not read config from meta tag with name "'+t+'".')}}),runningTests||require("ember-quickstart/app").default.create({name:"ember-quickstart",version:"0.0.0+5c97ec98"})

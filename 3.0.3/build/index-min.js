/*!build time : 2014-09-22 4:48:51 PM*/
KISSY.add("kg/xlist/3.0.3/dataset",function(){var a=function(a){this.data=a&&a.data||[],this.id=a&&a.id||"_ds_"+Date.now()};return a.prototype.appendData=function(a){this.data=this.data.concat(a)},a.prototype.removeData=function(){this.data=[]},a.prototype.getData=function(){return this.data},a.prototype.setId=function(a){return a?(this.id=a,this.id):void 0},a.prototype.getId=function(){return this.id},a}),KISSY.add("kg/xlist/3.0.3/index",function(a,b,c,d,e,f){var g=(a.all,e.prefixStyle("transform")),h=d.extend({initializer:function(){var b=this,c=b.userConfig=a.mix({data:[],itemHeight:30},b.userConfig,void 0,void 0,!0);clsPrefix=c.clsPrefix||"ks-xlist-",b.containerClsName=clsPrefix+"container",b.contentClsName=clsPrefix+"content",b._initInfinite(),b.callSuper()},_getDomInfo:function(){var a=this,b=a._formatData(),c=a.userConfig.itemHeight,d=0,e=[],f=0;a.hasSticky=!1;for(var g=0,h=b.length;h>g;g++){var i=b[g];f=i.style&&i.style.height>=0?i.style.height:c,i._row=g,i._top=d,i._height=f,i.recycled=i.recycled===!1?!1:!0,e.push(i),d+=f,!a.hasSticky&&i.style&&"sticky"==i.style.position&&(a.hasSticky=!0)}return a.domInfo=e,e},appendDataSet:function(a){var b=this;!a instanceof f||b.datasets.push(a)},removeDataSet:function(a){var b=this;if(a)for(var c=0,d=b.datasets.length;d>c;c++)a==b.datasets[c].getId()&&b.datasets[c].splice(c,1)},getDataSets:function(){var a=this;return a.datasets},getDataSetById:function(a){var b=this;if(a)for(var c=0,d=b.datasets.length;d>c;c++)if(b.datasets[c].getId()==a)return b.datasets[c]},_formatData:function(){var a=this,b=[];for(var c in a.datasets)b=b.concat(a.datasets[c].getData());return b},render:function(){var a=this;a.callSuper(),a._getDomInfo(),a._initSticky();var b=a.get("height"),c=a.domInfo[a.domInfo.length-1],d=c&&c._top?c._top+c._height:a.height;b>d&&(d=b),a.set("containerHeight",d),a.$ctn.height(d),a._renderNoRecycledEl(),a._update(a.getOffsetTop(),!0)},_renderNoRecycledEl:function(){var a=this,b=a.get("gpuAcceleration")?" translateZ(0) ":"";for(var c in a.domInfo)if(a.domInfo[c].recycled===!1){var d=a.domInfo[c].id&&document.getElementById(a.domInfo[c].id.replace("#",""))||document.createElement("div"),e="ks-xlist-row-"+Date.now();d.id=a.domInfo[c].id||e,a.domInfo[c].id=d.id,a.$content.append(d);for(var f in a.domInfo[c].style)"height"!=f&&"display"!=f&&"position"!=f&&(d.style[f]=a.domInfo[c].style[f]);d.style.top=0,d.style.position="absolute",d.style.display="block",d.style.height=a.domInfo[c]._height+"px",d.style[g]="translateY("+a.domInfo[c]._top+"px) "+b,a.domInfo[c].className&&(d.className=a.domInfo[c].className),a.userConfig.renderHook.call(a,d,a.domInfo[c])}},_initSticky:function(){var a=this;if(a.hasSticky&&!a._isStickyRendered){a._isStickyRendered=!0;var b=document.createElement("div");b.style.position="absolute",b.style.top="0",b.style.display="none",a.$renderTo.prepend(b),a.stickyElement=b,a.stickyDomInfo=[];for(var c=0,d=a.domInfo.length;d>c;c++)a.domInfo[c]&&a.domInfo[c].style&&"sticky"==a.domInfo[c].style.position&&a.stickyDomInfo.push(a.domInfo[c]);a.stickyDomInfoLength=a.stickyDomInfo.length}},_initInfinite:function(){var a=this,b=a.userConfig.infiniteElements;a.datasets=[],a.userConfig.data&&a.userConfig.data.length&&a.datasets.push(new f({data:a.userConfig.data})),a.infiniteElements=a.$renderTo[0].querySelectorAll(b),a.infiniteLength=a.infiniteElements.length,a.infiniteElementsCache=function(){for(var b=[],c=0;c<a.infiniteLength;c++)b.push({}),a.infiniteElements[c].style.display="none";return b}(),a.elementsPos={},a.on("scroll",function(b){a._update(b.offset.y),a._stickyHandler(b.offset.y)}),a.on("afterGpuAccelerationChange",function(b){if(b.newVal)for(var c=0;c<a.infiniteLength;c++)/translateZ/.test(a.infiniteElements[c].style[g])||(a.infiniteElements[c].style[g]+=" translateZ(0)");else for(var c=0;c<a.infiniteLength;c++)a.infiniteElements[c].style[g]=a.infiniteElements[c].style[g].replace(/translateZ\(0px\)/,"")})},_stickyHandler:function(a){var b=this;if(b.stickyDomInfoLength&&!(a>0)){for(var a=Math.abs(a),c=[],d=0;d<b.stickyDomInfoLength;d++)if(c.push(b.stickyDomInfo[d]._top),a>=b.stickyDomInfo[d]._top){b.userConfig.renderHook.call(b,b.stickyElement,b.stickyDomInfo[d]),b.stickyElement.style.display="block",b.stickyElement.style.height=b.stickyDomInfo[d].style.height+"px",b.stickyElement.className=b.stickyDomInfo[d].className||"";for(var e in b.stickyDomInfo[d].style)"height"!=e&&"display"!=e&&"position"!=e&&(b.stickyElement.style[e]=b.stickyDomInfo[d].style[e])}return a<Math.min.apply(null,c)?void(b.stickyElement.style.display="none"):void 0}},_getElementsPos:function(a){for(var b,c=this,a=-(a||c.getOffsetTop()),d=c.domInfo,e=c.userConfig.itemHeight,f=Math.ceil(c.get("height")/e),g=Math.max(Math.ceil(f/3),0),h=Math.max(a-g*e,0),i={},j=0,k=d.length;k>j;j++)b=d[j],b._top>=h-e&&b._top<=h+2*g*e+c.get("height")&&(i[b._row]=b);return i},_getChangedRows:function(a,b){var c=this,d={};for(var e in c.elementsPos)a.hasOwnProperty(e)||(d[e]="delete");for(var e in a)!a[e].recycled||c.elementsPos.hasOwnProperty(e)&&!b||(d[e]="add");return c.elementsPos=a,d},_update:function(a,b){var c=this,d=c.get("gpuAcceleration")?" translateZ(0) ":"",a=void 0===a?c.getOffsetTop():a,e=c._getElementsPos(a),f=c._getChangedRows(e,b),h=null;if(b)for(var i=0;i<c.infiniteLength;i++)c.infiniteElementsCache[i]._visible=!1,delete c.infiniteElementsCache[i]._row,c.infiniteElements[i].style.display="none";var j=function(){for(var a=0;a<c.infiniteLength;a++)if(!c.infiniteElementsCache[a]._visible)return c.infiniteElementsCache[a]._visible=!0,a},k=function(a){for(var b=0;b<c.infiniteLength;b++)c.infiniteElementsCache[b]._row==a&&(c.infiniteElementsCache[b]._visible=!1,c.infiniteElements[b].innerHTML="",c.infiniteElements[b].style.display="none",c.infiniteElements[b].style[g]="none",delete c.infiniteElementsCache[b]._row)};for(var i in f)if("delete"==f[i]&&k(i),"add"==f[i]){var l=j(e[i]._row);if(h=c.infiniteElements[l]){c.infiniteElementsCache[l]._row=e[i]._row;for(var m in e[i].style)"height"!=m&&"display"!=m&&"position"!=m&&(h.style[m]=e[i].style[m]);h.style.position="absolute",h.style.top=0,h.style.display="block",h.style.height=e[i]._height+"px",h.style[g]="translateY("+e[i]._top+"px) "+d,c.userConfig.renderHook.call(c,h,e[i])}}}},{ATTRS:{lockX:{value:!0}}});return h.DataSet=f,h},{requires:["node","event","kg/xscroll/1.1.8/index","kg/xscroll/1.1.8/util","./dataset"]});
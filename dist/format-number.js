!function(e,t){"function"==typeof define&&define.amd?define(["$"],t):"object"==typeof exports?module.exports=t():e.FormatNumber=t(window.Zepto||window.jQuery||$)}(this,function(e){e.fn.FormatNumber=function(a){var n=[];return e(this).each(function(){var r=e.extend({trigger:e(this)},a),i=new t;i.init(r),n.push(i)}),n};var t=function(){};return t.prototype={init:function(t){function a(t){var a=e(this).attr("data-name"),r=a.split(".")[1]||a.split(".")[0];n(t,e(this)[0],c);var i=d.getMoneyfloat(e(this).val());e("#"+r).val(i),e(this).attr("data-value",i)}function n(e,t,a){var n=t.value.length,r=i(t),d=window.event?e.keyCode:e.which,s=l(d,t.value,a);t.value=s,r+=s.length-n,o(t,r)}function r(e){for(var t in s)if(e==s[t])return!0;return!1}function i(e){var t=e,a=-1;if(void 0!=t.selectionStart)a=t.selectionStart;else{var n=document.selection.createRange();n.moveStart("character",-t.value.length),a=n.text.length}return a}function l(e,a,n){if(r(e))return a;var i=a,l=!1,o=/[^\d\.]/g;if(t.minus&&/^\-/.test(i)&&(i=i.slice(1),l=!0),i.indexOf(".")<=0)i=i.replace(o,"");else{i=i.replace(o,"");var s=parseFloat(i+"00");isNaN(s)&&(i=s),/\./.test(i)&&0==t.decimal&&(i=i.toString().replace(/\./g,""))}var c=new RegExp(n);c.exec(i)||""==i||(i="0");var u=i.split(".");i=u.length>1?(u[0].length>14?u[0].substr(0,14):u[0])+"."+u[1]:i.length>14?i.substr(0,14):i;var f=d.doFormat(i);if(l&&(f="-"+f),null!=f){var v=f.split(".");if(i.lastIndexOf(".")>=0)if(i.lastIndexOf(".")==i.length-1)i=v[0]+".";else{var p=i.length-(i.lastIndexOf(".")+1);i=v[0]+"."+(v[1]?v[1].substring(0,p):"0")}else i=v[0];return i}}function o(e,t){var a=e;if(void 0!=a.selectionStart)a.setSelectionRange(t,t);else{var n=a.createTextRange();n.move("character",t),n.select()}}var d=this;t=e.extend({trigger:'[data-type="money"]',decimal:2,minus:!1,parent:"body"},t),this.settings=t;var s={left:37,right:39,top:38,down:40,home:36,end:35,shift:16},c="([1-9]\\d*(\\.\\d{1,2})?|0(\\.\\d{1,2})?)";c=t.decimal<=0&&1==t.minus?"(^-?[1-9]\\d*$)|(^[0]$)":0==t.decimal?"(^[1-9]\\d*$)|(^[0]$)":1==t.minus?"(^-)?((([1-9]d*(\\.\\d{1,"+t.decimal+"})?)|((^[0]{1}\\.(\\d{1,"+t.decimal+"})?$))|^[0]$))":"([1-9]\\d*(\\.\\d{1,"+t.decimal+"})?|([^0]{1}(\\.\\d{1,"+t.decimal+"}))?)",parent=parent||"body",e(t.trigger,parent).each(function(t,a){var n,r;if("INPUT"==e(a)[0].tagName){if(n=e(a).val(),e(a).attr("data-name")){var i=e(a).attr("data-name"),l=i.split(".")[1]||i.split(".")[0];e(a).parent().append('<input data-rule="number" id="'+l+'" type="hidden" name="'+i+'" />'),e("#"+l).val(d.getMoneyfloat(e(a).val()))}r=d.doFormat(n),e(a).val(r)}else n=e(a).text(),r=d.doFormat(n),e(a).attr("data-value",n).text(r);e(this).attr("data-value",e(a).val())}),e(t.trigger,parent).on("keyup",function(e){a.call(this,e)})},getMoneyfloat:function(e){return""==e?null:parseFloat((e+"").replace(/[^\d\.-]/g,""))},doFormat:function(t){var a=this;return t?(e.isNumeric(t)&&(t=t.toString()),"string"==typeof t&&(t=t.replace(/^(\d+)((\.\d*)?)$/,function(e,t,n){return t.replace(/\d{1,3}(?=(\d{3})+$)/g,"$&,")+(n.slice(0,a.settings.decimal+1)||".00")})),t.replace(/^\./,"0.")):""}},t});
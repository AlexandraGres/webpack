!function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var e=new(function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.title=t,this.date=new Date}var n,i,o;return n=e,(i=[{key:"toString",value:function(){return JSON.stringify({title:this.title,date:this.date.toJSON()})}}])&&t(n.prototype,i),o&&t(n,o),e}())("Post title");console.log("Post to string: ",e.toString())}();
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"ke8K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DirectionsResults=void 0;var e=require("./config.js");function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function s(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&o(e,t)}function o(e,t){return(o=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=u();return function(){var n,r=d(e);if(t){var i=d(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return c(this,n)}}function c(e,n){if(n&&("object"===t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return l(e)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=function(t){s(o,woosmap.utils.MVCObject);var r=a(o);function o(t,i,s,a,c){var l;return n(this,o),(l=r.call(this)).map=t,l.selectedRendererOptions=i,l.unselectedRenderersOptions=s,l.directionsMarkers=[],l.directionsRoutesBorders=[],l.directionsRoutes=[],l.currentBounds={},l.selectedRendererIndex=0,l.stepsContainer=document.createElement("div"),l.selectedTravelMode="",l.iconsDirections={start:{url:"https://images.woosmap.com/directions/directions_start.png",scaledSize:new google.maps.Size(14,14)},end:{url:"https://images.woosmap.com/directions/directions_destination.png",scaledSize:new google.maps.Size(16,16)}},l.summaryRenderer=new woosmap.TemplateRenderer(e.summaryTemplate),l.summaryRenderer.registerLambda("image_travelmode",l.getImageTravelMode),l.stepsHeaderRenderer=new woosmap.TemplateRenderer(e.stepsHeaderTemplate),l.summaryContainer=a,l.instructionsContainer=c,l.instructionsContainer.appendChild(l.stepsContainer),l}return i(o,[{key:"getImageTravelMode",value:function(){var e;switch(this.travelMode){case"DRIVING":e="//images.woosmap.com/directions/drive_black.png";break;case"BICYCLING":e="//images.woosmap.com/directions/bicycle_black.png";break;case"TRANSIT":e="//images.woosmap.com/directions/transit_black.png";break;case"WALKING":e="//images.woosmap.com/directions/walk_black.png";break;default:e="//images.woosmap.com/directions/drive_black.png"}return e}},{key:"removeMarkersDirections",value:function(){this.directionsMarkers.forEach(function(e,t){e.setMap(null)}),this.directionsMarkers=[]}},{key:"removeAllRoutes",value:function(){this.directionsRoutesBorders.forEach(function(e,t){woosmap.maps.utils.polylineRemoveListeners(e,"click"),e.setMap(null)}),this.directionsRoutes.forEach(function(e,t){woosmap.maps.utils.polylineRemoveListeners(e,"click"),e.setMap(null)}),this.directionsRoutes=[],this.directionsRoutesBorders=[]}},{key:"addMarkerDirections",value:function(e,t,n){this.directionsMarkers.push(new google.maps.Marker({position:e,map:this.map,icon:t,title:n,label:new google.maps.Marker({className:"markerLabel",text:n})}))}},{key:"updateDirectionsMarkers",value:function(){function e(t){var n=(e.canvas||(e.canvas=document.createElement("canvas"))).getContext("2d");return n.font="bold 14px sans-serif",n.measureText(t).width}var t=this.get("directionsRenderers")[this.selectedRendererIndex].getDirections().routes[0].legs[0];this.removeMarkersDirections();var n=this.get("origindestinationText").originText,r=this.get("origindestinationText").destinationText;this.iconsDirections.start.labelOrigin=new google.maps.Point(e(n)/2+14,7),this.iconsDirections.end.labelOrigin=new google.maps.Point(e(r)/2+15,8),this.addMarkerDirections(t.start_location,this.iconsDirections.start,n),this.addMarkerDirections(t.end_location,this.iconsDirections.end,r)}},{key:"directionsRenderers_changed",value:function(){this.summaryContainer.classList.remove("loading"),this.cleanRouteSteps(),this.displayAllRoutes(),this.setSelectedRenderer(0),this.registerRoutesClick()}},{key:"directionsSummaries_changed",value:function(){var e=this;this.cleanRouteSteps(),this.cleanSummaryContainer(),this.get("directionsSummaries").forEach(function(t,n){t.travelMode||(t.travelMode=e.get("selectedTravelMode"));var r=e.summaryRenderer.render(t);e.summaryContainer.insertAdjacentHTML("beforeend",r)},this),this.registerSummaryClick()}},{key:"displayNoResults",value:function(e,t){this.cleanSummaryContainer(),this.summaryContainer.classList.remove("loading");var n=document.createElement("span"),r="Sorry, we could not calculate transit directions from ".concat(t.originText," to ").concat(t.destinationText);n.appendChild(document.createTextNode(r)),this.summaryContainer.appendChild(n)}},{key:"registerSummaryClick",value:function(){var e=this;document.querySelectorAll(".section-directions-trip").forEach(function(t){var n=parseInt(t.dataset.rendererindex);t.addEventListener("click",function(t){n===e.selectedRendererIndex?e.displayRouteSteps(n):e.setSelectedRenderer(n)},e)},this)}},{key:"selectSummaryRenderer",value:function(){var e=this;document.querySelectorAll(".section-directions-trip").forEach(function(t){t.classList.remove("selected"),parseInt(t.dataset.rendererindex)===e.selectedRendererIndex&&t.classList.add("selected")},this)}},{key:"setSelectedRenderer",value:function(e){var t=this;this.selectedRendererIndex=e,this.get("directionsRenderers").forEach(function(n,r){r===e?(t.directionsRoutes[r].setOptions(t.selectedRendererOptions.polylineOptions),t.directionsRoutesBorders[r].setOptions(t.selectedRendererOptions.borderPolylineOptions),null!==t.instructionsContainer.offsetParent&&t.displayRouteSteps(r)):(t.directionsRoutes[r].setOptions(t.unselectedRenderersOptions.polylineOptions),t.directionsRoutesBorders[r].setOptions(t.unselectedRenderersOptions.borderPolylineOptions)),n.setDirections(n.getDirections())},this),this.selectSummaryRenderer()}},{key:"getFullPath",value:function(e){for(var t=[],n=0;n<e.length;n++)for(var r=e[n].steps,i=0;i<r.length;i++)for(var s=r[i].path,o=0;o<s.length;o++)t.push(s[o]);return t}},{key:"registerRoutesClick",value:function(){var e=this;this.directionsRoutes.forEach(function(t,n){woosmap.maps.utils.polylineAddListener(t,"click",function(t){e.setSelectedRenderer(n)},e)}),this.directionsRoutesBorders.forEach(function(t,n){woosmap.maps.utils.polylineAddListener(t,"click",function(t){e.setSelectedRenderer(n)},e)})}},{key:"displayAllRoutes",value:function(){var e=this;this.removeAllRoutes(),this.currentBounds=new google.maps.LatLngBounds,this.get("directionsRenderers").forEach(function(t,n){e.currentBounds.union(t.getDirections().routes[0].bounds);var r=e.getFullPath(t.getDirections().routes[0].legs),i={path:r},s={path:r};n===e.selectedRendererIndex?(Object.assign(i,e.selectedRendererOptions.polylineOptions),Object.assign(s,e.selectedRendererOptions.borderPolylineOptions)):(Object.assign(i,e.unselectedRenderersOptions.polylineOptions),Object.assign(s,e.unselectedRenderersOptions.borderPolylineOptions));var o=new google.maps.Polyline(i),a=new google.maps.Polyline(s);e.directionsRoutes.push(o),e.directionsRoutesBorders.push(a)},this),this.directionsRoutes.forEach(function(t,n){t.setMap(e.map)}),this.directionsRoutesBorders.forEach(function(t,n){t.setMap(e.map)}),this.map.fitBounds(this.currentBounds),this.updateDirectionsMarkers()}},{key:"displayRouteSteps",value:function(e){var t=this;this.get("directionsRenderers").forEach(function(e,t){e.setPanel(null)});var n=document.querySelector(".directions-trip");n&&n.parentNode.removeChild(n),this.map.fitBounds(this.currentBounds);var r=Object.assign({},this.get("origindestinationText"),this.get("directionsSummaries")[e],{directionsLink:this.get("directionsLink")}),i=this.stepsHeaderRenderer.render(r);this.instructionsContainer.insertAdjacentHTML("afterbegin",i),this.instructionsContainer.style.display="flex",this.get("directionsRenderers")[e].setPanel(this.stepsContainer),document.querySelector(".directions-trip-header-back").addEventListener("click",function(e){t.instructionsContainer.style.display="none"},this)}},{key:"cleanRouteSteps",value:function(){this.instructionsContainer.style.display="none",this.stepsContainer.querySelectorAll("*").forEach(function(e){return e.remove()}),this.get("directionsRenderers").forEach(function(e,t){e.setPanel(null)})}},{key:"cleanSummaryContainer",value:function(){this.summaryContainer.querySelectorAll("*").forEach(function(e){return e.remove()})}}]),o}();exports.DirectionsResults=p;
},{"./config.js":"nZps"}]},{},[], null)
//# sourceMappingURL=/csb-n66cr6/directionsResults.8079574a.js.map
sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("DemoProjectDemoProject.controller.View1", {
	 onInit: function(){
	 	alert("inside onInit");
	 },
	 onClick: function(){
	 	alert("inside onClick");
	 }
	});
});
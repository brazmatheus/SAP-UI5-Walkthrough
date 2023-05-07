sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel"
], (Controller, MessageToast, JSONModel) => {
    "use strict"
    return Controller.extend("sap.ui.demo.walkthrough", {
        onInit : function () {
           // set data model on view
           var oData = {
              recipient : {
                 name : "Worlda"
              }
           };
           var oModel = new JSONModel(oData);
           this.getView().setModel(oModel);
        },
        onShowHello: () => {
            MessageToast.show("Hello Earth")
        }
    })
})
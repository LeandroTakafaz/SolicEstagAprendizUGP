function enableFields(form){ 
    var Now = parseInt(getValue("WKNumState"));
    var gestor = getValue("WKManagerMode");
    var usuario = getValue("WKUser");
    var solicitante = form.getValue("cmb_NomeSolicitante")
    
    
    if(Now == 0 || Now == 4){
    	fields = ['txt_NumProc', 'cmb_NomeSolicitante', 'dt_DataSolicit']
    	disableFieldsFromList(form, fields)
    	if(usuario != solicitante){
            disableAllFields(form)    	
        }
    }
    else if(Now == 7 || Now == 12 || Now == 15 || Now == 31 || Now == 33 || Now == 35 || Now == 68 || Now == 70 || Now == 74 || Now == 78 || Now == 80 || Now == 99 || Now == 108){
        disableAllFields(form)
	}   
    else if(Now == 27) {
        disableAllFields(form)
        fields = ["disponivel"]
        enableFieldsFromList(form,fields)
    }

    else if(Now == 57) {
        disableAllFields(form)
        fields = ["aprovacao", "emailAprovado"]
        enableFieldsFromList(form,fields)
    }

    else if(Now == 64 || Now == 92) {
        disableAllFields(form)
        fields = ["status"]
        enableFieldsFromList(form,fields)
    }

    function disableAllFields(form) {
        var fields =    form.getCardData();
        var iterare =   fields.keySet().iterator();
        while (iterare.hasNext()) {
            var key =   iterare.next();
            form.setEnabled(key, false, false);
        }
    }
    
    function enableFieldsFromList(form, fields) {
        for (var i = 0; i < fields.length; i++) {
            form.setEnabled(fields[i], true);
        }
    }
    
    function disableFieldsFromList(form,fields){
        for(var i = 0; i<fields.length; i++){
            form.setEnabled(fields[i], false);
        }
    }
}
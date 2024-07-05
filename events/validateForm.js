function validateForm(form){
    var Now = parseInt(getValue("WKNumState"));
	var errors = [];
	var msg = '';
	Date.prototype.addDays = function(days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
    }

    if(Now == 0 || Now == 4)  {
		if(form.getValue("estiloVaga") == "Selecione uma Opção") {
			errors.push("Campo Tipo de Contrato não foi preenchido")
		}
    }

}
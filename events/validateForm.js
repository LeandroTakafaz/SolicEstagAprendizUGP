function validateForm(form) {
  var Now = parseInt(getValue("WKNumState"));
  var errors = [];
  var msg = '';
  Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }

  if (Now == 0 || Now == 4) {
    if (form.getValue("estiloVaga") == "0") {
      errors.push("Campo Tipo de Contrato não foi preenchido")
    }
    if (form.getValue("vaga") == "select") {
      errors.push("Campo 'Possui Candidatos Prévios?' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("empresaUnidade") == "") {
      errors.push("Campo 'Empresa / Unidade' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("cnpj") == "") {
      errors.push("Campo 'CNPJ' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("endereco") == "") {
      errors.push("Campo 'Endereço' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("requisitanteVaga") == "") {
      errors.push("Campo 'Requisitante da Vaga' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("cargo") == "") {
      errors.push("Campo 'Cargo' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("departamento") == "") {
      errors.push("Campo 'Endereço' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("setorAprendiz") == "") {
      errors.push("Campo 'Setor' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("telefone") == "") {
      errors.push("Campo 'Telefone' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("email") == "") {
      errors.push("Campo 'E-mail' não foi preenchido")
    }
  }

  if (errors.length > 0) {
    throw errors.join("\n");
  } 
}
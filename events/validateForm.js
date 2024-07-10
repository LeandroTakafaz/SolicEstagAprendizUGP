/* function validateForm(form) {
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
    } */
    /* Painel de Dados da Empresa */

    /* if (form.getValue("estiloVaga") == "2" && form.getValue("empresaUnidade") == "") {
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
    } */
    /* Fim do Painel */

    /* Painel de Dados do Menor Aprendiz */
   /*  if (form.getValue("estiloVaga") == "2" && form.getValue("salario") == "") {
      errors.push("Campo 'Qual será o Salário?' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("sexo") == "selec") {
      errors.push("Campo 'Qual o requisito de sexo?' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("supervisorAprendiz") == "") {
      errors.push("Campo 'Supervisor Responsável' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("cargoSupervisor") == "") {
      errors.push("Campo 'Cargo do Supervisor' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("numVagas") == "") {
      errors.push("Campo 'Nº de Vagas' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("entradaAprendiz") == "") {
      errors.push("Campo 'Entrada' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("saidaAprendiz") == "") {
      errors.push("Campo 'Saída' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("localEntrevista") == "") {
      errors.push("Campo 'Local da Entrevista' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("pontoReferencia") == "") {
      errors.push("Campo 'Ponto de Referência' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("busca") == "") {
      errors.push("Campo 'Procurar por' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("setor") == "") {
      errors.push("Campo 'Setor de Atuação' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("idade") == "") {
      errors.push("Campo 'Idade Mínima' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("atividade") == "") {
      errors.push("Campo 'Principais Atividades Executadas' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "2" && form.getValue("obsAprendiz") == "") {
      errors.push("Campo 'Observações' não foi preenchido")
    } */
    /* Fim do Painel */

    /* Painel de Dados do Estagiário */
    
   /*  if (form.getValue("estiloVaga") == "1" && form.getValue("graduacao") == "") {
      errors.push("Campo 'Graduação' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("cargaHoraria") == "") {
      errors.push("Campo 'Carga Horária' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("inicioTurno") == "") {
      errors.push("Campo 'Entrada' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("finalTurno") == "") {
      errors.push("Campo 'Saída' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("tipoEnsino") == "selecione") {
      errors.push("Campo 'Cursando' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("tipoEnsino") == "medio" && form.getValue("serie") == "") {
      errors.push("Campo 'Série' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("tipoEnsino") == "superior" && form.getValue("periodo") == "") {
      errors.push("Campo 'Período' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("supervisor") == "") {
      errors.push("Campo 'Supervisor Responsável' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("formacao") == "") {
      errors.push("Campo 'Formação/Experiência Profissional' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("vaga") == "2" && form.getValue("estagsub") == "") {
      errors.push("Campo 'Estagiário Substituído' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("vaga") == "2" && form.getValue("dtSaida") == "") {
      errors.push("Campo 'Data de Saída' não foi preenchido")
    }
    if (form.getValue("estiloVaga") == "1" && form.getValue("Detalhes") == "") {
      errors.push("Campo 'Atividades a Serem Desenvolvidas no Estágio' não foi preenchido")
    } */
    /* Fim do Painel */
  /* }

  if (errors.length > 0) {
    throw errors.join("\n");
  } 
} */
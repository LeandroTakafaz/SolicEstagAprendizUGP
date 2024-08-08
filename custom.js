function matriculaResp() {
    var nome = document.getElementById('respDemanda').value
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    console.log("TROCOU")
    for (var i = 0; i < ds_mat.values.length; i++) {
        console.log("COMPAROU")
        if (ds_mat.values[i]['colleagueName'] == nome) {
            console.log("ACHOU")
            document.getElementById('matriculaResponsavel').value = ds_mat.values[i]['colleaguePK.colleagueId']
        }
    }
}

function unidade() {
    var ds_mat = DatasetFactory.getDataset("colleague", null, null, null);
    var ds_und = DatasetFactory.getDataset("dsc_Unidades", null, null, null);

    var mat = document.getElementById("cmb_NomeSolicitante").value;

    for (var i = 0; i < ds_mat.values.length; i++) {
        if (mat == ds_mat.values[i]['colleaguePK.colleagueId']) {
            //document.getElementById("mt_solicit").value = mat
            var und = ds_mat.values[i]['groupId'];
            for (var j = 0; j < ds_und.values.length; j++) {
                if (und == ds_und.values[j]['AntigaSigla']) {
                    console.log(ds_und.values[j]['Sigla'])
                    document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeGerente']
                    document.getElementById("cmb_UnidadeSolicitante").value = ds_und.values[j]['NomeUnidade']
                    document.getElementById("hdn_numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("hdn_numSuperior").value = ds_und.values[j]['MatSuperior']
                    }
                }
            }
        }
    }
}
window.addEventListener("load", unidade);


function setSuper() {
    document.getElementById("cmb_GerenteSolicitante").onchange = function () { getSuper() }
}

function getSuper() {
    var hdn_Super = document.getElementById("numSuperior")
    console.log(DatasetFactory.getDataset("dsc_Unidades", null, null, null))
    setTimeout(hdn_Super.value = document.getElementById("cmb_GerenteSolicitante").value, 6000);
    var dataset = DatasetFactory.getDataset("dsc_Unidades", null, null, null)
    for (i = 0; i < dataset.values.length; i++) {
        var mat = dataset.values[i].Matricula
        if (mat == hdn_Super.value) {
            var un = dataset.values[i].NomeUnidade
            document.getElementById("cmb_UnidadeSolicitante").value = un
            dir = dataset.values[i].MatSuperior
            if (dir == "00000428") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DISUP'
            } else if (dir == "80000318") {
                document.getElementById("hdn_diretoria").value = 'Pool:Role:DIRAF'
            } else if (dir == "00000656") { document.getElementById("hdn_diretoria").value = 'Pool:Role:DITEC' }
        }
    }
}
window.addEventListener("load", setSuper)


function BloquearCampos() {

    var EnsinoSelect = document.getElementById("typeEnsino");
    var serieSelect = document.getElementById("someSerie");
    var periodoSelect = document.getElementById("somePeriodo");

    
    if (EnsinoSelect.value === "medio") {
        periodoSelect.style.display = "none";
        serieSelect.style.display = "block";

    } else if (EnsinoSelect.value === "superior") {
        periodoSelect.style.display = "block";
        serieSelect.style.display = "none";

    }  else if (EnsinoSelect.value === "selecione"){
        periodoSelect.style.display = "none";
        serieSelect.style.display = "none";
    }
}

var EnsinoSelect = document.getElementById("typeEnsino");
EnsinoSelect.addEventListener("change", BloquearCampos);
BloquearCampos();

function SumirCampo() {

    var VagaSelect = document.getElementById("vaga");
    var EstagioSelect = document.getElementById("estagioSub");
    var dataSelect = document.getElementById("dataSaida");

    
    if (VagaSelect.value === "2") {
        EstagioSelect.style.display = "none";
        dataSelect.style.display = "none";

    } else if (VagaSelect.value === "1") {
        EstagioSelect.style.display = "block";
        dataSelect.style.display = "block";

    }  else if (VagaSelect.value === "select"){
        EstagioSelect.style.display = "none";
        dataSelect.style.display = "none";
    }
}

var VagaSelect = document.getElementById("vaga");
VagaSelect.addEventListener("change", SumirCampo);
SumirCampo();


function getRow() {
    var table = document.getElementById('dadosItem')
    var tbody = table.tBodies[0]
    var rows = tbody.rows
    var slc = rows[rows.length - 1].getElementsByTagName('input')
    console.log(slc)
    if (slc[slc.length - 1].id.indexOf('___') != -1) {
        return slc[slc.length - 1].id.split('___')[1]
    }
}


function addItens() {
    wdkAddChild("dadosItem");
}

function fnCustomDeleteItem(elem) {
    fnWdkRemoveChild(elem);
}


function formatarMoeda(elem) {
    var id = elem.id
    var valor = moeda.desformatar(elem.value)
    var valorDif = moeda.formatar(valor)
    document.getElementById(id).value = valorDif
}

var moeda = {
    desformatar: function (num) {
        num = num.replace(/\./g, "");
        num = num.replace(/\,/g, ".");
        return parseFloat(num);
    },
    formatar: function (num) {
        x = 0;
        if (num < 0) {
            num = Math.abs(num);
            x = 1;
        }
        if (isNaN(num)) num = "0";
        cents = Math.floor((num * 100 + 0.5) % 100);
        num = Math.floor((num * 100 + 0.5) / 100).toString();
        if (cents < 10) cents = "0" + cents;
        for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
            num = num.substring(0, num.length - (4 * i + 3)) + '.' + num.substring(num.length - (4 * i + 3));
        ret = num + ',' + cents;
        if (x == 1) ret = ' – ' + ret;
        return ret;
    },
    arredondar: function (num) {
        return Math.round(num * Math.pow(10, 2)) / Math.pow(10, 2);
    }
}


function validateValor() {
    tabela = document.getElementById("dadosrateio");
    itens = tabela.getElementsByTagName("input");
    valor = document.getElementById("txt_valor")
    valorTotal = 0;
    for (i = 0; i < itens.length; i++) {
        if (itens[i].id.indexOf("txt_valorUtil___") != -1) {
            iTvalor = itens[i].value
            valorTotal += moeda.desformatar(iTvalor)
        }
    }
    if (valorTotal != moeda.desformatar(valor)) {
        //console.log(valorTotal)
        //console.log(moeda.desformatar(valor))
    }
}

function formataCasasDecimais(valor) {
    valor = "" + valor;

    if (valor.lastIndexOf(".") == -1) {
        valor = valor + ".00";
    }
    else {
        var casasDecimais = valor.substring(valor.lastIndexOf(".") + 1, valor.length);
        if (casasDecimais.length > 2)
            casasDecimais = casasDecimais.substring(0, 2);
        else {
            while (casasDecimais.length < 2) {
                casasDecimais = casasDecimais + "0";
            }
        }
        valor = valor.substring(0, valor.lastIndexOf(".") + 1) + casasDecimais;
    }

    return valor;
}

function setSelectedZoomItem(selectedItem) {

    var indice = -1;
    var arraySelectedItem = selectedItem.inputId.split("___");

    if (arraySelectedItem != null && arraySelectedItem != undefined && arraySelectedItem.length > 1) {
        indice = arraySelectedItem[1];
    }

    if (selectedItem["inputId"] == "txt_projeto___" + indice) {

        document.getElementById("txt_codprojeto___" + indice).value = selectedItem["CODCCUSTO"];

        reloadZoomFilterValues("txt_acao___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_acao___" + indice).value);

    }
    if (selectedItem["inputId"] == "txt_acao___" + indice) {

        document.getElementById("txt_codacao___" + indice).value = selectedItem["CODACAO"];

        reloadZoomFilterValues("txt_recursos___" + indice, "txt_projeto," + document.getElementById("txt_codprojeto___" + indice).value + ",txt_acao," + document.getElementById("txt_codacao___" + indice).value);

        buscaSaldo(document.getElementById("txt_codprojeto___" + indice), document.getElementById("txt_codacao___" + indice))

        var saldo = document.getElementById("txt_saldo___" + indice).value

        console.log(saldo)
        saldo = formataCasasDecimais(saldo)
        console.log(saldo)
        saldo = moeda.formatar(saldo)
        document.getElementById("txt_saldo___" + indice).value = saldo

    }
}

function buscaSaldo(projeto, acao, indx) {

    //console.log("projeto VALUE: " + projeto.value);
    //console.log("acao VALUE: " + acao.value);

    //var campo = acao;

    //if (campo.value != "") {
    if (acao != "") {
        ///var id = projeto.name.replace("txt_codprojeto___", "");
        console.log("cc id " + indx);
        //var cc1 = new Array(projeto.value + "." + acao.value);
        var cc1 = new Array(projeto + "." + acao);
        console.log("cc1: " + cc1)
        datasetsaldo = DatasetFactory.getDataset("dssaldo", cc1, null, null);
        //datasetsaldo = valuesDataset(cc1)

        console.log("DATASET SALDO LENGHT " + datasetsaldo.values.length);
        console.log("datasetsaldo: " + datasetsaldo);
        console.log("datasetsaldo.values: " + datasetsaldo.values);
        if (datasetsaldo.values.length > 0) {
            var record = datasetsaldo.values[0];
            //var record = datasetsaldo[0];
            saldo = eval("record[\"SALDO\"]");
        }
        else {
            saldo = 0
        }

        console.log(saldo);

        if (saldo == 0 || saldo == "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#ea8989; color: black";
        }
        else if (saldo != 0 || saldo != "0,00") {
            //console.log(document.getElementById("txt_saldo___1"))
            document.getElementById("txt_saldo___" + indx).value = saldo;
            document.getElementById("txt_saldo___" + indx).style = "background-color:#86dc9c ; color: black";
        }

    }
}

function addRateioz() {
    wdkAddChild("dadosrateio");
    var linha = getRowDot()
    console.log("nova linha:" + linha)
    slcProjeto(linha)
    slcAcao(linha)
    slcUnidade(linha)
    //insertINP()
    //insertINPun()
}


function fnCustomDelete(elem) {
    fnWdkRemoveChild(elem);
}

$(document).ready(function () {
    $('#myTab a').click(function (e) {
        e.preventDefault();
        $(this).tab('show');
    });
});


function SumirPainel() {

    var VagaSelect = document.getElementById("estiloVaga");
    var jovemSelect = document.getElementById("somePainelJov");
    var empSelect = document.getElementById("somePainelEmp");
    var estagSelect = document.getElementById("somePainelEstag");

    
    if (VagaSelect.value === "0") {
        jovemSelect.style.display = "none";
        empSelect.style.display = "none";
        estagSelect.style.display = "none";

    } else if (VagaSelect.value === "1") {
        jovemSelect.style.display = "none";
        empSelect.style.display = "none";
        estagSelect.style.display = "block";

    }  else if (VagaSelect.value === "2"){
        jovemSelect.style.display = "block";
        empSelect.style.display = "block";
        estagSelect.style.display = "none";
    }
}

var VagaSelect = document.getElementById("estiloVaga");
VagaSelect.addEventListener("change", SumirPainel);
SumirPainel();

/* function loadCSS(filename) { 

    var file = document.createElement("link");
    file.setAttribute("rel", "stylesheet");
    file.setAttribute("type", "text/css");
    file.setAttribute("href", filename);
 
    document.head.appendChild(file);
 }
 
 window.onload = function() {
    loadCSS("seu_arquivo.css");
 }; */

 function verificarDataEvento() {
    const dataAtual = new Date();
    const datasFixas = [
      new Date(dataAtual.getFullYear(), 0, 5),
      new Date(dataAtual.getFullYear(), 1, 2),
      new Date(dataAtual.getFullYear(), 2, 1),
      new Date(dataAtual.getFullYear(), 3, 2),
      new Date(dataAtual.getFullYear(), 4, 2),
      new Date(dataAtual.getFullYear(), 5, 4),
      new Date(dataAtual.getFullYear(), 6, 4),
      new Date(dataAtual.getFullYear(), 7, 8),
      new Date(dataAtual.getFullYear(), 8, 3),
      new Date(dataAtual.getFullYear(), 10, 2),
      new Date(dataAtual.getFullYear(), 11, 5),
      new Date(dataAtual.getFullYear(), 11, 5)
    ];
    const apagaTudo = document.getElementById("amostradinho");
    const card = document.getElementById("cardInfo");
  
    let mostrarApagaTudo = false;
  
    datasFixas.forEach(dataFixa => {
      if (dataAtual.toDateString() === dataFixa.toDateString()) {
        mostrarApagaTudo = true;
        return;
      }
    });

    apagaTudo.style.display = mostrarApagaTudo ? "block" : "none";
    card.style.display = mostrarApagaTudo ? "none" : "block";
  }

  window.onload = verificarDataEvento;
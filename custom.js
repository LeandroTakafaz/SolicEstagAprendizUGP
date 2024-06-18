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
                    document.getElementById("numSuperior").value = ds_und.values[j]['Matricula']
                    if (mat == document.getElementById("numSuperior").value) {
                        document.getElementById("cmb_GerenteSolicitante").value = ds_und.values[j]['NomeSuperior']
                        document.getElementById("numSuperior").value = ds_und.values[j]['MatSuperior']
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

    var EnsinoSelect = document.getElementById("tipoEnsino");
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

var EnsinoSelect = document.getElementById("tipoEnsino");
EnsinoSelect.addEventListener("change", BloquearCampos);
BloquearCampos();

function SumirCampo() {

    var VagaSelect = document.getElementById("vaga");
    var EstagioSelect = document.getElementById("estagioSub");

    
    if (VagaSelect.value === "novato") {
        EstagioSelect.style.display = "none";

    } else if (VagaSelect.value === "substituido") {
        EstagioSelect.style.display = "block";

    }  else if (VagaSelect.value === "select"){
        EstagioSelect.style.display = "none";

    }
}

var VagaSelect = document.getElementById("vaga");
VagaSelect.addEventListener("change", SumirCampo);
SumirCampo();
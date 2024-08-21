function displayFields(form,customHTML){
    var Now = parseInt(getValue("WKNumState"));
    var NumProcesso = getValue("WKNumProces");
    var usuario = getValue("WKUser");
    var data = new java.text.SimpleDateFormat("dd/MM/yyyy HH:mm:ss");

    switch(Now){
        case 0:
            form.setValue("cmb_NomeSolicitante",usuario);
            form.setValue("dt_DataSolicit",data.format(new Date()));

            form.setEnabled("cmb_NomeSolicitante",false);
            form.setEnabled("dt_DataSolicit",false);

        break;

        case 10:
            form.setValue("txt_NumProc",NumProcesso);
        break;      

        default:
    }

    if (Now == 0 || Now == 4 || Now == 7 || Now == 12 || Now == 15 || Now == 31 || Now == 33 || Now == 35 || Now == 68 || Now == 70 || Now == 74 || Now == 76 || Now == 78 || Now == 80 || Now == 92) {
        form.setVisibleById("disp", false);
        form.setVisibleById("aprov", false);
        form.setVisibleById("emailAprov", false);
        form.setVisibleById("cand", false);
        }

    if (Now == 27) {
        form.setVisibleById("aprov", false);
        form.setVisibleById("stats", false);
    }

    if (Now == 57) {
        form.setVisibleById("disp", false);
        form.setVisibleById("stats", false);
    }

    if (Now == 64) {
        form.setVisibleById("disp", false);
        form.setVisibleById("aprov", false);
    }

    if (Now == 0 || Now == 4 || Now == 7 || Now == 12 || Now == 15 || Now == 31 || Now == 68 || Now == 70 || Now == 74 || Now == 76 || Now == 78 || Now == 80 || Now == 92) {
        form.setVisibleById("linkSome", false);
    }

    if (Now == 0 || Now == 4 || Now == 7 || Now == 12 || Now == 15 || Now == 31 || Now == 33 || Now == 35 || Now == 68 || Now == 70 || Now == 74 || Now == 78 || Now == 80) {
        form.setVisibleById("stats", false);
    }

    /* Painel de Detalhes da Solicitação */
    if (Now == 0 || Now == 4 || Now == 7 || Now == 12 || Now == 15 || Now == 27 || Now == 31 || Now == 33 || Now == 35 || Now == 57 || Now == 64 || Now == 68 || Now == 92){
        form.setVisibleById("somePainelDetalhes", false);
    }

    if (Now == 7 || Now == 12 || Now == 15 || Now == 27 || Now == 31 || Now == 33 || Now == 35 || Now == 57 || Now == 64 || Now == 68 || Now == 70 || Now == 74 || Now == 78 || Now == 80 || Now == 92) {
        form.setVisibleById("some", false);
    }

 }
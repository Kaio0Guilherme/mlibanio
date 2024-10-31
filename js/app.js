let currentGleba = ''; // Variável para rastrear a gleba atual

function openFarm(farmName) {
    document.getElementById("farmSelection").classList.add("d-none");
    document.getElementById("glebaSelection").classList.remove("d-none");
    document.getElementById("farmTitle").innerText = farmName;
}

function goBackToFarms() {
    document.getElementById("glebaSelection").classList.add("d-none");
    document.getElementById("farmSelection").classList.remove("d-none");
}

function showGlebaInfo(glebaName) {
    currentGleba = glebaName; // Armazena o nome da gleba atual
    document.getElementById("glebaSelection").classList.add("d-none");
    document.getElementById("glebaDetails").classList.remove("d-none");
    document.getElementById("glebaTitle").innerText = glebaName;

    // Carregar dados específicos da gleba
    const savedData = JSON.parse(localStorage.getItem(`glebaData-${glebaName}`));
    if (savedData) {
        document.getElementById("hectares").value = savedData.hectares;
        document.getElementById("numMudas").value = savedData.numMudas;
        document.getElementById("tipoSolo").value = savedData.tipoSolo;
        document.getElementById("tipoPlantio").value = savedData.tipoPlantio;
        document.getElementById("climaIdeal").value = savedData.climaIdeal;
    } else {
        // Se não houver dados salvos, definir valores padrão
        document.getElementById("hectares").value = '';
        document.getElementById("numMudas").value = '';
        document.getElementById("tipoSolo").value = '';
        document.getElementById("tipoPlantio").value = '';
        document.getElementById("climaIdeal").value = '';
    }
}

function goBackToGlebas() {
    document.getElementById("glebaDetails").classList.add("d-none");
    document.getElementById("glebaSelection").classList.remove("d-none");
}

function saveGlebaInfo() {
    // Captura os valores dos campos de entrada
    const hectares = document.getElementById("hectares").value;
    const numMudas = document.getElementById("numMudas").value;
    const tipoSolo = document.getElementById("tipoSolo").value;
    const tipoPlantio = document.getElementById("tipoPlantio").value;
    const climaIdeal = document.getElementById("climaIdeal").value;

    // Cria um objeto para armazenar os dados da gleba
    const glebaData = {
        hectares,
        numMudas,
        tipoSolo,
        tipoPlantio,
        climaIdeal
    };

    // Salva as informações da gleba no Local Storage usando o nome da gleba
    localStorage.setItem(`glebaData-${currentGleba}`, JSON.stringify(glebaData));
    alert(`Informações de ${currentGleba} atualizadas e salvas localmente.`);
}

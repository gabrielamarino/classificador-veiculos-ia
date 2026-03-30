// Localização dos arquivos exportados do Teachable Machine
const URL = "./model/";

let model, maxPredictions;

// Carrega o modelo ao iniciar a página
async function init() {
    const modelURL = URL + "model.json";
    const metadataURL = URL + "metadata.json";

    try {
        console.log("Carregando modelo...");
        model = await tmImage.load(modelURL, metadataURL);
        maxPredictions = model.getTotalClasses();
        console.log("Modelo carregado com sucesso!");
    } catch (error) {
        console.error("Erro ao carregar o modelo:", error);
        alert("Erro ao carregar os arquivos da IA na pasta /model.");
    }
}

// Lógica de upload e predição
const imageUpload = document.getElementById('imageUpload');
const imagePreview = document.getElementById('imagePreview');
const labelResult = document.getElementById('label-result');
const confidenceResult = document.getElementById('confidence-result');
const progressFill = document.getElementById('progress-fill');
const resultCard = document.getElementById('result-card');
const loadingText = document.getElementById('loading');

imageUpload.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = async (e) => {
            imagePreview.src = e.target.result;
            imagePreview.style.display = "block";
            resultCard.style.display = "none";
            loadingText.style.display = "block";

            // Esperar o carregamento da imagem para classificar
            imagePreview.onload = async () => {
                await predict();
            };
        };
        reader.readAsDataURL(file);
    }
});

async function predict() {
    // Fazer a predição da imagem
    const prediction = await model.predict(imagePreview);
    
    // Organizar para pegar a de maior probabilidade
    prediction.sort((a, b) => b.probability - a.probability);
    
    const bestResult = prediction[0];
    const confidencePercent = (bestResult.probability * 100).toFixed(2);

    // Atualizar a interface
    labelResult.innerText = bestResult.className;
    confidenceResult.innerText = confidencePercent + "%";
    progressFill.style.width = confidencePercent + "%";

    loadingText.style.display = "none";
    resultCard.style.display = "block";
}

// Iniciar o carregamento do modelo
init();
# Classificador de Veículos com IA 🚗🚲✈️

Este projeto é uma aplicação web capaz de identificar diferentes modais de transporte utilizando **Inteligência Artificial** e **Visão Computacional.** O modelo foi treinado através da plataforma **Teachable Machine** do Google e implementado no navegador utilizando a biblioteca **TensorFlow.js.**

## 🚀 Funcionalidades

* **Classificação de 6 categorias:** Carro, Moto, Bicicleta, Avião, Navio e Trem.
* **Interface Interativa:** Sistema simples para upload e análise de imagens.
* **Processamento Local:** Execução direta no navegador, garantindo privacidade e velocidade.
* **Feedback Visual:** Barra de progresso que demonstra o nível de confiança da IA na predição.

## 🛠️ Tecnologias Utilizadas

* **TensorFlow.js:** Biblioteca para execução de modelos de Machine Learning em JavaScript.
* **Teachable Machine Image Library:** Facilitador para integração de modelos de imagem.
* **HTML5, CSS3 e JavaScript:** Estrutura, estilização e lógica da aplicação.

## 📂 Estrutura do Repositório

* `index.html`: Página principal da aplicação.
* `style.css`: Estilização e design responsivo.
* `script.js`: Lógica de carregamento do modelo e funções de previsão.
* `/model`: Diretório contendo os arquivos essenciais da IA (`model.json`, `metadata.json` e `weights.bin`).

## 💻 Como executar o projeto

1.  Faça o download ou clone este repositório para sua máquina.
2.  **Importante:** É necessário utilizar um servidor local para que o modelo seja carregado corretamente (devido às políticas de segurança do navegador - CORS).
3.  **Recomendação:** Utilize a extensão **Live Server** do Visual Studio Code.
4.  Abra a pasta do projeto no VS Code, clique com o botão direito no `index.html` e selecione **"Open with Live Server"**.
5.  O navegador abrirá automaticamente em `http://127.0.0.1:5500`.

## 📊 Treinamento e Avaliação

O modelo foi treinado seguindo a **Metodologia de Pareto (80% para treinamento e 20% para testes)**. Nos testes realizados com imagens inéditas, a IA alcançou uma **Acurácia Geral de 97,33%**, demonstrando alta eficácia na distinção entre os diferentes tipos de veículos terrestres, aéreos e aquáticos.

---
*Projeto desenvolvido como parte da disciplina de Robótica e Sistemas Inteligentes — **FAESA**.*

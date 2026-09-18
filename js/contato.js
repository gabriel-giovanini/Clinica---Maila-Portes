"use strict";
const messages = {"avaliacao": "Olá, gostaria de informações sobre uma avaliação odontológica e os horários disponíveis.", "ortodontia": "Olá, gostaria de informações sobre uma avaliação de Ortodontia e os horários disponíveis.", "ertty": "Olá, gostaria de saber sobre uma avaliação para tratamento com Sistemas Ertty.", "ortopedia": "Olá, gostaria de informações sobre uma avaliação de Ortopedia Facial e Funcional.", "clareamento": "Olá, gostaria de informações sobre uma avaliação para clareamento dental.", "reconstrucao": "Olá, gostaria de informações sobre uma avaliação para reconstrução dentária."};
const labels = {"avaliacao": "avaliação odontológica", "ortodontia": "Ortodontia", "ertty": "Sistemas Ertty", "ortopedia": "Ortopedia Facial e Funcional", "clareamento": "clareamento dental", "reconstrucao": "reconstrução dentária"};
const selected = new URLSearchParams(window.location.search).get("servico");
const service = Object.prototype.hasOwnProperty.call(messages, selected) ? selected : "avaliacao";
document.getElementById("continue-whatsapp").href = "https://wa.me/551941415873?text=" + encodeURIComponent(messages[service]);
document.getElementById("contact-service").textContent = "Assunto: " + labels[service] + ".";

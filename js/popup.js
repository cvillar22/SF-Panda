"use strict";

//! Selectors
const content1 = document.querySelector("#popupContent--1");
const content2 = document.querySelector("#popupContent--2");
const btnCloseModal = document.querySelector("#btnCloseModal");
const btnEmail = document.querySelector("#btnEmail");
const txtCloseForm = document.querySelector("#txtCloseForm");
const btnDownload = document.querySelector("#btnDownload");

//! Functions
const changeContent = function () {
    content1.classList.add("hidden");
    content2.classList.remove("hidden");
};

const resetContent = function () {
    content1.classList.remove("hidden");
    content2.classList.add("hidden");
};

// Resetear el Content al cerrar el modal de cualquier forma
$("#popupModal").on("hidden.bs.modal", function (event) {
    resetContent();
});

// Prevenir que el boton del mail cierre el modal
$("form").submit(function (event) {
    event.preventDefault();
});

//! Falta lograr que al no introducir un mail no cambie el content.

// PREENCHIMENTO DO BOARD
export { default as fillBoard } from "./boardConstruction/fillBoard";
export { default as getRandomWord } from "./boardConstruction/getRandomWord";
export { default as checkUsedWord } from "./boardConstruction/checkUsedWord";

// DIREÇÔES
export { default as placeWordVertical } from "./boardConstruction/placeWordVertical";
export { default as placeWordHorizontal } from "./boardConstruction/placeWordHorizontal";
export { default as placeWordDiagonal } from "./boardConstruction/placeWordDiagonal";

// SELECÇÂO
export { default as checkSelection } from "./inputValidation/checkSelection";
export { default as markLetterFound } from "./inputValidation/markLetterFound";

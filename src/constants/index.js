/**
 * Trabalho Realizado por Micael Eid (2019112744), Nuno Almeida (2019121655) e Renato Craveiro (2018011392)
 * No âmbitio da Unidade Curricular de Linguagens Script (1º Ano - 2º Semestre)
 * ISEC - Licenciatura em Engenharia Informática - Ano Letivo 2021/2022  
 */
export const TIMEOUTGAME = 600; // seconds
export const INITIAL_BOARD_SIDE_SIZE = 10;
export const LEVEL_SETTINGS = [
    ["Seleccione...", 10, 100, 1200, false],
    ["Fácil", 10, 100, 600, false],
    ["Médio", 20, 400, 300, false],
    ["Difícil", 25, 625, 150, true]
];

export const ABCD = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].sort(() => Math.random() - 0.5);

export let WORDS = ["Afghanistan","Albania","Algeria","Andorra","Angola","Argentina","Armenia","Australia","Austria","Azerbaijan","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bhutan","Bolivia","Chad","Chile","China","Colombia","Comoros","Denmark","Dominica","Eritrea","Estonia","Eswatini","Ethiopia","Fiji","Finland","France","Gabon","Georgia","Germany","Ghana","Greece","Grenada","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Morocco","Mozambique","Myanmar","Namibia","Nauru","Nepal","Netherlands","New Zealand","Nicaragua","Niger","Nigeria","North Macedonia","Norway","Oman","Taiwan","Tajikistan","Tanzania","Thailand","Togo","Tonga","Trinidad and Tobago","Tunisia","Turkey","Turkmenistan"];

export let CAPSWORDS =["AFGHANISTAN","ALBANIA","ALGERIA","ANDORRA","ANGOLA","ARGENTINA","ARMENIA","AUSTRALIA","AUSTRIA","AZERBAIJAN","BAHRAIN","BANGLADESH","BARBADOS","BELARUS","BELGIUM","BELIZE","BENIN","BHUTAN","BOLIVIA","CHAD","CHILE","CHINA","COLOMBIA","COMOROS","DENMARK","DOMINICA","ERITREA","ESTONIA","ESWATINI","ETHIOPIA","FIJI","FINLAND","FRANCE","GABON","GEORGIA","GERMANY","GHANA","GREECE","GRENADA","GUATEMALA","GUINEA","GUINEA-BISSAU","GUYANA","HAITI","HONDURAS","HUNGARY","ICELAND","INDIA","INDONESIA","IRAN","IRAQ","IRELAND","ISRAEL","ITALY","JAMAICA","JAPAN","JORDAN","KAZAKHSTAN","KENYA","KIRIBATI","KOSOVO","KUWAIT","KYRGYZSTAN","LAOS","LATVIA","LEBANON","LESOTHO","LIBERIA","LIBYA","LIECHTENSTEIN","LITHUANIA","LUXEMBOURG","MADAGASCAR","MALAWI","MALAYSIA","MALDIVES","MALI","MALTA","MAURITANIA","MAURITIUS","MEXICO","MICRONESIA","MOLDOVA","MONACO","MONGOLIA","MONTENEGRO","MOROCCO","MOZAMBIQUE","MYANMAR","NAMIBIA","NAURU","NEPAL","NETHERLANDS","NEW ZEALAND","NICARAGUA","NIGER","NIGERIA","NORTH MACEDONIA","NORWAY","OMAN","TAIWAN","TAJIKISTAN","TANZANIA","THAILAND","TOGO","TONGA","TRINIDAD AND TOBAGO","TUNISIA","TURKEY","TURKMENISTAN"];
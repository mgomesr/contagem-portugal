var data1 = new Date('09/01/2023');
var description1 = document.querySelector('.description-1');

var data2 = new Date('10/01/2023');
var description2 = document.querySelector('.description-2');

var data3 = new Date('10/31/2023');
var description3 = document.querySelector('.description-3');

var data4 = new Date('11/25/2023');
var description4 = document.querySelector('.description-4');

var hoje = new Date();

description1.innerHTML = ((data1 - hoje) / (1000 * 3600 * 24)).toFixed(0);
description2.innerHTML = ((data2 - hoje) / (1000 * 3600 * 24)).toFixed(0);
description3.innerHTML = ((data3 - hoje) / (1000 * 3600 * 24)).toFixed(0);
description4.innerHTML = ((data4 - hoje) / (1000 * 3600 * 24)).toFixed(0);
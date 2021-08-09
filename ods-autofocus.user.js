// ==UserScript==
// @name            ODS Stundennachweis Autofocus Input Field
// @namespace       https://github.com/koelle25
// @version         0.1.0
// @description     Sets the focus to the date input field in the "ODS (Online-Dienste für Studierende) Stundennachweis" (engl.~: "online services for students - hourly timesheet")
// @author          Kevin Köllmann <mail@kevinkoellmann.de>
// @license         MIT
// @match           https://ods.fh-dortmund.de/ods*OID=17042419*
// @downloadURL     https://github.com/koelle25/userscripts/raw/main/ods-autofocus.js
// @homepageURL     https://github.com/koelle25/userscripts
// @supportURL      https://github.com/koelle25/userscripts/issues
// @contributionURL https://github.com/koelle25/userscripts/pulls
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    let table = document.getElementsByTagName('table')[1];

    let tBody = table.childNodes[1];

    let tableRows = [];
    tBody.childNodes.forEach(function(item) {
        if (item.tagName == "TR") tableRows.push(item);
    });

    let secondToLastRow = tableRows[tableRows.length-2];

    let tableDataCells = [];
    secondToLastRow.childNodes.forEach(function(item) {
        if (item.tagName == "TD") tableDataCells.push(item);
    });

    let firstDataCell = tableDataCells[0];
    let secondDataCell = tableDataCells[1];
    let thirdDataCell = tableDataCells[2];
    let lastDataCell = tableDataCells[tableDataCells.length-1];

    let dateInputField;
    firstDataCell.childNodes.forEach(function(item) {
        if (item.tagName == "INPUT") dateInputField = item;
    });

    let beginTimeInputField;
    secondDataCell.childNodes.forEach((item) => {
        if (item.tagName == "INPUT") beginTimeInputField = item;
    });

    let endTimeInputField;
    thirdDataCell.childNodes.forEach((item) => {
        if (item.tagName == "INPUT") endTimeInputField = item;
    });

    let submitButton;
    lastDataCell.childNodes.forEach((item) => {
        if (item.tagName == "INPUT" && item.type == "submit") submitButton = item;
    });

    dateInputField.tabIndex = 1;
    beginTimeInputField.tabIndex = 2;
    endTimeInputField.tabIndex = 3;
    submitButton.tabIndex = 4;

    dateInputField.focus();
})();

// ==UserScript==
// @name            ODS Stundennachweis Autofocus Input Field
// @namespace       https://openuserjs.org/users/koelle25
// @version         0.2.0
// @description     Sets the focus to the date input field in the "ODS (Online-Dienste für Studierende) Stundennachweis" (engl.~: "online services for students - hourly timesheet")
// @author          koelle25
// @copyright       2021, koelle25 (https://openuserjs.org/users/koelle25)
// @license         MIT
// @match           https://ods.fh-dortmund.de/ods?*OID=*
// @downloadURL     https://github.com/koelle25/userscripts/raw/main/ods-autofocus.user.js
// @homepageURL     https://github.com/koelle25/userscripts
// @supportURL      https://github.com/koelle25/userscripts/issues
// @contributionURL https://github.com/koelle25/userscripts/pulls
// @updateURL       https://openuserjs.org/meta/koelle25/ODS_Stundennachweis_Autofocus_Input_Field.meta.js
// @grant           none
// ==/UserScript==

(function() {
    'use strict';

    if (document.title === "Führen eines Stundennachweises") {
        let dateInputField = document.querySelector('table tr td input[type=text][name=Datum]');
        let beginTimeInputField = document.querySelector('table tr td input[type=text][name=Von]');
        let endTimeInputField = document.querySelector('table tr td input[type=text][name=Bis]');
        let submitButton = document.querySelector('table tr td input[type=submit][name^=Speichern]');

        if (dateInputField) {
            dateInputField.tabIndex = 1;
            dateInputField.focus();
        }

        if (beginTimeInputField) {
            beginTimeInputField.tabIndex = 2;
        }

        if (endTimeInputField) {
            endTimeInputField.tabIndex = 3;
        }

        if (submitButton) {
            submitButton.tabIndex = 4;
        }
    }
})();

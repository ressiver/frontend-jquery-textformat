'use strict';

var textField = $('.message-field');
var textFormatted = $('.message-formatted');

function showTextFormatted(value) {
    return value.trim().toLowerCase().replace(/\s+/g, ' ');
}

textField.on('input', function () {
    var value = textField.val();
    var doneFormatted = showTextFormatted(value);
    textFormatted.text(doneFormatted);
});

console.log($)
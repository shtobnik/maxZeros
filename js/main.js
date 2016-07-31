/**
 * Created by denisnizegorodcev on 31.07.16.
 */

$(document).ready(function() {

    var arrayOfNumbers = [],
        arrayOfZeroCounts = [],
        maxNumbers = [],
        maxElemIndex = 0,
        startEdge = 0,
        endEdge = 5,
        outputText = '';

    $('#number_form').on('submit', function() {

        startEdge = $('#start_edge')[0].value;
        endEdge = $('#end_edge')[0].value;

        arrayOfNumbers = [];
        arrayOfZeroCounts = [];
        maxNumbers = [];

        if ( startEdge.length && endEdge.length ) {
            calculate(startEdge, endEdge);
        } else {
            alert ('enter numbers please');
        }

        return false;
    });

    function calculate(startEdge, endEdge) {

        for (var i = startEdge; i < endEdge; i++) {
            arrayOfNumbers.push(i);
        }

        $.each(arrayOfNumbers, function(index, elem) {
            var number = parseInt(elem,10).toString(2),
                indices = [],
                count = 0;

            for (var i = 0; i < number.length; i++) {
                if (number[i] === "0") {
                    indices.push(i);
                    count ++;
                }
            }

            arrayOfZeroCounts.push(count);

            $.each(arrayOfZeroCounts, function(index, elem) {
                if (index == Math.max.apply(null, arrayOfZeroCounts)) {
                    maxElemIndex = index;
                }
            });

            console.log('index', index);
            console.log('decimal number', elem);
            console.log('binary number', number);
            console.log('indices', indices);
            console.log('count', count);
            console.log('--------------------------');

        });

        $.each(arrayOfNumbers, function(index, elem) {
            var number = parseInt(elem,10).toString(2),
                indices = [],
                count = 0;

            for (var i = 0; i < number.length; i++) {
                if (number[i] === "0") {
                    indices.push(i);
                    count ++;
                }
            }

            if (count == Math.max.apply(null, arrayOfZeroCounts) ) {
                maxNumbers.push(elem);
            }

        });

        if ( maxNumbers.length > 1 ) {
            outputText = 'numbers'
        } else {
            outputText = 'number'
        }

        $('#zoros_count').text('max count of zeros - ' + Math.max.apply(null, arrayOfZeroCounts));
        $('#result').text(outputText + ' with max zerros - ' + maxNumbers);
    }

});

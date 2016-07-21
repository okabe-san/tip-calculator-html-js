$(function() {
  console.log("Tip Calculator is Ready!")

});

var dinnerAmount = document.getElementById('amount');

///code to modify and add...

$(function() {
  $('form').on('submit', function(element) {
    element.preventDefault();
    var amount = $('#amount').val();
    var tip = $('select').val();
    var tipAmount = tip/100 * amount;
    $('.output').append('You Should tip $' + tipAmount.toFixed(2));
  })
})

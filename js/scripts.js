function VacationLog(id, date, debauchery, notes) {
  this.stateId = id;
  this.stateDate = date;
  this.stateDebauchery = debauchery;
  this.stateNotes = notes;
}

var clickedState = "";

$(function(){
  $('area').click(function(){
    clickedState = $(this).attr('id').toUpperCase();
    $('#stateOutput').text(clickedState);
    $('.form').show();

  });
  $('#userInput').submit(function(event) {
    // debugger;
    event.preventDefault();
    var id = $('#id').val()
    var date = $('#date').val();
    var debauchery = $('#debauchery').val();
    var notes = $('#notes').val();
    var stuff = new VacationLog(id, date, debauchery,notes);
    $("#finalState").text(clickedState);
    $("#dateOutput").text(stuff.stateDate);
    $("#debaucheryOutput").text(stuff.stateDebauchery);
    $("#notesOutput").text(stuff.stateNotes);
    $('#state-info').show();
  });

});

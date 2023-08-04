// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  
  //Past,Present,Future

  $(".row").each(function(){
    var currentHour = $(this).attr("value")  
    if(currentHour<dayjs().hour()){
      $(this).addClass("past")
    }
    if(currentHour == dayjs().hour()){
      $(this).addClass("present")
    }
    if(currentHour > dayjs().hour()){
      $(this).addClass("future")
    }

  })
  


  //SaveButton
  $('.saveBtn').on('click',function (){
    var textInput = $(this).siblings('.description').val()
    console.log(textInput)
    var currentHour = $(this).parent().attr('id')
    console.log(currentHour)
    localStorage.setItem(currentHour,textInput)
  })
  //Save to local storage
  function setTextValues (){
    for(var x = 9; x <= 17; x ++){
      var key = "hour-" + x
      console.log(key)
      var storageValue = localStorage.getItem(key)
      console.log(storageValue)
      var boxSelector = '#'+ key + " .description"
      $(boxSelector).val(storageValue)
    }
  }
  setTextValues()
  //
  // TODO: Add code to display the current date in the header of the page.
  function currentDateCalc(){
    var currentDay = dayjs().format('MMMM D, YYYY, h:mm A')
    console.log(currentDay)
    $('#currentDay').text(currentDay)
  }
  currentDateCalc()
});

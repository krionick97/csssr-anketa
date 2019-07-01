import $ from 'jquery'

$(document).ready(function () {
  //Functions
  // $('<h2 />')
  // .text('Hello world from JQuery')
  // .css({
  //   textAlign: 'center',
  //   color: '#2020c1',
  //   fontFamily: 'sans-serif'
  // })
  // .appendTo($('header'))
  //--------------------------------------------------

  // Click checkobox
  let checkboxIndex = new Array();
  let markIndex = new Array();
  let optionIndex = new Array();

  for(let j=1; j<20; j++) {
    checkboxIndex[j] = 'box' + j;
    markIndex[j] = 'box-mark-' + j;
    optionIndex[j] = 'option' + j;

    document.getElementById(checkboxIndex[j]).onclick = function() {
      if(document.getElementById(optionIndex[j]).checked !== true) {
        document.getElementById(markIndex[j]).style.opacity = 1;
        document.getElementById(optionIndex[j]).checked = true;
      } else {
        document.getElementById(markIndex[j]).style.opacity = 0;
        document.getElementById(optionIndex[j]).checked = false;
      }

    } // end click function

        
  } // end for
  
});
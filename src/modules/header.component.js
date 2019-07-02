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

  // Variables
  let checkboxIndex = new Array();
  let markIndex = new Array();
  let optionIndex = new Array();
  let JSlevelIndex = new Array();
  let arrlIndex = new Array();
  let itemLevelIndex = new Array();
  // -------------------------------------------------------

  // Click checkobox about yourself
  for(let j=1; j<20; j++) {
    checkboxIndex[j] = 'box' + j;
    markIndex[j] = 'box-mark-' + j;
    optionIndex[j] = 'option' + j;

    document.getElementById(checkboxIndex[j]).onclick = function() {
      if(document.getElementById(optionIndex[j]).checked != true) {
        document.getElementById(markIndex[j]).style.opacity = 1;
        document.getElementById(optionIndex[j]).checked = true;
      } else {
        document.getElementById(markIndex[j]).style.opacity = 0;
        document.getElementById(optionIndex[j]).checked = false;
      }
    } // end click function
  } // end for
  // -------------------------------------------------------------------------------------

  // JS Level options
  for(let i=1; i<5; i++) {
    JSlevelIndex[i] = 'level' + i;
    arrlIndex[i] = 'arr-option-' + i;
    itemLevelIndex[i] = 'item-level-' + i;

    // if(document.getElementById(JSlevelIndex[i]).checked == false) {
    //   document.getElementById(arrlIndex[i]).style.display = 'none';
    // } else {
    //   document.getElementById(arrlIndex[i]).style.display = 'block';
    // }
    if(document.getElementById(JSlevelIndex[i]).checked == false) {
      document.getElementById(arrlIndex[i]).style.visibility = 'hidden';
    } else {
      document.getElementById(arrlIndex[i]).style.visibility = 'visible';
    }

    // document.getElementById(itemLevelIndex[i]).onclick = function() {
    //   if(document.getElementById(JSlevelIndex[i]).checked == false) {
    //     document.getElementById(JSlevelIndex[i]).checked = true;
    //   } // end if
    // } // end click funtion
  } // end for
});
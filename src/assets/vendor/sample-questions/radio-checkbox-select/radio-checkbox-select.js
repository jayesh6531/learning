/* radio-select*/
var idSelector = function() { return this.id; };
var formRadioSelected = $(":radio:checked").map(idSelector).get() ;
var formRadioDenied = $(":radio:not(:checked)").map(idSelector).get();

/* on change radio */
$("input[type=radio]").on("change",function() {
    var attr = $(this).attr('id');
    $('input[name="' + this.name + '"]').parent().removeClass('checked-active text-black')
    .find(':checked').parent().addClass('checked-active text-black');
})  
/* on change Checkbox */    


if($('input[type="radio"]').is(':checked'))
{
    $('input[type="radio"]').parent().removeClass('checked-active text-black')
    .find(':checked').parent().addClass('checked-active text-black');    
} 
/* radio-select*/


/* checkbox-select*/

var idSelector1 = function() { return this.id; };
var formSelected = $(":checkbox:checked").map(idSelector1).get() ;
var formDenied = $(":checkbox:not(:checked)").map(idSelector1).get()

/* Globally Check item is checked or not */

/* on change Checkbox */
$("input.form-check-input").on("change",function() {
    var attr = $(this).attr('id');
    if ($(this).is(":checked")) {
        $('#' + attr).attr('checked', false);
        $('#' + attr).parent('.form-check-input-wrap').addClass('checked-active text-black');    
    }
    else {
        $('#' + attr).attr('checked', false);
        $('#' + attr).parent('.form-check-input-wrap').removeClass('checked-active text-black');    
    }
})  
/* on change Checkbox */    


if($('input[type="checkbox"]').is(':checked'))
{
  
    $('input[type="checkbox"]').parent().removeClass('checked-active text-black')
    .find(':checked').parent().addClass('checked-active text-black');    
} 
/* checkbox-select*/
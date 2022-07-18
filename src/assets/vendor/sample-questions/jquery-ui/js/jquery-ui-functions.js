 
/*drag in drop */
$(function () {
$("#drag-sortable, #drop-sortable").sortable({
    connectWith: ".connectedSortable"
}).disableSelection();
});
/*drag in drop */

/*Fill blanks */
$(document).ready(function () {
    initFillBlankSort();
});
function initFillBlankSort() {
    $("#QuestionAOption > div").draggable({
        revert: "invalid",
        cursor: "move",
        helper: "clone",
    }).disableSelection();
    $(".droppable-element").draggable({
        revert: "invalid",
        cursor: "move",
        helper: "clone"
    }).disableSelection();

    $(".droppable-element").droppable({
        accept: "#QuestionAOption > div",
        activeClass: "ui-state-highlight",
        helper: "original",
        drop: function (event, ui) {
            var value = $.trim($(this).find('label').text());
            var input = '<input type="hidden" name="answer" value="' + $.trim($('label', ui.draggable).text()) + '" />';
            $(this).html(ui.draggable.html() + input);
            ui.draggable.hide();
            showAllOptions(value);
        }
    }).disableSelection();
    $("#div_options").droppable({
        accept: ".droppable-element",
        activeClass: "border",
        helper: "original",
        drop: function (event, ui) {
            var value = $('label', ui.draggable).text();
            $('label', ui.draggable).text('');
            $('input', ui.draggable).val('');
            showAllOptions(value);
        }
    }).disableSelection();
}
function showAllOptions(show_value) {
    var alloptions = $('#QuestionAOption div');
    alloptions.each(function () {
        var selector = $(this);
        var label_value = $.trim(selector.find('label').text());
        if (label_value == show_value)
            selector.show();
    });
}
/*Fill blanks */
    var resize = new Array('.resizable');
    resize = resize.join(',');
    var resetFont = $(resize).css('font-size');

    //resets the font size when "reset" is clicked
    function resetfont(){    
        $(resize).css('font-size', resetFont);
    }

    //increases font size when "+" is clicked
    function increasefont() {
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize);
        var newFontSize = (originalFontNumber) + (1);
        $(resize).css('font-size', newFontSize);
        return false;
    }

    //decrease font size when "-" is clicked
    function decreasefont(){
        var originalFontSize = $(resize).css('font-size');
        var originalFontNumber = parseFloat(originalFontSize);
        var newFontSize = (originalFontNumber) - (1);
        $(resize).css('font-size', newFontSize);
        return false;
    }
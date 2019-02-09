(function(ext) {
    ext.alert = function(message) {
        alert(message);
    };
    var descriptor = {
        blocks: [
            [' ', 'alert %s', 'alert', '']
        ]
    };

    ScratchExtensions.register('Browser Stuff', descriptor, ext);
})({});

$(document).ready(function() {
    //tree widget
    (function(){

        var data = tree;
        $('#action-plan-tree').tree({
            data: data,
            dragAndDrop: true,
            autoEscape: false,
            autoOpen: 1
        });
    })();
});
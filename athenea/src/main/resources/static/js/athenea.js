$(document).ready(function() {
    //tree widget
    (function(){

        var data = tree;
        $('#action-plan-tree').tree({
            data: data,
            dragAndDrop: true,
            autoEscape: false,
            autoOpen: 1,
            onCreateLi: function(node, $li){
                <!-- Call to action buttons -->
                $li.find('.jqtree-element').append(
                    '<div class="action-plan-element-controls d-none m-0">'+
                            '<a class="btn btn-sm rounded-0" href="#" data-toggle="tooltip" data-placement="top" title="View">'+
                                '<i class="fa fa-eye"></i>'+
                            '</a>'+
                            '<a class="btn  btn-sm rounded-0" href="#" data-toggle="tooltip" data-placement="top" title="Edit">'+
                                '<i class="fa fa-edit"></i>'+
                            '</a>'+
                            '<a class="btn btn-sm rounded-0" href="#" data-toggle="tooltip" data-placement="top" title="Delete">'+
                                '<i class="fa fa-trash"></i>'+
                            '</a>'+
                    '</div>'
                );
            }
        });
    })();

   // active menu item
    $('.menu-item').click(function (e) {

        if(!$(this).hasClass('active')){
            $('.menu-item').not(this).filter('.active').removeClass('active');
            $('.menu-item').not(this).addClass('collapsed');
            $(this).addClass('active');
        }

        if($(this).find('ul.sub-menu').length>0){
            $('[aria-expanded="true"]').not(this).attr('aria-expanded','false');
            $('.menu-item').not(this).children('.sub-menu.collapse.show').removeClass( "show", 400);
        }else{
            $('.menu-item').not(this).children('.sub-menu.collapse.show').removeClass( "show", 100);
        }

    });

    // active sub-menu item
    $('.sub-menu li').click(function (e) {
        $('.sub-menu li').not(this).filter('.active').removeClass('active');
        $(this).addClass('active');
    });

   // login form validation
    $('#login-submit').click(function(e){
        // prevent form submission
        e.preventDefault();

        // Code to check login
        var hasError = false;
        var emailRegEx = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        var emailAddressVal = $('#email-address').val();
        var passwordVal = $('#password').val();
        if(emailAddressVal==''){
            hasError=true;
        }
        if(!emailRegEx.test(emailAddressVal)){
            hasError=true;
        }
        if(passwordVal=='' || passwordVal.length <4){
            hasError=true;
        }
        // If fail
        if(hasError==true){
            $('.shakeable').removeClass('animated shake');
            $('#email-address').addClass('is-invalid');
            $('#password').addClass('is-invalid');
            setTimeout(function()
            {
                $('.shakeable').addClass('animated shake')
            },1);
            $('#validation-message').removeClass('d-none');
            $('.form-control').on("focus",function(){
                $('#validation-message').addClass('d-none');
                $('#email-address').removeClass('is-invalid');
                $('#password').removeClass('is-invalid');
            });
            $('#email-address').val("");
            $('#password').val("");
        }else{
            $("#login-submit").unbind('click').click();
        }
    });

    $('#action-plan-tree li').click(function(e){
         //e.stopImmediatePropagation();
        $(this).addClass('active');
        $('#action-plan-tree li').not(this).removeClass('active');
    });

    /*$('.jqtree-element').click(function(e){

        if(!$(this).hasClass('active')){
            $(this).addClass('active');
        }
    });*/

   $('.jqtree-element').on('click',function(e){
       if(!$(this).hasClass('active')){
           $(this).addClass('active');
       }
       $(this).addClass('d-flex');
       $('.jqtree-element').not(this).removeClass('active');
       $(this).find('.action-plan-element-controls').removeClass('d-none');
       $(this).find('.action-plan-element-controls').addClass('d-inline ml-auto');
       $('.jqtree-element').not(this).find('.action-plan-element-controls').removeClass('d-inline ml-auto');
       $('.jqtree-element').not(this).removeClass('d-flex');
   });


});
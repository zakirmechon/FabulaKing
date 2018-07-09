$(document).ready(function(){
    PageOpen("home");

    
    $(".page").click(function(){

        $( ".page" ).each(function() {
            $( this ).removeClass( "active" );
        });
        $( this ).addClass( "active" );

        
        PageOpen($(this).attr("role"));
    });


    function PageOpen(pageName){
        pageName = "/tabs/" + pageName + ".html" 
        $.ajax({url: pageName,async:false,  success: function(result){
            
            
            $("#Container").html(result);
        }});
    };

});
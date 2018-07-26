$(document).ready(function(){


    
    var Footer="";
    var NavBar="";


    NavBar += " <div class='navBar color1 row justify-content-between'>";
    NavBar += "        <div role='home' class='nav-logo col-4-sm align-self-center'>";
    NavBar += "            <h1>Fabula King</h1>";
    NavBar += "            <h2>let's make something with creative..</h2>";
    NavBar += "        </div>";
    NavBar += "        <div class='nav-menu col-4-sm align-self-center'>";
    NavBar += "            <div class='page-list row align-items-center'>";
    NavBar += "                <div role='home' id='0' class='page col align-self-center'>  ";
    NavBar += "                    <i class='fas fa-home'></i>";
    NavBar += "                    <p class='menuItem'>home</p>";
    NavBar += "                </div>";
    NavBar += "                <div role='about' id='1' class='page col align-self-center'>  ";
    NavBar += "                    <i class='fas fa-users'></i>";
    NavBar += "                    <p  class='menuItem'>who am i</p>";
    NavBar += "                </div>";
    NavBar += "                <div role='service' id='2' class='page col align-self-center'>  ";
    NavBar += "                    <i class='fas fa-briefcase'></i>";
    NavBar += "                    <p  class='menuItem'>what i do</p>";
    NavBar += "                </div>";
    NavBar += "                <div role='contact' id='3' class='active page col align-self-center'>  ";
    NavBar += "                        <i class='fas fa-at'></i>";
    NavBar += "                        <p  class='menuItem'>contact</p>";
    NavBar += "                    </div>";
    NavBar += "            </div>";
    NavBar += "        </div>";
    NavBar += "    </div>";
    


    Footer += "    <div class='footer color1 row'>";
    Footer += "        <div class='lastLine col'>";
    Footer += "            <span>Copyright 2018 Fabula King.</span>";
    Footer += "            <span> All Rights Reserved</span>";
    Footer += "        </div>";
    Footer += "    </div>";

    


    $("#ContentMain").prepend(NavBar);
    $("#ContentMain").append(Footer);






    
    $(".nav-logo").on("click", function(){    
        PageOpen($(this).attr("role"));
    });

    $(".innerLink").on("click", function(){    
        PageOpen($(this).attr("role"));
    });


    $(".page").on("click", function(){    
        PageOpen($(this).attr("role"));
    });


    function PageOpen(pageName){
        if(pageName == "home"){
            pageName = "/";
        }else{
            pageName = "/tabs/" + pageName + ".html" ;
        }

        window.location = pageName;
        console.log(pageName)  


    };


});
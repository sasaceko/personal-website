$(document).ready(function(){

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');

    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');
    });

    $(function() {
        $(".navbar a").click(function() {
           $(".navbar a").removeClass("active");
           $(this).addClass("active");
        });
    });

    const scrollReveal = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 1000,
        reset: true
    });
    

    /* Scroll home */
    scrollReveal.reveal('.home .content p', { delay: 200 });
    scrollReveal.reveal('.home .content .btn', { delay: 200 });

    scrollReveal.reveal('.home .image', { delay: 400 });
    scrollReveal.reveal('.home .linkedin', { interval: 600 });
    scrollReveal.reveal('.home .github', { interval: 800 });

    /* Scroll about */
    scrollReveal.reveal('.about .content h3', { delay: 200 });
    scrollReveal.reveal('.about .content .tag', { delay: 200 });
    scrollReveal.reveal('.about .content p', { delay: 200 });
    scrollReveal.reveal('.about .content .box-container', { delay: 200 });
    scrollReveal.reveal('.about .content .resumebtn', { delay: 200 });

    /* Scroll skills*/
    scrollReveal.reveal('.skills .container', { interval: 200 });
    scrollReveal.reveal('.skills .container .bar', { delay: 400 });   
    
    /* Scroll education */
    scrollReveal.reveal('.education .box-container', { interval: 200 });

    /* Scroll experience */
    scrollReveal.reveal('.experience .timeline', { delay: 400 });
    scrollReveal.reveal('.experience .timeline .container', { interval: 400 });

    const skillsContainer = $("#skillsContainer");
    $.ajax({
        url: "/js/skills.json",
        dataType: "json",
        success: function(data){
            let result = "";
            if(data.length > 0) {
                let name, icon;
                for(let i = 0; i < data.length; i++) {
                    icon = data[i].icon;
                    name = data[i].name;
                    result += `
                        <div class="bar">
                            <div class="info">
                                <img src=${icon} alt="skill" />
                                <span>${name}</span>
                            </div>
                        </div>
                    `
                }
            }
            skillsContainer.html(result);
        }
    });
});
//contact page 
function sendMail() {
    var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
    const serviceID = "service_r658nt9";
    const templateID = "template_3bg3n9h";
    emailjs.send(serviceID, templateID, params).then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log("success", res.status);
      alert("Your message has been sent successfully!");
    });
  }

// Sliders

function slider_1(){
    const slider = document.querySelector('.images');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let sectionIndex = 0;

    document.querySelectorAll('.active-image-indicators .indicator').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.active-image-indicators .selected').document.Classlist.remove('selected');
            indicator.Classlist.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
        });

    });


    prev.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
    });


    next.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
        slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
    });
}

slider_1();


function slider_skills(){
    const slider = document.querySelector('.skills');
    const prev = document.querySelector('.prev');
    const next = document.querySelector('.next');

    let sectionIndex = 0;

    document.querySelectorAll('.active-image-indicators-skills .indicator-skills').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.active-image-indicators-skills .selected').document.Classlist.toggle('selected');
            indicator.Classlist.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
        });

    });


    prev.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });


    next.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });

}

slider_skills();

function slider_projects(){
    const slider = document.querySelector('.projects');
    const prev = document.querySelector('.prev-projects');
    const next = document.querySelector('.next-projects');

    let sectionIndex = 0;

    document.querySelectorAll('.active-image-indicators-projects .indicator-projects').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.active-image-indicators-projects .selected').document.Classlist.remove('selected');
            indicator.Classlist.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
        });

    });


    prev.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 1;
        slider.style.transform = 'translate(' + (sectionIndex) * -29 + '%)';
    });


    next.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 1) ? sectionIndex + 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -29 + '%)';
    });
}

slider_projects();

function slider_certifications(){
    const slider = document.querySelector('.certifications');
    const prev = document.querySelector('.prev-certifications');
    const next = document.querySelector('.next-certifications');

    let sectionIndex = 0;

    document.querySelectorAll('.active-image-indicators-certifications .indicator-certifications').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.active-image-indicators-certifications .selected').document.Classlist.remove('selected');
            indicator.Classlist.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
        });

    });


    prev.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 2;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });


    next.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });
}

slider_certifications();

function slider_experiences(){
    const slider = document.querySelector('.experiences');
    const prev = document.querySelector('.prev-experiences');
    const next = document.querySelector('.next-experiences');

    let sectionIndex = 0;

    document.querySelectorAll('.active-image-indicators-experiences .indicator-experiences').forEach(function(indicator, ind){
        indicator.addEventListener('click', function(){
            sectionIndex = ind;
            document.querySelector('.active-image-indicators-experiences .selected').document.Classlist.remove('selected');
            indicator.Classlist.add('selected');
            slider.style.transform = 'translate(' + (sectionIndex) * -26 + '%)';
        });

    });


    prev.addEventListener('click', function(){
        sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 3;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });


    next.addEventListener('click', function(){
        sectionIndex = (sectionIndex < 3) ? sectionIndex + 1 : 0;
        slider.style.transform = 'translate(' + (sectionIndex) * -25 + '%)';
    });
}

slider_experiences();
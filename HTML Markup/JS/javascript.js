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
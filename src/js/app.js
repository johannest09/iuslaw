$(document).ready(function(){

    setTimeout(function(){
        var bigSlideAPI = ($('.menu-link').bigSlide({
            afterOpen: function() {
                $('.menu-link').addClass('is-active');
            },
            afterClose: function() {
                $('.menu-link').removeClass('is-active');
            }
        })).bigSlideAPI;

        $('#menu .nav-item a').click(function() {
            bigSlideAPI.view.toggleClose();
        });

    }, 500);
    
});
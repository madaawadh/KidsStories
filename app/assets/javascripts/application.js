// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require jquery
//= require activestorage
//= require turbolinks
//= require_tree .
function login() {
  location.href = `/users/sign_in`;
}
function level1(){
    // console.log(this.id);
    location.href = `/stories/levels/${1}`;   
}
function level2(){
    // console.log(this.id);
    location.href = `/stories/levels/${2}`;   
}
function level3(){
    // console.log(this.id);
    location.href = `/stories/levels/${3}`;   
}
function image(){
    // console.log(this.id);
const image=document.querySelector(".panel");
    location.href = `/stories/${image.id}`;   
}
function refresh(){
    location.reload();
}
function profile(){
    location.href = `/users/profile`;
}
function logOut(){
    
}
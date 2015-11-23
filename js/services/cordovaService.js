
(function(angular){
    'use strict';

    var myApp = angular.module('myApp');

   myApp.factory('deviceReady', function(){
       return function(done) {
           if (typeof window.cordova === 'object') {
               document.addEventListener('deviceready', function () {
                   done();
               }, false);
           } else {
               done();
           }
       };
   });
   
}(window.angular));
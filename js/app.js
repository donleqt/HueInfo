FastClick.attach(document.body);

var globalDevice={
    model:'',
    platform_cordova:'',
    platform_device:'',
    device_uuid:'',
    device_version:''
};

var module = angular.module('myApp', ['ngError','ngTouch','infinite-scroll','uiGmapgoogle-maps','ngDialog','ngCookies','ngRoute','panzoom','angular-carousel']);
module.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider) {
    //
    $routeProvider
        .when('/',
        {
            templateUrl: 'partials/login.html',
            controller: 'LoginController'
        })
        .when('/notification/:nodeId',{
            templateUrl:'partials/notification.html',
            controller:'NotificationController'
        })
        .when('/monitoryDetail/:nodeId',{
            templateUrl:'partials/monitoryDetail.html',
            controller:'MonitoryController'
        })
        .when('/chitietcay/:Id',{
            templateUrl:'partials/cay/chitiet.html',
            controller:'ChiTietController'
        })

        .when('/pighome',{
            templateUrl:'partials/pig/home.html',
            controller:'PigHomeController'
        })
        .when('/pigsetting',{
            templateUrl:'partials/pig/setting.html',
            controller:'PigSettingController'
        })
        .when('/pigreport',{
            templateUrl:'partials/pig/report.html',
            controller:'PigReportController'
        })
        .when('/pigabout',{
            templateUrl:'partials/pig/about.html',
            controller:'PigAboutController'
        })
        .when('/managementsetting',{
            templateUrl:'partials/managementsetting.html',
            controller:'ManagementSettingController'
        })
        .when('/choosestage/:nodeId/:elementId',{
            templateUrl:'partials/stagesetting/choosestage.html',
            controller:'ChooseStageController'
        })
        .when('/timelineManagement/:nodeId',{
            templateUrl:'partials/timelinemanagement.html',
            controller:'TimelineManagementController'
        })
        .when('/chooseelement',{
            templateUrl:'partials/stagesetting/chooseelement.html',
            controller:'ChooseElementController'
        })
        .when('/addNewTree',{
            templateUrl:'partials/stagesetting/addnewtree.html',
            controller:'AddNewTreeCtrl'
        })
        .when('/editTree/:element_id',{
            templateUrl:'partials/stagesetting/edittree.html',
            controller:'EditTreeCtrl'
        });
    $routeProvider.otherwise({redirectTo: '/'});

    $httpProvider.interceptors.push(function($q, $location,$window) {
        return {
            'request': function (config) {
                config.headers = config.headers || {};
                if ($window.localStorage.token) {
                    config.headers.Authorization = 'Bearer ' + $window.localStorage.token;
                }
                return config;
            },
            'responseError': function(response) {
                if(response.status === 401 || response.status === 403 || response.status ===500) {
                    response.send({type:false});
                }
                return $q.reject(response);
            }
        };
    });



}]);


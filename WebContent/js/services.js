angular.module('noteApp.services',[]).factory('Note',function($resource){
    return $resource('http://localhost:8080/rest/notes/:id',{id:'@_id'},{
        update: {
            method: 'PUT'
        }
    });
}).service('popupService',function($window){
    this.showPopup=function(message){
        return $window.confirm(message);
    }
});
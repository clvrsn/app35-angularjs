angular.module('noteApp',['ui.router','ngResource','noteApp.controllers','noteApp.services']);

angular.module('noteApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('notes',{
        url:'/notes',
        templateUrl:'/app35/partials/notes.html',
        controller:'NoteListController'
    }).state('viewNote',{
       url:'/notes/:id/view',
       templateUrl:'/app35/partials/note-view.html',
       controller:'NoteViewController'
    }).state('newNote',{
        url:'/notes/new',
        templateUrl:'/app35/partials/note-add.html',
        controller:'NoteCreateController'
    }).state('editNote',{
        url:'/notes/:id/edit',
        templateUrl:'/app35/partials/note-edit.html',
        controller:'NoteEditController'
    });
}).run(function($state){
   $state.go('notes');
});
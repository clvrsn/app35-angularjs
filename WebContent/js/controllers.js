angular.module('noteApp.controllers',[]).controller('NoteListController',function($scope,$state,popupService,$window,Note){

    $scope.notes=Note.query();

    $scope.deleteNote=function(note){
        if(popupService.showPopup('Tem certeza que quer deletar?')){
            note.$delete(function(){
                $window.location.href='';
            });
        }
    }

}).controller('NoteViewController',function($scope,$stateParams,Note){
    $scope.note=Note.get({id:$stateParams.id});
}).controller('NoteCreateController',function($scope,$state,$stateParams,Note){

    $scope.note=new Note();

    $scope.addNote=function(){
        $scope.note.$save(function(){
            $state.go('notes');
        });
    }

}).controller('NoteEditController',function($scope,$state,$stateParams,Note){

    $scope.updateNote=function(){
        $scope.note.$update(function(){
            $state.go('notes');
        });
    };

    $scope.loadNote=function(){
        $scope.note=Note.get({id:$stateParams.id});
    };

    $scope.loadNote();
});
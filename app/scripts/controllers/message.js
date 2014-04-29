'use strict';

angular.module('chattyApp')
  .controller('MessageCtrl', function ($scope, MessageService) {
    $scope.messages = MessageService.getMessages().then(function(data) {
      $scope.messages = data.data;
    });

    $scope.addMessage = function () {
      console.log('here')
      MessageService.addMessage({ message: $scope.newMessage }).then(function (data) {
        $scope.messages = data.data
        $scope.newMessage = ''
      })
    }
  });

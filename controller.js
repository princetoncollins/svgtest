(function() {
'use strict';

var app = angular.module('test');

  app.controller('Controller', Controller);

  Controller.$inject = ['$scope', '$http'];

  function Controller($scope, $http) {

  	// $scope.checkedLetter = false;
  	// $scope.checkedLetterY = false;

  	$scope.toggle = function() {
	  	if($scope.checkedLetterD === false && $scope.checkedLetterA === false && $scope.checkedLetterR === false && $scope.checkedLetterC === false && $scope.checkedLetterY === false) {
	  		$scope.checkedLetterD = true;
	  		$scope.checkedLetterA = true;
	  		$scope.checkedLetterR = true;
	  		$scope.checkedLetterC = true;
	  		$scope.checkedLetterY = true;
	  	} else if($scope.checkedLetterD === true && $scope.checkedLetterA === true && $scope.checkedLetterR === true && $scope.checkedLetterC === true && $scope.checkedLetterY === true) {
	  		$scope.checkedLetterD = false;
	  		$scope.checkedLetterA = false;
	  		$scope.checkedLetterR = false;
	  		$scope.checkedLetterC = false;
	  		$scope.checkedLetterY = false;
	  	}
    }








  } //End Controller.

})();


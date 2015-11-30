var stateMap = angular.module('interactiveMap', []);

stateMap.controller('interactiveMapCntrl', interactiveMapCntrl);

stateMap.directive('clickState', function(){
	return{
		link: function($scope, element){
			element.bind('click', function(){
				var newColor = getNewColor($scope.state);
				var stateElement = element[0].querySelector('path');
				stateElement.setAttribute('class', 'state ' + newColor);
			});
		}
	}
});

function interactiveMapCntrl($scope){
	$scope.states = states;
}

function getNewColor(){
	if(state.statecolor == 'red'){
		return 'blue';
	}else if (state.statecolor == 'blue'){
		return 'open';
	}else if (state.statecolor == 'open'){
		return 'red';
	}else{
		return console.log('error')
	}
}
angular
    .module('app', ['color.selectbox'])
    .controller('AppCtrl', function($scope) {

        var vm = this;

        vm.color = '';
        vm.accounts = [
            {id:1, color:'red'},
            {id:2, color:'blue'}
        ];

        vm.onSelectColor = function(color, account) {
         //   console.log(color, account);
            vm.color = color;
            $scope.$apply();
        }

    });

angular.module('myApp')
    .component("myDatauser", {
        bindings: {
            user: '='
        },
        templateUrl: 'dataOfUser.html',
        controller: function () {
            this.$onInit = function() {
                console.log('$onInit');
            };
            this.$postLink = function() {
                console.log('$postLink');
            };
            this.test = function () {
                console.log(this.user);
            }
            //this.paramGender = $user.gender == "male" ? true : false;
            //this.paramGender = false;
            
        }
    });
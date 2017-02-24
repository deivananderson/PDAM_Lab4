angular.module('starter.services', [])

    .service('UserService', function($firebaseAuth,$q) {
        return{
            login: function(username,password){
              var defer = $q.defer();
              console.log("usuario registrado:",username);
              var auth = $firebaseAuth();
              auth.$signInWithEmailAndPassword(username, password).then(function () {
                      defer.resolve();
              });
              return defer.promise;
            },


          register: function(username,password){
              var defer = $q.defer();
              var auth = $firebaseAuth();
              auth.$createUserWithEmailAndPassword(username, password).then(function () {
                    defer.resolve();
              });
              return defer.promise;
          }
        }


    })

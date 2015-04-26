/* global spyOn, describe, beforeEach, it, inject, expect */
'use strict';

describe('User', function (){

  var User, $rootScope;

  beforeEach(module('poseidon'));

  beforeEach(inject(function (_User_, _$rootScope_){
    User = _User_;
    $rootScope = _$rootScope_;
  }));

  describe('constructor', function (){
    it('is a User', function (){
      expect(typeof User).toBe('function');
    });
  });

  describe('.register', function (){
    it('should register a user', function (){
      spyOn($rootScope.afAuth, '$createUser');
      var obj = {email:'bob@aol.com', password:'123'};
      User.register(obj);
      expect($rootScope.afAuth.$createUser).toHaveBeenCalledWith(obj);
    });
  });

  describe('.login', function (){
    it('should login a user', function (){
      spyOn($rootScope.afAuth, '$authWithPassword');
      var obj = {email:'bob@aol.com', password:'123'};
      User.login(obj);
      expect($rootScope.afAuth.$authWithPassword).toHaveBeenCalledWith(obj);
    });
  });
  
  describe('.logout', function (){
    it('should logout a user', function (){
      spyOn($rootScope.afAuth, '$unauth');
      User.logout();
      expect($rootScope.afAuth.$unauth).toHaveBeenCalled();
    });
  });
});

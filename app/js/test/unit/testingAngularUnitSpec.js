describe('Testing AngularJS Test Suite', function() {
    describe('Testing AngularJS Controller', function(){
        it('should initialize the title in the scope', function() {
            module('testingAngularApp');
        
            var scope = {};
            var ctrl;
            
            inject(function($controller) {
                ctrl = $controller('testingAngularCtrl', {$scope:scope}); // angular-mocks function.
            });
            
            
            expect(scope.title).toBeDefined();
            // each expect is made up of the value you want to check and the // value you want to check it against. Test passes if all  //expectations are met. If even just one test in the it() block //fails, then the test fails too. 
            
            expect(scope.title).toBe("Testing AngularJS Applications");
        });
        
    });
    
});
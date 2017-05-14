describe('main', function() {

  beforeEach(module('myApp'));

  describe('plural', function() {
    it('sets the strength to "strong" if the password length is >8 chars', function () {

      let x = 'company';
      let y = plural(x);

      expect(y).toEqual('companies');
    });
  });
});

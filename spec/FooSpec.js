define(['src/Foo'], function(Foo){

	describe("FooSpec", function() {

		it("should be an example for working test", function() {
			var result = Foo.init();
			expect(result).toBe(true);
		});

		it("should be an example for working test", function() {
			var result = Foo.get();
			expect(result).toBe(12345);
		});

		it("should be an example for working test", function() {
			var result = Foo.set();
			expect(result).toBe(true);
		});

	});

});
describe("Main", function() {
  describe("Method A", function() {
    context("Case A", function() {
      it("should happen test-1", function() {
        throw new Error("just on error");
      });
    });

    context.only("Case B", function() {
      it("should happen test-2", function() {});

      it("should happen test-3", function() {});
    });
  });

  describe("Method B", function() {});
});

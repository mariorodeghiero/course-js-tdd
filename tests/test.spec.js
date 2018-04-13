describe("Main-1", function() {
  //roda uma vez, antes do bloco
  before(function() {
    console.log("------------------------------------");
    console.log("Before");
    console.log("------------------------------------");
  });
  //roda uma vez, depois do bloco
  after(function() {
    console.log("------------------------------------");
    console.log("After");
    console.log("------------------------------------");
  });

  //roda todas as vezes, antes de cada bloco
  beforeEach(function() {
    console.log("------------------------------------");
    console.log("BeforeEach");
    console.log("------------------------------------");
  });
  //roda todas as vezes, depois de cada bloco
  afterEach(function() {
    console.log("------------------------------------");
    console.log("AfterEach");
    console.log("------------------------------------");
  });

  it("Test 1", function() {
    console.log("------------------------------------");
    console.log("test it 1");
    console.log("------------------------------------");
  });

  it("Test 2", function() {
    console.log("------------------------------------");
    console.log("test it 2");
    console.log("------------------------------------");
  });
});

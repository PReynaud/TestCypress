describe("My First Test", () => {
  beforeEach(() => {
    cy.server();
    cy.visit("http://localhost:8080");
  });

  it("should visit the app root url", () => {
    expect(cy.get("body")).to.exist;
  });
});

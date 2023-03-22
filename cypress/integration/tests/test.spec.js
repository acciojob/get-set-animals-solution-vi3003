/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

const baseUrl = "http://localhost:3000";

describe("get-set-animals-solution", () => {
  beforeEach(() => {
    cy.visit(baseUrl);
  });

  // test cases u have to change is these all 'it' below
  it("Cat species", () => {
    cy.visit(baseUrl + "/main.html");

    cy.window().then((win) => {
      const Cat = win.Cat;
      cy.stub(win.console, "log").as("consoleLog");
      const species = "Siamese";
      const myCat = new Cat(species);

      myCat.makeSound();
      cy.get("@consoleLog").should(
        "be.calledWith",
        `The ${species} makes a sound`
      );

      myCat.purr();
      cy.get("@consoleLog").should("be.calledWith", `purr`);
    });
  });

  it("Dog species", () => {
    cy.visit(baseUrl + "/main.html");

    cy.window().then((win) => {
      const Dog = win.Dog;
      cy.stub(win.console, "log").as("consoleLog");
      const species = "Golden Retriever";
      const myDog = new Dog(species);

      myDog.makeSound();
      cy.get("@consoleLog").should(
        "be.calledWith",
        `The ${species} makes a sound`
      );

      myDog.bark();
      cy.get("@consoleLog").should("be.calledWith", `woof`);
    });
  });
});

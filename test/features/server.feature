# features/documentation.feature
Feature: Example feature
  As a user of the test server

  Scenario: Getting root
    When I GET /
    Then response body should contain getted world

	Scenario: Posting root
    When I POST to /
    Then response body should contain posted world
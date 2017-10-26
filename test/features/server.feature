# features/documentation.feature
Feature: Example feature
  As a user of the test server

  Scenario: Getting root
    When I GET /
    Then response body should contain getted world

	# Scenario: Posting root
    # When I POST to /
    # Then response body should be valid according to schema file ./test/features/fixtures/notNames.schema

  Scenario: Posting root checking that the json matches exactly
    When I POST to /
    Then response body should contain {"kevin":"hodges","foo":true}

  Scenario: Posting root checking that the json matches exactly
  	Given I use the readFileSync mock
    When I POST to /
    Then response body should contain {"kevin":"hodges","foo":true}
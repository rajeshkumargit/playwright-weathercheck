@weather
Feature: Rain Check

  Background: Go to BOM homepage
    Given Go to the bom homepage

  Scenario Outline: Checking Rain
    When User clicks on city "<City>"
    Then Validate rain is less than "<Percentage>" percentage for "<Days_From_Today>" days from today

    Examples:
      | City      | Days_From_Today | Percentage |
      | Sydney    | 3               | 50         |
      | Melbourne | 3               | 50         |
Feature: Calculate

  Scenario: Add two numbers
    Given the input "2+2"
    When the calculator is run
    Then the output should be "4"

  Scenario: Subtract two numbers
    Given the input "9-4"
    When the calculator is run
    Then the output should be "5"
@connexion4
Feature: Orange - Authentification
  ETQ User je souhaite m'authentifier


  @cnx4
  Scenario Outline: Title of your scenario outline
    Given Open application
    When Set Login "<Login>"
    And Set Pass "<Password>"
    And Click button Login
    Then Show Page home

    Examples: 
       | Login     | Password  |
       |     Admin | admin123  |
       |     admin | admin     |

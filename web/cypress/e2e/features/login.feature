Feature: Login

Scenario Outline: "<cenario"
    Given que eu abro a página de login
    When  e informo "<usuario>" e "<senha>"
    And eu clico no botão de login
    Then eu devo validar as mensagens

Examples:
| cenario               | usuario    | senha |
| Login com sucesso     | tomsmith   | SuperSecretPassword! |
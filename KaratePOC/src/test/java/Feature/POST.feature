Feature:

  Scenario: Verify POST method

    Given url 'http://dummy.restapiexample.com/api/v1/create'
     And request '{"name":"test","salary":"123","age":"23"}'
    When method POST
    Then status 200
#    * def response= response.response
    And match response contains {status:success}

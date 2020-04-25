 function f1()
 {
    var System = Java.type('java.lang.System');
    var serverUrl = System.getProperty("server.url");

    if(!serverUrl)
    {
        serverUrl = 'di';

    }
    var config = {

            Env: '',
            token:''

    };

    if (serverUrl == 'di')
    {
            config.Env = '';
            config.token = '';

    }else if (serverUrl == 'dev')
    {
            config.Env = '';
            config.token = '';

    }

    return config;



 }
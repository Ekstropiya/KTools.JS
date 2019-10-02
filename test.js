if (true) { 
    var Kahoot = require("kahoot.js-updated")
    var sleep = require("sleep")
    for (i = 0; i < 100; i++) 
    {
        var client = new Kahoot;
        client.join(927855, "ree" + i)
        sleep.msleep(1)
    }
}

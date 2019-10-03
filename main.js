var colors = require("colors")
var os = require("os")
var inputer = require("node-console-input")
var figlet = require('figlet');
var version = "1.0.0"
var input = "";
var command = "";
var args = [];
var inputPrefix = ">";
var currentModule = "";
var titleArr = ["nuke", "missile command"]
var randomNumber = Math.floor(Math.random() * titleArr.length + 1)
var sleep = require("sleep")
var cliSpinners = require("cli-spinners")
var Kahoot = require("kahoot.js-updated");
var ree = 0;

for (i = 0; i < cliSpinners.dots.frames.length * 5; i++) 
{
  console.clear()
  console.log(cliSpinners.dots.frames[ree] + " Loading...")
  if (ree < cliSpinners.dots.frames.length - 1) 
  {
    ree++
  } else {
    ree = 0;
  }
  sleep.msleep(100)
}

//var loadArr = ["Loading ktools.js.", "lOading ktools.js..", "loAding ktools.js...", "loaDing ktools.js.", "loadIng ktools.js..", "loadiNg ktools.js...", "loadinG ktools.js...", "loading Ktools.js.", "loading kTools.js..", "loading ktOols.js...", "loading ktoOls.js..", "loading ktooLs.js...", "loading ktoolS.js..", "loading ktools.Js..", "loading ktools.jS..."/*, "loading exploit.jS.", "loading exploit.js.."*/]
var ree = 0;


/*for (i = 0; i < loadArr.length * 5; i++) 
{
  console.clear()
  console.log(loadArr[ree])
  
  if (ree < loadArr.length - 1)
  {
    ree++
  } else {
    ree = 0;
  }
  sleep.msleep(175)
}*/

console.clear()

function error(x) 
{
  console.log("[" + "*".red + "] " + x)
}

function good(x) 
{
  console.log("[" + "*".green + "] " + x)
}


colors.setTheme({
  name: ["white", "bold", "italic", "underline"]
});
var stop = false;

// I changed up the 'title page'! Now it's not just some 80's-MS-DOS-slanted-big-text
if (randomNumber == 1)
{
  console.log("                               ________________                                ".yellow)
  console.log("                          ____/ (  (    )   )  \\___                            ".yellow)
  console.log("                         /( (  (  )   _    ))  )   )\\                          ".yellow)
  console.log("                       ((     (    KTOOLS.JS   (   )  )                        ".yellow)
  console.log("                     ((/  ( _(   )   (   _) ) (  () )  )                       ".yellow)
  console.log("                    ( (  ( (_)   ((    (   )  .((_ ) .  )_                     ".yellow)
  console.log("                   ( (  )    (      (  )    )   ) . ) (   )                    ".yellow)
  console.log("                  (  (   (  (   ) (  _  ( _) ).  ) . ) ) ( )                   ".yellow)
  console.log("                  ( (  (   ) (  )   (  ))     ) _)(   )  )  )                  ".yellow)
  console.log("                 ( (  ( \\ ) (    (_  ( ) ( )  )   ) )  )) ( )                  ".yellow)
  console.log("                  (  (   (  (   (_ ( ) ( _    )  ) (  )  )   )                 ".yellow)
  console.log("                 ( (  ( (  (  )     (_  )  ) )  _)   ) _( ( )                  ".yellow)
  console.log("                  ((  (   )(    (     _    )   _) _(_ (  (_ )                  ".yellow)
  console.log("                   (_((__(_(__(( ( ( |  ) ) ) )_))__))_)___)                   ".yellow)
  console.log("                   ((__)        \\\||lll|l||///          \\_))                   ".yellow)
  console.log("                            (   /(/ (  )  ) )\\   )                             ".yellow)
  console.log("                          (    ( ( ( | | ) ) )\\   )                            ".yellow)
  console.log("                           (   /(| / ( )) ) ) )) )                             ".yellow)
  console.log("                         (     ( ((((_(|)_)))))     )                          ".yellow)
  console.log("                          (      ||\\(|(|)|/||     )                            ".yellow)
  console.log("                        (        |(||(||)||||        )                         ".yellow)
  console.log("                          (     //|/l|||)|\\\ \\     )                           ".yellow)
  console.log("                        (/ / //  /|//||||\\\  \\ \\  \\ _)                         ".yellow)
  console.log("-------------------------------------------------------------------------------")
}
if (randomNumber == 2) 
{
  console.log("---------------------------------------------------------------------------------------------------")
  console.log("                                      " + "KTOOLS.JS MISSILE COMMAND".green + "                                           ")
  console.log("---------------------------------------------------------------------------------------------------")
  console.log("          " + "\\".red + "                                                " + "/".red + "                                       ")
  console.log("       *   " + "\\".red + "                                              " + "/".red + "                                .       ")
  console.log("  x         " + "\\".red + "                                            " + "/".red + "  x                *                     ")
  console.log("             " + "*".yellow + "                                          " + "/".red + "                                          ")
  console.log("        .                                              " + "/".red + "    .                                  x   ")
  console.log("                                                      " + "/".red + "                             .               ")
  console.log("                                                     " + "/".red + "                                             ")
  console.log("              *                X                    " + "/ ".red + "                +                            ")
  console.log("                                                   " + "/".red + "                               *               ")
  console.log("                                                  " + "*".yellow + "                                                ")
  console.log("                             .                               +                                     ")
  console.log("       .                                                                                           ")
  console.log("                                                                                                   ")
  console.log("                                           .                                                       ")
  console.log("                      x                                                              *             ")
  console.log("                                                   .                 X                             ")
  console.log("                                                            x                                      ")
  console.log("                                                                                                   ")
  console.log("           .                                                                          .       +    ")
  console.log("                                                                                                   ")
  console.log("####".gray + "                                                                                           " + "####".gray)
  console.log("####".gray + "      ___        ___        ___                            ___         ___         ___     ".blue + "####".gray)
  console.log("####".gray + "    /     \\    /     \\    /     \\       ".blue + "#############".gray + "    /     \\     /     \\     /     \\   ".blue + "####".gray)
  console.log("####".gray + "   /       \\  /       \\  /       \\     ".blue + "###############".gray + "  /       \\   /       \\   /       \\  ".blue + "####".gray)
  console.log("###################################################################################################".gray)
  console.log("###################################################################################################".gray)
  console.log("### ".gray + "WAVE 4" + " ## ".gray + "SCORE 32451" + " #########################################################################".gray)
  console.log("###################################################################################################".gray)
}
console.log("BY " + "Talon Vanderbeken".name)
console.log("Version: " + version + "\n" + "Enter 'help' for help.")

while (stop == false) 
{
  // Help command
  if (command == "help") 
  {
    console.log("\n\n Showing help page...\n\n     Command                Function")
    console.log("     -------------          --------")
    console.log("     help                   Displays this prompt.")
    console.log("     sqrt([number])         Calculates the square root of specified number.")
    console.log("     use [module]           Open a module.")
    console.log("     show options           List options for current module.")
    console.log("     set [option] [set-to]")
    console.log("     run                    Run current module with set options.")
    console.log("\n\n")
  }

  // This 37 line peice of code will allow
  // the user to type in a math equation an get it answered for them just like
  // in a JavaScript console. Why would I add this? Because it's cool.
  // (e.g in: 5 * 3 out: 15)

  if (args.length == 2) 
  {
    if (!isNaN(command)) 
    {
      if (args[0] == "+" || args[0] == "*" || args[0] == "/" || args[0] == "-") 
      {
        var num1 = parseInt(command);
        var num2 = parseInt(args[1]);
        if (args[0] == "+") 
        {
          var num3 = num1 + num2;
        }
        if (args[0] == "-") 
        {
          var num3 = num1 - num2;
        }
        if (args[0] == "*") 
        {
          var num3 = num1 * num2;
        }
        if (args[0] == "/") 
        {
          var num3 = num1 / num2;
        }

        console.log(colors.gray(num3))

      }
    }
  }
  var commandSplit = command.split("(")
  if (commandSplit[0] == "sqrt" && commandSplit.length > 1)
  {
    var number = commandSplit[1];
    var number = number.split(")")
    var out = Math.sqrt(parseInt(number))
    console.log(colors.gray(out))
  } else { if (commandSplit[0] == "sqrt" && commandSplit.length == 1)
    {
      error("Error: Inproper use of command 'sqrt', proper use of command 'sqrt' is: 'sqrt(<number>)'")
    }
  }

  // Exit.

  if (command == "exit") 
  {
    sleep.msleep(2000)
    process.exit();
  }

  // Use

  if (command == "use") 
  {
    if (args[0] == "ktools/flood")
    {
      var inputPrefix = "(" + "ktools/flood".red + ")" + ">"
      var currentModule = "ktools/flood"

      var target = "0000000"
      var botname = "Bot"
      var botcount = "50"
    }
    if (args[0] == "ktools/play")
    {
      var inputPrefix = "(" + "ktools/play".red + ")" + ">"
      var currentModule = "ktools/play"

      var target = "0000000"
      var botname = "Bot"
      var randomAnswer = ""
    }

    if (
       args[0] != "ktools/flood" &&
       args[0] != "ktools/play"
       ) 
       {
        error("Error: Unknown module '" + args[0] + "'")
       }
  }

  if (command == "back") 
  {
    if (currentModule != "") 
    {
      var currentModule = "";
      var inputPrefix = ">";
    } else
    {
      error("Error: Can't go back, not using a module")
    }
  }

  // Show

  if (command == "show")
  {
    if (args == "options") 
    {
      if (currentModule == "")
      {
        error("Error: No options to show, not using a module")
      }
      if (currentModule == "ktools/play") 
      {
        console.log("\n")
        console.log(" Showing options...")
        console.log("\n")
        console.log("     Name            Type     " + "Required" +   "     Current Option" )
        console.log("     ------------    -----    " + "----------" + "   --------------" )
        console.log("     TARGET          INT      " + "Yes          " + target                     )
        console.log("     BOT-NAME        STRING   " + "Yes          " + botname                    )
        console.log("     RANDOM-ANSWER   BOOL     " + "No           " + randomAnswer               )
        console.log("\n")
      }
      if (currentModule == "ktools/flood")
      {
        console.log("\n")
        console.log(" Showing options...")
        console.log("\n")
        console.log("     Name            Type     " + "Required" +   "     Current Option" )
        console.log("     ------------    -----    " + "----------" + "   --------------"   )
        console.log("     TARGET          INT      " + "Yes          " + target             )
        console.log("     BOT-NAME        STRING   " + "Yes          " + botname            )
        console.log("     BOT-COUNT       INT      " + "Yes          " + botcount           )
        console.log("\n")
      }
    } else 
    {
      error("Error: Unknown command '" + input + "'")
    }
  }

  // Set

  if (command == "set") 
  {
    // Start of ktools/play

    if (args[0] == "target" && currentModule == "ktools/play")
    {
      if (!isNaN(args[1]))
      {
        var target = args[1];
        good("Target set to '" + target + "'")
      }
      if (args[1] == undefined)
      {
        error("Error: Option can not be undefined")  
      }
    }
    if (args[0] == "target" && isNaN(args[1]) && currentModule == "ktools/play" && args[1] != undefined)
    {
      error("Error: Target must be int")
    }
    if (args[0] == "bot-name" && currentModule == "ktools/play" && args[1] != undefined) 
    { 
      var botname = args[1];
      good("Bot name set to '" + botname + "'")
    }
    if (args[0] == "random-answer" && currentModule == "ktools/play") 
    {
      if (!currentModule == "ktools/play")
      {
        error("Invalid option '" + args[0] + "' for module '" + currentModule + "'")
      } else 
      {
        if (!isNaN(args[1])) {
          if (args[1].toString().toLowerCase() == "true" || args[1].toString().toLowerCase() == "false") 
          {
           var randomAnswer = args[1].toUpperCase()
           good("Random answer set to '" + args[1] + "'")
          } else 
          {
            error("Error: Random answer must be bool")
         }
        }
      }
    }
    // End of ktools/play
    // Start of ktools/flood
    
    if (args[0] == "target" && currentModule == "ktools/flood")
    {
      if (!isNaN(args[1]))
      {
        var target = args[1];
        good("Target set to '" + target + "'")
      }
      if (args[1] == undefined)
      {
        error("Error: Option can not be undefined")  
      }
    }
    if (args[0] == "target" && isNaN(args[1]) && currentModule == "ktools/flood" && args[1] != undefined)
    {
      error("Error: Target must be int")
    }
    if (args[0] == "bot-name" && currentModule == "ktools/flood" && args[1] != undefined) 
    { 
      var botname = args[1];
      good("Bot name set to '" + botname + "'")
    }
    if (args[0] == "bot-count" && currentModule == "ktools/flood")
    {
      if (!isNaN(args[1])) 
      {
        var botcount = args[1];
        good("Bot count set to '" + botcount + "'")
      }
      if (args[1] == undefined) 
      {
        error("Error: Option can not be undefined")
      }
    }
    if (args[0] == "bot-count" && isNaN(args[1]) && currentModule == "ktools/flood" && args[1] != undefined)
    {
      error("Bot count must be int")
    }

    // End of ktools/flood
    // Errors

    if (
       args[0] == "bot-name" ||
       args[0] == "random-answer"
       ) 
       {
         if (args[1] == undefined)
         {
           error("Error: Option can not be undefined")
         }
       }

    if (
       args[0] != "target" &&
       args[0] != "bot-name" &&
       args[0] != "bot-count" &&
       args[0] != "random-answer" 
       ) 
       {
         error("Error: Unknown option '" + args[0] + "'")
       }

    if (currentModule == "") 
      {
        error("Error: Can't set option when not in a module.")
      }
  }

  // Run

  if (command == "run")
  {
    if (currentModule == "")
    {
      error("Error: Can't run, not using a module")
    }
    // Start ktools/flood
    if (currentModule == "ktools/flood")
    {
      var passed = true;
      if (parseInt(target) == 0000000)
      {
        var passed = false;
        error("Error: Incorrect target pin '" + target + "'")
      }
      if (target.split("").length < 4)
      {
        var passed = false;
        error("Error: Incorrect target pin '" + target + "', target must be atleast 5 digits")
      }
      if (passed == true)
      {
        // ktools/flood code

      }
    }
    // End ktools/flood
    // Start ktools/play
    if (currentModule == "ktools/play")
    {
      var passed = true;
      if (parseInt(target) == 0000000)
      {
        var passed = false;
        error("Error: Incorrect target pin '" + target + "'")
      }
      if (target.split("").length < 4)
      {
        var passed = false;
        error("Error: Incorrect target pin '" + target + "', target must be atleast 5 digits")
      }
      if (passed == true)
      {
        // ktools/play code

      }
    }
  }

  if (
     command != "use"          &&
     command != "run"          &&
     command != "exit"         &&
     command != "back"         &&
     command != "set"          &&
     command != "show"         &&
     command != "help"         &&
     commandSplit[0] != "sqrt" &&
     isNaN(command)
     ) 
     {
       error("Error: Unknown command '" + input + "'")
     }

  // Get the users input
  var input = inputer.getConsoleInput(inputPrefix, false)
  var args = input.trim().split(/ +/g);
  var command = args.shift().toLowerCase();

}

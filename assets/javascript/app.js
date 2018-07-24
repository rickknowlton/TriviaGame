$(document).ready(function () {


    //------------------------------------------//
    //              Game Variables              //
    //------------------------------------------//
    // Global variables are defined, including  //
    // a JSON object we used to populate all of //
    // our questions and answers. We also set   //
    // the default values for the user.         //  
    //------------------------------------------//


    var rightAnswers = 0;
    var wrongAnswers = 0;
    var noAnswers = 0;

    var questions = [{
            question: "How did Daenerys Targaryen eventually hatch her dragon eggs?",
            options: ["In a funeral pyre", "By burying them underground", "By throwing them in the sea"],
            answer: "In a funeral pyre",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "Daenerys hatched the eggs in Khal Drogo's funeral pyre."
        },
        {
            question: "What does 'Valar Dohaeris' mean?",
            options: ["All men must die", "All men must cry", "All men must serve"],
            answer: "All men must serve",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "'All men must serve', the response to 'Valar Morghulis,' meaning 'All men must die.'"
        },
        {
            question: "Kryptonite is to Superman as __________ is to White Walkers?",
            options: ["Dragonfire", "Wildfire", "Bacon", "Dragonglass"],
            answer: "Dragonglass",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "While Valyrian weaponry would also be technically right, the correct answer is Dragonglass."
        },
        {
            question: "How many times has Beric Dondarrion died?",
            options: ["Five", "Six", "Seven", "Nine"],
            answer: "Seven",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "Seven. Beric Dondarrion was brought back to life six times, but died for the seventh and final time at the Frozen Lake."
        },
        {
            question: "What is Arya's punishment for 'stealing' from the Many-Faced God?",
            options: ["Plague", "A copy of 'The God Delusion' by Richard Dawkins", "A hand", "Blindness"],
            answer: "Blindness",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "Blindness. Arya killed Meryn Trant, and although she was seeking revenge, it was not his time to die accoriding to Jaqen H'ghar."
        },
        {
            question: "What's the name of King Tommen's cat?",
            options: ["Beezer", "Prince Whiskers", "Ser Pounce", "Blue Ivy"],
            answer: "Ser Pounce",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "Ser Pounce. The best mouse catcher in the Red Keep."
        },
        {
            question: "Ned Stark's sword 'Ice' was melted down and forged into two new swords: 'Oathkeeper' and '________ ________'?",
            options: ["'Giant Slayer'", "'Frost Brand'", "'Widow's Wail'", "'Light Bringer'"],
            answer: "'Widow's Wail'",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "'Widow's Wail' was gifted to Joffrey by his grandfather Tywin as a wedding present."
        },
        {
            question: "What does L + R = ?",
            options: ["J", "D", "Undefined", "B"],
            answer: "J",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "J, or in other words Jon. It started as a fan theory that Jon Snow was the child of Prince Rhaegar Targaryen and Lianna Stark, which would technically make Jon Snow the rightful heir to the Iron Throne."
        },
        {
            question: "Creatures revived by White Walkers are known as?",
            options: ["Wights", "Ghouls", "Wraiths", "People of Walmart"],
            answer: "Wights",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "Wights are created by White Walkers from the dead."
        },
        {
            question: "What was the name of the deadly poison that killed King Joffrey?",
            options: ["The Ripper", "Nightshade", "The Strangler", "Steven Seagal's Lightning Bolt Energy Drink (Nuclear Meltdown Punch Flavor)"],
            answer: "The Strangler",
            explanation: "<span class='correct-answer'>" + "Correct Answer: " + "</span>" + "The Strangler. It is made from the leaves of a plant found in the Jade Sea of Essos and is one of the rarest and deadliest poisons known to exist."
        }
    ];


    //------------------------------------------//
    //                Game Timer                //
    //------------------------------------------//
    // We create our game timer here and we set //
    // the initial count to 60 seconds. When    //
    // the timer stops we fire the checkAnswers //
    // function and we also load our results.   // 
    //------------------------------------------//


    var timeInterval;
    var timer = {
        time: 60,
        start: function ()

        {
            timeInterval = setInterval(timer.count, 1000);
        },

        stop: function () {
            clearInterval(timeInterval);
            checkAnswers();
            loadresults();
        },

        count: function () {
            if (timer.time > 0) {
                timer.time--;
                $('#time').html(timer.time);
            } else {
                timer.stop();
            }
        },
    }


    //------------------------------------------//
    //               Check Answers              //
    //------------------------------------------//
    // Our checkAnswers function checks to see  // 
    // if the user answered the question right  //
    // or wrong or not at all.                  //
    //------------------------------------------//


    function checkAnswers() {
        for (var i = 0; i < questions.length; i++) {
            var userAnswer = $("input:radio[name ='" + i + "']:checked").val();
            if (questions[i].answer === userAnswer) {
                rightAnswers++;
            } else if (userAnswer == null) {
                noAnswers++;
            } else if (questions[i].answer !== userAnswer) {
                wrongAnswers++;
            }
        }
    }


    //------------------------------------------//
    //               Load Results               //
    //------------------------------------------//
    // With this function we match our          //
    // questions with the appropriate           //
    // explanation of our answers and append    //
    // each to our explanation div. We also     // 
    // hide our the trivia game content and     //
    // display the user results and correct     //
    // answers. We also use some fun jQuery to  //
    // scroll up to the top of the page.        //
    //------------------------------------------//


    function loadresults() {
        $(".explanation").show();
        for (var i = 0; i < questions.length; i++) {
            $(".explanation").append("<div id=e" + i + "></div>");

            $("#e" + i).append("<div><p class='question'><b>" + questions[i].question + "</b></p></div>");

            $("#e" + i).append("<div><p>" + questions[i].explanation + "</p></div>");
        }

        $(".questions").hide();
        $(".timer").hide();

        $(".results").show();
        $(".results #right").html(rightAnswers);
        $(".results #wrong").html(wrongAnswers);
        $(".results #none").html(noAnswers);

        $('.explanation').show();

        $('html,body').scrollTop(0);
    }


    //------------------------------------------//
    //              Load Questions              //
    //------------------------------------------//
    // The loadQuestions function does just     //
    // that - it loads our questions, pulling   //
    // from the JSON object we created above.   //
    // When the user clicks "submit," we stop   //
    // our timer, which triggers the page to    //
    // then check our answers and load our      //
    // results.                                 //
    //------------------------------------------//


    function loadQuestions() {
        $(".questions, .timer").show();
        for (var i = 0; i < questions.length; i++) {
            $(".questions").append("<div id=q" + i + "></div>");

            $("#q" + i).append("<div><p class='question'><b>" + questions[i].question + "</b></p></div>");

            for (var a = 0; a < questions[i].options.length; a++) {
                $("#q" + i).append("<input type='radio' name='" + i + "' value='" + questions[i].options[a] + "'>" + questions[i].options[a] + "<br/>");
            }
        }
        $(".questions").append("<button class='btn btn-lg btn-outline-dark' id='submit'>Submit</button>")

        $("#submit").on("click", function () {
            timer.stop();
        });
    }

    $(".results, .timer, .questions, .explanation").hide();
    $("#start").on("click", function () {
        $(".start").hide();
        loadQuestions();
        timer.start();
    })
});
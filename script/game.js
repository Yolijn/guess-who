void function() {

// Parse people csv 

// var onerror = (console.error || console.log).bind(console);

parsePeopleCSV('data/people.csv')
	.then(function (data) {
    	window.game = new Game(data.columns, data.rows)
    }, onerror)

var steps = 0,
	games = 0,
	questions = [],
	traitIndex = {};

function Game(traits, people)
{
// console.log(traits)
	var cards, secretCard, 
		remaining = _.clone(people),
		done = false;

	this.start = function ()
	{
		secretCard = _.sample(people);
		games++;
		// Debug: show secretCard
		// document.getElementById('random').innerHTML = renderCard(secretCard);
	};

	function renderCard(person)
	{
		return "<div class='card' id='" + person.name + "' onClick='guessCard(this, this.id)'><img src='data/images/" + person.name + ".png'><p class='name'>" + person.name + "</p></div>";
	}

	function renderPeople ()
	{
		cards = _.map(people, renderCard);

        document.getElementById('cards').innerHTML = cards.join("\n")
	};


	function guessCard (clicked, clicked_id) 
	{
		var filter = {
			"name": clicked_id
		}

		steps++;

		game.filterCards(filter)
	}

	function startNew() 
	{
		hideDone();
		removeAllClasses("correct");
		removeAllClasses("false");
		remaining =  _.clone(people);
		steps = 0;
// console.log(remaining);
		questions = [];
		document.getElementById('question').focus();
		done = false;
		start();
	}

	renderPeople();
	window.guessCard = guessCard;
	window.startNew = startNew;
	start = this.start;
	this.start();

	// Create array for with trait values for eacht trait

	_.forEach(traits, function(trait){
		var array = traitIndex[trait] = [];

		_.forEach(people, function(person) {

			if(!_.includes(array, person[trait])) {
				array.push(person[trait]);
			}
		});
// console.log(traitIndex);
// console.log(array);
	});
// console.log(traitIndex.hair_color)

	this.filterCards = function filterCards(filter)
	{

		function testCard(filter, card) {
			
			var filtered = false;

			Object.keys(filter).forEach(function (type) {
				if (card[type] == filter[type]) {
					filtered = true;
				}
			})

			return filtered;
		}

		if (testCard(filter, secretCard)) {

			for (var i = remaining.length - 1; i >= 0; i--) {
				if (!testCard(filter, remaining[i])) {
					document.getElementById(remaining[i].name).classList.add("false");
					_.remove(remaining, remaining[i]);
					checkRemaining();
				}
			};
		}
		else {

			for (var i = remaining.length - 1; i >= 0; i--)  {
				if (testCard(filter, remaining[i])) {
					document.getElementById(remaining[i].name).classList.add("false");
					_.remove(remaining, remaining[i]);
					checkRemaining();
				}
			}
		}

	}

	function checkRemaining() {	
		if(remaining.length === 1) {
			done = true;
		}

		if (done === true) {
			var doneContent = "<div class='container'><h2>Yay!</h2><p>" + renderCard(secretCard) + "</p><p>It took you only " + steps + " guesses!</p><button onClick='startNew()'>New Game!</button></div>"
			document.getElementById('done').classList.add("visible");
			document.getElementById('done').innerHTML = doneContent;
			document.getElementById('asked').innerHTML = "";
			document.getElementById("done").classList.add("visible");
			window.addEventListener('keydown', listener, false);
		}
	}

}

// remove classes 
function removeAllClasses(className) {
	_.forEach(document.querySelectorAll('.' + className), function (el) {
		el.classList.remove(className);
	});
}

window.removeAllClasses = removeAllClasses;

// show all asked questions
function showAllQuestions(question) {
	questions.push(question);
	var reversed = questions.slice();
	reversed.reverse();
	
	function HTMLq(q) {
		return "<p>" + q + "</p>";
	};

	questions = _.map(reversed, HTMLq);
	document.getElementById('asked').innerHTML = "<div class='container'>" + questions.join("\n") + "</div>"

}

window.showAllQuestions = showAllQuestions;

// prevent default browser actions when submitting question form
var question_form = document.getElementById('question-form');

question_form.addEventListener('submit', function (evt) {
	evt.preventDefault() // don't go to the next page

	steps++;

	var question = evt.target.question.value,
		guessed_name,
		guessed_gender,
		guessed_haircolor,
		guessed_hairlength,
		guessed_hairtype,
		guessed_eyecolor,
		has_hat,
		has_glasses,
		has_moustache,
		has_beard,
		has_ribbons,
		has_earrings;

	showAllQuestions(question);

	var qWords = question.toLowerCase().split(/\W/);

	 for (var i = qWords.length -1; i>=0; i--) {
	 	var match = false;

	 	if (_.includes(traitIndex.name, qWords[i])) {
	 		guessed_name = qWords[i];
	 	}

	 	if (_.includes(traitIndex.hair_color, qWords[i]) && _.includes(qWords, "hair")) {
	 		guessed_haircolor = qWords[i];
	 	}

	 	if (_.includes(traitIndex.eye_color, qWords[i]) && _.includes(qWords, "eyes")) {
	 		guessed_eyecolor = qWords[i];
	 	}

	 	if (_.includes(traitIndex.hair_length, qWords[i]) && _.includes(qWords, "hair")) {
	 		guessed_hairlength = qWords[i];
	 	}

	 	if (_.includes(traitIndex.hair_type, qWords[i]) && _.includes(qWords, "hair")) {
	 		guessed_hairtype = qWords[i];
	 	}

	 	if (_.includes(traitIndex.gender, qWords[i])) {
	 		guessed_gender = qWords[i];
	 	}

	 }

	var filter = {
		"name": guessed_name,
		"hair_color": guessed_haircolor,
		"hair_length": guessed_hairlength,
		"hair_type": guessed_hairtype,
		"eye_color": guessed_eyecolor,
		"gender": guessed_gender,
	}

	var booleans = ["moustache", "beard", "glasses", "earrings", "hat", "ribbons"]

    _.forEach(booleans, function(name) {
    	if (_.includes(qWords, name)) {
	 		filter[name] = !_.includes(qWords, "doesn't");
		}
    });

	game.filterCards(filter)
	question_form.reset();
})

}();
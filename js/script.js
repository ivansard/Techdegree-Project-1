// FSJS - Random Quote Generator

// Create the array of quote objects and name it quotes

var quotes = [
   { quote: "Your time is limited, so don't waste it living someone else's life",
     source: "Steve Jobs",
     tags : ['business', 'motivation']
   },
   { quote: "It doesn't make sense to hire smart people and tell them what to do; we hire smart people so they can tell us what to do",
     source: "Steve Jobs",
     tags: ['business']
   },
   { quote: "Those who do not want to imitate anything, produce nothing",
     source: "Salvador Dali",
   },
   { quote: "I have a dream",
     source: "Martin Luther King Jr.",
     year: 1963,
     tags: ['politics', 'democracy']
   },
   { quote: "Brothers, what we do in life, echoes in eternity",
     source: "Maximus",
     citation: "Gladiator",
   },
   { quote: "Even the widest deserts have their spring, no matter how short and unnoticable it may be",
     source: "Ivo Andrić",
     citation: "Gospodjica",
     year: 1945,
     tags: ['culture', 'literature']
   }
];

// Create the getRandomQuuote function and name it getRandomQuote

function getRandomQuote(array){
  var randomNum = Math.floor(Math.random() * quotes.length);
  return array[randomNum];
}

// Create the printQuote funtion and name it printQuote

function printQuote(){
  // Generating a random quote, creating the html output, accessing the targeted html element
  var randomQuote = getRandomQuote(quotes);
  var outputHtml = '';
  var quoteElement = document.getElementById('quote-box');
  // Adding the available elements of a quote to the html output
  outputHtml += '<p class="quote">' + randomQuote.quote + '</p>';
  outputHtml += '<p class="source">' + randomQuote.source;
  if(typeof randomQuote.citation != 'undefined'){
    outputHtml += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if(typeof randomQuote.year != 'undefined'){
    outputHtml += '<span class="year">' + randomQuote.year + '</span>';
  }
  if(typeof randomQuote.tags != 'undefined'){
    outputHtml += '<span class="tags"> ' + ',Tags: ';
    for (var i = 0; i < randomQuote.tags.length; i++) {
      outputHtml += ' ' +  randomQuote.tags[i];
    }
    outputHtml += ' </span>'
  }
  outputHtml += '</p>';
  // Printing out the html in the console for checking purposes
  console.log(outputHtml);
  quoteElement.innerHTML = outputHtml;
  // Changing the background color
  changeBackgroundColor();

}

// A function that changes the background color
function changeBackgroundColor(){
  document.body.style.background = randomRgb();
}

// Generates a random rgb combination
function randomRgb(){
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ',' + green + ',' + blue + ")";
}

// Prints out a random quote on every 20 seconds
var timeoutId = setInterval(printQuote, 8000);

// This event listener will respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

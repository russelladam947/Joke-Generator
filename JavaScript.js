var jokes = [
    'Did you hear about the kidnapping at school?... He woke up.','I am like the fabric version of King Midas... Everything I touch becomes felt.',
    'Why are evlevator jokes so good?... Because they work on so many different levels.','When does a joke become a Dad joke?... When the punchline becomes apparent.',
    'I always used to get small shocks when touching metal objects., but recently it stopped... Needless to say, I am ex-static',
    'Why do Norwegians build their own tables?... No Ikea!','Why did the coffee go to the police?... It got mugged',
    'How many ears does Captain Kirk have?... Three: the left ear, the right ear, and the final frontier',
    'I like to tell Dad jokes, but I dont have any kids... I am a faux pa.', 'I knew I should not have had the sea food... I am feeling a little eel',
    'What is made of brass and sounds like Tom Jones?... Trombones.','What do prisoners use to call each other?... Cell phones.',
    'What lies at the bottom of the sea and shakes?... A nervous wreck.','What do you call an old person with really good hearing?... Deaf defying.',
    'My wife keeps telling me to stop pretending to be butter... But I am on a roll now.','A father in Iraq gave his daughter a new bag... She said, Thanks for the Baghdad.',
    'I would not buy anything with velcro... It is a total rip-off.','What do you call a man with a seagull on his head?... Cliff.',
    'How does Darth Vader Like his Toast?... On the dark side.','Can February March?... No but April May.'
]
var randomNumber = Math.floor(Math.random() * 21);
function newJoke(){
    var randomNumber = Math.floor(Math.random() * (jokes.length));
    document.getElementById('jokesDisplay').innerHTML = jokes[randomNumber];
}
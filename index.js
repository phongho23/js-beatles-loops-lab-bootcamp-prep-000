   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
function theBeatlesPlay(musicians, instruments){
  const beatlesPlay = [];
  
  for (let i = 0, n=musicians.length; i < n; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return beatlesPlay;
}

const facts = [];

function johnLennonFacts(facts){
  const lennonFacts = [];
  let i = 0;
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]}!!!`)
    i++;
  }
  return lennonFacts;
}

function iLoveTheBeatles(n){
  const beatlesRun = [];
  do {
    beatlesRun.push("I love the Beatles!");
    n++;
  }
  while (n<15);
  return beatlesRun;
}

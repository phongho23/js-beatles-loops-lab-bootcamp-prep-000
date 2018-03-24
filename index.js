   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
function theBeatlesPlay(musicians, instruments){
  const beatlesPlay = [];
  
  for (let i = 0, n=musicians.length; i < n; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return beatlesPlay;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];

function johnLennonFacts(facts){
  const lennonFacts = [];
  let i = 0;
  while (i < facts.length) {
    lennonFacts.push(`${facts[i]} + " !!!"`)
  }
  return lennonFacts;
}


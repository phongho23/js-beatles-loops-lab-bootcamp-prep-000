   const musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
    const instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];
    
function theBeatlesPlay(musicians, instruments){
  const beatlesPlay = [];
  
  for (let i = 0, n=musicians.length; i < n; i++){
    beatlesPlay.push(`${musicians[i]} plays ${instruments[i]}`);
    }
    return beatlesPlay;
}


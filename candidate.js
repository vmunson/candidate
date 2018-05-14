let Candidate = [{
    id: "one",
    name: "joe",
    tags: ["cool", "neat", "awesome"],
    selected: true,
  },{
    id: "two",
    name: "joe",
    tags: ["cool", "sweet", "awesome"],
    selected: false,
  },{
    id: "two",
    name: "joe",
    tags: ["cool", "sweet", "radical"],
    selected: true,
  },{
    id: "two",
    name: "joe",
    tags: ["awesome", "sweet", "cool"],
    selected: true,
  }]

function sharedTags(candidates) {
    let tags = []
    candidates.map((candidate)=>{
      if(candidate.selected){
        // console.log(candidate.tags)
        for(tOne of candidate.tags[0]){

        }
      }
    })
}
    

sharedTags(Candidate)


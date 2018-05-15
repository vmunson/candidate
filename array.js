let Candidate = [{
    id: "one",
    name: "joe",
    tags: ["cool", "neat", "awesome"],
    selected: true,
  }, {
    id: "two",
    name: "joe",
    tags: ["cool", "sweet", "awesome"],
    selected: false,
  }, {
    id: "two",
    name: "joe",
    tags: ["cool", "sweet", "radical", "neat"],
    selected: true,
  }, {
    id: "two",
    name: "joe",
    tags: ["awesome", "near", "sweet", "cool"],
    selected: true,
  }]

function filter(candidates) {
    let passed = [];
    for (let candidate of candidates) {
      if (candidate => candidate.selected(candidate)) {
        passed.push(candidate);
      }
    }
    let tags = []
    for(i = 0; i < passed.length; i++){
        tags.push(passed[i].tags)
    }
    var matches = tags.shift().filter(function(v) {
        return tags.every(function(a) {
            return a.indexOf(v) !== -1;
        });
    });
    console.log(matches)
  }

filter(Candidate)
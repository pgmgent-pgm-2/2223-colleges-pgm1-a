const person = {
  firstName: 'Philippe',
  surName: 'De Pauw - Waterschoot',
  666: 'The Devil',
  "quote": 'Learning by doing',
  toString: function() {
      return `${ this.firstName } ${ this.surName }`;
  },
  completeTask(task) {
      return `Task "${task}" completed!`;
  }
};

// Convert Object Literal to JSON String
const personJSONStr = JSON.stringify(person);
console.log(personJSONStr);

const jsonStr = `[
  {
    "name": "Bulbasaur",
    "geoLocation": {
      "lat": 51.055321,
      "lng": 3.740906
    },
    "type": [
      "grass",
      "poison"
    ],
    "total": 318
  },
  {
    "name": "Ivysaur",
    "geoLocation": {
      "lat": 51.255471,
      "lng": 3.840905
    },
    "type": [
      "grass",
      "poison"
    ],
    "total": 405
  }
]`;

// Convert JSON String to Object
const obj = JSON.parse(jsonStr);
console.log(obj);

function IsJSONStringWellformed(strJSON){
    var isSyntaxOk = !(/[^,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]/.test(strJSON.replace(/"(\\.|[^"\\])*"/g, '')));
    if(isSyntaxOk){
        var o = JSON.parse(strJSON);
        if (o && typeof o === "object" && o !== null) {
            return true;
        } 
    }
    return false;
}

let isWellFormed = IsJSONStringWellformed(jsonStr);
console.log(isWellFormed);


console.log("heyyy")
let endpoint = "https://secure.workadvantage.in/api/v1/profiles";
var settings = {
  "url": "https://secure.workadvantage.in/api/v1/profiles",
  "method": "GET",
  "timeout": 0,
};

var payload = {
  one: "right",
  two: "left"
};

var query_string = '';
query_string += $.param(payload);
// console.log(query_string);


let resp1 = {
  "name": "student",
  "age": 21
}
settings.url += "?" + query_string;
console.log(settings.url);



function getData(endpoint, payload, cb) {
  let query_string = $.param(payload);
  let url = `${endpoint}${query_string.length > 0 ? `?${query_string}` : ``}`;
  var settings = {
    "url": url,
    "method": "GET",
    "headers": {
      "token": "gYK9wnFYjkPu9xNnHZc5",
    },
  };
  $.ajax(settings).done(function (response) {
    if (typeof cb == "function") cb(response);
  })
}

function postData(endpoint, payload, cb) {
  let url = endpoint;
  var settings = {
    "url": url,
    "method": "POST",
    "headers": {
      "token": "gYK9wnFYjkPu9xNnHZc5",
    },
    "data": JSON.stringify(payload),
  };
  $.ajax(settings).done(function (response) {
    if (typeof cb == "function") cb(response);
  })
}


function getProfileData(response) {
  console.log("Response in get Profile data : ", response);
}


getData(endpoint,settings, getProfileData);

// postData(endpoint, payload, getProfileData);



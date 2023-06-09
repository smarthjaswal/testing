// console.log("hello");
var settings = {
    "url": "https://secure.workadvantage.in/api/v1/search_api",
    "method": "GET",
    "timeout": 0,
    "headers": {
        "token": "eyJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyNjYzNTAxLCJlbWFpbCI6ImFrYW5rc2hhYUBhZHZhbnRhZ2VjbHViLmNvIn0.G95CkO7EuSw5MbDB7gllHedExNTgBBYm4B54Rllu8PM"
    },
    "data": {
        "search": "roh",
        "type": "non-monetary",
        "non_status": false,
        "cc": true
    }
};



var userInput = "";
var list = $('.list');
var autocompleteData = [];

$(document).ready(function () {
    $("#tokenfield").on("input", function () {
        userInput = $(this).val();
        console.log(userInput);
        if(userInput.length>3){
        settings.data.search = userInput;
        apiCall();
        }
        
    });

    $('#tokenfield').autocomplete({
        source: autocompleteData,
        delay: 10000,
        autoFocus: true,
        
    });
});

function apiCall() {
    $.ajax(settings).done(function (response) {
        console.log(response.results);
        var firstObject = response.results;

        $.each(firstObject, function (index, obj) {
            var id = obj.id;
            var name = obj.name;
            var email = obj.email;

            var listItem = id + ", " + name + ", " + email;
            autocompleteData.push(listItem);
        });

        $('#tokenfield').autocomplete("option", "source", autocompleteData);
        $('#tokenfield').autocomplete("search", userInput);
    });
}











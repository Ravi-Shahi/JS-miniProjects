$('#sort-btn').click(function() {
    var userInput = $('#unsortedList').val().split(",");
    var unsortedList = [];
    userInput.forEach(function(input) {
        unsortedList.push(input.trim());
    });

    sortList(unsortedList);
})

$('#clear-btn').click(function() {
    $('#unsortedList').val("");
    $('#sortedList').val("");
});

function sortList(list) {
    var sortedList = list.sort();
    displayList(sortedList);
}

function displayList(list) {
    $('#sortedList').val(list);
};
// Examples:

var ids = people.map(person => person.id);      //Anonymous Function Expression

var ids = people.map(function getId(person){    //Same behavior but Named Function Expression
    return person.id;
});

//*****************

getPerson()
.then(person => getData(person.id))             //Anonymous Function Expression
.then(renderData);

getPerson()
.then(function getDataFrom(person){             //Same behavior but Named Function Expression
    return getData(person.id);
})
.then(renderData);

//For clarity it's a good practice to use named function expressions so other persons can understand the code more easily.

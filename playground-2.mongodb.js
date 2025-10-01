
// Create a database
use('Mydb');
// create a collection by inserting a document
db.movie.insert({"name":"tutorials point"});

// View list of collecions
use('Mydb');
show('collections');

//Display the documents within the collection
use('Mydb');
db.movie.find({});

// Dropping of collections
use('Mydb');
db.movie.drop();


// Dropping of databases
use('Mydb');
db.dropDatabase('Mydb');

show('dbs');

// Creating a new collection::
// {key:value} pair {field:value}
use('Mydb');
db.users.insertOne({
    _id : ObjectId("507f191e810c19729de860ea"),
    title: "MongoDB Overview",
    description: "Mongo is no sql database",
    by: "tutorials point",
    url: "http://www.tutorialspoint.com",
    tags: ['mongodb', 'database', 'NoSQL'],
    likes: 100
    });

use('Mydb');
db.users.find({});

use('Mydb');
show('collections');

// Intentional mistake for collection name:
use('Mydb');
db.userss.insertOne({
    _id : "10002",
    title: "MongoDB Printing",
    description: "Try learning MongoDB",
    by: "Fortesoft",
    url: "http://www.tutorialspoint.com",
    tags: ['Java', 'Sql', 'NoSQL'],
    likes: 300
    });
use('Mydb');
db.users.find({});


// Correction
use('Mydb');
db.userss.drop();



use('Mydb');
db.users.insertOne({
    _id : "10002",
    title: "MongoDB Printing",
    description: "Try learning MongoDB",
    by: "Fortesoft",
    url: "http://www.tutoralspoint.com",
    tags: ['Java', 'Sql', 'NoSQL'],
    likes: 300
    });

use('Mydb');
db.users.find({});


// Inserting multiple Documents in a collection:
use('Mydb');
db.users.insertMany([
    {
        _id:"1920",
        title: "MongoDB Overview",
        description: "MongoDB is no SQL database",
        by: "tutorials point",
        url: "http://www.tutorialspoint.com",
        tags: ["mongodb", "database", "NoSQL"],
        likes: 100
    },
    {
    title: "NoSQL Database",
    description: "NoSQL database doesn't have tables",
    by: "tutorials point",
    url: "https://www.tutorialspoint.com",
    tags: ["mongodb","database", "NoSQL"],
    likes: 20,
    comments: [
        {
            user: "user1",
            message: "My first comment",
            dateCreated: new Date(2013,11,10,2,35),
            like: 0
        }
    ]
}
])


// Creating new collection using the createCollection() method:
use("Mydb")
db.createCollection("empDetails")

//InsertOne
use("Mydb")
db.empDetails.insertOne(
    {
        First_Name: "Radhika",
        Last_Name: "Sharma",
        Date_Of_Birth: "1995-09-26",
        e_mail: "radhika_sharma.123@gmail.com",
        phone: "9848022338"
});

// use('Mydb')
// Let query = db.empDetails.find({})
// query;
// print(typeof(query.Date_of_Birth));

// InsertMany
use('Mydb')
db.empDetails.insertMany(
    [
        {
            First_Name: "Faith",
            Last_Name: "Sharma",
            Date_Of_Birth: "1995-09-26",
            e_mail: "faith_sharma.123@gmail.com",
            phone: "9000012345"
        },
        {
            First_Name: "Ola",
            Last_Name: "Christopher",
            Date_Of_Birth: "1990-02-16",
            e_mail: "Rachel_Christopher.123@gmail.com",
            phone: "9000054321"
        },
        {
            First_Name: "Fathima",
            Last_Name: "Sheik",
            Date_Of_Birth: "1990-02-16",
            e_mail:"Fathima_Sheik.123@gmail.com",
            phone: "9000054321"
        }
    ]
);

use('Mydb')
db.empDetails.find().pretty();


use('sampleDB')
db.MyCol.insertMany(
    [
        {
            title: "MongoDB Overview",
            description: "MongoDB is no SQL database",
            by: "tutorials point",
            url: "http://www.tutorialspoint.com",
            tags: ["mongodb", "database", "NoSQL"],
            likes: 100
        },
        {
            title: "NoSQL Database",
            description: "NoSQL database doesn't have tables",
            by: "tutorials point",
            url: "http://www.tutorialspoint.com",
            tags: ["mongodb", "database", "NoSQL"],
            likes: 20,
            comments: [
                {
                    user:"user1",
                    message: "My first comment",
                    dateCreated: new Date(2013,11,10,2,35),
                    like: 0
                }
            ]
        }
    ]
);


use("sampleDB")
db.MyCol.find({})

use("sampleDB")
db.MyCol.findone({})

// Conditional Query:
// Operators:
// Equality
// filed = value
use("sampleDB")
db.MyCol.find({"by":"tutorials point"}).pretty()

// Using projection:
// Projection is used for limitting number of expected fields.
//==> 0 to exclude while 1 to include.
// find(criteria, projection)

use("sampleDB")
db.MyCol.find({"by":"tutorials point"}
    ,{_id:0, by:1, title:1, description:1}
).pretty()


// find function
use('sampleDB');
db.MyCol.find();


// findOne funtion
use('sampleDB');
db.MyCol.findone();

// updateOne function
use('sampleDB');
db.MyCol.updateOne(
    { title: "MongoDB Overview" },
    { $set: { likes: 200 } }
);


// confirm to see if it reflected:
use('sampleDB');
db.MyCol.find( { title: "MongoDB Overview"} );

// updateMany function:
use('sampleDB');
db.MyCol.find( {} );

use('sampleDB'); //inc means to increment 
db.MyCol.updateMany({}, { $inc: { likes: 1000 } });

// confirm to see if it reflected:
use('sampleDB');
db.MyCol.find({});

//to decrement use negative sign (-)
use('sampleDB');
db.MyCol.updateMany({}, { $inc: { likes: -1000 } });

// confirm to see if it reflected:
use('sampleDB');
db.MyCol.find({});

// deleting records:
use('sampleDB');
db.MyCol.find({});

show("dbs")

// documents are json objects, comments is an array of oject ($- array of array)
use('sampleDB');
db.MyCol.find({'comments.user':'user1'}) // find is to query

use('sampleDB');
db.MyCol.deleteOne({'comments.user':'user1'})

// confirm deletion
use('sampleDB')
db.MyCol.find({})


// Delete Many:
use('school')
show('collections')

use('school')
db.courses.insertMany([{
    '_id':1,
    'courseName':'Java',
    'studentName':'Ola Philip',
    'Gender':'Male'
},
{
    '_id':2,
    'courseName': 'Sql',
    'studentName': 'Ujoh John',
    'Gender': 'Male'

},
{
    '_id':3,
    'courseName': 'Sql',
    'studentName': 'Ubah Jude',
    'Gender': 'Male'
},
{
    '_id':4,
    'courseName': 'Java',
    'studentName': 'Ife Gloria',
    'Gender': 'Female'

},
{
    '_id':5,
    'courseName':'Python',
    'studentName':'Kel Claire',
    'Gender':'Female'

},
{   '_id':6,
    'courseName': 'Python',
    'studentName': 'Yul Len-gen',
    'Gender': 'Male'
  
}
])

    use('school')
    db.courses.find({'courseName': 'Java'});

use('school')
db.courses.deleteMany({'courseName': 'Java'});

use('school')
db.courses.deleteMany({});



use('school')
db.courses.insertMany([{
    '_id':1,
    'courseName':'Java',
    'studentName':'Ola Philip',
    'Gender':'Male'
},
{
    '_id':2,
    'courseName':'Sql',
    'studentName':'Ujoh John',
    'Gender':'Male'
},
{
    '_id':3,
    'courseName':'Java',
    'studentName':'Ubah Jude',
    'Gender':'Male'
},
{
    '_id':4,
    'courseName':'Java',
    'studentName':'Ife Gloria',
    'Gender':'Female'
},
{
    'id':5,
    'courseName':'Python',
    'studentName':'Kel Claire',
    'Gender':'Female'
},
{
    '_id':6,
    'courseName':'Python',
    'studentName':'Yul Len-gen',
    'Gender':'Male'
},
{
    '_id':7,
    'courseName':'Python',
    'studentName':'Kel Jane',
    'Gender':'Female'
},
{
    '_id':9,
    'courseName':'JavaScript',
    'studentName':'John Doe',
    'Gender':'Male'
},
{
    '_id':10,
    'courseName':'Sql',
    'studentName':'Lil Fat',
    'Gender':'Male'
}
]);


use('school');
db.courses.find()
//field is a property of a document


// Update the first document with _id: 1
use('school');
db.courses.updateMany(
    { _id: 1},
    { $set: { year: 2004} },
    { upsert: true }
);

// Update the second document with _id: 2
use('school');
db.courses.updateMany(
    { _id: 2 },
    { $set: { year: 2005 } },
    { upsert: true }
);

// Update the second document with _id: 3
use('school');
db.courses.updateMany(
    { _id: 3 },
    { $set: { year: 2006 } },
    { upsert: true }
);

// Update the second document with _id: 4
db.courses.updateMany(
    { _id: 4 },
    { $set: { year: 2003 } },
    { upsert: true }
);

// Update the second document with _id: 5
use('school');
db.courses.updateMany(
    { _id: 5 },
    { $set: { year: 2003 } },
    { upsert: true }
);

// Update the second document with _id: 6
use('school');
db.courses.updateMany(
    { _id: 6 },
    { $set: { year: 2019 } },
    { upsert: true }
);

// Update the second document with _id: 7
use('school');
db.courses.updateMany(
    { _id: 7 },
    { $set: { year: 2017 } },
    { upsert: true }
);

// Update the second document with _id: 8
use('school');
db.courses.updateMany(
    { _id: 8 },
    { $set: { year: 2022 } },
    { upsert: true }
);

// Update the second document with _id: 9
use('school');
db.courses.updateMany(
    { _id: 9 },
    { $set: { year: 2021 } },
    { upsert: true }
);

// Update the second document with _id: 10
use('school');
db.courses.updateMany(
    { _id: 10 },
    { $set: { year: 2024 } },
    { upsert: true }
);

use('school')
db.courses.find({});

// Distinct Method without Criteria: it is used to exclude duplicate values
use('school')
db.courses.distinct('courseName');

// Distinct method with criteria:
use('school')
db.courses.distinct('courseName',
    {'year':2003}
);


// Count function:
use('school')
db.courses.count({});

// countDocuments function:
use('school')
db.courses.countDocuments({});

// estimatedDocumentcount function:
use('school')
db.courses.estimatedDocumentCount({});

// count with criteria:
use('school')
db.courses.countDocuments(
    {'courseName':'Sql'}
);

// Limit
use('school')
db.courses.find().limit(5)


// Sorting in Ascending Order
use('school')
db.courses.find().sort(  //+1 is ascending order
    {'studentName':1}
)

// Sorting in Descending Order
use('school')
db.courses.find().sort(
    {'studentName': -1}  //-1 signifies descending order while 
)

// Sorting in Descending Order and Limiting by 5
// Get the last 5 records
use('school')
db.courses.find().sort(
    {'_id':-1}
).limit(5)//.sort({'_id':1})

// Using the skip() method:
use('school')
db.courses.estimatedDocumentCount()

use('school')
db.courses.find().skip(5)

//assignment
use('school')
db.courses.find().skip(4).limit(3)


use('school')
db.courses.find()

// Conditional Operators: operators start with a ($) sign

// Equals
use('school')
db.courses.find({'year':2003})
//OR
use('school')
db.courses.find({'year':
    {$eq:2003}    //eq means equal
})

// Not Equal
use('school')
db.courses.find({'year':
    {$ne:2003}
})

// GREATER THAN ($GT) AND GREATER THAN OR EQUAL TO ($GTE): gt is greater than
use('school')
db.courses.find(
        {'year':{$gt:2006}}
)
use('school')
db.courses.find({'year':
    {$gte:2006}
})


// LESS THAN ($LT) AND LESS THAN OR EQUAL TO ($LTE): 
//you cant use lt,gt,lte and gte for string
use('school')
db.courses.find({'year':
    {$lt:2006}
})
//
use('school')
db.courses.find({'year':
    {$lte:2006}
})


// LOGICAL OPERATORS:
// AND
use('school')
db.courses.countDocuments({
    $and:[
        {'Gender':"Female"}
    ,   {"year":2003}]
})

//Examples:
use('school')
db.courses.countDocuments({
    $and:[  //if both conditions are not true, it'll return an empty bracket
        {'Gender':"Female"}
    ,   {"year":{$eq:2003}}]
})

//OR
use('school')
db.courses.countDocuments({
    $or:[{
        'Gender':"Female"
    }, {"year":2003}]
})

//NOR
use('school')
db.courses.countDocuments({
    $nor:[{
        'Gender':"Female"
    }, {"year":2003}]
})

// REGULAR EXPRESSION: //is used to search and matching values
use('sample_mflix')
db.movies.countDocuments({"title":"Opera"})

use('sample_mflix')
db.movies.countDocuments({"title":{$regex:"Opera"}}) //found everything that had opera
use('sample_mflix')
db.movies.find({"title":{$regex:"Opera"}})

//Display only title with opera
use('sample_mflix')
db.movies.find({"title":{$regex:"Opera"}}, {title:1, _id:0}) 
//if you dont specify id:0, mongo db will display title with id


// USING THE CARET (^) OPERATOR:
// used to search for start position, found values that start with opera
use('sample_mflix')
db.movies.countDocuments({"title":{$regex:"^Opera"}})

use('sample_mflix')
db.movies.find({"title":{$regex:"^Opera"}}, {_id:0, title:1})


// USING THE DOLLAR ($) OPERATOR:
// used to search for end position, found values that end in opera
use('sample_mflix')
db.movies.countDocuments({"title":{$regex:"Opera$"}})

use('sample_mflix')
db.movies.find({"title":{$regex:"Opera$"}}, {_id:0, title:1})

// CASE-INSENSITIVE SEARCH:
use('sample_mflix')
db.movies.countDocuments({"title":{$regex:"the"}})
 //used to search for characters with 'the' in the title

 use('sample_mflix')
db.movies.find({"title":"the"}) // will find title with just 'the'

use('sample_mflix')
db.movies.find({"title":{$regex:"the"}}, {_id:0, title:1}) //will find where title has the word 'the' in it

use('sample_mflix')
db.movies.countDocuments({"title":{$regex:"the",
    $options:"i" }}) 

use('sample_mflix')
db.movies.find({"title":{$regex:"the",
    $options:"i" }}, {title:1}) //to ignore case sensitivity

// QUERY ARRAY AND NESTED DOCUMENTS:
// FINDING AN ARRAY BY AN ELEMENT
use('sample_mflix')
db.movies.find({"cast":"Charles Chaplin"}, {cast:1})

use('sample_mflix')
db.movies.find({"languages":["German","English"]}, {languages:1})

//Find movies languages by ["Emglish", "French", "Cantonese", "German"]

use('sample_mflix')
db.movies.find({"languages":["English", "French", "Cantonese", "German"]},
    {languages:1})

// Find movies languages by ["English", "French", "Cantonese"]
use('sample_mflix')
db.movies.find({"languages":["English", "French", "Cantonese"]}, {languages:1})

// SEARCHING AN ARRAY WITH THE $ALL OPERATOR:
use('sample_mflix')
db.movies.find({"languages":{"$all":["English", "French", "Cantonese"]}},
    {languages:1})
//'$all' is like AND and '$any' is like OR

// PROJECTING ARRAY ELEMENTS:
// --PROJECTING MATCHING ELEMENTS USING ($):
use('sample_mflix')
db.movies.find({"languages":"Syriac"}, {languages:1})

use('sample_mflix')
db.movies.find({"languages":"Syriac"}, {"languages.$":1})//it will project only syriac

use('sample_mflix')
db.movies.find({"languages":"Syriac"}, {"languages.$":1, _id:0,})


//PROJECTING MATCHING ELEMENTS BY THEIR INDEX POSITION ($SLICE): // slice is to return a specific amount
use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
    {"languages":{$slice:3}, title:1 }).pretty() //return first 3


use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
    {title:1, languages:1}).pretty() 


use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
    {"languages":{$slice:-2}, title:1}).pretty() //return last two



use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
   {title:1, languages:1, _id:0}).pretty()

// $slice:[skip, return Next]: // Displays number of values you want to return after skipping
use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
    {"languages":{$slice:[2, 4]}, title:1}).pretty() //skips the first two and returns the next 4 
    //pretty is to arrange

use('sample_mflix')
db.movies.find({"title":"Youth Without Youth"},
    {"languages":{$slice:[-5, 4]}}).pretty()

//  QUERYING NESTED OBJECTS: // A DOCUMENT IS AN OBJECT, AN ARRAY IS AN OBJECT
use('sample_mflix')
db.movies.find(
    {"awards":{"wins":1, "nominations":0, "text":"1 win."}}, //AWARDS HERE IS A FILTER
    {awards:1, "_id":0}
)


use('sample_mflix')
db.movies.countDocuments({})


//QUERYING NESTED OBJECT FIELDS:
use('sample_mflix')
db.movies.find({"awards.wins":4}, {"awards.wins": 1}) //you use the'.' annotation to access nested objects fields

use('sample_mflix')
db.movies.find({"awards.wins": 
    {$ne:4}, 
})

use('sample_mflix')
db.movies.find({"awards.wins":{$gte:5},
    "awards.nominations":6}, 
    {awards:1}
)

    // ==OR

use('sample_mflix')
db.movies.find({$and:[{"awards.wins":{$gte:5}}, {"awards.nominations":6}]}, {awards:1})


// REPLACING DOCUMENTS:
use("replace_db")
db.users.insertMany([
    {"_id":2, "name":"Jon Snow",
        "email":"Jon.Snow@got.es"},
        {"_id":3, "name":"Joffrey Baratheon",
            "email":"Joffrey.Baratheon@got.es"},
            {"_id":5, "name":"Margaery Tyrell",
                "email":"Margaery.Tyrell@got.es"},
                {"_id":6, "name":"Khal Drogo",
                    "email":"Jon.Snow@got.es"}
                ]) 
                // multiple documents are represented with a square bracket
// There was an issue that needs to be fixed:
use("replace_db")
db.users.replaceOne({"_id":5},
    {"name":"Margaery Baratheon",
        "email": "Margaery.Baratheon@got.es"}
    )

    // --OR

use("replace_db")
db.users.replaceOne({"_id":5},
    {"name":"Margaery Baratheon",
        "email":"Margaery.Baratheon@got.es"}
    )   

use("replace_db")
db.users.find()

// UPSERT USING REPLACE:


// --CHANGE VALUES AND INSERT:
use("replace_db")
db.users.replaceOne({name:"Margaery Baratheon"}, //the first parameter is criteria/filter
    {name:"Margaery Tyrell", "email":"Margaery.Tyrell@got.es"},
    {upsert:true} //forcefully add the seond criteria to the criteria used to search even if it doesn't exist
)

use("replace_db")
db.users.replaceOne({name:"Tommen Baratheon"},
    {name:"Tommen Baratheon", "email":"Tommen.Baratheon@got.es"},
{upsert:true}
)

use("replace_db")
db.users.find()
//the difference between update and replace is that you dont have to use the '$set' function with replace

// REPLACING USING FINDONEANDREPLACE():
use("replace_db")
db.movies.insertMany([
    {"_id":1011, title:"Macbeth"},
    {"_id":1513, title:"Macbeth"},
    {"_id":1651, title:"Macbeth"},
    {"_id":1819, title:"Macbeth"},
    {"_id":2117, title:"Macbeth"},
])

use("replace_db")
db.movies.find()
//
use("replace_db")
db.movies.findOneAndReplace(
   {title:"Macbeth"}, //old value
   {title:"Macbeth", "latest":true} //new value
)

use("replace_db")
db.movies.findOneAndReplace(
   {title:"Macbeth"}, //old value
   {title:"Macbeth", "latest":true} //new value
   ,{sort:{"_id":-1}, projection:{"_id":0}}
)

// --REPLACE VERSUS DELETE AND RE-INSERT:
use("replace_db")
db.movies.deleteMany({})

use("replace_db")
db.movies.insertMany([
    {"_id":1011, title:"Macbeth"},
    {"_id":1513, title:"Macbeth"},
    {"_id":1651, title:"Macbeth"},
    {"_id":1819, title:"Macbeth"},
    {"_id":2117, title:"Macbeth"},
])

// Now find the document of the latest movie title Macbeth and add a flag "latest"
use("replace_db")
db.movies.find()

use("replace_db")
let deletedDocument = db.movies.findOneAndDelete(
    {"title":"Macbeth"},
    {sort:{"_id":-1}}
)

db.movies.insert({
    "_id":deletedDocument._id,
    "title":"Macbeth",
    "latest":true})

use("replace_db")
db.movies.find()

//Decrement
use("replace_db")
db.movies.findOneAndUpdate(
    {"title": "Macbeth"},
    {$inc : {"num_mflix_comments": -2, "rating": -0.2}},
    {returnNewDocumment: true}
)

//Multiply $mul()
use("replace_db")
db.movies.findOneAndUpdate(
    {"title": "Macbeth"},
    {$mul : {"rating":2}},
    {returnNewDocumment: true}
)

//multiply nonexistent fiel box_office_collection
use("replace_db")
db.movies.findOneAndUpdate(
    {"title:": "Macbeth"},
    {$mul: {"box_office_collection": 16,3}}, //since the field doesn't exit, it will return zero as the result
    {returnNewDocumment: true}
)

//Rename $Rename()
// To use rename lets update the title field
// from macbeth to imdb_rating

use("replace_db")
db.movies.findOneAndUpdate(
    {"title:": "Macbeth"},
    {$set : {"imdb_rating": 6.6}}
)

use("replace_db")
db.movies.findOneAndUpdate(
    {"title:": "Macbeth"},
    {$rename : {"num_mflix_comments": "comments"}}
)


// current date
use("replace_db")
db.movies.findOneAndUpdate(
    {"title": "Macbeth"},
    {$currentDate : {
        "created_date": true,
        "last_updated_date": {$type: "date"},
        "last_updated_timestamp": {$type: "timestamp"},
    }},
    {returnNewDocumment: true}
)

//removing field ($unset)
use("replace_db")
db.movies.findOneAndUpdate(
    {"title": "Macbeth"},
    {$unset : {
        "created_date": "",
        "last_updated_date": "dummy_value",
        "box_office_collection" : 142.2
    }},
    {returnNewDocumment: true}
)

// Setting When Inserted ($setOnInsert)
use("replace_db")
db.movies.findOneAndUpdate(
    {"title": "Macbeth"}, //$setoninsert will not work because, this is an existing documents
    {
        $rename: {"comments": "num_mflix_comments"},
        $setOnInsert : {"created_date": new Date()}
    },
    {
        upsert: true,
        returnNewDocumment: true
    }
)C:\Users\Admin\Documents\mongodb\playground-2.mongodb.js
//setting when inserted ($setOnInsert)
use("replace_db")
db.movies.findOneAndUpdate(
    {"_id": 2118, "title": "G20"}, //$setoninsert will not work because, this is an inserted operation
    {
        $rename: {"comments": "num_mflix_comments"},
        $setOnInsert : {"created_date": new Date()} 
    },
    {
        upsert: true,
        returnNewDocumment: true
    }
)

// Working with Arrays in MongoDB
use('Blog')
db.posts.drop()

use('Blog')
db.posts.insertOne(
    {
        "_id" : ObjectId("5ec55af811ac5e2e2aafb2b9"), //value determines data type
        "name" : "Working with Arrays",
        "user" : "Database Rebel",
        "desc" : "Maintaining an array of objects in a document",
        "content" : "some content ...",
        "created" : ISODate("2020-05-20T16:28:55.468Z"),
        "updated" : ISODate("2020-05-20T16:28:55.468Z"),
        "tags" : [ "mongodb", "arrays" ],
        "comments" : [
            {
                "user" : "DB Learner",
                "content" : "Nice post.",
                "updated" : ISODate("2020-05-20T16:35:57.461Z")
            }
        ]
}
);

// Create and Query a Document:
use('Blog')
db.posts.find()


// Add an Array Element:
// Using $push operator to add new elements into an array: // add a value to an array
/*
$push is an array update operator which adds an element to an array,
If the array doesn't exist, it creates an array field and
then adds the element.
*/

// Let's add a comment for this post, by a user "DB Learner":
let NEW_COMMENT = {
    user: "DB Learner",
    text: "Nice post, can I know more about the arrays in MongoDB?",
    updatdd: ISODate()
}


use('Blog')
db.posts.updateOne(
    { _id: ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $push: { comments: NEW_COMMENT } }
)

let NEW_COMMENT2 = {
    "user" : "Database Rebel",
    "text" : "Thank you, please look for updates",
    "updated" : ISODate("2020-05-20T16:48:25.506Z")
}
use('Blog')
db.posts.updateOne(
    { _id: ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $push: { comments: NEW_COMMENT2 } }
)


use('Blog')
db.posts.find()

// Update an Array Elememnt:

//Let's update the comment posted by "Database Rebel"
// with modified text field :
let NEW_CONTENT = "Thank you, please look for updates - updated the post";

use('Blog')
db.posts.updateOne(
    { _id : ObjectId("5ec55af811ac5e2e2aafb2b9"), "comments.user": "Database Rebel" },
    { $set: { "comments.$.text": NEW_CONTENT } }
)


use('Blog')
db.posts.find()


// Delete an Array Element:

// The $pull operator removes
// elements of an array base on the criteria

use('Blog')
db.posts.updateOne(
    { "_id" : ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $pull: { comments: { user: "Database Rebel" } } }
 )


use('Blog')
db.posts.find()


// Add a New Field to all Objects in the Array
use('Blog')
db.posts.updateOne(
    { "_id": ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $set: { "comments.$[].likes": 0 } }
)

/*
The all positional opertor '$[]' specifies
that the update operator '$set' should modify
all the elements in the specified array field
*/

use('Blog')
db.posts.find()

// Update a Specific Array Element Based on a Condition:
let NEW_COMMENT3 = {
    text: "Thanks for the updates!",
    updated: ISODate()
  }

  use ('Blog')
  db.posts.updateOne(
    { _id : ObjectId("5ec55af811ac5e2e2aafb2b9"),
        "comments.user": "DB Learner" },
    {
        $push: { "comments.$.text": NEW_COMMENT3.text},
        $set:{"comments.$.updated":NEW_COMMENT3.updated}
    }
)


let NEW_COMMENT4 = "Thanks for the updates!"

use('Blog')
db.posts.updateOne(
    { _id : ObjectId("5ec55af811ac5e2e2aafb2b9"),
    "comments.user": "DB Learner" },
    {
    $set: { "comments.$.text": NEW_COMMENT4}
}
)

use('Blog')
db.posts.find()

/*
Note the 'likes' field is missing in the input document.
We will update this particular comment in the 
comments array with
the condition that the 'likes' field is missing.
*/

use('Blog')
db.posts.updateOne(
    { "_id" : ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $inc: {"comments.$[identifier].likes": 1 } },
    { arrayFilters: [ { "identifier.user": "DB Learner",
        "identifier.likes": { $exists: true } } ] }
)

use('Blog')
db.posts.find()
/*
The likes field is updated using the $inc
update operator (this increments a field's value,
or if not exists adds the field and then increments),
The filtered positional operator $[<identifier>]
identifies the array elements that match
the arrayFilters conditions for an update operator*/



// Let's add a comment for this post, by
// a user "DB John-Doe":
let NEW_COMMENT5 = {
    user: "DB John-Doe",
    text: "Nice post, can I know more about the arrays in MongoDB?",
    updated: ISODate(),
    likes: 0
}


use('Blog')
db.posts.updateOne(
    { _id : ObjectId("5ec55af811ac5e2e2aafb2b9") },  // criteria ia the condition used to filter
    { $push: { comments: NEW_COMMENT5 } }
)

use('Blog')
db.posts.find()

//After adding new user
use('Blog')
db.posts.find()

//After adding new user
use('Blog')
db.posts.updateOne(
    { "_id" : ObjectId("5ec55af811ac5e2e2aafb2b9") },
    { $inc: { "comments.$[identifier].likes": 1 } },
    { arrayFilters: [ { "identifier.user": "DB John-Doe",
        "identifier.likes": { $exists: true } } ] }
)
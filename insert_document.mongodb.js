// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('University');


// Type 1 
var type1Documents = [
    { "name" : "Iqbal Fikhriansyah Romadhona", "age": 21, "gpa": 4.0 },
    { "name" : "Siti Aminah", "age": 22, "gpa": 3.9 },
    { "name" : "Hendri Kusuma", "age": 30, "gpa": 3.2 },
    { "name" : "Anita Wijaya", "age": 19, "gpa": 3.6 },
    { "name" : "Bambang Santoso", "age": 25, "gpa": 4.0 },
    { "name" : "Rina Permata", "age": 27, "gpa": 3.8 },
    { "name" : "Dedi Prasetyo", "age": 20, "gpa": 3.4 },
    { "name" : "Siti Rahayu", "age": 23, "gpa": 3.7 },
    { "name" : "Eko Susanto", "age": 29, "gpa": 3.9 },
    { "name" : "Putri Utami", "age": 26, "gpa": 3.2 },
    { "name" : "Wawan Setiawan", "age": 24, "gpa": 3.6 },
    { "name" : "Nurul Hidayah", "age": 18, "gpa": 3.8 },
    { "name" : "Rudi Purnama", "age": 21, "gpa": 3.4 },
    { "name" : "Dewi Novianti", "age": 30, "gpa": 3.9 },
    { "name" : "Sugeng Hariyanto", "age": 29, "gpa": 3.2 },
    { "name" : "Rina Anggraeni", "age": 19, "gpa": 3.6 },
    { "name" : "Dian Wahyuni", "age": 25, "gpa": 4.0 },
    { "name" : "Satrio Nugroho", "age": 22, "gpa": 3.4 },
    { "name" : "Putri Wahyu", "age": 27, "gpa": 3.7 },
    { "name" : "Agung Wibowo", "age": 26, "gpa": 3.9 }
];


// Create a new document in the collection.
db.getCollection('students').insertMany(type1Documents);

// Type 2 (its to many, so i'll make imagination data)
var type2Documents = [
    {
        "name": "Muhammad Fajar",
        "age": 20,
        "gpa": 3.8,
        "fullTime": true,
        "registerDate": ISODate("2022-07-21T13:15:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Muhammad Alwi",
        "age": 20,
        "gpa": 3.8,
        "fullTime": true,
        "registerDate": ISODate("2022-06-21T14:15:42Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. ahmad yani", "city": "Jember", "state": "Indonesia", "zip": "130710" }
    },
    {
        "name": "Yudi Basril",
        "age": 20,
        "gpa": 3.0,
        "fullTime": true,
        "registerDate": ISODate("2022-04-19T11:15:20Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mobile"],
        "address": { "street": "jl. baturaden", "city": "Jember", "state": "Indonesia", "zip": "130714" }
    },
    {
        "name": "Bintang Timur",
        "age": 20,
        "gpa": 2.7,
        "fullTime": false,
        "registerDate": ISODate("2022-07-01T18:25:42Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "JarKom"],
        "address": { "street": "jl. budi pekerti", "city": "Jember", "state": "Indonesia", "zip": "130830" }
    },
    {
        "name": "Alfan Sulaiman",
        "age": 20,
        "gpa": 2.5,
        "fullTime": false,
        "registerDate": ISODate("2022-08-10T09:35:45Z"),
        "graduationDate": null,
        "courses": ["Jarkom", "Mikrokontroler"],
        "address": { "street": "jl. indah permata", "city": "Jember", "state": "Indonesia", "zip": "130720" }
    },
    {
        "name": "Hilda Wiyanti",
        "age": 19,
        "gpa": 4.0,
        "fullTime": true,
        "registerDate": ISODate("2022-04-15T07:01:05Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler", "Jarkom"],
        "address": { "street": "jl. werkudoro", "city": "Ponorogo", "state": "Indonesia", "zip": "131412" }
    },
    {
        "name": "Emilia Malik",
        "age": 20,
        "gpa": 3.8,
        "fullTime": true,
        "registerDate": ISODate("2022-05-11T10:36:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Arvinda Taradika",
        "age": 19,
        "gpa": 3.9,
        "fullTime": true,
        "registerDate": ISODate("2022-05-21T14:15:39Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mobile"],
        "address": { "street": "jl. kenangan", "city": "Jember", "state": "Indonesia", "zip": "130766" }
    },
    {
        "name": "Rahmad Santoso",
        "age": 21,
        "gpa": 2.5,
        "fullTime": true,
        "registerDate": ISODate("2022-08-30T19:21:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "JarKom"],
        "address": { "street": "jl. jembar", "city": "Jember", "state": "Indonesia", "zip": "130712" }
    },
    {
        "name": "Malika Putri",
        "age": 20,
        "gpa": 3.9,
        "fullTime": true,
        "registerDate": ISODate("2022-06-20T17:15:23Z"),
        "graduationDate": null,
        "courses": ["JarKom", "AdminSis"],
        "address": { "street": "jl. ahmad yani", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Heru Rudi",
        "age": 20,
        "gpa": 2.9,
        "fullTime": false,
        "registerDate": ISODate("2022-07-21T14:15:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Buya Yahya",
        "age": 20,
        "gpa": 4.0,
        "fullTime": true,
        "registerDate": ISODate("2022-06-30T12:15:42Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. merdeka", "city": "Jakarta", "state": "Indonesia", "zip": "130102" }
    },
    {
        "name": "George Salim",
        "age": 20,
        "gpa": 3.9,
        "fullTime": true,
        "registerDate": ISODate("2022-08-21T13:15:45Z"),
        "graduationDate": null,
        "courses": null,
        "address": { "street": "Fight st.", "city": "New York", "state": "Amerika", "zip": "699009" }
    },
    {
        "name": "Dian Cantika",
        "age": 20,
        "gpa": 3.0,
        "fullTime": true,
        "registerDate": ISODate("2022-06-21T14:20:42Z"),
        "graduationDate": null,
        "courses": null,
        "address": { "street": "jl. ahmad yani", "city": "Jember", "state": "Indonesia", "zip": "130808" }
    },
    {
        "name": "Aldi Semanggi",
        "age": 20,
        "gpa": 3.8,
        "fullTime": true,
        "registerDate": ISODate("2022-07-21T13:15:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Yuda Bhayangkara",
        "age": 20,
        "gpa": 3.5,
        "fullTime": true,
        "registerDate": ISODate("2022-06-21T14:15:42Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tentara", "city": "Jember", "state": "Indonesia", "zip": "130719" }
    },
    {
        "name": "Hisyamudin",
        "age": 20,
        "gpa": 4.0,
        "fullTime": true,
        "registerDate": ISODate("2022-07-21T13:15:45Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Muhammad Agus",
        "age": 20,
        "gpa": 2.8,
        "fullTime": false,
        "registerDate": ISODate("2022-06-21T14:15:42Z"),
        "graduationDate": null,
        "courses": ["AdminSis", "Mikrokontroler"],
        "address": { "street": "jl. danau toba", "city": "Jember", "state": "Indonesia", "zip": "130808" }
    },
    {
        "name": "Muhammad Asnawi",
        "age": 19,
        "gpa": 3.7,
        "fullTime": true,
        "registerDate": ISODate("2022-07-21T13:15:45Z"),
        "graduationDate": null,
        "courses": null,
        "address": { "street": "jl. tawangmangu", "city": "Jember", "state": "Indonesia", "zip": "130708" }
    },
    {
        "name": "Bachtiar Hermansyah",
        "age": 20,
        "gpa": 3.6,
        "fullTime": true,
        "registerDate": ISODate("2022-08-20T14:15:42Z"),
        "graduationDate": null,
        "courses": null,
        "address": { "street": "jl. mastrip", "city": "Jember", "state": "Indonesia", "zip": "130806" }
    }
];

// Create a new document in the collection.
db.getCollection('students').insertMany(type2Documents);
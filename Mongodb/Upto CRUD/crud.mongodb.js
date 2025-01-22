//create
use("CrudDb")

// db.createCollection("courses")
// db.courses.insertOne({
//     name:"Harrys Web dev free course",
//     price: 0,
//     assignments: 12,
//     projects: 48
// })

// db.courses.insertMany(
//     [{
//     "course": {
//       "name": "Harrys Web Dev Free Course",
//       "price": 0,
//       "assignments": 12,
//       "projects": 48,
//       "description": "A comprehensive web development course covering front-end and back-end development.",
//       "modules": [
//         {
//           "module_name": "HTML & CSS",
//           "duration_weeks": 4,
//           "topics": [
//             "HTML Basics",
//             "CSS Fundamentals",
//             "Responsive Design"
//           ],
//           "assignments": 3,
//           "projects": 5
//         },
//         {
//           "module_name": "JavaScript Basics",
//           "duration_weeks": 6,
//           "topics": [
//             "Variables and Data Types",
//             "Functions and Scope",
//             "DOM Manipulation"
//           ],
//           "assignments": 4,
//           "projects": 8
//         },
//         {
//           "module_name": "Back-End with Node.js",
//           "duration_weeks": 6,
//           "topics": [
//             "Node.js Basics",
//             "Express.js",
//             "RESTful APIs"
//           ],
//           "assignments": 5,
//           "projects": 10
//         }
//       ]
//     }
//   }])



//Read

// let a = db.courses.find({price: 0})
// console.log(a)
// console.log(a.count())

// let b = db.courses.findOne({price: 0})
// console.log(b)


//Update

db.courses.updateOne({price: 0},{$set:{price: 100}})


db.courses.updateMany({price: 0},{$set:{price: 1000}})


//Delete

db.courses.deleteOne({price:100})
db.courses.deleteMany({price:1000})
/*
 Navicat Premium Data Transfer

 Source Server         : mongodb
 Source Server Type    : MongoDB
 Source Server Version : 40205
 Source Host           : localhost:27017
 Source Schema         : student-message

 Target Server Type    : MongoDB
 Target Server Version : 40205
 File Encoding         : 65001

 Date: 04/06/2020 23:15:23
*/


// ----------------------------
// Collection structure for achievements
// ----------------------------
db.getCollection("achievements").drop();
db.createCollection("achievements");

// ----------------------------
// Documents of achievements
// ----------------------------
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b80cae28f72f305a2e28"),
    Id: "201720182001",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b813ae28f72f305a2e29"),
    Id: "201720182002",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b816ae28f72f305a2e2a"),
    Id: "201720182003",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b81aae28f72f305a2e2b"),
    Id: "201720182004",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b81dae28f72f305a2e2c"),
    Id: "201720182005",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b824ae28f72f305a2e2d"),
    Id: "201720182006",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b827ae28f72f305a2e2e"),
    Id: "201720182007",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b82aae28f72f305a2e2f"),
    Id: "2017201820011",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);
db.getCollection("achievements").insert([ {
    _id: ObjectId("5ed8b82dae28f72f305a2e30"),
    Id: "2017201820015",
    Java: NumberInt("100"),
    JavaEE: NumberInt("90"),
    Node: NumberInt("80"),
    JavaScript: NumberInt("70"),
    Vue: NumberInt("60"),
    C: NumberInt("65"),
    React: NumberInt("65"),
    __v: NumberInt("0")
} ]);

// ----------------------------
// Collection structure for users
// ----------------------------
db.getCollection("users").drop();
db.createCollection("users");

// ----------------------------
// Documents of users
// ----------------------------
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85c2b8899aa17ec765e5b"),
    name: "小红",
    password: "1234",
    Id: 201720182001,
    birthday: "1998.3.1",
    gender: "女",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85c638899aa17ec765e5c"),
    name: "gcm",
    password: "1234",
    Id: 201720182011,
    birthday: "1999.1.15",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85c7f8899aa17ec765e5d"),
    name: "ftl",
    password: "1234",
    Id: 201720182015,
    birthday: "1999.5.11",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85c938899aa17ec765e5e"),
    name: "lz",
    password: "1234",
    Id: 201720182004,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "admin",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85d158899aa17ec765e60"),
    name: "小明",
    password: "1234",
    Id: 201720182002,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85d1e8899aa17ec765e61"),
    name: "小郭",
    password: "1234",
    Id: 201720182003,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85d2e8899aa17ec765e62"),
    name: "小亮",
    password: "1234",
    Id: 201720182005,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85d358899aa17ec765e63"),
    name: "小天",
    password: "1234",
    Id: 201720182006,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);
db.getCollection("users").insert([ {
    _id: ObjectId("5ed85d408899aa17ec765e64"),
    name: "小智",
    password: "1234",
    Id: 201720182007,
    birthday: "1998.3.29",
    gender: "男",
    address: "602",
    phone: 17779960756,
    Identity: "student",
    class: "1721820",
    college: "软件学院",
    "Political_outlook": "团员",
    nation: "汉族",
    __v: NumberInt("0")
} ]);

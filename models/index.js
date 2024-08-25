// นำเข้าโมดูล sequelize และ Sequelize
const sequelize = require("./db");  // โมดูลเชื่อมต่อฐานข้อมูล
const Sequelize = require("sequelize"); // คลาสหลักของ Sequelize
const User = require("./user.model"); // โมเดลของผู้ใช้
const Role = require("./role.model"); // โมเดลของบทบาท

// สร้างอ็อบเจ็กต์ db สำหรับเก็บข้อมูลต่างๆ ที่เกี่ยวข้องกับฐานข้อมูล
const db = {};
db.Sequelize = Sequelize; // เก็บคลาส Sequelize
db.sequelize = sequelize; // เก็บการเชื่อมต่อฐานข้อมูล

db.User = User; // เก็บโมเดลผู้ใช้
db.Role = Role; // เก็บโมเดลบทบาท

// กำหนดความสัมพันธ์ระหว่างโมเดล
db.User.belongsToMany(db.Role, {
    through: "user_roles" // กำหนดตารางเชื่อมโยงชื่อ "user_roles"
});
db.Role.belongsToMany(db.User, {
    through: "user_roles" // กำหนดตารางเชื่อมโยงชื่อ "user_roles"
});

// ส่งออกอ็อบเจ็กต์ db เพื่อให้สามารถใช้ในไฟล์อื่นได้
module.exports = db;

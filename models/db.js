// นำเข้า Sequelize จากไลบรารีที่ใช้สำหรับเชื่อมต่อกับฐานข้อมูล
const { Sequelize } = require("sequelize");

// นำเข้าการตั้งค่าฐานข้อมูลจากไฟล์ config
const dbConfig = require("../config/db.config");

// สร้างอ็อบเจ็กต์ sequelize สำหรับการเชื่อมต่อกับฐานข้อมูล
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,            // โฮสต์ของฐานข้อมูล
  dialect: dbConfig.dialect,      // รูปแบบฐานข้อมูล (เช่น mysql, postgres, ฯลฯ)
  dialectOptions: {
    ssl: { require: true, rejectUnauthorized: false }, // การตั้งค่า SSL สำหรับการเชื่อมต่อที่ปลอดภัย
  },
});

// ฟังก์ชันสำหรับทดสอบการเชื่อมต่อกับฐานข้อมูล
testConnection = async () => {
  // Design Pattern: Factory method
  try {
    await sequelize.authenticate(); // ตรวจสอบการเชื่อมต่อกับฐานข้อมูล
    console.log("การเชื่อมต่อกับฐานข้อมูลสำเร็จแล้ว."); // ข้อความที่แสดงเมื่อการเชื่อมต่อสำเร็จ
  } catch (error) {
    console.error("ไม่สามารถเชื่อมต่อกับฐานข้อมูลได้:", error); // ข้อความที่แสดงเมื่อเกิดข้อผิดพลาดในการเชื่อมต่อ
  }
};

// เรียกใช้ฟังก์ชัน testConnection เพื่อทดสอบการเชื่อมต่อ
testConnection();

// ส่งออกอ็อบเจ็กต์ sequelize เพื่อให้สามารถใช้ในส่วนอื่นของแอปพลิเคชันได้
module.exports = sequelize;

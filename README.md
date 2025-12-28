# OceanStay

## 1. Giới thiệu
**OceanStay** là hệ thống quản lý khách sạn (Hotel Management System) được phát triển nhằm hỗ trợ quản lý đặt phòng, khách hàng, dịch vụ và vận hành nội bộ.  
Hệ thống tích hợp **trợ lý ảo Digital Caregiver** giúp hỗ trợ tra cứu thông tin và trả lời các câu hỏi dựa trên dữ liệu lưu trữ trong hệ thống.

---

## 2. Mục tiêu của dự án
- Số hóa quy trình quản lý khách sạn
- Hỗ trợ nhân viên và khách hàng truy cập thông tin nhanh chóng
- Ứng dụng công nghệ web hiện đại vào hệ thống thực tế
- Phục vụ cho mục đích học tập và đồ án tốt nghiệp

---

## 3. Chức năng chính
- Quản lý người dùng (Admin / Staff / Customer)
- Quản lý phòng (loại phòng, giá, trạng thái)
- Quản lý đặt phòng
- Quản lý dịch vụ khách sạn
- Trợ lý ảo Digital Caregiver:
  - Trả lời câu hỏi dựa trên dữ liệu có sẵn trong database
  - Hỗ trợ tra cứu thông tin nhanh

---

## 4. Công nghệ sử dụng
### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- RESTful API

### Frontend (nếu có)
- ReactJS
- Tailwind CSS

### Công cụ khác
- Git & GitHub
- Postman
- Swagger (API Documentation)

---

## 5. Cấu trúc thư mục
OceanStay/
├── BACKEND/
│ ├── src/
│ │ ├── controllers/
│ │ ├── routes/
│ │ ├── models/
│ │ ├── services/
│ │ └── app.js
│ ├── package.json
│ └── README.md
---

## 6. Hướng dẫn cài đặt và chạy dự án

### 6.1. Yêu cầu môi trường
- Node.js >= 18
- MongoDB
- Git

---

### 6.2. Cài đặt Backend
```bash
cd BACKEND
npm install
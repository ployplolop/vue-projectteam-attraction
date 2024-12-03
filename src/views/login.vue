<template>
    <div class="login-page">
      <div class="login-container">
        <h1>เข้าสู่ระบบ</h1>
        <p>หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับการท่องเที่ยว<br> กรุณาติดต่อเราผ่านแบบฟอร์มด้านล่างนี้</p>
  
        <div class="login-form">
          <form @submit.prevent="handleLogin">
            <div class="form-group">
              <label for="username">ชื่อผู้ใช้:</label>
              <input
                type="text"
                id="username"
                v-model="username"
                placeholder="กรุณากรอกชื่อผู้ใช้"
                required
              />
            </div>
  
            <div class="form-group">
              <label for="password">รหัสผ่าน:</label>
              <input
                type="password"
                id="password"
                v-model="password"
                placeholder="กรุณากรอกรหัสผ่าน"
                required
              />
            </div>
  
            <button type="submit" class="login-button">เข้าสู่ระบบ</button>
          </form>
        </div>
  
        <div class="signup-link">
          <p>ยังไม่มีบัญชี? <a href="#">สมัครสมาชิก</a></p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: "",
        password: "",
      };
    },
    methods: {
      handleLogin() {
        if (this.username && this.password) {
          alert("เข้าสู่ระบบสำเร็จ");
          // ที่นี่สามารถเพิ่มการส่งข้อมูลไปยัง API เพื่อตรวจสอบการเข้าสู่ระบบ
        } else {
          alert("กรุณากรอกข้อมูลให้ครบถ้วน");
        }
      },
    },
  };
  </script>
  
  <style >
  .login-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-image: url('@/assets/วิวเขา.jpg');
    background-size: cover;
    background-position: center;
  }
  
  .login-container {
    background-color: rgba(255, 255, 255, 0.8);
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    width: 100%;
    max-width: 400px;
  }
  
  .login-container h1 {
    font-size: 32px;
    color: #333;
    margin-bottom: 10px;
  }
  
  .login-container p {
    font-size: 18px;
    color: #777;
    margin-bottom: 20px;
  }
  
  .login-form {
    margin-bottom: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  .form-group label {
    display: block;
    font-size: 16px;
    color: #333;
    margin-bottom: 8px;
  }
  
  .form-group input {
    width: 100%;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 10px;
  }
  
  .login-button {
    width: 100%;
    padding: 12px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    cursor: pointer;
  }
  
  .login-button:hover {
    background-color: #45a049;
  }
  
  .signup-link {
    font-size: 16px;
  }
  
  .signup-link a {
    color: #4CAF50;
    text-decoration: none;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  </style>
  
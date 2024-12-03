<template>
  <div class="container">

  <div class="contact-container">
    <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
    <h1>ติดต่อเรา</h1>
    <p>หากคุณมีคำถามหรือข้อสงสัยเกี่ยวกับการท่องเที่ยว กรุณาติดต่อเราผ่านแบบฟอร์มด้านล่างนี้</p>
    <div class="contact-info">
      <div class="info-card">
        <h3>ที่อยู่</h3>
        <p>123 ถนนท่องเที่ยว, กรุงเทพ, ประเทศไทย</p>
      </div>
      <div class="info-card">
        <h3>โทรศัพท์</h3>
        <p>+66 123 456 789</p>
      </div>
      <div class="info-card">
        <h3>อีเมล</h3>
        <p>contact@travel.com</p>
      </div>
      <div class="info-card">
        <h3>แผนที่</h3>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d992233.6942053817!2d99.97363989628013!3d13.723724826940103!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d6032280d61f3%3A0x10100b25de24820!2z4LiB4Lij4Li44LiH4LmA4LiX4Lie4Lih4Lir4Liy4LiZ4LiE4Lij!5e0!3m2!1sth!2sth!4v1732585363795!5m2!1sth!2sth" width="200" height="150" style="border:0;" allowfull screen="x" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  </div>
    <form class="contact-form">
      <label for="name">ชื่อ:</label>
      <input type="text" id="name" placeholder="กรอกชื่อของคุณ" />

      <label for="email">อีเมล:</label>
      <input type="email" id="email" placeholder="กรอกอีเมลของคุณ" />

      <label for="message">ข้อความ:</label>
      <textarea id="message" placeholder="พิมพ์ข้อความของคุณ"></textarea>

      <button type="submit">ส่งข้อความ</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    submitForm() {
      console.log('Form submitted:', this.form);
      alert('ส่งข้อความเรียบร้อยแล้ว!');
      // สามารถเพิ่มการเชื่อมต่อ API ที่นี่เพื่อส่งข้อมูล
    },
  },
};
</script>

<style>
@media (max-width: 768px) {
.container {
  display: grid;
  width: 80%;
  margin: 0 auto; /* Center the container */
}
}

.contact-container {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}

.contact-info {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.info-card {
  background: white;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.contact-form {
  display: flex;
  flex-direction: column;
}

.contact-form-group {
  display: flex;
  flex-direction: column;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 2px;
  text-align: center;
}

.contact-form button {
  padding: 10px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  text-align: center;
  
}

.contact-form button:hover {
  background: #218838;
}
</style>
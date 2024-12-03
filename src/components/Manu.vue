<template >
<header class="p-3 text-bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
        <a href="/" class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
          <svg class="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li><a href="/" class="nav-link px-2 text-white">HOME</a></li>
          <a class="nav-link px-2 text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            TARVLE
          </a>

          
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/north">ภาคเหนือ</a></li>
            <li><a class="dropdown-item" href="#">ภาคใต้</a></li>
            <li><a class="dropdown-item" href="#">ภาคตะวันออก</a></li>
            <li><a class="dropdown-item" href="/South">ภาคตะวันออกเฉียงเหนือ</a></li>
          </ul>

          <a class="nav-link px-2 text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            FOOD
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">ภาคเหนือ</a></li>
            <li><a class="dropdown-item" href="#">ภาคใต้</a></li>
            <li><a class="dropdown-item" href="#">ภาคตะวันออก</a></li>
            <li><a class="dropdown-item" href="#">ภาคตะวันตกเฉียงเหนือ</a></li>
          </ul>

          <li><a href="/video" class="nav-link px-2 text-white">VIDEO</a></li>
          <li><a href="/contact" class="nav-link px-2 text-white">CONTACT</a></li>

        </ul>

        <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
          <input type="search" class="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search">
        </form>

        <div class="text-end">
          <a href="/"><button type="button" class="btn btn-warning">SHARE</button> </a> &nbsp; &nbsp;
          <a href="/login"><button type="button" class="btn btn-outline-light me-2">LOGIN</button></a>
          
        </div>
      </div>
    </div>
  </header>
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
  
</style>

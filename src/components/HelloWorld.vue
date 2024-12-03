<template>
  <div class="travel-page">
    <!-- ส่วนหัว -->
    <header class="hero-section">
      <div class="hero-content">
        <h1>- Explore the Thailand -</h1>
        <p>Discover amazing places and unforgettable experiences</p>
        <button class="cta-button">Plan Your Trip</button>
      </div>
    </header>

    <!-- เนื้อหา -->
    <section class="destination-section">
      <h2>Top Destinations</h2>
      <div class="destination-cards">
        <div class="card" v-for="destination in destinations" :key="destination.id">
          <img :src="destination.image" :alt="destination.name" />
          <h3>{{ destination.name }}</h3>
          <p>{{ destination.description }}</p>
          <button class="view-more">View More</button>
          
        </div>
      </div>
    </section>

    <!-- ส่วนท้าย -->
    <footer class="footer">
      <p>&copy; 2024 Travel with Vue | All rights reserved.</p>
    </footer>
  </div>


  
</template>

<script>
export default {

};
</script>

<style scoped>
/* การตั้งค่าสไตล์ */
.travel-page {
  font-family: 'Arial', sans-serif;
  color: #333;
}

.hero-section {
  background-image: url('@/assets/wat-arun1.jpg');
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero-content p {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.cta-button {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.destination-section {
  padding: 2rem;
  text-align: center;
}

.destination-cards {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  width: 300px;
  text-align: left;
}

.card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card h3 {
  margin: 1rem;
  font-size: 1.25rem;
}

.card p {
  margin: 0 1rem 1rem;
  font-size: 1rem;
}

.view-more {
  margin: 0 1rem 1rem;
  background-color: #007BFF;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 5px;
}

.footer {
  text-align: center;
  padding: 1rem;
  background-color: #f4f4f4;
  margin-top: 2rem;
}
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

</style>

<template>
  <div class="page">

    <!-- HEADER -->
<header class="header">
  
  <div class="logo-container">
    <img class="logo" src="../assets/logo-krem.png" alt="Logo Krem">
  </div>

  <!-- BOTÓN HAMBURGUESA -->
<div :class="['hamburger', { active: menuOpen }]" @click="toggleMenu">
    <span></span>
    <span></span>
    <span></span>
  </div>

  <!-- NAV -->
  <nav :class="['nav', { open: menuOpen }]">
    <a href="#sobre" @click="closeMenu">Sobre Nosotros</a>
    <a href="#menu" @click="closeMenu">Carta</a>
    <a href="#visitanos" @click="closeMenu">Visítanos</a>
  </nav>

</header>

    <!-- HERO -->
    <section class="hero">
      <div class="container hero-content">
        <a href="https://www.google.com/maps/place/Krem+%7C+Cheesecake+Shop+in+Gràcia/@41.4003258,2.1554196,17z/data=!3m2!4b1!5s0x12a4a2963a92452b:0x64cf778d0bb635d6!4m6!3m5!1s0x12a4a301db8a8889:0xf479f6de274b3cda!8m2!3d41.4003258!4d2.1579945!16s%2Fg%2F11xdtrn5j_?entry=ttu&g_ep=EgoyMDI2MDMwNS4wIKXMDSoASAFQAw%3D%3D" target="blanck" class="badge">★ 5,0 en reseñas</a>
        <h1>Ven a disfrutar de un momento dulce en el corazón de Gràcia</h1>
        <p>Tartas de queso elaboradas artesanalmente con mucho amor</p>
        <div class="buttons">
          <a href="#pedido" class="btn-primary">Pedir Ahora</a>
          <a href="#visitanos" class="btn-secondary">Cómo Llegar</a>
        </div>
      </div>
    </section>

    <!-- SOBRE NOSOTROS -->
<section id="sobre" class="section">
  <div class="sobre-section">

<div class="sobre-img">
  <transition name="fade">
    <img
      :key="currentIndex"
      class="sobre-img-content"
      :src="currentImage"
      alt=""
    >
  </transition>
</div>

    <div class="sobre-content">
      <h2>Descubre Krem</h2>
      <p>
        Somos la primera pastelería en Barcelona especializada exclusivamente
        en tartas de queso artesanales. Situados en la Plaça de la Vila de Gràcia, elaboramos cada cheesecake con
        ingredientes frescos y de calidad, ofreciendo desde el clásico estilo neoyorquino hasta creaciones originales
        con sabores únicos. Perfecto para los amantes de los postres, en Krem encontrarás la mejor tarta de queso en
        Barcelona en un ambiente acogedor y moderno.
      </p>
    </div>

  </div>
</section>

    <!-- CARTA -->
    <section id="menu" class="section container">
      <h2 class="menu-h2">Nuestras Tartas</h2>
      <div class="cards">
        <div v-for="item in cheesecakes" :key="item.name" class="card">
          <img src="../assets/img-1.jpg" alt="" class="menu-img">
          <div class="title-price"><h3>{{ item.name }}</h3><strong>{{ item.price }}</strong></div>
          <div class="linea-price"></div>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </section>

    <!-- PEDIDO -->
    <section id="pedido" class="section order">
      <h2>Pide Tu Porción Hoy</h2>
      <p>¿Antojo de cheesecake? Te esperamos.</p>
      <div class="buttons">
        <button class="btn-primary">Pedir a Domicilio</button>
        <button class="btn-secondary">Recoger en Tienda</button>
      </div>
    </section>

    <!-- RESEÑAS 
    <section class="section reviews">
      <h2>Lo Que Dicen Nuestros Clientes</h2>
      <p class="review">“Una de las mejores tartas de queso que hemos probado.”</p>
      <p class="review">“Textura increíble y sabor espectacular. 10/10.”</p>
      <p class="review">“Sin duda nuestro sitio favorito de cheesecake en Barcelona.”</p>
    </section> -->

    <!-- VISÍTANOS 
    <section id="visitanos" class="section">
      <h2>Visítanos</h2>
      <p>Plaça de la Vila de Gràcia, 5 · 08012 Barcelona</p>
      <p>Apertura a las 12:00</p>
      <p>📞 624 69 28 64</p>
      <p class="features">
        ✔ Para llevar <br>
        ✔ Recogida sin entrar <br>
        ✔ A domicilio <br>
        🏳️‍🌈 Espacio amigable con la comunidad LGBTQ+
      </p>
    </section>-->



    <!-- FOOTER -->
    <footer class="footer">
      <p>Krem · Tienda de Tartas de Queso en Gràcia</p>
      <p>Plaça de la Vila de Gràcia, 5 · Barcelona</p>
      <p>© 2026 Krem. Todos los derechos reservados.</p>
    </footer>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue"

const cheesecakes = ref([
  {
    name: 'Clásica',
    description: 'Nuestra receta estrella. Cremosa, suave y perfectamente equilibrada.',
    price: '5.5€'
  },
  {
    name: 'Tiramisú',
    description: 'La combinación perfecta entre tiramisú y cheesecake.',
    price: '5.7€'
  },
  {
    name: 'Lotus',
    description: 'Con galleta caramelizada y topping crujiente Lotus.',
    price: '5.5€'
  },
  {
    name: 'Chocolate',
    description: 'Sabor intenso a chocolate con textura sedosa e irresistible.',
    price: '5.5€'
  },
  {
    name: 'Pistacho',
    description: 'La combinación perfecta entre tiramisú y cheesecake.',
    price: '5.7€'
  },
  {
    name: 'Pastel del mes',
    description: 'La combinación perfecta entre tiramisú y cheesecake.',
    price: '5.7€'
  }
])

const images = [
  new URL("../assets/sobre-1.png", import.meta.url).href,
  new URL("../assets/sobre-2.png", import.meta.url).href,
  new URL("../assets/sobre-3.png", import.meta.url).href,
  new URL("../assets/sobre-4.png", import.meta.url).href,
  new URL("../assets/sobre-5.png", import.meta.url).href,
  new URL("../assets/sobre-6.png", import.meta.url).href,
  new URL("../assets/sobre-7.png", import.meta.url).href
]

const currentIndex = ref(0)

const currentImage = computed(() => images[currentIndex.value])

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.length
  }, 4000)
})

const menuOpen = ref(false)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const closeMenu = () => {
  menuOpen.value = false
}

</script>

<style scoped>

.page {
  font-family: 'Inter', sans-serif;
  background-color: #fffaf6;
  color: #333;
}

.section {
  padding: 80px 50px;
  text-align: center;
}


/* HEADER */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #982c20;
  width: 100%;
  padding: 25px 30px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-sizing: border-box;
}

.logo {
  font-size: 26px;
  font-weight: bold;
  height: 30px;
}

.nav {
  display: flex;
  align-items: center;
}

.nav a {
  margin-left: 30px;
  text-decoration: none;
  color: #e0b1ab;
  font-weight: 900;
  font-family: Poppins;
  font-size: 22px;
}

.nav a:hover{
  color: white;
  transition: 0.3s;
}

/* HERO */
.hero {
  position: relative;
  background: linear-gradient(rgba(152,44,32,1), rgba(152,44,32,0.8)),
              url('https://images.unsplash.com/photo-1542826438-bd32f43d626f') center/cover;
  padding: 0;
  text-align: center;
  align-content: center;
  font-family: Poppins;
  min-height: 600px;
}

.hero-content {
  max-width: 1300px;
  margin: 0 auto;
  padding: 0px;
}

.hero h1 {
  font-size: 70px;
  margin: 20px 0;
  padding: 0px 40px;
  font-family: Poppins;
  font-weight: 900;
  color: rgb(255, 244, 229);
}

.hero p {
  font-size: 28px;
  margin-bottom: 30px;
  padding: 0px 40px;
  font-family: Poppins;
  color: #f3c6c6;
}

.badge {
  display: inline-block;
  background: rgb(255, 174, 0);
  color: #982c20;
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 16px;
  font-family: Poppins;
  font-weight: 900;
  outline: solid 1px rgb(255, 174, 0);
  outline-offset: 5px;
  margin-bottom: 15px;
  cursor: pointer;
}

.badge:hover {
  scale: 108%;
  transition: 0.3s;
}



/* transición */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* CARTAS */

#menu {
  background-color: rgb(255, 244, 229);
  margin: 0 auto;
  justify-content: center;
}

.title-price {
  display: flex;
  justify-content: space-between;
}

.menu-h2 {  
  font-weight: 900;
  padding-bottom: 40px;
  color: #982c20;
}

.menu-img {
  height: 55%;
  width: 55%;
  justify-content: center;
  margin: 0 auto;
  overflow: hidden;
  border-radius: 100px;
}

.linea-price {
  height: 8px;
  background-color: #982c20;
  width: 100%;
  margin: 0px 0px 15px 0px;
}

.cards {
  display: flex;
  flex-wrap: wrap;
  gap: 35px;
  margin-top: 40px;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: center;
}

.card {
  background: rgb(255, 244, 229);
  padding: 25px;
  border-radius: 50px;
  box-shadow: 0px 15px 25px rgba(152,44,32,0.12);
  transition: 0.3s;
  width: 320px;
  height: 320px;
}

.card:hover {
  transform: translateY(-5px);
}

.card h3{
  color: #982c20;
  font-size: 18px;
  font-weight: 400;
  padding-top: 10px;
}

.card strong{
  color: #982c20;
  font-size: 18px;
  font-family: Poppins;
  font-weight: 400;
  padding-top: 10px;
}

.card p{
  font-family: Poppins;
  font-size: 15px;
  padding-top: 10px;
  color: #982c20;
}

/* SOBRE */


#sobre {
  background-color: #f3c6c6;
  margin: 0 auto;

}

.sobre-section {
  max-width: 1500px;
  min-height: 450px;
  display: flex;
  padding: 0px 0px;
  justify-content: space-around;
  margin: 0 auto;
  gap: 50px;
}

.sobre-content {
  margin: 0;
  width: 56%;
  max-height: 550px;
  align-content: center;
  display: space-around;
}

.sobre-img {
  position: relative;
  width: 45%;
  max-height: 550px;
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden; /* Esconder el sobrante */
}

.sobre-img:hover{
  scale: 115%;
  transition: 0.6s;
}

.sobre-img-content {
  position: absolute;
  border-radius: 500px;
  max-height: 450px;
  width: 450px;
  object-fit: cover;
  object-position: center;  
}

#sobre h2{
  font-weight: 900;
  padding-bottom: 40px;
  color: #982c20;
}

#sobre p {
  font-size: 22px;
  color: #982c20;
}


/* RESEÑAS */
.reviews {
  background: #fff0f0;
}

.review {
  max-width: 700px;
  margin: 20px auto;
  font-style: italic;
}

/* PEDIDO */
.order {
  background: #f9e8e8;
}

#pedido h2 {
  font-weight: 900;
  padding-bottom: 20px;
  color: #982c20;
}

/* BOTONES */
.buttons {
  margin-top: 50px;
}


.btn-primary {
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin: 10px;
  background: #982c20;
  color: #f3c6c6;
  font-weight: 900;
  font-size: 18px;
  display: inline-block; /* Necesario para que transform funcione correctamente en elementos inline */
  transition: transform 0.3s ease;
}

.btn-primary:hover {
  background: white;
  color: #982c20;
  transform: scale(1.1); 
  transition: 0.3s;
}

.primary:hover {
  background: white;
  color: #982c20;
  scale: 108%;
  transition: 0.3s;
}

.btn-secondary {
  padding: 12px 28px;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  margin: 10px;
  background: #f3c6c6;
  color: #982c20;
  font-weight: 900;
  font-size: 18px;
  display: inline-block; /* Necesario para que transform funcione correctamente en elementos inline */
  transition: transform 0.3s ease;
}

.btn-secondary:hover {
  background: white;
  transform: scale(1.1); 
  transition: 0.3s;
}

/* FOOTER */
.footer {
  padding: 20px 0;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  font-family: Poppins;
  background-color: #982c20;
  color: #e0b1ab;
}


.hamburger {
  display: none;
  position: relative;
  width: 30px;
  height: 30px;
  cursor: pointer;
  z-index: 2000;
}

.hamburger span {
  position: absolute;
  width: 100%;
  height: 2px;
  background: #f3c6c6;
  border-radius: 0px;
  transition: 0.3s ease;
}

/* líneas */
.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 10px;
}

.hamburger span:nth-child(3) {
  top: 20px;
}

.hamburger.active span:nth-child(1) {
  top: 10px;
  scale: 115%;
  transform: rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  top: 10px;
  scale: 115%;
  transform: rotate(-45deg);
}

@media (max-width: 1250px) {

  .hero h1{
    font-size: 64px;
  }

  .hero p{
    font-size: 23px;
  }

  #sobre p{
    font-size: 20px;
  }
}

@media (max-width: 1100px) {

  .hero h1{
    font-size: 62px;
  }

  .hero p{
    font-size: 23px;
  }

  #sobre p{
    font-size: 20px;
  }
}

@media (max-width: 1000px) {

  .hero h1{
    font-size: 60px;
  }

  .hero p{
    font-size: 23px;
  }

  #sobre p{
    font-size: 20px;
  }
}

@media (max-width: 900px) {

  .hero h1{
    font-size: 50px;
  }

  .hero p{
    font-size: 21px;
  }

  #sobre p{
    font-size: 18px;
  }
}

@media (max-width: 768px) {

  .header {
    padding: 25px 30px;
  }

  .hero h1 {
    font-size: 30px;
  }

  .hero p {
    font-size: 18px;
  }

  .sobre-section{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
  }

  .sobre-content{
    margin: 0;
    width: 100%;
    padding: 0px 0px 50px 0px;
  }

  .sobre-img{
    max-height: 450px;
    min-height: 450px;
    max-width: 450px;
  }

  .sobre-img-content {
    width: 100%;
    height: 100%;
  }

  /* mostrar hamburguesa */
  .hamburger {
    display: flex;
  }

  /* ocultar menu normal */
  .nav {
    display: none;
  }

  /* menu cuando se abre */
  .nav.open {
    display: flex;
    position: absolute;
    top: 100%;
    right: 0;
    background: #982c20;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  .nav a {
    margin: 15px 0;
    font-size: 24px;
  }



#sobre p {
  font-size: 18px;
  color: #982c20;
}

}

</style>
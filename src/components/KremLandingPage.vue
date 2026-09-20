<template>
  <div class="krem-page">

    <!-- =========================
          HEADER
    ========================== -->

    <header
      class="topbar"
      :class="{ scrolled: isScrolled }"
    >
      <div class="container topbar-inner">

        <a href="/" class="logo" :class="{ scrolled: isScrolled }">

          <!-- Sustituir -->
          <img
            src="../assets/logo-krem-new.png"
            alt="Krem"
          >

        </a>

        <div class="topbar-actions"
        :class="{ scrolled: isScrolled }"
>

          <a
            href="#footer"
            class="contact-btn"
          >
            CONTACTA
          </a>

<button
  class="menu-btn"
  :class="{ active: menuOpen }"
  @click="menuOpen = !menuOpen"
  aria-label="Abrir menú"
>
  <span></span>
  <span></span>
  <span></span>
</button>

        </div>

      </div>
    </header>

<div
  class="menu-overlay"
  :class="{ active: menuOpen }"
  @click.self="menuOpen = false"
>

  <aside
    class="menu-panel"
    :class="{ active: menuOpen }"
  >

    <button
      class="menu-close"
      @click="menuOpen = false"
      aria-label="Cerrar menú"
    >
      ✕
    </button>

    <nav class="menu-links">

      <a href="#about" @click="menuOpen = false">
        Sobre Nosotros
      </a>

      <a href="#formats" @click="menuOpen = false">
        Formatos y Sabores
      </a>

      <a href="#base" @click="menuOpen = false">
        Base del Cheesecake
      </a>

            <a href="#footer" @click="menuOpen = false">
        Contacto
      </a>

      <a href="#location" @click="menuOpen = false">
        Localización
      </a>

    </nav>

  </aside>

</div>

    <!-- =========================
              HERO
    ========================== -->

<section
  class="hero"
  @touchstart="handleTouchStart"
  @touchend="handleTouchEnd"
>

  <!-- =========================
       SLIDER DEL HERO
  ========================== -->

  <div class="hero-slider">

    <!-- SLIDE 1 · IMAGEN -->
    <div
      class="hero-slide hero-slide-image"
      :class="{ active: currentSlide === 0 }"
    ></div>

    <!-- SLIDE 2 · VÍDEO -->
    <div
      class="hero-slide hero-slide-video"
      :class="{ active: currentSlide === 1 }"
    >
      <video
        ref="heroVideo"
        src="../assets/cheescake-hero.mp4"
        muted
        loop
        playsinline
        preload="metadata"
      ></video>
    </div>

  </div>

  <div class="hero-overlay"></div>

  <div class="container hero-grid">

        <!-- Texto -->

        <div class="hero-copy">

          <div class="hero-logo">

            <img
              src=""
              alt=""
            >

          </div>

          <h1>RESTAURACIÓ <br>PROFESSIONAL</h1>
          <div class="hero-divider"></div>

          <h2>

            SIGNATURE CHEESCAKES
            <br>
            PARA RESTAURANTES Y HOTELES

          </h2>
          <div class="hero-divider"></div>

          <p>

            Postres que elevan tu carta.
            <br>

            Elaborados artesanalmente en Barcelona
            con ingredientes de alta calidad.

            Consistencia cremosa,
            sabor auténtico
            y presentación impecable.

          </p>

          <a
  class="hero-reviews"
  href="https://www.google.com/maps/search/?api=1&query=Krem+Cheesecake+Barcelona"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Ver reseñas de Krem en Google Maps"
>
  <div class="reviews-stars">
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
    <span>★</span>
  </div>

  <div class="reviews-info">
    <strong>5.0</strong>
    <span>Reseñas de Google</span>
  </div>
</a>

          <div class="hero-features">

            <div class="feature1">

              <img
                src="../assets/Premium.svg"
                alt=""
              >

              <span>

                CHEESCAKES <br> DE AUTOR

              </span>

            </div>

            <div class="feature1">

              <img
                src="../assets/Artesanal.svg"
                alt=""
              >

              <span>

                ELABORACIÓN <br> ARTESANAL

              </span>

            </div>


            <div class="feature1">

              <img
                src="../assets/Ingredientes.svg"
                alt=""
              >

              <span>

                INGREDIENTES
                <br>
                DE CALIDAD

              </span>

            </div>

            <div class="feature1">

              <img
                src="../assets/Localizacion.svg"
                alt=""
              >

              <span>

                HECHO EN
                <br>
                BARCELONA

              </span>

            </div>

          </div>

        </div>

      </div>

      <!-- =========================
           CONTROLES SLIDER
      ========================== -->

      <div class="hero-slider-controls">

        <button
          class="hero-slider-arrow"
          @click="previousSlide"
          aria-label="Slide anterior"
        >
          <
        </button>

        <div class="hero-slider-dots">

          <span
            class="hero-slider-dot"
            :class="{ active: currentSlide === 0 }"
          ></span>

          <span
            class="hero-slider-dot"
            :class="{ active: currentSlide === 1 }"
          ></span>

        </div>

        <button
          class="hero-slider-arrow"
          @click="nextSlide"
          aria-label="Siguiente slide"
        >
          >
        </button>

      </div>

    </section>

    <!-- =========================
          ABOUT
    ========================== -->

    <section
      class="about"
      id="about"
    >

      <div class="container about-grid">
        <div class="about-left">

                  <div class="about-col">

          <h3>

            KREM RESTAURACIÓ <br>
            PROFESSIONAL

          </h3>

          <span>

            by Dolce Investments SL

          </span>

          <div class="line"></div>

          <p>

            Somos la marca de cheesecakes especializada en el canal HORECA. 
             <br> 

            Trabajamos para restaurantes,
            hoteles y cafeterías que buscan
            postres de calidad superior,
            consistentes, listos para servir
            y que aportan valor
            a su propuesta gastronómica.

          </p>



        </div>



        </div>

        <div class="about-col professionals">

          <h3>

            CREADA PARA <br>
            PROFESIONALES

          </h3>
          <div class="line"></div>

          <ul>

            <li class="about-li-2"><img class="about-img" src="../assets/Restaurante.svg" alt="">RESTAURANTES</li>

            <li class="about-li-2"><img class="about-img" src="../assets/Hoteles.svg" alt="">HOTELES</li>

            <li class="about-li-2"><img class="about-img" src="../assets/Cafe.svg" alt="">CAFETERÍAS</li>

            <li class="about-li-2"><img class="about-img" src="../assets/Catering.svg" alt="">CATERING & EVENTOS</li>

          </ul>

        </div>

      </div>

    </section>

    <!-- =========================
      FORMATOS + SABORES
========================= -->

<section id="formats" class="formats">

  <div class="container formats-grid">

    <!-- IZQUIERDA -->

    <div class="formats-left">

      <h2>FORMATOS DISPONIBLES</h2>

      <div class="line"></div>

      <div class="formats-cards">

        <!-- ORIGINAL -->

        <article class="format-card">

          <img
            src="../assets/FormatoOriginal.jpg"
            alt=""
          >

          <div>

            <h3>FORMATO ORIGINAL</h3>

            <ul>

              <li>· Ø 24 cm</li>

              <li>· Sugerido 10 porciones</li>

              <li>· Con obdin base de galleta</li>

              <li>· Ideal para carta de postres y celebraciones</li>

            </ul>

          </div>

        </article>

        <!-- MENU -->

        <article class="format-card">

          <img
            src="../assets/FormatoMenu.jpg"
            alt=""
          >

          <div>

            <h3>FORMATO MENÚ</h3>

            <ul>

              <li>· Ø 19 cm</li>

              <li>· Sin base de galleta</li>

              <li>· 3 tartas por caja</li>

              <li>· Sugerido 36 porciones</li>

              <li>· Congelada para almacenar</li>

              <li>· Ideal para carta de Menú</li>

            </ul>

          </div>

        </article>

      </div>

    </div>

          <div class="line2"></div>

    <!-- DERECHA -->

    <div class="flavours">

      <h2>SABORES</h2>

      <div class="line"></div>

      <div class="flavours-grid">

        <article class="flavour">

          <img src="../assets/Classic.jpg">
            <div class="flavour-text">          
              <h3>CLASSIC</h3>
              <p>
              El equilibrio perfecto entre
              cremosidad y sabor.
              </p>
            </div>

        </article>

        <article class="flavour">

          <img src="../assets/Lotus-DulceLeche.jpg">
            <div class="flavour-text">          
              <h3>LOTUS</h3>
              <p>
              Suave, especiado
              y absolutamente adictivo.
              </p>
            </div>

        </article>

                <article class="flavour">

          <img src="../assets/Lotus-DulceLeche.jpg">
            <div class="flavour-text">          
              <h3>DULCE DE LECHE</h3>
              <p>
              Cremoso, caramelizado y deliciosamente irresistible.
              </p>
            </div>

        </article>

        <article class="flavour">

          <img src="../assets/Chocolate.jpg">
            <div class="flavour-text">          
              <h3>XOCOLATA</h3>
               <p>
               Intenso, cremoso
               y con el punto justo
               de dulzor.
            </p>
          </div>

        </article>

      </div>

    </div>

  </div>

</section>

<!-- ==========================================
     CON O SIN BASE DE GALLETA
=========================================== -->

<section id="base" class="base-section">

    <div class="container">

        <h2>CON O SIN BASE DE GALLETA</h2>

        <div class="title-line"></div>

        <div class="base-grid">

            <article class="base-card">

                <img
                    src="../assets/ConBaseGalleta.svg"
                    alt="Con base"
                >

                <h3>CON BASE</h3>

                <p>
                    Base de galleta crujiente que
                    aporta textura y contraste.
                </p>

            </article>

            <article class="base-card">

                <img
                    src="../assets/SinBaseGalleta.svg"
                    alt="Sin base"
                >

                <h3>SIN BASE</h3>

                <p>
                    Más ligera, pura cremosidad
                    en cada bocado.
                </p>

            </article>

        </div>

    </div>

</section>

<!-- ==========================================
     FRANJA CARACTERÍSTICAS
=========================================== -->

<section class="features">

    <div class="container features-grid">

        <article class="feature">

            <img src="../assets/Conservacion.svg">

            <h3>CONSERVACIÓN</h3>

            <p>
                Conservar refrigerado
                (0-5ºC). <br>
                Vida útil: 7 días.
            </p>

        </article>

        <article class="feature">

            <img src="../assets/ListoServir.svg">

            <h3>LISTO PARA SERVIR</h3>

            <p>
                Producto fresco,
                listo para disfrutar
                sin preparaciones.
            </p>

        </article>

        <article class="feature">

            <img src="../assets/Entrega.svg">

            <h3>ENTREGA EN BARCELONA</h3>

            <p>
                Entregas programadas
                según tus necesidades. <br>
                Zonas y días establecidos.
            </p>

        </article>

        <article class="feature">

            <img src="../assets/Packaging.svg">

            <h3>PACKAGING PROFESIONAL</h3>

            <p>
                Presentación cuidada,
                práctica y segura
                para el transporte.
            </p>

        </article>

    </div>

</section>


<section class="clientes">
  <div class="container">
      <h2>NUESTROS CLIENTES</h2>
              <div class="title-line"></div>

  <div class="clientes-img">
    <img src="../assets/(logocliente).png" alt="" class="cliente-img">
    <img src="../assets/(logocliente).png" alt="" class="cliente-img">
    <img src="../assets/(logocliente).png" alt="" class="cliente-img">
    <img src="../assets/(logocliente).png" alt="" class="cliente-img">
  </div>
  </div>

</section>
<!--=========================================
FOOTER
==========================================-->

<footer id="footer" class="footer">

    <div class="container footer-grid">

        <!-- IZQUIERDA -->

        <div class="footer-about">

            <h2>AGENDA UNA DEGUSTACIÓN PROFESIONAL</h2>

            <p>
                Queremos ser tu aliado en la mesa.
                Contáctanos y descubre cómo Krem
                puede formar parte de tu carta.
            </p>

        </div>





        <!-- CENTRO -->

        <div class="footer-contact">

            <a href="tel:+34611123456">

            <img src="../assets/Telefono.svg">

                <span>+34 611 123 456</span>

            </a>

            <a href="mailto:horeca@kremcheesecake.com">

            <img src="../assets/Email.svg">

                <span>krem@krembcn.com</span>

            </a>

            <a
                href="https://kremcheesecake.com"
                target="_blank"
            >

            <img src="../assets/Web.svg">

                <span>kremcheesecake.com</span>

            </a>

            <a
                href="#"
                target="_blank"
            >

            <img src="../assets/Instagram.svg">

                <span>@wearekrem</span>

            </a>

        </div>





        <!-- DERECHA -->

        <div class="footer-signature">

            <p>

                Gracias por confiar
                <br>
                en lo artesanal.

            </p>

        </div>

    </div>

</footer>

<!-- ==========================================
     LOCALIZACIÓN
========================================== -->

<section id="location" class="location">

  <div class="container location-grid">

    <!-- INFORMACIÓN -->
    <div class="location-info">

      <h2>LOCALIZACIÓN</h2>

      <div class="line"></div>

      <p class="location-intro">
        Estamos en el corazón de Gràcia, Barcelona.
        Ven a conocernos o ponte en contacto con nosotros
        para descubrir todo lo que Krem puede ofrecerte.
      </p>

      <div class="location-address">

        <div>
          <span>ENCUÉNTRANOS EN</span>
          <p>
            Plaça de la Vila de Gràcia, 5<br>
            Gràcia, 08012 Barcelona
          </p>
        </div>

      </div>

<a class="location-button" href="https://www.google.com/maps/search/?api=1&query=Krem+Cheesecake+Barcelona" target="_blank" rel="noopener noreferrer" > CÓMO LLEGAR </a>

    </div>


    <!-- GOOGLE MAPS -->
    <div class="location-map">

<iframe src="https://www.google.com/maps?q=Krem+Cheesecake+Barcelona&output=embed" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Krem Cheesecake Barcelona" ></iframe>

    </div>

  </div>

</section>

<div class="footer2">
  <div class="empresa">
    <p>KREM by <br>DOLCE INVESTMENTS SL</p>
  <P>© 2026 KREM. Todos los derechos reservados.</P>
  </div>
  <div class="legal">
    <router-link to="/legal">
      Aviso Legal y <br> Política de Privacidad
    </router-link>

    <router-link to="/legal">
      Política de Cookies
    </router-link>
  </div>

</div>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

const currentSlide = ref(0)
const heroVideo = ref(null)

const touchStartX = ref(0)
const touchEndX = ref(0)

// Intervalo automático del slider
let sliderInterval = null

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

/* =========================
   SLIDER
========================= */

const goToSlide = (index) => {
  currentSlide.value = index

  // Si entramos en el vídeo, lo reproducimos desde el principio
  if (index === 1 && heroVideo.value) {
    heroVideo.value.currentTime = 0
    heroVideo.value.play().catch(() => {})
  }

  // Si volvemos a la imagen, pausamos el vídeo
  if (index === 0 && heroVideo.value) {
    heroVideo.value.pause()
  }

  // Reiniciamos los 15 segundos cada vez que cambiamos de slide
  restartSliderInterval()
}

const nextSlide = () => {
  goToSlide((currentSlide.value + 1) % 2)
}

const previousSlide = () => {
  goToSlide((currentSlide.value - 1 + 2) % 2)
}


/* =========================
   CAMBIO AUTOMÁTICO
   CADA 15 SEGUNDOS
========================= */

const startSliderInterval = () => {

  sliderInterval = setInterval(() => {

    const nextIndex = (currentSlide.value + 1) % 2

    currentSlide.value = nextIndex

    // Si entramos en el vídeo, lo reproducimos desde el principio
    if (nextIndex === 1 && heroVideo.value) {
      heroVideo.value.currentTime = 0
      heroVideo.value.play().catch(() => {})
    }

    // Si volvemos a la imagen, pausamos el vídeo
    if (nextIndex === 0 && heroVideo.value) {
      heroVideo.value.pause()
    }

  }, 15000)
}


const restartSliderInterval = () => {

  clearInterval(sliderInterval)

  startSliderInterval()

}


/* =========================
   SWIPE EN MÓVIL
========================= */

const handleTouchStart = (event) => {
  touchStartX.value = event.changedTouches[0].screenX
}


const handleTouchEnd = (event) => {

  touchEndX.value = event.changedTouches[0].screenX

  const distance = touchEndX.value - touchStartX.value

  // Evitamos cambiar con movimientos demasiado pequeños
  if (Math.abs(distance) < 50) return

  // Deslizar hacia la izquierda
  if (distance < 0) {
    nextSlide()
  }

  // Deslizar hacia la derecha
  else {
    previousSlide()
  }

}


/* =========================
   MOUNT
========================= */

onMounted(() => {

  window.addEventListener("scroll", handleScroll)

  // Iniciamos el cambio automático
  // después de 15 segundos
  startSliderInterval()

})


/* =========================
   UNMOUNT
========================= */

onUnmounted(() => {

  window.removeEventListener("scroll", handleScroll)

  // Limpiamos el intervalo para evitar
  // que siga ejecutándose al salir del componente
  clearInterval(sliderInterval)

})
</script>

<style scoped>

/*==================================================
 VARIABLES
==================================================*/

:root{

  --black:#0A0A0A;
  --cream:#F4ECE3;
  --terracotta:#B66C58;
  --text:#262626;
  --white:#FFFFFF;

  --container:1380px;

}

/*==================================================
 RESET
==================================================*/

*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}

html{

  scroll-behavior:smooth;

}

body{

  font-family:Inter,sans-serif;
  background:var(--cream);
  color:var(--text);

}

img{

  display:block;
  max-width:100%;

}

a{

  text-decoration:none;
  color:inherit;

}

button{

  font-family:inherit;
  cursor:pointer;
}

.krem-page{

  overflow:hidden;

}

.container{

  width:min(var(--container),92%);
  margin:auto;

}


/*==================================================
 HEADER
==================================================*/

.topbar{

  position:fixed;
  top:0;
  left:0;

  width:100%;
  z-index:999;

  transition:.35s;

  padding: 0px 60px;

}

.topbar.scrolled{

  backdrop-filter:blur(12px);

  background:rgba(81, 0, 0, 0.4);

  padding: 0px 60px 30px;

}

.topbar-inner{

  display:flex;
  align-items:center;
  justify-content:space-between;

}

.logo{

  width:175px;
  transition: 0.8s ;


}

.logo.scrolled {
  width: 150px;
}

.logo img{

  width:100%;

}

.topbar-actions{

  display:flex;
  align-items:center;
  gap:20px;
  padding-bottom: 0px;
  transition: 0.5s ease-in-out;

}

.topbar-actions.scrolled {
  padding-top: 25px;
}


.contact-btn{

  color:#eebfb9;

  text-transform:uppercase;

  letter-spacing:2px;

  font-size: 16px;

  outline: 1px solid #eebfb9;

  padding: 12px 20px;

  border-radius:200px;
  transition: .3s ease-in-out;

}

.contact-btn:hover{
  background-color: #973e30;
}

.menu-btn{

  width:48px;
  height:48px;

  border-radius:200px;

  background:#eebfb9;
  border:none;

  display:flex;
  flex-direction:column;
  justify-content:center; /* Centra verticalmente */
  align-items:center;     /* Centra horizontalmente */
  gap:4px;

  transition: 0.3s ease-in-out;

}

.menu-btn:hover{
  background-color: white;

}

.menu-btn span{

  display:block;

  width:20px;
  height:3px;

  background:#973e30;

}

.menu-overlay{

    position:fixed;
    inset:0;

    background:rgba(0,0,0,.28);

    opacity:0;
    visibility:hidden;

    transition:.35s;

    z-index:9998;

}

.menu-overlay.active{

    opacity:1;
    visibility:visible;

}

.menu-panel{

    position:absolute;

    top:0;
    right:0;

    width:420px;
    max-width:90vw;
    height:100%;

  background:#973e30;

    transform:translateX(100%);

    transition:.4s cubic-bezier(.22,.61,.36,1);

    display:flex;
    flex-direction:column;

    padding:40px;

}

.menu-panel.active{

    transform:translateX(0);

}

.menu-close{

    align-self:flex-end;

    border:none;
    background:none;

    cursor:pointer;

    font-size:34px;

    color:#eebfb9;

    transition:.25s;

}

.menu-close:hover{

    transform:rotate(90deg);

}

.menu-links{

    margin-top:70px;

    display:flex;
    flex-direction:column;

    gap:32px;

}

.menu-links a{

    text-decoration:none;

    font-size:24px;
    font-weight: 600;

    color:#eebfb9;

    transition:.25s;

}

.menu-links a:hover{

    transform:translateX(8px);

}


/*==================================================
 HERO
==================================================*/

.hero{

  position:relative;

  height:100vh;

  background:var(--black);

  overflow:hidden;

  padding:0 60px;

  touch-action:pan-y;

}

/*==================================================
 HERO SLIDER
==================================================*/

.hero-slider{

  position:absolute;

  inset:0;

  z-index:1;

  overflow:hidden;

}


/* Cada slide */

.hero-slide{

  position:absolute;

  inset:0;

  width:100%;
  height:100%;

  opacity:0;

  transition:opacity .8s ease-in-out;

  pointer-events:none;

}


/* Slide activo */

.hero-slide.active{

  opacity:1;

}


/* Imagen */

.hero-slide-image{

  background-image:url('../assets/Krem-Hero-NEW.jpg');

  background-size:cover;

  background-position:center;

  background-repeat:no-repeat;

}


/* Vídeo */

.hero-slide-video{

  background:#000;

}

.hero-slide-video::after {

  content: "";

  position: absolute;

  inset: 0;

  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, .92) 0%,
    rgba(0, 0, 0, .85) 15%,
    rgba(0, 0, 0, .55) 30%,
    rgba(0, 0, 0, .2) 45%,
    rgba(0, 0, 0, 0) 60%
  );

  pointer-events: none;

}


.hero-slide-video video{

  width:100%;

  height:100%;

  object-fit:cover;

  object-position:center;

  display:block;

}


/*==================================================
 CONTROLES DEL SLIDER
==================================================*/

.hero-slider-controls{

  position:absolute;

  right:60px;

  bottom:60px;

  z-index:10;

  display:flex;

  align-items:center;

  gap:18px;

}


/* Flechas */

.hero-slider-arrow{

  padding: 12px 16px 10px 16px;

  border:1px solid rgba(255,255,255,.65);

  border-radius:50%;

  background:rgba(0,0,0,.15);

  color:#fff;

  display:flex;

  align-items:center;

  justify-content:center;

  font-size:22px;

  line-height:1;

  transition:.3s ease;

  backdrop-filter:blur(4px);

}


.hero-slider-arrow:hover{

  background:#973e30;

  border-color:#973e30;

}


/* Dos círculos centrales */

.hero-slider-dots{

  display:flex;

  align-items:center;

  gap:8px;

}


.hero-slider-dot{

  width:9px;

  height:9px;

  border-radius:50%;

  border:1px solid rgba(255,255,255,.8);

  background:transparent;

  transition:.3s ease;

}


/* Círculo correspondiente al slide activo */

.hero-slider-dot.active{

  background:#eebfb9;

  border-color:#eebfb9;

}

.hero-overlay{

  position:absolute;
  inset:0;
  z-index:2;

}

.hero-grid{

  position:relative;
  z-index:5;

  min-height:100vh;

  display:grid;

  grid-template-columns:47% 53%;

}

.hero-copy{

  display:flex;
  flex-direction:column;
  justify-content:center;

  color:white;
  padding-bottom: 30px;

}



.hero-copy h1{

  font-size:36px;

  line-height: 1.1;

  font-weight:500;

  margin-bottom:20px;

  color: #b44f3f;

  letter-spacing: 1px;
  font-family: "PT Serif", serif;
  font-weight: 700;
}

.hero-divider{

  width:90px;
  height:1px;

  background: #974134;

  margin-bottom:20px;

}

.hero-copy h2{

  color: #ffffff;

  font-size:24px;

  font-weight:400;

  margin-bottom:20px;

  line-height: 1.3;

  letter-spacing: 1px;

}

.hero-copy p{

  width:420px;

  color:rgba(255, 255, 255, 0.8);

  line-height:1.7;

  font-size:14px;
  margin-bottom:20px;


}

.hero-reviews {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  width: max-content;
  color: #ffffff;
  transition: .3s ease-in-out;
  border: solid 1px #973e30;
  padding: 8px 12px;
  border-radius: 50px;
}

.hero-reviews:hover {
  background-color: #973e30;
}

.reviews-stars {
  display: flex;
  gap: px;
  color: #f4b942;
  font-size: 20px;
  line-height: 1;
  align-items: center;
  position: relative;
  bottom: 1px;
}

.reviews-info {
  display: flex;
  gap: 10px;
  line-height: 1;
  align-items: center;
  position: relative;
  top: 1px;
}

.reviews-info strong {
  font-size: 14px;
  font-weight: 600;
}

.reviews-info span {
  font-size: 12px;
  color: rgba(255, 255, 255, .75);
  letter-spacing: .5px;
}

.hero-features{

  display: flex; 

  gap:22px;

  margin-top: 125px;

  margin-left: 0;

  position: absolute;

  bottom: 60px;

}

.feature1{
  color: #eebfb9;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  line-height: 1;
  font-weight: 500;

}

.feature1 img{

  width: 30px;
  height: 40px;
  object-fit: contain;
  margin: 0 auto 8px;
  display: block;

}

.feature1 span{

  display: block;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: 1px;
  color:rgba(255, 255, 255, 0.8);

}

.hero-image{

  position:relative;

}

/*==================================================
 ABOUT
==================================================*/

.about{

  background-color: #f8eeec;


}

.about-grid{

    display:grid;
    grid-template-columns:1.5fr 1fr;
}



.about-col{
  padding-left: 60px;
  padding-right: 60px;
  padding-bottom: 60px;
}

.about-col h3{

  font-family:"Cormorant Garamond",serif;

  font-size: 24px;

  font-family: Poppins;
  font-weight: 600;

  color: #b44f3f;
  padding: 60px 0px 0px 0px;

}

.about-col p {
  max-width: 650px;
}

.about-col span{

  display:block;
  font-weight: 400;
  font-size: 20px;
  max-width: 500px;

}

.line{

  width:80px;
  height:1px;

  background: #b44f3f;

  margin-bottom:20px;
  margin-top: 20px;

}

.line2{

  width:100%;
  height:1px;

  background: #b44f3f;

  margin:0px 40px;

  display: none;

}

.line-vertical{

  width:1px;

  background:#b44f3f;

  opacity:.3;

  margin-top: 60px;

  margin-right: 60px;
  margin-bottom: 60px;

}

.about-col p{

  line-height:2;

}

.signature{

  margin-top:45px;

  font-style:italic;

  color: #b44f3f;

  font-size: 24px;

  font-family: "Oooh Baby", cursive;
  font-weight: 600;
  font-style: normal;

  letter-spacing: 0.8px;

}

.about-col ul{

  list-style:none;
  display: grid;
  grid-template-columns:repeat(2,1fr);

}

.about-col li{

  padding:14px 0;
  font-size: 16px;
  display: flex;
  gap: 10px;
  

}

.about-li-2 {
  color: #b44f3f;
  line-height: 2.5;
}

.about-img {
  width: 23px;
}

.check {
  color: #b44f3f;
}

.professionals{

  background:#f6dede;

  height: 100%;

  padding:60px;

padding-top: 0px;


}

/*==================================================
FORMATOS
==================================================*/

.formats{

    background:white;

    padding:60px 0;

}

.formats-grid{

    display:grid;

    grid-template-columns:1fr 1.5fr;

}

.formats-left{

    padding: 0px 60px;

    border-right:1px solid rgba(176,55,36,.25);

}

.flavours{

  padding: 0px 60px;
  

}

.formats h2{

    font-size:24px;

    color:#b44f3f;

    font-weight:600;

    margin-bottom:20px;

}

.formats-cards{

    display:grid;


    gap: 40px;

    margin-top:40px;

}

.format-card{

    display:flex;

    gap:20px;

    align-items:flex-start;

}

.format-card img{

    width:160px;

    flex-shrink:0;

}

.format-card h3{


    font-size:16px;
    font-weight: 600;
    margin-bottom:12px;

}

.format-card li{

    font-size:14px;

    line-height:1.8;

    color:#333;

}

.flavours-grid{

    display:grid;

    grid-template-columns:repeat(4,1fr);

    gap:25px;

  margin-top: 80px;

}

.flavour{

    text-align:center;

}

.flavour img{

    width:140px;

    margin:auto;

}

.flavour h3{

    margin-top: 16px;

    font-size:16px;
    font-weight: 600;

}

.flavour p{

    margin-top:12px;

    font-size:14px;

    line-height:1.6;

    color:#333;

}

/*=========================================
BASE GALLETA
=========================================*/

.base-section{

  background-color: #f8eeec;

    padding:70px 0 90px;


}

.base-section h2{

    text-align:center;

    color:#b44f3f;

    font-size:24px;

    font-weight:600;

}

.title-line{

    width:90px;

    height:2px;

    background:#c78574;

    margin:18px auto 55px;

}

.base-grid{

    display:grid;

    grid-template-columns:repeat(2,1fr);

    gap:60px;

  padding: 0px 60px;
  max-width: 1200px;
  margin: 0 auto;
}

.base-card{

    text-align:center;

}

.base-card img{

    width:135px;

    margin:auto;

}

.base-card h3{

    margin-top:22px;

    color:black;

    font-size:16px;
    font-weight: 600;

}

.base-card p{

  font-size: 14px;
  margin: 0 auto;
    margin-top:12px;

    color:#333;

    line-height:1.7;

    max-width: 300px;



}

/*=========================================
FEATURES
=========================================*/

.features{

    background:#b44f3f;

    color:white;

    padding:60px 0;

}

.features-grid{

    display:grid;

grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap:40px;

    padding: 0px 60px;

}

.feature{

    text-align:center;
    justify-content: center;

}

.feature img{

    width:45px;

    height:45px;

    margin:0 auto;

    margin-bottom:20px;

    opacity:.95;

}

.feature h3{

    font-size:18px;

    margin-bottom:15px;

    font-weight:600;
    color: #f8eeec;

}

.feature p{

    line-height:1.5;

    font-size:14px;
    color: #f8eeec;
    opacity: .8;

    font-weight: 400;
    max-width: 250px;
    margin: 0 auto;


}

.feature span{

    font-size:14px;
    color: #f8eeec;
    opacity: .8;
    font-weight: 400;

}

/*=========================================
CLIENTES
=========================================*/

.clientes {
  background-color: #f8eeec;

  padding: 60px;
}

.clientes h2 {
  color:#b44f3f;
  text-align: center;

  font-size:24px;

  font-weight:600;

  margin-bottom: 20px;
}

.clientes-img {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  gap: 30px;
  flex-wrap: wrap;
}

.cliente-img {
  opacity: 0.3;
  height: 200px;
  min-width: 200px;
  margin: 0 auto
}

/*=========================================
FOOTER
=========================================*/

.footer{

    background:#fffaf8;

    padding: 60px;


}

.footer-grid{

    display:grid;

    grid-template-columns:1.5fr 1fr 1fr;

    align-items:center;


}

.footer-about{

    padding-right:60px;

}

.footer-contact{

    border-left:1px solid rgba(176,55,36,.20);


    padding:0 60px;

}

.footer-signature{

    display:flex;
    padding-left: 60px;

}

.footer h2{

    color:#b44f3f;

    font-size:24px;

    font-weight:600;

    margin-bottom: 20px;
}

.footer-about p{

    color:#555;

    line-height:1.5;
    font-size: 16px;

  max-width: 500px;
}

.footer-contact a{

    display:flex;

    align-items:center;

    gap:16px;

    margin-bottom:12px;

    color:#333;

    transition:.25s;

    font-size: 16px;
    font-weight: 500;

}

.footer-contact a:hover{

    color:#b44f3f;

}

.footer-contact i{

    width:22px;

    color:#b44f3f;

    font-size:18px;

}

.footer-signature p{

  font-style:italic;

  color: #b44f3f;

  font-size: 24px;

  font-family: "Petit Formal Script";
  font-weight: 600;
  font-size: 18px;


  text-align: left;

}

.footer img {
  width: 20px;
}

.footer2 {
  background-color: #b44f3f;
  color: #eebfb9;
  padding: 30px;
  display: grid;
  grid-template-columns:repeat(2,1fr);
  font-size: 12px;
  gap: 30px;
}

.legal {
  display: flex;
  flex-direction: column;
  text-align: right;
}

.footer2 a:hover{
  color: white;
  transition: .3s ease-in-out;
}

/*==================================================
 LOCALIZACIÓN
==================================================*/

.location{

  background:#f8eeec;

  padding:80px 0;

}


.location-grid{

  display:grid;

  grid-template-columns:0.8fr 1.2fr;

  gap:70px;

  align-items:stretch;

  padding-right:60px;

}



.location-info{

  display:flex;

  flex-direction:column;

  justify-content:center;

  padding:20px 40px 20px 60px;

}


.location-info h2{

  color:#b44f3f;

  font-size:24px;

  font-weight:600;

  margin-bottom:20px;

}


.location-info .line{

  width:80px;

  height:1px;

  background:#b03724;

  margin:0 0 30px 0;

}


.location-intro{

  color:#555;

  font-size:16px;

  line-height:1.7;

  max-width:450px;

  margin-bottom:40px;

}


.location-address{

  display:flex;

  align-items:flex-start;

  gap:18px;

  margin-bottom:35px;

}


.location-address img{

  width:28px;

  height:32px;

  object-fit:contain;

  margin-top:2px;

}


.location-address span{

  display:block;

  color:#b44f3f;

  font-size:12px;

  font-weight:600;

  letter-spacing:1.5px;

  margin-bottom:8px;

}


.location-address p{

  color:#333;

  font-size:16px;

  line-height:1.6;

}


.location-button{

  display:inline-flex;

  align-items:center;

  justify-content:center;

  width:max-content;

  padding:12px 22px;

  border:1px solid #b44f3f;

  border-radius:200px;

  color:#b44f3f;

  font-size:13px;

  font-weight:600;

  letter-spacing:1px;

  transition:.3s ease-in-out;

}


.location-button:hover{

  background:#973e30;

  color:#f8eeec;

}


.location-map{

  min-height:450px;

  overflow:hidden;

}


.location-map iframe{

  display:block;

  width:100%;

  height:100%;

  min-height:450px;

}

/*==================================================
 RESPONSIVE
==================================================*/

@media(max-width:1400px) {

  .hero-overlay{

  position:absolute;
  inset:0;

  background:linear-gradient(
      90deg,
      rgba(0,0,0, 1) 0%,
      rgba(0,0,0,.8) 20%,
      rgba(0,0,0,.4) 40%,
      rgba(0,0,0, 0) 60%,
      rgba(0,0,0, 0) 100%
  );

  z-index:2;

}

.hero-slide-video::after {


  display: none;
}

.about-col p{
  max-width: 400px;
}

.about-col ul{

  list-style:none;
  display: grid;
  grid-template-columns:repeat(1,1fr);

}

.container.formats-grid{
  grid-template-columns: 1fr 1fr;
}

.formats-cards{

  display:flex;
  flex-wrap: wrap;

}

.flavours-grid{

  margin-top: 40px;
  display:flex;
  flex-wrap: wrap;

}

.flavour {

    display:flex;

    gap:20px;

    align-items:flex-start;
}

.flavour-text {
  text-align: left;
}
}

@media(max-width:1200px){

.hero-grid{

grid-template-columns:1fr;

}

.hero-image{

height:55vh;

}

.hero-image img{

position:relative;

width:100%;

right:auto;

}

  .hero-overlay{

  position:absolute;
  inset:0;

  background:linear-gradient(
      90deg,
      rgba(0,0,0, 1) 0%,
      rgba(0,0,0,.8) 20%,
      rgba(0,0,0,.6) 40%,
      rgba(0,0,0,.1) 60%,
      rgba(0,0,0, 0) 100%
  );

  z-index:2;

}



.features-grid {
  grid-template-columns: repeat(2, 1fr); /* Dos columnas del mismo ancho */
  grid-template-rows: repeat(2, auto);}

}

@media(max-width:900px) {

  .hero-overlay{

  position:absolute;
  inset:0;

  background:linear-gradient(
      90deg,
      rgba(0,0,0, .9) 0%,
      rgba(0,0,0,.8) 20%,
      rgba(0,0,0,.6) 40%,
      rgba(0,0,0,.4) 60%,
      rgba(0,0,0, 0) 100%
  );

  z-index:2;

}

.about-col p {
  max-width: 500px;
}

.about-grid{

grid-template-columns:1fr;

}

.container.formats-grid{
  display: flex;
  flex-wrap: wrap;
}

.formats-left {
  width: 100%;
}

.formats-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 60px;
}

.format-card {
  display: flex;
  margin: 0 auto;  
}

.formats img{
  margin: 0 auto;  
}

.flavours-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.flavour {
  flex-direction: column;
  gap: 0;
}
.flavour-text {
    text-align: center;

}

.footer-grid{

    grid-template-columns:1fr;

    gap:55px;

}

.footer-about{

    padding-right:0;

}

.footer-contact{

    border-left:none;
    border-right:none;

    border-top:1px solid rgba(176,55,36,.20);
    border-bottom:1px solid rgba(176,55,36,.20);

    padding:40px 0;

}

.footer-signature{

    justify-content:center;
    padding: 0;


}

.footer-signature p{

  text-align:center;

}

.location{
  padding: 60px 0px;
}

.location-grid{

  grid-template-columns:1fr;

  gap:60px;
  padding-right:0;


}


.location-info{

  padding:0px 60px;

}


.location-map{

  min-height:400px;

}


.location-map iframe{

  min-height:400px;

}

}

@media(max-width:768px){

.logo {
  width: 160px;
}

.topbar {
  padding: 0px 40px;
}

.topbar.scrolled {
  padding: 0px 40px 30px;
}

.container.topbar-inner {
  height: auto;
}

.hero {
  padding: 40px;

}

.hero-slide-image{

  background-image:url('../assets/Krem-Hero-NEW-responsive.jpg');

}

.hero-slider-controls{
  display:none;
}

.hero-copy h1{

font-size:36px;

}


.hero-copy h2 {
  font-size: 20px
}

.hero-copy p{

  font-size: 14px;

  width:300px;

}

.hero-features{

  bottom: 90px;

}


.feature img{

  width: 30px;
  height: 40px;
  margin-bottom: 2px;

}

.feature span{

  font-size:.62rem;

  line-height:1.5;

  letter-spacing:1px;

}

.topbar-inner{

height:100px;

}

.topbar-actions {
  padding-bottom: 0px;
}

.about-grid{

grid-template-columns:1fr;

}

.about-left{
  display: flex;
  flex-wrap: wrap;
}

.about-col {
  width: 100vw;
  padding: 40px;
}

.about h3 {
  padding-top: 0px;
  font-size: 20px;
  line-height: 1.3;
}

.about span {
  font-size: 18px;
}

.about p {
  font-size: 14px
}

.about li {
  font-size: 14px;
}

.signature {
  font-size: 20px;
}

.line-vertical {
  display: none;
}

.line2{

  width:100%;
  height:1px;

  background: #b03724;

  margin:0px 40px;

  display: inherit;

}

.formats {
  padding: 0;
}

.formats-grid{

  grid-template-columns: repeat(4, 1fr);

}

.formats-left{

    border-right:none;


}

.formats-left h2{
  font-size: 20px;
}

.flavours h2 {
  font-size: 20px;
}

.formats-left,
.flavours{

    padding:40px;
    width: 100%;

}

.flavour {
  justify-content: center;
  margin: 0 auto;
}

.formats-cards{
  display: grid;
    grid-template-columns:1fr;

}

.format-card {
  display: grid;
  grid-template-columns:1fr 2fr;
  width: 100%;
}

.flavours-grid{

  grid-template-columns: repeat(2, 1fr);
    justify-content: center;
  width: 100%;
    gap:45px;
    margin: 40px 0px 60px;

}

.base-grid{

    grid-template-columns:1fr;
    gap:60px;

}

.features-grid{

    grid-template-columns:1fr 1fr;

    gap:50px;

}

.base-section {
  padding: 40px 0px;
}

.base-section h2 {
  font-size: 20px;
}

.footer {
  padding: 40px;
}

.location {
  padding: 40px 0px;
}

.location-info {
  padding: 0px 40px;
}

.location-grid {
  gap: 40px;
}

  .hero-reviews {
  scale: 0.95;
  transform-origin: left center; 
}

}




@media(max-width:600px){

  .contact-btn {
    display: none;
  }

  .topbar {
    padding: 0px 30px;
  }

  .topbar.scrolled{
    padding: 0px 30px 30px;
  }
  

    .topbar img {
    width: 140px;
  }

  .contact-btn {
    font-size: 12px;
  }

  .menu-btn {
    width: 45px;
    height: 45px;
  }

  .topbar-actions {
    gap: 10px;
  }

  .hero {
    padding: 30px;
  }

.hero-copy h1{

font-size:34px;

}

.hero-copy h2 {
  font-size: 20px
}

.hero-copy p{

  font-size: 14px;

  width:300px;

}

  .hero-overlay{

  position:absolute;
  inset:0;

  background:linear-gradient(
      90deg,
      rgba(0,0,0, .85) 0%,
      rgba(0,0,0,.75) 20%,
      rgba(0,0,0,.65) 40%,
      rgba(0,0,0,.5) 60%,
      rgba(0,0,0,.3) 100%
  );

  z-index:2;

}

.hero-features{

  bottom: 80px;

}

.feature img{

  width: 30px;
  height: 40px;
  margin-bottom: 2px;

}

.feature span{

  font-size:.62rem;

  line-height:1.5;

  letter-spacing:1px;

}

.container.topbar-inner{

height: auto;

}

.about-col {
  width: 100vw;
  padding: 30px;
}

.about h3 {
  padding-top: 0px;
}

.line-vertical {
  display: none;
}

.line2{

  width:100%;
  height:1px;

  background: #b03724;

  margin:5px 30px;

  display: inherit;

}

    .features-grid{

        grid-template-columns:1fr;

    }

    

    .formats-left {
      padding: 30px;
    }

    .flavours {
      padding: 30px;
    }

    .base-section {
  padding: 30px 0px;
}

.location{

  padding:30px 0;

}


.location-info{

  padding:0px 30px;

}

.location-grid {
  gap: 30px;
}


.location-info h2{

  font-size:20px;

}


.location-intro{

  font-size:14px;

  margin-bottom:30px;

}


.location-address p{

  font-size:14px;

}


.location-map,
.location-map iframe{

  min-height:350px;

}

  .feature1 img {
  width: 30px;
  height: 40px;
  margin: 0 auto 8px;
  }

    .feature1 span {
    font-size: .62rem;
    line-height: 1.4; 
  }

}

@media(max-width:500px){

  .topbar img {
    width: 120px;
  }

  .container.topbar-inner{

height: auto;

}

  .hero-copy h1{

font-size:30px;

}

.hero-copy h2 {
  font-size: 18px
}

.hero-copy p{

  font-size: 14px;

  width:300px;

}



.hero-features {
  flex-wrap: wrap;
  gap: 15px;
  bottom: 70px;
}

.format-card {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

  .feature1 img {
  width: 25px;
  height: 40px;
  margin: 0 auto 8px;
  }

    .feature1 span {
    font-size: .56rem;
    line-height: 1.4; 
  }

  .flavours-grid {
      grid-template-columns:1fr;

  }

  .hero-reviews {
  scale: 0.9;
  transform-origin: left center; 
}

.footer2 {

  font-size: 10px;
}

}

@media(max-width:400px){

  .hero h1 {
    font-size: 28px;
  }

  .hero h2 {
    font-size: 18px;
  }

  .hero p {
    max-width: 250px;
  }

  .topbar img {
    width: 110px;
  }

  .container.topbar-inner{

  height: auto;

  }

  .contact-btn {
    font-size: 10px;
  }

  .menu-btn {
    width: 40px;
    height: 40px;
  }



.hero-features {
  flex-wrap: wrap;
  gap: 10px;
  bottom: 60px;
}

.hero-reviews {
  scale: 0.85;
  transform-origin: left center; 
}



  .feature1 img {
    width: 25px;
    margin: 0 auto;
    justify-content: center;
  }

  .feature1 span {
    font-size: .52rem;
    line-height: 1.6; 
  }


  .hero p {
    width: 100%;
  }

  .feature img{
    margin-bottom: 10px;
  }

  .footer {
    padding: 30px;
  }

  .footer-grid {
    gap: 30px;
  }


}

@media (max-height: 900px){



  .hero-logo img{
    width:170px;
  }

  .hero-copy h1{
    margin-bottom:16px;
  }

  .hero-copy h2{
    font-size:22px;
    margin-bottom:18px;
  }

  .hero-divider{
    margin-bottom:18px;
  }

  .hero-copy p{
    line-height:1.5;
  }

  .hero-features{
    margin-top:45px;
  }

}

@media (max-height:760px){


  .logo{
    width:170px;
  }



  .hero-logo img{
    width:140px;
    margin-bottom:15px;
  }

    .hero-copy{
    padding-bottom: 60px;
    
  }

  .hero-copy h1{
    line-height:1.05;
    margin-bottom:12px;
    font-size: 30px;
  }

  .hero-divider{
    margin-bottom:15px;
    width:70px;
  }

  .hero-copy h2{
    font-size: 18px;
    margin-bottom:15px;
  }

  .hero-copy p{
    line-height:1.45;
    font-size: 11px;
  }

  .hero-features {
    width: 100%;
    margin-top: 20px;
  }

  .feature1 img {
  width: 25px;
  height: 35px;
  margin: 0 auto 8px;
  }

  .feature1 span {
    font-size: .52rem;
    line-height: 1.4; 
  }

}

@media (max-height:650px){

  .logo {
    width: 120px;
  }

  .hero-copy{
    padding-top: 40px;

  }


  .hero-copy h1{
    margin-bottom:10px;
  }

  .hero-copy h2{
    font-size:18px;
    margin-bottom:10px;
  }

  .hero-divider{
    margin-bottom:10px;
  }

  .hero-copy p{

  }

  .hero-features{
    margin-top:18px;
    gap:14px;
  }

}

@media (max-height: 500px) and (orientation: landscape){

    .topbar {
      padding: 40px;
    }

    .topbar.scrolled {
      padding: 30px 40px;
    }

    .topbar-inner{
      height: 60px;
    }

    .hero{
        min-height:100vh;
        padding:25px 40px;
    }

    .hero-grid{
        min-height:100vh;
    }

    .hero-copy{
        padding-top:100px;
    }

    .hero-logo img{
        width:90px;
        margin-bottom:10px;
    }

    .hero-copy h1{
        margin-bottom:8px;
        line-height:1;
    }

    .hero-divider{
        width:55px;
        margin-bottom:8px;
    }

    .hero-copy h2{
        font-size:15px;
        margin-bottom:8px;
    }

    .hero-copy p{
        width:420px;
        font-size:13px;
        line-height:1.35;
    }

    .hero-features{
        margin-top:12px;
        gap:12px;
    display: none;

    }

    .feature1 img{
        width:22px;
        height:24px;
    }

    .feature1 span{
        font-size:.58rem;
        line-height:1.2;
    }

    .about-col {
      padding: 0px 40px 40px;
    }

    .about h3{
      padding-top: 40px;
    }

    .formats {
      padding: 40px 0px;
    }

    .formats-left {
      padding: 0px 40px;
    }

    .flavours {
      padding: 0px 40px;
    }

    .base-section {
      padding: 40px 40px 60px;
    }

    .features {
      padding: 40px 0px;
    }

    .features-grid {
      padding: 0px 40px;
    }

    .footer {
      padding: 40px;
    }




}

@media (max-height:420px){

    .hero-copy{
        padding-top:120px;
    }

    .hero-logo img{
        width:70px;
    }

    .hero-copy h1{
        font-size:24px;
    }

    .hero-copy h2{
        font-size:14px;
    }

        .hero-reviews{
        display:none;
    }

    .hero-divider{
        margin-bottom:6px;
    }

    .hero-features{
        margin-top:10px;
    }

}

@media (max-height:360px){



    .hero-features{
        display:none;
    }

    .hero-copy{
        padding-top:120px;
    }

    .hero-copy p{
      display: none;
    }

}

</style>
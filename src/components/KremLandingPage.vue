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
            src="../assets/logo-krem.jpg"
            alt="Krem"
          >

        </a>

        <div class="topbar-actions">

          <a
            href="#contact"
            class="contact-btn"
          >
            CONTACTA
          </a>

          <button
            class="menu-btn"
            aria-label="Abrir menú"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

        </div>

      </div>
    </header>





    <!-- =========================
              HERO
    ========================== -->

    <section class="hero">

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

          <h1>

            RESTAURACIÓN
            <br>
            PROFESIONAL

          </h1>

          <div class="hero-divider"></div>

          <h2>

            CHEESECAKES ARTESANALES
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





          <div class="hero-features">

            <div class="feature">

              <img
                src="../assets/Artesanal.svg"
                alt=""
              >

              <span>

                ELABORACIÓN <br> ARTESANAL

              </span>

            </div>

            <div class="feature">

              <img
                src="../assets/Premium.svg"
                alt=""
              >

              <span>

                CALIDAD <br> PREMIUM

              </span>

            </div>

            <div class="feature">

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

            <div class="feature">

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

            KREM RESTAURACIÓN <br>
            PROFESIONAL

          </h3>

          <span>

            by Dolce Investments SL

          </span>

          <div class="line"></div>

          <p>

            Krem es la marca de cheesecakes artesanas
            especializada en el canal HORECA.

            Trabajamos para restaurantes,
            hoteles y cafeterías que buscan
            postres de calidad superior,
            consistentes, listos para servir
            y que aportan valor
            a su propuesta gastronómica.

          </p>

          <div class="signature">

            Creamos momentos memorables.
            <br>

            Tú creas experiencias inolvidables.

          </div>

        </div>


          <div class="line-vertical"></div>
          <div class="line2"></div>




        <div class="about-col">

          <h3>

            ¿POR QUÉ KREM?

          </h3>
          <div class="line"></div>

          <ul>

            <li><span class="check">✔</span> Recetas propias y exclusivas</li>

            <li><span class="check">✔</span> Textura cremosa y sabor equilibrado</li>

            <li><span class="check">✔</span> Ingredientes naturales y de calidad</li>

            <li><span class="check">✔</span> Elaboración artesanal en Barcelona</li>

            <li><span class="check">✔</span> Formato profesional y práctico</li>

            <li><span class="check">✔</span> Consistencia en cada unidad</li>

            <li><span class="check">✔</span> Atención cercana y personalizada</li>

          </ul>

        </div>
        </div>






        <div class="about-col professionals">

          <h3>

            HECHO PARA <br>
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

  </div>
</template>

<script setup>
import { ref,onMounted,onUnmounted } from 'vue'

const isScrolled=ref(false)

const handleScroll=()=>{

  isScrolled.value=window.scrollY>30

}

onMounted(()=>{

  window.addEventListener("scroll",handleScroll)

})

onUnmounted(()=>{

  window.removeEventListener("scroll",handleScroll)

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

    padding: 60px;

}

.topbar.scrolled{

  backdrop-filter:blur(16px);

  background:rgba(0,0,0, 0.35);

  padding: 30px 60px;

}

.topbar-inner{

  display:flex;
  align-items:center;
  justify-content:space-between;

}

.logo{

  width:200px;
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

}

.contact-btn{

  color:#eebfb9;

  text-transform:uppercase;

  letter-spacing:2px;

  font-size: 16px;

  outline: 1px solid #eebfb9;

  padding: 12px 20px;

  border-radius:200px;
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

}

.menu-btn span{

  display:block;

  width:20px;
  height:3px;

  background:#973e30;

}


/*==================================================
 HERO
==================================================*/

.hero{

  position:relative;

  height:100vh;

  background:var(--black);

  overflow:hidden;

  background-image: url('../assets/Krem-Hero.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  padding: 60px;

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

  padding-top:50px;

}



.hero-copy h1{

  font-size:52px;

  line-height: 1.1;

  font-weight:500;

  margin-bottom:21px;

  color: #eebfb9;

  letter-spacing: 1px;
}

.hero-divider{

  width:90px;
  height:1px;

  background: #973e30;

  margin-bottom:25px;

}

.hero-copy h2{

  color: #eebfb9;

  font-size:24px;

  font-weight:400;

  margin-bottom:25px;

  line-height: 1.3;

  letter-spacing: 1px;

}

.hero-copy p{

  width:450px;

  color:rgba(255, 214, 214, 0.8);

  line-height:1.7;

  font-size:1rem;


}

.hero-features{

  display: flex; 

  gap:35px;

  margin-top: 75px;

  margin-left: 0;


}

.feature{

  color:#eebfb9;
  justify-items: center;
  text-align: center;
  line-height: 1;
  font-weight: 500;

}

.feature img{

  width: 35px;
  height: 40px;
  margin-bottom: 10px;

}

.feature span{

  font-size:.82rem;

  line-height:1.5;

  letter-spacing:1px;

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
    grid-template-columns:2fr 0.8fr;
}


.about-left{

    display:grid;
    grid-template-columns:1fr 2px 1fr;

    align-items:stretch;


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

  color: #b03724;
  padding: 60px 0px 0px 0px;

}

.about-col span{

  display:block;
  font-weight: 400;
  font-size: 20px;

}

.line{

  width:80px;
  height:1px;

  background: #b03724;

  margin-bottom:20px;
  margin-top: 20px;

}

.line2{

  width:100%;
  height:1px;

  background: #b03724;

  margin:0px 40px;

  display: none;

}

.line-vertical{

  width:1px;

  background:#b03724;

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

  color: #b03724;

  font-size: 24px;

  font-family: "Oooh Baby", cursive;
  font-weight: 600;
  font-style: normal;

  letter-spacing: 0.8px;

}

.about-col ul{

  list-style:none;

}

.about-col li{

  padding:14px 0;
  font-size: 16px;
  display: flex;
  gap: 10px;
  

}

.about-li-2 {
  color: #b03724;
  line-height: 2.5;
}

.about-img {
  width: 23px;
}

.check {
  color: #b03724;
}

.professionals{

  background:#f6dede;

  height: 100%;

  padding:60px;

padding-top: 0px;


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

.about-grid{

grid-template-columns:1fr;

}

}

@media(max-width:900px) {

  .hero-overlay{

  position:absolute;
  inset:0;

  background:linear-gradient(
      90deg,
      rgba(0,0,0, 1) 0%,
      rgba(0,0,0,.9) 20%,
      rgba(0,0,0,.8) 40%,
      rgba(0,0,0,.4) 60%,
      rgba(0,0,0, 0) 100%
  );

  z-index:2;

}
}

@media(max-width:768px){

.topbar {
  padding: 40px;
}

.topbar.scrolled {
  padding: 40px;
}

.hero {
  padding: 40px;
}

.hero-copy h1{

font-size:42px;

}

.hero-copy h2 {
  font-size: 20px
}

.hero-copy p{

  font-size: 14px;

  width:300px;

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

height:75px;

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

}




@media(max-width:600px){

  .topbar {
    padding: 30px;
  }

  .topbar.scrolled{
    padding: 30px;
  }

    .topbar img {
    width: 150px;
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

font-size:42px;

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
      rgba(0,0,0, 1) 0%,
      rgba(0,0,0,.9) 20%,
      rgba(0,0,0,.8) 40%,
      rgba(0,0,0,.6) 60%,
      rgba(0,0,0,.3) 100%
  );

  z-index:2;

}

.hero-features {
  margin-top: 50px;
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

height:75px;

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

}

@media(max-width:500px){

  .topbar img {
    width: 125px;
  }

  .hero-copy h1{

font-size:36px;

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
  width: 60%;
}

}

@media(max-width:400px){

  .hero h1 {
    font-size: 30px;
  }

  .topbar img {
    width: 100px;
  }

  .contact-btn {
    font-size: 10px;
  }

  .menu-btn {
    width: 40px;
    height: 40px;
  }

  .hero-copy {
    padding-top: 80px;
  }

  .hero-features {
    width: 100%;
    margin-top: 20px;
    gap: 12px;
  }

  .feature {
    scale: 80%;
  }

  .hero p {
    width: 100%;
  }

}



</style>
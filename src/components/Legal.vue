<template>

  <div class="legal-page">

    <!-- HEADER -->

<!-- HEADER -->

<header
  class="legal-header"
  :class="{ scrolled: isScrolled }"
>
  <div class="container legal-header-inner">

    <router-link to="/" class="legal-logo">
      <img
        src="../assets/logo-krem.jpg"
        alt="Krem"
      >
    </router-link>

    <router-link to="/" class="back-link">
      VOLVER A KREM
    </router-link>

  </div>
</header>



    <!-- CONTENIDO -->

    <main class="legal-content">

      <div class="container legal-container">

        <!-- AVISO LEGAL -->

        <section id="aviso-legal" class="legal-section">

          <h2>Aviso Legal</h2>

          <h3>1. Información general</h3>

          <p>
            En cumplimiento de las obligaciones establecidas en la normativa
            aplicable a los servicios de la sociedad de la información, se
            informa de los siguientes datos:
          </p>

          <div class="company-data">

            <p>
              <strong>Razón social:</strong>
              Dolce Investments S.L.
            </p>

            <p>
              <strong>CIF:</strong>
              B09764531
            </p>

            <p>
              <strong>Dirección:</strong>
              Plaza de la Vila de Gràcia, 5 - Loc. 2,
              08012 Barcelona
            </p>

          </div>


          <h3>2. Objeto</h3>

          <p>
            El presente sitio web tiene como finalidad proporcionar
            información sobre Krem, sus productos y servicios dirigidos
            principalmente al canal de restauración, hostelería y
            profesionales del sector.
          </p>


          <h3>3. Condiciones de uso</h3>

          <p>
            El acceso y uso de este sitio web atribuye la condición de
            usuario e implica la aceptación de las presentes condiciones.
            El usuario se compromete a hacer un uso adecuado y lícito del
            sitio web y de sus contenidos.
          </p>


          <h3>4. Propiedad intelectual</h3>

          <p>
            Los contenidos, textos, imágenes, elementos gráficos, logotipos
            y demás elementos que forman parte de este sitio web están
            protegidos por la normativa aplicable en materia de propiedad
            intelectual e industrial.
          </p>

          <p>
            Queda prohibida su reproducción, distribución, transformación
            o comunicación pública sin la correspondiente autorización,
            salvo en los casos permitidos legalmente.
          </p>

        </section>


        <!-- POLÍTICA DE PRIVACIDAD -->

        <section id="privacidad" class="legal-section">

          <h2>Política de Privacidad</h2>

          <h3>1. Responsable del tratamiento</h3>

          <div class="company-data">

            <p>
              <strong>Responsable:</strong>
              Dolce Investments S.L.
            </p>

            <p>
              <strong>CIF:</strong>
              B09764531
            </p>

            <p>
              <strong>Dirección:</strong>
              Plaza de la Vila de Gràcia, 5 - Loc. 2,
              08012 Barcelona
            </p>

            <p>
              <strong>Email:</strong>
              horeca@kremcheesecake.com
            </p>

          </div>


          <h3>2. Finalidad del tratamiento</h3>

          <p>
            Los datos personales que puedan ser facilitados a través de
            los canales de contacto del sitio web serán tratados con la
            finalidad de atender las consultas realizadas, gestionar las
            comunicaciones y proporcionar la información solicitada.
          </p>


          <h3>3. Conservación de los datos</h3>

          <p>
            Los datos personales serán conservados durante el tiempo
            necesario para atender la solicitud y, cuando corresponda,
            durante los plazos legalmente establecidos.
          </p>


          <h3>4. Legitimación</h3>

          <p>
            La base legal para el tratamiento de los datos será,
            según corresponda, el consentimiento del interesado, la
            ejecución de una relación contractual o la aplicación de
            medidas precontractuales.
          </p>


          <h3>5. Derechos</h3>

          <p>
            El usuario puede solicitar el acceso, rectificación,
            supresión, oposición, limitación del tratamiento y
            portabilidad de sus datos personales cuando resulte
            aplicable.
          </p>

          <p>
            Para ejercer estos derechos puede contactar con
            <strong>horeca@kremcheesecake.com</strong>.
          </p>


          <h3>6. Seguridad</h3>

          <p>
            Dolce Investments S.L. adopta las medidas técnicas y
            organizativas necesarias para garantizar la seguridad y
            confidencialidad de los datos personales tratados.
          </p>

        </section>


        <!-- POLÍTICA DE COOKIES -->

        <section id="cookies" class="legal-section">

          <h2>Política de Cookies</h2>

          <h3>1. ¿Qué son las cookies?</h3>

          <p>
            Las cookies son pequeños archivos que se almacenan en el
            dispositivo del usuario cuando visita determinados sitios
            web. Permiten, entre otras funciones, facilitar la navegación
            y proporcionar determinadas funcionalidades.
          </p>


          <h3>2. Cookies utilizadas en este sitio web</h3>

          <p>
            Actualmente, este sitio web no utiliza cookies propias con
            fines publicitarios o de análisis.
          </p>

          <p>
            No obstante, el sitio web incorpora un mapa de Google Maps
            para mostrar la ubicación de Krem. Este servicio puede
            implicar la carga de recursos y tecnologías de terceros
            gestionadas por Google.
          </p>


          <h3>3. Google Maps</h3>

          <p>
            La visualización del mapa puede implicar el tratamiento de
            determinados datos técnicos y la utilización de tecnologías
            propias de Google. Para más información, el usuario puede
            consultar las políticas de privacidad y cookies de Google.
          </p>


          <h3>4. Gestión de cookies</h3>

          <p>
            El usuario puede configurar las opciones de privacidad y
            cookies de su navegador para controlar o bloquear determinadas
            tecnologías de almacenamiento.
          </p>


          <h3>5. Actualización de la política</h3>

          <p>
            Esta Política de Cookies podrá ser modificada cuando se
            produzcan cambios en las tecnologías utilizadas en el sitio
            web o en la normativa aplicable.
          </p>

        </section>


        <p class="legal-update">
          Última actualización: agosto de 2026
        </p>

      </div>

    </main>


    <!-- FOOTER -->

    <footer class="legal-footer">

      <div class="container">

        <p>
          KREM BY DOLCE INVESTMENTS S.L.
        </p>

        <p>
          © 2026 KREM. Todos los derechos reservados.
        </p>

      </div>

    </footer>

  </div>

</template>

<script setup>

import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

</script>


<style scoped>

.legal-page{

  min-height:100vh;

  background:#f8eeec;

  color:#262626;

}


.container{

  margin:auto;

}


/* HEADER */

.legal-header{ position:fixed; top:0; left:0; width:100%; z-index:999; transition:.35s; padding:30px 60px; background:rgba(81, 0, 0, 0.4)} 
.legal-header.scrolled{ backdrop-filter:blur(12px); background:rgba(81, 0, 0, 0.4); padding:30px 60px; } 
.legal-header-inner{ display:flex; align-items:center; justify-content:space-between; margin:0; width:100%; } 
.legal-logo{ width:150px; transition:.8s; } 
.legal-logo img{ display:block; width:100%; } 
.back-link{ color:#eebfb9; font-size:13px; font-weight:600; letter-spacing:1.5px; border:1px solid #eebfb9; border-radius:200px; padding:11px 20px; transition:.3s ease; } .back-link:hover{ background:#eebfb9; color:#973e30; }


/* CONTENIDO */

.legal-content{

  padding: 220px 0 100px;
  

}


.legal-container{

  width:100%;
  max-width:none;
  padding:0 60px;
}


.legal-container > h1{

  color:#9f4638;

  font-size:34px;

  font-weight:600;

  letter-spacing:1px;

}


.title-line{

  width:90px;

  height:2px;

  background:#c78574;

  margin:18px 0 70px;

}


.legal-section{

  margin-bottom:80px;

  scroll-margin-top:40px;

}


.legal-section h2{

  color:#9f4638;

  font-size:27px;

  font-weight:600;

  margin-bottom:35px;

}


.legal-section h3{

  color:#973e30;

  font-size:17px;

  font-weight:600;

  margin:35px 0 15px;

}


.legal-section p{

  color:#444;

  font-size:15px;

  line-height:1.8;

  margin-bottom:18px;

}


.company-data{

  background:#fffaf8;

  padding:30px 35px;

  border-left:3px solid #c78574;

  margin:25px 0 35px;

}


.company-data p{

  margin-bottom:8px;

}


.company-data p:last-child{

  margin-bottom:0;

}


.company-data strong{

  color:#973e30;

}


/* FOOTER */

.legal-update{

  color:#777 !important;

  font-size:13px !important;

  margin-top:30px;

}


.legal-footer{

  background:#973e30;

  color:#eebfb9;

  padding: 30px;

  font-size:12px;

}


.legal-footer .container{

  display:flex;

  justify-content:space-between;

  gap:30px;

}


/* RESPONSIVE */

@media(max-width:768px){

.legal-header{

  padding:40px 30px;

}


.legal-header.scrolled{

  padding:30px;

}


.legal-header-inner{

  gap:20px;

}


.legal-logo{

  width:125px;

}


.back-link{

  font-size:10px;

  padding:10px 14px;

}


  .legal-content{

    padding:60px 0 70px;

  }

    .legal-container{
    padding: 180px 40px;
  }

  .legal-container > h1{

    font-size:27px;

  }


  .title-line{

    margin-bottom:50px;

  }


  .legal-section{

    margin-bottom:60px;

  }


  .legal-section h2{

    font-size:23px;

  }


  .legal-section h3{

    font-size:16px;

  }


  .legal-section p{

    font-size:14px;

    line-height:1.7;

  }


  .company-data{

    padding:25px;

  }


  .legal-footer{

    padding:25px 30px;

  }


  .legal-footer .container{

    flex-direction:column;

    gap:8px;

  }

}

@media(max-width:600px){

  .legal-container{
    padding: 150px 30px 0px 30px;
  }

}


@media(max-width:500px) {
  .legal-logo{
  width:110px;
}
}

@media(max-width:400px){
  .legal-logo{
  width:100px;
}

.back-link{
  font-size:10px;
}
}

</style>
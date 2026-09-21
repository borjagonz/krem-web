<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top"
      :class="{ 'over-footer': isOverFooter }"
      aria-label="Volver arriba"
    >
      <img :src="icon" alt="Volver arriba" class="icon" />
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import icon from "../icons/ScrollToTopButton.svg";

const isVisible = ref(false);
const isOverFooter = ref(false);

const handleScroll = () => {
  const scrollY = window.scrollY;
  const windowHeight = window.innerHeight;

  // Mostrar el botón después de 200px
  isVisible.value = scrollY > 200;

  // Localizamos el footer2
  const footer = document.querySelector(".footer2");

  if (!footer) {
    isOverFooter.value = false;
    return;
  }

  const footerRect = footer.getBoundingClientRect();

  // Altura aproximada del botón + margen inferior
  const buttonHeight = 50;
  const bottomMargin = 25;

  // Posición superior del botón respecto a la ventana
  const buttonBottom = windowHeight - bottomMargin;
  const buttonTop = buttonBottom - buttonHeight;

  // Comprobamos si el botón entra en la zona del footer2
  isOverFooter.value =
    buttonBottom > footerRect.top &&
    buttonTop < footerRect.bottom;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  window.addEventListener("resize", handleScroll);

  // Comprobamos el estado inicial
  handleScroll();
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
  window.removeEventListener("resize", handleScroll);
});
</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 25px;
  right: 25px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  z-index: 1000;

  transition: bottom 0.35s ease;
}

.scroll-to-top:hover {
  scale: 110%;
  transition: 0.3s;
}

.scroll-to-top.over-footer {
  bottom: 140px;
}

.icon {
  display: block;
  width: 50px;
  height: 50px;
  transition: transform 0.3s ease, filter 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
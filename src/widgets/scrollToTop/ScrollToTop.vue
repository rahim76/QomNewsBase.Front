<template>

<template>
  <Teleport to="body">
    <button
      v-show="showButton"
      class="scroll-top"
      @click="scrollToTop">
      <i class="fa fa-chevron-up"></i>
    </button>
  </Teleport>
</template>

</template>

<script setup>
import { ref ,onMounted, onUnmounted} from 'vue';

const showButton = ref(false);

const handleScroll = () => {
    showButton.value = window.scrollY > 300;
};

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};

onMounted(() => {
    window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
});

</script>

<style scoped>

button {
  padding: 10px 15px;
  margin: 5px;
  cursor: pointer;
}
.scroll-top {
    position: fixed;
    bottom: 25px;
    right: 25px;

    width: 50px;
    height: 50px;

    border: none;
    border-radius: 50%;

   background: linear-gradient(135deg, #ef4444, #dc2626);
    color: #fff;

    cursor: pointer;
    z-index: 9999;

    font-size: 18px;

    display: flex;
    align-items: center;
    justify-content: center;

    box-shadow: 0 5px 15px rgba(0, 0, 0, .2);
    transition: all .3s ease;
}

.scroll-top:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, .25);
}

</style>
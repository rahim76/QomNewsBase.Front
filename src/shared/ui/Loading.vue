<template>
  <transition name="fade-smooth">
    <div v-if="show" class="luxury-loading-container">
      <div class="content-wrapper">
        <div class="animated-dot"></div>
        <div class="status-text">در حال پردازش آخرین تحولات...</div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LuxuryLoading',
  props: {
    show: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
.luxury-loading-container {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  /* پس‌زمینه تاریک‌تر و لوکس‌تر */
  background: rgba(8, 13, 28, 0.9); 
  backdrop-filter: blur(10px) saturate(1.5); /* بوکه قوی‌تر */
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.animated-dot {
  width: 10px;
  height: 10px;
  background: linear-gradient(135deg, #38b2ac, #4299e1); /* ترکیب رنگ‌های مدرن */
  border-radius: 50%;
  box-shadow: 0 0 8px rgba(56, 178, 172, 0.6), 0 0 15px rgba(66, 153, 225, 0.4);
  animation: pulseAndMove 1.8s cubic-bezier(0.68, -0.55, 0.27, 1.55) infinite;
}

.status-text {
  font-family: 'IRANSans', sans-serif;
  font-size: 15px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.85); /* رنگ متن سفید/روشن روی پس‌زمینه تیره */
  letter-spacing: 0.2px;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
}

/* انیمیشن */
@keyframes pulseAndMove {
  0% {
    transform: scale(1) translateY(0);
    opacity: 0.7;
  }
  50% {
    transform: scale(1.4) translateY(-15px); /* حرکت رو به بالا و بزرگ شدن */
    opacity: 1;
  }
  100% {
    transform: scale(1) translateY(0);
    opacity: 0.7;
  }
}

/* Transition for fading */
.fade-smooth-enter-active,
.fade-smooth-leave-active {
  transition: opacity 0.4s ease-out;
}
.fade-smooth-enter-from,
.fade-smooth-leave-to {
  opacity: 0;
}
</style>

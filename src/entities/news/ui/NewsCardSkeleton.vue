<template>
  <div class="news-card-skeleton">
    <div class="skeleton-image"></div>

    <div class="skeleton-content">
      <div class="skeleton-title"></div>
      <div class="skeleton-title short"></div>

      <div class="skeleton-text"></div>
      <div class="skeleton-text"></div>
      <div class="skeleton-text short"></div>
    </div>
  </div>
</template>

<style scoped>
.news-card-skeleton {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0,0,0,.08);
  margin: 5px 0;
}

.skeleton-image {
  height: 200px;
}

.skeleton-title,
.skeleton-text,
.skeleton-image {
  background: linear-gradient(
    90deg,
    #eeeeee 25%,
    #f7f7f7 50%,
    #eeeeee 75%
  );

  background-size: 200% 100%;

  animation: shimmer 1.5s infinite;
}

.skeleton-content {
  padding: 15px;
}

.skeleton-title {
  height: 18px;
  margin-bottom: 10px;
  border-radius: 4px;
}

.skeleton-title.short {
  width: 70%;
}

.skeleton-text {
  height: 12px;
  margin-bottom: 8px;
  border-radius: 4px;
}

.skeleton-text.short {
  width: 50%;
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }

  100% {
    background-position: 200% 0;
  }
}
</style>
<template>
  <div class="category-sidebar">
    <div class="sidebar-header">
      <div class="skeleton-icon"></div>
      <div class="skeleton-header-text"></div>
    </div>

    <ul class="category-list">
      <li
        v-for="n in 3"
        :key="n"
        class="category-item"
      >
        <div class="skeleton-title"></div>
        <div class="skeleton-badge"></div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.skeleton-icon,
.skeleton-header-text,
.skeleton-title,
.skeleton-badge {
  background: linear-gradient(
    90deg,
    #ececec 25%,
    #f8f8f8 50%,
    #ececec 75%
  );

  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

.skeleton-icon {
  width: 20px;
  height: 20px;
  border-radius: 4px;
}

.skeleton-header-text {
  width: 120px;
  height: 18px;
  border-radius: 4px;
}

.category-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.skeleton-title {
  width: 65%;
  height: 16px;
  border-radius: 4px;
}

.skeleton-badge {
  width: 35px;
  height: 22px;
  border-radius: 50px;
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
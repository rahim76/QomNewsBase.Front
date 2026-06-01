<template>
  <div class="latest-comments">

    <div class="title">
      <div class="skeleton-title"></div>
    </div>

    <div class="comment-list">

      <div
        v-for="n in 5"
        :key="n"
        class="comment-item"
      >
        <div class="top">
          <div class="skeleton-news-title"></div>
          <div class="skeleton-date"></div>
        </div>

        <div class="comment-text">
          <div class="skeleton-line"></div>
          <div class="skeleton-line"></div>
          <div class="skeleton-line short"></div>
        </div>

        <div class="bottom">
          <div class="skeleton-user"></div>
          <div class="skeleton-link"></div>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.skeleton-title,
.skeleton-news-title,
.skeleton-date,
.skeleton-line,
.skeleton-user,
.skeleton-link {
  background: linear-gradient(
    90deg,
    #ececec 25%,
    #f8f8f8 50%,
    #ececec 75%
  );

  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}

.skeleton-title {
  width: 140px;
  height: 20px;
}

.skeleton-news-title {
  width: 60%;
  height: 18px;
}

.skeleton-date {
  width: 90px;
  height: 14px;
}

.skeleton-line {
  height: 12px;
  margin-bottom: 8px;
}

.skeleton-line.short {
  width: 70%;
}

.skeleton-user {
  width: 80px;
  height: 16px;
}

.skeleton-link {
  width: 100px;
  height: 16px;
}

.comment-item {
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid #eee;
}

.top,
.bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
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
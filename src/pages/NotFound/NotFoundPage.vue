<template>
  <div class="not-found-container">
    <div class="not-found-content">
      <div class="visual-element">
        <!-- <img src="../../../shared/images/images.png" alt="Not Found Icon" class="icon"> -->
      </div>
      <h1 class="error-code">404</h1>
      <h1 class="error-message">صفحه یافت نشد !</h1>
      <h3 class="description">
        متاسفیم، صفحه‌ای که به دنبال آن هستید ممکن است حذف شده باشد، تغییر نام داده باشد،
        یا به طور موقت در دسترس نباشد.
      </h3>
      <div class="actions">
        <router-link to="/" class="btn btn-primary">
          بازگشت به صفحه اصلی
        </router-link>

        <!--
        <router-link to="/search" class="btn btn-secondary">
          جستجو
        </router-link>
        -->
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped src="./notFoundPage.css"></style>
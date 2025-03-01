<script>
  export default {
    name: 'App',
  };
</script>

<template>
    <nav class="relative container mx-auto p-6">
      <!-- Flex container -->
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <div class="pt-2">
          <img src="./assets/img/logo.svg" alt="" />
        </div>
        <!-- Menu Items -->
        <div class="hidden space-x-6 md:flex">
          <router-link to="/" class="hover:text-darkGrayishBlue">Home</router-link>
          <router-link to="/about" class="hover:text-darkGrayishBlue">About</router-link>
          <router-link to="/services" class="hover:text-darkGrayishBlue">Services</router-link>
          <router-link to="/contact" class="hover:text-darkGrayishBlue">Contact Us</router-link>
          <router-link to="/terms" class="hover:text-darkGrayishBlue">Terms & Conditions</router-link>
        </div>
        <!-- Button -->
        <a
          href="#"
          class="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block"
          >Get Started</a
        >

        <!-- Hamburger Icon -->
        <button
          id="menu-btn"
          class="block hamburger md:hidden focus:outline-none"
        >
          <span class="hamburger-top"></span>
          <span class="hamburger-middle"></span>
          <span class="hamburger-bottom"></span>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div class="md:hidden">
        <div
          id="menu"
          class="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
        >
        <router-link to="/" class="hover:underline">Home</router-link>
        <router-link to="/about" class="hover:underline">About</router-link>
        <router-link to="/services" class="hover:underline">Services</router-link>
        <router-link to="/contact" class="hover:underline">Contact Us</router-link>
        <router-link to="/terms" class="hover:underline">Terms & Conditions</router-link>
        </div>
      </div>
    </nav>
    <router-view></router-view>
</template>

<style scoped>

</style>

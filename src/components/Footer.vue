<template>
    <footer class="bg-veryDarkBlue">
        <!-- Flex Container -->
        <div
          class="container flex flex-col-reverse justify-between px-6 py-10 mx-auto space-y-8 md:flex-row md:space-y-0"
        >
          <!-- Logo and social links container -->
          <div
            class="flex flex-col-reverse items-center justify-between space-y-12 md:flex-col md:space-y-0 md:items-start"
          >
            <div class="mx-auto my-6 text-center text-white md:hidden">
              Copyright &copy; 2025, All Rights Reserved
            </div>
            <!-- Logo -->
            <div>
              <img src="../assets/img/logo-white.svg" class="h-8" alt="" />
            </div>
            <!-- Social Links Container -->
            <div class="flex justify-center space-x-4">
              <!-- Link 1 -->
              <a href="#">
                <img src="../assets/img/icon-facebook.svg" alt="" class="h-8" />
              </a>
              <!-- Link 2 -->
              <a href="#">
                <img src="../assets/img/icon-youtube.svg" alt="" class="h-8" />
              </a>
              <!-- Link 3 -->
              <a href="#">
                <img src="../assets/img/icon-twitter.svg" alt="" class="h-8" />
              </a>
              <!-- Link 4 -->
              <a href="#">
                <img src="../assets/img/icon-pinterest.svg" alt="" class="h-8" />
              </a>
              <!-- Link 5 -->
              <a href="#">
                <img src="../assets/img/icon-instagram.svg" alt="" class="h-8" />
              </a>
            </div>
          </div>
          <!-- List Container -->
          <div class="flex justify-around space-x-32">
            <div class="flex flex-col space-y-3 text-white">
              <router-link to="/" class="hover:text-brightRed">Home</router-link>
            <router-link to="/about" class="hover:text-brightRed">About</router-link>
            <router-link to="/services" class="hover:text-brightRed">Services</router-link>
            <router-link to="/contact" class="hover:text-brightRed">Contact Us</router-link>
            <router-link to="/terms" class="hover:text-brightRed">Terms & Conditions</router-link>
            </div>
            <div class="flex flex-col space-y-3 text-white">
              <a href="#" class="hover:text-brightRed">Careers</a>
              <a href="#" class="hover:text-brightRed">Community</a>
              <a href="#" class="hover:text-brightRed">Privacy Policy</a>

            </div>
          </div>
  
          <!-- Input Container -->
          <div class="flex flex-col justify-between">
            <form>
              <div class="flex space-x-3">
                <input
                  type="text"
                  class="flex-1 px-4 rounded-full focus:outline-none"
                  placeholder="Updated in your inbox"
                />
                <button
                  class="px-6 py-2 text-white rounded-full bg-brightRed hover:bg-brightRedLight focus:outline-none"
                >
                  Go
                </button>
              </div>
            </form>
            <div class="hidden text-white md:block">
              Copyright &copy; 2025, All Rights Reserved
            </div>
          </div>
        </div>
    </footer>
  </template>
  
  <script>
    export default {
        name: 'Footer',
    };
  </script>
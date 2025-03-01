<template>
    <div class="p-6 bg-orange-50 shadow-md rounded-md">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">About Us</h1>
        <p class="mb-4">Welcome to our company! We are committed to delivering high-quality solutions tailored to our clients' needs.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Our Mission</h2>
        <p class="mb-4">Our mission is to provide innovative and efficient solutions that empower businesses and individuals.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Our Vision</h2>
        <p class="mb-4">We strive to be a leading provider in our industry by constantly evolving and adapting to new challenges.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Our Values</h2>
        <ul class="list-disc pl-6 mb-4">
            <li>Integrity and Transparency</li>
            <li>Customer-Centric Approach</li>
            <li>Innovation and Excellence</li>
            <li>Commitment to Quality</li>
        </ul>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Our Team</h2>
        <p class="mb-4">We are a team of dedicated professionals passionate about delivering the best results for our clients.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Get in Touch</h2>
        <p class="mb-4">Have questions? Feel free to <a href="contact.html" class="text-blue-500">contact us</a>.</p>
    </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../Footer.vue'
  export default {
    name: 'About',
    head: {
      title: 'About - My website',
      meta: [
          { name: 'description',content: 'My About page description' },
      ],
    },
    components:{
      Footer
    }
  };
  </script>
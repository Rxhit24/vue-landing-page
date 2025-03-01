<template>
    <div class="p-6 bg-orange-50 shadow-md rounded-md">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Our Services</h1>
        <p class="mb-4">We offer a range of high-quality services to meet your needs. Explore what we have to offer:</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">1. Web Development</h2>
        <p class="mb-4">We build modern, responsive, and high-performance websites tailored to your business needs.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">2. Mobile App Development</h2>
        <p class="mb-4">We create seamless and engaging mobile applications for both iOS and Android platforms.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">3. UI/UX Design</h2>
        <p class="mb-4">Our design team ensures user-friendly and visually appealing designs that enhance user experiences.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">4. Digital Marketing</h2>
        <p class="mb-4">We help businesses grow with expert SEO, social media marketing, and content strategies.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">5. E-commerce Solutions</h2>
        <p class="mb-4">We provide customized e-commerce platforms to help you sell products online effectively.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">6. Cloud Solutions</h2>
        <p class="mb-4">Our cloud services ensure scalability, security, and efficiency for your business applications.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Get in Touch</h2>
        <p>Need a custom solution? <a href="contact.html" class="text-blue-500">Contact us</a> today to discuss your project.</p>
    </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../Footer.vue'
  export default {
    name: 'Services',
    head: {
      title: 'Services - My website',
      meta: [
          { name: 'description',content: 'My Services description' },
      ],
    },
    components:{
      Footer
    }
  };
  </script>
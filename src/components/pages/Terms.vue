<template>
    <div class="p-6 bg-orange-50 shadow-md rounded-md">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p class="mb-4">Last updated: <span class="font-semibold">March 1, 2025</span></p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">1. Introduction</h2>
        <p class="mb-4">By accessing and using our services, you accept and agree to be bound by these Terms and Conditions.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">2. Use of Service</h2>
        <p class="mb-4">You agree to use our services responsibly and comply with all applicable laws and regulations.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
        <p class="mb-4">You are responsible for maintaining the security of your account and ensuring all information provided is accurate.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">4. Limitation of Liability</h2>
        <p class="mb-4">We are not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">5. Changes to Terms</h2>
        <p class="mb-4">We reserve the right to modify these terms at any time. Your continued use of the service constitutes acceptance of any changes.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">6. Contact Us</h2>
        <p>If you have any questions about these Terms and Conditions, please contact us at <span class="font-semibold">support@example.com</span>.</p>
    </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../Footer.vue'
  export default {
    name: 'Terms',
    head: {
      title: 'Terms - My Super website',
      meta: [
          { name: 'description',content: 'My page description' },
      ],
    },
    components:{
      Footer
    }
  };
  </script>
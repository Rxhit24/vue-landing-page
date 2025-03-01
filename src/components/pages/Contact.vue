<template>
    <div class="p-6 bg-orange-50 shadow-md rounded-md">
      <div class="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
        <h1 class="text-3xl font-bold text-gray-900 mb-4">Contact Us</h1>
        <p class="mb-4">We'd love to hear from you! Reach out to us through the following channels:</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Email</h2>
        <p class="mb-4">You can email us at <span class="font-semibold">support@example.com</span> for any inquiries.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Phone</h2>
        <p class="mb-4">Call us at <span class="font-semibold">+1 (123) 456-7890</span> during our business hours.</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Address</h2>
        <p class="mb-4">123 Business Street, Suite 100<br>City, State, ZIP Code</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Business Hours</h2>
        <p class="mb-4">Monday - Friday: 9 AM - 6 PM<br>Saturday - Sunday: Closed</p>
        
        <h2 class="text-2xl font-semibold mt-6 mb-2">Social Media</h2>
        <p class="mb-4">Follow us on:</p>
        <ul class="list-disc pl-6">
            <li><a href="#" class="text-blue-500">Facebook</a></li>
            <li><a href="#" class="text-blue-500">Twitter</a></li>
            <li><a href="#" class="text-blue-500">LinkedIn</a></li>
        </ul>
    </div>
    </div>
    <Footer />
  </template>
  
  <script>
  import Footer from '../Footer.vue'
  export default {
    name: 'Contact',
    head: {
      title: 'Contact - My website',
      meta: [
          { name: 'description',content: 'My Contact Info description' },
      ],
    },
    components:{
        Footer
      }
    };
  </script>
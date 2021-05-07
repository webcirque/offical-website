<template>
  <div class="relative bg-gray-900 text-white py-20" style="min-height:100vh;">
    <div class="container mx-auto my-12 text-center">
      <img class="w-12 mx-auto" src="@/assets/white_logo.png" alt=""/>
      <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
        <span class="block text-indigo-100">not found</span>
      </h1>
      <p class="mt-3 text-base text-center text-gray-200">
        here not found any page
      </p>

      <div class="mt-10">
        <router-link class="bg-gray-600 px-8 py-4 font-semibold tracking-wider text-gray-100 text-lg rounded-full hover:bg-gray-700 focus:outline-none" to="/">
          Home
        </router-link>
      </div>
    </div>
  </div>
</template>
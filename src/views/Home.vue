<template>
  <div class="relative bg-gray-900 overflow-hidden" style="min-height: 100vh;">
    <div class="max-w-7xl mx-auto">
      <div class="relative z-10 pb-8 bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
        <svg class="hidden lg:block absolute right-0 inset-y-0 h-screen w-48 text-gray-900 transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>

        <div>
          <div class="relative pt-6 px-4 sm:px-6 lg:px-8 h-full">
            <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
              <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div class="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span class="sr-only">PWCQ</span>
                    <img class="h-8 w-auto sm:h-10" src="@/assets/white_logo.png" alt=""/>
                  </a>
                  <div class="-mr-2 flex items-center md:hidden">
                    <button @click="isOpen = !isOpen" type="button" class="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                      <span class="sr-only">Open main menu</span>
                      <!-- Heroicon name: outline/menu -->
                      <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                <router-link to="/" class="font-medium text-gray-400 hover:text-gray-300">Home</router-link>

                <router-link to="/project" class="font-medium text-gray-400 hover:text-gray-300">Projects</router-link>

                <router-link to="/about" class="font-medium text-gray-400 hover:text-gray-300">About</router-link>

                <a href="https://github.com/webcirque" target="_blank" class="font-medium text-gray-400 hover:text-gray-300">Github</a>
              </div>
            </nav>
          </div>

          <!--
            Mobile menu, show/hide based on menu open state.

            Entering: "duration-150 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          -->
          <div :class="{'opacity-100 scale-100': isOpen, 'opacity-0 scale-95': !isOpen }" class="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
            <div class="rounded-lg shadow-md bg-gray-700 ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div class="px-5 pt-4 flex items-center justify-between">
                <div>
                  <img class="h-8 w-auto" src="@/assets/white_logo.png" alt=""/>
                </div>
                <div class="-mr-2">
                  <button @click="isOpen = !isOpen" type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span class="sr-only">Close main menu</span>
                    <!-- Heroicon name: outline/x -->
                    <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div class="px-2 pt-2 pb-3 space-y-1">
                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-900">Home</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-900">Projects</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-900">Developers</a>

                <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-100 hover:text-white hover:bg-gray-900">Links</a>
              </div>
            </div>
          </div>
        </div>

        <main class="mt-10 mb-20 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:h-full lg:mt-20 lg:px-8 xl:mt-28">
          <div class="">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block text-white">PWCQ</span>
                <span class="block text-indigo-100">About Webcirque</span>
              </h1>
              <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Project Webcirque is a project that aims to find possibilities of programmming languages available at present and create small projects to realize and achieve the possibilities!
              </p>
            </div>

            <div class="mt-10 sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span class="block text-indigo-100">Developers</span>
              </h1>
              <p class="mt-3 text-base text-gray-400 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                We developers has various professions, various programming experiences, so we don't stay at the same level.
              </p>
              <p class="mt-10 text-gray-500">Copyright Project Webcirque © 2018-{{ new Date().getFullYear() }}. All rights reserved.</p>
            </div>
          </div>
        </main>

      </div>
    </div>
    <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="@/assets/background.jpg" alt="">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  data: () => ({
    isOpen: false
  })
})
</script>

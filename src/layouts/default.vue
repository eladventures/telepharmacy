<template>
    <div class="bg-white">
        <div class="container flex justify-between items-center h-12 mx-auto">
            <div class="flex items-center">
                <a
                    rel="noopener noreferrer"
                    href="#"
                    aria-label="Back to homepage"
                    class="flex items-center p-2"
                >
                    <img
                        src="../assets/images/parmazip-logo-long.png"
                        alt="Your Logo"
                        class="object-contain h-10 mt-1 w-auto"
                    />
                </a>
                <!-- <ul class="items-stretch hidden space-x-3 lg:flex">
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >How it works</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >Features</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="#"
              class="flex items-center px-4 -mb-1"
              >Pricing</a
            >
          </li>
          <li class="flex">
            <a
              rel="noopener noreferrer"
              href="https://blog.parmazip.com/about/"
              class="flex items-center px-4 -mb-1"
              target="_blank"
              >About</a
            >
          </li>
        </ul> -->
            </div>
            <!-- Login button added here on the right -->
            <div class="items-center flex-shrink-0 hidden lg:flex">
                <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLScW0Y_HX0KdZWMICk3EHOoQxHj0pl5TKR6s4tQK1IBTiN2tEQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-block px-4 py-1 font-semibold rounded bg-red-400 text-white text-sm"
                >
                    Join Waitlist
                </a>
            </div>
            <!-- Adjusted mobile menu button -->
            <button class="p-4 lg:hidden bg-red-400 text-white">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    class="w-6 h-6 dark:text-gray-100"
                >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                </svg>
            </button>
        </div>
        <slot />
    </div>
</template>

<!-- Removed the <script> section entirely as it's no longer needed for fixed theme -->

<template>
  <div class="bg-white">
    <!-- Hero Panel -->
    <section class="dark:bg-gray-800 dark:text-gray-100">
      <div
        class="max-w-8xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
      >
        <div
          class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-3xl xl:max-w-4xl lg:text-left"
        >
          <!-- Adjusted max-width here -->
          <span class="block mb-2 dark:text-violet-400 text-xl"
            >Parmazip Pharmacy Management System (PMS)</span
          >
          <h1 class="text-5xl font-bold leadi sm:text-7xl">
            The 'All-in-One' PMS for community drugstores.
          </h1>
          <p class="mt-6 mb-8 text-lg sm:mb-12">
            Modernize your pharmacy operations with a BIR-accredited POS and
            Inventory system designed for pharmacies in the Philippines. It
            works offline, too!
          </p>
          <div
            class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <a
              rel="noopener noreferrer"
              href="https://ph-prelaunch-waitlist.getresponsesite.com/"
              target="_blank"
              class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
              >Join the waitlist</a
            >
          </div>
        </div>

        <div
          class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
        >
          <img
            src="../assets/images/parmazip-hero.png"
            alt=""
            class="rounded-3xl object-contain h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
          />
        </div>
      </div>
    </section>

    <!-- Problem Panel -->

    <section class="bg-white mb-20">
      <div
        class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
      >
        <h1
          class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
        >
          Your Pharmacy Challenges
        </h1>
        <p
          class="max-w-5xl mx-auto mt-4 -mb-10 text-xl dark:text-gray-400 font-inter text-gray-500"
        >
          Getting things organized to grow and establish a pharmacy business can
          be tough.
        </p>
      </div>

      <generic-panel>
        <div class="grid grid-cols-1 md:grid-cols-3 justify-center gap-10">
          <div class="flex flex-col items-center">
            <img
              class="mb-4 rounded-xl"
              width="max"
              src="../assets/images/parmazip-problem-1.png"
              alt="parmazip"
            />
            <!-- <h2 class="uppercase text-lg text-center font-bold mb-4">
            Analog Setup
          </h2> -->
            <p class="text-center text-md">
              You’re tired of using multiple Excel sheets and paperwork to
              collect, organize, and manage your medicine sales and supplies.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4 rounded-xl"
              width="max"
              src="../assets/images/parmazip-problem-2.png"
              alt="parmazip"
            />
            <!-- <h2 class="uppercase text-lg text-center font-bold mb-4">
            Incomplete System
          </h2> -->
            <p class="text-center text-md">
              Your current system is incomplete - no medicine expiry tracker,
              not BIR-accredited, or lacks the pharmacy tools needed.
            </p>
          </div>
          <div class="flex flex-col items-center">
            <img
              class="mb-4 rounded-xl"
              width="max"
              src="../assets/images/parmazip-problem-3.png"
              alt="parmazip"
            />
            <!-- <h2 class="uppercase text-lg text-center font-bold mb-4">
            Inefficient workflow
          </h2> -->
            <p class="text-center text-md">
              You want to improve your pharmacy practice so that your customers
              will have you top-of-mind for all their prescription needs.
            </p>
          </div>
        </div>
      </generic-panel>
    </section>

    <!-- HERE COMES PARMAZIP -->
    <section>
      <div class="dark:bg-violet-400">
        <!-- logo-center -->
        <div class="logo-container">
          <img
            src="../assets/images/parmazip-logo.png"
            alt="Logo"
            class="logo mt-20"
          />
        </div>
        <h2
          class="text-3xl font-bold tracki text-center text-red-500 sm:text-2xl dark:text-gray-50"
        >
          Here comes Parmazip!
        </h2>

        <div
          class="container flex flex-col items-center px-4 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900"
        >
          <h1
            class="-mt-20 text-5xl font-bold leading-none sm:text-6xl xl:max-w-6xl dark:text-gray-900"
          >
            The All-in-One <br />
            Pharmacy Management System
          </h1>
          <!-- <p class="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-900">
          Cupiditate minima voluptate temporibus quia? Architecto beatae esse ab
          amet vero eaque explicabo!
        </p> -->
          <!-- <div class="flex flex-wrap justify-center">
          <button
            type="button"
            class="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50"
          >
            Get started
          </button>
          <button
            type="button"
            class="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900"
          >
            Learn more
          </button>
        </div> -->
        </div>
      </div>
      <video
        class="w-2/4 mx-auto -mt-20 lg:-mt-40 dark:bg-gray-500 border-4 border-gray-700"
        controls
        autoplay
        loop
        muted
      >
        <source src="../assets/images/parmazip-demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <!-- <img
      src="../assets/images/parmazip-imac.png"
      alt=""
      class="w-2/4 mx-auto -mt-20 lg:-mt-40 dark:bg-gray-500"
    /> -->
    </section>

    <!-- EXPLAIN 4 CARDS -->
    <generic-panel class="flex items-center">
      <div class="max-w-4xl mx-auto mt-12 text-center">
        <!-- Center justified images with text -->
        <div class="flex justify-center mt-4">
          <div class="mx-5 w-1/2 text-left">
            <!-- <img
            src="../assets/images/easy-joey-c.png"
            alt="Your Image Description"
            class="w-full rounded"
            data-aos="zoom-in"
          /> -->
            <h2 class="text-xl font-bold mt-2 mb-5 font-inter">
              Designed for community pharmacies
            </h2>
            <p class="text-xl font-inter">
              We built a system that addresses the unique needs of community
              pharmacies with tools that empower and elevate your pharmacy
              practice and business.
            </p>
          </div>

          <div class="mx-5 w-1/2 text-left">
            <!-- <img
            src="../assets/images/easy-joey-a.png"
            alt="Your Image Description"
            class="w-full rounded"
            data-aos="zoom-in"
          /> -->
            <h2 class="text-xl font-bold mt-2 mb-5 font-inter">
              Powerful POS and inventory system
            </h2>
            <p class="text-xl font-inter">
              It is equipped with a user-friendly interface that uses the latest
              technologies and robust features to efficiently manage your retail
              pharmacy.
            </p>
          </div>
        </div>
      </div>
    </generic-panel>

    <div class="max-w-4xl mx-auto mt-12 text-center">
      <!-- Center justified images with text -->
      <div class="flex justify-center mt-4">
        <div class="mx-5 w-1/2 text-left">
          <!-- <img
            src="../assets/images/easy-joey-c.png"
            alt="Your Image Description"
            class="w-full rounded"
            data-aos="zoom-in"
          /> -->
          <h2 class="text-xl font-bold mt-2 mb-5 font-inter">
            Manage medicines and prescriptions
          </h2>
          <p class="text-xl font-inter">
            Have all prescriptions and your customers’ data securely stored in
            one place so you can personalize patient care and serve them better.
          </p>
        </div>

        <div class="mx-5 w-1/2 text-left">
          <!-- <img
            src="../assets/images/easy-joey-a.png"
            alt="Your Image Description"
            class="w-full rounded"
            data-aos="zoom-in"
          /> -->
          <h2 class="text-xl font-bold mt-2 mb-5 font-inter">
            BIR-accredited POS provider
          </h2>
          <p class="text-xl font-inter">
            We made sure you stay compliant with the receipt and reporting
            requirements of the BIR to prevent any penalties and maintain
            accurate reporting.
          </p>
        </div>
      </div>
    </div>

    <!-- Join button -->
    <div
      class="flex flex-col space-y-4 mt-20 mb-20 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <a
        rel="noopener noreferrer"
        href="https://ph-prelaunch-waitlist.getresponsesite.com/"
        target="_blank"
        class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
        >Join the waitlist</a
      >
    </div>

    <!-- DEMO VIDEO -->
    <section>
      <div class="dark:bg-violet-400">
        <div
          class="container flex flex-col items-center px-4 py-16 mx-auto text-center lg:pb-10 md:py-10 md:px-10 lg:px-32 dark:text-gray-900"
        >
          <div class="logo-container">
            <img
              src="../assets/images/parmazip-logo.png"
              alt="Logo"
              class="logo mt-20"
            />
          </div>
          <h2
            class="text-3xl font-bold tracki text-center text-red-500 sm:text-2xl dark:text-gray-50"
          >
            What's inside the Parmazip PMS?
          </h2>
          <h1
            class="text-5xl font-bold leadi sm:text-6xl xl:max-w-3xl dark:text-gray-900"
          >
            How it Works
          </h1>
        </div>
      </div>
    </section>

    <!-- Whats INSIDE Parmazip -->

    <section class="p-4 lg:p-8 dark:bg-gray-800 dark:text-gray-100 mb-40">
      <div class="max-w-6xl container mx-auto space-y-12">
        <div class="flex flex-col overflow-hidden lg:flex-row">
          <img
            src="../assets/images/parmazip-how-1.png"
            alt=""
            class="h-80 dark:bg-gray-500 aspect-video"
          />
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <!-- <span class="text-xs uppercase dark:text-gray-400"
            >Join, it's free</span
          > -->
            <h3 class="text-3xl font-bold">Key Pharmacy Tools</h3>
            <p class="my-6 dark:text-gray-400">
              Elevate your pharmacy experience with efficiency, accuracy, and
              top-tier customer care.
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Prescription history tracking</li>
              <li>Prescription refills</li>
              <li>Dangerous drugs dispense tracker</li>
              <li>Patient record management</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden lg:flex-row-reverse">
          <img
            src="../assets/images/parmazip-how-2.png"
            alt=""
            class="h-80 dark:bg-gray-500 aspect-video"
          />
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 class="text-3xl font-bold text-right">
              Powerful Point of Sale
            </h3>
            <p class="my-6 dark:text-gray-400 text-right">
              Revolutionize pharmacy operations with our specialized POS
              feature.
            </p>
            <ul class="list-disc pl-5 space-y-2 ml-auto w-max">
              <li>Digital and printable receipts</li>
              <li>Record discounts and coverages</li>
              <li>Capture prescription information</li>
              <li>Store customer data for future reference</li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col overflow-hidden lg:flex-row">
          <img
            src="../assets/images/parmazip-how-3.png"
            alt=""
            class="h-80 dark:bg-gray-500 aspect-video"
          />
          <div class="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <h3 class="text-3xl font-bold">Efficient Inventory Management</h3>
            <p class="my-6 dark:text-gray-400">
              Seamlessly track expiration dates with precision, ensuring product
              freshness and regulatory compliance.
            </p>
            <ul class="list-disc pl-5 space-y-2">
              <li>Set quantity thresholds and monitor stock levels</li>
              <li>Track medication expiry</li>
              <li>Easily import products using AI</li>
              <li>Produce daily and weekly reports</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- AND ALL THE TOOLS -->
    <section class="mt-20">
      <div
        class="-mt-40 px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-8 lg:py-20 dark:bg-gray-800 dark:text-gray-100"
      >
        <h2 class="mb-8 text-4xl font-bold leadi text-center">
          Plus all the tools made to simplify and automate your workflow and
          practice.
        </h2>
        <ul class="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Sales invoicing</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Receipt generation </span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Multiple payments</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Sales & gross profit reports</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Barcode scanning</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Inventory tracking</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Stock level alerts</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>AI-enabled import tool</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Auto-reorder</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>P2P capability</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>User roles & access</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Centralized patient database</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Prescription management</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Near-expiry alerts</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>QX and Z reading reports</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>EHR integration</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>Email support</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>In-app FAQs & tutorials</span>
          </li>
          <li class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="w-5 h-5 fill-current dark:text-violet-400"
            >
              <path
                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
              ></path>
              <polygon
                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
              ></polygon>
            </svg>
            <span>PSC/PWD/Controlled substance tracking</span>
          </li>
        </ul>
      </div>
    </section>

    <!--Join Button -->
    <div
      class="flex flex-col -mt-10 mb-10 space-y-4 items-center justify-center sm:flex-row sm:space-y-0 sm:space-x-4"
    >
      <a
        rel="noopener noreferrer"
        href="https://ph-prelaunch-waitlist.getresponsesite.com/"
        target="_blank"
        class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
        >Join the waitlist</a
      >
    </div>

    <!-- MORE PARMAZIP DETAILS -->
    <section>
      <div
        class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
      >
        <h1
          class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
        >
          Why Parmazip?
        </h1>
        <!-- <p
        class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
      >
        aka the 'All-in-One' Pharmacy Management System
      </p> -->
      </div>
      <!-- 3 Descriptions -->
      <!-- CARDS HERE -->

      <div
        class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-gray-700"
      >
        <div class="flex flex-col md:flex-row justify-center mt-4">
          <!--Card 1  -->

          <div
            class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
            ,
            data-aos="zoom-in"
          >
            <figure class="pt-3 px-3">
              <img
                src="../assets/images/parmazip-feature-1.png"
                alt="Shoes"
                class="border rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-center">
                Stay organized and be proactive.
              </h2>
              <p>
                On top of the standard sales and inventory tools of a POS,
                Parmazip offers pharmacy-centric features such as prescription
                log sheet, medication expiry alerts, dangerous drugs monitoring,
                and multi-user collaborative access, all while staying
                BIR-compliant.
              </p>
            </div>
          </div>

          <!-- Card 2 -->
          <div
            class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
            ,
            data-aos="zoom-in"
          >
            <figure class="pt-3 px-3">
              <img
                src="../assets/images/parmazip-feature-2.png"
                alt="Shoes"
                class="border rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-center">
                Work offline with peace of mind.
              </h2>
              <p>
                Protect your pharmacy’s data with new technology that puts data
                privacy and security first! Utilize a standalone system and
                collaborate with users locally through a sync framework even
                without internet connection. Get data when you need it, as you
                need it.
              </p>
              <!-- <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
</div> -->
            </div>
          </div>

          <!-- Card 3 -->
          <div
            class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-white shadow-lg border-gray-300 rounded-3xl border"
            ,
            data-aos="zoom-in"
          >
            <figure class="pt-3 px-3">
              <img
                src="../assets/images/parmazip-feature-3.png"
                alt="Shoes"
                class="border rounded-xl"
              />
            </figure>
            <div class="card-body">
              <h2 class="card-title text-center">
                Know and keep your data securely.
              </h2>
              <p>
                Keep all data in a local system and benefit from reports that
                keep you on your toes while staying well-informed. Gain
                advantage from Sales reporting, Inventory analytics, Incoming
                and outgoing summaries, and BIR-compliant reports.
              </p>
              <!-- <div class="card-actions justify-end">
    <button class="btn btn-primary">Buy Now</button>
</div> -->
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Panel -->
    <section class="dark:bg-gray-800 dark:text-gray-100">
      <div
        class="max-w-7xl container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between"
      >
        <div
          class="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-3xl xl:max-w-4xl lg:text-left"
        >
          <!-- Adjusted max-width here -->
          <h1 class="text-4xl font-bold leadi sm:text-5xl">
            Join our journey and get early access
          </h1>
          <p class="mt-6 mb-8 text-lg sm:mb-12">
            Be among the first to experience an offline-based point-of-sale and
            Pharmacy Management System in one.
          </p>
          <div
            class="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
          >
            <a
              rel="noopener noreferrer"
              href="https://ph-prelaunch-waitlist.getresponsesite.com/"
              target="_blank"
              class="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 bg-red-400 text-white"
              >Join the waitlist</a
            >
          </div>
        </div>
        <div
          class="flex items-center justify-center p-6 mt-8 lg:mt-0 h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
        >
          <img
            src="../assets/images/parmazip-lady.png"
            alt=""
            class="rounded-3xl object-contain h-[desired-height] sm:h-[desired-height] lg:h-[desired-height] xl:h-[desired-height] 2xl:h-[desired-height]"
          />
        </div>
      </div>
    </section>

    <!-- FOOTER -->

    <div class="dark:bg-gray-800 dark:text-gray-100 my-30">
      <footer
        class="footer items-center p-4 bg-neutral text-neutral-content px-40 h-200"
      >
        <aside class="items-center grid-flow-col">
          <img
            src="../assets/images/parmazip-logo-long.png"
            alt="Your Logo"
            class="object-contain h-10 mt-1 w-auto dark:text-default-400"
          />
          <!-- <p>EMPOWERING COMMUNITY PHARMACIES THROUGH TECHNOLOGY</p> -->
        </aside>
        <nav
          class="grid-flow-col gap-4 md:place-self-center md:justify-self-end"
        >
          <a href="https://twitter.com/ParmaZip" target="blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
              />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/parmazip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/company/parmazip/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              class="fill-current"
            >
              <path
                d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5m7 2a5 5 0 00-5 5 5 5 0 005 5 5 5 0 005-5 5 5 0 00-5-5m0 8a3 3 0 01-3-3 3 3 0 013-3 3 3 0 013 3 3 3 0 01-3 3m4.5-8.5A1.5 1.5 0 0016.5 5 1.5 1.5 0 0015 6.5 1.5 1.5 0 0016.5 8 1.5 1.5 0 0018 6.5z"
              />
            </svg>
          </a>
        </nav>
      </footer>
      <div
        class="py-6 text-xl text-center text-white dark:text-gray-400 bg-neutral h-50"
      >
        EMPOWERING COMMUNITY PHARMACIES THROUGH TECHNOLOGY<br />
        © 2024 Parmazip. All rights reserved.
      </div>
    </div>
  </div>
</template>

<script>
import { useHead } from "#app";
import { definePageMeta } from "#imports";
import GenericPanel from "~/components/commons/GenericPanel";
import ogBanner from "../assets/images/parmazip-banner.png";
import featuresInventory from "../assets/images/features-inventory.png";
import featuresPOS from "../assets/images/features-pos.png";
import featuresReports from "../assets/images/features-reports.png";

export default {
  components: {
    GenericPanel,
  },
  setup() {
    definePageMeta({
      layout: "default",
    });

    useHead({
      title: "Parmazip",
      description: "The 'All-in-One' Pharmacy Management System.",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
      meta: [
        {
          hid: "og:image",
          name: "og:image",
          property: "og:image",
          content: ogBanner,
        },
      ],
    });

    const features = [
      {
        src: featuresPOS,
        title: "Powerful Point-of-Sale",
        description: "Description here",
        alt: "Point-of-sales",
      },
      {
        src: featuresInventory,
        title: "Inventory Tracking",
        description: "DEscription here",
        alt: "Inventory tracking",
      },
      {
        src: featuresReports,
        title: "Pharmacy Tools",
        description: "Description here",
        alt: "Smart reports",
      },
    ];

    return {
      features,
    };
  },
};
</script>

<style scoped>
.logo-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px; /* Adjust the margin as needed */
  margin-top: -80px;
}

/* Style for the logo */
.logo {
  max-width: 100px; /* Set the maximum width of your logo */
  height: auto; /* Maintain the aspect ratio */
  margin-right: 10px; /* Adjust the margin as needed */
}
</style>

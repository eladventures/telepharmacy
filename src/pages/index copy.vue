<template>
    <div class="bg-white">
        <!-- HERO PANEL -->
        <section class="bg-white">
            <div class="dark:bg-violet-400">
                <div
                    class="container flex flex-col items-center px-4 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-gray-900"
                >
                    <!-- logo-center -->
                    <div class="logo-container">
                        <img
                            src="../assets/images/parmazip-logo.png"
                            alt="Logo"
                            class="logo"
                        />
                    </div>
                    <!-- title -->
                    <!-- <p class="text-xl sm:mb-12 xl:max-w-3xl dark:text-gray-900 font-inter">Designed for Canadian Pharmacy</p> -->
                    <h1
                        class="font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter"
                    >
                        Supercharge your workflows with Telepharmacy AI.
                    </h1>

                    <!--animation text here  -->
                    <!-- animation source:  https://dev.to/gayathri_r/how-to-add-a-typewriter-animation-in-vuejs-43kj -->
                    <!-- <div class="custom-container">
                        <h1 class="custom-heading items-center font-inter">
                            <span class="typed-text">{{ typeValue }}</span>
                            <span class="blinking-cursor">|</span>
                            <span class="cursor" :class="{ typing: typeStatus }"
                                >&nbsp;</span
                            >
                        </h1>
                    </div> -->

                    <p
                        class="mt-10 text-2xl sm:mb-12 xl:max-w-3xl dark:text-gray-900 font-inter"
                    >
                        Make minor ailment consultations more efficient with
                        Parmazip— the first AI-powered Telepharmacy tool that
                        gets you out of the admin work and more onto patient
                        care.<Input:t></Input:t>
                    </p>
                    <!-- button -->
                    <div
                        class="flex flex-wrap items-center justify-center -mt-5"
                    >
                        <!-- <input
                            type="text"
                            placeholder="Your email address"
                            class="input bg-white border-1 border-gray-600 w-full max-w-xs md:w-auto"
                        />
                        <button
                            type="button"
                            class="ml-2 px-8 py-3 text-lg border-1 text-white bg-red-400 rounded dark:text-gray-300"
                        >
                            Join Waitlist
                        </button> -->
                    </div>
                </div>
            </div>

            <!-- <div class="container flex flex-col items-center px-4 py-16 mt-20 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900">
    <video src="../assets/images/easy-joey-1.mp4" autoplay loop muted class="max-w-5xl mx-auto mb-10 mt-80 rounded-3xl shadow-2xl lg:-mt-40 dark:bg-gray-700 border-0 border-gray-800"></video>
  </div> -->

            <!-- <img
                src="../assets/images/parmazip-tele3.png"
                alt=""
                class="w-3/4 pt-40 mx-auto mb-20 rounded-lg lg:-mt-40 dark:bg-gray-500"
                data-aos="zoom-in"
            /> -->
            <video
              class="w-2/4 mx-auto mt-5 lg:mt-5 dark:bg-gray-500 border-4 border-gray-300" <!-- Added border utilities -->
              controls
              autoplay
              loop
              muted
            >
              <source src="../assets/images/parmazip-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

        </section>

        <!-- 2nd PANEL -->
        <section class="bg-white mb-20">
            <div
                class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
            >
                <h1
                    class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
                >
                    Your Own TelePharmacy
                </h1>
                <p
                    class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
                >
                    Affordable robust telepharmacy setup right in your pharmacy.
                </p>
            </div>

            <!-- 3 Descriptions -->
            <!-- CARDS HERE -->

            <div
                class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100 text-white"
            >
                <div class="flex flex-col md:flex-row justify-center mt-4">
                    <!--Card 1  -->
                    <div
                        class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl"
                        ,
                        data-aos="zoom-in"
                    >
                        <figure>
                            <img
                                src="../assets/images/parmazip-feature-1.png"
                                alt="Shoes"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Designed for Everyday Use
                            </h2>
                            <p>
                                Very easy interface that you can access anytime.
                                Consult, prescribe, and document. That's it!
                            </p>
                            <!-- <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
  </div> -->
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div
                        class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl"
                        ,
                        data-aos="zoom-in"
                    >
                        <figure>
                            <img
                                src="../assets/images/parmazip-feature-2.png"
                                alt="Shoes"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Partner with Dedicated Pharmacists
                            </h2>
                            <p>
                                Practive with confidence by partnering up with
                                your trusted pharmacists anywhere in Canada.
                            </p>
                            <!-- <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
  </div> -->
                        </div>
                    </div>

                    <!-- Card 3 -->
                    <div
                        class="mx-2 w-full md:w-1/3 card card-compact w-96 bg-red-400 shadow-xl"
                        ,
                        data-aos="zoom-in"
                    >
                        <figure>
                            <img
                                src="../assets/images/parmazip-feature-3.png"
                                alt="Shoes"
                            />
                        </figure>
                        <div class="card-body">
                            <h2 class="card-title">
                                Secure Telehealth Platform
                            </h2>
                            <p>
                                Parmazip is built with data privacy and security
                                at its core. Has end-to-end encryptuon. No data
                                is stored in the cloud.
                            </p>
                            <!-- <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
  </div> -->
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- 3rd PANEL-->
        <section class="bg-white pb-20">
            <div
                class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
            >
                <h1
                    class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
                >
                    How it works
                </h1>
                <p
                    class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
                >
                    There are two ways the patient can consult with the
                    pharmacist.
                </p>
            </div>

            <img
                src="../assets/images/parmazip-draw.png"
                alt=""
                class="max-w-7xl pt-40 mx-auto mb-20 rounded-xl lg:-mt-40 dark:bg-gray-500 border shadow-xl"
                data-aos="zoom-in"
            />

            <!-- HOW IT WORKS -->
            <!-- CARDS HERE -->

            <div class="max-w-7xl mx-auto dark:bg-gray-800 dark:text-gray-100">
                <div class="flex flex-col md:flex-row justify-center mt-4">
                    <!--Card 1  -->
                    <div
                        class="mx-2 w-full md:w-1/2 card card-compact w-96 border bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="../assets/images/parmazip-works-1.png"
                                alt="Shoes"
                            />
                        </figure>
                        <div class="card-body">
                            <!-- <h2 class="card-title">Designed for Everyday Use</h2> -->

                            <section
                                class="dark:bg-gray-800 dark:text-gray-100 text-gray-700"
                            >
                                <div
                                    class="container px-4 mx-auto space-y-8 lg:max-w-3xl"
                                >
                                    <h2 class="text-2xl font-bold md:text-3xl">
                                        When the Patient is at Home.
                                    </h2>
                                    <div class="space-y-8">
                                        <div>
                                            <!-- <h3 class="mb-3 text-lg font-bold md:text-xl">2021</h3> -->
                                            <ul class="space-y-4">
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Patient books a
                                                            consultation with a
                                                            pharmacist.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Pharmacist consults
                                                            and provides
                                                            prescription.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Prescription is sent
                                                            to preferred
                                                            pharmacy.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>

                    <!-- Card 2 -->
                    <div
                        class="mx-2 w-full md:w-1/2 card card-compact w-96 border bg-white shadow-xl"
                    >
                        <figure>
                            <img
                                src="../assets/images/parmazip-works-2.png"
                                alt="Shoes"
                            />
                        </figure>
                        <div class="card-body">
                            <!-- <h2 class="card-title">Partner with Dedicated Pharmacists</h2> -->
                            <section
                                class="dark:bg-gray-800 dark:text-gray-100 text-gray-700"
                            >
                                <div
                                    class="container px-4 mx-auto space-y-8 lg:max-w-3xl"
                                >
                                    <h2 class="text-2xl font-bold md:text-3xl">
                                        When the Patient is at the Pharmacy.
                                    </h2>
                                    <div class="space-y-8">
                                        <div>
                                            <!-- <h3 class="mb-3 text-lg font-bold md:text-xl">2021</h3> -->
                                            <ul class="space-y-4">
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Patient visits the
                                                            pharmacy and
                                                            registers in the
                                                            telehealth kiosk.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Pharmacist consults
                                                            and provides
                                                            prescription.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                                <li class="space-y-1">
                                                    <div
                                                        class="flex items-center space-x-2"
                                                    >
                                                        <svg
                                                            xmlns="http://www.w3.org/2000/svg"
                                                            viewBox="0 0 512 512"
                                                            class="w-4 h-4 fill-current dark:text-violet-400"
                                                        >
                                                            <path
                                                                d="M426.072,86.928A238.75,238.75,0,0,0,88.428,424.572,238.75,238.75,0,0,0,426.072,86.928ZM257.25,462.5c-114,0-206.75-92.748-206.75-206.75S143.248,49,257.25,49,464,141.748,464,255.75,371.252,462.5,257.25,462.5Z"
                                                            ></path>
                                                            <polygon
                                                                points="221.27 305.808 147.857 232.396 125.23 255.023 221.27 351.063 388.77 183.564 366.142 160.937 221.27 305.808"
                                                            ></polygon>
                                                        </svg>
                                                        <h4
                                                            class="text-xl font-medium"
                                                        >
                                                            Patient receives the
                                                            prescribed
                                                            medications.
                                                        </h4>
                                                    </div>
                                                    <p
                                                        class="ml-7 dark:text-gray-400"
                                                    >
                                                        More details here.
                                                    </p>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- INTRODUCING EASYJOEY -->
        <section
            class="dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-800"
        >
            <div class="container max-w-xl mx-auto p-6 lg:max-w-7xl">
                <div class="text-center">
                    <h2
                        class="text-3xl mt-20 font-bold tracki sm:text-5xl dark:text-gray-50 font-inter"
                    >
                        True Data Freedom.
                    </h2>
                    <p
                        class="max-w-4xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter"
                    >
                        With Parmazip, you control the software, you own your
                        data. Total Autonomy.
                    </p>
                </div>
            </div>
        </section>

        <!-- huge image -->
        <section class="bg-white py-2">
            <div>
                <img
                    src="../assets/images/parmazip-face.png"
                    alt=""
                    class="w-3/4 mx-auto mb-12 rounded-3xl shadow-md lg:mt-10 dark:bg-gray-500"
                />
            </div>

            <div
                class="container flex flex-col items-center px-4 py-16 pb-8 mx-auto text-center lg:pb-8 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 bg-white"
            >
                <h1
                    class="-mt-10 font-bold text-6xl leadi sm:text-5xl xl:max-w-4xl dark:text-gray-900 font-inter text-gray-800"
                >
                    Can't wait? Let's have coffee.
                </h1>
                <p
                    class="max-w-5xl mx-auto mt-4 text-xl dark:text-gray-400 font-inter text-gray-500"
                >
                    We'd love to talk to you'.
                </p>

                <!-- button -->
                <div class="flex flex-wrap items-center justify-center mt-20">
                    <input
                        type="text"
                        placeholder="Your email address"
                        class="input bg-white border-1 border-gray-600 w-full max-w-xs md:w-auto"
                    />
                    <button
                        type="button"
                        class="ml-2 px-8 py-3 text-lg border-1 text-white bg-red-400 rounded dark:text-gray-300"
                    >
                        Join Waitlist
                    </button>
                </div>
            </div>
        </section>

        <!-- OTHERS -->

        <!-- FOOTER -->

        <div class="dark:bg-gray-800 dark:text-gray-100 my-30">
            <footer class="px-4 divide-y dark:bg-gray-800 dark:text-gray-100">
                <div
                    class="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0"
                >
                    <div class="lg:w-1/3">
                        <a
                            rel="noopener noreferrer"
                            href="#"
                            class="flex justify-center space-x-3 lg:justify-start"
                        >
                            <div
                                class="flex items-left justify-left h-10 rounded-full dark:bg-default-400"
                            >
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    aria-label="Back to homepage"
                                    class="flex items-center"
                                >
                                    <img
                                        src="../assets/images/parmazip-logo-long.png"
                                        alt="Your Logo"
                                        class="object-contain h-10 mt-1 w-auto dark:text-default-400"
                                    />
                                </a>
                                <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
							<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
						</svg> -->
                            </div>
                            <!-- <span class="self-center text-2xl font-semibold">EasyJoey</span> -->
                        </a>
                    </div>
                    <div
                        class="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4"
                    >
                        <div class="space-y-3">
                            <h3 class="tracki uppercase dark:text-gray-50">
                                Product
                            </h3>
                            <ul class="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Features</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Integrations</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Pricing</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >FAQ</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="space-y-3">
                            <h3 class="tracki uppercase dark:text-gray-50">
                                Company
                            </h3>
                            <ul class="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Privacy</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Terms of Service</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="space-y-3">
                            <h3 class="uppercase dark:text-gray-50">
                                Developers
                            </h3>
                            <ul class="space-y-1">
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Public API</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Documentation</a
                                    >
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" href="#"
                                        >Guides</a
                                    >
                                </li>
                            </ul>
                        </div>
                        <div class="space-y-3">
                            <div class="uppercase dark:text-gray-50">
                                Social media
                            </div>
                            <div class="flex justify-start space-x-3">
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    title="Facebook"
                                    class="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 32 32"
                                        class="w-5 h-5 fill-current"
                                    >
                                        <path
                                            d="M32 16c0-8.839-7.167-16-16-16-8.839 0-16 7.161-16 16 0 7.984 5.849 14.604 13.5 15.803v-11.177h-4.063v-4.625h4.063v-3.527c0-4.009 2.385-6.223 6.041-6.223 1.751 0 3.584 0.312 3.584 0.312v3.937h-2.021c-1.984 0-2.604 1.235-2.604 2.5v3h4.437l-0.713 4.625h-3.724v11.177c7.645-1.199 13.5-7.819 13.5-15.803z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    title="Twitter"
                                    class="flex items-center p-1"
                                >
                                    <svg
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        class="w-5 h-5 fill-current"
                                    >
                                        <path
                                            d="M23.954 4.569a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 002.46-2.548l-.047-.02z"
                                        ></path>
                                    </svg>
                                </a>
                                <a
                                    rel="noopener noreferrer"
                                    href="#"
                                    title="Instagram"
                                    class="flex items-center p-1"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 32 32"
                                        fill="currentColor"
                                        class="w-5 h-5 fill-current"
                                    >
                                        <path
                                            d="M16 0c-4.349 0-4.891 0.021-6.593 0.093-1.709 0.084-2.865 0.349-3.885 0.745-1.052 0.412-1.948 0.959-2.833 1.849-0.891 0.885-1.443 1.781-1.849 2.833-0.396 1.020-0.661 2.176-0.745 3.885-0.077 1.703-0.093 2.244-0.093 6.593s0.021 4.891 0.093 6.593c0.084 1.704 0.349 2.865 0.745 3.885 0.412 1.052 0.959 1.948 1.849 2.833 0.885 0.891 1.781 1.443 2.833 1.849 1.020 0.391 2.181 0.661 3.885 0.745 1.703 0.077 2.244 0.093 6.593 0.093s4.891-0.021 6.593-0.093c1.704-0.084 2.865-0.355 3.885-0.745 1.052-0.412 1.948-0.959 2.833-1.849 0.891-0.885 1.443-1.776 1.849-2.833 0.391-1.020 0.661-2.181 0.745-3.885 0.077-1.703 0.093-2.244 0.093-6.593s-0.021-4.891-0.093-6.593c-0.084-1.704-0.355-2.871-0.745-3.885-0.412-1.052-0.959-1.948-1.849-2.833-0.885-0.891-1.776-1.443-2.833-1.849-1.020-0.396-2.181-0.661-3.885-0.745-1.703-0.077-2.244-0.093-6.593-0.093zM16 2.88c4.271 0 4.781 0.021 6.469 0.093 1.557 0.073 2.405 0.333 2.968 0.553 0.751 0.291 1.276 0.635 1.844 1.197 0.557 0.557 0.901 1.088 1.192 1.839 0.22 0.563 0.48 1.411 0.553 2.968 0.072 1.688 0.093 2.199 0.093 6.469s-0.021 4.781-0.099 6.469c-0.084 1.557-0.344 2.405-0.563 2.968-0.303 0.751-0.641 1.276-1.199 1.844-0.563 0.557-1.099 0.901-1.844 1.192-0.556 0.22-1.416 0.48-2.979 0.553-1.697 0.072-2.197 0.093-6.479 0.093s-4.781-0.021-6.48-0.099c-1.557-0.084-2.416-0.344-2.979-0.563-0.76-0.303-1.281-0.641-1.839-1.199-0.563-0.563-0.921-1.099-1.197-1.844-0.224-0.556-0.48-1.416-0.563-2.979-0.057-1.677-0.084-2.197-0.084-6.459 0-4.26 0.027-4.781 0.084-6.479 0.083-1.563 0.339-2.421 0.563-2.979 0.276-0.761 0.635-1.281 1.197-1.844 0.557-0.557 1.079-0.917 1.839-1.199 0.563-0.219 1.401-0.479 2.964-0.557 1.697-0.061 2.197-0.083 6.473-0.083zM16 7.787c-4.541 0-8.213 3.677-8.213 8.213 0 4.541 3.677 8.213 8.213 8.213 4.541 0 8.213-3.677 8.213-8.213 0-4.541-3.677-8.213-8.213-8.213zM16 21.333c-2.948 0-5.333-2.385-5.333-5.333s2.385-5.333 5.333-5.333c2.948 0 5.333 2.385 5.333 5.333s-2.385 5.333-5.333 5.333zM26.464 7.459c0 1.063-0.865 1.921-1.923 1.921-1.063 0-1.921-0.859-1.921-1.921 0-1.057 0.864-1.917 1.921-1.917s1.923 0.86 1.923 1.917z"
                                        ></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="py-6 text-sm text-center dark:text-gray-400">
                    © 2024 Parmazip. All rights reserved.
                </div>
            </footer>
        </div>
    </div>
</template>

<!-- SCRIPT STARTS -->
<script>
import { useHead } from "#app";
import { definePageMeta } from "#imports";
import GenericPanel from "~/components/commons/GenericPanel";
import ogBanner from "../assets/images/nuxtwind-daisy-og-banner.jpg";

export default {
    name: "Hero",
    components: {
        GenericPanel,
    },
    setup() {
        definePageMeta({
            layout: "default",
        });

        useHead({
            title: "EasyJoey",
            description:
                "EasyJoey is the first and only local-first health records management system.",
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

        return {};
    },
    name: "typeWiriter",
    data: () => {
        return {
            typeValue: "",
            typeStatus: false,
            displayTextArray: [
                "For Canadian Pharmacies",
                "It's Secure",
                "Truly Private",
                "It's Encrypted",
            ],
            typingSpeed: 100,
            erasingSpeed: 100,
            newTextDelay: 2000,
            displayTextArrayIndex: 0,
            charIndex: 0,
        };
    },
    props: {},
    created() {
        setTimeout(this.typeText, this.newTextDelay + 200);
    },
    methods: {
        typeText() {
            if (
                this.charIndex <
                this.displayTextArray[this.displayTextArrayIndex].length
            ) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue += this.displayTextArray[
                    this.displayTextArrayIndex
                ].charAt(this.charIndex);
                this.charIndex += 1;
                setTimeout(this.typeText, this.typingSpeed);
            } else {
                this.typeStatus = false;
                setTimeout(this.eraseText, this.newTextDelay);
            }
        },
        eraseText() {
            if (this.charIndex > 0) {
                if (!this.typeStatus) this.typeStatus = true;
                this.typeValue = this.displayTextArray[
                    this.displayTextArrayIndex
                ].substring(0, this.charIndex - 1);
                this.charIndex -= 1;
                setTimeout(this.eraseText, this.erasingSpeed);
            } else {
                this.typeStatus = false;
                this.displayTextArrayIndex += 1;
                if (this.displayTextArrayIndex >= this.displayTextArray.length)
                    this.displayTextArrayIndex = 0;
                setTimeout(this.typeText, this.typingSpeed + 1000);
            }
        },
    },
};
</script>

<style scoped>
/* type of font */
.font-inter {
    font-family: "Inter", sans-serif; /* Replace 'Inter' with your font's name if different */
}

.font-courier {
    font-family: "Courier", monospace;
}

/* easyjoey logo container */
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

/* font animation container */
.custom-container {
    /* width: 100%;
  height: 100vh; */
    display: flex;
    justify-content: center;
    align-items: center;
}
.custom-heading {
    font-size: 2.5rem;
    font-weight: normal;
}

/* animation blinking */
.custom-heading .typed-text {
    color: #f44336;
}

.blinking-cursor {
    font-size: 2.5rem;
    color: #2c3e50;
    -webkit-animation: 1s blink step-end infinite;
    -moz-animation: 1s blink step-end infinite;
    -ms-animation: 1s blink step-end infinite;
    -o-animation: 1s blink step-end infinite;
    animation: 1s blink step-end infinite;
}
@keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-moz-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-webkit-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-ms-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
@-o-keyframes blink {
    from,
    to {
        color: transparent;
    }
    50% {
        color: #2c3e50;
    }
}
/* end of animation blinking */
</style>

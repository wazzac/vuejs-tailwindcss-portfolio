<script>
import feather from "feather-icons";

export default {
    name: "Home",
    data: () => {
        return {
            theme: "",
        };
    },
    created() {
        this.theme = localStorage.getItem("theme") || "light";
    },
    mounted() {
        feather.replace();
        this.theme = localStorage.getItem("theme") || "light";
    },
    updated() {
        feather.replace();
    },
    methods: {},
};
</script>

<template>
    <section class="flex flex-col items-center mt-12 sm:justify-between sm:flex-row sm:mt-10">
        <!-- Banner left contents -->
        <div class="w-full text-left md:w-1/3">
            <h1
                class="text-3xl text-center uppercase font-general-semibold md:text-3xl xl:text-4xl sm:text-left text-ternary-dark dark:text-primary-light"
            >
                Hey, Warren here👋
            </h1>
            <p
                class="mt-2 text-lg leading-none text-center text-gray-400 font-general-medium sm:text-xl xl:text-2xl sm:text-left"
            >
                A Software Engineer with a passion for integration, automation, databases and development.
            </p>
            <!--
            <div class="flex justify-center sm:block">
                <a
                    download="Stoman-Resume.pdf"
                    href="/files/Stoman-Resume.pdf"
                    class="flex justify-center items-center w-36 sm:w-48 mt-12 mb-6 sm:mb-0 text-lg border border-indigo-200 dark:border-ternary-dark py-2.5 sm:py-3 shadow-lg rounded-lg bg-indigo-50 focus:ring-1 focus:ring-indigo-900 hover:bg-indigo-500 text-gray-500 hover:text-white duration-500"
                    aria-label="Download Resume"
                >
                    <i data-feather="arrow-down-circle" class="w-5 ml-0 mr-2 duration-100 sm:ml-1 sm:mr-3 sm:w-6"></i>
                    <span class="text-sm duration-100 sm:text-lg font-general-medium">Download CV</span></a
                >
            </div>
            -->
        </div>

        <!-- Banner right illustration -->
        <div class="float-right w-full text-right md:w-2/3">
            <img v-if="theme === 'light'" src="@/assets/images/projectpeople.svg" alt="Developer" class="float-right" />
            <img v-else src="@/assets/images/projectpeople.svg" alt="Developer" class="float-right"/>
        </div>
    </section>
</template>

<style scoped></style>

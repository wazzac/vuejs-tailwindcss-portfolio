<script>
export default {
    props: ["showModal", "isOpen"],
};
</script>

<template>
    <!-- Header links -->
    <div
        :class="isOpen ? 'block' : 'hidden'"
        class="items-center justify-center p-5 m-0 mt-5 shadow-lg sm:ml-4 sm:mt-3 sm:flex sm:p-0 sm:shadow-none"
    >
        <router-link
            to="/"
            class="block mb-2 text-lg font-medium text-left font-general-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 sm:py-2"
            aria-label="Projects"
            >Home</router-link
        >
        <router-link
            to="/projects"
            class="block mb-2 text-lg font-medium text-left font-general-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 sm:py-2"
            aria-label="Projects"
            >GitHub Projects</router-link
        >
        <router-link
            to="/about"
            class="block pt-3 mb-2 text-lg font-medium text-left border-t-2 font-general-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
            aria-label="About Me"
            >About Me</router-link
        >
        <!--
		<router-link
			to="/contact"
			class="block pt-3 mb-2 text-lg font-medium text-left border-t-2 font-general-medium text-primary-dark dark:text-ternary-light hover:text-indigo-600 dark:hover:text-indigo-300 sm:mx-4 sm:py-2 sm:pt-2 sm:border-t-0 border-primary-light dark:border-secondary-dark"
			aria-label="Contact"
			>Contact</router-link
		>
        <div class="pt-3 border-t-2 sm:pt-0 sm:border-t-0 border-primary-light dark:border-secondary-dark">
            <button
                class="block px-4 py-2 mt-2 font-medium text-left text-white duration-500 bg-indigo-500 rounded-sm shadow-sm font-general-medium sm:hidden text-md hover:bg-indigo-600"
                @click="showModal()"
                aria-label="Hire Me Button"
            >
                Hire Me
            </button>
        </div>
		-->
    </div>
</template>

<style lang="scss" scoped></style>

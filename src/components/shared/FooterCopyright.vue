<script>
export default {
    data: () => {
        return {
            copyrightDate: new Date().getFullYear(),
            projectName: "Vue & TailwindCss Project",
            author: "Stoman",
        };
    },
};
</script>

<template>
    <div class="flex justify-center items-center text-center">
        <div class="font-general-regular text-sm text-ternary-dark dark:text-ternary-light">
            &copy; {{ copyrightDate }} ...template forked from GitHub
			<a
                href="https://github.com/realstoman/vuejs-tailwindcss-portfolio"
                target="__blank"
                class="font-general-medium hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
            >
                {{ projectName }}
            </a>
			by
			<a
                href="https://stoman.me"
                target="__blank"
                class="font-general-medium text-secondary-dark dark:text-secondary-light uppercase hover:underline hover:text-indigo-600 dark:hover:text-indigo-300 duration-500"
                >{{ author }}</a
            >. ~Thanks mate 😉
        </div>
    </div>
</template>

<style lang="scss" scoped></style>

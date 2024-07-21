<script>
import feather from "feather-icons";
import ProjectsFilter from "./ProjectsFilter.vue";
import ProjectSingle from "./ProjectSingle.vue";
import projects from "../../data/projects";

export default {
    components: { ProjectSingle, ProjectsFilter },
    data: () => {
        return {
            projects,
            projectsHeading: "Active GitHub Projects",
            selectedCategory: "",
            searchProject: "",
        };
    },
    computed: {
        // Get the filtered projects
        filteredProjects() {
            if (this.selectedCategory) {
                return this.filterProjectsByCategory();
            } else if (this.searchProject) {
                return this.filterProjectsBySearch();
            }
            return this.projects;
        },
    },
    methods: {
        // Filter projects by category
        filterProjectsByCategory() {
            return this.projects.filter((item) => {
                let category = item.category.charAt(0).toUpperCase() + item.category.slice(1);
                console.log(category);
                return category.includes(this.selectedCategory);
            });
        },
        // Filter projects by title search
        filterProjectsBySearch() {
            let project = new RegExp(this.searchProject, "i");
            return this.projects.filter((el) => el.title.match(project));
        },
    },
    mounted() {
        feather.replace();
    },
};
</script>

<template>
    <!-- Projects grid -->
    <section class="pt-10 sm:pt-14">
        <!-- Projects grid title -->
        <div class="text-center">
            <p
                class="mb-2 text-2xl font-semibold font-general-semibold sm:text-5xl text-ternary-dark dark:text-ternary-light"
            >
                {{ projectsHeading }}
            </p>
        </div>

        <!-- Filter and search projects -->
        <div class="mt-10 sm:mt-10">
            <h3
                class="mb-4 font-normal text-center font-general-regular text-secondary-dark dark:text-ternary-light text-md sm:text-xl"
            >
                Search projects by title or filter by category
            </h3>
            <div class="flex justify-between gap-2 pb-3 border-b border-primary-light dark:border-secondary-dark">
                <div class="flex justify-between gap-2">
                    <span
                        class="hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer"
                    >
                        <i data-feather="search" class="text-ternary-dark dark:text-ternary-light"></i>
                    </span>
                    <input
                        v-model="searchProject"
                        class="py-2 pl-3 pr-1 text-sm border-gray-200 rounded-lg font-general-medium sm:px-4 border-1 dark:border-secondary-dark sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light"
                        id="name"
                        name="name"
                        type="search"
                        required=""
                        placeholder="Search Projects"
                        aria-label="Name"
                    />
                </div>
                <ProjectsFilter @filter="selectedCategory = $event" />
            </div>
        </div>

        <!-- Projects grid -->
        <div class="grid grid-cols-1 mt-6 sm:grid-cols-2 lg:grid-cols-2 sm:gap-10">
            <ProjectSingle v-for="project in filteredProjects" :key="project.id" :project="project" />
        </div>
    </section>
</template>

<style scoped></style>

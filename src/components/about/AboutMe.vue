<script>
export default {
    setup() {
        return {
            bios: [
                {
                    id: 1,
                    bio: "More information about me... it's coming soon!",
                },
            ],
        };
    },
};
</script>

<template>
    <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img src="@/assets/images/comingsoon.png" class="rounded-xl w-96" alt="" />
        </div>

        <!-- About details -->
        <div class="w-full sm:w-3/4 text-left">
            <p
                v-for="bio in bios"
                :key="bio.id"
                class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg"
            >
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>

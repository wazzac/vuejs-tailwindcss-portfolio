<script>
export default {
    setup() {
        return {
            bios: [
                {
                    id: 1,
                    bio: "Hey there👋 I'm Warren Coetzee, a software developer based in Perth, Australia. By day, I'm passionate about crafting clean and efficient code, particularly with PHP projects and building RESTful APIs. I'm currently diving deep into the worlds of Yii2 and Laravel frameworks, constantly learning and expanding my skillset. I also enjoy working with databases and data management in general. In my spare time, I love working on my own open-source projects and would be thrilled if others would fork and help improve them.",
                },
                {
                    id: 2,
                    bio: "Outside of the coding world, my interests take a more aquatic turn. I love exploring the ocean and spending time snorkelling whenever I get the chance. When I'm on dry land, you might find me grappling on the BJJ mats, cheering on the Springboks or Blue Bulls (champions all the way!), or spending quality time with my amazing wife and two fantastic kids."
                },
                {
                    id: 3,
                    bio: "Feel free to browse around my portfolio and see the open-source projects I'm working on, or connect with me on LinkedIn!"
                },
            ],
        };
    },
};
</script>

<template>
    <div class="block mt-10 sm:flex sm:gap-10 sm:mt-20">
        <!-- About profile image -->
        <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
            <img src="@/assets/images/comingsoon.png" class="rounded-xl w-96" alt="" />
        </div>

        <!-- About details -->
        <div class="w-full text-left sm:w-3/4">
            <p
                v-for="bio in bios"
                :key="bio.id"
                class="mb-4 text-lg font-general-regular text-ternary-dark dark:text-ternary-light"
            >
                {{ bio.bio }}
            </p>
        </div>
    </div>
</template>

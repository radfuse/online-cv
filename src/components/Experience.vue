<template>
    <div class="md:flex mb-5">
        <div class="w-full md:w-1/2 px-6 mb-2 md:mb-0">
            <h2 class="font-bold text-lg">{{ item.name }}</h2>
            <h3 class="font-thin text-sm">{{ item.start }} - {{ item.end }}</h3>
        </div>
        <div class="w-full md:w-1/2 px-6">
            <h3 class="text-lg">{{ item.position }}</h3>
            <p class="text-sm" v-html="item.description"></p>
        </div>
    </div>
</template>

<script>
export default {
	name: 'Experience',
    props: {
        item: {},
    },
}
</script>
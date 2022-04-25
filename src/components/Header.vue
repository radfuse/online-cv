<template>
    <div class="px-3 border-b-2 border-gray-200" :class="[marginBottom ? 'mb-5' : '']">
        <h1 class="font-bold text-xl px-3 pb-2 relative inline-block">
            {{ title }}
            <div class="divider bg-white w-full absolute left-0 px-3"><div class="bg-red-600 w-full h-full"></div></div>
        </h1>
    </div>
</template>

<script>
export default {
	name: 'Header',
    props: {
        title: {},
        marginBottom: {
            default: true,
        }
    },
}
</script>

<style lang="scss">
.divider {
    bottom: -2px;
    height: 2px;
}
</style>
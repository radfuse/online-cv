<template>
    <div class="w-full px-3 hover:bg-gray-200 px-3 leading-6">
        <span class="w-1/2 inline-block">{{ item.name }}</span>
        <span class="w-1/2 inline-block text-right text-gray-600">
            <i class="fa fa-circle ml-2" v-for="i in item.stars" :key="item.name + i"></i>
            <i class="fa fa-circle-o ml-2" v-for="i in (5 - item.stars)" :key="item.name + (5 - i + 1)"></i>
        </span>
    </div>
</template>

<script>
export default {
	name: 'Ability',
    props: {
        item: {},
    },
}
</script>
<template>
    <div class="px-3">
        <h2 class="font-bold text-base px-3 pb-2 relative inline-block">
            {{ title }}
        </h2>
    </div>
</template>

<script>
export default {
	name: 'Subheader',
    props: {
        title: {},
    },
}
</script>
<template>
    <span>
        <font-awesome-icon :icon="props.icon" />
    </span>
</template>

<script lang="ts" setup>
const props = defineProps<{ icon: string }>()
</script>

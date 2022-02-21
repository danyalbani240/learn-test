<template>
    <div>
        <button v-show="isLogedin">logout</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isLogedin: true,
        };
    },
};
</script>

<style></style>

<template>
    <form @submit.prevent="handleLogin">
        <input type="text" v-model="name" />
        <button type="submit">submit</button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            name: "",
        };
    },
    emits: ["submit"],
    methods: {
        handleLogin() {
            this.$emit("submit", this.name);
        },
    },
};
</script>

<style></style>

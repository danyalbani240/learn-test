<template>
    <p v-if="err" data-testid="message-error">{{ err }}</p>

    <p data-testid="message" v-else-if="message">{{ message.text }}</p>
</template>

<script>
import { getMessage } from "../service/axios.js";

export default {
    data() {
        return {
            message: {},
            err: null,
        };
    },
    async created() {
        try {
            this.message = await getMessage();
            console.log(this.message);
        } catch (e) {
            console.log(e);
            this.err = "something went wrong";
        }
    },
    mounted() {
        console.log(this.message);
    },
};
</script>

<style></style>

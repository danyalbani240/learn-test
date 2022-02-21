<template>
    <div class="home">
        <AppHeader />
        <img alt="Vue logo" src="../assets/logo.png" />
    </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
// @ is an alias to /src

export default {
    name: "Home",
    components: { AppHeader },
};
</script>

<template>
    <div id="app">
        <component :is="layout"></component>
    </div>
</template>

<script>
const MainLayout = () => import("@/layouts/MainLayout");
const LoginLayout = () => import("@/layouts/LoginLayout");
const ErrorLayout = () => import("@/layouts/Page404");

const App = {
    name: "App",
    data: () => ({}),
    components: {
        MainLayout,
        LoginLayout,
        ErrorLayout,
    },
    computed: {
        layout() {
            if (this.$route.meta.layout) return this.$route.meta.layout + "-layout";
            return "error-layout";
        },
    },
    mounted() {
        let user = localStorage.getItem("user");
        if (user === null && this.$route.path !== "/login") {
            this.$router.push({ name: "login" });
            this.$message({ message: "Вам нужно авторизироваться!", type: "error" });
        }
    },
};
export default App;
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,500;0,700;1,400;1,500&display=swap");
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}
ul {
    list-style: none;
}
#app {
    min-height: 100vh;
}
.main-color {
    background: rgba(131, 187, 233, 0.993);
}
.second-color {
    background: rgba(29, 31, 32, 0.904);
}
.gold-color {
    background: #ffcd24;
}
.black-color {
    background: #33393b;
}
.skyblue-color {
    background: #9dc8e4;
}
</style>

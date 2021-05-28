<template>
    <div class="main">
        <Header />
        <main class="main-content">
            <Menu />
            <div class="content second-color">
                <transition name="fade" mode="out-in">
                    <router-view />
                </transition>
            </div>
        </main>
    </div>
</template>

<script>
const Menu = () => import("../components/Menu");
const Header = () => import("../components/Header");
export default {
    components: {
        Menu,
        Header,
    },
};
</script>

<style scoped>
.main {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 75px 1fr;
    grid-template-areas:
        "header header header"
        "main-content main-content main-content";
}
.header {
    grid-area: header;
    border-bottom: 1px solid black;
}
.main-content {
    grid-area: main-content;
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-areas: "menu content";
}
.menu {
    grid-area: menu;
}
.content {
    grid-area: content;
    padding: 25px;
    transition: all 0.3s ease;
}
.fade-enter-active,
.fade-leave-active {
    transition: all 0.5s ease;
}
.fade-enter {
    transform: translateX(-10px);
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: translateX(10px);
}
</style>

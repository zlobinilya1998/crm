<template>
    <div class="menu main-color">
        <ul>
            <li
                class="item"
                v-for="item in btn"
                :key="item.name"
                :class="{ active: activeBtn === item.name }"
                @click="clickOnLink(item.path), (activeBtn = item.name)"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "Menu",
    components: {},
    data: () => ({
        activeBtn: "Счет",
        btn: [
            { name: "Счет", path: "score" },
            { name: "История", path: "history" },
            { name: "Планирование", path: "planing" },
            { name: "Новая запись", path: "recording" },
            { name: "Категория", path: "category" },
        ],
    }),

    methods: {
        clickOnLink(path) {
            if (path === this.$route.fullPath) return;
            this.$router.push({ name: path });
        },
    },
};
</script>

<style scoped>
.menu {
    box-shadow: -5px 0 45px 0px rgba(67, 107, 138, 0.938) inset;
}
.item {
    padding: 15px;
    transition: all 0.3s ease;
    cursor: pointer;
}
.item:hover {
    background: rgba(253, 255, 254, 0.465);
    color: rgb(24, 24, 24);
}
.item.active {
    background: rgb(255, 255, 255);
    box-shadow: 0px 12px 10px -6px rgba(34, 60, 80, 0.2);
}
</style>

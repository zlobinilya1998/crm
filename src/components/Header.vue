<template>
    <header class="header main-color">
        <div class="burger">
            <div class="date">
                <p>{{ time }}</p>
            </div>
        </div>
        <el-dropdown v-if="user">
            <span
                class="el-dropdown-link"
                :style="{ cursor: 'pointer', display: 'flex', alignItems: 'center' }"
            >
                <p class="user-name">
                    {{ user.login }}
                </p>
                <el-avatar icon="el-icon-user-solid"></el-avatar>
            </span>
            <el-dropdown-menu :style="{}" slot="dropdown">
                <div class="item" @click="$router.push({ name: 'profile' })">
                    Мой профиль
                    <el-icon class="el-icon-user-solid icon" />
                </div>
                <div class="item" @click="$router.push({ name: 'config' })">
                    Настройки
                    <el-icon class="el-icon-setting icon" />
                </div>
                <div class="item" @click="logout">
                    Выход
                    <el-icon class="el-icon-s-home icon" />
                </div>
            </el-dropdown-menu>
        </el-dropdown>
    </header>
</template>

<script>
export default {
    data: () => ({
        time: null,
        intervalId: null,
        user: null,
    }),
    methods: {
        logout() {
            this.$message({ message: "Вы вышли из системы", type: "info" });
            sessionStorage.clear();
            this.$router.push({ name: "login" });
        },
    },
    mounted() {
        this.user = JSON.parse(sessionStorage.getItem("user"));
        this.time = new Date().toLocaleString("default", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    },
};
</script>

<style scoped>
.header {
    padding: 0 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.item {
    cursor: pointer;
    padding: 10px;
    transition: all 0.4s ease;
    display: flex;
    justify-content: space-between;
}
.item:hover {
    background: rgba(131, 187, 233, 0.993);
    color: white;
}
.user-name {
    margin-right: 10px;
    color: white;
}
.icon {
    margin-left: 5px;
}
</style>

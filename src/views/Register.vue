<template>
    <div class="form">
        <h4 :style="{ textAlign: 'center', color: 'white' }">Регистрация</h4>
        <el-input class="input" placeholder="Имя пользователя" v-model="login"></el-input>
        <el-input class="input" placeholder="Электронная почта" v-model="email"></el-input>
        <el-input
            class="input"
            placeholder="Введите пароль"
            v-model="firstPassword"
            show-password
        ></el-input>
        <el-input
            class="input"
            placeholder="Повторите пароль"
            show-password
            v-model="secondPassword"
        ></el-input>
        <el-button class="btn" @click="createUser">Зарегистрироваться</el-button>
    </div>
</template>

<script>
export default {
    data: () => ({
        login: "",
        email: "",
        firstPassword: "",
        secondPassword: "",
    }),
    methods: {
        async createUser() {
            if (this.firstPassword !== this.secondPassword) return;
            await this.$axios.post("/register", {
                login: this.login,
                email: this.email,
                password: this.firstPassword,
            });
            this.$message("Пользователь успешно создан");
            this.$router.push({ name: "score" });
        },
    },
};
</script>

<style scoped>
.form {
    width: 400px;
    padding: 30px 25px;
    border-radius: 10px;
    border: 2px solid white;
    background: rgba(59, 61, 63, 0.904);
}
.input {
    margin: 20px 0 0;
}
.btn {
    width: 100%;
    margin: 20px 0 0;
    background: skyblue;
    color: white;
    transition: all 0.3s ease;
}
.btn:hover {
    color: black;
    background: white;
}
</style>

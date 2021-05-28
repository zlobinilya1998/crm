<template>
    <div class="login main-color">
        <div class="form">
            <h4 :style="{ textAlign: 'center', color: 'white' }">Вход в аккаунт</h4>
            <el-input
                class="input"
                placeholder="Введите имя пользователя"
                v-model="login"
            ></el-input>
            <el-input class="input" placeholder="Введите пароль" v-model="password"></el-input>
            <el-button class="btn" @click="loginCrm">Войти</el-button>
            <div v-if="reqState" :style="{ color: 'white', margin: '20px', textAlign: 'center' }">
                {{ reqState }}
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
    data: () => ({
        login: "",
        password: "",
        reqState: null,
    }),
    methods: {
        ...mapMutations(["setUser"]),
        async loginCrm() {
            try {
                let res = await this.$axios.post("/login", {
                    login: this.login,
                    password: this.password,
                });
                if (res.data.state) {
                    localStorage.setItem("user", JSON.stringify(res.data.user));
                    this.$router.push({ name: "score" });
                    this.$message({ message: "Вход выполнен", type: "success" });
                } else {
                    this.$message({
                        message: "Имя пользователя или пароль введены не верно",
                        type: "error",
                    });
                }
            } catch (e) {
                console.log(e);
            }
        },
    },
};
</script>

<style scoped>
.login {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
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

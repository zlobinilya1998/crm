<template>
    <div class="score" v-if="user !== null">
        <div class="title">
            <h3>Счет</h3>
        </div>
        <el-divider />
        <div class="wrapper">
            <div class="currency">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Счет в валюте</span>
                        <Loader v-if="loading" />
                        <el-button
                            v-else
                            style="float: right; padding: 10px"
                            type="primary"
                            @click="fetchCurrency"
                        >
                            Загрузить данные
                        </el-button>
                    </div>
                    <div class="text item">{{ user.currency + ` &#8381;` }}</div>
                    <div class="text item">{{ dollar + ` &#36;` }}</div>
                    <div class="text item">{{ eur + ` &#8364;` }}</div>
                </el-card>
            </div>
            <div class="courses">
                <el-card class="box-card">
                    <div slot="header" class="clearfix">
                        <span>Курс валют</span>
                    </div>
                    <div v-if="currency !== null">
                        <div
                            v-for="(key, val) in currency.rates"
                            :key="val"
                            :style="{
                                borderBottom: `1px solid green`,
                                padding: '5px 0',
                                display: 'flex',
                                justifyContent: 'space-between',
                            }"
                            class="text item"
                        >
                            <p>{{ currencyFilter(key) + val }}</p>
                            <p>{{ dateFilter(currency.date) }}</p>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
const Loader = () => import("../components/Loader");

import { mapActions } from "vuex";

export default {
    data: () => ({
        loading: false,
        currency: null,
        user: null,
    }),
    components: {
        Loader,
    },
    computed: {
        dollar() {
            if (this.currency) {
                return (this.user.currency / this.currency.rates.RUB).toFixed(2);
            } else return 0;
        },
        eur() {
            if (this.currency) {
                return (this.dollar * this.currency.rates.USD).toFixed(2);
            } else return 0;
        },
    },
    methods: {
        ...mapActions(["fetchCurrency"]),
        dateFilter(val) {
            let date = new Date(val).toLocaleString("default", {
                day: "numeric",
                month: "short",
                year: "numeric",
            });
            return date;
        },
        currencyFilter(cur) {
            return cur.toFixed(2);
        },
        async fetchCurrency() {
            const apiKey = `a92af3675ee7eeb51d0d2c69e07b63cb`;
            let res = await fetch(
                `http://data.fixer.io/api/latest?access_key=${apiKey}&symbols=RUB,EUR,USD`
            );
            let json = await res.json();
            this.currency = json;
        },
    },
    mounted() {
        let user = sessionStorage.getItem("user");
        this.user = JSON.parse(user);
    },
};
</script>

<style scoped>
.wrapper {
    display: flex;
    flex: 1;
    margin: 40px 0 0;
}
.currency {
    flex: 1;
    display: flex;
    justify-content: center;
}
.courses {
    flex: 1;
    display: flex;
    justify-content: center;
}
.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
.clearfix {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.box-card {
    width: 480px;
    height: 100%;
    transition: all 0.3s ease;
}
.box-card:hover {
    box-shadow: 0px 0px 2px 5px rgba(34, 60, 80, 0.2);
}
</style>

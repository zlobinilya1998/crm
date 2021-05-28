<template>
    <div class="history">
        <div class="title">
            <h3>История</h3>
        </div>
        <el-divider />
        <Loader v-if="loading" />
    </div>
</template>

<script>
const Loader = () => import("../components/Loader");

export default {
    data: () => ({
        loading: false,
    }),
    components: {
        Loader,
    },
};
</script>

<style scoped></style>

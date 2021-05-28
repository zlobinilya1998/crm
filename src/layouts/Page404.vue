<template>
    <div class="wrapper">
        <h2>Ошибка 404. Страница не найдена</h2>
        <button @click="$router.push('/')">Вернуться на главную</button>
    </div>
</template>

<script>
export default {};
</script>

<style scoped>
.wrapper {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: rgb(224, 224, 224);
}
</style>

<template>
    <div class="error" v-if="error">
        <h1 class="error__title">Произошла ошибка</h1>
        <div class="error__description">Страница временно недоступна. Попробуйте зайти позже.</div>
    </div>
    <div id="app" v-else>
        <Interior></Interior>
    </div>

</template>

<script>
    import Interior from './components/interior'
    export default {
        name: 'App',
        components: {
            Interior
        },
        computed: {
            error() {
                return this.$store.state.error;
            }
        },
        beforeCreate() {
            if (this.$route.query.lang) {
                this.$i18n.locale = this.$route.query.lang;
            }
        }
    }
</script>

<style>
    @font-face {
        font-family: 'KazimirText-Light';
        src: url("./assets/fonts/KazimirText-Light.woff2") format("woff2"),
        url("./assets/fonts/KazimirText-Light.woff") format("woff");
        font-style: normal;
    }

    @font-face {
        font-family: 'KazimirText-Light';
        src: url("./assets/fonts/KazimirText-LightIt.woff2") format("woff2"),
        url("./assets/fonts/KazimirText-LightIt.woff") format("woff");
        font-style: italic;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 21px;
        font-family: 'KazimirText-Light', Georgia, serif;
        font-style: italic;
    }

    html,
    body,
    #app {
        height: 100%;
    }
    #app {
        max-width: 2100px;
        max-height: 1440px;
        margin: auto;
    }
    .error {
        font-weight: 300;
        font-style: normal;
        display: flex;
        justify-content: center;
        flex-direction: column;
        padding: 2em;
        max-width: 600px;
        margin: auto;
    }
    .error__title {
        font-weight: inherit;
        margin-bottom: 1em;
    }
</style>
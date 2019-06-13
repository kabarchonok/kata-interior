<template>
    <div class="close" v-on:click="closeTab">
        <svg width="1.055555556em" height="1.055555556em" viewBox="0 0 19 19" fill="white"
             xmlns="http://www.w3.org/2000/svg">
            <path d="M17 18.1L9.1 10.3L1.2 18.1L1.52588e-06 16.8L7.8 9.1L1.52588e-06 1.4L1.4 0L9.2 7.8L17.1 0L18.3 1.2L10.5 9L18.4 16.8L17 18.1Z"
                  fill="white"/>
        </svg>
    </div>
</template>

<script>
    export default {
        name: "Close",
        methods: {
            closeTab() {
                window.close();
            }
        }
    }
</script>

<style lang="scss">
    .close {
        width: 2.666666667em;
        height: 2.666666667em;
        position: relative;
        cursor: pointer;
        z-index: 100;
        svg {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
    }
</style>
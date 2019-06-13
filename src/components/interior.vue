<template>
    <div class="interior"
         :class="[!loaded? 'interior--loading' : '']"
         :style="{ backgroundImage: 'url(' + background.path + ')' }">

        <Logo></Logo>

        <Close></Close>

        <div class="interior__inner inner">
            <Picture></Picture>
        </div>

        <Panel></Panel>
    </div>
</template>

<script>
    import Logo from './Logo'
    import Close from './Close'
    import Picture from './Picture'
    import Panel from './Panel'


    export default {
        name: 'interior',
        components: {
            Logo,
            Close,
            Picture,
            Panel
        },
        data() {
            return {
                loaded: false,
                background: {
                    path: this.$store.state.background.path,
                }

            }
        },
        computed: {
          backgroundPath() {
              return this.$store.state.background.path
          }
        },
        watch: {
            backgroundPath(val) {
                var downloadingImage = new Image();
                this.loaded = false;
                downloadingImage.src = val;
                downloadingImage.onload = () => {
                    this.background.path = val;
                    setTimeout(() => {
                        this.loaded = true;
                    },300);

                };
                console.log('loaded');
            }
        },
        mounted() {
            document.onreadystatechange = () => {
                if (document.readyState === "complete") {
                    this.loaded = true;
                }
            };

        }

    }
</script>

<style lang="scss">
    .interior {
        min-width: 1000px;
        min-height: 700px;
        box-sizing: border-box;
        display: flex;
        justify-content: space-between;
        padding: 1em;
        width: 100%;
        height: 100%;
        background-size: 106.666666667em 60em;
        background-repeat: no-repeat;
        background-position: center top;
        position: relative;
        overflow: hidden;
        &::before,
        &::after{
            content: '';
            display: block;
            opacity: 0;
            transition: opacity .3s;
        }
        &::before {
            background: #ffffff;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;

        }
        &::after {
            width: 3.111111111rem;
            height: 3.111111111rem;
            background-color: #000;
            border-radius: 50%;
            animation: pulse 1s linear infinite;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;

        }

    }
    .interior--loading {
        &::before,
        &::after {
            opacity: 1;
            z-index: 10000;
        }
        &::after {
            z-index: 11000;
        }
    }

    @keyframes pulse {
        25% {
            box-shadow: 0 0 0 0  rgba(0, 0, 0, 0.1);
        }

        50% {
            box-shadow: 0 0 0 1.5em  rgba(0, 0, 0, 0.1);
        }
    }

    .inner {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 4em;
        min-height: 1440px;
    }




</style>

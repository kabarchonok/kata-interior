<template>
    <div class="interior__panel panel" v-bind:class="[minimized ? 'panel--minimized' : '']">
        <div class="panel__header">
            <div class="panel__tabs">
                <div class="panel__tab"
                     v-on:click="[currentTab = 0, minimized = false]"
                     v-bind:class="[currentTab === 0? 'panel__tab--active' : '']">{{ $t("message.chooseInterior")}}
                </div>
                <div class="panel__tab"
                     v-on:click="[currentTab = 1, minimized = false]"
                     v-bind:class="[currentTab === 1? 'panel__tab--active' : '']">{{ $t("message.chooseDecoration")}}
                </div>
            </div>
            <div class="panel__actions">
                <div class="panel__actions-app"></div>
                <div class="panel__actions-minimize"
                     v-on:click="minimized = !minimized"
                     v-bind:class="[minimized ? minimizeActiveClass : '']"></div>
            </div>
        </div>
        <div class="panel__content">
            <transition name="slide">
                <div class="container container-block" v-if="currentTab === 0">
                    <Carousel></Carousel>
                </div>
            </transition>
            <transition name="slide">
                <Options v-if="currentTab === 1"></Options>
            </transition>

        </div>
    </div>
</template>

<script>
    import Carousel from './Carousel'
    import Options from './Options'

    export default {
        name: "Panel",
        components: {
            Carousel,
            Options,
        },
        data() {
            return {
                currentTab: 1,

                minimized: 0,
                minimizeActiveClass: "panel__actions-minimize--active",
            }
        },
    }

</script>

<style lang="scss">
    .panel {
        user-select: none;
        transition: all .3s;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 4px 4px 0 0;
        background: rgba(255, 255, 255, 0.9);
        padding: 1em;
        font-size: 0.888888889rem;
        font-family: "KazimirText-Light", serif;
        font-style: italic;
        &--minimized {
            bottom: -8.190476rem;
        }
        &__header {
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            position: relative;
        }
        &__tabs {
            display: flex;
            flex-direction: row;
        }
        &__tab {
            cursor: pointer;
            &:first-child {
                margin-right: 2em;
            }
            &--active {
                color: #7000FF;
            }
        }
        &__actions {
            position: absolute;
            right: 1em;
            top: 1em;
            bottom: 1em;
            height: 100%;
            margin: auto;
            align-self: center;
            display: flex;
            flex-direction: row;
            align-items: center;
            &-minimize {
                cursor: pointer;
                background: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTkiIGhlaWdodD0iMTEiIHZpZXdCb3g9IjAgMCAxOSAxMSIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMS4zOTk5IDQuOTE2OTllLTA1TDkuMjk5OSA3LjgwMDA1TDE3LjE5OTkgNC43Nzg4NmUtMDVMMTguMzk5OSAxLjMwMDA1TDkuMTk5OTEgMTAuM0wtOS42MTU0MmUtMDUgMS4zMDAwNUwxLjM5OTkgNC45MTY5OWUtMDVaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==") no-repeat center;
                width: 1.022222222em;
                height: 0.572222222em;
                transition: transform .3s;
                &--active {
                    transform: rotate(180deg);
                }
            }
        }
        &__content {
            position: relative;
            box-sizing: content-box;
            transition: height .3s;
            height: 6.19047619rem;
            padding: 2em 1em 1em 1em;
            font-size: 0.888888889em;
        }
    }

    .container {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        height: inherit;
        &-block {
            display: block;
            width: 90%;
            margin: auto;
        }
        > * {
            margin-right: 4em;
            &:last-child {
                margin-right: 0;
            }
        }
    }

    .slide-enter-active {
        animation: slide-in .3s;
        position: relative;

    }

    .slide-leave-active {
        top: 2em;
        animation: slide-out .3s;
        position: absolute;
    }

    @keyframes slide-in {
        0% {
            transform: translateX(0);
            left: -100%;
        }
        100% {
            transform: translateX(1);
            left: 0;
        }

    }

    @keyframes slide-out {
        0% {
            transform: translateX(1);
            left: 0;
        }
        100% {
            transform: translateX(0);
            left: 200%;
        }

    }
</style>
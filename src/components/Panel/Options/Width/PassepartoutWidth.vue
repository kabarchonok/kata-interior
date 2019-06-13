<template>
    <div class="range-slider">
        <vue-slider ref="sliderPassepartoutWidth" v-bind="rangeSlider" v-model="value" @callback="handleUpdateWidth"></vue-slider>
    </div>
</template>

<script>
    import vueSlider from 'vue-slider-component'

    export default {
        name: "PassepartoutWidth",
        components: {
            vueSlider
        },
        data() {
            return {
                value: this.width,
                rangeSlider: {
                    show: true,
                    min: 0,
                    max: 30,
                    formatter: "{value}" + this.$t("message.cm"),
                    tooltip: "always",
                    tooltipDir: "bottom",
                    speed: .3,

                    bgStyle: {
                        "height": ".055555556rem",
                        "backgroundColor": "#c4c4c4",
                    },
                    processStyle: {
                        "cursor": "pointer",
                        "background": "#7000ff",
                        "height": ".111111111rem",
                        "position": "absolute",
                    },
                    tooltipStyle: {
                        "background": "none",
                        "border": "none",
                        "color": "#000",
                    },
                }
            }
        },
        mounted() {
            /**
             * Костыль для перерендера слайдера
             */
            setTimeout( () => {
                this.$nextTick(() => this.$refs.sliderPassepartoutWidth.refresh());
            },300)

            this.value = this.$store.state.passepartout.width;
        },
        methods: {
            handleUpdateWidth() {
                this.$store.commit('updatePassepartoutWidth', this.value);
            }
        },
        computed: {
            width() {
                return this.$store.state.passepartout.width;
            }
        },
        watch: {
            width: function () {
                this.$refs.sliderPassepartoutWidth.setValue(this.width);
            }
        }
    }
</script>

<style lang="scss">
    .range-slider {
        position: relative;
    }
    .vue-slider-component .vue-slider-dot .vue-slider-dot-handle {
        position: absolute;
        width: .444444444rem !important;
        height: .444444444rem !important;
        border-radius: 50% !important;
        background-color: #c4c4c4 !important;
        box-shadow: none !important;
        left: 0;
        right: 0;
        top: 1px;
        /* bottom: 0; */
        margin: auto;
    }
    .vue-slider-component .vue-slider-dot {
        position: absolute;
        transition: all 0s;
        will-change: transform;
        cursor: pointer;
        z-index: 5;
    }
    .vue-slider-component .vue-slider {
        position: relative;
        display: block;
        border-radius: 15px;
        background-color: #ccc;
    }
    .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom {
        bottom: 3px !important;
        left: 50%;
        -webkit-transform: translate(-50%,100%);
        transform: translate(-50%,100%);
    }

    .vue-slider-component .vue-slider-tooltip {
        display: block !important;
        white-space: nowrap !important;
        padding: 2px 5px !important;
        min-width: 20px !important;
        text-align: center !important;
        border-radius: 5px !important;
    }
    .vue-slider-component .vue-slider-tooltip-wrap {
        position: absolute;
        z-index: 9;
    }
    .vue-slider-piecewise {
        margin: 0;
    }
    .vue-slider-component .vue-slider-tooltip-bottom .vue-merged-tooltip .vue-slider-tooltip:before, .vue-slider-component .vue-slider-tooltip-wrap.vue-slider-tooltip-bottom .vue-slider-tooltip:before {
        display: none;
    }
</style>
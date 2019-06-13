<template>
    <div class="option__content widths">
        <div class="width"
             v-for="width in widths"
             v-bind:key="width.id"
             v-on:click="handleUpdateWidth(width)"
             v-bind:class="[(frameWidth === width.value)? 'width--active' : '']">
            {{ $t("message.from")}} {{width.from}} {{ $t("message.to")}} {{width.to}} {{ $t("message.cm")}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Frame",
        data() {
            return {
                activeWidth: this.frameWidth,
                widths: [
                    {id: 1, value: 2, from: 1, to: 3},
                    {id: 2, value: 5.5, from: 3, to: 8},
                    {id: 3, value: 11.5, from: 8, to: 15},
                ]
            }
        },
        computed: {
            frameWidth() {
                return this.$store.state.frame.width;
            }
        },
        methods: {
            handleUpdateWidth(width) {
                if (this.frameWidth === width.value) {
                    this.activeWidth = 0
                } else {
                    this.activeWidth = width.value
                }
                this.$store.dispatch('updateFrameWidth', this.activeWidth);
            }
        }
    }
</script>

<style scoped lang="scss">
    .widths {
        display: flex;
        flex-direction: column;
    }
    .width {
        position: relative;
        cursor: pointer;
        place-self: flex-start;
        &:hover,
        &--active{
            color: #7000FF;
        }
        &--active {
            &::after {
                content: "×";
                display: block;
                position: absolute;
                top: -.666666667em;
                right: -.655555556em;
                text-align: center;
                font-style: normal;
                width: .888888889rem;
                height: .888888889rem;
            }
            &:hover {
                &::after {
                    color: #000;
                    background: #ff5c00;
                    border-radius: 50%;
                }
            }
        }
    }
</style>
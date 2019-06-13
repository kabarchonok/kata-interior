<template>
    <div class="colors">
        <div class="color"
             v-for="color in colors"
             v-bind:key="color.id"
             v-bind:style="{backgroundColor: color.value}"
             v-bind:class="[(activeColor === color.value)? 'color--active' : '']"
             v-on:click="updatePassepartoutColor(color.value)">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Color",
        data() {
            return {
                activeColor: this.$store.state.passepartout.color,
                colors: [
                    {id: 1, value: "#381909"},
                    {id: 2, value: "#4C2929"},
                    {id: 3, value: "#1EA990"},
                    {id: 4, value: "#FF0000"},
                    {id: 5, value: "#5A4124"},
                    {id: 6, value: "#91653D"},
                    {id: 7, value: "#5C5C5C"},
                    {id: 8, value: "#FFBB7C"},
                ]
            }
        },
        methods: {
            updatePassepartoutColor(color) {
                if (this.activeColor === color) {

                    this.activeColor = '#FFFFFF';
                    this.$store.dispatch('updatePassepartoutColor', '#FFFFFF');

                } else {

                    this.activeColor = color;
                    this.$store.dispatch('updatePassepartoutColor', color);

                }
            }
        }
    }
</script>

<style lang="scss">
    .colors {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 8rem;
    }

    .color {
        width: 1rem;
        height: 1rem;
        position: relative;
        margin-right: 1rem;
        margin-bottom: 1rem;
        border-radius: 50%;
        cursor: pointer;
        &:nth-child(4n+4) {
            margin-right: 0;
        }
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
<template>
    <div class="option__content frames">
        <div class="frame"
            v-for="type in types"
            v-bind:key="type.id"
            v-bind:class="[(activeType === type.id)? 'frame--active' : '']"
            v-on:click="updateFrameType(type)"
            v-bind:style="{
                backgroundImage: 'url('+ require('../../../../assets/img/frame-' + type.id + '.png') + ')',
                backgroundSize: type.size + '%'
            }">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Type",
        data() {
            return {
                activeType: this.$store.state.frame.type,
                types: [
                    {id: 1, size: 400, slice: 100},
                    {id: 2, size: 500, slice: 75},
                ]
            }
        },
        methods: {
            updateFrameType(type) {
                if (this.activeType === type.id) {
                    this.activeType = null;
                    this.$store.dispatch('updateFrameType', null);
                    this.$store.dispatch('updateFrameWidth', 0);
                } else {
                    this.activeType = type.id;
                    this.$store.dispatch('updateFrameType', type);
                }
            }
        }
    }
</script>

<style lang="scss">
    .frames {
        display: flex;
        flex-direction: row;
    }

    .frame {
        width: 4em;
        height: 4em;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: top left;
        margin-right: 1em;
        border-radius: 0 50% 50% 50%;
        cursor: pointer;
        position: relative;
        &:last-child {
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
<template>
    <div class="container">
        <div class="container__row option">
            <div class="option__title">{{ $t("message.frameType") }}</div>
            <Type-frame></Type-frame>
        </div>
        <div class="container__row option">
            <div class="option__title">{{ $t("message.frameWidth") }}</div>
            <Width-frame></Width-frame>
        </div>
        <div class="container__row option">
            <div class="option__title">{{ $t("message.passpartueColor") }}</div>
            <Color></Color>
        </div>
        <div class="container__row option">
            <div class="option__title">{{ $t("message.passpartueWidth") }}</div>
            <div class="option__content">
                <Passepartout-width></Passepartout-width>
            </div>
        </div>
    </div>
</template>

<script>
    import Color from './Color'
    import TypeFrame from './Type'
    import WidthFrame from './Width/Frame'
    import PassepartoutWidth from './Width/PassepartoutWidth'

    export default {
        name: "Options",
        components: {
            Color,
            TypeFrame,
            WidthFrame,
            PassepartoutWidth,
        },
    }
</script>

<style lang="scss">
    .option {
        &__title {
            margin-bottom: 1em;
        }
        &__content {
            > * {
                margin-bottom: .5em;
            }
        }
    }
</style>
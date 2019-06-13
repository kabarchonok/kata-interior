<template>
    <div ref="picture" class="picture"
         :style="{
                left: 'calc(50% - ' + (this.passepartoutWidthAdaptive * coefficient) + 'px - ' + (this.frameWidthAdaptive * coefficient) + 'px - (' + this.imageWidth * this.coefficient + 'px / 2))',
                top: 'calc(30% - ' + (this.passepartoutWidthAdaptive * coefficient) + 'px - ' + (this.frameWidthAdaptive * coefficient) + 'px - (' + this.imageHeight * this.coefficient + 'px / 2))',
              }">
        <div class="picture__frame"
             :style="[(frameActive) ? {
                    borderWidth: frameWidthAdaptive * coefficient + 'px',
                    borderImageSource: 'url(' + framePath + ')',
                    borderImageSlice: 'fill ' + frameSlice,
                 } : '']">
            <div class="picture__passepartout"
                 :style="{
                        borderWidth: passepartoutWidthAdaptive * coefficient + 'px',
                        borderColor: passepartoutColor
                    }">
                <div class="picture__image"
                     :style="{
                            width: imageWidth * coefficient + 'px',
                            height: imageHeight * coefficient + 'px',
                            backgroundImage: 'url(' + imagePath + ')',
                        }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Picture",
        computed: {
            coefficient() {
                return this.$store.state.background.coefficient;
            },
            frameActive() {
                return this.$store.state.frame.active
            },
            framePath() {
                return this.$store.state.frame.path
            },
            frameSlice() {
                return this.$store.state.frame.slice
            },
            frameWidthAdaptive() {
                return this.$store.state.frame.widthAdaptive
            },
            passepartoutColor() {
                return this.$store.state.passepartout.color
            },
            passepartoutWidthAdaptive() {
                return this.$store.state.passepartout.widthAdaptive
            },
            imagePath() {
                return this.$store.state.image.path
            },
            imageWidth() {
                return this.$store.state.image.width
            },
            imageHeight() {
                return this.$store.state.image.height
            }
        },
        methods: {
            updatePicture(path, width, height) {
                this.$store.dispatch('updateImagePath', path);
                this.$store.dispatch('updateImageWidth', width);
                this.$store.dispatch('updateImageHeight', height);
            },
        },

    }
</script>

<style lang="scss">
    .picture {
        position: absolute;
        display: inline-block;
        box-shadow: -4px 0px 8px #000000;
        border-radius: 3px;
        transition: left .3s, top .3s;
        &--loading {
            box-shadow: none;
            &::before {
                border-radius: inherit;
                content: '';
                background: #fefcfa;
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: auto;
                /*z-index: 100;*/
            }
            &::after {
                content: '';
                display: block;
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
                /*z-index: 110;*/
            }
        }
        &__frame {
            transition: border .3s;
            border-style: solid;
            border-color: rgba(0, 0, 0, 0.4);
            border-width: 0;
            //border-image-source: url("../../assets/img/frame-1.png");
            border-image-slice: fill 100;
        }
        &__passepartout {
            transition: border .3s;
            border: 30px solid white;
        }
        &__image {
            box-sizing: content-box;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            &.dragging {
                cursor: move;
            }
        }
    }
</style>
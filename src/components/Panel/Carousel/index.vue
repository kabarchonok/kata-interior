<template>
    <vue-owl-carousel
            class="carousel"
            :center="true"
            :nav="false"
            :dots="false"
            :loop="true"
            :autoHeight="true"
            :responsive="{
                0:{items:4},
                1400:{items:5},
                1560:{items: 6},
                1900:{items: 7},
                }">
        <img v-for="interior in interiors"
             v-bind:key="interior.id"
             :data-id="interior.id"
             :src="interior.preview"
             class="carousel__item">
    </vue-owl-carousel>
</template>

<script>
    import vueOwlCarousel from 'vue-owl-carousel'

    export default {
        name: "Carousel",
        components: {
            vueOwlCarousel
        },
        data() {
            return {
                interiors: [
                    {id: 1, preview: require('@/assets/img/interrior-1-min.jpg'), path: require('@/assets/img/interrior-1.jpg'), coefficient: 310},
                    {id: 2, preview: require('@/assets/img/interrior-2-min.jpg'), path: require('@/assets/img/interrior-2.jpg'), coefficient: 400},
                    {id: 3, preview: require('@/assets/img/interrior-3-min.jpg'), path: require('@/assets/img/interrior-3.jpg'), coefficient: 410},
                ]
            }
        },
        methods: {
            selectInterior(interior) {
                this.$parent.$parent.$data.loaded = false;
                setTimeout(() => {
                    this.$store.dispatch('updateInterior', interior);
                },300);

            }
        },
        mounted() {
            document.querySelector('.carousel').addEventListener('click', (e) => {
                if (e.target.classList.contains('carousel__item')) {
                    var interior = this.interiors.filter(x => x.id == e.target.getAttribute('data-id'))[0];

                    if (this.$store.state.background.path !== interior.path) {
                        this.selectInterior(interior)
                    }
                }
            });
        }
    }
</script>

<style lang="scss">
    .owl-item {
        padding-right: 0.888888889rem;

    }
    .carousel__item {
        border-radius: 0.166666667rem;
        cursor: pointer;
    }
</style>
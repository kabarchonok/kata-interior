import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const store = () => new Vuex.Store({

    state: {
        error: false,

        background: {
            path: require('@/assets/img/interrior-3.jpg'),
            coefficient: 410,
        },
        frame: {
            active: false,
            path: require('../src/assets/img/frame-1.png'),
            type: 1,
            width: 0,
            widthAdaptive: 0,
            slice: 100
        },
        passepartout : {
            width: 0,
            widthAdaptive: 0,
            color: '#FFFFFF',
        },
        image: {
            path: require('@/assets/img/picture.jpg'),
            width: 120 /100,
            height: 80 / 100,
        },

    },
    mutations: {
        updateBackgroundPath(state, n) {
            state.background.path = n;
        },
        updateBackgroundCoefficient(state, n) {
            state.background.coefficient = n;
        },
        updateFramePath(state, n) {
            state.frame.path = n;
        },
        updateFrameSlice(state, n) {
            state.frame.slice= n;
        },
        updateFrameWidth(state, n) {
            state.frame.width = n;
        },
        updateFrameWidthAdaptive(state, n) {
            state.frame.widthAdaptive = n;
        },
        updateFrameActive(state, n) {
            state.frame.active = n;
        },
        updateFrameType(state, n) {
            state.frame.type = n;
        },
        updatePassepartoutWidth(state, n) {
            state.passepartout.width = n;
            state.passepartout.widthAdaptive = (n / 100);
        },
        updatePassepartoutColor(state, n) {
            state.passepartout.color = n;
        },
        updateImagePath(state, n) {
            state.image.path = n;
        },
        updateImageWidth(state, n) {
            state.image.width = (n / 100);
        },
        updateImageHeight(state, n) {
            state.image.height = (n / 100);
        },
    },
    actions: {
        updateInterior(context, interior) {
            context.commit('updateBackgroundPath', interior.path);
            context.commit('updateBackgroundCoefficient', interior.coefficient);
        },
        updateFrameWidth(context, width) {
            context.commit('updateFrameWidth', width);
            context.commit('updateFrameWidthAdaptive', width / 100);

            if (this.state.frame.active === false) {
                context.commit('updateFrameActive', true);
                context.commit('updateFrameType', 1);

            }
        },
        updateFrameType(context, type) {
            if (type === null) {
                context.commit('updateFrameActive', false);
            } else {
                context.commit('updateFrameActive', true);
                context.commit('updateFrameType', type.id);
                context.commit('updateFramePath', require('../src/assets/img/frame-' + type.id + '.png'));
                context.commit('updateFrameSlice', type.slice);

                if (this.state.frame.width === 0) {
                    context.dispatch('updateFrameWidth', 5.5);
                }

            }

        },
        updatePassepartoutColor(context, color) {
            context.commit('updatePassepartoutColor', color);
            if (this.state.passepartout.width === 0 && this.state.passepartout.color !== '#FFFFFF') {
                context.commit('updatePassepartoutWidth', 10);
            }
        }
    }
});

export default store
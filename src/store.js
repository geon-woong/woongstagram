import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            step: 0,

        }
    },
    mutations: {
        nextPage(state) {
            state.step++
        },
        goHome(state) {
            state.step == 0
        },
        upload(e) {
            let file = e.target.files;
            let url = URL.createObjectURL(file[0]);
            console.log(url);
            this.step++
        }

    },
})

export default store
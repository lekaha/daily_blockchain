import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    name: 'Daily Blockchain',
    locales: ['en', 'fr'],
    locale: 'en'
  },
  mutations: {
    SET_LANG (state, locale) {
      if (state.locales.indexOf(locale) !== -1) {
        state.locale = locale
      }
    }
  }
})

export default store

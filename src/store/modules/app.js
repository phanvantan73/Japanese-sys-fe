const state = {
  isLogin: false
};

const mutations = {
  SET_IS_LOGIN: (_state, isLogin) => {
    _state.isLogin = isLogin;
  }
};

const actions = {
  getIsLogin({
    commit
  }, payload) {
    try {
      commit('SET_IS_LOGIN', payload);

      return Promise.resolve();
    } catch (error) {
      return Promise.reject(error);
    }
  }
};

export default {
  namespace: true,
  state,
  mutations,
  actions
}
export default {
  namespaced: true,
  state() {
    return{
      name: "Edgar Dias",
      projectDate: 2020,
      webside:"https://edgar-dias.eu"
    }
  },
  getters: {
    DEVELOPER_NAME(state) {
      return state.name;
    },
    DEVELOPER_WEBSITE(state) {
      return state.webside;
    },
    PROJECT_DATE(state) {
      return state.projectDate;
    }
  }
};

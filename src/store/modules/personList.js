import Axios from "axios";
import Api from "@api"
import moment from "moment"

export default {
  namespaced: true,
  state() {
    return {
      personListTable: {
        columns:[],
        rows:[]
      },
      selectedPlanet: {}
    }
  },
  mutations: {
    UPDATE_PERSON_LIST(state, payload) {
      state.personListTable.columns = payload.columns;
      state.personListTable.rows = payload.rows;
    },
    UPDATE_SELECTED_PLANET(state, payload) {
      state.selectedPlanet = payload;
    },
  },
  actions: {
    GET_PERSON_LIST({ commit }) {
      Axios
        .get(Api.starWars.getPeople)
        .then(response => {
          const columns = ["name", "height", "mass", "created", "edited", "homeworld" ];
          const filteredData = response.data.results.map(row => {
            const filteredRows = Object.keys(row)
              .filter(key => columns.includes(key))
              .reduce((obj, key) => {
                switch (key) {
                  case "created":
                  case "edited":
                    obj[key] = moment(row[key]).format('MM/DD/YYYY, h:mm:ss a');
                    break;
                  default:
                    obj[key] = row[key]
                    break;
                }
                return obj;
              }, {});
              return filteredRows
          });

          const table = {
            columns:Object.keys(filteredData[0]),
            rows: filteredData.map(element => Object.values(element)) 
          }

          commit("UPDATE_PERSON_LIST", table);
        })
        .catch(error => {
            console.log(error)
        })
    },
    GET_PLANET_DATA({ commit }, url) {
      Axios
        .get(url)
        .then(response => {
          commit("UPDATE_SELECTED_PLANET", response.data);
        })
        .catch(error => {
            console.log(error)
        })
    },
    UPDATE_SELECTED_PLANET({ commit }, payload) {
      commit("UPDATE_SELECTED_PLANET", payload);
    },
  },
  getters: {
    PERSON_LIST(state) {
      return state.personListTable;
    },
    SELECTD_PLANET(state) {
      return state.selectedPlanet;
    }
  }
};

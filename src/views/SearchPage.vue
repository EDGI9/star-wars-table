<template>
    <div>
        <h1>Search page</h1>
        <transition name="o-fade" mode="out-in">
            <DynamicTable v-if="columns.length || rows.length"
                :cols="columns" 
                :rows="rows"
                :sort="tableProps.sort"
                :search="tableProps.search">
            </DynamicTable>
        </transition>
        <transition name="o-fade" mode="out-in">
            <Modal v-if="modalOpen && SELECTD_PLANET">
                <template slot="header">
                    <h1>{{SELECTD_PLANET.name}}</h1>
                </template>
                <template slot="body">
                    <div class="u-flex u-flex-column u-flex-align-start">
                        <p>
                            <label>Diameter:</label> {{SELECTD_PLANET.diameter}}
                        </p>
                        <p>
                            <label>Climate:</label> {{SELECTD_PLANET.climate}}
                        </p>
                        <p>
                            <label>Population:</label> {{SELECTD_PLANET.population}}
                        </p>
                    </div>
                </template>
                <template slot="footer">
                    <my-button @click="closeModal">Close</my-button>
                </template>
            </Modal>
      </transition>
    </div>
</template>

<script>
import Modal from "@components/Modal";
import Button from "@components/Button"

import DynamicTable from 'gridjs-vue'

import { mapGetters, mapActions } from "vuex";

export default {
    data() {
        return {
            modalOpen: false,
            tableProps: {
                sort: true,
                search: true,
            }
        }
    },
    components: {
        Modal,
        "my-button": Button,
        DynamicTable
    },
    computed: {
        ...mapGetters("personList/", [
            "PERSON_LIST", 
            "SELECTD_PLANET"
        ]),
        rows() {
            return this.PERSON_LIST.rows
        },
        columns() {
            return this.PERSON_LIST.columns.map( row=> {
                return row == "homeworld" ? { 
                    name: row,
                    attributes: (cell) => {
                        return {
                            'data-cell-content': cell,
                            'onclick': () => this.openModal(cell),
                            'style': 'cursor: pointer'
                        };
                    }
                } : row;
            })
        }
    },
    methods: {
        ...mapActions("personList/", [
            "GET_PERSON_LIST",
            "GET_PLANET_DATA"
        ]),
        openModal(cellData) {
            this.GET_PLANET_DATA(cellData);
            this.modalOpen = true;
        },
        closeModal() {
            this.modalOpen = false;
        },
    },
    created() {
        this.GET_PERSON_LIST();
    }
}
</script>
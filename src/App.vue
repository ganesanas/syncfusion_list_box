<template>
  <div id="app">
    <div class="container pt-3 px-0">
      <div class="row">
        <template v-for="(item, index) in pickSortListArray">
          <div :key="'key_' + item.name" class="col">
            <ul class="list-group mb-4">
              <li
                class="list-group-item bg-light"
                :key="item.name"
                v-if="item.checkStatus"
              >
                <strong>{{ item.name }}</strong>
              </li>
              <ejs-listbox
                :dataSource="item.picklist"
                :ref="item.name"
                :key="index"
                v-if="item.checkStatus"
                :allowDragAndDrop="true"
              >
              </ejs-listbox>
            </ul>
          </div>
        </template>
      </div>
      <div class="row">
        <b-button variant="outline-primary" @click="getSortedArray">
          Get Sorted Array
        </b-button>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ListBoxPlugin } from "@syncfusion/ej2-vue-dropdowns";
Vue.use(ListBoxPlugin);
export default {
  name: "App",
  data() {
    return {
      pickSortListArray: [
        {
          name: "PickListSort1",
          checkStatus: true,
          picklist: [
            "wgt19",
            "wgt13",
            "wg",
            "Middle",
            "Front",
            "Desk",
            "Back",
            "aa",
          ],
        },
        {
          name: "PickListSort2",
          checkStatus: true,
          picklist: [
            "wgt20",
            "wh",
            "wgt14",
            "Very Heavy",
            "Low",
            "Heavy",
            "Fragile",
            "bb",
          ],
        },
        {
          name: "PickListSort3",
          checkStatus: true,
          picklist: ["cc", "wgt15", "wi", "wgt21"],
        },
        {
          name: "PickListSort4",
          checkStatus: true,
          picklist: ["wgt22", "wgt16", "wj", "dd"],
        },
        {
          name: "PickListSort5",
          checkStatus: true,
          picklist: ["wgt17", "wgt23", "wk", "ee"],
        },
        {
          name: "PickListSort6",
          checkStatus: true,
          picklist: ["wgt24", "wgt18", "wl", "ff"],
        },
      ],
    };
  },
  methods: {
    getSortedArray: function () {
      this.pickSortListArray.forEach((item) => {
        console.log(this.$refs[item.name][0].ej2Instances.jsonData);
      });
    },
  },
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-dropdowns/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/bootstrap.css";
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
</style>

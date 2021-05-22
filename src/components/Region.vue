<template>
  <v-container>
    <v-row>
      <v-col sm="12" lg="4" md="4">
        <v-select
          v-model="selectedRegion"
          :items="allRegions"
          label="Selecione uma região"
          @change="attSelected"
        >
        </v-select>
      </v-col>
      <v-col sm="12" lg="4" md="4" class="mt-3">
        <v-btn
          class="btn"
          style="color: white"
          color="#6D2080"
          @click="listForRegion"
          >Pesquisar</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in flags" :key="i" md="4" sm="12" lg="4">
        <v-img
          :src="item"
          height="181"
          max-width="316"
          @click="seeMore(i)"
          style="cursor: pointer"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from "../services/Api";
import { mapState } from "vuex";
export default {
  name: "Region",
  data: () => ({
    selectedRegion: "",
    flags: [],
    country: [],
    flagsPags: [],
    page: 1,
    statusPag: false,
  }),
  computed: {
    ...mapState({
      allRegions: (state) => state.allRegions,
    }),
  },
  methods: {
    listForRegion() {
      Api.region(this.selectedRegion).then((response) => {
        this.country = this.country.concat(response);
        response.forEach((element) => {
          this.flags.push(element.flag);
        });
      });
      this.statusPag = !this.statusPag;
    },
    attSelected() {
      this.flags = [];
    },
    seeMore(i) {
      this.$store.commit("allInformationsCountry", this.country[i]);
    },
  },
};
</script>
<style scoped>
.btn {
  font-family: Montserrat;
  color: #ffffff;
  border-radius: 10px;
}
</style> 

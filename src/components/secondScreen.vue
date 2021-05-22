<template>
  <v-container class="mt-16">
    <v-row>
      <v-col sm="12" lg="4" md="4">
        <v-img height="258" max-width="433" :src="oneCountry.flag"> </v-img>
      </v-col>
      <v-col sm="12" lg="8" md="8" class="mt-4">
        <p>Nome: {{ oneCountry.name }}</p>
        <p>Capital: {{ oneCountry.capital }}</p>
        <p>Região: {{ oneCountry.region }}</p>
        <p>Sub-região: {{ oneCountry.subregion }}</p>
        <p>População: {{ oneCountry.population }}</p>
        <p>Linguas: {{ oneCountry.languages[0].nativeName }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in flagsBorders" :key="i" sm="12" md="4" lg="4">
        <v-img height="181" max-width="316" :src="item" @click="seeMore(i)" style="cursor: pointer"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import Api from "../services/Api";
export default {
  name: "scondeScreen",
  data: () => ({
    flagsBorders: [],
    country: [],
  }),
  computed: {
    ...mapState({
      oneCountry: (state) => state.oneCountry,
    }),
  },
  created() {
    this.listBordersCountry();
  },
  methods: {
    listBordersCountry() {
      this.oneCountry.borders.forEach((element) => {
        Api.bordersCountry(element).then((response) => {
          this.country.push(response);
          this.flagsBorders = this.flagsBorders.concat(response.flag);
        });
      });
    },
    seeMore(i) {
      this.$store.commit("allInformationsBordersCountry", this.country[i]);
    },
  },
};
</script>

<style>
</style> 
<template>
  <v-container>
    <v-row>
      <v-col md="4" sm="12" lg="4">
        <v-select
          v-model="selectedCallingCodes"
          :items="callingCodesOptions"
          label="Selecione uma região"
          @change="attSelected"
        >
        </v-select>
      </v-col>
      <v-col md="4" sm="12" lg="4" class="mt-3">
        <v-btn class="btn" color="#6D2080" @click="chosenCallingCode"
          >Pesquisar</v-btn
        >
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="(item, i) in flags" :key="i" md="4" sm="12" lg="4">
        <v-img :src="item" height="181" max-width="316" @click="seeMore(i)" style="cursor: pointer">
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Api from "../services/Api";
export default {
  name: "CallingCodes",
  data: () => ({
    callingCodesOptions: [],
    selectedCallingCodes: [],
    flags: [],
    country: [],
  }),
  created() {
    this.listAllCallingCodes();
  },
  methods: {
    listAllCallingCodes() {
      Api.allCallingCodes().then((response) => {
        response.forEach((element) => {
          this.callingCodesOptions = this.callingCodesOptions.concat(
            element.callingCodes
          );
        });
      });
    },
    chosenCallingCode() {
      Api.theCallingCodes(this.selectedCallingCodes).then((response) => {
        this.country = this.country.concat(response);
        response.forEach((element) => {
          this.flags.push(element.flag);
        });
      });
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
  color: white;
  border-radius: 10px;
}
</style>
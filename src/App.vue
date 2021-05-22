<template>
  <v-app>
    <v-container class="mb-16">
      <v-app-bar app height="100">
        <v-img class="logo" src="./assets/logo_principal.svg"> </v-img>

        <v-btn class="button" @click="back"> Voltar </v-btn>
      </v-app-bar>
    </v-container>
    <v-container class="mt-16" v-if="!status">
      <v-row>
        <v-col sm="12" lg="4" md="4">
          <v-select
            v-model="optionsFilter"
            :items="selectedOptions"
            label="Filtrar por"
          >
          </v-select>
        </v-col>
      </v-row>
      <v-row>
        <Region v-if="optionsFilter === 'Região'" />
        <Capital v-if="optionsFilter === 'Capital'" />
        <Country v-if="optionsFilter === 'País'" />
        <Language v-if="optionsFilter === 'Língua'" />
        <CallingCodes v-if="optionsFilter === 'Código de ligação'" />
      </v-row>
    </v-container>
    <v-container v-if="status">
      <SecondScreen />
    </v-container>
  </v-app>
</template>


<script>
import Region from "./components/Region";
import Capital from "./components/Capital";
import Language from "./components/Language";
import Country from "./components/Country";
import CallingCodes from "./components/CallingCodes";
import SecondScreen from "./components/secondScreen";
import { mapState } from "vuex";
export default {
  name: 'App',
  components: {
    Region,
    Capital,
    Language,
    Country,
    CallingCodes,
    SecondScreen,
  },
  data: () => ({
    selectedOptions: [
      "Região",
      "Capital",
      "Língua",
      "País",
      "Código de ligação",
    ],
    optionsFilter: [],
  }),
  computed: {
    ...mapState({
      status: (state) => state.status,
      oneCountry: (state) => state.oneCountry,
    }),
  },
  methods: {
    back(){
      this.$store.commit("back")
    }
  }
};
</script>
<style scoped>
.logo {
  position: absolute;
  left: 3.07%;
  right: 90.8%;
  top: 19%;
  bottom: 19.34%;
}
.button {
  width: 134px;
  height: 36px;
  background-color: transparent;
  border: 1px solid #6d2080;
  box-sizing: border-box;
  position: absolute;
  left: 85.8%;
  right: 3.07%;
  top: 30%;
  bottom: 19.34%;
  font-size: 1rem;
  line-height: 22px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  color: #6D2080
}
</style>
 

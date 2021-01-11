<template>
  <q-page padding>
    <q-list bordered padding>
      <q-item-label header>More</q-item-label>

      <q-item @click="visitOurWebsite" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Visit my GitHub</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>

      <q-item @click="emailUs" tag="label" v-ripple>
        <q-item-section>
          <q-item-label>Email us</q-item-label>
        </q-item-section>
        <q-item-section side>
          <q-icon name="chevron_right" />
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import { openURL } from "quasar";

export default {
  methods: {
    visitOurWebsite() {
      openURL("https://github.com/PedroUNB");
    },

    emailUs() {
      window.location.href =
        "mailto:pedro.oliveira.unb@gmail.com?subject=T2 Software Contato";
    },
  },
};
</script>

<style>
</style>

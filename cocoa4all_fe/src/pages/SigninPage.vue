<template>
  <q-page>
    <q-breadcrumbs class="text-brown">
      <template v-slot:separator>
        <q-icon size="1.5em" name="chevron_right" color="primary" />
      </template>

      <q-breadcrumbs-el label="Home" icon="home" to="/" />
      <q-breadcrumbs-el label="로그인" icon="widgets" />
    </q-breadcrumbs>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",

  data() {
    console.log("data().......");
    return {
      a: 16262525252,
      b: 2,
      c: 3,
    };
  },

  methods: {
    sum_abc() {
      // run
      console.log("sum_abc().......");
      return this.a + this.b + this.c;
    },

    test_method(a1, a2) {
      console.log("test_method().......");
      return a1 + a2;
    },
  },

  created() {
    console.log("created().......");
  },

  mounted() {
    console.log("mounted().......");
  },

  setup() {
    console.log("setup().......");
  },
});
</script>

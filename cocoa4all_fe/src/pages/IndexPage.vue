<template>
  <q-page>
    <PageTitle :title="'홈'" :pathdata="[]" />

    <!-- <span class="t1">csdnckldsnckldsn</span> -->
    <!-- <q-card flat bordered class="bg-red">
      <q-card flat bordered class="bg-blue q-pa-md"> cscdsc </q-card>
    </q-card> -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';

export default defineComponent({
  name: 'IndexPage',

  components: {
    PageTitle,
  },

  data() {
    return {};
  },

  methods: {},

  created() {},

  mounted() {},

  setup() {},
});
</script>

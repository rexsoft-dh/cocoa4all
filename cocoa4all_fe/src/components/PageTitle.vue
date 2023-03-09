<template>
  <div class="q-mb-lg">
    <div class="row">
      <div class="pagetitle q-py-sm">{{ title }}</div>
    </div>
    <q-separator />
    <q-toolbar class="q-ma-none q-pa-none">
      <q-breadcrumbs class="text-blue-12" active-color="grey-7">
        <template v-slot:separator>
          <q-icon size="1.5em" name="chevron_right" />
        </template>

        <q-breadcrumbs-el icon="home" to="/" />
        <q-breadcrumbs-el :label="item.label" :to="item.to" v-for="(item, index) in pathdata" :item="item" :index="index" :key="index" />
      </q-breadcrumbs>
      <q-space />
      <q-btn flat round dense icon="print" />
    </q-toolbar>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageTitle',

  props: ['title', 'pathdata'],

  components: {
    // BreadCrumbs,
  },
});
</script>

<style lang="sass" scoped></style>

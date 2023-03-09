<template>
  <div>
    <PageTitle :title="'데이터 한 눈에 보기'" :pathdata="[{ label: '데이터 한 눈에 보기', to: '/stat_at_a_glance' }]" />
    <div>내용</div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import PageTitle from 'components/PageTitle.vue';

export default defineComponent({
  name: 'ServiceInfo',

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

<style lang="sass" scoped></style>

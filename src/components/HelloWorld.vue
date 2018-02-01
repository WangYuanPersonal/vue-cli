<template>
    <div>
        <div>
            {{count}}
        </div>
        <button @click="minus">-</button>
        <button @click="add">+</button>
    </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from "vuex";
export default {
  name: "HelloWorld",
  data() {
    return {};
  },
  methods: mapActions("b", ["minus", "add"]),
  computed: mapState("b", ["count"])
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

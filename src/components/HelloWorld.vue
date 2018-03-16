<template>
    <div>
        <div class="dr">
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
:root {
  --ss: Red;
}
.dr {
  display: flex;
  background: var(--ss);
  transition: transform 0.15s ease-out;
  border-radius: 10px;
  transform: rotate(30deg);
  box-shadow: 1px 1px 1px black;
  opacity: 0.1;
}
</style>

<template>
    <div>
        <button @click="de">222222222</button>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    de() {
      this.$router.push({
        name: "HelloWorld"
      });
    }
  }
};
</script>

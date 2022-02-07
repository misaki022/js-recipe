Vue.createApp({
  deta() {
    return {
      count: 0,
    }
  },
  methods: {
    countUp: function () {
      this.count += 1
    },
  },
}).mount("#app")

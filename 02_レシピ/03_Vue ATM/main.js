Vue.createApp({
  data() {
    return {
      nyuryokugaku: 0,
      zandaka: 0,
      torihiki: [],
    }
  },
  computed: {
    enableClass: function () {
      let isTap = false
      if (this.nyuryokugaku > this.zandaka) {
        isTap = true
      }
      return isTap
    },
  },

  methods: {
    nyukin: function () {
      this.zandaka += Number(this.nyuryokugaku)

      this.makeRecord("入金")
      this.nyuryokugakua = 0
    },
    shukkin: function () {
      this.zandaka -= Number(this.nyuryokugaku)

      this.makeRecord("出金")
      this.nyuryokugaku = 0
    },
    makeRecord: function (play) {
      if (this.nyuryokugaku !== "" && this.nyuryokugaku !== 0) {
        const log = {
          date: new Date(),
          type: play,
          money: this.nyuryokugaku,
        }
        this.torihiki.push(log)
      }
    },
  },
}).mount("#app")

const Palette = {
  data() {
    return {
      red: 0,
      green: 0,
      colors: [{ orange: 0, pink: 0 }],
    }
  },
  methods: {
    changeColor(e) {
      this.red = e.offsetX
      this.green = e.offsetY
    },
    pickColor() {
      const newColor = {
        red: this.red,
        green: this.green,
      }
      this.colors.push(newColor)
    },
    showColor(color) {
      this.red = color.red
      this.green = color.green
    },
  },
  computed: {
    paletteStyle() {
      return {
        backgroundColor: `rgba(${this.red}, ${this.green}, 200, 0.5)`,
      }
    },
  },
}
Vue.createApp(Palette).mount("#app")

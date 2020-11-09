var model = {
  inheritAttrs: false,
  computed: {
    inputListeners: function() {
      var vm = this;
      return Object.assign({},
        this.$listeners,
        {
          input: event => vm.$emit('input', event.target.value)
        }
      )
    }
  }
}

export { model }
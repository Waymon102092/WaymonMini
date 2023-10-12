Component({
  properties: {
    switchs:Array
  },
  data: {
    switchIndex:0
  },
  methods: {
    onSwitch(e){
      this.setData({
         switchIndex:e.currentTarget.dataset.index
      })
      this.triggerEvent('Change',{ index:e.currentTarget.dataset.index })
    }
  }
})

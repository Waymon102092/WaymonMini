Component({
  properties: {
     tabIndex:Number,
     tabs:Array
  },
  data: {
    tabIndex:0
  },
  methods: {
    onChange(e){
       this.triggerEvent('Change',{ index:e.detail.index })
    }
  }
})

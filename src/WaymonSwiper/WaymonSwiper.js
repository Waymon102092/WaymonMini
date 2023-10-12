Component({

  properties: {
    arr:Array,
    index:Number
  },
  data: {
    
  },
  methods: {
    onBanner(e){
      this.triggerEvent('Swiper',{ index:e.currentTarget.dataset.index })
    }
  }
})

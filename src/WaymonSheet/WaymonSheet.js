Component({
  properties: {
   title:String,
   isShow:Boolean,
   actions:Array
  },
  data: {

  },
  methods: {
    onClose(){
      this.triggerEvent('Close')
    },
    onSelect(e){
      this.triggerEvent('Select',{ index:e.detail.index })
    }
  }
})

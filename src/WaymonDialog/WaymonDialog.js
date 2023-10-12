Component({
  properties: {
    isDialog:Boolean,
    title:String,
    height:Number,
    content:String,
    cancel:String,
    confirm:String,
    isConfirm:Boolean
  },
  data: {

  },
  methods: {
    onClose(){
      this.setData({
         isDialog:false
      })
    },
    onCancel(){
       this.triggerEvent('Cancel')
    },
    onConfirm(){
      this.triggerEvent('Confirm')
    }
  }
})

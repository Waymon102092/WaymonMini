Component({
  properties: {
    isPop:Boolean,
    title:String,
    content:String,
  },
  data: {

  },
  methods: {
    onClose(){
      this.setData({
        isPop:false
      })
    }
  }
})

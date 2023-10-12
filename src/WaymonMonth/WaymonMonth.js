Component({
  properties: {
    month:String,
  },
  data: {
    isPicker:false,
    timeStamp:0,
    currentDate: new Date().getTime(),
    minDate: new Date(2022,1,1).getTime(),
    maxDate: new Date(2023,12,31).getTime(),
  },
  methods: {
    onMonth(){
      this.setData({
        isPicker:true
      })
    },
    onChange(e){
      this.setData({
        timeStamp:e.detail
      })
    },
    onClose(){
       this.setData({
         isPicker:false
       })
    },
    onConfirm(){
      this.setData({
        isPicker:false
      })
      this.triggerEvent('Confirm',{ timeStamp:this.data.timeStamp })
    }
  }
})

Component({
 
  properties: {

  },
  data: {

  },
  lifetimes: {
    attached: function() {
      let height =  wx.getSystemInfoSync().windowHeight
      this.setData({
        height:height
      })
    },
  },
  methods: {
    onConfirm(){
      wx.navigateBack()
    }
  }
})

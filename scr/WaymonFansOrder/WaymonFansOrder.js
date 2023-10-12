Component({
  properties: {
     order:{}
  },
  data: {

  },
  methods: {
    onCopy(){
      wx.setClipboardData({
        data: this.data.order.trade_no,
      })
      wx.getClipboardData()
    }
  }
})

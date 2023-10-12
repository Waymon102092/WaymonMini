Component({
  properties: {

  },
  data: {
    top:wx.getMenuButtonBoundingClientRect().top
  },
  methods: {
    onBack(){
      wx.navigateBack()
    }
  }
})

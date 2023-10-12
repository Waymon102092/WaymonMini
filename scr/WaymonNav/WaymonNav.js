Component({
  
  properties: {
    title:String,
    img:String,
    detail:String,
    isRight:true,
    url:String,
    type:String
  },

  data: {
    width : 0
  },
  lifetimes: {
    attached: function() {
       let width = wx.getSystemInfoSync().windowWidth * 0.96
       this.setData({
          width:width
       })
    },
  },
  methods: {
    onRight(e){
      if (this.data.url) {
         wx.navigateTo({
           url: this.data.url,
         })
      } else {
        this.triggerEvent('Right')
      }
    }
  }
})

Component({
  properties: {
    title:{
      type:String
    },
    img:{
      type:String,
      value:"../../images/avatar.png"
    },
    width:{
      type:String,
    },
    url:{
      type:String,
      value:""
    },
    type:{
      type:String,
      value:"button"
    },
    badge:{
      type:Number,
      value:0
    }
  },
  data: {
    
  },
  methods: {
    onClick(){
      if (!wx.getStorageSync('token')) {
        wx.navigateTo({
          url: '/pages/login/login',
        })
        return
      }
      if (this.data.url != "") {
        wx.navigateTo({
          url: this.data.url,
        })
      }
    }
  }
})

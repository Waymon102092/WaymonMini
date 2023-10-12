const http = require("../../utils/http")
Component({
  properties: {
    show:{
      type:Boolean,
      value:false
    }
  },
  data: {
    nickname:"",
    avatarUrl:""
  },
  lifetimes: {
    attached: function() {
      // 在组件实例进入页面节点树时执行
    },
    detached: function() {
      // 在组件实例被从页面节点树移除时执行
    },
  },
  methods: {
    onClose(){
      this.setData({
        show:false
      })
    },
    onChooseAvatar(e){
      var that = this
      var tempFilePath = e.detail.avatarUrl
      http.Upload('upload', tempFilePath, {}, function (res) {
        if (res.status == 0) {
          that.setData({
            avatarUrl:res.data,
          })
        } else {
          that.selectComponent("#WaymonToast").showToast(res.msg)
        }
      })
    },
    onSubmit(){
      var that = this
      if (this.data.nickname == "" || this.data.nickname == undefined) {
        this.selectComponent("#WaymonToast").showToast('请输入或选择微信昵称')
        return
      }
      if (this.data.avatarUrl == "" || this.data.avatarUrl == undefined) {
        this.selectComponent("#WaymonToast").showToast('请选择微信头像')
        return
      }
      let media_id = wx.getStorageSync('media_id')
      let promote_id = wx.getStorageSync('promote_id')
      var unionid = wx.getStorageSync('unionid')
      unionid = unionid ? JSON.parse(unionid) : ""
      var openid = wx.getStorageSync('openid')
      openid = openid ? JSON.parse(openid) : ""
      let province = wx.getStorageSync('province')
      let city = wx.getStorageSync('city')
      let district = wx.getStorageSync('district')
      var code = wx.getStorageSync('code')
      this.selectComponent('#WaymonLoading').showLoading()
      http.Post('login',{
        media_id:media_id,
        promote_id:promote_id,
        nick_name:this.data.nickname,
        avatar_url:this.data.avatarUrl,
        unionid: unionid,
        openid: openid,
        code: code,
        province:province,
        city:city,
        district:district
      },function(res){
        that.selectComponent('#WaymonLoading').hideLoading()
        if (res.status == 0) {
            that.selectComponent("#WaymonToast").showToast("登录成功",function(){
              wx.setStorageSync('token', res.data.token)
              wx.setStorageSync('member', JSON.stringify(res.data.member))
              that.setData({
                show:false
              })
              wx.navigateBack()
            })
        } else {
          that.selectComponent("#WaymonToast").showToast(res.msg)
        }
      })
    }
  }
})

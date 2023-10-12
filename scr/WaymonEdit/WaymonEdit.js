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
      if (wx.getStorageSync('member')) {
         let member = JSON.parse(wx.getStorageSync('member'))
         this.setData({
           nickname:member.nick_name,
           avatarUrl:member.avatar_url
         })
      }
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
        this.selectComponent("#WaymonToast").showToast('请选择头像')
        return
      }
      this.selectComponent('#WaymonLoading').showLoading()
      http.Post('member/edit',{
        nick_name:this.data.nickname,
        avatar_url:this.data.avatarUrl,
      },function(res){
        that.selectComponent('#WaymonLoading').hideLoading()
        that.setData({
          show:false
        })
        if (res.status == 0) {
            that.selectComponent("#WaymonToast").showToast("编辑成功",function(){
              wx.removeStorageSync('member')
              wx.setStorageSync('member', JSON.stringify(res.data))
              that.triggerEvent('dismiss')
            })
        } else {
          that.selectComponent("#WaymonToast").showToast(res.msg)
        }
      })
    }
  }
})

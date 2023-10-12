Component({
  properties: {
    show:{
      type:Boolean,
      value:false
    },
    title:{
     type:String,
     value:"提示"
    }
  },
  data: {

  },
  methods: {
    showToast(val,cb){
      var that = this
      this.setData({
        title:val,
        show:true
      })
      setTimeout(() => {
        that.setData({
          show:false
        })
        typeof cb == 'function' && cb(null,"")
      }, 2500);
   }
  },
  attached(val){
     
  }
})


// 调用方式
/*

// js 
var WaymonToast
WaymonToast = this.selectComponent("#WaymonToast")
WaymonToast.showToast("加载成功")
//回调
WaymonToast.showToast("加载成功",function(){
  console.log('212121')
})
// json 
"WaymonToast":"/components/WaymonToast/WaymonToast"
// wxml
<WaymonToast id="WaymonToast"/>
*/


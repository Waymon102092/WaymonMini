Component({
  options:{
    addGlobalClass:true
  },
  properties: {
     show:{
       type:Boolean,
       value: false
     }
  },
  data: {
    
  },
  methods: {
     showLoading:function(){
       var that = this
       this.setData({
         show:true
       })
       setTimeout(() => {
         that.setData({
            show:false
         })
       }, 5000);
     },
     hideLoading:function(){
       this.setData({
          show:false
       })
     }
  },
  attached(){
    // setTimeout(() => {
    //   this.setData({
    //     show:false
    //   })
    // }, 5000);
  }
})

Component({
 
  properties: {
    title:{
      type:String
    },
    address:{
      type:String
    },
    money:{
      type:String
    },
    instance:{
      type:String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onClick(){
       this.triggerEvent('Click')
    }
  }
})

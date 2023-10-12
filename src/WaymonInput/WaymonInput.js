Component({
  properties: {
     title:String,
     placeholder:String,
     value:String,
     disabled:{
       type:Boolean,
       default:false
     },
     border:{
       type:Boolean,
       default:true
     }
  },
  data: {

  },
  methods: {
    onInput(e){
      this.triggerEvent('Input',{ value:e.detail.value })
    }
  }
})

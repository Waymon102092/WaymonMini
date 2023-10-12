Component({
 
  properties: {
   isCustom:Boolean,
   title:String,
   img:String
  },

  data: {

  },

  methods: {
    onClose(){
      this.triggerEvent('Close')
    }
  }
})

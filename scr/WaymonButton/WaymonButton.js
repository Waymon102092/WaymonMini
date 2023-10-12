Component({
  properties: {
    title:{
      type:String,
      value:"提交"
    },
    status:{
      type:String
    }
  },
  methods: {
    onSubmit(){
      this.triggerEvent('Submit')
    },
    onCancel(){
      this.triggerEvent('Cancel')
    },
  },
})

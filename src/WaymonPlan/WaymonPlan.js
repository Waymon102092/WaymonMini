Component({
  properties: {
     plan:Object
  },
  data: {

  },
  methods: {
    onToast(){
      this.triggerEvent('Toast')
    },
    onSubmit(){
      this.triggerEvent('Submit')
    },
    onCancel(){
       this.triggerEvent('Cancel')
    }
  }
})

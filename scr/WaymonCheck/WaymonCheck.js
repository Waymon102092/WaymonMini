Component({
  properties: {
   isCheck:Boolean,
   title:String
  },
  data: {

  },
  methods: {
    onCheck(){
       this.triggerEvent('Check')
    }
  }
})

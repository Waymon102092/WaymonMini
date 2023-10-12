Component({
  properties: {
    order:Object
  },
  data: {

  },
  methods: {
    onOrder(){
      this.triggerEvent('Order',{ order:this.data.order })
    },
    onPay(){
      this.triggerEvent('Pay',{ order:this.data.order })
    },
    onCancel(){
      this.triggerEvent('Cancel',{ order:this.data.order })
    },
    onRefund(){
      this.triggerEvent('Refund',{ order:this.data.order })
    },
    onNotice(){
      this.triggerEvent('Notice',{ order:this.data.order })
    },
    onCode(){
      this.triggerEvent('Code',{ order:this.data.order })
    }
  }
})

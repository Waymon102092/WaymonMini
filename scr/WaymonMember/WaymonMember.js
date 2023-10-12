Component({
  properties: {
    member:Object,
  },
  data: {

  },
  methods: {
    onMember(){
      this.triggerEvent('Member')
    }
  }
})

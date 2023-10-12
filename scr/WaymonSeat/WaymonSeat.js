const http = require("../../utils/http")
Component({
  properties: {
    seats: Array,
    cols: Array,
    col: Number,
    areas:Array,
    pre:Number,
    ticket_price:String,
    width:Number,
    width1:Number,
    left:Number,
    prices:Array,
    hallName: String,
    film_name: String,
    start_time: String,
    copy_language: String,
    copy_type: String
  },
  data: {
    width:0,
    num: 0,
    arr: [],
    swidth:0
  },
  lifetimes: {
    attached: function() {
      let winWidth =  wx.getSystemInfoSync().windowWidth
      let swidth =  (winWidth - 55 ) / 4
      this.setData({
          swidth:swidth
      })
      this.setData({
         member: JSON.parse(wx.getStorageSync('member'))
      })
    },
  },
  methods: {
    onSelect(e) {
      var that = this
      let colindex = e.currentTarget.dataset.colindex;
      let rowindex = e.currentTarget.dataset.rowindex;
      let arr = this.data.arr
      var seats = this.data.seats
      var prices = this.data.prices
      seats.map((item,i)=>{
         if (i == colindex) {
            item.map((cell,j)=>{
               if (j == rowindex) {
                  if (cell.seatState == 0) {
                     if (arr.length >= 4) {
                       that.selectComponent('#WaymonToast').showToast('最多可选四张票')
                       return
                     }
                     cell.seatState = 1
                     cell.money = 0
                     cell.discount = 0
                     if (that.data.areas.length == 0) {
                        const ticket_price = parseFloat(that.data.ticket_price).toFixed(2)
                        prices.push(ticket_price)
                        cell.money = (ticket_price * that.data.pre).toFixed(2)
                        cell.discount = (parseFloat(ticket_price) - parseFloat(cell.money)).toFixed(2)
                     } else {
                      that.data.areas.map(item => {
                        if (cell.areaId == item.areaId) {
                           prices.push(item.ticketPrice)
                           cell.money = (item.ticketPrice * this.data.pre).toFixed(2)
                           cell.discount = (parseFloat(item.ticketPrice) - parseFloat(item.price)).toFixed(2)
                        } 
                      })
                     }
                     console.log(cell)
                     arr.push(cell)
                  } else {
                     cell.seatState = 0
                     arr.map((res,x)=>{
                       if (res.graphCol == cell.graphCol && res.graphRow == cell.graphRow) {
                          arr.splice(x,1)
                          prices.splice(x,1)
                       }
                     })
                  }
               }
            })
         }
      })
      console.log(arr)
      this.setData({
         seats:seats,
         prices:prices,
         arr:arr
      })
    },
    onRemove(e){
      var index = e.currentTarget.dataset.index
      var arr = this.data.arr
      var prices = this.data.prices
      let graphCol = arr[index].graphCol
      let graphRow = arr[index].graphRow
      var seats = this.data.seats
      seats.map(item=>{
        item.map(cell=>{
          if (cell.graphRow == graphRow && cell.graphCol == graphCol) {
            cell.seatState = 0
          }
        })
     })
      arr.splice(index,1)
      prices.splice(index,1)
      this.setData({
        arr:arr,
        seats:seats,
        prices:prices
      })
    },
    onConfirm(){
      var money = 0
      if (this.data.arr.length == 0 ) {
         return
      }
      var seat = []
      this.data.arr.map(item => {
         money = (parseFloat(money) + parseFloat(item.money)).toFixed(2)
         seat.push(item.seatPieceName)
      })
      var discount = 0
      this.data.prices.map(item=>{
        discount = (parseFloat(discount) + parseFloat(item * (1 - this.data.pre))).toFixed(2)
      })
      this.triggerEvent('Confirm',{ num:this.data.arr.length,money:money,discount:discount,seat:seat,prices:this.data.prices })
    },
    getPhoneNumber(e) {
      var that = this
      var session_key = wx.getStorageSync('session_key')
      session_key = session_key ? JSON.parse(session_key) : ""
      var openid = wx.getStorageSync('openid')
      openid = openid ? JSON.parse(openid) : ""
      if (e.detail.errMsg == "getPhoneNumber:ok") {
        http.Post('member/tel', {
          openid: openid,
          session_key: session_key,
          encryptedData: e.detail.encryptedData,
          iv: e.detail.iv,
        }, function (res) {
          if (res.status == 0) {
            that.setData({
              member:res.data
            })
            wx.setStorageSync('member', JSON.stringify(res.data))
          } else {
            that.selectComponent('#WaymonToast').showToast(res.msg)
          }
        })
      } else {
        that.selectComponent('#WaymonToast').showToast("授权已拒绝")
      }
    },
  },
})

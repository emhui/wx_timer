//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    isRunning: false,
    defaultWorkTime: 30,
    showTime: '25:00',
    realTime: 0
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.data.realTime = this.data.defaultWorkTime * 60
    console.log(this.data.realTime)
    this.setData({
      "showTime": this.formatTime(this.data.realTime)
    })
  },
  start: function(e) {
    console.log('click')
    this.setData({
      "isRunning": !this.data.isRunning
    })
    this.data.isRunning ? this.updateTime2() : this.clearTime()
  },
  updateTime: function() {
    this.timer = setInterval(() => {
      this.setData({
        "showTime": this.formatTime(--this.data.realTime)
      })
    }, 1000);
  },
  // 查阅相关资料可知，使用setTimeout()可以防止阻塞，效率更好
  updateTime2: function(){
    this.timer = setTimeout(() => {
      this.setData({
        "showTime": this.formatTime(--this.data.realTime)
      })
      this.updateTime2()
    }, 1000);
  },
  clearTime: function(){
    this.timer && clearInterval(this.timer)
  },
  rest: function() {
    this.clearTime()
    this.setData({
      "showTime": this.formatTime(this.data.defaultWorkTime*60),
      "isRunning": false
    })
    this.checkUpdate()
  },
  formatTime: function(time){
    let minute = parseInt(time / 60)
    let second = time % 60
    second = second < 10 ? '0' + second : second
    return minute + ':' + second
  },
  onShow: function() {
    console.log('onshow')
    if (!this.data.isRunning){
      this.checkUpdate()
    }
  },
  checkUpdate: function() {
    let value = wx.getStorageSync('defaultWorkTime')
    value = value != null ? value : 25
     this.data.defaultWorkTime = value
    this.data.realTime = this.data.defaultWorkTime * 60
    this.setData({
      showTime: this.formatTime(this.data.realTime)
    })
  }
})

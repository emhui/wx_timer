// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    "defaultTimeWork": 25
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let value = wx.getStorageSync('defaultWorkTime')
    console.log(value)
    value = value != null ? value : 25
    console.log(value)
    this.setData({
      defaultTimeWork: value
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '设置'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  slideChangeDefaultWorkTime: function(e) {
    let value = e.detail.value
    console.log(value)
    wx.setStorageSync('defaultWorkTime', value)
  }
})
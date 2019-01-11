// pages/unlock/unlock.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  getWifiList: function() {
    wx.startWifi({
      success: (res) => {
        wx.getSystemInfo({
          success: (res) => {
            //console.log(res);
            if (res.platform === 'ios') {
              //console.log(res.system);
              //console.log((res.system).substring(0, 8));
              var str = (res.system).substring(0, 8);
              //console.log(str);
              if (str === 'iOS 11.0' || str === 'iOS 11.1') {
                wx.showToast({
                  title: '请更换到iOS11或以上且非iOS11.0系列和非iOS11.1系列的系统',
                  icon: 'none',
                  duration: 3000
                })
              } else {
                wx.getWifiList({
                  success: (res) => {}
                })
                wx.onGetWifiList((res) => {
                  getApp().globalData.wifiList = res.wifiList;
                  wx.switchTab({
                    url: '../connectWifi/connectWifi',
                  })
                })
              }
            }
          }
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function(options) {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: '',
    ssid: '',
    pw: ''
  },
  saveToAlbum: function() {
    wx.getImageInfo({
      src: this.data.data.data,
      success: (res) => {
        //console.log(res)
        wx.saveImageToPhotosAlbum({
          filePath: res.path,
          success: (res) => {
            //console.log(res);
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          },
          fail: (res) => {
            //console.log(res);
            wx.getSetting({
              success: (res) => {
                if (!res.authSetting['scope.writePhotosAlbum']) {
                  wx.showModal({
                    title: '扫码连WiFi提醒您',
                    content: '保存到相册失败，需要获取您的授权才能保存哦',
                    showCancel: false,
                    success: (res) => {
                      if (res.confirm) {
                        //console.log('用户点击确定');
                        wx.openSetting({
                          success: (res) => {
                            //console.log(res.authSetting);
                          }
                        })
                      }
                    }
                  })
                }
              }
            })
          }
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(options);
    this.data.data = JSON.parse(options.data);
    this.setData({
      data: this.data.data
    });
    //console.log(this.data.data);
    this.data.ssid = options.ssid;
    this.setData({
      ssid: this.data.ssid
    });
    this.data.pw = options.pw;
    this.setData({
      pw: this.data.pw
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

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
  onShareAppMessage: function(res) {
    return {
      title: '邀请你连WiFi',
      path: '/pages/shareEntered/shareEntered?wifiName=' + this.data.ssid + '&wifiPw=' + this.data.pw + '&wifiId=' + this.data.data.id,
      success: (res) => {
        wx.showToast({
          title: "分享成功",
          icon: 'success',
          duration: 2000
        })
      },
    }
  }
})
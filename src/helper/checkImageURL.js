const checkImageURL = function (url, callback) {
  let img = 'https://blog.jejualan.com/wp-content/uploads/2016/07/Product_Chair.jpg';
  window.$('<img>', {
    src: url,
    error: function () {
      callback(img, false);
    },
    load: function () {
      callback(url, true);
    },
  });
};

export default checkImageURL;

// Number Input, Tiny MCE, Text Input, Image Upload

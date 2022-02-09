const checkImageURL = function (url) {
  return new Promise((resolve) => {
    (() => {
      let img = 'https://blog.jejualan.com/wp-content/uploads/2016/07/Product_Chair.jpg';
      if (!url) resolve(img);
      window.$('<img>', {
        src: url,
        error: function () {
          resolve(img);
        },
        load: function () {
          resolve(url);
        },
      });
    })();
  });
};

export default checkImageURL;

// Number Input, Tiny MCE, Text Input, Image Upload

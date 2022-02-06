class MyComp {
  static product(payload, handleChange) {
    const fields = [
      {
        comp: 'myInputType',
        data: {
          parentClassName: 'col-md-12',
          title: 'Nama Produk',
          type: 'text',
          name: 'name',
          value: payload.name,
          handleChange: handleChange,
        },
      },
      {
        comp: 'myInputType',
        data: {
          parentClassName: 'col-md-6',
          title: 'SKU Produk',
          type: 'text',
          name: 'sku',
          value: payload.sku,
          handleChange: handleChange,
        },
      },
      {
        comp: 'myInputType',
        data: {
          parentClassName: 'col-md-6',
          title: 'Harga Produk',
          type: 'number',
          name: 'price',
          value: payload.price,
          handleChange: handleChange,
        },
      },
      // {
      //   comp: 'myInputType',
      //   data: {
      //     parentClassName: 'col-md-12',
      //     title: 'Link Foto Produk',
      //     type: 'text',
      //     name: 'sku',
      //     value: payload.sku,
      //     handleChange: handleChange,
      //   },
      // },
      {
        comp: 'myTextEditor',
        data: {
          parentClassName: 'col-md-12',
          title: 'Deskripsi Produk',
          name: 'description',
          value: payload.description,
          handleChange: handleChange,
        },
      },
    ];
    return fields;
  }

  static login(payload, handleChange) {
    const fields = [
      {
        comp: 'myInputType',
        data: {
          parentClassName: 'col-md-12',
          title: 'Email',
          type: 'email',
          name: 'email',
          value: payload.email,
          handleChange: handleChange,
        },
      },
      {
        comp: 'myInputType',
        data: {
          parentClassName: 'col-md-12',
          title: 'Password',
          type: 'password',
          name: 'password',
          value: payload.password,
          handleChange: handleChange,
        },
      },
    ];
    return fields;
  }
}

export default MyComp;

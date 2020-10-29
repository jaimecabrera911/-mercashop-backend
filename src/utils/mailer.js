const nodemailer = require("nodemailer");

module.exports = {
  transporter: nodemailer.createTransport({
    host: "smtp.aol.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  }),
  welcome(names, id) {
    return {
      text: `${names} te damos la bienvenida a la familia Merca Shop.`,
      html: `
        <body style="background-image: url(https://res.cloudinary.com/dkrcosw87/image/upload/v1601016078/images/patternFood-opaque_fqmdgg.png);">
            <hr style="width: 100%; height: 50px; background: #EE4F4F"/>
            <div style="text-align: center; ">
                <img
                    src="https://res.cloudinary.com/dkrcosw87/image/upload/v1601012885/images/Merca_Shop_logo_qeunye.png"
                    title="MercaShop"
                    alt="MercaShop"
                    width="100px"
                    height="100px"
                    style="align-items: center; margin-left: 0px; margin-right: 15px"
                />
                <div>
                    <h1 style="margin-bottom: 0;">Valida tu correo para continuar</h1>
                    <h1 style="margin-bottom: 0;">MercaShop</h1>
                    <h2 style="margin-top: 0;">Tú tienda en línea</h2>
                </div>
            </div>
            <hr style="width: 100%; height: 5px; border-radius: 10px; background: #171717"/>
            <div style="text-align: center; ">
                <h2>Hola ${names} te damos la bienvenida a la familia MercaShop.</h2>
                <p style="font-size: large;">
                ¡Gracias por registrarte! Estás a pocos pasos de activar tu cuenta, 
                por favor valida tu correo y comienza a disfrutar de todo lo que MercaShop tiene 
                para ofrecerte.
                </p>
                <a href="${process.env.REACT_APP_URL}activar-cuenta/${id}" target="blank">
                <h3>Haz click aquí para confirmar tu correo</h3>
                </a>
            </div>
            <hr style="width: 100%; height: 50px; background: #EE4F4F"/>
            <p></p>
        </body>
      `,
    };
  },
  placeOrder(
    names,
    id,
    email,
    date,
    city,
    address,
    products,
    payment,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice
  ) {
    return {
      text: `${names} te damos la bienvenida a la familia Merca Shop.`,
      html: `
          <body
              style="
                background-image: url(https://res.cloudinary.com/dkrcosw87/image/upload/v1601016078/images/patternFood-opaque_fqmdgg.png);
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
                  'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
                  'Helvetica Neue', sans-serif;
              "
            >
              <hr style="width: 100%; height: 50px; background: #ee4f4f" />
              <div style="text-align: center">
                <img
                  src="https://res.cloudinary.com/dkrcosw87/image/upload/v1601012885/images/Merca_Shop_logo_qeunye.png"
                  title="MercaShop"
                  alt="MercaShop"
                  width="100px"
                  height="100px"
                  style="align-items: center; margin-left: 0px; margin-right: 15px"
                />
                <div>
                  <h1 style="margin-bottom: 0; font-size: 400%">¡Gracias!</h1>
                  <h2 style="margin-bottom: 0">MercaShop</h2>
                  <h3 style="margin-top: 0">Tú tienda en línea</h3>
                </div>
              </div>
              <hr
                style="width: 100%; height: 5px; border-radius: 10px; background: #171717"
              />
              <div style="text-align: center">
                <h2>Hola ${names}:</h2>
                <p style="font-size: large">Gracias por tu compra en MercaShop.</p>
                <div style="display: flex; justify-content: center; align-items: center">
                  <table style="width: 500px">
                    <tr>
                      <td style="text-align: left; width: 25%">
                        <strong>Facturado por:</strong> ${email}
                      </td>
                      <td style="text-align: left; width: 25%">
                        <strong>Fecha del pedido:</strong> ${date}
                      </td>
                    </tr>
                    <tr>
                      <td style="text-align: left; width: 25%">
                        <strong>Ciudad:</strong> ${city}
                      </td>
                      <td style="text-align: left; width: 25%">
                        <strong>Dirección de envío:</strong> ${address}
                      </td>
                    </tr>
                  </table>
                </div>
                <div style="display: flex; justify-content: center; align-items: center">
                  <table style="width: 100%">
                    <caption>
                      <p style="font-size: large"><strong>DETALLES DEL PEDIDO:</strong></p>
                    </caption>
                    <tr>
                      <th
                        style="
                          border: 1px solid #e9e6e6;
                          background-color: #1d2751;
                          color: #ffffff;
                          width: 20%
                        "
                      >
                        METODO DE PAGO
                      </th>
                      <th
                        style="
                          border: 1px solid #e9e6e6;
                          background-color: #1d2751;
                          color: #ffffff;
                          width: 20%
                        "
                      >
                        PRECIO DE LOS ARTICULOS
                      </th>
                      <th
                        style="
                          border: 1px solid #e9e6e6;
                          background-color: #1d2751;
                          color: #ffffff;
                          width: 20%
                        "
                      >
                        IMPUESTOS
                      </th>
                      <th
                        style="
                          border: 1px solid #e9e6e6;
                          background-color: #1d2751;
                          color: #ffffff;
                          width: 20%
                        "
                      >
                        PRECIO DEL ENVÍO
                      </th>
                      <th
                        style="
                          border: 1px solid #e9e6e6;
                          background-color: #1d2751;
                          color: #ffffff;
                          width: 20%
                        "
                      >
                        PRECIO TOTAL
                      </th>
                    </tr>
                    <tr>
                      <td style="text-align: left; width: 20%; background-color: #ffffff">
                        ${payment}
                      </td>
                      <td style="text-align: left; width: 20%; background-color: #ffffff">
                        ${itemsPrice}
                      </td>
                      <td style="text-align: left; width: 20%; background-color: #ffffff">
                        ${taxPrice}
                      </td>
                      <td style="text-align: left; width: 20%; background-color: #ffffff">
                        ${shippingPrice}
                      </td>
                      <td style="text-align: left; width: 20%; background-color: #ffffff">
                        ${totalPrice}
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
              <hr style="width: 100%; height: 50px; background: #ee4f4f" />
              <p></p>
          </body>
      `,
    };
  },
  async verify(transporter) {
    const isConnected = await transporter.verify();
    console.log("Server is ready to send message", isConnected);
  },
};

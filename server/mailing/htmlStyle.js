import Hospital from "../models/hospitalModel.js"

export const getHtmlStyle = (nameUser, nameField, hospital) => {
  let htmlStyle = `<!DOCTYPE HTML
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
  
  <head>
  
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="x-apple-disable-message-reformatting">
  
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title></title>
  
    <style type="text/css">
      @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
  
        .u-row .u-col {
          vertical-align: top;
        }
  
        .u-row .u-col-36p67 {
          width: 220.02px !important;
        }
  
        .u-row .u-col-63p33 {
          width: 379.98px !important;
        }
  
        .u-row .u-col-100 {
          width: 600px !important;
        }
  
      }
  
      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
  
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
  
        .u-row {
          width: 100% !important;
        }
  
        .u-col {
          width: 100% !important;
        }
  
        .u-col>div {
          margin: 0 auto;
        }
      }
  
      body {
        margin: 0;
        padding: 0;
      }
  
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
  
      p {
        margin: 0;
      }
  
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
  
      * {
        line-height: inherit;
      }
  
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
  
      table,
      td {
        color: #000000;
      }
  
      @media (max-width: 480px) {
        #u_content_heading_1 .v-container-padding-padding {
          padding: 51px 10px 30px !important;
        }
  
        #u_content_heading_1 .v-text-align {
          text-align: center !important;
        }
  
        #u_content_heading_3 .v-container-padding-padding {
          padding: 51px 10px 50px !important;
        }
  
        #u_content_text_1 .v-container-padding-padding {
          padding: 10px !important;
        }
  
        #u_content_heading_4 .v-container-padding-padding {
          padding: 40px 10px 10px !important;
        }
  
        #u_content_heading_4 .v-text-align {
          text-align: center !important;
        }
      }
    </style>
  
  
  
  
    <link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css">
  
  
  </head>
  
  <body class="clean-body u_body"
    style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ECFCF2;color: #000000">
  
    <table
      style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ECFCF2;width:100%"
      cellpadding="0" cellspacing="0">
      <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
  
  
            <div class="u-row-container"
              style="padding: 0px;background-image: url('../images/image-1.png');background-repeat: no-repeat;background-position: center top;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div style="height: 100%;width: 100% !important;">
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;">
  
                        <table id="u_content_heading_1" style="font-family:'Raleway',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td class="v-container-padding-padding"
                                style="overflow-wrap:break-word;word-break:break-word;padding:51px 10px 30px 20px;font-family:'Raleway',sans-serif;"
                                align="left">
                                <h1 class="v-text-align"
                                  style="margin: 0px; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 18px; font-weight: 400;">
                                  <span>Здравствуйте, <b>${nameUser}</b>!</span>
                                </h1>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table id="u_content_heading_3" style="font-family:'Raleway',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td class="v-container-padding-padding"
                                style="overflow-wrap:break-word;word-break:break-word;padding:51px 10px 50px 43px;font-family:'Raleway',sans-serif;"
                                align="left">
                                <h1 class="v-text-align"
                                  style="margin: 0px; color: #117c5d; line-height: 120%; text-align: left; word-wrap: break-word; font-size: 27px; font-weight: 400;">
                                  <span><span><span><strong>&nbsp;&nbsp;&nbsp;Система оповещения!</strong></span></span></span>
                                </h1>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table id="u_content_text_1" style="font-family:'Raleway',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td class="v-container-padding-padding"
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 43px;font-family:'Raleway',sans-serif;"
                                align="left">
  
                                <div class="v-text-align"
                                  style="font-size: 14px; line-height: 160%; text-align: left; word-wrap: break-word;">
                                  <p style="line-height: 160%;"> </p>
                                  <p style="line-height: 160%;">Для Вашего здоровья предлагаем Вам пройти следующее обследование: <b>${nameField}</b>, чтобы Вы могли бы сделать это в профилактических целях.</p>
                                  <p style="line-height: 160%;">Предлагаем Вам следующее лечебно-профилактическое учреждение: <b>${hospital?.name}</b>, которое находится по адресу: <b>${hospital?.address}</b>.</p>
                                  <p style="line-height: 160%;">Телефон регистратуры:
                                  <a href="tel:${hospital?.phone}">
                                  <b>${hospital?.phone}</b>.</p>
                                </div>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
  
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
  
                  <div class="u-col u-col-100"
                    style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
                    <div
                      style="background-color: #117c5d;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
  
                        <table id="u_content_heading_4" style="font-family:'Raleway',sans-serif;" role="presentation"
                          cellpadding="0" cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td class="v-container-padding-padding"
                                style="overflow-wrap:break-word;word-break:break-word;padding:40px 10px 10px 40px;font-family:'Raleway',sans-serif;"
                                align="left">
  
                                <h1 class="v-text-align"
                                  style="margin: 0px; color: #ffffff; line-height: 140%; text-align: left; word-wrap: break-word; font-size: 22px; font-weight: 400;">
                                  <span>С уважением, БаланСЗдоровья!</span>
                                </h1>
  
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
  
                        <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0"
                          cellspacing="0" width="100%" border="0">
                          <tbody>
                            <tr>
                              <td class="v-container-padding-padding"
                                style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 0px;font-family:'Raleway',sans-serif;"
                                align="left">
  
                                <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="92%"
                                  style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                  <tbody>
                                    <tr style="vertical-align: top">
                                      <td
                                        style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
                                        <span>&#160;</span>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
  
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
  
  
  
  
            <div class="u-row-container" style="padding: 0px;background-color: transparent">
              <div class="u-row"
                style="margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
                <div
                  style="border-collapse: collapse;display: table;width: 100%;height: 100%;background-color: transparent;">
  
                  <div class="u-col u-col-63p33"
                    style="max-width: 320px;min-width: 379.98px;display: table-cell;vertical-align: top;">
                    <div
                      style="background-color: #117c5d;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      </div>
                    </div>
                  </div>
                  <div class="u-col u-col-36p67"
                    style="max-width: 320px;min-width: 220.02px;display: table-cell;vertical-align: top;">
                    <div
                      style="background-color: #117c5d;height: 100%;width: 100% !important;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      <div
                        style="box-sizing: border-box; height: 100%; padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;border-radius: 0px;-webkit-border-radius: 0px; -moz-border-radius: 0px;">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </td>
        </tr>
      </tbody>
    </table>
  </body>
  
  </html>`
  return htmlStyle
}
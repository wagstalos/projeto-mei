function price() {
  // URL da API web do Google Apps Script
  var url =
    "https://script.googleusercontent.com/macros/echo?user_content_key=U6r8qCB1HB-BHxL7VqePO8_5Oaqr1Dw5m7WaqS_x0-mvuBTm7emmhrtZcPvI7Ck-QaZgDon7SxfoZjPf49hDSGROGS0NVRIAm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnDxiUpEGk-ymQvCAPz_3BwJv2Kv9iqzV-Lrela3mq3ItJ6FLaXbWSndZAn9jCY6F9G7o886MXGoakemkFCIeoRG_2Ybj-VDT3A&lib=MFXnD2rt4iC0VODF_PwXioaZ-EJLCU2DJ";

  // Realizar a requisição AJAX
  $.ajax({
    url: url,
    dataType: "json",

    success: function (data) {
      console.log(data);
      // Verificar se 'normal' está presente nos dados e exibir o preço
      //   if (data.length > 0 && data[0].hasOwnProperty("normal")) {
      //     $(".js-normal").text(data[0].normal);
      //     $(".js-premium").text(data[0].premium);
      //   } else {
      //     $(".js-normal").text("Consultar");
      //     $(".js-premium").text("Consultar");
      //   }
      $(".js-normal").text(data[0].normal);
      $(".js-premium").text(data[0].premium);
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.error("Erro ao carregar os dados:", textStatus, errorThrown);
      $(".js-normal").text("Consultar");
      $(".js-premium").text("Consultar");
    },
  });
}

price();

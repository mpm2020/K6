// Auto-generated by the postman-to-k6 converter

//IMPORT PARA EL REPORTE
import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import { group } from "k6";

export let options = {maxRedirects: 4,
  duration: '10s',
 vus: 10,

  //VALIDACIONES THRESHOLDS
  thresholds: {
  checks: ['rate>0.4'], // LA TASA DE EXITO DEBERIA SER MAYOR QUE 40%
  },
};

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options
});

export default function() {
    //GRUPOS DE SERVICIOS
  group("Servicios GET", function() {
    postman[Request]({
      name: "Get con ID",
      id: "e2bece16-4f4a-4865-b46e-f3c24de1373e",
      method: "GET",
      address: "https://postman-echo.com/get?id=200",
      headers: {
        Fran: "mi dato"
      },
      post(response) {
        //TEST PROPIOS DE POSTMAN CON VALIDACIONES
        pm.test("Status code is 200", function() {
          pm.response.to.have.status(200);
        });
        pm.test("Response time is less than 4000ms", function() {
          pm.expect(pm.response.responseTime).to.be.below(4000);
        });
      }
    });
  });
}
 export function handleSummary(data) {
    return {
        [`summary.html`]: htmlReport(data),
        stdout: textSummary(data, { indent: ' ', enableColors: true }),
    };
}

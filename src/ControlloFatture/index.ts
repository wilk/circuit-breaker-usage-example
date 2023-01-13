import { v4 as uuid } from "uuid";
import { checkInvoices } from "./invoices";

function main() {
  setInterval(() => {
    const clientId = uuid();
    checkInvoices(clientId);
  }, 2000);
}

main();

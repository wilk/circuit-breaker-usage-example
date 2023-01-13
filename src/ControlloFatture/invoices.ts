import CircuitBreaker from "opossum";
import * as gestioneFattureSdk from "./gestione-fatture-sdk";

const options = {
  errorThresholdPercentage: 50,
  resetTimeout: 5 * 1000,
};
const breaker = new CircuitBreaker(gestioneFattureSdk.getInvoices, options);

export async function checkInvoices(clientId: string): Promise<void> {
  try {
    console.log(`Fetching invoices for ${clientId}...`);
    const invoices = await breaker.fire(clientId);
    console.log(`Fetched ${invoices.length} invoices for ${clientId}`);
  } catch (err: any) {
    if (CircuitBreaker.isOurError(err)) {
      console.error("[BREAKER]>", err.message);
    } else {
      console.error("[HTTP]>", err.message);
    }
  }
}

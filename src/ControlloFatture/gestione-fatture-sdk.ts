import axios from "axios";

const gestioneFattureClient = axios.create({
  baseURL: "http://127.0.0.1:5000/api/",
  timeout: 60 * 1000,
});

type Invoice = {
  id: string;
};

export async function getInvoices(clientId: string): Promise<Invoice[]> {
  return (await gestioneFattureClient.get(`/clients/${clientId}/invoices`))
    .data;
}

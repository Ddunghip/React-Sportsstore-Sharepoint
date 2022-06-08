import { DataTypes } from "./Types";
const protocol = "http";
const hostname = "localhost";
const port = 3500;
const siteId = 'modernofficetech.sharepoint.com,1da6c0dd-1a36-4a65-9620-e7c44cffa4c2,bdc2a6f7-94b2-4fc2-8d6e-4fcb7656a517';
const listIdP = 'b5b7a913-41bb-4c24-bc7e-7af15a7f4c8b';
const listIdC = '5fd1171f-99e4-464c-94e1-6584a0e1d15f'
export const RestUrls = {
    // [DataTypes.PRODUCTS]: `${protocol}://${hostname}:${port}/api/products`,
    [DataTypes.CATEGORIES]: `${protocol}://${hostname}:${port}/api/categories`,
    // [DataTypes.PRODUCTS]: `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listIdP}/items?$Select=Id&$expand=fields`,
    // [DataTypes.CATEGORIES]: `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listIdC}/items?$Select=Id&$expand=fields`
}
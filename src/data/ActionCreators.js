import { ActionTypes } from "./Types";
// import { data as phData } from "./placeholderData";
import { RestDataSource } from './RestDataSource'
import { authProvider } from "../authProvider";
import { DataTypes } from "./Types";

import axios from "axios";
const dataSource = new RestDataSource();
const siteId = 'modernofficetech.sharepoint.com,1da6c0dd-1a36-4a65-9620-e7c44cffa4c2,bdc2a6f7-94b2-4fc2-8d6e-4fcb7656a517';
const listId = 'b5b7a913-41bb-4c24-bc7e-7af15a7f4c8b';
const listIdP = 'b5b7a913-41bb-4c24-bc7e-7af15a7f4c8b';
const listIdC = '5fd1171f-99e4-464c-94e1-6584a0e1d15f'


const dataType = 'products'

export const loadData = (dataType) => ({

    type: ActionTypes.DATA_LOAD,
    payload: dataSource.GetData(dataType).then(response => ({ dataType, data: response.data })
    )
    // &&

    // payload: dataSource.GetData(dataType).then(response => {
    //     let raw = response.data.value
    //     let result = []
    //     if (raw && raw.length > 0) {
    //         raw.map(item => {
    //             let obj = {};
    //             obj.id = item.id;
    //             obj.Title = item.fields.Title
    //             obj.Price = item.fields.Price
    //             obj.Category = item.fields.Category
    //             obj.Description = item.fields.Description
    //             result.push(obj)
    //         })
    //     }
    //     return result

    // },
    // ).then(result => ({ dataType, data: result.data }))


});
export const loadDatap = () => ({
    type: ActionTypes.DATA_LOAD,
    payload: authProvider.getAccessToken().then(async token =>
        await axios({
            method: "get",
            url: `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?$Select=Id&$expand=fields`,
            headers: {
                Authorization: "Bearer " + token.accessToken,
                Accept: '*/*'
            }
        })
    ).then(response => {
        let raw = response.data.value
        let result = []
        if (raw && raw.length > 0) {
            raw.map(item => {
                let obj = {};
                obj.id = item.id;
                obj.Title = item.fields.Title
                obj.Price = item.fields.Price
                obj.Category = item.fields.Category
                obj.Description = item.fields.Description
                result.push(obj)
            })
        }
        return result

    },
    ).then(result => ({ dataType, data: result }))

})




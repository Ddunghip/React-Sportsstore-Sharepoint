import Axios from "axios";
import { RestUrls } from "./Urls";
import { authProvider } from "../authProvider";

// const actoken = authProvider.getAccessToken().then(token => { return token })


// console.log('check actoken', actoken);
// const header = {
//     Authorization: "Bearer " + actoken,
//     Accept: '*/*',
// }

export class RestDataSource {



    GetData = (dataType) => this.SendRequest('get', RestUrls[dataType]);
    SendRequest = (method, url) => Axios.request({ method, url });

    // SendRequest = (url) => {
    //     let a = authProvider.getAccessToken().then(async token =>
    //         await Axios({
    //             method: 'get',
    //             url: url,
    //             headers: {
    //                 Authorization: "Bearer " + token.accessToken,
    //                 Accept: '*/*'
    //             }
    //         })
    //     )


    // }


}
//authProvider.getAccessToken().then(async token =>
    //     await axios({
    //         method: "get",
    //         url: `https://graph.microsoft.com/v1.0/sites/${siteId}/lists/${listId}/items?$Select=Id&$expand=fields`,
    //         headers: {
    //             Authorization: "Bearer " + token.accessToken,
    //             Accept: '*/*'
    //         }
    //     })
    // )

export default function api(accept='application/json', warehouse='tel_aviv')
{
        const baseURL = 'https://ops.avo.co.il/api/'
        const headers = {'Accept': accept, 'X-Warehouse-Code':warehouse}

        return {baseURL, headers}
}

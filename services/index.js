import axios from 'axios';
import config from '../config';

const client = axios.create(config.api);

const defaultParameters = { 'by_company_id':'129',
                            'mode':'suggest',
                            'page':'1',
                            'per_page':'45'}

const commonService = {
  getData(params) {
    return client.request({
      method: 'get',
      url: 'v1/products/search?/',
      params: {...defaultParameters,
        'query':params.query,
        'per_page':params.per_page,
        'page':params.page,
        'mode':params.mode,},
    });
  },
  putData(params){
      return client.request({
          method: 'put',
          url: '/',
          params
      })
  }
};

export { commonService };
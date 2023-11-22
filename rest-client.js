// https://reintech.io/blog/how-to-use-node-js-to-create-a-rest-client
const axios = require('axios');

class RestClient {
  constructor(baseURL) {
    this.client = axios.create({
      baseURL: baseURL,
      // timeout: 1000,
      headers: { 'Content-Type': 'application/json' }
    });
  }

  // get all
  async get(url) {
    try {
      const response = await this.client.get(url);
      return response.data;
    } catch (error) {
        console.error(error);
    }
  }

    // get by id
    async getById(url) {
        try {
          const response = await this.client.get(url);
          return response.data;
        } catch (error) {
            console.error(error);
        }
      }

    // post
    async post(url, data) {
        try {
            const response = await this.client.post(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // put
    async put(url, data) {
        try {
            const response = await this.client.put(url, data);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }

    // delete
    async delete(url) {
        try {
            const response = await this.client.delete(url);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}

module.exports = RestClient;

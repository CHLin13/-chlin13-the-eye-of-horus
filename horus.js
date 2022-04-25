const axios = require('axios');
const path = require('path');
const fsPromise = require('fs/promises');

const horus = {
  send: async (timestamp, host, name, value, URL) => {
    try {
      await axios.post(`${URL}/app/postData`, {
        timestamp: timestamp,
        host: host,
        name: name,
        value: value,
      });
      const fileList = await fsPromise.readdir('./');
      if (fileList.find((name) => name === 'wait')) {
        const file = await fsPromise.readdir('./wait');
        const data = await Promise.all(
          file.map(async (file) => {
            const read = await fsPromise.readFile('./wait/' + file);
            return JSON.parse(read.toString());
          })
        );

        data.forEach(async (data) => {
          await axios.post(`${URL}/app/postData`, {
            timestamp: data.timestamp,
            host: data.host,
            name: data.name,
            value: data.value,
          });
        });

        await fsPromise.rm('./wait', { recursive: true, force: true });
      }
    } catch (error) {
      console.error(`Send data error: ${error}`);
      const str = JSON.stringify({
        timestamp: timestamp,
        host: host,
        name: name,
        value: value,
      });
      const fileName = Date.now().toString();
      try {
        const file = await fsPromise.readdir('./');
        if (!file.find((name) => name === 'wait')) {
          await fsPromise.mkdir(path.join('./', 'wait'));
        }
        await fsPromise.writeFile('./wait/' + fileName + '.txt', str);
      } catch (error) {
        console.error(`Write file error: ${error}`);
      }
    }
  },
};

module.exports = horus;

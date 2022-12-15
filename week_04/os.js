'use strict';

const { networkInterfaces } = require('os');
const interfaces = networkInterfaces();

let filteredInterfaces = [];
for (let name in interfaces) {
  let iFace = interfaces[name];
  iFace.forEach((i, index) => {
    if (i.family === 'IPv4') {
      filteredInterfaces.push({
        ip: i.address,
        netmask: i.netmask,
        cidr: i.cidr,
        mac: i.mac,
      });
    }    
  });
}

console.log(filteredInterfaces);

let myURL = new URL('https://user:pass@sub.example.com:8080/p/a/t/h?query=string#hash');
console.log(myURL);

const hName = myURL.hostname;
console.log (hName);

const { username: uname, port } = myURL;
console.log(uname, port);

myURL = new URL('http://www.pgm.gent/students?class=1pgm#a');
console.log(myURL.pathname); // #hash
myURL.pathname = 'lecturers';
console.log(myURL);

myURL = new URL('https://www.google.be/search?q=peer&sxsrf=ALiCzsYgzPc7pn4juigX85h_lktU0d6aBw%3A1669900173472&source=hp&ei=jaeIY9C1Gc-ZsAfFnpSoBQ&iflsig=AJiK0e8AAAAAY4i1ndzOnyYlP5CQxq-ibRZLbAQO23LZ&ved=0ahUKEwiQsJb1vtj7AhXPDOwKHUUPBVUQ4dUDCAc&uact=5&oq=peer&gs_lcp=Cgdnd3Mtd2l6EAMyCAguELEDEIAEMgUIABCABDIFCC4QgAQyDgguEIAEEMkDEMcBEK8BMgUILhCABDILCAAQgAQQsQMQgwEyDgguEIAEELEDEIMBENQCMgUIABCABDIFCAAQgAQyCwguEIAEEMcBEK8BOgcIIxDqAhAnOg4ILhCABBCxAxDHARDRAzoLCC4QgAQQxwEQ0QM6CAguEIAEENQCOggIABCABBCxAzoICC4QgAQQsQM6BAgjECc6CwguEMcBENEDEIAEOgsILhCxAxCDARDUAjoOCC4QgAQQsQMQxwEQrwE6CwguEIAEELEDENQCUL00WLI5YOs6aAFwAHgAgAFXiAG8ApIBATSYAQCgAQGwAQo&sclient=gws-wiz&dlnr=1&sei=mKeIY7D1NcqRsAfv_qiYCw');

myURL = new URL('https://sporza.be/nl/matches/voetbal/wld/fifa-wereldkampioenschap/2022/groep-f/03/kroatie-belgie-live-16u-vertonghen-gelooft-erin-soms-zie-je-het-licht-niet-maar-het-schijnt-het-felst-in-donkere-tijden~1648812181962/');
console.log(myURL.pathname);
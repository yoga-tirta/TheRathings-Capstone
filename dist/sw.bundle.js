if(!self.define){let e,i={};const n=(n,a)=>(n=new URL(n+".js",a).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,d)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(i[r])return;let f={};const b=e=>n(e,r),c={module:{uri:r},exports:f,require:b};i[r]=Promise.all(a.map((e=>c[e]||b(e)))).then((e=>(d(...e),f)))}}define(["./workbox-e5b96673"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"188.bundle.js",revision:"0000e8c9377234e763e6ecdfbb4c45fb"},{url:"4e081828acaf07282d7953428087c42c.png",revision:null},{url:"66115d9aa8f12394aa6cd90e64a4fde5.png",revision:null},{url:"730.bundle.js",revision:"69edde02d81ef2ba5345960e1b96a0d0"},{url:"771100b514a6485b8cbc45174874e051.jpg",revision:null},{url:"app~309f7e27.bundle.js",revision:"0907d578d5306c774bbfd40f8c9ac791"},{url:"app~309f7e27.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~61a228d7.bundle.js",revision:"01b7a89880f13e3c5ee7a16ab520d956"},{url:"app~7bd12dde.bundle.js",revision:"38584fc5db59181e4b3bd1a3fbe3d69e"},{url:"app~a51fa3f5.bundle.js",revision:"3b85be78c5b1138f1451f094b45c4bcd"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~bb79d10e.bundle.js",revision:"e4c1cb2df2b8eedc5b897d7dc23f0f31"},{url:"app~bb79d10e.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"55ad47a1ed3df3d59055ea7d79264b4f"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~d8ac8f23.bundle.js",revision:"e86df77a10c70c555323bec96686bb4a"},{url:"app~d8ac8f23.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"794a26ca13f9d8229e7d6589467b44c8"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"e9074f57085f09284558b1bf9b37898f.png",revision:null},{url:"favicon.png",revision:"4b76ddf5e1530dd0494458af5908f460"},{url:"icon/favicon.png",revision:"4b76ddf5e1530dd0494458af5908f460"},{url:"icon/icon-128x128.png",revision:"dc083eb594d0b97cc9e9a53b0d95dc4a"},{url:"icon/icon-144x144.png",revision:"e857977f176c350e4e75352b7719504a"},{url:"icon/icon-152x152.png",revision:"a78acb63607803da06233bcbf0db1521"},{url:"icon/icon-192x192.png",revision:"35996663279e97df74c2aa4bf65afbf0"},{url:"icon/icon-256x256.png",revision:"d36035f0348b2f8ad8ec26fd250b5dd2"},{url:"icon/icon-384x384.png",revision:"a83f77bfdb57031bed59b24e8d132f51"},{url:"icon/icon-512x512.png",revision:"0c473f542fec46ed3e084f217ce6970b"},{url:"icon/icon-72x72.png",revision:"04237226ece96e1b486ad95eaa4931dc"},{url:"icon/icon-96x96.png",revision:"9576633356a1859ad18bd206642d8699"},{url:"img/explore/detail-explore.png",revision:"a0fe094310a9af3456eb30befe4888c3"},{url:"img/explore/jco.webp",revision:"21f43adad8d800857cb8d830d5ed384c"},{url:"img/explore/kfc.png",revision:"e247a3f6d54c73461e5f56f5842c7183"},{url:"img/explore/mcd.png",revision:"9ef08a61e309227a1cb31afdfd350102"},{url:"img/explore/pizza.png",revision:"f95c6c428ccf6be46299530fb8c08acb"},{url:"img/explore/sushi.png",revision:"93a93194d154505d2cf078a1bb1fad59"},{url:"img/hero.jpg",revision:"3414fe8bee81fa2e7108a82b593cfff1"},{url:"img/home/background-fifth-main.png",revision:"3badc89e1da03a4da3564bd85608a19b"},{url:"img/home/background-sixth-main.png",revision:"9d14c86add9605a3aaadf6c2d1bafc57"},{url:"img/home/background-tagline-why.png",revision:"9eca5a331e3f1cf9a151d012cfaee72b"},{url:"img/home/background-third-main.png",revision:"34d5451bdcb1e970e30f7b9c069d67aa"},{url:"img/home/first-main.png",revision:"dddb56fea39ce842975b37924f420b90"},{url:"img/home/fourth-main.svg",revision:"e57c3bc96ce525056c5e10e38e5ac195"},{url:"img/home/second-main.svg",revision:"35fdc638b37bfe75101816e3e52ea08d"},{url:"img/home/third-main.svg",revision:"e32756deecec7521563fdcdc47d5d68b"},{url:"img/img-login.svg",revision:"464e010d6ab0e51989f451ffccb0b5e1"},{url:"img/skeleton.png",revision:"e8c46b161a53ef908382717c097ce37b"},{url:"img/team/haniffah-sri-rinjani.png",revision:"1af2155aff804cf90cf920f43eef8bae"},{url:"img/team/putri.png",revision:"0810bab16c98309a98f2ba55b0299024"},{url:"img/team/raehan-ramadhan.png",revision:"0fd0e5ef36b9ef89247b6f1cee7ea100"},{url:"img/team/yoga-tirta-permana.png",revision:"f59fabdac4eb45b13099eab60254b731"},{url:"manifest.json",revision:"620ab918a0ece1bd184e4384b2b250c7"}],{}),e.registerRoute(/^https:\/\/api.spoonacular.com\//,new e.StaleWhileRevalidate({cacheName:"API-Cache",plugins:[new e.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));

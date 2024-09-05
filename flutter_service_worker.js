'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "8561bf5957c992c6d92df1737f14fe1a",
".git/config": "c6818666414898bb846cd7bd3c80e1a7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2768893a5a9187b074120b3a5df4dffe",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "1ad8725a8f7ac3160b6857d03bc65140",
".git/logs/refs/heads/main": "b700cb74040a1b7157720e9524032777",
".git/logs/refs/remotes/origin/main": "680be20e2b22667c782179368717d1a3",
".git/objects/0d/58915d83b8086ab2d80f015c150296f4e171c2": "5ddbae8f390a55d987c767ef87773c3b",
".git/objects/0d/a433327cfeb0dce3c72055fcf64d79ab21beee": "1bd9c6a731e040cc9a5ccfb4c02e2554",
".git/objects/0e/1e755e9f09e686590c50822ce05601a7c5c756": "9567302c49e4f345c76fe3876f26e823",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/63a9b9f51077926f412f32c5e1de989573518b": "3b1362e324f6acf46c4a28d79167279f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/a3c5d142223c70b26087a628019d07a23ef243": "4c18eb23cf790484ce0d0580c877b4ab",
".git/objects/2c/d210ae092a9122833cc1f14a8a9a5c6b27a0f6": "1d9cc5448c4b61feb60c1b13e0c46807",
".git/objects/30/7ef9fe63ff55dd876e8b8c679a7e91b6c53e3a": "38a2b54066ffac6815ea8ee0fbccd03d",
".git/objects/37/2487f11176e0c16268927b8ba03efed1980aaa": "1af974ee93c1d79a3de533dfcbf5e6f4",
".git/objects/39/1c084db6d4aecd141533a3c3ad47f54aee02da": "dc2eb5b1613018bcbec0984f73420c09",
".git/objects/3a/40adbf6735197dc36e49390029963afa8ec8bb": "5c8a689b8b3930a65c84f9cb8c9b44a1",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/ee1169fa2cb1951d57b5d2751bf38a630b9744": "bcc8a72f75798c7489704822cdc93912",
".git/objects/47/ad7b5d8ac3a4f8b9119a3cb14708047aba55f8": "7bcbc31d9c08fb04ced8a26e932fa16e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4f/1eca1addac6cc9cb8b9b093a0d5f7cafacf172": "9694ced35b0676056ee8da1d2cf9c3c0",
".git/objects/4f/26bdbbb10ee4247dd40de009e4ca4d9de786d9": "a9a8dc92c54247af5b7a7945494cce2b",
".git/objects/56/3eda316620f0dde8485c2dab4bdeeb4e332c3a": "d51adcfe74f641200557ad23e151ffce",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/847f71777c3856dc77ddf8c42ca41c6946a3e9": "06261b44872898c2c4561707d45dc494",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/6a/f3e7e4daa06ac994a2e7673055a9e5a03f79f0": "d78ca66b1577c8663e27ae189f6a32d6",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/9bbd9de88b8e42d8776893dd6abc8c0fdb1971": "6504e746f203b4156edd01da9c9b7d3f",
".git/objects/86/a5ecb7428d525ede291b93a80ef60acb298448": "d879fbb1669cf4cb640ec8e6a98eb373",
".git/objects/86/b40b67d3a7c495c6d9c4cf95d0c52b3312507f": "a8149afaf71de4582c2923fad323c4e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0d437103c11d100b52b347b3645f872b7efcf9": "6bd23af0ca4c82a4fb752950bd6cba1e",
".git/objects/8a/740e0a0989e969b699995ecf92468221bc7c68": "fb62d2a2e83d6f07e17cb8305ba5721f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/ba4199acfc0da9aa05049c07825e0430a4b7e5": "128843b2fb29bcb5b718e4045005d160",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/a3/67fe69ed87fd803989835bd70181d8117fc41a": "5282f93ea85818cf7014a4f4be695520",
".git/objects/ac/25296d40bf52c299b7a40a2588ec3922fc596b": "ca5c22d517ed9a5ec65431bf309f4f03",
".git/objects/b1/a64081c6324c382be92cc46da40194ada429b3": "59495a6b595fa5088b0092d6ab63abe6",
".git/objects/b2/2966e012e475a0039681b47147f8cbd6ad8eb4": "4c824aaf775a0a13a4c5f80cf20cac25",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/b1dea1842448babc15d61be031fe5cda3b0455": "41926c8610ee09321b7d06de22228c5d",
".git/objects/b4/efe6ec41d8603a1e1c7875457f37dd8b375423": "76c65f8c6da612dad78152a2c27dd419",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/707d068277c23aa7eca52161e21ca1385e0f04": "d33e0451cb3dc40403605db1a6de2161",
".git/objects/c0/16a0c5e176b454d8c9dd3cc0bb51c8455c6840": "9a645ba76fe58514d15913f1c50cd798",
".git/objects/c3/1635b60b2869eaa473ad4e0ad9c0488e32b238": "b1134c9917892491d78c81410ee44528",
".git/objects/c4/fc5b04880e5b6e1496cf6ccaa1de50417e255c": "606fce0c4863a483532e9425e4eefce7",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e8/c8863968712f5767cc10b1e51a9f85d9158f7b": "645cec5e3d86e5d2acdb29581f44ea52",
".git/objects/ea/e72e5b13d7a8f1c528ef127e35e1dfd2bad537": "5b659f44854b42f8808ba81fabe82619",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a19c3bfa54bbf2447721d0af9ebc00b9e611f1": "7c65b275b0b81076719394542b85e8dd",
".git/objects/f1/74163b362d8a0d9151ba9df701edb9934dba05": "4111a7d916befa8b5b976226ad94dbaa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/cf0dfe82bc8f78e8b3fef2fef0afc444ac53ac": "2a2a384321b0dc75549c6ad151121e73",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/refs/heads/main": "35bc5966453f0cf03debd5cb3114f7b1",
".git/refs/remotes/origin/main": "35bc5966453f0cf03debd5cb3114f7b1",
"assets/asset/1poschodie_tma.png": "49e33dcc64a55f7088bee91e00c6df27",
"assets/asset/2poschodie_tma.png": "49e33dcc64a55f7088bee91e00c6df27",
"assets/asset/3poschodie_tma.png": "e27e32937101b2eaf63e53743aa17b84",
"assets/asset/edupage_logo.png": "72ff289df62c633b2e2c90777129a826",
"assets/asset/Satelite.png": "74fdb9de783949ec0530a1acd94d3f72",
"assets/asset/triedy.json": "6b2e10177865d4d23eb9e51dbd2f2ef8",
"assets/AssetManifest.bin": "9f615a3c60838cedb45a5b6e1705224a",
"assets/AssetManifest.bin.json": "f964d57af66fa9848947ff49dbd71907",
"assets/AssetManifest.json": "d6ead60d9bffdf18e784843ed87e714d",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "347699924f3959e7e872086a1c82cb2e",
"assets/NOTICES": "cba1db53f6ee125961fad609ec2f7c9c",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"flutter_bootstrap.js": "244390210cec9b080a602d99ef0ad7ac",
"icons/android-chrome-192x192.png": "dcba6b8181e0e101a31b4e7e878b6823",
"icons/android-chrome-512x512.png": "69b4f40da5eabb347eeb07c9bf3cb4db",
"icons/apple-touch-icon.png": "f3a1320d10e0f0efb99c672a6d7c1443",
"index.html": "bee2115d9d5befd825c63700212f437b",
"/": "bee2115d9d5befd825c63700212f437b",
"logo.png": "dcba6b8181e0e101a31b4e7e878b6823",
"main.dart.js": "b1eaaa6278ff61929327da40efe3f7dc",
"manifest.json": "484aa6b57badd36bb866f279dd6930d8",
"version.json": "3160950e7e9c81ce3a95d52764a3558a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

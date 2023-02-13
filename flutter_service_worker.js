'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "9cd013350d7152f5ba8ea39550b742b0",
".git/config": "72a9a7916b985b8d7217ffc2c8a3796e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "57798a76ca2573e772b93caae0200254",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "ed72846f4528d799db1eaca5c8eac864",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3d9b74e0a8f5676b06768099d600e7c0",
".git/logs/refs/heads/main": "68960f7ae0ca3b88979fdb7461e9a820",
".git/logs/refs/heads/master": "147280269657b92a7fe3b688315f0944",
".git/logs/refs/heads/updates": "7726947ff6b7f730a471542d9c3eb455",
".git/logs/refs/remotes/origin/main": "c8330f6870f2c9533fbcd04350740c2a",
".git/logs/refs/remotes/origin/master": "e9ba2c55d077238798921ba86f7008d0",
".git/logs/refs/remotes/origin/updates": "43039de496f1384081228631ab815b0b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/0b/2f3e0f7f6077cfd27585fb6eb43a0f35e68da6": "da300fd2d933674892914858a1412abe",
".git/objects/0d/c4d993e14f6962b39ebed0471ac283d98e5e53": "6355b37763a2fb525a060b4b1eb8a88d",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/14/1948a3a579d95e1bf2ba98bd357589751cc069": "f70227d99b129071a2cecfaf228ebf1a",
".git/objects/18/736a7df21d3a5e51ab348550b321ecc7315754": "cac9170b0d4b6c655f5c37397e13ca17",
".git/objects/2a/2e4ccbc02073f545787ee296eabcd2627cc858": "928b4778a788524c832ad09ed17c54d7",
".git/objects/2a/e6a2143b44c1c1d60860c17710989edf8b290f": "6a02d7aa81f111a375128307aacba400",
".git/objects/2b/c376b9dd3c3ee64aa2166f7987d3a39d51b74a": "cdd835911fac4089fa869221e567a1ec",
".git/objects/2c/72f5c14191f24b5759be04cbe97422ebc02862": "e3815e71d87426695b673b6ea1e21250",
".git/objects/30/eab31566351d5cf5cd441b50a09b8aaeacd3f6": "6025152f52c47f4aec8274ccb05b14c7",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/9746a8d274647f29b4f7dbb9a5763d8a38c1e3": "6d926559a5b0b6667fb00b705e4b9215",
".git/objects/3c/0aaa26a6d2b7c511c6f5420096ac8cda72fca3": "9ef17682bacd8647946f2e35f8ae3636",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/eecad469cf17d6380759814fba94e9b2558eed": "385c824de595c7ec9ebe97031119572f",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/0893bc344d42c70b25f1f583c48e10396d149c": "ec2381df1b6adf86bb15c24acff40e6e",
".git/objects/56/0ce797c8005605f462b556c30bb33e50da5825": "d9bf9d6e0f65f525e62d8e4517d02356",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5c/734ba1207c223ccf34b25dd32475da225e93f9": "09da7b3a16c39e1c8c3062886e9631f5",
".git/objects/64/0bd113d5e87ed8bf3da54d18549abc87b0a636": "ac528e19561d11bbc13f1c316e4ca564",
".git/objects/65/34ac1efc48f6e2ef2b15bd7d1ac1f5ae9ebff6": "e3d95a077ae79fa4da1a57d4ebbe7dc3",
".git/objects/65/85141bacac8e0d8c622cc8bec15b34a90bd37d": "dc1657a7389a23fc4598b6f33cea9eaa",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6f/1bbb04d7af0560cc5a00f895191c8ddb0cbfa1": "a9bf2bcd0ab0471e4d269ae2768752ea",
".git/objects/6f/435f9151cefe2ef04d6dfdb166841823c77c45": "528b965605d93f1ce413ecc424052b27",
".git/objects/71/c0f995ee64396f29a3d9ef283b5050f45d6e0f": "aa69ae6032786d8c915bfc9bd1c64c28",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/c69743377b12192a46f67f75e02c4e6925336c": "40142afec9bdd76cfec6d4801020c02a",
".git/objects/76/7d0c11a16238b5e8a997320d2c36fcab467536": "b43fea2e4c71a00140b50e93a10315ce",
".git/objects/79/1e9abecf3a783caf9154b0d55b089356279afd": "5d472c2b8debe083243511b4535a1ebe",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/ce74e4477c34e1ca6e121b546bae7e7730253a": "4dc97d3e8d171c909a2d784262df6d06",
".git/objects/7d/38720b8a2e1744e342c007d6bfbb892f34161d": "0504671f94f58f6bdd6235e1fcc3a1df",
".git/objects/88/0b699b5bb98bd583cfab7ae9843b7a894ce304": "f2c665b5777b85ce9ef85e9bec5e6b15",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/3384635f10a96cbb55c9484578a763af6d547e": "91c319445346c234e2badcc92ddc6d0f",
".git/objects/89/513d94693ae8100315edbb982d7d243f5469f6": "1a977afa8c0dc3ca507a79160ba48a51",
".git/objects/89/6f8ef9ff21cb2b13f35c6e380638218225478a": "4e8bcdb76dfaf4239a62d76b218c136b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/bf853dd5d850d34e027056d675001c5a614888": "abedc22769b0a15910b56dceab3481d7",
".git/objects/95/5716e0e9a896adf2578ee26bbb8e029c6a768d": "b4db64e203a651f61dd34a7b2c4cb877",
".git/objects/98/c3df2fe9da03b4ec9576efe8a0600b0f2c33db": "f9775031c267e4bd7cfcabdbd66986ea",
".git/objects/99/27a8b169bbbfeaacb029067fae40c7fb8a710e": "5cb8dbc04e9f9884e0f81b284bc2544d",
".git/objects/9a/edccee4d2dd71b44472b419c62161e2b650faf": "f90e610d4d19e8ab27c27e09d007735a",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/8678459f56b2d0e8361c13db86223b78f3dea1": "eb7b949746692d9ff2deb1c2be88c1a5",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/5b1552fe506313fcd543f11df6f4166cbf67d1": "1731da1977f46358761dfc8f23845886",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/be/16055461f25efc6d72c30692ebbb5b821b0019": "92091f143937243446062ea072567be1",
".git/objects/bf/ffcfb55a8323c539850c65adf60c3aec2bdfda": "c1a578097176156cca84bd81194b9f02",
".git/objects/c1/5100c34fefe894daee0ca23d3836538460a224": "9e52cdbaeee02a8964a3189877a62c5d",
".git/objects/cc/09b8c97cf323715c3cc345809761ee7d43cce7": "d47e21466afb4f8d5b300fcb3d6266b3",
".git/objects/ce/346b59e9c3ecbd2d659a562fb8b1da96c17da2": "9a66d13141e0ea574ab64a599b3f9c39",
".git/objects/cf/211746a209225f70c12419bc6f0ffe0eaa3124": "50728f50cb11c3a3cfd9cb29f2aee534",
".git/objects/d2/453ff9ea13da84df4d9b24f47b92930e184359": "b5f368b92a00e1aed643f9d1df26b2a1",
".git/objects/d4/7565177a4072fca41df656599c8a0c59994e2b": "2547da927ecaf9d76a414a76902222c6",
".git/objects/d4/cd8ff09012901caabdb805309aaf3a6e3881db": "b88c0b7a3791a4a2677df51b637fcd27",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c68f5c072d2b0d292ad4b8794f747bb084015b": "43a064d234b2c18bbdf6e0317727b166",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e4/5c7ece7b8b5fbd9900d9f23af88ededf367baf": "ddc322b66641dc6fcadf09ef5b3e4150",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/6ec69a650f1323fe9af6dafc55628ca1afc7e1": "cdc851a64d802b21a07c9e1291833911",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/dc59f37cf1262de85efa2b71e5504b3c27db39": "c6ad44057273015351f8527fef2413fb",
".git/objects/f8/e234aa335c9f7523d2d64f0b5671abcf515d1d": "2ccb71a011e673c05b55b7e97096268c",
".git/objects/fc/07177f739b316c022535e5eccf225f4ef42cd2": "d8bea1ffec8df7f0e3200e913d97652a",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/a295632c0193a3961057767c301cc972cd1703": "1838fd206e4534483d05a6ac6990b2d2",
".git/ORIG_HEAD": "7965c569dec413de1ba69f208e328f75",
".git/refs/heads/main": "8d40f84794ee08fb1463a7afa615f596",
".git/refs/heads/master": "7965c569dec413de1ba69f208e328f75",
".git/refs/heads/updates": "7965c569dec413de1ba69f208e328f75",
".git/refs/remotes/origin/main": "8d40f84794ee08fb1463a7afa615f596",
".git/refs/remotes/origin/master": "d0f0d8b525e373587df34fc299887144",
".git/refs/remotes/origin/updates": "7965c569dec413de1ba69f208e328f75",
"assets/AssetManifest.json": "2a7eb1ad463e14beb3fde4be402e8a69",
"assets/FontManifest.json": "8b6cda71a8f7cbba024bb3c3d19131e6",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/lib/asset/fonts/Poppins-Black.ttf": "14d00dab1f6802e787183ecab5cce85e",
"assets/lib/asset/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/lib/asset/fonts/Poppins-ExtraLight.ttf": "6f8391bbdaeaa540388796c858dfd8ca",
"assets/lib/asset/fonts/Poppins-ExtraLightItalic.ttf": "a9bed017984a258097841902b696a7a6",
"assets/lib/asset/images/me.jpg": "9feaf5bf3e15503b386c512227883e06",
"assets/lib/asset/images/portfoliopic.jpg": "f3eaa9cce044d8575ce06efd9799ac9c",
"assets/lib/asset/images/whitegithub.png": "136ced5c7f2f5497fa43a78ad9a9402d",
"assets/lib/asset/images/whiteInstagram.png": "1344c9694e4ad81aca65a3c4d5d7ad87",
"assets/lib/asset/images/whitelinkedin.png": "2b3cc1ed2399868d1c549cf11bdd8eb2",
"assets/NOTICES": "5254664378ac35980faa0c02936cf1ac",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fa34a682c9f82af643c88fced26866f7",
"/": "fa34a682c9f82af643c88fced26866f7",
"main.dart.js": "6cbb885060e2b4f698a18c7ae9c7cd50",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"README.md": "577a05d894bb9de595a8836e0a4b033e",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79b4be46c85b55b75fe135c78df8d656",
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
".git/index": "d32b29373d381475fd9129bcb2626b31",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6fe23f8651b33d61def6d2041af150ed",
".git/logs/refs/heads/main": "9e2b84398bf9cbf724677a7b07169c7e",
".git/logs/refs/remotes/origin/main": "4328e65267fc02cf3ef60cfd6c441654",
".git/objects/03/40386a591f9c8d411bc4b40c26cb06e1b1ad28": "fd7ddff3e64bc72ece495b39d170d2cb",
".git/objects/06/348908a62762019aded96d7ab7ccbe834fdef6": "481c4add248da358dfe01cc64013ba03",
".git/objects/0d/58915d83b8086ab2d80f015c150296f4e171c2": "5ddbae8f390a55d987c767ef87773c3b",
".git/objects/0d/a433327cfeb0dce3c72055fcf64d79ab21beee": "1bd9c6a731e040cc9a5ccfb4c02e2554",
".git/objects/0e/1e755e9f09e686590c50822ce05601a7c5c756": "9567302c49e4f345c76fe3876f26e823",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/14/6228a363be2f66eb5cb783d937d8cabd3d3833": "266bc600fb24685f103ce2058a831674",
".git/objects/15/eef15bdc0e78dae73aeade07f9e13d9b33fe57": "792a135e6a0619387bc9b46352cfc671",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/19/63a9b9f51077926f412f32c5e1de989573518b": "3b1362e324f6acf46c4a28d79167279f",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/23/5b2b1f4e6bea21456ccf605dc22c85b5c08670": "9b5aac54fc5e129fa70a5713412f7c60",
".git/objects/23/a3c5d142223c70b26087a628019d07a23ef243": "4c18eb23cf790484ce0d0580c877b4ab",
".git/objects/2c/d210ae092a9122833cc1f14a8a9a5c6b27a0f6": "1d9cc5448c4b61feb60c1b13e0c46807",
".git/objects/30/7ef9fe63ff55dd876e8b8c679a7e91b6c53e3a": "38a2b54066ffac6815ea8ee0fbccd03d",
".git/objects/32/5a7671f6f7d3d986e2e1ce013da5c1438345b2": "ad2ca4c810394edc09ea3415f354a949",
".git/objects/37/2487f11176e0c16268927b8ba03efed1980aaa": "1af974ee93c1d79a3de533dfcbf5e6f4",
".git/objects/39/1c084db6d4aecd141533a3c3ad47f54aee02da": "dc2eb5b1613018bcbec0984f73420c09",
".git/objects/3a/40adbf6735197dc36e49390029963afa8ec8bb": "5c8a689b8b3930a65c84f9cb8c9b44a1",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/42/ee1169fa2cb1951d57b5d2751bf38a630b9744": "bcc8a72f75798c7489704822cdc93912",
".git/objects/47/ad7b5d8ac3a4f8b9119a3cb14708047aba55f8": "7bcbc31d9c08fb04ced8a26e932fa16e",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/4a/5237803b6e79cc287d34d4f7340c6990d58856": "d9911a1f2dec210a6708e4be763d2c8b",
".git/objects/4f/1eca1addac6cc9cb8b9b093a0d5f7cafacf172": "9694ced35b0676056ee8da1d2cf9c3c0",
".git/objects/4f/26bdbbb10ee4247dd40de009e4ca4d9de786d9": "a9a8dc92c54247af5b7a7945494cce2b",
".git/objects/55/8d052bd95b2758835fb15e58cd40693ed0be75": "7985426ab86bbd2377a0d56bd199f5ea",
".git/objects/56/3eda316620f0dde8485c2dab4bdeeb4e332c3a": "d51adcfe74f641200557ad23e151ffce",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/5a/847f71777c3856dc77ddf8c42ca41c6946a3e9": "06261b44872898c2c4561707d45dc494",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/66/2850419a6b6129049c5e2af8610221bd48aa00": "b8c6f89d686ab136b6657aeff4436c2e",
".git/objects/6a/f3e7e4daa06ac994a2e7673055a9e5a03f79f0": "d78ca66b1577c8663e27ae189f6a32d6",
".git/objects/6f/2206e8d8afc93bc6b429356a10bff4e9fc1bc8": "7af271331c28c6a8dfaa6ad7575b3da5",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/71/9bbd9de88b8e42d8776893dd6abc8c0fdb1971": "6504e746f203b4156edd01da9c9b7d3f",
".git/objects/72/4b254ff456eda2a2a01a69cc75b4595eed4a13": "7d1871ed24df3fe121ed5f6003bea2ab",
".git/objects/77/890237887eeb1ed5a512ec4cec96b184d02886": "fcaedf5f27052abbcddb4e203828f529",
".git/objects/7c/8290e606b9d8bff2c6b3a20b1c0f2b70469de2": "acd174e891c8addc54ae893acbbe8157",
".git/objects/83/55bf7f8c721229d6a54400d9ea5db88e6f1c12": "177331f3394caa5433b572e34e56a98c",
".git/objects/86/a5ecb7428d525ede291b93a80ef60acb298448": "d879fbb1669cf4cb640ec8e6a98eb373",
".git/objects/86/b40b67d3a7c495c6d9c4cf95d0c52b3312507f": "a8149afaf71de4582c2923fad323c4e3",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/0d437103c11d100b52b347b3645f872b7efcf9": "6bd23af0ca4c82a4fb752950bd6cba1e",
".git/objects/8a/740e0a0989e969b699995ecf92468221bc7c68": "fb62d2a2e83d6f07e17cb8305ba5721f",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/fd4db677d726d6d149473b682cce444a431206": "fa9f08beb1f9f28efaa325bc7cd2236f",
".git/objects/8f/ba4199acfc0da9aa05049c07825e0430a4b7e5": "128843b2fb29bcb5b718e4045005d160",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/98/ed1ee6196dd9df169bfaa6d06dc2bb391cc790": "6f3d67fcf15be7c9753254dff693137b",
".git/objects/99/4e3344e7da63205a2d87118454d1783c005409": "d1d8b8cd232a0c3e093e2b41db2aac8e",
".git/objects/9a/d63490e059394573bf0e24e5a5c05df24aade2": "ceb58f8eaeadd6b60f41d5587665b064",
".git/objects/9d/45bcfbe16be1c1e24a73dc2c4ae57e3ac0bc80": "7961aa15ee00c71821326dadcd5f8648",
".git/objects/9f/52ac8826ccb853045a9dd828eda9ef05513648": "c47e2f7ab9f7ad9f1a0183ccc06cf104",
".git/objects/a3/67fe69ed87fd803989835bd70181d8117fc41a": "5282f93ea85818cf7014a4f4be695520",
".git/objects/ac/25296d40bf52c299b7a40a2588ec3922fc596b": "ca5c22d517ed9a5ec65431bf309f4f03",
".git/objects/b1/a64081c6324c382be92cc46da40194ada429b3": "59495a6b595fa5088b0092d6ab63abe6",
".git/objects/b1/af817464918701d3d69bd1ecbe19eb1193edd8": "37236f09a0f2c255dc3197e73e1fd8b7",
".git/objects/b2/2966e012e475a0039681b47147f8cbd6ad8eb4": "4c824aaf775a0a13a4c5f80cf20cac25",
".git/objects/b3/8a0a948bc87be106f6286a2fbfa05c92e1f6fe": "abd8078963d5bddb333882e9edfedac0",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/b1dea1842448babc15d61be031fe5cda3b0455": "41926c8610ee09321b7d06de22228c5d",
".git/objects/b4/efe6ec41d8603a1e1c7875457f37dd8b375423": "76c65f8c6da612dad78152a2c27dd419",
".git/objects/b6/1969604b69b90fc578e8fe494c14be11389d8f": "04704c75a3b02ab8f9faf86b7e481e42",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8a2d8743ab5715d32bf52e6a0731a27ab7a245": "4e5a1172dba7e937e3c00093f996d2a7",
".git/objects/be/707d068277c23aa7eca52161e21ca1385e0f04": "d33e0451cb3dc40403605db1a6de2161",
".git/objects/c0/16a0c5e176b454d8c9dd3cc0bb51c8455c6840": "9a645ba76fe58514d15913f1c50cd798",
".git/objects/c0/445ded0db97c4dcf6125a993ecccab64b25959": "d4938ab0482eb0fa372d7fd931de68e7",
".git/objects/c3/1635b60b2869eaa473ad4e0ad9c0488e32b238": "b1134c9917892491d78c81410ee44528",
".git/objects/c4/fc5b04880e5b6e1496cf6ccaa1de50417e255c": "606fce0c4863a483532e9425e4eefce7",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/c9/dd8e6d672ffcd349436b56e94e4a9da7d40561": "60e486abcb722a0f7887bbe841e3b5ca",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d3/b9a1203c458eb673800a516ab7ff82cce10776": "c3e45410b0f8293d0c65f62491d54165",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e8/c8863968712f5767cc10b1e51a9f85d9158f7b": "645cec5e3d86e5d2acdb29581f44ea52",
".git/objects/ea/e72e5b13d7a8f1c528ef127e35e1dfd2bad537": "5b659f44854b42f8808ba81fabe82619",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/a19c3bfa54bbf2447721d0af9ebc00b9e611f1": "7c65b275b0b81076719394542b85e8dd",
".git/objects/f1/74163b362d8a0d9151ba9df701edb9934dba05": "4111a7d916befa8b5b976226ad94dbaa",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f8/cf0dfe82bc8f78e8b3fef2fef0afc444ac53ac": "2a2a384321b0dc75549c6ad151121e73",
".git/objects/fb/70d21ed0d2632de79d4338e4bdb681adb2a698": "6e92a21bc9be0f0d4ded4b4eb03ec664",
".git/objects/fe/b923193313be2c33af92df86fc627fc96aa89c": "48d3914d107178d5a36ac94eb3d8b760",
".git/objects/ff/6abb73e28f102c69885ed5d0e37e57007f0baf": "53f6c490a4874b20ae82a1a815d0c877",
".git/refs/heads/main": "eadde570a3bd646270aa723e6e00cc25",
".git/refs/remotes/origin/main": "eadde570a3bd646270aa723e6e00cc25",
"assets/asset/1poschodie_tma.png": "49e33dcc64a55f7088bee91e00c6df27",
"assets/asset/2poschodie_tma.png": "49e33dcc64a55f7088bee91e00c6df27",
"assets/asset/3poschodie_tma.png": "b1955404378c0738c44fd85fa8cb2037",
"assets/asset/edupage_logo.png": "72ff289df62c633b2e2c90777129a826",
"assets/asset/rozvrhy/1.A.png": "f5f3bda8580afdcb3fea44e88a935208",
"assets/asset/rozvrhy/1.B.png": "436ad82a2211457f605cffecce0f3ada",
"assets/asset/rozvrhy/1.C.png": "c848d9cc38b54331dacdc35e5844c49e",
"assets/asset/rozvrhy/1.D.png": "083bf5b7d8a658a8cca02f000fb208e2",
"assets/asset/rozvrhy/1.F.png": "dfabfc59091db49e5b4c3281161a9936",
"assets/asset/rozvrhy/1.L.png": "90938f819f6e21598bf584aacc376d57",
"assets/asset/rozvrhy/2.A.png": "e14b640d7c60ebfa68d6e7e1a576fb9a",
"assets/asset/rozvrhy/2.B.png": "625c8c09d7204f68a6165c6def2ac5bd",
"assets/asset/rozvrhy/2.C.png": "d0635f5fe936978aa20f471a8ed0d906",
"assets/asset/rozvrhy/2.D.png": "02da7035c022b26c4731ccd2aa4327d8",
"assets/asset/rozvrhy/2.F.png": "941c9acb2085ea6a95fbaffd7934b36a",
"assets/asset/rozvrhy/2.L.png": "404cbd0796fbd077c86a62a5d4d4b429",
"assets/asset/rozvrhy/3.A.png": "267c724f331c9f4e95f7a30e67fbf967",
"assets/asset/rozvrhy/3.B.png": "589cc9c4fe2d6f38e1e1af8843084cc7",
"assets/asset/rozvrhy/3.C.png": "bc9b41cad22d06b5fa57f9f7b9881f3b",
"assets/asset/rozvrhy/3.D.png": "36d3ccdff6573b15969e0069a9dcdac2",
"assets/asset/rozvrhy/3.F.png": "136c37ca620a76d6755d936d152534e3",
"assets/asset/rozvrhy/3.L.png": "f94fc565efe60e05a4d3f431d2cce7d1",
"assets/asset/rozvrhy/4.L.png": "62e336bf22a7b3e59370ff3776fe8e87",
"assets/asset/rozvrhy/5.L.png": "37e00a4e14139374b08582cd54421280",
"assets/asset/rozvrhy/Informatika%25202.png": "4f4e0c48e13b365b6efce52452ab11bd",
"assets/asset/rozvrhy/Informatika%25203.png": "c0f88e2192ac19baa0915bed1c3bd4e4",
"assets/asset/rozvrhy/Informatika%25204.png": "cf07f8d127f75a024559f55f48d7bc1f",
"assets/asset/rozvrhy/ITU.png": "20e6d2437a85222885fb5b6d14dae64d",
"assets/asset/rozvrhy/IV.F-D.png": "af263b3e699b5ccfea63a965c42f9b8e",
"assets/asset/rozvrhy/Laborat%25C3%25B3rium%2520Bi.png": "6b07d1f5f84fc742dc44af62715dd0dc",
"assets/asset/rozvrhy/Laborat%25C3%25B3rium%2520F%25201.png": "c61ceff714e91b3c5ad2edcf6dde5210",
"assets/asset/rozvrhy/Laborat%25C3%25B3rium%2520F%25202.png": "0bcfde0a5d22366b53e33f72cacd9415",
"assets/asset/rozvrhy/MMU2.png": "63062a62281440afa030e2149b5b40a6",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520AJ%25201.png": "2c53ffa180e97f2b069ec9daba9e1063",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520AJ%25202.png": "c2bce6345af129b5286e48de705ceae7",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520AJ%25203.png": "5db8e6907200a098222680427edfa58b",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520biol%25C3%25B3gie.png": "7f7d96c18c20400df57bf685ed758ed2",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520ch%25C3%25A9mie.png": "a3ecb5a0fea08795ac46c75c885e4a32",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520FJ%25201.png": "7d3e3773f71f19961f39d8714fb2f24d",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520FJ%25202.png": "c691065489b808169e65a32518bf34ff",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520FJ%25203.png": "a2fa1a04fb1882792034a81e60225679",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520fyziky.png": "beeee660bbd44cc64ab7058c7cf0ca60",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520geografie.png": "abb9ff6aca9b6590b585f342f9f160a5",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520NJ.png": "44f017776b51c9d3f8544ee3ac3eac68",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520SJ.png": "207d7690ab2a0db9dcf0e4b153fd43f3",
"assets/asset/rozvrhy/U%25C4%258Deb%25C5%2588a%2520v%25C3%25BDchovn%25C3%25BDch%2520predmetov.png": "a8eace15c0e91b4cbd8efd3aa3efe7f5",
"assets/asset/Satelite.png": "74fdb9de783949ec0530a1acd94d3f72",
"assets/asset/triedy.json": "dc518a7d10608400c8b38279ae18c8e8",
"assets/AssetManifest.bin": "980203e6510c955e1d583ef49cf3f580",
"assets/AssetManifest.bin.json": "91f7b227ecf863892556e0d08347b00c",
"assets/AssetManifest.json": "a674aa9d7cd56f3e6e8058606f643df6",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "347699924f3959e7e872086a1c82cb2e",
"assets/NOTICES": "902040e59926871f3cf08d762953cd74",
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
"flutter_bootstrap.js": "0c062c00af7e2b0bc8b42255e5a30afe",
"icons/android-chrome-192x192.png": "dcba6b8181e0e101a31b4e7e878b6823",
"icons/android-chrome-512x512.png": "69b4f40da5eabb347eeb07c9bf3cb4db",
"icons/apple-touch-icon.png": "f3a1320d10e0f0efb99c672a6d7c1443",
"index.html": "27f967f0206f666eab3bd9e415c3fe99",
"/": "27f967f0206f666eab3bd9e415c3fe99",
"logo.png": "dcba6b8181e0e101a31b4e7e878b6823",
"main.dart.js": "904c8849b91e43c66062ddcd06bfd135",
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

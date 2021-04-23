var capacitorPlugin = (function (exports, core, Radar$1) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var Radar__default = /*#__PURE__*/_interopDefaultLegacy(Radar$1);

    exports.RadarEventConfidence = void 0;
    (function (RadarEventConfidence) {
        RadarEventConfidence[RadarEventConfidence["none"] = 0] = "none";
        RadarEventConfidence[RadarEventConfidence["low"] = 1] = "low";
        RadarEventConfidence[RadarEventConfidence["medium"] = 2] = "medium";
        RadarEventConfidence[RadarEventConfidence["high"] = 3] = "high";
    })(exports.RadarEventConfidence || (exports.RadarEventConfidence = {}));
    exports.RadarEventVerification = void 0;
    (function (RadarEventVerification) {
        RadarEventVerification[RadarEventVerification["accept"] = 1] = "accept";
        RadarEventVerification[RadarEventVerification["unverify"] = 0] = "unverify";
        RadarEventVerification[RadarEventVerification["reject"] = -1] = "reject";
    })(exports.RadarEventVerification || (exports.RadarEventVerification = {}));
    exports.RadarInsightsConfidence = void 0;
    (function (RadarInsightsConfidence) {
        RadarInsightsConfidence[RadarInsightsConfidence["none"] = 0] = "none";
        RadarInsightsConfidence[RadarInsightsConfidence["low"] = 1] = "low";
        RadarInsightsConfidence[RadarInsightsConfidence["medium"] = 2] = "medium";
        RadarInsightsConfidence[RadarInsightsConfidence["high"] = 3] = "high";
    })(exports.RadarInsightsConfidence || (exports.RadarInsightsConfidence = {}));

    const Radar = core.registerPlugin('Radar', {
        web: () => Promise.resolve().then(function () { return web; }).then(m => new m.RadarPluginWeb()),
    });

    class RadarPluginWeb extends core.WebPlugin {
        constructor() {
            super({
                name: 'RadarPlugin',
                platforms: ['web']
            });
        }
        initialize(options) {
            Radar__default['default'].initialize(options.publishableKey);
        }
        setUserId(options) {
            Radar__default['default'].setUserId(options.userId);
        }
        setDescription(options) {
            Radar__default['default'].setDescription(options.description);
        }
        setMetadata(options) {
            Radar__default['default'].setMetadata(options.metadata);
        }
        getLocationPermissionsStatus() {
            return new Promise(resolve => {
                const navigator = window.navigator;
                if (!navigator.permissions) {
                    resolve({
                        status: 'UNKNOWN'
                    });
                }
                else {
                    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
                        resolve({
                            status: result.state === 'granted' ? 'GRANTED_FOREGROUND' : 'DENIED',
                        });
                    });
                }
            });
        }
        requestLocationPermissions() {
            // not implemented
        }
        async getLocation() {
            return new Promise((resolve, reject) => {
                Radar__default['default'].getLocation((err, { status, location, stopped }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            location,
                            stopped,
                        });
                    }
                });
            });
        }
        async trackOnce(options) {
            return new Promise((resolve, reject) => {
                const callback = (err, { status, location, user, events }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            location,
                            user,
                            events,
                        });
                    }
                };
                if (options) {
                    Radar__default['default'].trackOnce(options, callback);
                }
                else {
                    Radar__default['default'].trackOnce(callback);
                }
            });
        }
        startTrackingEfficient() {
            // not implemented
        }
        startTrackingResponsive() {
            // not implemented
        }
        startTrackingContinuous() {
            // not implemented
        }
        startTrackingCustom() {
            // not implemented
        }
        mockTracking() {
            // not implemented
        }
        stopTracking() {
            // not implemented
        }
        startTrip() {
            // not implemented
        }
        completeTrip() {
            // not implemented
        }
        cancelTrip() {
            // not implemented
        }
        acceptEvent() {
            // not implemented
        }
        rejectEvent() {
            // not implemented
        }
        async getContext(options) {
            return new Promise((resolve, reject) => {
                const callback = (err, { status, location, context }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            location,
                            context,
                        });
                    }
                };
                if (options) {
                    Radar__default['default'].getContext(options, callback);
                }
                else {
                    Radar__default['default'].getContext(callback);
                }
            });
        }
        async searchPlaces(options) {
            return new Promise((resolve, reject) => {
                Radar__default['default'].searchPlaces(options, (err, { status, location, places }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            location,
                            places,
                        });
                    }
                });
            });
        }
        async searchGeofences(options) {
            return new Promise((resolve, reject) => {
                Radar__default['default'].searchGeofences(options, (err, { status, location, geofences }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            location,
                            geofences,
                        });
                    }
                });
            });
        }
        async autocomplete(options) {
            return new Promise((resolve, reject) => {
                Radar__default['default'].autocomplete(options, (err, { status, addresses }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            addresses,
                        });
                    }
                });
            });
        }
        async geocode(options) {
            return new Promise((resolve, reject) => {
                Radar__default['default'].geocode(options, (err, { status, addresses }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            addresses,
                        });
                    }
                });
            });
        }
        async reverseGeocode(options) {
            return new Promise((resolve, reject) => {
                const callback = (err, { status, addresses }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            addresses,
                        });
                    }
                };
                if (options) {
                    Radar__default['default'].reverseGeocode(options, callback);
                }
                else {
                    Radar__default['default'].reverseGeocode(callback);
                }
            });
        }
        async ipGeocode() {
            return new Promise((resolve, reject) => {
                Radar__default['default'].ipGeocode((err, { status, address }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            address,
                        });
                    }
                });
            });
        }
        async getDistance(options) {
            return new Promise((resolve, reject) => {
                Radar__default['default'].getDistance(options, (err, { status, routes }) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve({
                            status,
                            routes,
                        });
                    }
                });
            });
        }
    }
    const radarPluginWeb = new RadarPluginWeb();

    var web = /*#__PURE__*/Object.freeze({
        __proto__: null,
        RadarPluginWeb: RadarPluginWeb,
        radarPluginWeb: radarPluginWeb
    });

    exports.Radar = Radar;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports, Radar$1));
//# sourceMappingURL=plugin.js.map

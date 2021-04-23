import { WebPlugin } from '@capacitor/core';
import Radar from 'radar-sdk-js';
export class RadarPluginWeb extends WebPlugin {
    constructor() {
        super({
            name: 'RadarPlugin',
            platforms: ['web']
        });
    }
    initialize(options) {
        Radar.initialize(options.publishableKey);
    }
    setUserId(options) {
        Radar.setUserId(options.userId);
    }
    setDescription(options) {
        Radar.setDescription(options.description);
    }
    setMetadata(options) {
        Radar.setMetadata(options.metadata);
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
            Radar.getLocation((err, { status, location, stopped }) => {
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
                Radar.trackOnce(options, callback);
            }
            else {
                Radar.trackOnce(callback);
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
                Radar.getContext(options, callback);
            }
            else {
                Radar.getContext(callback);
            }
        });
    }
    async searchPlaces(options) {
        return new Promise((resolve, reject) => {
            Radar.searchPlaces(options, (err, { status, location, places }) => {
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
            Radar.searchGeofences(options, (err, { status, location, geofences }) => {
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
            Radar.autocomplete(options, (err, { status, addresses }) => {
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
            Radar.geocode(options, (err, { status, addresses }) => {
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
                Radar.reverseGeocode(options, callback);
            }
            else {
                Radar.reverseGeocode(callback);
            }
        });
    }
    async ipGeocode() {
        return new Promise((resolve, reject) => {
            Radar.ipGeocode((err, { status, address }) => {
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
            Radar.getDistance(options, (err, { status, routes }) => {
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
export { radarPluginWeb };
//# sourceMappingURL=web.js.map
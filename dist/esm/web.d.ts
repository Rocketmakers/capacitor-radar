import { WebPlugin } from '@capacitor/core';
import { RadarLocationPermissionsCallback, RadarLocationCallback, RadarTrackCallback, RadarContextCallback, RadarSearchPlacesCallback, RadarSearchGeofencesCallback, RadarGeocodeCallback, RadarIPGeocodeCallback, RadarRouteCallback, RadarPlugin } from './definitions';
export declare class RadarPluginWeb extends WebPlugin implements RadarPlugin {
    constructor();
    initialize(options: {
        publishableKey: string;
    }): void;
    setUserId(options: {
        userId: string;
    }): void;
    setDescription(options: {
        description: string;
    }): void;
    setMetadata(options: {
        metadata: object;
    }): void;
    getLocationPermissionsStatus(): Promise<RadarLocationPermissionsCallback>;
    requestLocationPermissions(): void;
    getLocation(): Promise<RadarLocationCallback>;
    trackOnce(options?: {
        latitude?: number;
        longitude?: number;
        accuracy?: number;
    }): Promise<RadarTrackCallback>;
    startTrackingEfficient(): void;
    startTrackingResponsive(): void;
    startTrackingContinuous(): void;
    startTrackingCustom(): void;
    mockTracking(): void;
    stopTracking(): void;
    startTrip(): void;
    completeTrip(): void;
    cancelTrip(): void;
    acceptEvent(): void;
    rejectEvent(): void;
    getContext(options?: {
        latitude?: number;
        longitude?: number;
    }): Promise<RadarContextCallback>;
    searchPlaces(options: {
        near?: {
            latitude: number;
            longitude: number;
        };
        radius: number;
        chains?: string[];
        categories?: string[];
        groups?: string[];
        limit: number;
    }): Promise<RadarSearchPlacesCallback>;
    searchGeofences(options: {
        near?: {
            latitude: number;
            longitude: number;
        };
        radius: number;
        tags?: string[];
        limit: number;
    }): Promise<RadarSearchGeofencesCallback>;
    autocomplete(options: {
        query: string;
        near?: {
            latitude: number;
            longitude: number;
        };
        limit: number;
    }): Promise<RadarGeocodeCallback>;
    geocode(options: {
        query: string;
    }): Promise<RadarGeocodeCallback>;
    reverseGeocode(options?: {
        latitude?: number;
        longitude?: number;
    }): Promise<RadarGeocodeCallback>;
    ipGeocode(): Promise<RadarIPGeocodeCallback>;
    getDistance(options: {
        origin?: {
            latitude: number;
            longitude: number;
        };
        destination: {
            latitude: number;
            longitude: number;
        };
        modes: string[];
        units: string;
    }): Promise<RadarRouteCallback>;
}
declare const radarPluginWeb: RadarPluginWeb;
export { radarPluginWeb };

import { registerPlugin } from '@capacitor/core';
const Radar = registerPlugin('Network', {
    web: () => import('./web').then(m => new m.RadarPluginWeb()),
});
export * from './definitions';
export { Radar };
//# sourceMappingURL=index.js.map
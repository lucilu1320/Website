import { BusRoute, PickupPoint } from '../types/transport';
export declare const busRoutes: BusRoute[];
export declare const getPickupPoints: (busRouteId: string) => PickupPoint[];
export declare const getFare: (busRouteId: string, pickupPoint: string) => number;

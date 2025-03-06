export interface PickupPoint {
  value: string;
  label: string;
}

export interface Area {
  name: string;
  fare: number;
  pickupPoints: PickupPoint[];
}

export interface BusRoute {
  id: string;
  name: string;
  areas: Area[];
}

export interface TransportDetails {
  busRoute: string;
  pickupPoint: string;
  transportMonth: string;
}
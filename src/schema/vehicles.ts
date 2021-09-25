interface Vehicle {
    name?: string;
    model?: string;
}
export interface AllVehicleVariables {
    first?: number;
}

export interface AllVehicles {
    allVehicles: {
        vehicles: Vehicle[];
    }
}
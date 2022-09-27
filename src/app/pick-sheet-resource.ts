import { PickSheetDetailsRequest } from "./pick-sheet-details-request";

export class PickSheetResource {
    pickSheetID!: number;
    pickSheetNumber!: string;
    shipmentNumber!: string;
    pickSheetDate!: Date;
    deliveryDate!: Date;
    routeID!: string;
    bay!: number;
    bin!: number;
    quantity!: number;
    pickSheetDetailsRequest!: PickSheetDetailsRequest;
}

import { Time } from "@angular/common";
import { AlgoResultsRequest } from "./algo-results-request";
import { PickSheetDetailsRequest } from "./pick-sheet-details-request";
import { VideoResultsRequest } from "./video-results-request";

export class UploadResource {
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
    videoFile!: string;
    recordDate!: Date;
    startTime!: Time;
    endTime!: Time;
    videoResultsRequest!: VideoResultsRequest;
    algoResultsArray!: AlgoResultsRequest;
     
}

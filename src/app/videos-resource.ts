import { Time } from "@angular/common";
import { AlgoResultsRequest } from "./algo-results-request";
import { VideoResultsRequest } from "./video-results-request";

export class VideosResource {

    videoFile!: string;
    recordDate!: Date;
    startTime!: Time;
    endTime!: Time;
    videoResultsRequest!: VideoResultsRequest;
    algoResultsArray!: AlgoResultsRequest;
}

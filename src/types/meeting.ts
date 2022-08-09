interface meetingData {
    id:number
    userId:number
    title:string
    unit:string
    meetingTime:string
    place:string
    state:number
    files?:any
}

export class InitData{
    titleTxt:string = ""
    tabIndex:number =0
    meetingType:number=1
    meetingInfo:meetingData={
        id:1,
        userId:123,
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:0 
    }
    meetingList:meetingData[]=[
        {
            id:1,
            userId:123,
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:0 
        },
        {
            id:2,
            userId:123,
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:1 
        },
        {
            id:3,
            userId:123,
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:0 
        }
    ]
    
}
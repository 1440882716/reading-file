interface meetingData {
    title:string
    unit:string
    meetingTime:string
    place:string
    state:number
}
export class InitData{
    titleTxt:string = ""
    tabIndex:number =0
    meetingType:number=1
    meetingList:meetingData[]=[
        {
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:0 
        },
        {
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:1 
        },
        {
            title:"成都双流区第22届人大代表会议",
            unit:"成都市双流区双流政府人大",
            meetingTime:"2022-07-15  10:00 ~ 2022-07-15  17:00",
            place:"成都市双流区双流政府人大会议室",
            state:0 
        }
    ]
    
}
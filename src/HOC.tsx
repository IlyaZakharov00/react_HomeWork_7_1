import moment from "moment";
import { VideoList } from "./App"
import {TPropsVideoList } from "./App";

export function withChangeDate(Component:React.FC<TPropsVideoList>){

  return function (props:TPropsVideoList){
    const { list } = props;

    for(const video of list){
        let dataFromVideo = moment(video.date).format("YYYY, MM, DD HH:MM:SS");
        
        let diffMinutes = moment().diff(moment(dataFromVideo), 'minutes')
        let diffHours = moment().diff(moment(dataFromVideo), 'hours')
        let diffDays = moment().diff(moment(dataFromVideo), 'days')
        
        if(diffDays >= 1){
          let daysAgo;
          if(diffDays === 1) {
            daysAgo = "день"
          } else if(diffDays === (2 || 3 || 4)){
            daysAgo = "дня"
          } else daysAgo = 'дней'
          video.date = `${diffDays} ${daysAgo} назад`
          } else if(diffHours >= 1){
          video.date = '5 часов назад'
        } else if(diffMinutes < 60){
          video.date = '12 минут назад'
        }
    }
    return <Component {...props} /> 
  } 
} 

export const DateTimePretty = withChangeDate(VideoList)
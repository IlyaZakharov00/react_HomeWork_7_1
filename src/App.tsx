import {useState} from 'react';
import './App.css'
import { DateTimePretty } from './HOC';

type TPropsVideo = {
  url: string;
  date: string;
}

type TPropsDateTime = {
  date: string
}

type TPropsVideoList = {
  list: TPropsVideo[]
}

const createId = () => Math.random().toString(36).slice(2);


function DateTime(props:TPropsDateTime) {
    return (
        <p className="date">{props.date}</p>
    )
}

function Video(props: TPropsVideo) {
    return (
        <div className="video">
            <iframe src={props.url} frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
            <DateTime date={props.date} />
        </div>
    )
}

export function VideoList(props: TPropsVideoList) {
    return props.list.map(item => <Video url={item.url} date={item.date} key={createId()}/>);
}

export default function App() {
    const [list, _setList] = useState([
        {
            url: 'https://www.youtube.com/embed/rN6nlNC9WQA?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2017-07-31 13:24:00'
        },
        {
            url: 'https://www.youtube.com/embed/dVkK36KOcqs?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-03-03 12:10:00'
        },
        {
            url: 'https://www.youtube.com/embed/xGRjCa49C6U?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-02-03 23:16:00'
        },
        {
            url: 'https://www.youtube.com/embed/RK1K2bCg4J8?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-06-19 18:00:00'
        },
        {
            url: 'https://www.youtube.com/embed/TKmGU77INaM?rel=0&amp;controls=0&amp;showinfo=0',
            date: '1990-01-01 16:17:00'
        },
        {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-06-18 05:24:00'
        },
                {
            url: 'https://www.youtube.com/embed/TxbE79-1OSI?rel=0&amp;controls=0&amp;showinfo=0',
            date: '2024-06-19 19:00:00'
        },
    ]);

    return (
        // <VideoList list={list} />
        <DateTimePretty list={list}/>
    );
}

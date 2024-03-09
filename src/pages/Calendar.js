import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from "moment";

import Layout from '../components/Layout';
import Toparea from '../components/Toparea';

import '../assets/scss/main.scss'



const CheckCalendar = (props) => {
	const [value] = useState(new Date());

	// 출석 날짜 리스트
  const dayList = [
    '2024-03-10',
    '2024-03-21',
    '2024-04-02',
    '2024-04-14',
    '2024-04-27',
  ];

  // 각 날짜 타일에 컨텐츠 추가
  const addContent = ({ date }: value) => {
    // 해당 날짜(하루)에 추가할 컨텐츠의 배열
    const contents = [];

    // date(각 날짜)가  리스트의 날짜와 일치하면 해당 컨텐츠(이모티콘) 추가
    if (dayList.find((day) => day === moment(date).format('YYYY-MM-DD'))) {
      contents.push(
				<i className="icon-check" key={dayList}>
					<svg width="20" height="12" viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M1 6L5.5 10.5L19 1" stroke="white" strokeLinecap="round"/>
					</svg>
				</i>
      );
    }
    return <div>{contents}</div>; // 각 날짜마다 해당 요소가 들어감
  };


  return (
		<Layout containName='calendar'>
			<Toparea/>

			<div className="box-wrap">
				<div className="box-line">
					<div className="box calendar">
						<p>출석체크</p>
						<strong><span>1</span>일차</strong>
					</div>
				</div>
			</div>
			<Calendar
				calendarType="gregory" //일요일부터 시작
				value={value}
				disabled={true}
				formatMonthYear={(locale, date) => moment(date).format("YYYY. MM")} // 헤더 yyyy.mm
				formatDay={(locale, date) => moment(date).format("D")} //일 없애기
				tileContent={addContent} //날짜 칸에 보여지는 콘텐츠
				showNeighboringMonth={false} // 전달, 다음달 날짜 숨기기
				next2Label={null} // +1년 이동 버튼 숨기기
				prev2Label={null} // -1년 이동 버튼 숨기기
				minDetail="year" // 10년단위 년도 숨기기
			></Calendar>

		</Layout>
	);
};

export default CheckCalendar;
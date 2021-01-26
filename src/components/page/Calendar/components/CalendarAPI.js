import React from 'react';
import styled from 'styled-components';

import { ArrowIosBackOutline } from '@styled-icons/evaicons-outline/ArrowIosBackOutline';
import { ArrowIosForwardOutline } from '@styled-icons/evaicons-outline/ArrowIosForwardOutline';

const CalendarAPI = () => {
    const date = new Date();

    const viewYear = date.getFullYear();
    const viewMonth = date.getMonth();

    const prevLast = new Date(viewYear, viewMonth, 0);
    const thisLast = new Date(viewYear, viewMonth + 1, 0);

    const PLDate = prevLast.getDate();
    const PLDay = prevLast.getDay();

    const TLDate = thisLast.getDate();
    const TLDay = thisLast.getDay();

    const prevDates = [];
    const thisDates = [...Array(TLDate + 1).keys()].slice(1);
    const nextDates = [];

    if (PLDay !== 6) {
        for (let i = 0; i < PLDay + 1; i++) {
            prevDates.unshift(PLDate - i);
        }
    }

    for (let i = 1; i < 7 - TLDay; i++) {
        nextDates.push(i);
    }

    const dates = prevDates.concat(thisDates, nextDates);

    dates.forEach((date, i) => {
        dates[i] = <Calendar_Day_Text>{date}</Calendar_Day_Text>;
    })

    return (
        <Calendar_Containers>
            <Calendar_Year_Month_Containers>
                <Calendar_Year_Containers>
                    <Calendar_Year_Prev_btn></Calendar_Year_Prev_btn>
                    <Calendar_Year_Text>{viewYear}</Calendar_Year_Text>
                    <Calendar_Year_Next_btn></Calendar_Year_Next_btn>
                </Calendar_Year_Containers>
                <Calendar_Month_Containers>
                    <Calendar_Month_Text>1 월</Calendar_Month_Text>
                    <Calendar_Month_Text>2 월</Calendar_Month_Text>
                    <Calendar_Month_Text>3 월</Calendar_Month_Text>
                    <Calendar_Month_Text>4 월</Calendar_Month_Text>
                    <Calendar_Month_Text>5 월</Calendar_Month_Text>
                    <Calendar_Month_Text>6 월</Calendar_Month_Text>
                    <Calendar_Month_Text>7 월</Calendar_Month_Text>
                    <Calendar_Month_Text>8 월</Calendar_Month_Text>
                    <Calendar_Month_Text>9 월</Calendar_Month_Text>
                    <Calendar_Month_Text>10 월</Calendar_Month_Text>
                    <Calendar_Month_Text>11 월</Calendar_Month_Text>
                    <Calendar_Month_Text>12 월</Calendar_Month_Text>
                    <Calendar_Month_Footer></Calendar_Month_Footer>
                </Calendar_Month_Containers>
            </Calendar_Year_Month_Containers>
            <Calendar_Day_Containers>
                <Calendar_Day_Inside_Containers>
                    <Calendar_Days_Title_Containers>
                        <Calendar_Days_Title>{viewMonth + 1}월</Calendar_Days_Title>
                    </Calendar_Days_Title_Containers>
                        <Calendar_Days_Text_Containers>
                            <Calendar_Days_Text>일</Calendar_Days_Text>
                            <Calendar_Days_Text>월</Calendar_Days_Text>
                            <Calendar_Days_Text>화</Calendar_Days_Text>
                            <Calendar_Days_Text>수</Calendar_Days_Text>
                            <Calendar_Days_Text>목</Calendar_Days_Text>
                            <Calendar_Days_Text>금</Calendar_Days_Text>
                            <Calendar_Days_Text>토</Calendar_Days_Text>
                        </Calendar_Days_Text_Containers>
                    <Calendar_Day_Text_Containers>
                        {dates}
                    </Calendar_Day_Text_Containers>
                </Calendar_Day_Inside_Containers>
            </Calendar_Day_Containers>
            <Calendar_Text_Containers></Calendar_Text_Containers>
        </Calendar_Containers>
    )
}

export default CalendarAPI;

// <------------ css ------------> //

const Calendar_Containers = styled.div`
    width: calc(100vw - 500px);
    height: 100%;
    display:flex;
`

const Calendar_Year_Month_Containers = styled.div`
    height: 100%;
    width: 15%;
    background-color: #FA991D;
`

const Calendar_Year_Containers = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
`

const Calendar_Year_Prev_btn = styled(ArrowIosBackOutline)`
    width:32px;
    height:32px;
    color:white
`

const Calendar_Year_Next_btn = styled(ArrowIosForwardOutline)`
    width:32px;
    height:32px;
    color:white
`

const Calendar_Year_Text = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color: white;
    font-size: 2em;
    margin-left: 20px;
    margin-right: 20px;
`

const Calendar_Month_Containers = styled.div`
    width: 100%;
    height: calc(100vh - 380px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`

const Calendar_Month_Text = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    color: white;
`

const Calendar_Month_Footer = styled.div`
    width:100%;
    height:30px;
`

const Calendar_Day_Containers = styled.div`
    width: 60%;
    height: 100%;
    display:flex;
    align-items: center;
    background-color: #052439;
`

const Calendar_Day_Inside_Containers = styled.div`
    width: 100%;
    height: 90%;
`

const Calendar_Days_Title_Containers = styled.div`
    width: 100%;
    height: 100px;
    display:flex;
    justify-content: center;
    align-items: center;
`
const Calendar_Days_Title = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 4em;
    color: white;
`

const Calendar_Days_Text_Containers = styled.div`
    width:100%;
    height:80px;
    display:flex;
    justify-content: center;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 40px;
`
const Calendar_Days_Text = styled.span`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    color: white;
`

const Calendar_Day_Text_Containers = styled.div`
    width:100%;
    height:650px;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
`

const Calendar_Day_Text = styled.span`
    color: white;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 1em;
    width: calc(100%/7);
    height: 120px;
    text-align: center;
`

const Calendar_Text_Containers = styled.div`
    background-color:green;
    width: 30%;
    height: 100%;

`
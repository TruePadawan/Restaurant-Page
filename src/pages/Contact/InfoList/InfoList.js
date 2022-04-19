import { appendChildren, addClassToNodes } from "../../../helpers/helpers";
import "./InfoList.css";

import Calendar from "../../../resources/images/calendar.png";
import Phone from "../../../resources/images/call.png";
import Clock from "../../../resources/images/clock.png";
import Location from "../../../resources/images/location.png";

export default function getInfoList()
{
    const infoList = document.createElement('ul');
    infoList.classList.add('infolist');

    const date = document.createElement('li');

    const CalendarIcon = new Image();
    CalendarIcon.src = Calendar;

    const dateText = document.createElement('span');
    dateText.textContent = "Monday - Friday";


    const time = document.createElement('li');

    const ClockIcon = new Image();
    ClockIcon.src = Clock;

    const timeText = document.createElement('span');
    timeText.textContent = "8am - 7:30pm";


    const phoneNumber = document.createElement('li');

    const PhoneIcon = new Image();
    PhoneIcon.src = Phone;

    const phoneNumberText = document.createElement('span');
    phoneNumberText.textContent = "123-444-5556";


    const location = document.createElement('li');

    const LocationIcon = new Image();
    LocationIcon.src = Location;

    const locationText = document.createElement('span');
    locationText.classList.add('location');

    const location_1 = document.createElement('p');
    const location_2 = document.createElement('p');
    const location_3 = document.createElement('p');

    location_1.textContent = "118 Boulevard Saint-Germain";
    location_2.textContent = "75506 Paris";
    location_3.textContent = "France";

    addClassToNodes([date,time,phoneNumber,location], "infoListItem");

    // APPEND ELEMENTS
    appendChildren(infoList,[date,time,phoneNumber,location]);

    appendChildren(date,[CalendarIcon,dateText]);
    appendChildren(time,[ClockIcon,timeText]);
    appendChildren(phoneNumber,[PhoneIcon,phoneNumberText]);
    appendChildren(location,[LocationIcon,locationText]);
    appendChildren(locationText,[location_1,location_2,location_3]);

    return infoList;
}
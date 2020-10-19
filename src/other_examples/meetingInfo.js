'use strict';

const dayStart = "07:30";
const dayEnd = "17:45";

const dayStartMinutes = convertHHMMtoMinutes(dayStart)
const dayEndMinutes = convertHHMMtoMinutes(dayEnd);

function scheduleMeeting(startTime, durationMinutes) {
  const meetingCanBeScheduled = isValidMeeting(startTime, durationMinutes);

  document.getElementById('meetingInfo').innerHTML = 
        `
        <p>
          Day starts at: ${dayStart}
          <br>
          Day ends at: ${dayEnd}
        </p>
        <p>
          For start time ${startTime} 
          and duration ${durationMinutes}
          meeting can be scheduled: ${meetingCanBeScheduled ? 'yes' : 'no'}
        </p>
        `;
}

function isValidMeeting(startTime, durationMinutes) {
  const startTimeMinutes = convertHHMMtoMinutes(startTime)
  
  if (startTimeMinutes >= dayStartMinutes
        && (startTimeMinutes + durationMinutes) <= dayEndMinutes) {
    return true;
  }

  return false;
}

function convertHHMMtoMinutes(dateTimeStr) {
  const dateTimeValues = dateTimeStr.split(":");

  return parseInt(dateTimeValues[0]) * 60 + parseInt(dateTimeValues[1]);
}

scheduleMeeting("18:00", 15);

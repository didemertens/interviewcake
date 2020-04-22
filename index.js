// Write a function mergeRanges() that takes an array of multiple meeting time ranges and returns an array of condensed ranges.

function mergeRanges(meetings) {
  const sortedMeetings = meetings.sort((a, b) => a.startTime - b.startTime)
  const mergedMeetings = []

  if (mergedMeetings.length === 0) mergedMeetings.push(sortedMeetings[0])

  sortedMeetings.forEach(meeting => {
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]
    if (meeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(meeting.endTime, lastMergedMeeting.endTime)
    } else {
      mergedMeetings.push(meeting)
    }
  })

  return mergedMeetings
}

console.log(mergeRanges([{ startTime: 1, endTime: 5 }, { startTime: 2, endTime: 3 }]))
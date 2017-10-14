//Turns the initial JSON into a better json

function mutate (jsonObj) {
  var total = [];
  for (var clResult of jsonObj.searchResults) {
    var fullCourse = {
      courseTitle: clResult.course_title,
      courseNum:   clResult.course_num,
      section:     []   };
    for (var clSection of clResult.sections) {
      for (var clComponent of clSection.components) {
        for (var clLocation of clComponent.locations) {
          var course = {
            instructor: clLocation.instructor,
            schedules:  []   };
          //Add the schedules to the course
          for (var clMeetings of clLocation.meetings) {
            var clStart = clMeetings.meet_start_min;
            var clEnd   = clMeetings.meet_end_min;
            for (var clDay of clMeetings.days) {
              var sched = {
                day:   clDay,
                start: clStart,
                end:   clEnd   };
              //Push the schedule
              course.schedules.push(sched);
            }
          }
          //Push the course to the sections
          fullCourse.sections.push(course);
        }
      }
    }
    //Push it
    total.push(fullCourse);
  }
  return total;
}

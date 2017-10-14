# polyhack17
Create a program where input is classes desired and output is all the possible schedules that can be created from those classes, taking from .json file of all classes in SIS for Fall 2017
https://siscs.uit.tufts.edu/psc/csprod/EMPLOYEE/HRMS/s/WEBLIB_CLS_SRCH.ISCRIPT1.FieldFormula.IScript_getSearchresultsAll3?callback=jQuery1820023711885044951586_1507091761814&term=2178&career=ASE&subject=&crs_number=&attribute=&keyword=&instructor=&searchby=crs_number&_=1507091762799

everything:
[
  fullCourse:
  {
    courseNum:   String,
    courseTitle: String,

    sections:
    [
      {
        course:     fullCourse,
        instructor: String,
        type:       String,
        schedules:
        {
          day1: {
            start:    Int,
            end:      Int
          }
          day2: {
            start:    Int,
            end:      Int
          } ...
        }  
      }
    ]
  }
]

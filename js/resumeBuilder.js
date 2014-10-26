
var bio = {
    'name'       : 'Nadi Dikun',
    'role'       : 'Front-End Developer',
    'contacts'   : {
      'email'        : 'abc@nadikun.com',
      'twitter'      : 'didelico'
    },
    'welcomeMsg' : 'I design in code',
    'skills'     : [ 'Javascript', 'HTML', 'CSS', 'jQuery', 'LESS' ]
  };

var education = {
  'schools' : [
    {
      'name'    : 'Moscow Institure of Architecture',
      'city'    : 'Moscow, RU',
      'degree'  : 'Masters',
      'majors'  : ['Architecture'],
      'dates'   : 2006,
      'url'     : 'http://marhi.ru'
    },
    {
      'name'    : 'Moscow Institure of Architecture',
      'city'    : 'Moscow, RU',
      'degree'  : 'BA',
      'majors'  : ['Architecture'],
      'dates'   : 2004,
      'url'     : 'http://marhi.ru'
    }
  ],
  'onlineCourses' : [
    {
      'title'    : 'Front-End Web Developer Nanodegree',
      'school'   : 'Udacity',
      'dates'    : 2014,
      'url'      : 'http://...',
      'badgeUrl' : '..'
    },
    {
      'title'    : 'Front-End Web Developer Nanodegree',
      'school'   : 'Udacity',
      'dates'    : 2014,
      'url'      : 'http://...',
      'badgeUrl' : '..'
    },
    {
      'title'    : 'Javascript Roudtrip',
      'school'   : 'Code School',
      'dates'    : 2014,
      'url'      : 'http://...',
      'badgeUrl' : '..'
    }
  ]
};

var work = {
  'job'  : [
    {
      'title'       : 'Front-End Developer',
      'employer'    : 'Self-Employed',
      'location'    : 'Vancouver, BC, Canada',
      'dates'       : 2013,
      'description' : '.......'
    },
    {
      'title'       : 'Sowtware Product Manager',
      'employer'    : 'EspressoWork',
      'location'    : 'El Medano, Spain',
      'dates'       : 2011,
      'description' : '.......'
    }
  ]
};

var projects = {
  'project'  : [
    {
      'title'       : 'Dribbble Genealogy',
      'dates'       : 2014,
      'description' : '.......',
      'images'      : ['url', 'url']
    },
    {
      'title'       : 'Dribbble Profile',
      'dates'       : 2011,
      'description' : '.......',
      'images'      : ['url', 'url']
    }
  ]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedEmail = HTMLemail.replace('%data%', bio.email);
var formattedSkills = HTMLskills.replace('%data%', bio.skills);

$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);

$('#topContacts').append(formattedEmail);

$('#skillsChart').append(HTMLskillsStart);
$('#skillsChart').append(formattedSkills);


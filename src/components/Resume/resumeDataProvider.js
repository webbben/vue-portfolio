const education = [
    { 
        university: "Indiana University",
        degrees: ["BS in Computer Science", "BA in Japanese"],
        dates: { start: "2015", end: "2020" },
        location: "Bloomington, IN"
    },
    {
        university: "Nanzan University",
        degrees: ["Overseas program in intensive Japanese language study"],
        dates: { start: "September 2018", end: "May 2019"},
        location: "Nagoya, Japan"
    }
];

// TODO: add actual details
const work = [
    {
        company: "Epic Systems",
        jobTitle: "Software Engineer",
        dates: { start: "August 2020", end: "Present"},
        location: "Madison, WI",
        details: [
            "did computer stuff!",
            "debugged a lot of code, which was fun.",
            "also did some mentoring, sometime, when I remembered to do it.",
            "did I mention I did a bunch of programming? hell yeah dude!"
        ]
    },
    {
        company: "Indiana University",
        jobTitle: "Study-Abroad Counselor",
        dates: { start: "August 2019", end: "May 2020"},
        location: "Bloomington, IN",
        details: [
            "Assist prospective students in their application process and requirements for going abroad.",
            "Provide counsel and information to help guide interested students toward a good program."
        ]
    }
];

// Todo: add experience? more skills?
const technicalSkills = [
    { lang: "C#" },
    { lang: "Typescript" },
    { lang: "Javascript" },
    { lang: "Java" },
    { lang: "Python" },
    { lang: "MySQL" },
    { lang: "R" },
    { lang: "React" },
    { lang: "JSX" },
    { lang: "Git" },
];

// data object for Resume to import
const resumeData = {
    education: education,
    work: work,
    technicalSkills: technicalSkills
}

export default resumeData;
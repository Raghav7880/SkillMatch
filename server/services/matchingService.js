const calculateMatchScore = (
    studentSkills,
    jobSkills
) => {

    if (
        !studentSkills ||
        !jobSkills ||
        jobSkills.length === 0
    ) {
        return 0;
    }

    const student = studentSkills.map(skill =>
        skill.toLowerCase().trim()
    );

    const job = jobSkills.map(skill =>
        skill.toLowerCase().trim()
    );

    const matchedSkills = job.filter(skill =>
        student.includes(skill)
    );

    const score =
        (matchedSkills.length / job.length) * 100;

    return Math.round(score);
};


const getMatchedSkills = (
    studentSkills,
    jobSkills
) => {

    const student = studentSkills.map(skill =>
        skill.toLowerCase().trim()
    );

    return jobSkills.filter(skill =>
        student.includes(
            skill.toLowerCase().trim()
        )
    );
};


module.exports = {
    calculateMatchScore,
    getMatchedSkills
};
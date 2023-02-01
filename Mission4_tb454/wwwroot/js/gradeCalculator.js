$("#calculateBtn").click(function () {
    assignmentScore = $("#assignmentScore").val();
    groupProjScore = $("#groupProjScore").val();
    quizScore = $("#quizScore").val();
    midtermScore = $("#midtermScore").val();
    finalExamScore = $("#finalExamScore").val();
    intexScore = $("#intexScore").val();

    finalScore = (assignmentScore * .5) + (groupProjScore * .1) + (quizScore * .1) +
        (midtermScore * .1) + (finalExamScore * .1) + (intexScore * .1);

    if (finalScore >= 94.00) {
        finalLetterGrade = "A";
    }
    else if (finalScore >= 90.00) {
        finalLetterGrade = "A-";
    }
    else if (finalScore >= 87) {
        finalLetterGrade = "B+";
    }
    else if (finalScore >= 84) {
        finalLetterGrade = "B";
    }
    else if (finalScore >= 80) {
        finalLetterGrade = "B-";
    }
    else if (finalScore >= 77) {
        finalLetterGrade = "C+";
    }
    else if (finalScore >= 74) {
        finalLetterGrade = "C";
    }
    else if (finalScore >= 70) {
        finalLetterGrade = "C-";
    }
    else if (finalScore >= 67) {
        finalLetterGrade = "D+";
    }
    else if (finalScore >= 64) {
        finalLetterGrade = "D";
    }
    else if (finalScore >= 60) {
        finalLetterGrade = "D-";
    }
    else if (finalScore < 60) {
        finalLetterGrade = "E";
    }

    alert(Math.round(finalScore * 100) / 100) + "% / " + finalLetterGrade);

    //$(".finalGradeP .finalGradeSpan").html((
    //    Math.round(finalScore * 100) / 100) + "% / " + finalLetterGrade
    //);
})
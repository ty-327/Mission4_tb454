$("#calculateBtn").click(function () {
    assignmentScore = $("#assignmentScore").val();
    groupProjScore = $("#groupProjScore").val();
    quizScore = $("#quizScore").val();
    midtermScore = $("#midtermScore").val();
    finalExamScore = $("#finalExamScore").val();
    intexScore = $("#intexScore").val();

    finalScore = (assignmentScore * .5) + (groupProjScore * .1) + (quizScore * .1) +
        (midtermScore * .1) + (finalExamScore * .1) + (intexScore * .1)

    alert("Final Grade: " + (Math.round(finalScore * 100) / 100) + "%");
})
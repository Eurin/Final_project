$(document).ready(function(){
    var currentQuiz = null;
    $("#startButton").click(function(){
        if (currentQuiz == null)
        {
            currentQuiz = 0;
            $("#question").text(questions[currentQuiz].question);
            
            $("#options").empty();
            
            for (var i = 0; i < questions[currentQuiz].answers.length; i++)
            {
                $("#options").append("<input name='options' type='radio' value="+i+">" + "<lable>"+questions[currentQuiz].answers[i][0]+"</label><br><br>");
            }
            $("#startButton").attr("value", "Next")
        }
        else
        {
            $.each($(":radio"), function(j, val){
                if (val.checked)
                {
                    if(isNaN(questions[currentQuiz].answers[j][1]))
                    {
                        var final = questions[currentQuiz].answers[j][1];
                        
                         $("#question").text(finalAnswers[final][0]);

                        $("#options").empty();
                        
                        $("#options").append(finalAnswers[final][1] + "<br><br>");
                        
                        currentQuiz=null;
                        
                        $("#startButton").attr("value", "restart");
                    }
                    else
                    {
                        currentQuiz = questions[currentQuiz].answers[j][1] - 1;
                        
                        $("#question").text(questions[currentQuiz].question);

                        $("#options").empty();

                        for (var i = 0; i < questions[currentQuiz].answers.length; i++)
                        {
                            $("#options").append("<input name='options' type='radio' value="+i+">" + "<lable>"+questions[currentQuiz].answers[i][0]+"</label><br><br>");
                        }
                    }
                    return false;
                }
            });
        }
        
    });
});
question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
row =question_number + input_box + check_button;

question_turn = "player1";
answer_turn = "player2";

function addUser()
{
    Player1_Name = document.getElementById("Player1_Name").Value;
    Player2_Name = document.getElementById("Player2_Name").Value;
    localStorage.setItem("Player1_Name", Player1_Name);
    localStorage.setItem("Player2_Name", Player2_Name);
    window.location="index2.html";
}
function send()
{
    number1 = documen.getElementById("number1").value = "";
    number2 = documen.getElementById("number2").value = "";
    actual_answer = parseInt(number1) * parseInt(number2);
    document.getElementById("output").innerHTML = row


}

function check()
{
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = update_player1_score;
        }
        else
        {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerHTML = update_player2_score;
        }
    }

    if(question_turn == "player1")
    {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Question Turn - " + Player2_Name;
    }
    else
    {
        question_turn = "player1"
        document.getElementById("player_question").innerHTML = "Question Turn - " + Player1_Name;
    }
}

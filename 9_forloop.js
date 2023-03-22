var i;
for (i = 1; i <= 12; i++) {
    if (i == 5 || i == 8) // button 5 skiped
    {
        continue;
    }

    if (i == 10) { // button 10 stopped
        break;
    }
    console.log(i + "  " + "<button>Bangladesh</button><br></br>")
}
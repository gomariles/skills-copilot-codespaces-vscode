function skillsMember() {
    var skills = ["HTML", "CSS", "JS", "PHP"];
    var member = {
        name: "Nguyen Van A",
        age: 20,
        skills: skills,
        showSkills: function() {
            var html = "";
            for (var i = 0; i < this.skills.length; i++) {
                html += "<li>" + this.skills[i] + "</li>";
            }
            document.getElementById("skills").innerHTML = html;
        }
    };
    member.showSkills();
}
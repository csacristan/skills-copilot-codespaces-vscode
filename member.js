function skillsMember() {
  const skills = document.querySelectorAll('.skill');
  const skillsArray = Array.from(skills);
  const skillsLength = skillsArray.length;
  const skillsWidth = 100 / skillsLength;
  const skillsWidthString = `${skillsWidth}%`;

  skillsArray.forEach((skill) => {
    skill.style.width = skillsWidthString;
  });
}

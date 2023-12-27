function introduction(name) {
  return `Hi, my name is ${name}.`;
}
console.log(introduction("Desiah"));
function introductionWithLanguage(name, language) {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguage("Desiah", "Javascript"));
function introductionWithLanguageOptional(name, language = "JavaScript") {
  return `Hi, my name is ${name} and I am learning to program in ${language}.`;
}
console.log(introductionWithLanguageOptional("Desiah", "JavaScript"));
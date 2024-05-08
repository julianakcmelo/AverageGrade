let Students = [
  {
    name: "Ester",
    testOne: 7,
    testTwo: 5
  },
  {
    name: "Samuel",
    testOne: 8,
    testTwo: 8
  },
  {
    name: "Eirene",
    testOne: 9,
    testTwo: 8.5
  },
  {
    name: "Bruna",
    testOne: 9,
    testTwo: 2
  }
]

function calcAverage(testOne, testTwo) {
  return (testOne + testTwo) / 2;
}

for(let student of Students) {
  let average = calcAverage(student.testOne, student.testTwo)
  if(average >= 7) {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}.\nParabéns, ${student.name}! Você foi aprovado(a) no concurso!`)
  } else {
    alert(`A média do(a) aluno(a) ${student.name} é: ${average}.\nNão foi dessa vez, ${student.name}! Tente novamente!`)
  }
}
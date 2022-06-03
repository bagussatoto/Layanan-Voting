let numVsVotes = 0
let numSVotes  = 0
let numNsVotes = 0
let numVsVotes_1 = 0
let numSVotes_1  = 0
let numNsVotes_1 = 0

let vsVotes          = document.getElementById('vsVotes')
let sVotes           = document.getElementById('sVotes')
let nsVotes          = document.getElementById('nsVotes')
let vsVotes_1          = document.getElementById('vsVotes_1')
let sVotes_1           = document.getElementById('sVotes_1')
let nsVotes_1          = document.getElementById('nsVotes_1')

let verySatisfied    = document.getElementById('verySatisfied')
let satisfied        = document.getElementById('satisfied')
let notSatisfied     = document.getElementById('notSatisfied')
let verySatisfied_1    = document.getElementById('verySatisfied_1')
let satisfied_1        = document.getElementById('satisfied_1')
let notSatisfied_1     = document.getElementById('notSatisfied_1')

let feedback = ''

if (localStorage.getItem("numVsVotes")) {
  numVsVotes = localStorage.getItem("numVsVotes")
  vsVotes.innerHTML = `${numVsVotes}`
}

if (localStorage.getItem("numSVotes")) {
  numSVotes = localStorage.getItem("numSVotes")
  sVotes.innerHTML = `${numSVotes}`
}

if (localStorage.getItem("numNsVotes")) {
  numNsVotes = localStorage.getItem("numNsVotes")
  nsVotes.innerHTML = `${numNsVotes}`
}

if (localStorage.getItem("numVsVotes_1")) {
  numVsVotes_1 = localStorage.getItem("numVsVotes_1")
  vsVotes_1.innerHTML = `${numVsVotes_1}`
}

if (localStorage.getItem("numSVotes_1")) {
  numSVotes_1 = localStorage.getItem("numSVotes_1")
  sVotes_1.innerHTML = `${numSVotes_1}`
}

if (localStorage.getItem("numNsVotes_1")) {
  numNsVotes_1 = localStorage.getItem("numNsVotes_1")
  nsVotes_1.innerHTML = `${numNsVotes_1}`
}

verySatisfied.addEventListener('click', () => votes(1))
satisfied.addEventListener('click', () => votes(2))
notSatisfied.addEventListener('click', () => votes(3))
verySatisfied_1.addEventListener('click', () => votes_1(1))
satisfied_1.addEventListener('click', () => votes_1(2))
notSatisfied_1.addEventListener('click', () => votes_1(3))

function votes(reaction) {
  switch(reaction) {
    case 1:
    numVsVotes++;
    feedback = 'Sangat Puas';
    localStorage.setItem("numVsVotes", numVsVotes);
    vsVotes.innerHTML= `${numVsVotes}`;
    break;
    case 2:
    numSVotes++;
    feedback = 'Puas';
    localStorage.setItem("numSVotes", numSVotes);
    sVotes.innerHTML= `${numSVotes}`;
    break;
    case 3:
    numNsVotes++;
    feedback = 'Tidak Puas';
    localStorage.setItem("numNsVotes", numNsVotes);
    nsVotes.innerHTML= `${numNsVotes}`;
    break;
  }

  if (feedback) {
    Swal.fire({
      icon: 'success',
      title: `Terimakasih!<br /> Anda Memberikan Feedback <br /><strong>${feedback.toUpperCase()}</strong>`,
      showConfirmButton: false,
      // showClass: {
      //   popup: 'animate__animated animate__zoomInDown'
      // },
      // hideClass: {
      //   popup: 'animate__animated animate__backOutDown'
      // },
      timer: 2500
    })
  }
}

function votes_1(reaction) {
  switch(reaction) {
    case 1:
    numVsVotes_1++;
    feedback = 'Sangat Puas';
    localStorage.setItem("numVsVotes_1", numVsVotes_1);
    vsVotes_1.innerHTML= `${numVsVotes_1}`;
    break;
    case 2:
    numSVotes_1++;
    feedback = 'Puas';
    localStorage.setItem("numSVotes_1", numSVotes_1);
    sVotes_1.innerHTML= `${numSVotes_1}`;
    break;
    case 3:
    numNsVotes_1++;
    feedback = 'Tidak Puas';
    localStorage.setItem("numNsVotes_1", numNsVotes_1);
    nsVotes_1.innerHTML= `${numNsVotes_1}`;
    break;
  }

  if (feedback) {
    Swal.fire({
      icon: 'success',
      title: `Terimakasih!<br /> Anda Memberikan Feedback <br /><strong>${feedback.toUpperCase()}</strong>`,
      showConfirmButton: false,
      // showClass: {
      //   popup: 'animate__animated animate__zoomInDown'
      // },
      // hideClass: {
      //   popup: 'animate__animated animate__backOutDown'
      // },
      timer: 2500
    })
  }
}
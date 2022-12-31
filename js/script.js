function stepForm() {
  const steps =     document.querySelectorAll('.form__step')
  const prevBtn =   document.querySelector('.form__prev')
  const nextBtn =   document.querySelector('.form__next')
  const form =      document.querySelector('.step__form')
  const stepNumbers = document.querySelectorAll('.step__number')
  const progress =  document.querySelector('.step__progress--active')
  const finishBlock = document.querySelector('.finish')

  form.addEventListener('submit', (e) => e.preventDefault())

  let formStepIndex = 0

  prevBtn.addEventListener('click', () => {
    formStepIndex--

    stepNumbers[formStepIndex + 1].classList.remove('step__number--active')

    updateFormSteps()
  })
  nextBtn.addEventListener('click', () => {
    if (formStepIndex < steps.length -1) {
      formStepIndex++
      updateFormSteps()
    }
  })

  function updateFormSteps() {
    steps.forEach((step) => {
      step.classList.contains('form__step--active') && step.classList.remove('form__step--active')

    })

    steps[formStepIndex].classList.add('form__step--active')
    stepNumbers[formStepIndex].classList.add('step__number--active')

    if (formStepIndex === 0) {
      prevBtn.style.display = 'none'
    } else {
      prevBtn.style.display = 'block'
    }

    if (formStepIndex === steps.length - 1) {
      nextBtn.innerHTML = 'Finish'

      nextBtn.addEventListener('click', () =>{
        finishBlock.style.display = 'block'
        form.style.display = 'none'
      })
    } else {
      nextBtn.innerHTML = 'Next'
    }

    const actives = document.querySelectorAll('.step__number--active')
    const percent = ((actives.length - 1) / (stepNumbers.length - 1)) * 100 + '%'

    
    progress.style.width = percent
  }

  updateFormSteps()
}

if (document.querySelector('.form__step')) {
  stepForm()
}

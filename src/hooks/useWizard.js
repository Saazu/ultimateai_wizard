import { useState } from "react";

/**
 *
 * @param {['loading', 'error', '']} loadState : initial loadingstate
 * @returns
 */
function useWizard(wizardSteps) {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState({});

  function goForward() {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }

  function goBack() {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }

  function resetWizard() {
    setActiveStep(0);
  }

  function saveWizardStepSelection(activeStep, answer) {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [activeStep]: answer,
    }));
  }

  return {
    goForward,
    goBack,
    resetWizard,
    activeStep,
    saveWizardStepSelection,
    answers,
  };
}

export default useWizard;

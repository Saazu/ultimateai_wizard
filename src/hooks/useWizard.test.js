import { renderHook, act } from "@testing-library/react-hooks";
import useWizard from "./useWizard";
import { wizardSteps } from "../constants/setup.constants";

describe("useWizard", () => {
  test("initialise useWizard hook wizard", async () => {
    const { result } = renderHook(() => useWizard(wizardSteps));
    expect(result.current.activeStep).toBe(0);
  });

  test("initialise useWizard hook wizard and move forward through wizard steps", async () => {
    const { result } = renderHook(() => useWizard(wizardSteps));
    expect(result.current.activeStep).toBe(0);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(1);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(2);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(3);
  });

  test("initialise useWizard hook wizard and move forward and backwards through wizard steps", async () => {
    const { result } = renderHook(() => useWizard(wizardSteps));
    expect(result.current.activeStep).toBe(0);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(1);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(2);

    act(() => {
      result.current.goForward();
    });
    expect(result.current.activeStep).toBe(3);

    act(() => {
      result.current.goBack();
    });
    expect(result.current.activeStep).toBe(2);

    act(() => {
      result.current.goBack();
    });
    expect(result.current.activeStep).toBe(1);
  });
});

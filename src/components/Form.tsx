import Steps from "./Steps";
import form_icon from "../assets/images/form-icon.png";
import form_upload_icon from "../assets/images/form-upload-icon.png";
import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";

function Form() {
  const [step, setStep] = useState<number>(0);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => (prevStep > 0 ? prevStep - 1 : prevStep));
  };

  useEffect(() => {
    console.log(step);
  }, [step]);

  return (
    <div className="bg-white w-[840px] h-[685px] p-[72px] border-[1px] rounded-[32px] !font-neue-montreal overflow-hidden">
      {step === 0 && <FormStart nextStep={nextStep} />}
      {step > 0 && (
        <Steps nextStep={nextStep} prevStep={prevStep} step={step} />
      )}
    </div>
  );
}

export default Form;

type FormStartProps = {
  nextStep: () => void;
};

function FormStart({ nextStep }: FormStartProps) {
  return (
    <div className="flex flex-col justify-between w-[696px] h-[541px] !overflow-hidden">
      <div className="h-[417px] grid place-content-center text-center">
        <img className="w-[100px] h-[100px] mx-auto" src={form_icon} alt="" />
        <h2 className="text-[40px] leading-[48px] font-bold text-dark_blue mt-[36px] mb-[16px]">
          Autofill your Profile
        </h2>
        <p className="text-[20px] leading-[24px] font-normal text-dark_blue">
          Magically fills most of your profile details in less than a minute
        </p>
      </div>
      <div className="flex justify-between w-[696px] gap-[16px]">
        <Button
          onClick={nextStep}
          variant="filled"
          className="h-[52px] min-w-[268px] border-2 border-[#EAEAEA] rounded-[8px] py-[16px] px-[32px] !bg-transparent text-dark_blue text-base leading-5 font-bold !font-neue-montreal">
          Fill Profile Manually
        </Button>
        <Button
          onClick={nextStep}
          variant="filled"
          className="h-[52px] w-[476px] border rounded-[8px] py-[16px] px-[32px] bg-dark_blue text-white text-base leading-5 font-bold !font-neue-montreal">
          Upload CV
          <span className="ml-2">
            <img
              className="w-[20px] h-[20px] inline"
              src={form_upload_icon}
              alt=""
            />
          </span>
        </Button>
      </div>
    </div>
  );
}

import {
  Button,
  Input,
  Option,
  Popover,
  PopoverContent,
  PopoverHandler,
  Select,
} from "@material-tailwind/react";
import arrow from "../assets/images/arrow.svg";
import { useEffect, useState, ChangeEvent, cloneElement } from "react";
import SearchInput from "./SearchInput";
import ListItems from "./ListItems";
import developer from "../assets/images/developer.svg";
import designer from "../assets/images/designer.svg";
import list_icon from "../assets/images/list_icon.svg";
import human_icon from "../assets/images/human_icon.svg";
// import Ellipse from "../assets/images/Ellipse.svg";
import leaves from "../assets/images/leaves.svg";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowDownIcon,
} from "@heroicons/react/16/solid";
// import { useCountries } from "use-react-countries";

type FormStartProps = {
  nextStep: () => void;
  prevStep: () => void;
  step: number;
};


// will separate the component for better maintainability

const Steps = ({ nextStep, prevStep, step }: FormStartProps) => {
  const gradientStyle = {
    backgroundImage: "linear-gradient(to bottom, #41CFD5,#407ADA  )",
  };

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return <StepOne />;
      case 2:
        return <StepTwo />;
      case 3:
        return <StepThree nextStep={nextStep} />;
      case 4:
        return <StepFour nextStep={nextStep} />;
      case 5:
        return <StepFive />;
      case 6:
        return <StepSix />;
      case 7:
        return <StepSeven />;

      default:
        return <StepOne />;
    }
  };

  const isProgressVisible = step !== 3 && step !== 4;
  const progressStep = step > 2 ? step - 2 : step;

  return (
    <div className="w-[720px] !font-neue-montreal">
      {isProgressVisible && (
        <div className="flex flex-col justify-between h-[88px]">
          <div className="flex items-center">
            <Button
              variant="text"
              className="w-[40px] h-[40px] px-[7px] py-[5px]"
              onClick={prevStep}>
              <img className="mx-auto" src={arrow} alt="Arrow" />
            </Button>
            <h4 className="mx-[16px] text-[34px] leading-[40px] font-bold text-dark_blue w-full">
              {step === 1
                ? "Choose Job Category"
                : step === 2
                ? "Choose Job Type"
                : step === 5
                ? "Work experience"
                : step === 6
                ? "Education"
                : step === 7 && "Other"}
            </h4>
            <Button
              variant="filled"
              className="h-[51px] min-w-[83px] bg-dark_blue !font-bold text-base leading-5"
              onClick={nextStep}>
              Next
            </Button>
          </div>
          <div className="grid grid-cols-5 gap-[16px]">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className={`bg-gray-200 w-[130px] h-[5px] rounded-[32px] ${
                  index < progressStep ? "" : "bg-gray-200"
                }`}
                style={index < progressStep ? gradientStyle : undefined}
              />
            ))}
          </div>
        </div>
      )}
      {renderStepContent(step)}
    </div>
  );
};

export default Steps;

// StepOne Component
const StepOne = () => {
  const job_Category = [
    {
      id: 1,
      name: "Developer",
      description: "Front-end, Back-end, Full-stack, QA...",
      img: developer,
    },
    {
      id: 2,
      name: "Designer",
      description: "Product Designer, UX, UI, Interaction...",
      img: designer,
    },
    {
      id: 3,
      name: "Product Manager",
      description: "Scrum Master, Product Manager",
      img: list_icon,
    },
    {
      id: 4,
      name: "Finance and Accounting",
      description: "Finance, Accounting, Audit...",
      img: list_icon,
    },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = job_Category.filter((jobCategory) =>
    jobCategory.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <ListItems items={filteredCategories} name="jobCategorySelection" />
    </>
  );
};

// StepTwo Component
const StepTwo = () => {
  const job_type = [
    { id: 1, name: "Front-end", img: developer },
    { id: 2, name: "Back-end", img: developer },
    { id: 3, name: "Full-stack", img: developer },
    { id: 4, name: "Quality Assurance", img: developer },
    { id: 5, name: "DevOps", img: developer },
    { id: 6, name: "Data Analyst", img: developer },
  ];

  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredJobType = job_type.filter((jobType) =>
    jobType.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <SearchInput
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <ListItems items={filteredJobType} name="jobTypeSelection" />
    </>
  );
};

// StepThree Component
const StepThree = ({ nextStep }: { nextStep: () => void }) => {
  return (
    <div className="flex flex-col justify-between w-[696px] h-[541px]">
      <div className="h-[417px] grid place-content-center text-center">
        <img className="w-[100px] h-[100px] mx-auto" src={human_icon} alt="" />
        <h2 className="text-[40px] leading-[48px] font-bold text-dark_blue mt-[36px] mb-[16px]">
          Now let’s find your skills
        </h2>
        <p className="text-[20px] leading-[24px] font-normal text-dark_blue">
          Don’t worry you can always change them later
        </p>
      </div>
      <div className="flex justify-between w-[696px] gap-[16px]">
        <Button
          onClick={nextStep}
          variant="filled"
          className="h-[52px] min-w-[268px] border-2 border-[#EAEAEA] rounded-[8px] py-[16px] px-[32px] !bg-transparent text-dark_blue text-base leading-5 font-bold !font-neue-montreal">
          Skip
        </Button>
        <Button
          onClick={nextStep}
          variant="filled"
          className="h-[52px] w-[476px] border rounded-[8px] py-[16px] px-[32px] bg-dark_blue text-white text-base leading-5 font-bold !font-neue-montreal">
          Next
        </Button>
      </div>
    </div>
  );
};

// step four
const StepFour = ({ nextStep }: { nextStep: () => void }) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextStep();
    }, 3000);

    return () => clearTimeout(timeoutId); // Clean up timeout on unmount
  }, [nextStep]);

  return (
    <div className="flex flex-col justify-center w-[696px] h-[541px] text-center">
      <div className="w-[100px] h-[100px] relative mx-auto">
        <svg
          className="w-[100px] h-[100px] animate-spin"
          viewBox="0 0 50 50"
          fill="none">
          <defs>
            <linearGradient
              id="spinner-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop
                offset="0%"
                style={{ stopColor: "#407ADA", stopOpacity: 0 }}
              />
              <stop
                offset="60%"
                style={{ stopColor: "#407ADA", stopOpacity: 0.6 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#41CFD5", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="url(#spinner-gradient)"
            strokeWidth="3"
            fill="none"
          />
        </svg>
        <div className="absolute inset-0 flex justify-center items-center">
          <img className="w-[50px] h-[50px]" src={leaves} alt="" />
        </div>
      </div>

      <h2 className="text-[40px] leading-[48px] font-bold text-dark_blue mt-[36px] mb-[16px]">
        Autofilling your details
      </h2>
      <p className="text-[20px] leading-[24px] font-normal text-dark_blue">
        It usually takes up to a minute
      </p>
    </div>
  );
};

// step five
const StepFive = () => {
  const [charCount, setCharCount] = useState<number>(0);
  const [date, setDate] = useState<Date | undefined>();
  const countries: string[] = ["Bangladesh", "India", "Malaysia", "Australia"];
  const maxChars = 200;

  const handleTextareaChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    if (value.length <= maxChars) {
      setCharCount(value.length);
    }
  };

  return (
    <div className="w-[720px] h-[460px] mt-[36px] space-y-4 font-neue-montreal">
      <h4 className="text-dark_blue font-medium text-[20px] leading-7">
        Enter Company Details
      </h4>
      <div className="w-full space-y-4">
        <div className="flex space-x-4">
          <Input
            type="text"
            className="min-w-[60%] !border !border-[#5D7999] bg-white text-[#5D7999] ring ring-transparent placeholder:text-[#5D7999] placeholder:opacity-100 focus:!border-[#5D7999] focus:!border[#5D7999]"
            placeholder="Company Name*"
            label="Company Name*"
            labelProps={{
              className: "hidden",
            }}
            containerProps={{ className: "min-w-[100px]" }}
            crossOrigin={undefined}
          />
          <div className="!max-w-[100px] overflow-hidden">
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  crossOrigin={undefined}
                  labelProps={{
                    className: "hidden",
                  }}
                  icon={<ArrowDownIcon />}
                  className="p-0 !max-w-[100px] !border !border-[#5D7999] bg-white text-[#5D7999] ring ring-transparent placeholder:text-[#5D7999] placeholder:opacity-100 focus:!border-[#5D7999] focus:!border[#5D7999]"
                  placeholder="Date Form"
                  containerProps={{ className: "min-w-[100px]" }}
                  variant="outlined"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div className="max-w-[100px]">
            <Popover placement="bottom">
              <PopoverHandler>
                <Input
                  crossOrigin={undefined}
                  labelProps={{
                    className: "hidden",
                  }}
                  icon={<ArrowDownIcon />}
                  className="p-0 !max-w-[100px] !border !border-[#5D7999] bg-white text-[#5D7999] ring ring-transparent placeholder:text-[#5D7999] placeholder:opacity-100 focus:!border-[#5D7999] focus:!border[#5D7999]"
                  placeholder="Date To"
                  containerProps={{ className: "min-w-[100px]" }}
                  variant="outlined"
                  onChange={() => null}
                  value={date ? format(date, "PPP") : ""}
                />
              </PopoverHandler>
              <PopoverContent>
                <DayPicker
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  showOutsideDays
                  className="border-0"
                  classNames={{
                    caption:
                      "flex justify-center py-2 mb-4 relative items-center",
                    caption_label: "text-sm font-medium text-gray-900",
                    nav: "flex items-center",
                    nav_button:
                      "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                    nav_button_previous: "absolute left-1.5",
                    nav_button_next: "absolute right-1.5",
                    table: "w-full border-collapse",
                    head_row: "flex font-medium text-gray-900",
                    head_cell: "m-0.5 w-9 font-normal text-sm",
                    row: "flex w-full mt-2",
                    cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative",
                    day: "h-9 w-9 p-0 font-normal",
                    day_range_end: "day-range-end",
                    day_selected:
                      "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                    day_today: "rounded-md bg-gray-200 text-gray-900",
                    day_outside:
                      "text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                    day_disabled: "text-gray-500 opacity-50",
                    day_hidden: "invisible",
                  }}
                  components={{
                    IconLeft: ({ ...props }) => (
                      <ChevronLeftIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                    IconRight: ({ ...props }) => (
                      <ChevronRightIcon
                        {...props}
                        className="h-4 w-4 stroke-2"
                      />
                    ),
                  }}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="relative m-0 p-0 max-h-[106px]">
          <textarea
            className="min-w-[100%] max-h-[106px] min-h-[106px] outline-none rounded-[8px] p-[16px] !border !border-[#5D7999] bg-white text-[#5D7999] ring ring-transparent placeholder:text-[#5D7999] placeholder:opacity-100 focus:!border-[#5D7999] focus:!border[#5D7999] resize-none"
            placeholder="Enter what you did there. Ex: Achievements, Tasks..."
            maxLength={maxChars}
            onChange={handleTextareaChange}></textarea>
          <div className="absolute text-[14px] font-normal leading-5 bottom-[16px] right-[16px] text-[#C4C4C4]">
            {charCount.toString().padStart(2, "0")}/{maxChars}
          </div>
        </div>
        <Select
          size="lg"
          label="Select Country"
          selected={(element) =>
            element &&
            cloneElement(element, {
              disabled: true,
              className:
                "flex items-center opacity-100 px-0 gap-2 pointer-events-none",
            })
          }>
          {countries.map((name: string) => (
            <Option key={name} value={name} className="flex items-center gap-2">
              {name}
            </Option>
          ))}
        </Select>
      </div>
    </div>
  );
};

// step six
const StepSix = () => {
  return <div className=""></div>;
};

// setSever

const StepSeven = () => {
  return <div className=""></div>;
};

import React, { useState } from "react";
import {
  List,
  ListItem,
  ListItemPrefix,
  Avatar,
  Card,
  Typography,
  Radio,
  RadioProps,
} from "@material-tailwind/react";

export function RadioList() {
  const [selected, setSelected] = useState<string | null>(null);

  const handleRadioChange = (value: string) => {
    setSelected(value);
  };

  const radioProps: Partial<RadioProps> = {
    crossOrigin: undefined,
  };

  return (
    <Card className="w-96">
      <List>
        <ListItem className="flex items-center justify-between">
          <div className="flex items-center">
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="candice"
                src="https://docs.material-tailwind.com/img/face-1.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Tania Andrew
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Software Engineer @ Material Tailwind
              </Typography>
            </div>
          </div>
          <Radio
            {...radioProps}
            name="radio"
            value="tania"
            checked={selected === "tania"}
            onChange={() => handleRadioChange("tania")}
            className="ml-4"
          />
        </ListItem>

        <ListItem className="flex items-center justify-between">
          <div className="flex items-center">
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="alexander"
                src="https://docs.material-tailwind.com/img/face-2.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Alexander
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                Backend Developer @ Material Tailwind
              </Typography>
            </div>
          </div>
          <Radio
            {...radioProps}
            name="radio"
            value="alexander"
            checked={selected === "alexander"}
            onChange={() => handleRadioChange("alexander")}
            className="ml-4"
          />
        </ListItem>

        <ListItem className="flex items-center justify-between">
          <div className="flex items-center">
            <ListItemPrefix>
              <Avatar
                variant="circular"
                alt="emma"
                src="https://docs.material-tailwind.com/img/face-3.jpg"
              />
            </ListItemPrefix>
            <div>
              <Typography variant="h6" color="blue-gray">
                Emma Willever
              </Typography>
              <Typography variant="small" color="gray" className="font-normal">
                UI/UX Designer @ Material Tailwind
              </Typography>
            </div>
          </div>
          <Radio
            {...radioProps}
            name="radio"
            value="emma"
            checked={selected === "emma"}
            onChange={() => handleRadioChange("emma")}
            className="ml-4"
          />
        </ListItem>
      </List>
    </Card>
  );
}

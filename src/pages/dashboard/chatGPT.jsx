import React, { useState } from "react";
import {
  Typography,
  Alert,
  Card,
  CardHeader,
  CardBody,
  Input,Button
} from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export function ChatGPT() {
  const [question, setQuestion] = useState("")

  const [showAlerts, setShowAlerts] = useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const [showAlertsWithIcon, setShowAlertsWithIcon] = useState({
    blue: true,
    green: true,
    orange: true,
    red: true,
  });
  const alerts = ["blue", "green", "orange", "red"];
  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!question){
      alert("email required")
      return;
    }
    
  }
  return (
    <div className="mx-auto my-20 flex max-w-screen-lg flex-col gap-8">
      
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
        <div>
          <div>
          <Input type="text" label="Question" size="lg" 
          value={question} onChange={e=>setQuestion(e.target.value)}
          onKeyDown={e=>e.keyCode==13?handleSubmit(e):""}
          />
          </div>
          <div>
          <Button variant="gradient" fullWidth onClick={handleSubmit}>
              Send
            </Button>
          </div>
        </div>
          {alerts.map((color) => (
            <Alert
              key={color}
              show={showAlerts[color]}
              color={color}
              dismissible={{
                onClose: () =>
                  setShowAlerts((current) => ({ ...current, [color]: false })),
              }}
            >
              A simple {color} alert with an <a href="#">example link</a>. Give
              it a click if you like.
            </Alert>
          ))}
        </CardBody>
      </Card>
      <Card>
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="m-0 p-4"
        >
          <Typography variant="h5" color="blue-gray">
            Alerts with Icon
          </Typography>
        </CardHeader>
        <CardBody className="flex flex-col gap-4 p-4">
          {alerts.map((color) => (
            <Alert
              key={color}
              show={showAlertsWithIcon[color]}
              color={color}
              icon={
                <InformationCircleIcon strokeWidth={2} className="h-6 w-6" />
              }
              dismissible={{
                onClose: () =>
                  setShowAlertsWithIcon((current) => ({
                    ...current,
                    [color]: false,
                  })),
              }}
            >
              A simple {color} alert with an <a href="#">example link</a>. Give
              it a click if you like.
            </Alert>
          ))}
        </CardBody>
      </Card>
    </div>
  );
}

export default ChatGPT;

import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import axios from "axios";

export function NewKnowledgeDialog({ open, setOpen }) {
  const handleOpen = () => setOpen((cur) => !cur);

  const handleCreate = () => {
    axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/add_knowledge`, {
      user_id: '123',
      knowledge_name: 'react',
      knowledge_urls: ['https://react.org']
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
    setOpen(false);
  };

  return (
    <>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none min-w-[83.3%] md:min-w-[33.3%]"
      >
        <Card className="mx-auto w-full">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              New Knowledge Base
            </Typography>

            <hr />

            <div className="flex flex-col gap-4 max-h-[24rem] overflow-y-auto scroll-smooth">
              <Typography className="-mb-2" variant="h6">
                Name your knowledge base
              </Typography>
              <Input label="Knowledge base name" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Upload URL
              </Typography>
              <Input label="Add your URL" size="lg" />
              <Typography className="-mb-2" variant="h6">
                Upload a text file
              </Typography>
              <label htmlFor="fusk" className="text-center bg-blue-400 p-3 rounded-md text-white text-sm font-bold" variant="gradient">
                SELECT TEXT FILE
              </label>
              <input id="fusk" type="file" name="photo" style={{ display: 'none' }}></input>
            </div>
          </CardBody>
          <CardFooter className="pt-6">
            <Button className="text-sm" variant="gradient" onClick={handleCreate} fullWidth>
              + Create
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
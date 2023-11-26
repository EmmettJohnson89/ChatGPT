import React from "react";
import {
  Dialog,
  DialogBody,
  Input,
  Typography,
} from "@material-tailwind/react";

export function UpdateKnowledgeDialog({ open, setOpen }) {

  const handleOpen = () => setOpen(!open);

  return (
    <Dialog open={open} handler={handleOpen}>
      <DialogBody divider className="flex gap-4 p-2">
        <div className="w-2/5 bg-blue-gray-800 rounded-md px-2 py-4">
          <Input
            className="!text-white"
            type="text"
            label="Search"
            size="lg"
            icon={<i className="fas fa-search" />}
          />
        </div>
        <div className="w-3/5"></div>
      </DialogBody>
    </Dialog>
  );
}
import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
} from "@material-tailwind/react";
import axios from "axios";

export function NewKnowledgeDialog({ open, setOpen, type }) {
  const [knowledgeName, setKnowledgeName] = useState('');
  const [knowledgeUrls, setKnowledgeUrls] = useState([{
    id: 0,
    url: ""
  }]);

  const handleOpen = () => setOpen((cur) => !cur);

  const AddLink = () => {
    setKnowledgeUrls(Urls => [...Urls, {
      id: Urls[Urls.length - 1].id + 1,
      url: ''
    }]);
  };

  const DeleteLink = id => {
    setKnowledgeUrls(Urls => Urls.filter(one => one?.id !== id));
  }

  const handleLink = (e, id) => {
    const newUrls = knowledgeUrls.map((url) => {
      if (url.id === id) {
        url.url = e.target.value;
      }
      return url;
    });
    setKnowledgeUrls(newUrls);
  }

  const handleCreate = () => {
    axios.post(`${import.meta.env.VITE_SERVER_ENDPOINT}/add_knowledge`, {
      user_id: '123',
      knowledge_name: knowledgeName,
      knowledge_urls: knowledgeUrls.map(item => item.url)
    })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      })
    setOpen(false);

    setKnowledgeName("");
    setKnowledgeUrls([{
      id: 0,
      url: ""
    }])
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
              {`${type === true ? 'New' : 'Update'} Knowledge Base`}
            </Typography>

            <hr />

            <div className="max-h-[24rem] overflow-y-auto scroll-smooth">
              <div className="flex flex-col gap-4">
                {type && (
                  <>
                    <Typography className="-mb-2" variant="h6">
                      Name your knowledge base
                    </Typography>
                    <Input
                      type="text"
                      label="Knowledge base name"
                      name="knowledgeName"
                      size="lg"
                      value={knowledgeName}
                      onChange={(e) => setKnowledgeName(() => e.target.value)}
                    />
                  </>
                )}

                <Typography className="-mb-2" variant="h6">
                  Upload URL
                </Typography>
                {
                  knowledgeUrls.map(one =>
                    <div key={one?.id} id={one?.id}>
                      <div className="flex gap-1">
                        <Input
                          label="Add your URL"
                          size="lg"
                          icon={knowledgeUrls.length > 1 && <i className="fas fa-xmark" onClick={() => DeleteLink(one?.id)} />}
                          onChange={(e) => handleLink(e, one?.id)}
                        />
                      </div>
                    </div>
                  )
                }

                <Button className="p-2 text-md capitalize" variant="gradient" onClick={AddLink}>
                  Add another link
                </Button>

                <Typography className="-mb-2" variant="h6">
                  Upload a text file
                </Typography>
                <label htmlFor="fusk" className="text-center bg-blue-400 p-3 rounded-md text-white text-sm font-bold" variant="gradient">
                  SELECT TEXT FILE
                </label>
                <input id="fusk" type="file" name="photo" style={{ display: 'none' }}></input>
              </div>
            </div>
          </CardBody>
          <CardFooter className="pt-6">
            <Button
              className="text-sm"
              variant="gradient"
              onClick={handleCreate}
              fullWidth
              disabled={knowledgeName === '' || knowledgeUrls[0].url === ''}
            >
              + Create
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
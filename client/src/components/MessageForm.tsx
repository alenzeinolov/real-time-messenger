import { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

interface MessageFormProps {
  message: string;
  onChange: any;
  onSubmit: any;
}

const MessageForm: React.FC<MessageFormProps> = ({
  message,
  onChange,
  onSubmit,
}) => {
  return (
    <Box p={2} mt={2}>
      <form onSubmit={onSubmit}>
        <TextField
          placeholder="Say something..."
          onChange={onChange}
          value={message}
        />
        <Button variant="contained" color="primary" type="submit">
          Send
        </Button>
      </form>
    </Box>
  );
};

export default MessageForm;

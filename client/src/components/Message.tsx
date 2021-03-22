import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

interface MessageProps {
  text: string;
}

const Message: React.FC<MessageProps> = ({ text }) => {
  return (
    <Card style={{ marginTop: 20 }}>
      <CardContent>{text}</CardContent>
    </Card>
  );
};

export default Message;

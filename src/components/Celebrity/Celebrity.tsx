import { Body } from "components/Typography/Typography";
import { Flex } from "../Containers/Containers";
import { ICelebrity } from "./Interfaces";

export const CelebrityDetail = ({ icon, title, text }: ICelebrity) => {
  return (
    <div className="my-6">
      <Flex justifyContent="start">
        {icon}
        <Body text={title} color="primary" isBold />
        <Body text={text} color="white" />
      </Flex>
    </div>
  );
};
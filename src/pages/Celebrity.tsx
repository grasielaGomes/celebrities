import { TextButton } from "components/Buttons/Buttons";
import { CelebrityDetail } from "components/Celebrity/Celebrity";
import {
  Grid,
  PageTemplate,
  Flex,
  Card,
} from "components/Containers/Containers";
import {
  Avatar,
  BirthdayIcon,
  CheckPersonIcon,
  HeightIcon,
  NationalityIcon,
  OcuppationIcon,
  ReturnIcon,
} from "components/Images/Images";
import { Heading1, Heading6 } from "components/Typography/Typography";
import { useCelebrities } from "hooks/useCelebrities";

export const Celebrity = () => {
  const { navigate } = useCelebrities();
  return (
    <PageTemplate maxWidth="3/4">
      <div className="h-full my-auto">
        <TextButton
          handleClick={() => navigate("/")}
          child={
            <>
              <Flex>
                <ReturnIcon />
                <Heading6
                  text="Return to all celebrities"
                  color="white"
                  textDecoration="hover:text-amber-300"
                />
              </Flex>
            </>
          }
        />
        <Grid smColumns="2" mdColumns="2" lgColumns="2" xlColumns="2">
          <Avatar imgUrl="https://github.com/grasielaGomes/images/blob/main/anthony-hopkins.jpg?raw=true" />
          <Card paddingX="10">
            <Heading1 text="Anthony Hopkins" color="primary" />
            <Heading6 text="Age: 52" color="white" />
            <hr className="my-5 border-gray-500" />
            <CelebrityDetail
              icon={<NationalityIcon />}
              title="Nacionality"
              text="US"
            />
            <CelebrityDetail
              icon={<OcuppationIcon />}
              title="Occupation"
              text="actor"
            />
            <CelebrityDetail icon={<HeightIcon />} title="Height" text="1.74" />
            <CelebrityDetail
              icon={<BirthdayIcon />}
              title="Birthday"
              text="1969-05-14"
            />
            <CelebrityDetail
              icon={<CheckPersonIcon />}
              title="Is alive?"
              text="yes"
            />
          </Card>
        </Grid>
      </div>
    </PageTemplate>
  );
};

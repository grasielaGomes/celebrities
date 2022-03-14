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
import { ICelebrityApi } from "helper/Interfaces";
import { useCelebrities } from "hooks/useCelebrities";

export const Celebrity = () => {
  const { navigate, CelebrityObj, baseUrl, celebrity } = useCelebrities();
  const filteredCelebrity = CelebrityObj.find((obj) => obj.name === celebrity);
  const {
    name,
    nationality,
    occupation,
    height,
    birthday,
    age,
    is_alive: isAlive,
  } = filteredCelebrity as ICelebrityApi;
  return (
    <PageTemplate maxWidth="3/4">
      <div className="m-4">
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
      </div>
      <Grid smColumns="2" mdColumns="2" lgColumns="2" xlColumns="2">
        <Avatar imgUrl={`${baseUrl}/${name}.jpg`} />
        <Card paddingX="10">
          <Heading1
            text={name.split("-").join(" ")}
            color="primary"
            textDecoration="capitalize"
          />
          <Heading6 text={`Age ${age}`} color="white" />
          <hr className="my-5 border-gray-500" />
          <CelebrityDetail
            icon={<NationalityIcon />}
            title="Nacionality"
            text={nationality || ""}
          />
          <CelebrityDetail
            icon={<OcuppationIcon />}
            title="Occupation"
            text={occupation || ""}
          />
          <CelebrityDetail
            icon={<HeightIcon />}
            title="Height"
            text={String(height) || ""}
          />
          <CelebrityDetail
            icon={<BirthdayIcon />}
            title="Birthday"
            text={birthday || ""}
          />
          <CelebrityDetail
            icon={<CheckPersonIcon />}
            title="Is alive?"
            text={isAlive ? "Yes" : "No"}
          />
        </Card>
      </Grid>
    </PageTemplate>
  );
};

import { ImageButton } from "components/Buttons/Buttons";
import { Grid, PageTemplate } from "components/Containers/Containers";
import { Heading1 } from "components/Typography/Typography";
import { CelebryObj } from "helper/CelebrityObj";
import { Fragment } from "react";

export const Home = () => {
  const baseUrl = "https://raw.githubusercontent.com/grasielaGomes/images/main";
  return (
    <PageTemplate>
      <Heading1
        text="Meet the Celebrities"
        color="white"
        textDecoration="py-10 tracking-wide pl-10"
      />
      <Grid mdColumns="2" lgColumns="3" xlColumns="6" gap="0">
        {CelebryObj.map(({ name }) => {
          return (
            <Fragment key={name}>
              <ImageButton
                width="full"
                imgUrl={`${baseUrl}/${name}.jpg`}
                altText={`image of ${name}`}
                filter="grayscale"
                hoverColor="grayscale-0 bg-primary"
              />
            </Fragment>
          );
        })}
      </Grid>
    </PageTemplate>
  );
};

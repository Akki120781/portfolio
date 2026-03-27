"use client";

import { mailchimp } from "@/resources";
import { Button, Heading, Input, Text, Background, Column, Row } from "@akki/core";
import type { opacity, SpacingToken } from "@akki/core";
import { useState } from "react";

export const ContactForm: React.FC<React.ComponentProps<typeof Column>> = ({ ...flex }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "",
    project: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Column
      overflow="hidden"
      fillWidth
      padding="xl"
      radius="l"
      marginBottom="m"
      horizontal="center"
      align="center"
      background="surface"
      border="neutral-alpha-weak"
      {...flex}
    >
      <Background
        top="0"
        position="absolute"
        mask={{
          x: mailchimp.effects.mask.x,
          y: mailchimp.effects.mask.y,
          radius: mailchimp.effects.mask.radius,
          cursor: mailchimp.effects.mask.cursor,
        }}
        gradient={{
          display: mailchimp.effects.gradient.display,
          opacity: mailchimp.effects.gradient.opacity as opacity,
          x: mailchimp.effects.gradient.x,
          y: mailchimp.effects.gradient.y,
          width: mailchimp.effects.gradient.width,
          height: mailchimp.effects.gradient.height,
          tilt: mailchimp.effects.gradient.tilt,
          colorStart: mailchimp.effects.gradient.colorStart,
          colorEnd: mailchimp.effects.gradient.colorEnd,
        }}
        dots={{
          display: mailchimp.effects.dots.display,
          opacity: mailchimp.effects.dots.opacity as opacity,
          size: mailchimp.effects.dots.size as SpacingToken,
          color: mailchimp.effects.dots.color,
        }}
        grid={{
          display: mailchimp.effects.grid.display,
          opacity: mailchimp.effects.grid.opacity as opacity,
          color: mailchimp.effects.grid.color,
          width: mailchimp.effects.grid.width,
          height: mailchimp.effects.grid.height,
        }}
        lines={{
          display: mailchimp.effects.lines.display,
          opacity: mailchimp.effects.lines.opacity as opacity,
          size: mailchimp.effects.lines.size as SpacingToken,
          thickness: mailchimp.effects.lines.thickness,
          angle: mailchimp.effects.lines.angle,
          color: mailchimp.effects.lines.color,
        }}
      />
      <Column maxWidth="s" horizontal="center" zIndex={1}>
        <Heading marginBottom="s" variant="display-strong-xs">
          Get to know me
        </Heading>
        <Text wrap="balance" marginBottom="l" variant="body-default-m" onBackground="neutral-weak">
          Reach out if you want to collaborate or have a project in mind.
        </Text>
      </Column>
      <form
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
        }}
        action="mailto:akshatsoni5380@gmail.com"
        method="post"
        encType="text/plain"
      >
        <Row fillWidth maxWidth={32} s={{ direction: "column" }} gap="12">
          <Input id="name" name="name" type="text" placeholder="Name" required onChange={handleChange} />
          <Input id="email" name="email" type="email" placeholder="Email" required onChange={handleChange} />
          <Input id="purpose" name="purpose" type="text" placeholder="Purpose" required onChange={handleChange} />
          <Input id="project" name="project" type="text" placeholder="Project" required onChange={handleChange} />
          <div className="clear">
            <Row height="48" vertical="center">
              <Button type="submit" id="submit" value="Submit" size="m" fillWidth>
                Submit
              </Button>
            </Row>
          </div>
        </Row>
      </form>
    </Column>
  );
};

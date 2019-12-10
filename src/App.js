import React from "react";
import ThemeProvider from "./atomic/theme/provider";
import { Button, Icon, Input, Label, Card } from "./atomic/atoms";
import { Field } from "./atomic/molecules";

export default function App() {
  return (
    <ThemeProvider>
      <h1>atomic design</h1>
      <h3>Button</h3>
      <div>
        <Button type="fill" palette="primary">
          Primary Fill
        </Button>
        <Button type="outline" palette="primary">
          Primary Outline
        </Button>
        <Button type="ghost" palette="primary">
          Primary Ghost
        </Button>
        <br />
        <br />
        <Button type="fill" palette="success">
          Success Fill
        </Button>
        <Button type="outline" palette="success">
          Success Outline
        </Button>
        <Button type="ghost" palette="success">
          Success Ghost
        </Button>
        <br />
        <br />
        <Button type="fill" palette="danger">
          Danger Fill
        </Button>
        <Button type="outline" palette="danger">
          Danger Outline
        </Button>
        <Button type="ghost" palette="danger">
          Danger Ghost
        </Button>
        <br />
        <br />
        <Button type="fill" palette="warning">
          Warning Fill
        </Button>
        <Button type="outline" palette="warning">
          Warning Outline
        </Button>
        <Button type="ghost" palette="warning">
          Warning Ghost
        </Button>
        <br />
        <br />
        <Button type="fill" palette="info">
          Info Fill
        </Button>
        <Button type="outline" palette="info">
          Info Outline
        </Button>
        <Button type="ghost" palette="info">
          Info Ghost
        </Button>
        <br />
        <br />
        <Button disabled>Disabled</Button>
        <br />
        <br />
        <h3>Input</h3>
        <Input
          iconLeft
          icon={{ type: "user-line" }}
          placeholder="Username"
          label="Login"
        />
        <Input placeholder="Username" label="Login" error="Username invalid" />
        <Input placeholder="Disabled..." disabled />
        <br />
        <h3>Icons</h3>
        <Icon type="chat-new-fill" pack="remix" size={30} color="primary" />
        <br />
        <br />
        <h3>Labels</h3>
        <Label>Atomic design - Label</Label>
        <br />
        <br />
        <Card>
          <Field label="Text" error="eee" />
          <Button block>Ok</Button>
        </Card>
        <br />
        <br />
      </div>
    </ThemeProvider>
  );
}

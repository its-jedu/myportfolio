import {
  Html,
  Body,
  Container,
  Text,
  Section,
  Heading,
} from "@react-email/components";

interface ContactEmailProps {
  name: string;
  email: string;
  message: string;
}

export default function ContactEmail({ 
  name, 
  email, 
  message 
}: ContactEmailProps) {
  return (
    <Html>
      <Body style={main}>
        <Container style={container}>
          <Heading style={h1}>New Contact Form Submission</Heading>
          <Section style={section}>
            <Text style={text}>
              <strong>Name:</strong> {name}
            </Text>
            <Text style={text}>
              <strong>Email:</strong> {email}
            </Text>
            <Text style={text}>
              <strong>Message:</strong>
            </Text>
            <Text style={messageText}>{message}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}

const main = {
  backgroundColor: "#09090b",
  color: "#d4d4d8",
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
};

const container = {
  margin: "0 auto",
  padding: "20px",
  maxWidth: "600px",
};

const h1 = {
  color: "#3b82f6",
  fontSize: "24px",
  marginBottom: "20px",
};

const section = {
  backgroundColor: "#18181b",
  borderRadius: "8px",
  padding: "20px",
  marginBottom: "20px",
};

const text = {
  fontSize: "16px",
  lineHeight: "24px",
  color: "#d4d4d8",
};

const messageText = {
  ...text,
  backgroundColor: "#27272a",
  padding: "12px",
  borderRadius: "4px",
  marginTop: "8px",
};
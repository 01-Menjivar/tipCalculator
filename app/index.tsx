import Main from "@/components/Main";
import { EventProvider } from "react-native-outside-press";

export default function Index() {
  return (
    <EventProvider>
      <Main />
    </EventProvider>
  );
}
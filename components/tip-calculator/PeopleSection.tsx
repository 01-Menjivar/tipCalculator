import { Pressable, Text, TextInput } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { useTipCalculator } from "@/contexts/TipCalculatorContext";

export default function PeopleSection() {
  const {
    people,
    setPeople,
    parsedPeople,
    editingPeople,
    setEditingPeople,
  } = useTipCalculator();

  return (
    <>
      <Text className="mb-2 mt-5 text-[13px] font-bold text-[#6d7694]">
        Personas
      </Text>

      {!editingPeople ? (
        <Pressable
          className="rounded-[14px] border border-[#cfd9fb] bg-[#f4f7ff] px-4 py-3.5"
          onPress={() => setEditingPeople(true)}
        >
          <Text className="text-center text-[34px] font-extrabold text-[#101a3e]">
            {parsedPeople > 1 ? parsedPeople : "1"}
          </Text>
        </Pressable>
      ) : (
        <OutsidePressHandler
          className="w-full"
          onOutsidePress={() => setEditingPeople(false)}
        >
          <TextInput
            className="w-full rounded-[14px] border border-[#cfd9fb] bg-[#f8faff] px-4 py-3.5 text-center text-2xl font-bold text-[#111b40]"
            keyboardType="number-pad"
            placeholder="Ej. 3"
            placeholderTextColor="#8a94b8"
            value={people}
            onChangeText={setPeople}
          />
        </OutsidePressHandler>
      )}
    </>
  );
}

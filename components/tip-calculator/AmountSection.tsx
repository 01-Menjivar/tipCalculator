import { Pressable, Text, TextInput } from "react-native";
import OutsidePressHandler from "react-native-outside-press";
import { useTipCalculator } from "@/contexts/TipCalculatorContext";

export default function AmountSection() {
  const {
    amount,
    setAmount,
    parsedAmount,
    editingAmount,
    setEditingAmount,
    formatCurrency,
  } = useTipCalculator();

  return (
    <>
      <Text className="mb-2 mt-5 text-[13px] font-bold text-[#6d7694]">Monto</Text>
      {!editingAmount ? (
        <Pressable
          className="rounded-[14px] border border-[#cfd9fb] bg-[#f4f7ff] px-4 py-3.5"
          onPress={() => setEditingAmount(true)}
        >
          <Text className="text-center text-[34px] font-extrabold text-[#101a3e]">
            {parsedAmount > 0 ? formatCurrency(parsedAmount) : "$0.00"}
          </Text>
        </Pressable>
      ) : (
        <OutsidePressHandler
          className="w-full"
          onOutsidePress={() => setEditingAmount(false)}
        >
          <TextInput
            className="w-full rounded-[14px] border border-[#cfd9fb] bg-[#f8faff] px-4 py-3.5 text-center text-2xl font-bold text-[#111b40]"
            keyboardType="decimal-pad"
            placeholder="Ingresa el monto"
            placeholderTextColor="#8a94b8"
            value={amount}
            onChangeText={setAmount}
          />
        </OutsidePressHandler>
      )}
    </>
  );
}

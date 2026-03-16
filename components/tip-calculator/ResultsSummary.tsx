import { Text, View } from "react-native";
import { useTipCalculator } from "@/contexts/TipCalculatorContext";

export default function ResultsSummary() {
  const { tipValue, perPersonValue, formatCurrency, tipPerPerson } =
    useTipCalculator();

  return (
    <View className="mt-[22px] gap-2 rounded-2xl bg-[#111c42] p-3.5">
      <View className="flex-row items-center justify-between">
        <Text className="font-semibold text-[#b8c3ee]">Propina</Text>
        <Text className="text-lg font-extrabold text-white">
          {formatCurrency(tipValue)}
        </Text>
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="font-semibold text-[#b8c3ee]">
          Propina por persona
        </Text>
        <Text className="text-lg font-extrabold text-white">
          {formatCurrency(tipPerPerson)}
        </Text>
      </View>
      <View className="flex-row items-center justify-between">
        <Text className="font-semibold text-[#b8c3ee]">Por persona</Text>
        <Text className="text-[22px] font-extrabold text-[#9af3cf]">
          {formatCurrency(perPersonValue)}
        </Text>
      </View>
    </View>
  );
}

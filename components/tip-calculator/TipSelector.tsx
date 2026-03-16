import { Pressable, Text, View } from "react-native";
import { useTipCalculator } from "@/contexts/TipCalculatorContext";

const TIP_OPTIONS = [10, 12, 15, 18, 20] as const;

export default function TipSelector() {
  const { tipPercent, setTipPercent } = useTipCalculator();

  return (
    <>
      <Text className="mb-2 mt-5 text-[13px] font-bold text-[#6d7694]">
        Propina
      </Text>
      <View className="mt-2 flex-row flex-wrap gap-2">
        {TIP_OPTIONS.map((tip) => (
          <Pressable
            key={tip}
            className={`min-w-[58px] items-center rounded-full border px-2.5 py-2 ${
              tipPercent === tip
                ? "border-[#141f44] bg-[#141f44]"
                : "border-[#cfd9fb] bg-[#f5f7ff]"
            }`}
            onPress={() => setTipPercent(tip)}
          >
            <Text
              className={
                tipPercent === tip
                  ? "font-bold text-white"
                  : "font-bold text-[#3a466d]"
              }
            >
              {tip}%
            </Text>
          </Pressable>
        ))}
      </View>
    </>
  );
}

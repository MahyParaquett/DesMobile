import { StatusBar } from "expo-status-bar";
import { Animated, StyleSheet, Text, View } from "react-native";
import { useEffect, useRef } from "react";

export default function App() {
  const larAnimada = useRef(new Animated.Value(150)).current;
  const alturaAnimada = useRef(new Animated.Value(150)).current;
  //const opacidadeAnimada = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Animated.sequence([
    //   Animated.timing(opacidadeAnimada, {
    //     toValue: 0.5,
    //     duration: 2000,
    //     useNativeDriver: false,
    //   }),

    //   Animated.parallel([
    //     Animated.timing(larAnimada, {
    //       toValue: 300,
    //       duration: 3000,
    //       useNativeDriver: false,
    //     }),
    //     Animated.timing(alturaAnimada, {
    //       toValue: 300,
    //       duration: 4000,
    //       useNativeDriver: false,
    //     }),
    //   ]),
    // ]).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(larAnimada, {
          toValue: 500,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(larAnimada, {
          toValue: 150,
          duration: 3000,
          useNativeDriver: false,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          width: larAnimada,
          height: alturaAnimada,
          backgroundColor: "blue",
          justifyContent: "center",
          borderRadius: 70,
          //opacity: opacidadeAnimada,
        }}
      >
        <Text style={{ textAlign: "center", color: "white" }}>
          Loading .....
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet, Text, View, Dimensions } from "react-native";
import { useState } from "react";

import Field from "./Field";

const Main = () => {
  const isPortrait = () => {
    let dim = Dimensions.get("screen");
    return dim.height >= dim.width;
  };

  const [orientation, setOrientation] = useState(isPortrait());
  const [count, setCount] = useState("");
  const [result, setResult] = useState("");

  const addAction = (element) => {
    let str = count
    if (element === "/" || element === "*" || element === "-" || element === "+") {
      const countLength = count.length
      if (count[countLength - 1] === "/" || count[countLength - 1] === "*" || count[countLength - 1] === "-" || count[countLength - 1] === "+") {
        str = clearLastChar("return")
      }
    }
    setCount(str + element);
  };

  const clearText = (element) => {
    setCount("");
  };

  const clearLastChar = (element) => {
    const countArr = count.split("");
    const countArrLength = countArr.length;
    let tempString = "";
    countArr.forEach((ele, index) => {
      if (index < countArrLength - 1) {
        tempString += ele;
      }
    });
    if (element === "return") {
      return tempString
    } else {
      setCount(tempString);
    }
  };

  const powerMath = (element) => {
    let resultTemp = "";
    if (element === "Sqrt") {
      resultTemp = Math.sqrt(result);
    } else if (element === "Pow") {
      resultTemp = Math.pow(result, 2);
    } else if (element === "Sin") {
      resultTemp = Math.sin(result);
    } else if (element === "Cos") {
      resultTemp = Math.cos(result);
    }

    setResult(resultTemp);
  };

  const countResult = (element) => {
    const tempResult = eval(count);
    setResult(tempResult);
  };

  Dimensions.addEventListener("change", () => {
    setOrientation(isPortrait());
  });

  return (
    <View style={styles.container}>
      <View style={styles.count}>
        <Text numberOfLines={1} style={styles.textCount}>
          {count}
        </Text>
      </View>
      <View style={styles.result}>
        <Text numberOfLines={1} style={styles.resultText}>
          {result}
        </Text>
      </View>
      <View style={styles.operations}>
        <View
          style={{ flex: 3, flexDirection: "column", alignSelf: "stretch" }}
        >
          <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch" }}>
            <Field container="1" action={addAction} color="#696969" />
            <Field container="2" action={addAction} color="#696969" />
            <Field container="3" action={addAction} color="#696969" />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch" }}>
            <Field container="4" action={addAction} color="#696969" />
            <Field container="5" action={addAction} color="#696969" />
            <Field container="6" action={addAction} color="#696969" />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch" }}>
            <Field container="7" action={addAction} color="#696969" />
            <Field container="8" action={addAction} color="#696969" />
            <Field container="9" action={addAction} color="#696969" />
          </View>
          <View style={{ flex: 1, flexDirection: "row", alignSelf: "stretch" }}>
            <Field container="." action={addAction} color="#696969" />
            <Field container="0" action={addAction} color="#696969" />
            <Field container="=" action={countResult} color="#696969" />
          </View>
        </View>
        {orientation === false ? (
          <View style={{ flex: 1 }}>
            <Field container="Sqrt" action={powerMath} color="#B8B8B8" />
            <Field container="Pow" action={powerMath} color="#B8B8B8" />
            <Field container="Sin" action={powerMath} color="#B8B8B8" />
            <Field container="Cos" action={powerMath} color="#B8B8B8" />
          </View>
        ) : (
          ""
        )}

        <View style={{ flex: 1 }}>
          <Field container="Del" action={clearLastChar} color="#3DFFFC" />
          <Field container="C" action={clearText} color="#3DFFFC" />
          <Field container="/" action={addAction} color="#3DFFFC" />
          <Field container="*" action={addAction} color="#3DFFFC" />
          <Field container="-" action={addAction} color="#3DFFFC" />
          <Field container="+" action={addAction} color="#3DFFFC" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
  },

  count: {
    flex: 3,
    backgroundColor: "#fff",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  textCount: {
    fontSize: 40,
  },

  result: {
    flex: 2,
    backgroundColor: "#f0f0f5",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },

  resultText: {
    fontSize: 40,
  },

  operations: {
    flex: 10,
    backgroundColor: "red",
    flexDirection: "row",
    alignSelf: "stretch",
  },
});

export default Main;

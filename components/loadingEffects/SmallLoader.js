import React from "react";
import { Animated, Easing,View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

export default class SmallLoader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.loop(
      Animated.timing(this.state.progress, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }

  render() {
    return (
      <View style={[styles.loading]}>
        <LottieView
          source={require("../../assets/lf30_editor_edu4v6el.json")}
          progress={this.state.progress}
          style={{ width: 100 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  loading: {
    alignItems: "center",
    justifyContent: "center",
  },
});

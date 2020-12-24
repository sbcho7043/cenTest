import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Container, Header, Content } from "native-base";

class Menu4 extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        {/* <Header title="Menu4" /> */}
        <Content>
          <View style={styles.content}>
            <Text style={styles.text}>menu4입니다</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center",
  },
  text: {
    margin: 10,
  }
});

export default Menu4;
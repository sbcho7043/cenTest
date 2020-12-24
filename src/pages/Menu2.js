import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Container, Header, Content } from "native-base";

class Menu2 extends React.Component {
  state = {};

  render() {
    return (
      <Container>
        {/* <Header title="Menu2" /> */}
        <Content>
          <View style={styles.content}>
            <Text>menu2입니다</Text>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    paddingTop: 50,
  }
});

export default Menu2;
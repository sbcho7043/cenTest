import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, Container, Header, Content } from "native-base";

class HomeScreen extends React.Component {
  state = {};

  render() {
    console.log(this.props);
    return (
      <Container>
        {/* <Header title="Home" /> */}
        <Content>
          <View style={styles.content}>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('menu1')}>● menu1</Text>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('menu2')}>● menu2</Text>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('menu3')}>● menu3</Text>
            <Text style={styles.text} onPress={() => this.props.navigation.navigate('menu4')}>● menu4</Text>
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

export default HomeScreen;
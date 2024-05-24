import { StyleSheet } from "react-native"
import { getFontFamily } from "../../assets/fonts/helper"

const styles = StyleSheet.create({
    titleText: {
        fontFamily: getFontFamily("Inter", "600"),
        fontSize: 24,
        color: "#022150"
    }
})


export default styles
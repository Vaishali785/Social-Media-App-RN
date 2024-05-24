import { StyleSheet } from "react-native";
import { getFontFamily } from "../../assets/fonts/helper";

const styles = StyleSheet.create({
    userContainer: { flexDirection: "row" },
    userTextContainer: { marginLeft: 10 },
    user: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" },
    userName: {
        color: "black",
        fontFamily: getFontFamily("Inter", "600"),
        fontSize: 16
    },
    location: {
        color: "#79869f",
        fontFamily: getFontFamily("Inter", "400"),
        fontSize: 12,
        marginTop: 5
    },
    postImage: {
        alignItems: 'center',
        marginVertical: 20,
        borderRadius: 20,
        overflow: "hidden"
    },
    image: {
        width: "100%"
    },
    userPostContainer: {
        marginTop: 35,
        borderBottomWidth: 1,
        paddingBottom: 20,
        borderBottomColor: "#eff2f6"
    },
    userPostStats: { flexDirection: "row", marginLeft: 10, gap: 27 },
    userPostStatsButton: { flexDirection: "row" },
    userPostStatsText: { marginLeft: 3, color: "#79869f" }

})

export default styles